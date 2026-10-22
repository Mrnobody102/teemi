import Link from "next/link";
import { Photo } from "../photo";
import { bookStats, me, nameOf, todayProofs } from "../../mock/book";

/**
 * Màn 5 — Ảnh chi tiết.
 *
 * Đây là **nơi DUY NHẤT** chứa Báo cáo + Chặn, và `05` §8.4 bắt buộc phải có.
 * Nếu màn này bị gộp thành overlay thì overlay vẫn phải giữ đủ ba nút.
 */
export function ScreenAnhChiTiet({ personId }: { personId?: string }) {
  const proof = todayProofs.find((p) => p.personId === personId) ?? todayProofs[0];
  if (!proof) return null;

  const isMine = proof.personId === me.id;

  return (
    <div className="flex min-h-full flex-col">
      <header className="flex items-center justify-between border-b border-line px-4 py-3">
        <Link href="/" className="text-[15px] text-muted" aria-label="Quay lại">
          ←
        </Link>
        <span className="text-[15px] text-muted">⋮</span>
      </header>

      <div className="px-4 py-4">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-xl border border-line">
          <Photo seed={`${proof.personId}-${bookStats.dayIndex}`} />
        </div>
        {/* Không hiện GIỜ nộp — nó biến "nộp lúc 23:58" thành một dữ kiện để
            cà khịa, và màn 6 đã hứa là nhóm không thấy giờ nộp. */}
        <p className="mt-3 text-center text-[14px]">
          {nameOf(proof.personId)} · 12/09 ·{" "}
          <span className={proof.label === "done" ? "text-done" : "text-toang"}>
            {proof.label === "done" ? "✓" : "💀"}
          </span>
        </p>
      </div>

      <div className="mt-auto border-t border-line">
        <div className="px-4 py-2.5 text-[11px] font-semibold tracking-widest text-muted">
          MENU ⋮
        </div>
        <button type="button" className="block w-full border-t border-line px-4 py-3.5 text-left text-[15px]">
          Báo cáo ảnh này
        </button>
        <button type="button" className="block w-full border-t border-line px-4 py-3.5 text-left text-[15px]">
          Chặn người này
        </button>
        {isMine ? (
          <button type="button" className="block w-full border-t border-line px-4 py-3.5 text-left text-[15px]">
            Xoá ảnh của tôi
          </button>
        ) : null}
        <p className="border-t border-line px-4 py-3 text-[12px] leading-relaxed text-muted">
          Ảnh bị báo cáo sẽ ẩn với cả sổ ngay lập tức, trước khi có người xem xét.
        </p>
      </div>
    </div>
  );
}
