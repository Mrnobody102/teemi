import { describe, expect, it } from "vitest";

/**
 * Test khói: chỉ để xác nhận bộ công cụ (TypeScript strict + Vitest) chạy được.
 * Xoá file này khi đã có test nghiệp vụ thật trong `tests/`.
 */
describe("toolchain", () => {
  it("chạy được test TypeScript", () => {
    expect(1 + 1).toBe(2);
  });

  // Mọi mốc thời gian nghiệp vụ quy về giờ Việt Nam (UTC+7), một múi giờ duy nhất.
  it("chạy trong múi giờ Việt Nam", () => {
    expect(process.env["TZ"]).toBe("Asia/Ho_Chi_Minh");
  });
});
