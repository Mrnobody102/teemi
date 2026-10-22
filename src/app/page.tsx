import { Mascot } from "../ui/doodle";
import { book, bookStats, mockRemoteConfig, today } from "../mock/book";

/**
 * Trang tổng thể — CÔNG CỤ DEV, không phải màn sản phẩm.
 *
 * Không tính là màn thứ 8: slot 8 để trống cho đúng một màn được Bước 0 chứng
 * minh là bắt buộc (A79). Phải loại khỏi bản gửi cho nhóm bạn thật.
 *
 * Mỗi khung là một <iframe> trỏ vào ROUTE THẬT, không render lại component —
 * nên thứ thấy ở đây đúng là thứ người dùng thấy, kể cả trang công khai không
 * JavaScript (`/s/<slug>`, một Route Handler chứ không phải React page).
 */
const screens: ReadonlyArray<readonly [string, string, string]> = [
  ["1 · Sổ hôm nay", "/so", "Ô của mình nằm SAU ảnh người khác."],
  ["1b · Trang công khai", "/s/w9td4mz2hb", "Người chưa vào sổ. 0 KB JS, ảnh mờ 12px."],
  ["3 · Mở sổ", "/mo-so", "Form sạch; cá tính chỉ ở tiêu đề và gợi ý."],
  ["3b · Chọn kèo", "/mo-so?b=goal", "Kèo không bao giờ lên card."],
  ["2 · Nộp", "/nop", "Ô chọn ảnh chiếm nửa màn."],
  ["2b · Chạm nhãn = gửi", "/nop?b=1", "Không có nút Gửi thứ ba (UX-1)."],
  ["4 · Card chốt sổ", "/card", "Bề mặt chính. Mã sổ in trong pixel."],
  ["5 · Ảnh chi tiết", "/anh/p-linh", "Nơi DUY NHẤT có Báo cáo + Chặn."],
  ["6 · Của tôi", "/cua-toi", "Tỉ lệ riêng tư. Không có nút mời."],
  ["7 · Chính sách", "/chinh-sach", "Không doodle. In cả hai mốc SLA."],
];

export default function Page() {
  return (
    <main className="mx-auto max-w-[1500px] px-5 py-8">
      <header className="mb-8 flex max-w-[72ch] items-start gap-4">
        <Mascot pose="vui" className="h-20 w-20 shrink-0" />
        <div>
          <p className="hand-dash mb-2 inline-block px-2 py-0.5 text-[11px] font-semibold tracking-widest text-muted">
            TRANG DEV — KHÔNG THUỘC 7 MÀN SẢN PHẨM
          </p>
          <h1 className="font-hand text-[38px] leading-none">Teemi — 7 màn MVP</h1>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            Mỗi khung là trang thật ở kích thước điện thoại 360 px. Bấm tiêu đề để mở riêng.
          </p>
          <p className="mt-3 text-[13px] leading-relaxed">
            {book.name} · ngày {bookStats.dayIndex} · {bookStats.totalProofs} tấm · chuỗi{" "}
            {bookStats.streak} · A_eff {today.activeEff} / k {today.kRequired} · van nghỉ còn{" "}
            {bookStats.restDaysLeft}/{mockRemoteConfig.streak.restDays}.{" "}
            <span className="text-muted">
              Ba con số tính qua <code className="font-mono text-[12px]">src/core</code>, không gõ tay.
            </span>
          </p>
        </div>
      </header>

      <div className="flex flex-wrap gap-x-6 gap-y-8">
        {screens.map(([title, href, note]) => (
          <figure key={href} className="m-0 w-[360px] max-w-full">
            <figcaption className="mb-2">
              <a href={href} className="font-hand text-[21px] leading-none underline-offset-4 hover:underline">
                {title}
              </a>
              <div className="text-[12px] text-muted">{note}</div>
            </figcaption>
            <iframe
              src={href}
              title={title}
              loading="lazy"
              className="hand block h-[720px] w-[360px] max-w-full bg-paper"
            />
          </figure>
        ))}

        <figure className="m-0 w-[360px] max-w-full">
          <figcaption className="mb-2">
            <div className="font-hand text-[21px] leading-none">8 · để trống có chủ đích</div>
            <div className="text-[12px] text-muted">Chỉ lấp nếu Bước 0 chứng minh một màn là bắt buộc.</div>
          </figcaption>
          <div className="hand-dash flex h-[720px] flex-col items-center justify-center gap-3 px-8 text-center">
            <Mascot pose="ngu" className="h-20 w-20" />
            <p className="text-[13px] leading-relaxed text-muted">
              Ba yêu cầu lấp slot này đều đã bị bác: fake door &ldquo;Bao cả sổ&rdquo;, màn preview, và chế độ
              demo &ldquo;Sổ mẫu&rdquo;.
            </p>
          </div>
        </figure>
      </div>
    </main>
  );
}
