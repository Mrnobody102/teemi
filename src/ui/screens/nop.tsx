import Link from "next/link";
import { Photo } from "../photo";

/**
 * Màn 2 — Nộp.
 *
 * UX-1: **nhãn XONG/TOANG chính là nút Gửi.** Không có nút "Gửi" thứ ba —
 * chạm nhãn là nộp xong, kèm thanh Hoàn tác 10 giây. Đây là thứ kéo bước nộp
 * từ 18–22 giây xuống 11–15 giây, tức khác biệt giữa đạt và không đạt mục tiêu.
 *
 * Không caption, không filter, không chỉnh sửa.
 */
export function ScreenNop({ step }: { step: "pick" | "label" }) {
  return (
    <div className="flex min-h-full flex-col">
      <header className="flex items-center gap-3 border-b border-line px-4 py-3">
        <Link href="/" className="text-[15px] text-muted" aria-label="Quay lại">
          ←
        </Link>
        <h1 className="text-[15px] font-medium">Một tấm cho hôm nay</h1>
      </header>

      {step === "pick" ? (
        <>
          <div className="flex flex-1 flex-col justify-center px-4 py-6">
            <Link
              href="/nop?b=1"
              className="flex min-h-[260px] flex-1 items-center justify-center rounded-xl border border-dashed border-line bg-surface text-[17px] font-medium"
            >
              Chọn ảnh
            </Link>
            <button type="button" className="mt-3 text-[14px] text-muted">
              Chụp
            </button>
          </div>
          <div className="border-t border-line px-4 py-3">
            {/* Kèo dạng "không làm X" thì chẳng có gì để chụp. Dòng này gỡ đúng
                nỗi lúng túng đó, và nó cố định, không đổi theo ngày. */}
            <p className="text-[13px] text-muted">Ảnh gì cũng được. Cái nhãn mới là chuyện.</p>
          </div>
        </>
      ) : (
        <>
          <div className="px-4 py-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-xl border border-line">
              <Photo seed="p-thao-34" />
            </div>
          </div>
          <div className="mt-auto border-t border-line px-4 py-4">
            <p className="mb-3 text-center text-[13px] text-muted">Chạm nhãn là gửi luôn.</p>
            <div className="flex gap-2.5">
              <Link
                href="/card"
                className="flex-1 rounded-lg border-2 border-done px-4 py-4 text-center text-[17px] font-semibold text-done"
              >
                XONG ✓
              </Link>
              <Link
                href="/card"
                className="flex-1 rounded-lg border-2 border-toang px-4 py-4 text-center text-[17px] font-semibold text-toang"
              >
                TOANG 💀
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
