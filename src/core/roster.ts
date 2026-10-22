import type { BookDate } from "./day.js";

export interface ProofPresence {
  readonly personId: string;
  readonly bookDate: BookDate;
  readonly deleted: boolean;
}

export function rosterSizeForFirstThreeDays(proofs: readonly ProofPresence[], startedOn: BookDate): number {
  const firstThree = new Set([startedOn, addDateUnchecked(startedOn, 1), addDateUnchecked(startedOn, 2)]);
  const personIds = new Set<string>();

  for (const proof of proofs) {
    if (!proof.deleted && firstThree.has(proof.bookDate)) {
      personIds.add(proof.personId);
    }
  }

  return personIds.size;
}

function addDateUnchecked(bookDate: BookDate, days: number): BookDate {
  const [year, month, day] = bookDate.split("-").map(Number);
  if (year === undefined || month === undefined || day === undefined) {
    throw new Error(`INVALID_BOOK_DATE: ${bookDate}`);
  }

  return new Date(Date.UTC(year, month - 1, day + days)).toISOString().slice(0, 10) as BookDate;
}
