/**
 * NGƯỜI và THIẾT BỊ — 04 §1.2.
 */

import { sql } from "drizzle-orm";
import { boolean, check, index, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

import { bytea } from "./_shared";

/**
 * `person` — một con người trong sản phẩm. CỐ Ý không gọi là "user":
 * không có tài khoản, không có mật khẩu, không có màn Đăng nhập (04 §0).
 *
 * KHÔNG CÓ và sẽ không được thêm: `email`, `phone`, `password_hash`, `oauth_id`,
 * `face_embedding`, `birth_year`, `birth_date`. Đây là quyết định PHÁP LÝ
 * (tối thiểu hoá dữ liệu theo Luật 91/2025 — A47), không phải quyết định lười.
 *
 * Age gate: chỉ một cờ tự khai `is_16_plus` + mốc thời gian `age_gate_at` để chứng minh
 * đã hỏi. Việc KIỂM TRA tuổi làm ở TẦNG ỨNG DỤNG lúc nhập.
 *
 * ⚠️ KHÔNG có CHECK nào gọi `now()` trong bảng này, và không được thêm.
 * Hai CHECK cũ `person_birth_year_sane` và `person_age_gate` ĐÃ BỊ XOÁ VĨNH VIỄN
 * (A48/C18, 04 §11.12): Postgres cấm hàm không-IMMUTABLE trong CHECK ⇒ `CREATE TABLE` sẽ lỗi.
 */
export const person = pgTable(
  "person",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    displayName: text("display_name").notNull(),
    /** Hạt giống vẽ avatar phía client — không phải ảnh, không phải sinh trắc học. */
    avatarSeed: text("avatar_seed")
      .notNull()
      .default(sql`gen_random_uuid()::text`),
    /** Cờ TỰ KHAI ≥16 tuổi. KHÔNG lưu ngày sinh, KHÔNG lưu năm sinh. */
    is16Plus: boolean("is_16_plus").notNull().default(false),
    /** Thời điểm tick cờ tuổi — bằng chứng "đã hỏi", phục vụ hồ sơ pháp lý. */
    ageGateAt: timestamp("age_gate_at", { withTimezone: true, mode: "date" }),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
    lastSeenAt: timestamp("last_seen_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
    /** Soft delete — xoá mềm, hàng vẫn còn để giữ toàn vẹn tham chiếu. */
    deletedAt: timestamp("deleted_at", { withTimezone: true, mode: "date" }),
    /** Đã ẩn danh hoá. KHÔNG HOÀN TÁC ĐƯỢC (04 §6.2). */
    anonymizedAt: timestamp("anonymized_at", { withTimezone: true, mode: "date" }),
  },
  () => [
    // Tên hiển thị 1–24 ký tự. Dùng tên cột trần (không qualify) vì CHECK nội bảng.
    check("person_name_len", sql`char_length("display_name") between 1 and 24`),
  ],
);

/**
 * `device` — một trình duyệt/máy đã nhận danh tính nhẹ.
 *
 * `token_hash` = sha256 của secret nằm trong localStorage phía client.
 * KHÔNG lưu secret gốc: rò rỉ bảng này không được phép biến thành rò rỉ danh tính.
 *
 * Ràng buộc nghiệp vụ không hiện ra trong kiểu dữ liệu:
 * - Trần "1 sổ / thiết bị" ở MVP-0 được thực thi ở TẦNG ỨNG DỤNG, cố ý KHÔNG ở tầng CSDL
 *   (A101/S02/C25). Trần 3 sổ/thiết bị là hằng số đặt trước cho v1.1, CHƯA CÓ HIỆU LỰC.
 * - Token đã thu hồi (`revoked_at` khác null) được phép trùng nhau; chỉ token còn sống
 *   mới phải duy nhất — nên unique index là index BỘ PHẬN.
 */
export const device = pgTable(
  "device",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    personId: uuid("person_id")
      .notNull()
      .references(() => person.id, { onDelete: "cascade" }),
    /** sha256(secret trong localStorage) — KHÔNG lưu secret gốc. */
    tokenHash: bytea("token_hash").notNull(),
    /** 'zalo-webview' | 'chrome-android' | ... — chỉ để debug môi trường webview. */
    uaFamily: text("ua_family"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
    lastSeenAt: timestamp("last_seen_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
    revokedAt: timestamp("revoked_at", { withTimezone: true, mode: "date" }),
  },
  (t) => [
    uniqueIndex("device_token_uq").on(t.tokenHash).where(sql`"revoked_at" is null`),
    index("device_person_idx").on(t.personId),
  ],
);
