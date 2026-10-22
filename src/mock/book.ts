/**
 * Dữ liệu giả cho demo giai đoạn 2.
 *
 * Nguyên tắc: file này chỉ khai LỊCH SỬ NỘP THÔ (ai nộp ngày nào, nhãn gì).
 * Ba con số trên UI — ngày thứ mấy, bao nhiêu tấm, chuỗi mấy — đều được tính
 * bằng hàm thật trong `src/core`, không gõ tay. Nhờ vậy demo sai ở đâu thì
 * nghĩa là cơ chế sai ở đó, chứ không phải fixture sai.
 *
 * Khi lớp truy cập CSDL có thật, chỉ thay `bookHistory` bằng truy vấn — phần
 * tính toán dưới đây giữ nguyên.
 */
import {
  activeEffective,
  addBookDays,
  applyStreakSequence,
  countMissesInWindow,
  quorumThreshold,
  dayCounts,
  type BookDate,
  type FinalizedDayForStreak,
} from "../core/index";

export type ProofLabel = "done" | "toang";

export interface MockPerson {
  readonly id: string;
  readonly name: string;
}

export interface MockProof {
  readonly personId: string;
  readonly label: ProofLabel;
}

export interface MockDay {
  readonly dayIndex: number;
  readonly bookDate: BookDate;
  readonly proofs: readonly MockProof[];
}

/** Hằng số cơ chế — ở sản phẩm thật đọc từ bảng `remote_config`, không từ đây. */
export const mockRemoteConfig = {
  scoring: { kSmall: 1, kLarge: 2 },
  streak: { activeWindowDays: 7, restDays: 2 },
  bookCode: { alphabet: "23456789ACDEFGHJKMNPQRTUVWXY", length: 6 },
  uploadGraceSeconds: 120,
  memberCap: 8,
} as const;

export const people = {
  linh: { id: "p-linh", name: "Linh" },
  minh: { id: "p-minh", name: "Minh" },
  an: { id: "p-an", name: "An" },
  thao: { id: "p-thao", name: "Thảo" },
} as const satisfies Record<string, MockPerson>;

/** Người đang xem demo. Ô của mình luôn nằm SAU ảnh người khác (nguyên tắc P5). */
export const me = people.thao;

export const book = {
  id: "b-1",
  name: "Sổ nhà 4 đứa",
  /** Khoá VÀO sổ. In lên card để sống sót khi domain bị chặn (UX-2). */
  code: "K7QM2P",
  /** Chỉ để XEM trang public. Độc lập hoàn toàn với `code` (QĐ-12b). */
  shareToken: "w9td4mz2hb",
  startedOn: "2026-09-19" as BookDate,
  /** Mẫu số của q_c/q_x — đóng băng sau 3 ngày đầu, không trượt. */
  rosterSize: 4,
} as const;

/** Kèo của từng người. KHÔNG BAO GIỜ lên card, chỉ người trong sổ thấy (P3). */
export const goals: Record<string, string> = {
  "p-linh": "Ngủ trước 12h",
  "p-minh": "Đi bộ 20 phút",
  "p-an": "Đọc 5 trang",
  "p-thao": "Học 15 phút",
};

/**
 * Số người nộp mỗi ngày, ngày 1 → 34.
 *
 * Ba ngày 26–28 bằng 0 là có chủ đích: nó cho thấy van nghỉ hoạt động thật —
 * hụt 2/7 thì chuỗi đóng băng, hụt sang ngày thứ 3 thì đứt. Sau đó sổ sống lại
 * 6 ngày liền, nên chuỗi hiện tại là 6 chứ không phải 34.
 */
const presentPerDay: readonly number[] = [
  1, 2, 2, 3, 2, 2, 3, 2, 1, 3,
  2, 2, 3, 2, 1, 2, 3, 2, 2, 2,
  2, 2, 2, 2, 2, 0, 0, 0, 3, 2,
  3, 4, 4, 3,
];

const roster = [people.linh, people.minh, people.an, people.thao] as const;

function labelFor(dayIndex: number, slot: number): ProofLabel {
  // Rải TOANG đều đặn thay vì ngẫu nhiên, để demo dựng lại y hệt mỗi lần chạy.
  return (dayIndex + slot) % 5 === 0 ? "toang" : "done";
}

export const bookHistory: readonly MockDay[] = presentPerDay.map((count, index) => {
  const dayIndex = index + 1;
  // Đổi người nộp theo ngày để không phải lúc nào cũng cùng 2 người đầu bảng.
  // +3 để ngày 34 (ngày cuối) rơi đúng vào Linh · Minh · An, tức người đang
  // xem demo chưa nộp — nếu không thì ô "Của tao" ở màn 1 sẽ vô nghĩa.
  const proofs = Array.from({ length: count }, (_, slot) => {
    const person = roster[(index + 3 + slot) % roster.length];
    return { personId: person?.id ?? people.linh.id, label: labelFor(dayIndex, slot) };
  });

  return { dayIndex, bookDate: addBookDays(book.startedOn, index), proofs };
});

/** A(D) = số người nộp ≥1 tấm trong 7 ngày gần nhất tính tới ngày D. */
function activePeopleUpTo(index: number): number {
  const window = bookHistory.slice(Math.max(0, index - 6), index + 1);
  const ids = new Set(window.flatMap((day) => day.proofs.map((proof) => proof.personId)));
  return ids.size;
}

export interface DerivedDay {
  readonly day: MockDay;
  readonly activeEff: number;
  readonly kRequired: number;
  readonly counts: boolean;
}

/** Chạy từng ngày qua đúng chuỗi hàm mà cron rollover sẽ gọi ở sản phẩm thật. */
export const derivedDays: readonly DerivedDay[] = bookHistory.map((day, index) => {
  const activeEff = activeEffective(activePeopleUpTo(index), index === 0 ? null : activePeopleUpTo(index - 1));
  const kRequired = quorumThreshold(activeEff, mockRemoteConfig.scoring);

  return {
    day,
    activeEff,
    kRequired,
    counts: dayCounts({ activeEff, presentCount: day.proofs.length, kRequired, isFrozen: false }),
  };
});

const finalizedDays: readonly FinalizedDayForStreak[] = derivedDays.map((d) => ({
  dayCounts: d.counts,
  isFrozen: false,
}));

const streakResults = applyStreakSequence(finalizedDays, mockRemoteConfig.streak);

export const today = derivedDays[derivedDays.length - 1]!;
export const todayProofs = today.day.proofs;
export const iSubmittedToday = todayProofs.some((proof) => proof.personId === me.id);

/** Ba con số trên đầu màn 1 và trên card. Tính ra, không gõ tay. */
export const bookStats = {
  dayIndex: today.day.dayIndex,
  totalProofs: bookHistory.reduce((sum, day) => sum + day.proofs.length, 0),
  streak: streakResults[streakResults.length - 1]?.streakAfter ?? 0,
  /** Van nghỉ còn lại trong cửa sổ 7 ngày trượt. */
  restDaysLeft: Math.max(
    0,
    mockRemoteConfig.streak.restDays -
      countMissesInWindow(finalizedDays, mockRemoteConfig.streak.activeWindowDays),
  ),
} as const;

/** Dòng riêng tư ở màn 6. Mẫu số là SỐ NGÀY SỔ CÓ TÍNH, không phải ngày lịch. */
export const myPresence = {
  present: derivedDays.filter((d) => d.day.proofs.some((p) => p.personId === me.id)).length,
  countedDays: derivedDays.filter((d) => d.counts).length,
} as const;

export function personById(id: string): MockPerson {
  return roster.find((person) => person.id === id) ?? people.linh;
}

export function nameOf(id: string): string {
  return personById(id).name;
}
