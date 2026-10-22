import Link from "next/link";
import { IconCheck } from "../doodle";
import { Shell } from "../shell";
import { goals, me, myPresence } from "../../mock/book";

/**
 * Màn 6 — Của tôi. Ở MVP-0 màn này tốn 0,00 pw (A86); dựng ở đây để demo nhìn
 * được đủ 7 màn. KHÔNG có nút "Chép lời mời" ở đây (A102).
 */
export function ScreenCuaToi() {
  return (
    <Shell back="/so" title="Của tôi">
      <dl className="mx-4 mt-2 rounded-lg border border-line bg-frame px-4 py-2 text-[15px]">
        <div className="flex min-h-11 items-center justify-between gap-3">
          <dt className="text-muted">Tên hiển thị</dt>
          <dd className="flex items-center gap-3">
            <span className="font-hand text-[19px]">{me.name}</span>
            <span className="text-[13px] underline decoration-dashed underline-offset-4">Sửa</span>
          </dd>
        </div>
        <div className="flex min-h-11 items-center justify-between gap-3 border-t border-line">
          <dt className="text-muted">Kèo hiện tại</dt>
          <dd className="flex items-center gap-3">
            <span className="font-hand text-[19px]">{goals[me.id]}</span>
            <span className="text-[13px] underline decoration-dashed underline-offset-4">Đổi</span>
          </dd>
        </div>
      </dl>

      <section className="mx-4 mt-5">
        {/* Mẫu số là SỐ NGÀY SỔ CÓ TÍNH, không phải ngày lịch, và tuyệt đối
            không phải q_c (q_c dùng roster đóng băng, nó TỤT khi có người rời). */}
        <p className="font-hand text-[24px] leading-tight">
          Bạn gửi tấm <span className="marker">{myPresence.present}/{myPresence.countedDays} ngày</span>.
        </p>
        <p className="mt-1 text-[12px] text-muted">Chỉ mình bạn thấy dòng này.</p>
      </section>

      <section className="mx-4 mt-6">
        <h2 className="mb-2 font-hand text-[19px]">Nhóm thấy gì về bạn</h2>
        <ul className="space-y-1.5 text-[14px]">
          {["ảnh bạn nộp, nhãn, tên hiển thị", "kèo của bạn (chỉ người trong sổ)"].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-done" /> {t}
            </li>
          ))}
          {["giờ bạn nộp", "những ngày bạn không nộp", "vị trí, thiết bị, số điện thoại"].map((t) => (
            <li key={t} className="flex items-start gap-2 text-muted">
              <span className="w-4 shrink-0 text-center">✗</span> {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-4 mt-6 border-t-2 border-dashed border-line pt-4 text-[14px] leading-relaxed">
        {/* Người nghỉ đã vô hình sẵn (VẮNG render ra 0 pixel). Việc còn lại là
            NÓI CHO HỌ BIẾT — nhờ vậy "chế độ nghỉ" chỉ là một dòng chữ. */}
        <p>Không nộp thì sổ không hiện gì cả. Không tên, không ô trống, không con số nào nhắc tới bạn.</p>
        <p className="mt-2 text-muted">Sổ vẫn tính ngày kể cả khi chỉ có một người nộp.</p>
      </section>

      <div className="mx-4 mt-6 mb-6 space-y-2.5">
        <button type="button" className="block min-h-12 w-full rounded-lg border border-line bg-frame px-4 text-[14px]">
          Rời sổ
        </button>
        <button type="button" className="block min-h-12 w-full rounded-lg border border-line bg-frame px-4 text-[14px]">
          Rời sổ và xoá ảnh của tôi
        </button>
        <Link href="/chinh-sach" className="block py-3 text-center text-[14px] text-muted underline underline-offset-4">
          Chính sách &amp; an toàn
        </Link>
      </div>
    </Shell>
  );
}
