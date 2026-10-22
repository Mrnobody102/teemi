/**
 * Tấm proof và ngày tổng hợp bất biến — 04 §1.4-§1.5.
 */

import { sql } from "drizzle-orm";
import { boolean, check, date, index, integer, pgTable, primaryKey, smallint, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

import { book } from "./book.js";
import { proofStatus } from "./enums.js";
import { person } from "./person.js";

export const proof = pgTable(
  "proof",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    bookId: uuid("book_id")
      .notNull()
      .references(() => book.id, { onDelete: "cascade" }),
    personId: uuid("person_id")
      .notNull()
      .references(() => person.id, { onDelete: "cascade" }),
    clientProofId: uuid("client_proof_id").notNull(),
    intentAt: timestamp("intent_at", { withTimezone: true, mode: "date" }),
    submittedAt: timestamp("submitted_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
    bookDate: date("book_date", { mode: "date" }).generatedAlwaysAs(
      sql`ict_book_date(case when "intent_at" is not null and "submitted_at" - "intent_at" <= interval '120 seconds' then "intent_at" else "submitted_at" end)`,
    ),
    status: proofStatus("status").notNull(),
    origKey: text("orig_key"),
    thumbKey: text("thumb_key"),
    bytesOrig: integer("bytes_orig"),
    origExpiresAt: timestamp("orig_expires_at", { withTimezone: true, mode: "date" }),
    replacedCount: smallint("replaced_count").notNull().default(0),
    deletedAt: timestamp("deleted_at", { withTimezone: true, mode: "date" }),
    deletedBy: uuid("deleted_by").references(() => person.id),
    hiddenAt: timestamp("hidden_at", { withTimezone: true, mode: "date" }),
  },
  (t) => [
    uniqueIndex("proof_one_per_person_day_uq").on(t.bookId, t.personId, t.bookDate),
    uniqueIndex("proof_client_uq").on(t.clientProofId),
    index("proof_book_day_idx").on(t.bookId, t.bookDate.desc()).where(sql`"deleted_at" is null and "hidden_at" is null`),
    index("proof_active_idx").on(t.bookId, t.personId, t.bookDate.desc()).where(sql`"deleted_at" is null`),
    index("proof_ttl_idx").on(t.origExpiresAt).where(sql`"orig_key" is not null`),
    check("proof_bytes_sane", sql`"bytes_orig" is null or "bytes_orig" <= 800000`),
  ],
);

export const bookDay = pgTable(
  "book_day",
  {
    bookId: uuid("book_id")
      .notNull()
      .references(() => book.id, { onDelete: "cascade" }),
    bookDate: date("book_date", { mode: "date" }).notNull(),
    dayNumber: integer("day_number").notNull(),
    activeCount: smallint("active_count").notNull(),
    rosterSize: smallint("roster_size").notNull(),
    kRequired: smallint("k_required").notNull(),
    presentCount: smallint("present_count").notNull(),
    xongCount: smallint("xong_count").notNull(),
    toangCount: smallint("toang_count").notNull(),
    isFullTable: boolean("is_full_table").notNull(),
    isFrozen: boolean("is_frozen").notNull().default(false),
    dayCounts: boolean("day_counts").notNull(),
    misses7d: smallint("misses_7d").notNull(),
    streakAfter: integer("streak_after").notNull(),
    proofTotalAfter: integer("proof_total_after").notNull(),
    finalizedAt: timestamp("finalized_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
  },
  (t) => [
    primaryKey({ columns: [t.bookId, t.bookDate] }),
    index("book_day_recent_idx").on(t.bookId, t.bookDate.desc()),
  ],
);
