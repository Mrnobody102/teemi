/**
 * Cấu hình, analytics, idempotency và rate limit.
 */

import { sql } from "drizzle-orm";
import { bigserial, date, index, integer, jsonb, pgTable, primaryKey, smallint, text, timestamp, uuid } from "drizzle-orm/pg-core";

import type { JsonObject, JsonValue } from "./_shared.js";
import { book } from "./book.js";
import { person } from "./person.js";

export const remoteConfig = pgTable("remote_config", {
  key: text("key").primaryKey(),
  value: jsonb("value").$type<JsonValue>().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
  note: text("note"),
});

export const safetyKeyword = pgTable("safety_keyword", {
  pattern: text("pattern").primaryKey(),
  bucket: text("bucket").notNull(),
});

export const event = pgTable(
  "event",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    name: text("name").notNull(),
    occurredAt: timestamp("occurred_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
    bookDate: date("book_date", { mode: "date" }).generatedAlwaysAs(sql`ict_book_date("occurred_at")`),
    bookId: uuid("book_id"),
    personId: uuid("person_id"),
    sessionId: uuid("session_id"),
    props: jsonb("props").$type<JsonObject>().notNull().default(sql`'{}'::jsonb`),
    schemaVer: smallint("schema_ver").notNull().default(1),
  },
  (t) => [
    index("event_name_time_idx").on(t.name, t.occurredAt.desc()),
    index("event_book_idx").on(t.bookId, t.bookDate),
    index("event_time_brin").using("brin", t.occurredAt),
  ],
);

export const exitSurvey = pgTable("exit_survey", {
  personId: uuid("person_id").references(() => person.id, { onDelete: "set null" }),
  bookId: uuid("book_id").references(() => book.id, { onDelete: "set null" }),
  choice: text("choice").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
});

export const requestIdem = pgTable(
  "request_idem",
  {
    key: text("key").primaryKey(),
    personId: uuid("person_id"),
    endpoint: text("endpoint").notNull(),
    statusCode: smallint("status_code").notNull(),
    response: jsonb("response").$type<JsonObject>(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
  },
  (t) => [index("request_idem_gc_idx").on(t.createdAt)],
);

export const rateBucket = pgTable(
  "rate_bucket",
  {
    subjectType: text("subject_type").notNull(),
    subjectId: text("subject_id").notNull(),
    action: text("action").notNull(),
    windowStart: timestamp("window_start", { withTimezone: true, mode: "date" }).notNull(),
    n: integer("n").notNull().default(0),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
  },
  (t) => [
    primaryKey({ columns: [t.subjectType, t.subjectId, t.action, t.windowStart] }),
    index("rate_bucket_gc_idx").on(t.windowStart),
  ],
);

export const remoteConfigSeed = [
  ["day.cutoff_hour", 4, "ranh giới ngày, giờ ICT"],
  ["day.close_time", "21:00", "giờ sổ sẵn sàng chốt, suy ra từ giờ server"],
  ["threshold.k_small", 1, "A_eff <= 2"],
  ["threshold.k_large", 2, "A_eff >= 3; ngưỡng phẳng"],
  ["threshold.active_window", 7, "ngày, để tính A"],
  ["streak.rest_days", 2, "van/cửa sổ 7 ngày trượt"],
  ["proof.orig_ttl_hours", 72, ""],
  ["proof.thumb_px", 320, ""],
  ["proof.upload_grace_sec", 120, "biên nộp muộn kỹ thuật"],
  ["book.member_cap", 8, ""],
  ["book.code_alphabet", "23456789ACDEFGHJKMNPQRTUVWXY", "28 ký tự, QĐ-12"],
  ["card.image_ttl_days", 90, "hết hạn thì thay ảnh tĩnh, không 404"],
  ["legal.visits_amber", 6000, "đèn vàng monthly_visits"],
  ["legal.visits_red", 8500, "đèn đỏ monthly_visits"],
  ["legal.persons_amber", 600, "đèn vàng monthly_active_persons"],
  ["legal.persons_red", 850, "đèn đỏ monthly_active_persons"],
  ["signup_paused", false, "dừng nhận sổ mới, không dừng sổ đang chạy"],
  ["service.paused", false, "công tắc khoá dịch vụ khẩn cấp"],
  ["freeze.dates", [], "Tết freeze: 2027-02-03..2027-02-12 khi bật"],
] as const;
