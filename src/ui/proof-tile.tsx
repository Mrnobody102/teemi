import { Photo } from "./photo";
import { IconCheck, IconSkull } from "./doodle";
import type { ProofLabel } from "../mock/book";

/**
 * Một ô ảnh trong hàng HÔM NAY — khung polaroid.
 *
 * Ảnh nằm TRONG khung; băng dính dán trên MÉP KHUNG. Không có gì đè lên ảnh:
 * ảnh của bạn mình là nội dung, không phải nền để trang trí.
 *
 * Hàng này CHỈ render người đã nộp — không placeholder, không ô xám có tên,
 * không mẫu số "3/5". Người chưa nộp phải vô hình (nguyên tắc P2).
 */
const tilts = ["tilt-l", "tilt-r", "tilt-0"] as const;

export function LabelMark({ label, className = "h-4 w-4" }: { label: ProofLabel; className?: string }) {
  return label === "done" ? (
    <IconCheck className={`${className} text-done`} title="XONG" />
  ) : (
    <IconSkull className={`${className} text-toang`} title="TOANG" />
  );
}

export function ProofTile({
  name,
  label,
  seed,
  index = 0,
}: {
  name: string;
  label: ProofLabel;
  seed: string;
  index?: number;
}) {
  return (
    <div className={`polaroid relative ${tilts[index % tilts.length]}`}>
      {index % 2 === 0 ? <span className="tape" aria-hidden /> : null}
      <div className="aspect-[4/5] overflow-hidden">
        <Photo seed={seed} />
      </div>
      <div className="flex items-center justify-between gap-1 px-0.5 py-1">
        <span className="truncate font-hand text-[17px] leading-none">{name}</span>
        <LabelMark label={label} />
      </div>
    </div>
  );
}
