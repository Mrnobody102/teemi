import Link from "next/link";
import { PrimaryButton, Shell } from "../shell";

/**
 * Màn 3 — Mở sổ / Vào sổ, gồm cả bước chọn kèo.
 *
 * Form ở đây là phần "70% sạch": ô nhập, nhãn ô, cổng tuổi dùng font hệ thống,
 * không trang trí. Cá tính chỉ nằm ở tiêu đề và các nút gợi ý.
 *
 * Cổng tuổi là ô tick không-bỏ-qua-được, **không** ô năm sinh, **không** date
 * picker (A47). Không được tách thành màn riêng — đó sẽ là màn thứ 8.
 */
const goalPresets = [
  "Ngủ trước 12h",
  "Đi bộ 20 phút",
  "Học 15 phút",
  "Đọc 5 trang",
  "Không trà sữa hôm nay",
  "Tập 15 phút",
  "Không bỏ bữa sáng",
  "Không mất tích",
];

/* Hai tên đầu lấy từ DOC 2 §3.1 — tên sổ có giọng của nhóm bạn thật. */
const nameIdeas = ["5 con báo chống lười", "Hội anti nói mồm", "Sổ phòng trọ", "Sổ cày đêm"];

export function ScreenMoSo({ step }: { step: "name" | "goal" }) {
  if (step === "goal") {
    return (
      <Shell
        back="/mo-so"
        title="Kèo của bạn tháng này"
        footer={
          // Kèo không bao giờ lên card — có test CI canh điều này (P3).
          <p className="pb-1 text-[13px] leading-relaxed text-muted">
            Chỉ người trong sổ thấy kèo của bạn. Kèo không bao giờ lên card.
          </p>
        }
      >
        <div className="grid grid-cols-2 gap-3 px-4 pt-3">
          {goalPresets.map((goal, i) => (
            <Link
              key={goal}
              href="/nop"
              className={`${i % 2 ? "hand-2" : "hand"} sticker flex min-h-14 items-center bg-frame px-3 py-2.5 font-hand text-[19px] leading-tight`}
            >
              {goal}
            </Link>
          ))}
          <div className="hand-dash col-span-2 flex min-h-12 items-center px-3 font-hand text-[18px] text-muted">
            ✎ Tự viết (≤30 ký tự)
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell title="Mở sổ của nhóm mình" footer={<PrimaryButton href="/mo-so?b=goal">Tiếp</PrimaryButton>}>
      <div className="px-4 pt-3">
        <label className="block text-[15px] font-medium" htmlFor="ten-so">
          Sổ này tên gì?
        </label>
        <div
          id="ten-so"
          className="mt-2 rounded-lg border border-line bg-frame px-3 py-3 text-[15px] text-muted"
        >
          Ví dụ: Sổ nhà 4 đứa
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {nameIdeas.map((name, i) => (
            <span
              key={name}
              className={`${i % 2 ? "hand-2" : "hand"} bg-frame px-3 py-1 font-hand text-[17px]`}
            >
              {name}
            </span>
          ))}
        </div>

        <div className="mt-7 border-t-2 border-dashed border-line pt-5">
          <label className="block text-[15px] font-medium" htmlFor="ten-hien-thi">
            Tên bạn hiện trên card là gì?
          </label>
          <div
            id="ten-hien-thi"
            className="mt-2 rounded-lg border border-line bg-frame px-3 py-3 text-[15px] text-muted"
          >
            Linh
          </div>
          <p className="mt-1.5 text-[12px] text-muted">≤12 ký tự. Cả sổ sẽ thấy tên này.</p>

          <div className="mt-4 flex items-start gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-ink text-[12px] leading-none">
              ✓
            </span>
            <span className="text-[15px]">Tôi từ 16 tuổi trở lên.</span>
          </div>

          {/* Dòng không-bỏ-qua-được (S9): người nộp phải biết ảnh của mình có
              thể ra khỏi app trước khi nộp tấm đầu tiên. */}
          <p className="mt-3 text-[13px] leading-relaxed text-muted">
            Ảnh bạn nộp có thể xuất hiện trên card mà cả sổ gửi vào nhóm chat.
          </p>
        </div>
      </div>
    </Shell>
  );
}
