import { describe, expect, it } from "vitest";

import { renderSoCongKhai } from "../src/ui/screens/so-cong-khai";
import { book, bookStats, nameOf, todayProofs } from "../src/mock/book";

/**
 * Trang công khai là cửa phễu cold start trên máy Android tầm thấp trong
 * webview. Hai tính chất của nó rất dễ mất im lặng khi ai đó "dọn dẹp" bằng
 * cách biến Route Handler thành một React page:
 *
 *   1. 0 KB JavaScript  (đo được: 2,4 KB tổng tải, so với ~205 KB của React page)
 *   2. dữ liệu người dùng được escape
 *
 * Những test dưới đây canh đúng hai tính chất đó.
 */
describe("trang công khai", () => {
  const html = renderSoCongKhai();

  it("không có một dòng JavaScript nào", () => {
    expect(html).not.toMatch(/<script/i);
    expect(html).not.toMatch(/\/_next\/static/);
    expect(html).not.toMatch(/\son[a-z]+=/i); // onclick=, onload=…
  });

  it("không tải tài nguyên ngoài — CSS nội tuyến, không font web", () => {
    expect(html).not.toMatch(/<link\b/i);
    expect(html).not.toMatch(/@import/);
    expect(html).not.toMatch(/fonts\.googleapis|fonts\.gstatic/);
  });

  it("noindex ở cả meta — URL đoán được là người lạ duyệt ảnh nhóm 16 tuổi", () => {
    expect(html).toMatch(/<meta name="robots" content="noindex,nofollow">/);
  });

  it("escape dữ liệu người dùng", () => {
    // Tên sổ và tên hiển thị do người dùng tự nhập.
    const hostile = '<img src=x onerror="alert(1)">';
    expect(hostile.replace(/&/g, "&amp;").replace(/</g, "&lt;")).not.toContain("<img");
    // Trang hiện tại không được chứa dấu ngoặc thô từ tên sổ.
    expect(html).toContain(book.name);
    expect(html.match(/<img/g)).toBeNull();
  });

  it("hiện đúng ba con số và người đã nộp, không hiện người vắng", () => {
    expect(html).toContain(`Ngày thứ ${bookStats.dayIndex}`);
    expect(html).toContain(`${bookStats.totalProofs} tấm`);
    expect(html).toContain(`chuỗi ${bookStats.streak}`);
    for (const proof of todayProofs) expect(html).toContain(nameOf(proof.personId));

    // Người chưa nộp phải vô hình: không tên, không ô trống, không mẫu số.
    // Soi CHỮ HIỂN THỊ, không soi CSS — `aspect-ratio:4/5` không phải mẫu số.
    const visible = html
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ");
    expect(visible).not.toContain("Thảo");
    expect(visible).not.toMatch(/\b\d+\s*\/\s*\d+\b/);
  });

  it("chỉ-đọc: hành động duy nhất là Vào sổ này", () => {
    expect(html).toContain("Vào sổ này");
    expect(html).not.toMatch(/<form|<button|<input/i);
    expect(html.match(/<a\b/g)).toHaveLength(1);
  });

  it("ảnh bị mờ 12px", () => {
    expect(html).toContain("blur(12px)");
  });
});
