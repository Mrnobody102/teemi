/**
 * Doodle — phần "30% cá tính" của luật DOC 2 §18.1.
 *
 * Ràng buộc (docs/design/01 §6):
 * - inline SVG, nét `currentColor` hoặc biến màu theme → đúng ở cả sáng lẫn tối
 * - tối đa 2 linh vật một màn; icon nhãn không tính
 * - **không bao giờ đè lên ảnh của người thật** và không animate trên đường nộp
 * - linh vật là doodle gốc, không copy IP (DOC 2 §18.4)
 *
 * Icon nhãn được VẼ thay vì dùng emoji: emoji 💀 hiện thành ô vuông rỗng trên
 * máy không có font emoji (thấy tận mắt khi chụp màn hình 22/10), và mỗi hãng
 * điện thoại vẽ emoji một kiểu — nhãn TOANG không được phụ thuộc vào đó.
 */

type Props = { className?: string; title?: string };

const ink = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" } as const;

/* ---------------- icon (24×24) ---------------- */

export function IconCheck({ className = "", title }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} role={title ? "img" : "presentation"} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path {...ink} strokeWidth={2.6} d="M4 12.8c2 2.2 3.8 4.2 5.6 6 2.9-4.8 6.4-9.3 10.6-13.2" />
    </svg>
  );
}

export function IconSkull({ className = "", title }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} role={title ? "img" : "presentation"} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path
        {...ink}
        strokeWidth={2}
        d="M6.1 13.2C5 7.3 8.4 3.6 12 3.6s7.1 3.6 6 9.6c-.4 1.9-1.4 2.9-2 3.4v3H8.1v-3c-.6-.5-1.6-1.5-2-3.4z"
      />
      <circle cx="9.4" cy="11" r="1.7" fill="currentColor" />
      <circle cx="14.6" cy="11" r="1.7" fill="currentColor" />
      <path {...ink} strokeWidth={1.6} d="M12 13.6l-.8 1.5h1.6zM10.6 19.6v-2M13.4 19.6v-2" />
    </svg>
  );
}

export function IconPlus({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...ink} strokeWidth={2.4} d="M12.2 4.6c-.3 4.6.2 10 0 14.8M4.8 12.3c4.6-.4 9.8.2 14.6-.2" />
    </svg>
  );
}

export function IconCamera({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        {...ink}
        strokeWidth={2.2}
        d="M5 11.2c0-1.6 1-2.6 2.6-2.6h3.2l1.9-3h6.8l1.9 3h3.6c1.6 0 2.6 1 2.6 2.6v12.1c0 1.6-1 2.7-2.6 2.7H7.6C6 26 5 25 5 23.3z"
      />
      <path {...ink} strokeWidth={2.2} d="M16 21.6c2.9 0 4.9-2.1 4.9-4.8S18.9 12 16 12s-4.9 2.1-4.9 4.8 2 4.8 4.9 4.8z" />
    </svg>
  );
}

/* ---------------- linh vật ---------------- */

/*
 * Một cục tròn vàng màu bút highlight, viền mực. Không tên, không lời thoại —
 * nó là nhân vật phụ, không được thành "giọng" của app nói với người dùng.
 * Dáng: `ngu` (chờ, cả sổ chưa ai nộp) · `vui` (sổ có tấm) · `ngo` (ngó ra).
 */
type MascotPose = "ngu" | "vui" | "ngo";

const BODY =
  "M14 58C6 50 6 34 12 24 18 12 30 7 42 8c14 1 26 10 29 24 3 14-1 26-11 30-12 4-34 4-46-4z";

export function Mascot({ pose, className = "" }: { pose: MascotPose; className?: string }) {
  return (
    <svg viewBox="0 0 80 74" className={className} aria-hidden>
      {pose === "vui" ? (
        <g {...ink} stroke="var(--ink)" strokeWidth={2.4}>
          <path d="M12 36c-6-5-7-13-4-19" />
          <path d="M70 36c6-5 7-13 4-19" />
        </g>
      ) : null}

      <path d={BODY} fill="var(--marker)" stroke="var(--ink)" strokeWidth={2.4} strokeLinejoin="round" />
      <ellipse cx="27" cy="43" rx="4" ry="2.6" fill="var(--toang)" opacity={0.28} />
      <ellipse cx="55" cy="43" rx="4" ry="2.6" fill="var(--toang)" opacity={0.28} />
      <path d="M30 65.5v4M50 65.5v4" {...ink} stroke="var(--ink)" strokeWidth={2.4} />

      {pose === "ngu" ? (
        <g {...ink} stroke="var(--ink)" strokeWidth={2.2}>
          <path d="M28 35c2.4 2.6 5.6 2.6 8 0M44 35c2.4 2.6 5.6 2.6 8 0" />
          <path d="M38.5 45.5c1.4.9 3.6.9 5 0" />
          <path d="M60 4h7l-7 8h7M70 14h4l-4 5h4" strokeWidth={1.8} />
        </g>
      ) : null}

      {pose === "vui" ? (
        <g stroke="var(--ink)" strokeLinecap="round" strokeLinejoin="round">
          <path d="M28 37l4-4.5 4 4.5M44 37l4-4.5 4 4.5" fill="none" strokeWidth={2.4} />
          <path d="M35 43c2 6 10 6 12 0z" fill="var(--ink)" strokeWidth={1.6} />
        </g>
      ) : null}

      {pose === "ngo" ? (
        <g>
          <circle cx="33" cy="34" r="2.8" fill="var(--ink)" />
          <circle cx="49" cy="34" r="2.8" fill="var(--ink)" />
          <path d="M37 44c2.4 2.4 5.6 2.4 8 0" {...ink} stroke="var(--ink)" strokeWidth={2.2} />
        </g>
      ) : null}
    </svg>
  );
}
