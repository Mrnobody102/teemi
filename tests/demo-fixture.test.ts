import { describe, expect, it } from "vitest";

import { quorumThreshold } from "../src/core/index";
import {
  bookHistory,
  bookStats,
  derivedDays,
  iSubmittedToday,
  me,
  mockRemoteConfig,
  myPresence,
  today,
  todayProofs,
} from "../src/mock/book";

/**
 * Fixture demo phải TỰ NHẤT QUÁN.
 *
 * Demo là thứ founder nhìn để quyết, nên một fixture lệch sẽ dẫn tới một quyết
 * định sai mà không ai thấy. Những test dưới đây canh đúng các chỗ đã lệch thật
 * một lần rồi.
 */
describe("fixture demo", () => {
  it("ba con số dẫn xuất từ lịch sử, không gõ tay", () => {
    expect(bookStats.dayIndex).toBe(bookHistory.length);
    expect(bookStats.totalProofs).toBe(
      bookHistory.reduce((sum, day) => sum + day.proofs.length, 0),
    );
  });

  it("ngưỡng k của hôm nay đúng bằng quorumThreshold(A_eff)", () => {
    expect(today.kRequired).toBe(quorumThreshold(today.activeEff, mockRemoteConfig.scoring));
  });

  it("người đang xem demo CHƯA nộp hôm nay, nên ô 'Của tao' có nghĩa", () => {
    // Đã lệch một lần: roster xoay tới đúng `me` vào ngày cuối, làm màn 1 vừa
    // hiện ảnh của mình vừa hiện ô "+ Của tao".
    expect(iSubmittedToday).toBe(false);
    expect(todayProofs.some((proof) => proof.personId === me.id)).toBe(false);
  });

  it("van nghỉ còn lại không bao giờ âm và không vượt trần", () => {
    expect(bookStats.restDaysLeft).toBeGreaterThanOrEqual(0);
    expect(bookStats.restDaysLeft).toBeLessThanOrEqual(mockRemoteConfig.streak.restDays);
  });

  it("mẫu số dòng riêng tư là SỐ NGÀY SỔ CÓ TÍNH, không phải ngày lịch", () => {
    expect(myPresence.countedDays).toBe(derivedDays.filter((d) => d.counts).length);
    expect(myPresence.countedDays).toBeLessThan(bookHistory.length);
    expect(myPresence.present).toBeLessThanOrEqual(myPresence.countedDays);
  });

  it("chuỗi phản ánh cú đứt ở ngày 26–28, không bằng tổng số ngày", () => {
    expect(bookStats.streak).toBeGreaterThan(0);
    expect(bookStats.streak).toBeLessThan(bookHistory.length);
  });
});
