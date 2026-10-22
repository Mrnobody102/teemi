import { describe, expect, it } from "vitest";

import { CARD, cardCols, cardGrid } from "../src/ui/card-layout";

describe("bố cục card", () => {
  it("số cột đúng QĐ-30: 1 · 2 · 2 · 3 · 4", () => {
    expect([1, 2, 3, 4, 5, 6, 7, 8].map(cardCols)).toEqual([1, 2, 2, 2, 3, 3, 4, 4]);
  });

  // Fixture 1..8 người — doc bắt buộc có fixture 8 người (trần sổ).
  for (let n = 1; n <= 8; n += 1) {
    it(`${n} người: lưới nằm gọn trong vùng của nó, chân card không bị đẩy ra`, () => {
      const g = cardGrid(n);
      const width = g.cols * g.tileWidth + (g.cols - 1) * CARD.tileGap;
      const height = g.rows * g.tileHeight + (g.rows - 1) * CARD.tileGap;
      expect(width).toBeLessThanOrEqual(g.area.width);
      expect(height).toBeLessThanOrEqual(g.area.height);
      expect(g.cols * g.rows).toBeGreaterThanOrEqual(n);
    });
  }

  it("8 người vẫn đủ to để nhận ra là ảnh, không thành chấm", () => {
    expect(cardGrid(8).photo).toBeGreaterThanOrEqual(48);
  });

  it("đông người thì ảnh nhỏ đi, không bao giờ to ra", () => {
    const sizes = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => cardGrid(n).photo);
    for (let i = 1; i < sizes.length; i += 1) {
      expect(sizes[i]).toBeLessThanOrEqual(sizes[i - 1] as number);
    }
  });

  it("tổng chiều cao card cộng lại không vượt 4:5", () => {
    const used =
      CARD.padding * 2 + CARD.headerHeight + CARD.footerHeight + CARD.sectionGap * 2 + cardGrid(8).area.height;
    expect(used).toBeLessThanOrEqual(CARD.height);
    expect(CARD.width / CARD.height).toBeCloseTo(4 / 5);
  });
});
