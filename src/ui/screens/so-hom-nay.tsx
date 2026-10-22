import Link from "next/link";
import { ProofTile } from "../proof-tile";
import { DoodleWaiting } from "../doodle";
import { book, bookStats, iSubmittedToday, me, nameOf, todayProofs } from "../../mock/book";

/**
 * Màn 1 — Sổ hôm nay. Vừa là home của thành viên, vừa là trang public của link mời.
 *
 * Hai thứ KHÔNG có ở đây, và đều là cố ý:
 * - **Lưới 30 ngày** — bị cắt khỏi MVP-0 (A86), quay lại T13+. Wireframe ở `08` §4
 *   còn vẽ nó vì được soạn trước phán quyết.
 * - **Nút thả tim** — bị cắt (A27/S01). Trang public ở MVP-0 là chỉ-đọc.
 */
export function ScreenSoHomNay({ mode }: { mode: "member" | "public" }) {
  const isPublic = mode === "public";

  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-line px-4 pt-4 pb-3">
        <div className="flex items-start justify-between gap-2">
          <h1 className="text-[17px] font-semibold tracking-tight">{book.name}</h1>
          {isPublic || iSubmittedToday ? null : (
            <Link href="/cua-toi" className="shrink-0 text-[15px] text-muted" aria-label="Của tôi">
              ⚙
            </Link>
          )}
        </div>
        {/* Ba dữ kiện, không tính từ, không cảm xúc. */}
        <p className="mt-1 text-[13px] text-muted">
          Ngày thứ {bookStats.dayIndex} · {bookStats.totalProofs} tấm · chuỗi {bookStats.streak}
        </p>
      </header>

      <section className="px-4 py-4">
        <h2 className="mb-2.5 text-[11px] font-semibold tracking-widest text-muted">HÔM NAY</h2>

        {todayProofs.length === 0 ? (
          <div className="flex flex-col items-center py-6 text-muted">
            <DoodleWaiting className="h-16 w-16" />
            <p className="mt-2 text-[14px]">Chưa có tấm nào hôm nay.</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2.5">
            {todayProofs.map((proof) => (
              <Link
                key={proof.personId}
                href={isPublic ? "/s/w9td4mz2hb" : `/anh/${proof.personId}`}
                className={isPublic ? "pointer-events-none" : ""}
              >
                <ProofTile
                  name={nameOf(proof.personId)}
                  label={proof.label}
                  seed={`${proof.personId}-${bookStats.dayIndex}`}
                  blurred={isPublic}
                />
              </Link>
            ))}
          </div>
        )}

        {/* Ô của MÌNH nằm SAU ảnh người khác (nguyên tắc P5): mở app là thấy
            bạn mình trước, thấy nghĩa vụ của mình sau. */}
        {isPublic ? null : (
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            <Link href="/nop" className="w-full">
              <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-lg border border-dashed border-line bg-surface">
                <span className="text-[22px] leading-none text-muted">+</span>
              </div>
              <div className="mt-1.5 px-0.5 text-[13px] text-muted">Của tao</div>
            </Link>
          </div>
        )}
      </section>

      {isPublic ? (
        <section className="border-t border-line px-4 py-4">
          <p className="text-[15px] leading-relaxed">
            Tối nào nhóm cũng chốt sổ: mỗi đứa một tấm,{" "}
            <span className="marker">không ai cài app</span>.
          </p>
        </section>
      ) : (
        <section className="border-t border-line px-4 py-3">
          <p className="text-[13px] text-muted">
            {bookStats.restDaysLeft === 0
              ? "Sổ này đã dùng hết ngày nghỉ trong tuần."
              : `Sổ này còn ${bookStats.restDaysLeft} ngày nghỉ trong tuần.`}
          </p>
        </section>
      )}

      <div className="mt-auto border-t border-line px-4 py-3">
        {isPublic ? (
          <Link
            href="/mo-so"
            className="block rounded-lg bg-accent px-4 py-3 text-center text-[15px] font-medium text-accent-ink"
          >
            Vào sổ này
          </Link>
        ) : (
          <div className="flex gap-2.5">
            <Link
              href="/nop"
              className="flex-1 rounded-lg bg-accent px-4 py-3 text-center text-[15px] font-medium text-accent-ink"
            >
              Nộp
            </Link>
            <Link
              href="/card"
              className="flex-1 rounded-lg border border-line px-4 py-3 text-center text-[15px] font-medium"
            >
              Chốt sổ
            </Link>
          </div>
        )}
        {isPublic ? null : (
          <p className="mt-2 text-center text-[12px] text-muted">
            Đang xem với tư cách {me.name}
          </p>
        )}
      </div>
    </div>
  );
}
