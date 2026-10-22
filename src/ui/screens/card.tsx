import { IconCheck, Mascot } from "../doodle";
import { Photo } from "../photo";
import { LabelMark } from "../proof-tile";
import { PrimaryButton, SecondaryButton, Shell } from "../shell";
import { CARD, cardGrid } from "../card-layout";
import { book, bookStats, nameOf, todayProofs } from "../../mock/book";

/**
 * Màn 4 — Card chốt sổ.
 *
 * Card là BỀ MẶT CHÍNH của sản phẩm (docs/design/00 §2.1): phần lớn thành viên
 * gặp Teemi dưới dạng tấm card trong nhóm chat, không phải trang họ chủ động
 * mở. Nên đây là chỗ nhiều cá tính nhất trên mỗi pixel.
 *
 * Bản này là XEM TRƯỚC bằng HTML. Card thật là PNG 1080×1350 render ở server
 * bằng satori, dùng chung thuật toán `cardGrid` (flexbox, px tuyệt đối).
 */
const tilts = ["-1.6deg", "1.3deg", "-0.6deg", "1.8deg", "-1.2deg", "0.8deg", "-1.8deg", "1deg"];

export function ScreenCard() {
  const g = cardGrid(todayProofs.length);
  const closer = todayProofs[todayProofs.length - 1];

  return (
    <Shell
      back="/so"
      title="Card tối nay"
      footer={
        <>
          <PrimaryButton href="/card">Chia sẻ vào Zalo</PrimaryButton>
          <div className="mt-3 flex gap-3">
            <SecondaryButton>Lưu ảnh</SecondaryButton>
            <SecondaryButton>Chép lời mời</SecondaryButton>
          </div>
          {/* Thang dự phòng bắt buộc, hiện THƯỜNG TRỰC: `navigator.share` không
              chạy trong bất kỳ in-app webview Android nào. */}
          <p className="mt-3 text-center text-[13px] text-muted">
            Nút chia sẻ không hiện? <span className="marker text-ink">Nhấn giữ vào card</span> rồi chọn Lưu ảnh.
          </p>
        </>
      }
    >
      <div className="flex justify-center px-4 pt-7 pb-4">
        <div
          className="hand relative flex flex-col bg-frame"
          style={{
            width: CARD.width,
            height: CARD.height,
            padding: CARD.padding,
            boxShadow: "4px 4px 0 var(--shadow)",
          }}
        >
          {/* Linh vật ngó ra từ MÉP card — trên khung, không đè lên ảnh nào. */}
          <Mascot pose="ngo" className="absolute -top-8 right-3 h-12 w-12" />

          <div style={{ height: CARD.headerHeight }}>
            <div className="font-hand text-[26px] leading-none">{book.name}</div>
            <div className="mt-1.5 text-[11px] text-muted">
              Ngày thứ {bookStats.dayIndex} · {bookStats.totalProofs} tấm · chuỗi {bookStats.streak}
            </div>
          </div>

          {/* Hàng cuối CĂN GIỮA: không bao giờ có ô trống trông như "thiếu một
              người" (P2). Kích thước tính sẵn nên chân card luôn nằm trong khung. */}
          <div
            className="flex flex-wrap content-center justify-center"
            style={{ height: g.area.height, gap: CARD.tileGap, marginBlock: CARD.sectionGap }}
          >
            {todayProofs.map((proof, i) => (
              <div
                key={proof.personId}
                className="border border-line bg-paper"
                style={{
                  width: g.tileWidth,
                  height: g.tileHeight,
                  padding: `${CARD.framePad}px ${CARD.framePad}px 0`,
                  transform: `rotate(${tilts[i % tilts.length]})`,
                }}
              >
                <div style={{ width: g.photo, height: g.photo }} className="overflow-hidden">
                  <Photo seed={`${proof.personId}-${bookStats.dayIndex}`} />
                </div>
                <div className="flex items-center justify-between" style={{ height: CARD.labelHeight }}>
                  <span className="truncate font-hand text-[13px] leading-none">{nameOf(proof.personId)}</span>
                  <LabelMark label={proof.label} className="h-3 w-3 shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Không tên người VẮNG, không mẫu số "3/5" (P2). */}
          <div className="flex items-end justify-between gap-2" style={{ height: CARD.footerHeight }}>
            <span className="flex items-center gap-1 font-hand text-[17px] leading-none">
              <IconCheck className="h-4 w-4 shrink-0 text-done" />
              {closer ? `${nameOf(closer.personId)} chốt sổ` : "Chưa có tấm nào"}
            </span>
            {/* Mã nằm trong PIXEL của ảnh — đường thoát hiểm duy nhất sống sót
                nếu Zalo chặn domain (UX-2). Mono, tương phản cao. */}
            <span className="rounded border-[1.5px] border-ink bg-paper px-1.5 py-0.5 font-mono text-[12px] tracking-[0.18em]">
              {book.code}
            </span>
          </div>
        </div>
      </div>
    </Shell>
  );
}
