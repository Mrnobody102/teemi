import Link from "next/link";
import { IconCamera, IconCheck, IconSkull } from "../doodle";
import { Photo } from "../photo";
import { Shell } from "../shell";

/**
 * Màn 2 — Nộp.
 *
 * UX-1: **nhãn XONG/TOANG chính là nút Gửi.** Không có nút "Gửi" thứ ba — chạm
 * nhãn là nộp xong, kèm thanh Hoàn tác 10 giây. Đây là thứ kéo bước nộp từ
 * 18–22 giây xuống 11–15 giây.
 *
 * Không caption, không filter, không chỉnh sửa. Không animation trên đường này.
 */
export function ScreenNop({ step }: { step: "pick" | "label" }) {
  if (step === "pick") {
    return (
      <Shell
        back="/so"
        title="Một tấm cho hôm nay"
        footer={
          // Kèo dạng "không làm X" thì chẳng có gì để chụp. Dòng này gỡ đúng nỗi
          // lúng túng đó — cố định, không đổi theo ngày.
          <p className="pb-1 text-center font-hand text-[19px] text-muted">
            Ảnh gì cũng được. <span className="marker text-ink">Cái nhãn mới là chuyện.</span>
          </p>
        }
      >
        <div className="flex flex-col px-4 pt-4">
          <Link
            href="/nop?b=1"
            className="hand-dash flex min-h-[52dvh] flex-col items-center justify-center gap-3 bg-frame/60"
          >
            <IconCamera className="h-16 w-16" />
            <span className="font-hand text-[30px]">Chọn ảnh</span>
          </Link>
          <button type="button" className="mt-4 min-h-11 font-hand text-[19px] text-muted underline decoration-dashed underline-offset-4">
            hoặc chụp luôn
          </button>
        </div>
      </Shell>
    );
  }

  return (
    <Shell
      back="/nop"
      title="Một tấm cho hôm nay"
      footer={
        <>
          <p className="mb-3 text-center text-[13px] text-muted">Chạm nhãn là gửi luôn.</p>
          <div className="flex gap-3">
            <LabelButton kind="done" />
            <LabelButton kind="toang" />
          </div>
        </>
      }
    >
      <div className="px-10 pt-6">
        <div className="polaroid tilt-r relative mx-auto max-w-[240px] pb-3">
          <span className="tape" aria-hidden />
          <div className="aspect-[4/5] overflow-hidden">
            <Photo seed="p-thao-34" />
          </div>
        </div>
      </div>
    </Shell>
  );
}

/*
 * Hai nhãn là khoảnh khắc kịch tính duy nhất của vòng lặp — nên chúng to, có
 * nét vẽ tay, hơi nghiêng như con dấu. Dòng phụ dạy luôn cơ chế: TOANG vẫn là
 * CÓ MẶT (q_c đếm cả XONG lẫn TOANG), không phải vắng.
 */
function LabelButton({ kind }: { kind: "done" | "toang" }) {
  const done = kind === "done";
  return (
    <Link
      href="/card"
      className={`${done ? "hand tilt-l border-done text-done" : "hand-2 tilt-r border-toang text-toang"} sticker flex flex-1 flex-col items-center bg-frame px-2 pt-3 pb-2.5`}
    >
      <span className="flex items-center gap-1.5">
        {done ? <IconCheck className="h-7 w-7" /> : <IconSkull className="h-7 w-7" />}
        <span className="font-hand text-[34px] leading-none">{done ? "XONG" : "TOANG"}</span>
      </span>
      <span className="mt-1 font-hand text-[15px] text-muted">
        {done ? "làm rồi nha" : "có mặt, nhưng toang"}
      </span>
    </Link>
  );
}
