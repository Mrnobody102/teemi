import Link from "next/link";
import { Photo } from "../photo";
import { DoodleCheck } from "../doodle";
import { book, bookStats, nameOf, todayProofs } from "../../mock/book";

/**
 * Màn 4 — Card chốt sổ. Đây là sản phẩm thật của 90 giây đầu: một tấm ảnh để
 * gửi, không phải một tài khoản.
 *
 * Lưới ảnh phải THÍCH ỨNG theo số người đã nộp (QĐ-30). Trần sổ là 8 người nên
 * bắt buộc có nhánh 2×4 — một lưới 6 ô cố định sẽ im lặng loại 2 người ĐÃ nộp
 * khỏi card, tức vi phạm P2.
 */
function gridCols(count: number): number {
  if (count <= 1) return 1;
  if (count <= 4) return 2;
  if (count <= 6) return 3;
  return 4;
}

export function ScreenCard() {
  const cols = gridCols(todayProofs.length);
  const closer = todayProofs[todayProofs.length - 1];

  return (
    <div className="flex min-h-full flex-col">
      <header className="flex items-center gap-3 border-b border-line px-4 py-3">
        <Link href="/" className="text-[15px] text-muted" aria-label="Quay lại">
          ←
        </Link>
        <h1 className="text-[15px] font-medium">Card tối nay</h1>
      </header>

      <div className="px-4 py-4">
        {/* Card 4:5 — tỉ lệ để dán vào khung chat. OG preview cần thêm một bản
            1200×630 vì mọi nền tảng đều crop về 1,91:1. */}
        <div className="mx-auto aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-xl border border-line bg-surface p-3.5">
          <div className="flex h-full flex-col">
            <div className="text-[13px] font-bold uppercase tracking-wide">{book.name}</div>
            <div className="mt-0.5 text-[11px] text-muted">
              Ngày thứ {bookStats.dayIndex} · {bookStats.totalProofs} tấm · chuỗi {bookStats.streak}
            </div>

            <div
              className="mt-3 grid gap-1.5"
              style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
            >
              {todayProofs.map((proof) => (
                <div key={proof.personId}>
                  <div className="relative aspect-square overflow-hidden rounded">
                    <Photo seed={`${proof.personId}-${bookStats.dayIndex}`} />
                  </div>
                  <div className="mt-0.5 flex items-baseline justify-between gap-0.5">
                    <span className="truncate text-[9px]">{nameOf(proof.personId)}</span>
                    <span className={`text-[9px] ${proof.label === "done" ? "text-done" : "text-toang"}`}>
                      {proof.label === "done" ? "✓" : "💀"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-end justify-between gap-2 pt-3">
              {/* Không có tên người VẮNG, không có mẫu số "3/5" (P2). */}
              <span className="flex items-center gap-1 text-[11px] leading-snug">
                <DoodleCheck className="h-3.5 w-3.5 shrink-0 text-done" />
                {closer ? `${nameOf(closer.personId)} chốt sổ` : "Chưa có tấm nào"}
              </span>
              {/* Mã nằm trong PIXEL của ảnh — đường thoát hiểm duy nhất sống sót
                  nếu Zalo chặn domain (UX-2). Không phải khoá xem trang public. */}
              <span className="font-mono text-[11px] tracking-wider">{book.code}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-line px-4 py-4">
        <button
          type="button"
          className="block w-full rounded-lg bg-accent px-4 py-3 text-center text-[15px] font-medium text-accent-ink"
        >
          Chia sẻ vào Zalo
        </button>
        <div className="mt-2.5 flex gap-2.5">
          <button type="button" className="flex-1 rounded-lg border border-line px-4 py-3 text-[14px]">
            Lưu ảnh
          </button>
          <button type="button" className="flex-1 rounded-lg border border-line px-4 py-3 text-[14px]">
            Chép lời mời
          </button>
        </div>
        {/* Thang dự phòng bắt buộc: `navigator.share` KHÔNG chạy trong bất kỳ
            in-app webview Android nào — lỗi của Android, đổi kênh không cứu được. */}
        <p className="mt-2.5 text-[12px] leading-relaxed text-muted">
          Nút chia sẻ không hiện? Nhấn giữ vào card rồi chọn Lưu ảnh.
        </p>
      </div>
    </div>
  );
}
