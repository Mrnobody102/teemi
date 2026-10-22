/**
 * Teemi — điểm vào duy nhất của phần code dùng chung.
 *
 * Toàn bộ những gì export ở đây phải là **schema CSDL** hoặc **logic nghiệp vụ
 * thuần** (hàm không I/O, không phụ thuộc framework). Hướng sản phẩm — app
 * native hay web app — chưa chốt, nên mọi thứ dưới đây phải chạy y hệt ở cả
 * hai hướng. Không import React, không import Next.js, không import bất cứ thứ
 * gì gắn với một runtime cụ thể.
 */

// Schema Drizzle: bảng, enum, kiểu suy ra từ bảng.
export * from "./db/schema";

// Logic nghiệp vụ thuần: ngày của sổ (04:00 ICT), A_eff, ngưỡng k, van nghỉ,
// chuỗi, trạng thái sổ, sinh mã sổ, danh mục event.
export * from "./core/index";

// Interface storage không gắn provider. Implementation R2 nằm ở app/server sau.
export * from "./storage/adapter";

// Interface danh tính để không khóa sản phẩm vào localStorage đơn thuần.
export * from "./identity/adapter";
