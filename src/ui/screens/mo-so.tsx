import Link from "next/link";

/**
 * Màn 3 — Mở sổ / Vào sổ, gồm cả bước chọn kèo.
 *
 * Cổng tuổi là một ô tick không-bỏ-qua-được, **không** có ô năm sinh và
 * **không** có date picker (A47): hệ thống chỉ lưu `is_16_plus` + `age_gate_at`.
 * Cổng tuổi KHÔNG được tách thành màn riêng — đó sẽ là màn thứ 8, và slot 8
 * phải để trống.
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

export function ScreenMoSo({ step }: { step: "name" | "goal" }) {
  if (step === "goal") {
    return (
      <div className="flex min-h-full flex-col">
        <header className="flex items-center gap-3 border-b border-line px-4 py-3">
          <Link href="/mo-so" className="text-[15px] text-muted" aria-label="Quay lại">
            ←
          </Link>
          <h1 className="text-[15px] font-medium">Kèo của bạn tháng này</h1>
        </header>

        <div className="px-4 py-4">
          <div className="grid grid-cols-2 gap-2.5">
            {goalPresets.map((goal) => (
              <Link
                key={goal}
                href="/nop"
                className="rounded-lg border border-line bg-surface px-3 py-3.5 text-[14px] leading-snug"
              >
                {goal}
              </Link>
            ))}
          </div>
          <div className="mt-2.5 rounded-lg border border-dashed border-line px-3 py-3.5 text-[14px] text-muted">
            Tự viết (≤30 ký tự)
          </div>
        </div>

        <div className="mt-auto border-t border-line px-4 py-3">
          {/* Kèo không bao giờ lên card — có test CI canh điều này (P3). */}
          <p className="text-[13px] leading-relaxed text-muted">
            Chỉ người trong sổ thấy kèo của bạn. Kèo không bao giờ lên card.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-line px-4 py-3">
        <h1 className="text-[15px] font-medium">Mở sổ của nhóm mình</h1>
      </header>

      <div className="px-4 py-4">
        <label className="block text-[15px] font-medium">Sổ này tên gì?</label>
        <div className="mt-2 rounded-lg border border-line bg-surface px-3 py-3 text-[15px] text-muted">
          Ví dụ: Sổ nhà 4 đứa
        </div>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {["Sổ lớp mình", "Sổ phòng trọ", "Sổ 5 đứa", "Sổ cày đêm"].map((name) => (
            <span key={name} className="rounded-full border border-line px-3 py-1.5 text-[13px]">
              {name}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-line pt-5">
          <label className="block text-[15px] font-medium">Tên bạn hiện trên card là gì?</label>
          <div className="mt-2 rounded-lg border border-line bg-surface px-3 py-3 text-[15px] text-muted">
            Linh
          </div>
          <p className="mt-1.5 text-[12px] text-muted">≤12 ký tự. Cả sổ sẽ thấy tên này.</p>

          <div className="mt-4 flex items-start gap-2.5">
            <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded border border-line bg-surface text-[11px]">
              ✓
            </span>
            <span className="text-[14px]">Tôi từ 16 tuổi trở lên.</span>
          </div>

          {/* Dòng cảnh báo không-bỏ-qua-được (S9): người nộp phải biết ảnh của
              mình có thể ra khỏi app trước khi họ nộp tấm đầu tiên. */}
          <p className="mt-3 text-[12px] leading-relaxed text-muted">
            Ảnh bạn nộp có thể xuất hiện trên card mà cả sổ gửi vào nhóm chat.
          </p>
        </div>
      </div>

      <div className="mt-auto border-t border-line px-4 py-3">
        <Link
          href="/mo-so?b=goal"
          className="block rounded-lg bg-accent px-4 py-3 text-center text-[15px] font-medium text-accent-ink"
        >
          Tiếp
        </Link>
      </div>
    </div>
  );
}
