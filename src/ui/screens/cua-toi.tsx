import Link from "next/link";
import { goals, me, myPresence } from "../../mock/book";

/**
 * Màn 6 — Của tôi. Ở MVP-0 màn này tốn 0,00 pw (A86): nội dung gộp vào luồng
 * có sẵn, không dựng màn riêng. Dựng ở đây để demo nhìn được đủ 7 màn.
 *
 * KHÔNG có nút "Chép lời mời" ở đây (A102) — nút đó chỉ ở màn 4, dưới card.
 */
export function ScreenCuaToi() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="flex items-center gap-3 border-b border-line px-4 py-3">
        <Link href="/" className="text-[15px] text-muted" aria-label="Quay lại">
          ←
        </Link>
        <h1 className="text-[15px] font-medium">Của tôi</h1>
      </header>

      <dl className="border-b border-line px-4 py-3.5 text-[14px]">
        <div className="flex items-baseline justify-between gap-3 py-1">
          <dt className="text-muted">Tên hiển thị</dt>
          <dd className="flex items-baseline gap-2">
            {me.name} <span className="text-[13px] text-accent">Sửa</span>
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-3 py-1">
          <dt className="text-muted">Kèo hiện tại</dt>
          <dd className="flex items-baseline gap-2">
            {goals[me.id]} <span className="text-[13px] text-accent">Đổi</span>
          </dd>
        </div>
      </dl>

      <section className="border-b border-line px-4 py-3.5">
        {/* Mẫu số là SỐ NGÀY SỔ CÓ TÍNH, đã trừ ngày van đỡ — không phải ngày
            lịch, và tuyệt đối không phải q_c (q_c dùng roster đóng băng, nó
            TỤT khi có người rời nên sai với vai trò phản hồi). */}
        <p className="text-[15px]">
          Bạn gửi tấm {myPresence.present}/{myPresence.countedDays} ngày.
        </p>
        <p className="mt-1 text-[12px] text-muted">Chỉ mình bạn thấy dòng này.</p>
      </section>

      <section className="border-b border-line px-4 py-3.5">
        <h2 className="mb-2 text-[11px] font-semibold tracking-widest text-muted">
          NHÓM THẤY GÌ VỀ BẠN
        </h2>
        <ul className="space-y-1 text-[14px]">
          <li><span className="text-done">✓</span> ảnh bạn nộp, nhãn, tên hiển thị</li>
          <li><span className="text-done">✓</span> kèo của bạn (chỉ người trong sổ)</li>
          <li><span className="text-muted">✗</span> giờ bạn nộp</li>
          <li><span className="text-muted">✗</span> những ngày bạn không nộp</li>
          <li><span className="text-muted">✗</span> vị trí, thiết bị, số điện thoại</li>
        </ul>
      </section>

      <section className="border-b border-line px-4 py-3.5">
        {/* Người nghỉ đã vô hình sẵn (VẮNG render ra 0 pixel). Việc còn lại là
            NÓI CHO HỌ BIẾT điều đó — họ không tự đoán được. Nhờ vậy "chế độ
            nghỉ" không cần build: nó là một dòng chữ, không phải một cơ chế. */}
        <p className="text-[14px] leading-relaxed">
          Không nộp thì sổ không hiện gì cả. Không tên, không ô trống, không con số nào nhắc tới bạn.
        </p>
        <p className="mt-2 text-[14px] leading-relaxed text-muted">
          Sổ vẫn tính ngày kể cả khi chỉ có một người nộp.
        </p>
      </section>

      <div className="mt-auto space-y-2.5 px-4 py-4">
        <button type="button" className="block w-full rounded-lg border border-line px-4 py-3 text-[14px]">
          Rời sổ
        </button>
        <button type="button" className="block w-full rounded-lg border border-line px-4 py-3 text-[14px]">
          Rời sổ và xoá ảnh của tôi
        </button>
        <Link
          href="/chinh-sach"
          className="block rounded-lg px-4 py-3 text-center text-[14px] text-muted"
        >
          Chính sách &amp; an toàn
        </Link>
      </div>
    </div>
  );
}
