export type BookDate = `${number}-${number}-${number}`;

const ICT_BOOK_CUTOFF_OFFSET_MS = 3 * 60 * 60 * 1000;

export interface ProofTimestampInput {
  readonly intentAt: Date | null;
  readonly submittedAt: Date;
  readonly uploadGraceSeconds: number;
}

export function bookDateFromTimestamp(ts: Date): BookDate {
  const shifted = new Date(ts.getTime() + ICT_BOOK_CUTOFF_OFFSET_MS);
  return shifted.toISOString().slice(0, 10) as BookDate;
}

export function bookDateForProof(input: ProofTimestampInput): BookDate {
  if (input.intentAt !== null) {
    const deltaMs = input.submittedAt.getTime() - input.intentAt.getTime();
    if (deltaMs >= 0 && deltaMs <= input.uploadGraceSeconds * 1000) {
      return bookDateFromTimestamp(input.intentAt);
    }
  }

  return bookDateFromTimestamp(input.submittedAt);
}

export function isFrozenBookDate(bookDate: BookDate, frozenDates: readonly BookDate[]): boolean {
  return frozenDates.includes(bookDate);
}

export function addBookDays(bookDate: BookDate, days: number): BookDate {
  const [year, month, day] = parseBookDate(bookDate);
  const utc = Date.UTC(year, month - 1, day + days);
  return new Date(utc).toISOString().slice(0, 10) as BookDate;
}

function parseBookDate(bookDate: BookDate): readonly [number, number, number] {
  const parts = bookDate.split("-");
  const year = Number(parts[0]);
  const month = Number(parts[1]);
  const day = Number(parts[2]);

  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
    throw new Error(`INVALID_BOOK_DATE: ${bookDate}`);
  }

  return [year, month, day] as const;
}
