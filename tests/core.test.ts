import { describe, expect, it } from "vitest";

import {
  activeEffective,
  applyStreakSequence,
  bookDateForProof,
  bookDateFromTimestamp,
  dayCounts,
  generateBookCode,
  analyticsEvents,
  isFrozenBookDate,
  isValidBookCode,
  quorumThreshold,
  slugContainsCode,
} from "../src/core/index";

const canonicalScoringConfig = {
  kSmall: 1,
  kLarge: 2,
} as const;

const canonicalStreakConfig = {
  activeWindowDays: 7,
  restDays: 2,
} as const;

const canonicalCodeOptions = {
  alphabet: "23456789ACDEFGHJKMNPQRTUVWXY",
  length: 6,
} as const;

describe("book date", () => {
  it("đổi ngày đúng ở ranh 04:00 ICT", () => {
    expect(bookDateFromTimestamp(new Date("2026-09-14T03:59:59+07:00"))).toBe("2026-09-13");
    expect(bookDateFromTimestamp(new Date("2026-09-14T04:00:00+07:00"))).toBe("2026-09-14");
    expect(bookDateFromTimestamp(new Date("2026-09-14T04:00:01+07:00"))).toBe("2026-09-14");
  });

  it("bấm gửi 03:59:40, commit 04:00:20 vẫn thuộc ngày cũ", () => {
    expect(
      bookDateForProof({
        intentAt: new Date("2026-09-14T03:59:40+07:00"),
        submittedAt: new Date("2026-09-14T04:00:20+07:00"),
        uploadGraceSeconds: 120,
      }),
    ).toBe("2026-09-13");
  });
});

describe("day scoring", () => {
  it("sổ 2 người thêm bạn thứ 3 không mất chuỗi ngay ngày thêm bạn", () => {
    const activeYesterday = 2;
    const activeToday = 3;
    const activeEff = activeEffective(activeToday, activeYesterday);
    const k = quorumThreshold(activeEff, canonicalScoringConfig);

    expect(activeEff).toBe(2);
    expect(k).toBe(1);
    expect(1 >= k).toBe(true);
  });

  it("quorumThreshold đơn điệu với A = 1..8", () => {
    const thresholds = [1, 2, 3, 4, 5, 6, 7, 8].map((active) => quorumThreshold(active, canonicalScoringConfig));

    expect(thresholds).toEqual([1, 1, 2, 2, 2, 2, 2, 2]);
    for (let index = 1; index < thresholds.length; index += 1) {
      const previous = thresholds[index - 1];
      const current = thresholds[index];
      expect(previous).toBeDefined();
      expect(current).toBeDefined();
      expect(current as number).toBeGreaterThanOrEqual(previous as number);
    }
  });

  it("ngày freeze giữ day_counts trước đó", () => {
    expect(dayCounts({ activeEff: 3, presentCount: 0, kRequired: 2, isFrozen: true, previousDayCounts: true })).toBe(true);
    expect(dayCounts({ activeEff: 3, presentCount: 3, kRequired: 2, isFrozen: true, previousDayCounts: false })).toBe(false);
  });
});

describe("streak", () => {
  it("van nghỉ: hụt 2/7 thì chuỗi sống, hụt 3 thì đứt", () => {
    const results = applyStreakSequence(
      [
        { dayCounts: true, isFrozen: false },
        { dayCounts: true, isFrozen: false },
        { dayCounts: false, isFrozen: false },
        { dayCounts: true, isFrozen: false },
        { dayCounts: true, isFrozen: false },
        { dayCounts: true, isFrozen: false },
        { dayCounts: false, isFrozen: false },
        { dayCounts: false, isFrozen: false },
      ],
      canonicalStreakConfig,
    );

    expect(results.map((result) => result.streakAfter)).toEqual([1, 2, 2, 3, 4, 5, 5, 0]);
    expect(results.at(6)?.misses7d).toBe(2);
    expect(results.at(7)?.misses7d).toBe(3);
  });

  it("Tết freeze không tiêu van và không tăng chuỗi", () => {
    const results = applyStreakSequence(
      [
        { dayCounts: true, isFrozen: false },
        { dayCounts: false, isFrozen: true },
        { dayCounts: false, isFrozen: false },
        { dayCounts: false, isFrozen: false },
      ],
      canonicalStreakConfig,
    );

    expect(isFrozenBookDate("2027-02-03", ["2027-02-03", "2027-02-04"])).toBe(true);
    expect(results.map((result) => result.streakAfter)).toEqual([1, 1, 1, 1]);
    expect(results.at(3)?.misses7d).toBe(2);
  });
});

describe("book code", () => {
  it("slugContainsCode không phân biệt hoa thường", () => {
    expect(slugContainsCode("abck7qm2pvnx", "K7QM2P")).toBe(true);
  });

  it("mã sổ không sinh ký tự dễ nhầm", () => {
    const randomBytes = Uint8Array.from({ length: 280 }, (_, index) => index);
    const codes = Array.from({ length: 40 }, (_, index) =>
      generateBookCode(randomBytes.slice(index, index + canonicalCodeOptions.length), canonicalCodeOptions),
    );

    for (const code of codes) {
      expect(isValidBookCode(code, canonicalCodeOptions.alphabet, canonicalCodeOptions.length)).toBe(true);
      expect(/[0O1IL]/.test(code)).toBe(false);
    }
  });
});

describe("analytics event catalog", () => {
  it("có 31 event active và giữ số 25 trống vĩnh viễn", () => {
    expect(analyticsEvents).toHaveLength(31);
    const eventIds: readonly number[] = analyticsEvents.map((event) => event.id);

    expect(eventIds).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32,
    ]);
    expect(eventIds.includes(25)).toBe(false);
  });
});
