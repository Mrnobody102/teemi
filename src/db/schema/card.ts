/**
 * Card chia sẻ và lượt mở card — 04 §1.6 + 11 §1.
 */

import { sql } from "drizzle-orm";
import { date, index, integer, pgTable, primaryKey, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

import { bytea } from "./_shared.js";
import { book } from "./book.js";
import { person } from "./person.js";

export const card = pgTable(
  "card",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    bookId: uuid("book_id")
      .notNull()
      .references(() => book.id, { onDelete: "cascade" }),
    bookDate: date("book_date", { mode: "date" }).notNull(),
    renderedBy: uuid("rendered_by")
      .notNull()
      .references(() => person.id),
    renderedAt: timestamp("rendered_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
    imageKey: text("image_key"),
    nextCloser: uuid("next_closer").references(() => person.id),
    shareToken: text("share_token").notNull(),
    shareExpiresAt: timestamp("share_expires_at", { withTimezone: true, mode: "date" })
      .notNull()
      .default(sql`now() + interval '7 days'`),
    openCount: integer("open_count").notNull().default(0),
    // Nonce bắt buộc để URL card không thể "đi bộ theo ngày" từ một card bị forward.
    assetNonce: text("asset_nonce").notNull().default(sql`encode(gen_random_bytes(8),'hex')`),
    personIds: uuid("person_ids")
      .array()
      .notNull()
      .default(sql`'{}'::uuid[]`),
    rerenderedAt: timestamp("rerendered_at", { withTimezone: true, mode: "date" }),
  },
  (t) => [
    uniqueIndex("card_one_per_day_uq").on(t.bookId, t.bookDate),
    uniqueIndex("card_share_uq").on(t.shareToken),
  ],
);

export const cardOpen = pgTable(
  "card_open",
  {
    cardId: uuid("card_id")
      .notNull()
      .references(() => card.id, { onDelete: "cascade" }),
    personId: uuid("person_id").references(() => person.id),
    openerHash: bytea("opener_hash").notNull(),
    openedAt: timestamp("opened_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
  },
  (t) => [
    primaryKey({ columns: [t.cardId, t.openerHash] }),
    index("card_open_time_idx").on(t.cardId, t.openedAt),
  ],
);
