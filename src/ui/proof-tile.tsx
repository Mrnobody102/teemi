import { Photo } from "./photo";
import type { ProofLabel } from "../mock/book";

/**
 * Một ô ảnh trong hàng HÔM NAY.
 *
 * Hàng này CHỈ render người đã nộp — không placeholder, không ô xám có tên,
 * không mẫu số "3/5". Người chưa nộp phải vô hình (nguyên tắc P2).
 */
export function ProofTile({
  name,
  label,
  seed,
  blurred = false,
}: {
  name: string;
  label: ProofLabel;
  seed: string;
  blurred?: boolean;
}) {
  return (
    <div className="w-full">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-surface">
        <Photo seed={seed} className={blurred ? "blur-public scale-110" : ""} />
      </div>
      <div className="mt-1.5 flex items-baseline justify-between gap-1 px-0.5">
        <span className="truncate text-[13px] text-ink">{name}</span>
        <span className={`shrink-0 text-[13px] ${label === "done" ? "text-done" : "text-toang"}`}>
          {label === "done" ? "✓" : "💀"}
        </span>
      </div>
    </div>
  );
}
