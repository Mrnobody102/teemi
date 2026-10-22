/**
 * Báo cáo, chặn, audit và bằng chứng moderation — 04 §1.7.
 */

import { sql } from "drizzle-orm";
import { bigserial, check, date, index, inet, jsonb, pgTable, primaryKey, text, timestamp, uuid } from "drizzle-orm/pg-core";

import type { JsonObject } from "./_shared";
import { book } from "./book";
import { reportAction, reportReason } from "./enums";
import { person } from "./person";
import { proof } from "./proof";

export const report = pgTable(
  "report",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    proofId: uuid("proof_id").references(() => proof.id, { onDelete: "set null" }),
    bookId: uuid("book_id")
      .notNull()
      .references(() => book.id, { onDelete: "cascade" }),
    reporterId: uuid("reporter_id").references(() => person.id, { onDelete: "set null" }),
    reason: reportReason("reason").notNull(),
    note: text("note"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
    slaDueAt: timestamp("sla_due_at", { withTimezone: true, mode: "date" }).generatedAlwaysAs(sql`"created_at" + interval '48 hours'`),
    resolvedAt: timestamp("resolved_at", { withTimezone: true, mode: "date" }),
    action: reportAction("action"),
  },
  (t) => [
    index("report_open_idx").on(t.slaDueAt).where(sql`"resolved_at" is null`),
    check("report_note_len", sql`"note" is null or char_length("note") <= 500`),
  ],
);

export const auditLog = pgTable(
  "audit_log",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    at: timestamp("at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
    personId: uuid("person_id").references(() => person.id, { onDelete: "set null" }),
    bookId: uuid("book_id").references(() => book.id, { onDelete: "set null" }),
    action: text("action").notNull(),
    ipTrunc: inet("ip_trunc"),
    uaFamily: text("ua_family"),
    detail: jsonb("detail").$type<JsonObject>(),
    retainUntil: date("retain_until", { mode: "date" }).notNull().default(sql`(now() + interval '25 months')::date`),
  },
  (t) => [
    index("audit_log_at_idx").on(t.at.desc()),
    index("audit_log_person_idx").on(t.personId, t.at.desc()),
  ],
);

export const block = pgTable(
  "block",
  {
    blockerId: uuid("blocker_id")
      .notNull()
      .references(() => person.id, { onDelete: "cascade" }),
    blockedId: uuid("blocked_id")
      .notNull()
      .references(() => person.id, { onDelete: "cascade" }),
    bookId: uuid("book_id")
      .notNull()
      .references(() => book.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.blockerId, t.blockedId, t.bookId] })],
);

export const moderationEvidence = pgTable(
  "moderation_evidence",
  {
    proofId: uuid("proof_id").notNull(),
    reportId: uuid("report_id")
      .notNull()
      .references(() => report.id, { onDelete: "cascade" }),
    objectKey: text("object_key").notNull(),
    retainUntil: date("retain_until", { mode: "date" }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.reportId, t.proofId] })],
);
