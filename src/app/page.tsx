import Link from "next/link";
import { Phone } from "../ui/phone";
import { ScreenSoHomNay } from "../ui/screens/so-hom-nay";
import { ScreenNop } from "../ui/screens/nop";
import { ScreenMoSo } from "../ui/screens/mo-so";
import { ScreenCard } from "../ui/screens/card";
import { ScreenAnhChiTiet } from "../ui/screens/anh-chi-tiet";
import { ScreenCuaToi } from "../ui/screens/cua-toi";
import { ScreenChinhSach } from "../ui/screens/chinh-sach";
import { book, bookStats, mockRemoteConfig, today } from "../mock/book";

/**
 * Trang tổng thể — CÔNG CỤ DEV, không phải màn sản phẩm.
 *
 * Nó không được tính là màn thứ 8: slot 8 phải để trống cho đúng một màn được
 * Bước 0 chứng minh là bắt buộc (A79), và "chế độ demo Sổ mẫu" trong sản phẩm
 * đã bị cắt (S19) vì nó chính là màn 8 dưới tên khác. Trang này chỉ tồn tại để
 * founder nhìn một lượt, và phải bị loại khỏi bản gửi cho nhóm bạn thật.
 */
export default function Page() {
  return (
    <main className="mx-auto max-w-[1400px] px-5 py-8">
      <header className="mb-8 max-w-[70ch]">
        <p className="mb-2 inline-block rounded border border-line px-2 py-0.5 text-[11px] font-semibold tracking-widest text-muted">
          TRANG DEV — KHÔNG THUỘC 7 MÀN SẢN PHẨM
        </p>
        <h1 className="text-[28px] font-semibold tracking-tight">Teemi — 7 màn MVP</h1>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          Mỗi người một tấm. Cả nhóm một sổ. Bấm vào bất kỳ khung nào để mở màn đó ở kích thước
          điện thoại thật.
        </p>

        <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-[13px] sm:grid-cols-4">
          <div>
            <dt className="text-muted">Sổ</dt>
            <dd>{book.name}</dd>
          </div>
          <div>
            <dt className="text-muted">Ba con số</dt>
            <dd>
              Ngày {bookStats.dayIndex} · {bookStats.totalProofs} tấm · chuỗi {bookStats.streak}
            </dd>
          </div>
          <div>
            <dt className="text-muted">
              A_eff / ngưỡng k
            </dt>
            <dd>
              {today.activeEff} / {today.kRequired}
            </dd>
          </div>
          <div>
            <dt className="text-muted">Van nghỉ còn</dt>
            <dd>
              {bookStats.restDaysLeft}/{mockRemoteConfig.streak.restDays} ngày
            </dd>
          </div>
        </dl>

        <div className="mt-5 rounded-lg border border-line bg-surface px-4 py-3 text-[13px] leading-relaxed">
          <p>
            <span className="font-medium">Ba con số là tính thật.</span> Fixture chỉ khai ai nộp
            ngày nào; còn ngày thứ mấy, bao nhiêu tấm, chuỗi mấy đều chạy qua{" "}
            <span className="font-mono text-[12px]">src/core</span> — cùng những hàm mà cron
            rollover sẽ gọi. Chuỗi là 6 chứ không phải 34 vì sổ hụt 3 ngày liền ở ngày 26–28, đúng
            lúc van nghỉ cạn.
          </p>
          <p className="mt-2 text-muted">
            Chưa có thật: CSDL (chưa nối), ảnh thật (R2 chưa ký URL), magic link, sinh card PNG
            server-side, cron rollover. Ảnh trong demo là placeholder CSS.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Link href="/so" className="group">
          <Phone title="1 · Sổ hôm nay" note="Thành viên. Ô của mình nằm SAU ảnh người khác.">
            <ScreenSoHomNay mode="member" />
          </Phone>
        </Link>

        <Link href="/s/w9td4mz2hb" className="group">
          <Phone title="1b · Trang public" note="Người chưa vào sổ. Ảnh mờ 12px, chỉ-đọc.">
            <ScreenSoHomNay mode="public" />
          </Phone>
        </Link>

        <Link href="/mo-so" className="group">
          <Phone title="3 · Mở sổ" note="Tên sổ, tên hiển thị, cổng tuổi 16+.">
            <ScreenMoSo step="name" />
          </Phone>
        </Link>

        <Link href="/mo-so?b=goal" className="group">
          <Phone title="3b · Chọn kèo" note="8 preset. Kèo không bao giờ lên card.">
            <ScreenMoSo step="goal" />
          </Phone>
        </Link>

        <Link href="/nop" className="group">
          <Phone title="2 · Nộp" note="Nút chọn ảnh chiếm 60% màn.">
            <ScreenNop step="pick" />
          </Phone>
        </Link>

        <Link href="/nop?b=1" className="group">
          <Phone title="2b · Chạm nhãn = gửi" note="Không có nút Gửi thứ ba (UX-1).">
            <ScreenNop step="label" />
          </Phone>
        </Link>

        <Link href="/card" className="group">
          <Phone title="4 · Card chốt sổ" note="Lưới thích ứng. Mã in trong pixel ảnh.">
            <ScreenCard />
          </Phone>
        </Link>

        <Link href="/anh/p-linh" className="group">
          <Phone title="5 · Ảnh chi tiết" note="Nơi DUY NHẤT có Báo cáo + Chặn.">
            <ScreenAnhChiTiet personId="p-linh" />
          </Phone>
        </Link>

        <Link href="/cua-toi" className="group">
          <Phone title="6 · Của tôi" note="Tỉ lệ riêng tư. Không có nút mời ở đây.">
            <ScreenCuaToi />
          </Phone>
        </Link>

        <Link href="/chinh-sach" className="group">
          <Phone title="7 · Chính sách" note="In CẢ HAI mốc SLA: 48h và 24h/6h.">
            <ScreenChinhSach />
          </Phone>
        </Link>

        <figure className="m-0 flex flex-col">
          <figcaption className="mb-2">
            <div className="text-[13px] font-medium text-ink">8 · để trống có chủ đích</div>
            <div className="text-[12px] leading-snug text-muted">
              Chỉ lấp nếu Bước 0 chứng minh một màn là bắt buộc.
            </div>
          </figcaption>
          <div className="flex h-[620px] w-full items-center justify-center rounded-[22px] border border-dashed border-line px-6 text-center text-[13px] leading-relaxed text-muted">
            Ba yêu cầu lấp slot này đều đã bị bác: fake door &ldquo;Bao cả sổ&rdquo;, màn preview,
            và chế độ demo &ldquo;Sổ mẫu&rdquo; trong sản phẩm.
          </div>
        </figure>
      </div>

      <section className="mt-10 max-w-[70ch] border-t border-line pt-6 text-[13px] leading-relaxed">
        <h2 className="mb-2 text-[11px] font-semibold tracking-widest text-muted">
          VẮNG MẶT CÓ CHỦ ĐÍCH — ĐỪNG TƯỞNG LÀ QUÊN
        </h2>
        <p className="text-muted">
          Không lưới 30 ngày · không thả tim · không reaction, comment, chat · không caption trên
          ảnh · không xếp hạng, nhãn &ldquo;Báo Thủ&rdquo;, vote sus, trust score · không boss, HP,
          season · không vai chủ sổ, không kick · không màn đăng nhập · không gacha · không
          realtime. Mỗi mục đều có lý do ghi trong{" "}
          <span className="font-mono text-[12px]">docs/plan/</span>, không phải thiếu sót.
        </p>
      </section>
    </main>
  );
}
