/**
 * Doodle — phần "30% cá tính" của luật DOC 2 §18.1.
 *
 * Ràng buộc (docs/design/01 §6): inline SVG nét vẽ, dùng `currentColor` để tự
 * đúng ở cả hai theme, ≤1,5 KB mỗi hình, tối đa 2 hình một màn, và **không bao
 * giờ animate trên đường nộp proof**.
 *
 * Chỉ được xuất hiện ở ba chỗ: trạng thái trống · kết season · chân card.
 * Tuyệt đối không đè lên ảnh của người thật — ảnh là nội dung, không phải nền.
 *
 * Nhân vật là doodle gốc lấy cảm hứng anime, không copy IP (DOC 2 §18.4).
 */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Con mèo lười ngồi chờ — dùng cho ngày chưa ai nộp tấm nào. */
export function DoodleWaiting({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 56" className={className} aria-hidden role="presentation">
      <g {...stroke}>
        <path d="M18 44c-1-7 .5-13 4-16" />
        <path d="M46 44c1-7-.5-13-4-16" />
        <path d="M22 28c0-6 4.5-10 10-10s10 4 10 10c0 7-4 11-10 11s-10-4-10-11z" />
        <path d="M25 20l-2-7 6 3M39 20l2-7-6 3" />
        <path d="M28 27.5h.01M36 27.5h.01" strokeWidth={2.6} />
        <path d="M30 32c1 1.2 3 1.2 4 0" />
        <path d="M16 44h32" />
        <path d="M48 44c4 0 6-2 6-5s-2-4-4-3" />
      </g>
    </svg>
  );
}

/** Dấu tích vẽ tay — dùng ở chân card, cạnh dòng recap. */
export function DoodleCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden role="presentation">
      <g {...stroke}>
        <path d="M4 13.5l5 5L20 6" />
        <path d="M7 18.5c3-1 8-1.5 13-1" strokeWidth={1.1} />
      </g>
    </svg>
  );
}
