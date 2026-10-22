import Link from "next/link";
import { Mascot, IconPlus } from "../doodle";
import { ProofTile } from "../proof-tile";
import { PrimaryButton, SecondaryButton, Shell } from "../shell";
import { book, bookStats, iSubmittedToday, me, nameOf, todayProofs } from "../../mock/book";

/**
 * Màn 1 — Sổ hôm nay (thành viên).
 *
 * Trang công khai cho người CHƯA vào sổ là một trang riêng không JavaScript:
 * `src/ui/screens/so-cong-khai.ts`.
 *
 * Hai thứ KHÔNG có ở đây, đều có chủ đích:
 * - **Lưới 30 ngày** — cắt khỏi MVP-0 (A86), quay lại T13+.
 * - **Nút thả tim** — cắt (A27/S01).
 */
export function ScreenSoHomNay() {
  return (
    <Shell
      title={
        <div>
          <h1 className="font-hand text-[30px] leading-none">{book.name}</h1>
          {/* Ba dữ kiện, không tính từ, không cảm xúc — font hệ thống, cố ý nhạt. */}
          <p className="mt-1.5 text-[13px] text-muted">
            Ngày thứ {bookStats.dayIndex} · {bookStats.totalProofs} tấm · chuỗi {bookStats.streak}
          </p>
        </div>
      }
      right={
        <Link href="/cua-toi" className="hand-dash px-2.5 py-1 font-hand text-[16px] text-muted">
          của tôi
        </Link>
      }
      footer={
        <div className="flex gap-3">
          <div className="flex-1">
            <PrimaryButton href="/nop">Nộp</PrimaryButton>
          </div>
          <div className="flex-1">
            <SecondaryButton href="/card">Chốt sổ</SecondaryButton>
          </div>
        </div>
      }
    >
      <section className="px-4 pt-4 pb-2">
        <h2 className="mb-4 font-hand text-[22px]">
          <span className="marker">Hôm nay</span>
        </h2>

        {todayProofs.length === 0 ? (
          <div className="flex flex-col items-center py-8 text-center">
            <Mascot pose="ngu" className="h-24 w-24" />
            <p className="mt-3 font-hand text-[20px]">Chưa có tấm nào hôm nay.</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-x-3 gap-y-5">
            {todayProofs.map((proof, i) => (
              <Link key={proof.personId} href={`/anh/${proof.personId}`}>
                <ProofTile
                  index={i}
                  name={nameOf(proof.personId)}
                  label={proof.label}
                  seed={`${proof.personId}-${bookStats.dayIndex}`}
                />
              </Link>
            ))}

            {/* Ô của MÌNH nằm SAU ảnh người khác (P5): mở app là thấy bạn mình
                trước, thấy phần của mình sau. Chỉ hiện khi mình chưa nộp. */}
            {iSubmittedToday ? null : (
              <Link href="/nop" className="hand-dash flex aspect-[4/5] flex-col items-center justify-center gap-1 text-muted">
                <IconPlus className="h-8 w-8" />
                <span className="font-hand text-[18px]">Của tao</span>
              </Link>
            )}
          </div>
        )}
      </section>

      <section className="mx-4 mt-4 flex items-center gap-3 border-t-2 border-dashed border-line pt-4">
        <Mascot pose="ngo" className="h-12 w-12 shrink-0" />
        {/* Câu về SỔ, không về một người — đúng với mọi thành viên như nhau. */}
        <p className="font-hand text-[18px] leading-snug">
          {bookStats.restDaysLeft === 0
            ? "Tuần này sổ hết lượt được lười rồi."
            : `Tuần này sổ còn ${bookStats.restDaysLeft} lần được lười.`}
        </p>
      </section>

      <p className="px-4 pt-3 pb-2 text-center text-[12px] text-muted">Đang xem với tư cách {me.name}</p>
    </Shell>
  );
}
