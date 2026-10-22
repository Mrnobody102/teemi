/**
 * Sổ, thành viên, kèo — 04 §1.3.
 */

import { sql } from "drizzle-orm";
import { boolean, char, check, date, index, integer, pgTable, primaryKey, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

import { bookStatus, memberStatus } from "./enums";
import { person } from "./person";

export const book = pgTable(
  "book",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    code: char("code", { length: 6 }).notNull(),
    name: text("name").notNull(),
    createdBy: uuid("created_by")
      .notNull()
      .references(() => person.id),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
    startedOn: date("started_on", { mode: "date" }).notNull(),
    status: bookStatus("status").notNull().default("forming"),
    statusSince: timestamp("status_since", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
    branch: char("branch", { length: 1 }).notNull().default("A"),
    rotationIdx: integer("rotation_idx").notNull().default(0),
    archivedAt: timestamp("archived_at", { withTimezone: true, mode: "date" }),
  },
  (t) => [
    uniqueIndex("book_code_uq").on(t.code),
    index("book_status_idx").on(t.status, t.statusSince),
    check("book_code_fmt", sql`"code" ~ '^[2-9ACDEFGHJKMNPQRTUVWXY]{6}$'`),
    check("book_name_len", sql`char_length("name") between 1 and 24`),
    check("book_branch_ok", sql`"branch" in ('A','B')`),
  ],
);

export const membership = pgTable(
  "membership",
  {
    bookId: uuid("book_id")
      .notNull()
      .references(() => book.id, { onDelete: "cascade" }),
    personId: uuid("person_id")
      .notNull()
      .references(() => person.id, { onDelete: "cascade" }),
    status: memberStatus("status").notNull().default("invited"),
    statusSince: timestamp("status_since", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
    joinedAt: timestamp("joined_at", { withTimezone: true, mode: "date" }),
    leftAt: timestamp("left_at", { withTimezone: true, mode: "date" }),
    invitedBy: uuid("invited_by").references(() => person.id),
    rotationPos: integer("rotation_pos").notNull(),
    keepProofsOnLeave: boolean("keep_proofs_on_leave").notNull().default(true),
    // Cột giữ từ commit đầu để mở UI "tạm nghỉ" sau, nhưng MVP-0 chưa có UI đó.
    pausedUntil: timestamp("paused_until", { withTimezone: true, mode: "date" }),
  },
  (t) => [
    primaryKey({ columns: [t.bookId, t.personId] }),
    index("membership_person_idx").on(t.personId).where(sql`"status" = 'active'`),
    index("membership_book_idx").on(t.bookId, t.status),
  ],
);

export const goal = pgTable(
  "goal",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    bookId: uuid("book_id")
      .notNull()
      .references(() => book.id, { onDelete: "cascade" }),
    personId: uuid("person_id")
      .notNull()
      .references(() => person.id, { onDelete: "cascade" }),
    goalText: text("goal_text").notNull(),
    isCustom: boolean("is_custom").notNull().default(false),
    effectiveFrom: date("effective_from", { mode: "date" }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("goal_current_uq").on(t.bookId, t.personId, t.effectiveFrom),
    index("goal_lookup_idx").on(t.bookId, t.personId, t.effectiveFrom.desc()),
    check("goal_len", sql`char_length("goal_text") between 1 and 30`),
  ],
);
