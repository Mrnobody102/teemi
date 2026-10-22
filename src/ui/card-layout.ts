/**
 * Bố cục lưới ảnh trên card 4:5.
 *
 * Viết thành hàm thuần, tính bằng px, dùng FLEXBOX (không CSS grid) vì card
 * thật sẽ được render ở server bằng satori — satori chỉ hỗ trợ flexbox. Bản xem
 * trước HTML và PNG thật dùng chung đúng một thuật toán.
 *
 * Hai lỗi mà hàm này sửa, cả hai thấy được khi chụp màn hình 22/10:
 *
 * 1. **Chân card bị cắt mất** — card khoá tỉ lệ 4:5 với `overflow:hidden`, ảnh
 *    vuông to quá đẩy dòng "… chốt sổ" và **mã sổ** ra ngoài. Mã sổ là đường
 *    thoát hiểm duy nhất khi Zalo chặn domain (UX-2). Ở đây kích thước ô được
 *    TÍNH từ phần chiều cao còn lại, nên chân card luôn nằm trong khung.
 * 2. **Ô trống** — 3 ảnh trong lưới 2×2 để lại một ô trống, trông như "thiếu một
 *    người", tức vi phạm P2. Ở đây hàng cuối được CĂN GIỮA, không có ô trống.
 *
 * Số cột theo QĐ-30: 1 · 2 · 2 · 3 · 4 cho 1 · 2 · 3–4 · 5–6 · 7–8 người. Trần
 * sổ 8 người nên nhánh 4 cột là bắt buộc.
 */

/** Không gian thiết kế của card, px. PNG thật là 1080×1350 = gấp 3,6 lần. */
export const CARD = {
  width: 300,
  height: 375,
  padding: 14,
  headerHeight: 54,
  footerHeight: 40,
  sectionGap: 10,
  tileGap: 8,
  /** khung polaroid: viền trên/trái/phải + dải tên bên dưới */
  framePad: 4,
  labelHeight: 16,
} as const;

export interface CardGrid {
  readonly cols: number;
  readonly rows: number;
  /** cạnh ảnh vuông, px */
  readonly photo: number;
  /** bề rộng một ô polaroid (ảnh + khung), px */
  readonly tileWidth: number;
  /** chiều cao một ô polaroid (ảnh + khung + dải tên), px */
  readonly tileHeight: number;
  /** vùng dành cho lưới */
  readonly area: { readonly width: number; readonly height: number };
}

export function cardCols(count: number): number {
  if (count <= 1) return 1;
  if (count <= 4) return 2;
  if (count <= 6) return 3;
  return 4;
}

export function cardGrid(count: number): CardGrid {
  const n = Math.max(1, count);
  const cols = cardCols(n);
  const rows = Math.ceil(n / cols);

  const area = {
    width: CARD.width - CARD.padding * 2,
    height:
      CARD.height - CARD.padding * 2 - CARD.headerHeight - CARD.footerHeight - CARD.sectionGap * 2,
  };

  const chrome = CARD.framePad * 2; // viền khung hai bên
  const byWidth = (area.width - CARD.tileGap * (cols - 1)) / cols - chrome;
  const byHeight =
    (area.height - CARD.tileGap * (rows - 1)) / rows - CARD.framePad - CARD.labelHeight;

  // Một ảnh duy nhất mà to hết cỡ thì card trông như ảnh đại diện, không như sổ.
  const photo = Math.floor(Math.min(byWidth, byHeight, 150));

  return {
    cols,
    rows,
    photo,
    tileWidth: photo + chrome,
    tileHeight: photo + CARD.framePad + CARD.labelHeight,
    area,
  };
}
