import { Photo } from "../photo";
import { LabelMark } from "../proof-tile";
import { Shell } from "../shell";
import { bookStats, me, nameOf, todayProofs } from "../../mock/book";

/**
 * Màn 5 — Ảnh chi tiết.
 *
 * Nơi **DUY NHẤT** chứa Báo cáo + Chặn (`05` §8.4 bắt buộc). Phần menu là "70%
 * sạch": font hệ thống, không doodle — đây là chỗ người ta đến khi có chuyện
 * không vui, không phải chỗ để đùa.
 */
export function ScreenAnhChiTiet({ personId }: { personId?: string }) {
  const proof = todayProofs.find((p) => p.personId === personId) ?? todayProofs[0];
  if (!proof) return null;
  const isMine = proof.personId === me.id;

  return (
    <Shell back="/so">
      <div className="px-8 pt-2">
        <div className="polaroid tilt-0 mx-auto max-w-[300px]">
          <div className="aspect-[4/5] overflow-hidden">
            <Photo seed={`${proof.personId}-${bookStats.dayIndex}`} />
          </div>
          {/* Không hiện GIỜ nộp — "nộp lúc 23:58" thành dữ kiện để cà khịa, và
              màn 6 đã hứa nhóm không thấy giờ nộp. */}
          <div className="flex items-center justify-center gap-2 py-2.5">
            <span className="font-hand text-[22px] leading-none">{nameOf(proof.personId)}</span>
            <span className="text-[13px] text-muted">· 12/09 ·</span>
            <LabelMark label={proof.label} className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="mx-4 mt-6 overflow-hidden rounded-lg border border-line bg-frame">
        <button type="button" className="block min-h-12 w-full px-4 py-3 text-left text-[15px]">
          Báo cáo ảnh này
        </button>
        <button type="button" className="block min-h-12 w-full border-t border-line px-4 py-3 text-left text-[15px]">
          Chặn người này
        </button>
        {isMine ? (
          <button type="button" className="block min-h-12 w-full border-t border-line px-4 py-3 text-left text-[15px]">
            Xoá ảnh của tôi
          </button>
        ) : null}
      </div>
      <p className="px-4 pt-3 pb-6 text-[12px] leading-relaxed text-muted">
        Ảnh bị báo cáo sẽ ẩn với cả sổ ngay lập tức, trước khi có người xem xét.
      </p>
    </Shell>
  );
}
