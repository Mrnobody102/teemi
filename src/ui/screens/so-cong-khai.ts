/**
 * Trang công khai của link mời — sinh HTML thuần, KHÔNG JavaScript.
 *
 * Vì sao không phải một React page như 6 màn kia: đây là trang mà một người LẠ
 * mở từ card trong nhóm chat, trên máy Android tầm thấp, trong webview. Nó là
 * cửa phễu cold start (~45% tỉ lệ chạm) và ở MVP-0 nó **chỉ-đọc** — không hành
 * động nào ngoài "Vào sổ này".
 *
 * Đo thực tế (22/10, gzip): một React page TỔNG TẢI ~205 KB — 178 KB JavaScript
 * + 22 KB font tay. First paint của nó vẫn nhỏ (~9 KB, vì JS là `async`), nhưng
 * người lạ trên máy ≤3 GB RAM vẫn phải tải và CHẠY 178 KB JS chỉ để xem một
 * trang chỉ-đọc mà có thể họ không bao giờ vào. Trang này: 2,4 KB, 0 JS, 0 font.
 * Next chặn `react-dom/server` trong App Router, nên HTML dựng bằng template và
 * trả qua Route Handler.
 *
 * Ràng buộc khi sửa file này: không JS phía client, không file CSS ngoài, và
 * **mọi dữ liệu người dùng phải đi qua `esc()`** — tên sổ và tên hiển thị do
 * người dùng tự nhập.
 */
import { book, bookStats, nameOf, todayProofs } from "../../mock/book";

const C = {
  paper: "#fbf9f4",
  frame: "#fffdf8",
  ink: "#16140f",
  muted: "#6b6255",
  line: "#e0d9c9",
  dot: "#e6dfcf",
  done: "#2f6b45",
  toang: "#a4542a",
  marker: "#f5d547",
} as const;

/*
 * Cùng ngôn ngữ doodle với app (docs/design/01), nhưng KHÔNG font viết tay: font
 * là một request + ~23 KB, đúng thứ trang này không được trả. Chất vẽ tay đến từ
 * viền bất đối xứng, khung polaroid, nút sticker và linh vật SVG nội tuyến.
 */
const HAND = "255px 14px 225px 14px/14px 225px 14px 255px";

/** Linh vật ngó — cùng hình với `Mascot pose="ngo"` trong src/ui/doodle.tsx. */
const MASCOT = `<svg viewBox="0 0 80 74" width="52" height="48" aria-hidden="true"><path d="M14 58C6 50 6 34 12 24 18 12 30 7 42 8c14 1 26 10 29 24 3 14-1 26-11 30-12 4-34 4-46-4z" fill="var(--mk)" stroke="var(--ink)" stroke-width="2.4" stroke-linejoin="round"/><ellipse cx="27" cy="43" rx="4" ry="2.6" fill="#a4542a" opacity=".28"/><ellipse cx="55" cy="43" rx="4" ry="2.6" fill="#a4542a" opacity=".28"/><path d="M30 65.5v4M50 65.5v4" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round"/><circle cx="33" cy="34" r="2.8" fill="var(--ink)"/><circle cx="49" cy="34" r="2.8" fill="var(--ink)"/><path d="M37 44c2.4 2.4 5.6 2.4 8 0" fill="none" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round"/></svg>`;

const CHECK = `<svg viewBox="0 0 24 24" width="16" height="16" role="img" aria-label="XONG"><path d="M4 12.8c2 2.2 3.8 4.2 5.6 6 2.9-4.8 6.4-9.3 10.6-13.2" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const SKULL = `<svg viewBox="0 0 24 24" width="16" height="16" role="img" aria-label="TOANG"><path d="M6.1 13.2C5 7.3 8.4 3.6 12 3.6s7.1 3.6 6 9.6c-.4 1.9-1.4 2.9-2 3.4v3H8.1v-3c-.6-.5-1.6-1.5-2-3.4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="9.4" cy="11" r="1.7" fill="currentColor"/><circle cx="14.6" cy="11" r="1.7" fill="currentColor"/></svg>`;

/** Tên sổ và tên hiển thị là dữ liệu người dùng — không bao giờ nội suy thô. */
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function photoBackground(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) hash = (hash * 31 + seed.charCodeAt(i)) % 360;
  const b = (hash + 40) % 360;
  return [
    `radial-gradient(70% 60% at 30% 25%, hsl(${hash} 32% 72%) 0%, transparent 70%)`,
    `radial-gradient(60% 70% at 75% 80%, hsl(${b} 28% 58%) 0%, transparent 65%)`,
    `linear-gradient(160deg, hsl(${hash} 18% 86%), hsl(${b} 20% 64%))`,
  ].join(",");
}

function proofTile(personId: string, label: "done" | "toang", index: number): string {
  const name = esc(nameOf(personId));
  const mark = label === "done" ? `<i class="d">${CHECK}</i>` : `<i class="x">${SKULL}</i>`;
  const tilt = ["-1.6deg", "1.4deg", "-.4deg"][index % 3];
  const tape = index % 2 === 0 ? '<b class="tp"></b>' : "";

  return `<div class="t" style="transform:rotate(${tilt})">${tape}
  <div class="ph">
    <!-- Mờ 12px: đủ để hiểu "ảnh đời thường của bạn tao", không đủ để nhận ra
         nội dung. Người lạ nhặt được link vẫn không xem được ảnh. -->
    <div class="b" style="background:${photoBackground(`${personId}-${bookStats.dayIndex}`)}"></div>
  </div>
  <div class="m"><span class="n">${name}</span>${mark}</div>
</div>`;
}

const STYLE = `
:root{--paper:${C.paper};--frame:${C.frame};--ink:${C.ink};--muted:${C.muted};--line:${C.line};
  --dot:${C.dot};--done:${C.done};--toang:${C.toang};--mk:${C.marker};--sh:${C.ink}}
@media (prefers-color-scheme:dark){:root{--paper:#14130f;--frame:#23201a;--ink:#f2efe6;--muted:#9a9183;
  --line:#2e2a22;--dot:#221f19;--done:#7fb08c;--toang:#d08a5c;--mk:#d9bb3f;--sh:#4a4438}}
*{box-sizing:border-box}
body{margin:0;color:var(--ink);background:var(--paper) radial-gradient(var(--dot) 1px,transparent 1.2px) 0 0/18px 18px;
  font:15px/1.5 ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;-webkit-font-smoothing:antialiased}
.w{max-width:420px;margin:0 auto;min-height:100dvh;display:flex;flex-direction:column}
header{padding:20px 16px 8px}
h1{margin:0;font-size:26px;font-weight:700;letter-spacing:-.01em;line-height:1.1}
.s{margin:6px 0 0;font-size:13px;color:var(--muted)}
section{padding:12px 16px}
h2{margin:0 0 16px;font-size:13px;font-weight:700;letter-spacing:.14em}
.hl{background:linear-gradient(transparent 58%,var(--mk) 58%,var(--mk) 92%,transparent 92%);padding-inline:.12em}
.g{display:grid;grid-template-columns:repeat(3,1fr);gap:20px 12px}
.t{position:relative;background:var(--frame);padding:5px 5px 0;border:1px solid var(--line);box-shadow:0 1px 2px rgba(0,0,0,.08)}
.tp{position:absolute;top:-12px;left:50%;width:44px;height:12px;margin-left:-22px;background:rgba(245,213,71,.55);transform:rotate(-3deg)}
.ph{position:relative;aspect-ratio:4/5;overflow:hidden}
.b{position:absolute;inset:0;filter:blur(12px);transform:scale(1.15)}
.m{display:flex;align-items:center;justify-content:space-between;gap:4px;padding:5px 2px;font-size:14px;font-weight:600}
.n{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
i{display:flex;font-style:normal}.d{color:var(--done)}.x{color:var(--toang)}
.p{display:flex;align-items:center;gap:12px;margin:12px 16px 0;padding:16px 0 0;border-top:2px dashed var(--line)}
.p svg{flex:none}
.p p{margin:0;font-size:16px;line-height:1.5}
.f{position:sticky;bottom:0;margin-top:auto;background:var(--paper);padding:12px 16px calc(14px + env(safe-area-inset-bottom,0px))}
.cta{display:flex;align-items:center;justify-content:center;min-height:52px;border:2px solid #16140f;border-radius:${HAND};
  background:var(--mk);color:#16140f;font-size:19px;font-weight:700;text-decoration:none;box-shadow:3px 3px 0 var(--sh)}
.cta:active{transform:translate(3px,3px);box-shadow:none}
`.replace(/\n\s*/g, "");

export function renderSoCongKhai(): string {
  const tiles = todayProofs.map((p, i) => proofTile(p.personId, p.label, i)).join("");
  const stats = `Ngày thứ ${bookStats.dayIndex} · ${bookStats.totalProofs} tấm · chuỗi ${bookStats.streak}`;

  return `<!doctype html>
<html lang="vi"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<!-- URL đoán được = người lạ duyệt ảnh của các nhóm bạn 16 tuổi. -->
<meta name="robots" content="noindex,nofollow">
<title>${esc(book.name)} — Teemi</title>
<style>${STYLE}</style>
</head><body><div class="w">
<header><h1>${esc(book.name)}</h1><p class="s">${stats}</p></header>
<section><h2><span class="hl">HÔM NAY</span></h2><div class="g">${tiles}</div></section>
<div class="p">${MASCOT}<p>Tối nào nhóm cũng chốt sổ: mỗi đứa một tấm, <span class="hl">không ai cài app</span>.</p></div>
<div class="f"><a class="cta" href="/mo-so">Vào sổ này</a></div>
</div></body></html>`;
}
