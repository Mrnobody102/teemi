/**
 * Tiện ích dùng chung cho schema — không chứa bảng nào.
 *
 * Nguồn chân lý: docs/plan/04-data-model-va-co-che.md §1.
 * Mọi thứ ở đây là tầng CSDL thuần, không phụ thuộc hướng sản phẩm (web/native).
 */

import { customType } from "drizzle-orm/pg-core";

/**
 * `bytea` — Drizzle không có sẵn kiểu này nên phải khai báo tay.
 * Dùng cho các cột băm: `device.token_hash`, `card_open.opener_hash`.
 * Quy tắc nghiệp vụ: KHÔNG BAO GIỜ lưu giá trị gốc, chỉ lưu sha256.
 */
export const bytea = customType<{ data: Uint8Array; driverData: Buffer }>({
  dataType() {
    return "bytea";
  },
});

/** Giá trị JSON hợp lệ — dùng thay cho `any` ở các cột `jsonb`. */
export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

/** Đối tượng JSON — dạng hay gặp nhất của các cột `jsonb` trong hồ sơ này. */
export type JsonObject = { [key: string]: JsonValue };
