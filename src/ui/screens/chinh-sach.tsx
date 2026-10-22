import Link from "next/link";

/**
 * Màn 7 — Chính sách & an toàn.
 *
 * SLA gỡ nội dung là HAI con số cho HAI đối tượng, và màn này phải in CẢ HAI
 * (A59). Bản cũ chỉ in 48 giờ và lập luận rằng 24 giờ là lời hứa founder một
 * mình không giữ nổi — lập luận đó đúng cho khiếu nại người dùng và SAI cho cơ
 * quan nhà nước: nghĩa vụ luật định không biến mất vì bus factor = 1.
 */
export function ScreenChinhSach() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="flex items-center gap-3 border-b border-line px-4 py-3">
        <Link href="/cua-toi" className="text-[15px] text-muted" aria-label="Quay lại">
          ←
        </Link>
        <h1 className="text-[15px] font-medium">Chính sách &amp; an toàn</h1>
      </header>

      <div className="space-y-5 px-4 py-4 text-[14px] leading-relaxed">
        <section>
          <h2 className="mb-1.5 text-[11px] font-semibold tracking-widest text-muted">
            BÁO CÁO NỘI DUNG
          </h2>
          <p>
            Mở một tấm ảnh, chạm <span className="font-medium">⋮</span> rồi chọn{" "}
            <span className="font-medium">Báo cáo ảnh này</span>. Ảnh bị báo cáo ẩn với cả sổ ngay
            lập tức, trước khi có người xem xét.
          </p>
        </section>

        <section>
          <h2 className="mb-1.5 text-[11px] font-semibold tracking-widest text-muted">
            THỜI HẠN GỠ NỘI DUNG
          </h2>
          <dl className="space-y-2">
            <div>
              <dt className="font-medium">Khiếu nại của người dùng — 48 giờ</dt>
              <dd className="text-muted">Cam kết tự nguyện.</dd>
            </div>
            <div>
              <dt className="font-medium">
                Yêu cầu của cơ quan nhà nước — 24 giờ, khẩn cấp 6 giờ
              </dt>
              <dd className="text-muted">Theo luật, không thương lượng.</dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="mb-1.5 text-[11px] font-semibold tracking-widest text-muted">
            DỮ LIỆU CHÚNG TÔI LƯU
          </h2>
          <ul className="space-y-1">
            <li>Tên hiển thị bạn tự đặt, kèo bạn chọn, ảnh bạn nộp.</li>
            {/* Chỉ lưu is_16_plus + age_gate_at, KHÔNG lưu năm sinh (A47). */}
            <li>Việc bạn đã xác nhận từ 16 tuổi trở lên, và thời điểm xác nhận.</li>
            <li>Không số điện thoại, không email, không vị trí, không danh bạ.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-1.5 text-[11px] font-semibold tracking-widest text-muted">
            ẢNH ĐƯỢC GIỮ BAO LÂU
          </h2>
          <p>
            Ảnh gốc xoá sau 72 giờ. Bản thu nhỏ dùng cho lưới và card được giữ lại để sổ còn lịch
            sử. Bạn xoá được ảnh của mình bất cứ lúc nào, và rời sổ thì xoá được toàn bộ.
          </p>
        </section>

        <section>
          <h2 className="mb-1.5 text-[11px] font-semibold tracking-widest text-muted">LIÊN HỆ</h2>
          <p className="font-mono text-[13px]">hello@teemi.vn</p>
        </section>
      </div>
    </div>
  );
}
