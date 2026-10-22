/**
 * Trang công khai của link mời — sinh HTML thuần, KHÔNG JavaScript.
 *
 * Vì sao không phải một React page như 6 màn kia: đây là trang mà một người LẠ
 * mở từ card trong nhóm chat, trên máy Android tầm thấp, trong webview. Nó là
 * cửa phễu cold start (~45% tỉ lệ chạm) và ở MVP-0 nó **chỉ-đọc** — không hành
 * động nào ngoài "Vào sổ này".
 *
 * Đo thực tế: một React page tốn ~181 KB gzip, riêng runtime React 153 KB, vượt
 * xa ngân sách 120 KB ở `docs/design/01` §8. Next chặn `react-dom/server` trong
 * App Router, nên cách còn lại là dựng HTML bằng template và trả qua Route
 * Handler.
 *
 * Ràng buộc khi sửa file này: không JS phía client, không file CSS ngoài, và
 * **mọi dữ liệu người dùng phải đi qua `esc()`** — tên sổ và tên hiển thị do
 * người dùng tự nhập.
 */
import { book, bookStats, nameOf, todayProofs } from "../../mock/book";

const C = {
  paper: "#fbf9f4",
  surface: "#f2ede2",
  ink: "#16140f",
  muted: "#6b6255",
  line: "#e0d9c9",
  done: "#2f6b45",
  toang: "#a4542a",
  accent: "#20324a",
  accentInk: "#fbf9f4",
  marker: "#f5d547",
} as const;

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

function proofTile(personId: string, label: "done" | "toang"): string {
  const name = esc(nameOf(personId));
  const mark = label === "done" ? "✓" : "💀";
  const color = label === "done" ? C.done : C.toang;

  return `<div>
  <div class="t">
    <!-- Mờ 12px: đủ để hiểu "ảnh đời thường của bạn tao", không đủ để nhận ra
         nội dung. Người lạ nhặt được link vẫn không xem được ảnh. -->
    <div class="b" style="background:${photoBackground(`${personId}-${bookStats.dayIndex}`)}"></div>
  </div>
  <div class="m"><span class="n">${name}</span><span style="color:${color}">${mark}</span></div>
</div>`;
}

const STYLE = `
*{box-sizing:border-box}
body{margin:0;background:${C.paper};color:${C.ink};
  font:15px/1.5 ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
  -webkit-font-smoothing:antialiased}
.w{max-width:420px;margin:0 auto;min-height:100vh;display:flex;flex-direction:column}
header{border-bottom:1px solid ${C.line};padding:16px 16px 12px}
h1{margin:0;font-size:17px;font-weight:600;letter-spacing:-.01em}
.s{margin:4px 0 0;font-size:13px;color:${C.muted}}
section{padding:16px}
h2{margin:0 0 10px;font-size:11px;font-weight:600;letter-spacing:.12em;color:${C.muted}}
.g{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.t{position:relative;aspect-ratio:4/5;overflow:hidden;border-radius:8px;
  border:1px solid ${C.line};background:${C.surface}}
.b{position:absolute;inset:0;filter:blur(12px);transform:scale(1.15)}
.m{display:flex;justify-content:space-between;gap:4px;margin-top:6px;font-size:13px}
.n{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.p{border-top:1px solid ${C.line}}
.p p{margin:0;line-height:1.6}
.hl{background:linear-gradient(transparent 62%,${C.marker} 62%,${C.marker} 94%,transparent 94%);
  padding-inline:.1em}
.f{margin-top:auto;border-top:1px solid ${C.line};
  padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px))}
.cta{display:block;border-radius:8px;background:${C.accent};color:${C.accentInk};
  padding:14px 16px;text-align:center;font-weight:500;text-decoration:none}
@media (prefers-color-scheme:dark){
  body{background:#14130f;color:#f2efe6}
  header,.p,.f{border-color:#2e2a22}
  .s,h2{color:#9a9183}
  .t{border-color:#2e2a22;background:#1e1c16}
  .hl{background:linear-gradient(transparent 62%,#c9a838 62%,#c9a838 94%,transparent 94%)}
  .cta{background:#8fb4d8;color:#14130f}
}`.replace(/\n\s*/g, "");

export function renderSoCongKhai(): string {
  const tiles = todayProofs.map((p) => proofTile(p.personId, p.label)).join("");
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
<section><h2>HÔM NAY</h2><div class="g">${tiles}</div></section>
<section class="p"><p>Tối nào nhóm cũng chốt sổ: mỗi đứa một tấm, <span class="hl">không ai cài app</span>.</p></section>
<div class="f"><a class="cta" href="/mo-so">Vào sổ này</a></div>
</div></body></html>`;
}
