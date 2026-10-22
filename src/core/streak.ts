export interface StreakConfig {
  readonly activeWindowDays: number;
  readonly restDays: number;
}

export interface FinalizedDayForStreak {
  readonly dayCounts: boolean;
  readonly isFrozen: boolean;
}

export interface StreakStepInput {
  readonly previousStreak: number;
  readonly dayCounts: boolean;
  readonly isFrozen: boolean;
  readonly previousDaysNewestLast: readonly FinalizedDayForStreak[];
  readonly config: StreakConfig;
}

export interface StreakStepResult {
  readonly misses7d: number;
  readonly streakAfter: number;
}

export function countMissesInWindow(daysNewestLast: readonly FinalizedDayForStreak[], activeWindowDays: number): number {
  return daysNewestLast.slice(-activeWindowDays).filter((day) => !day.dayCounts && !day.isFrozen).length;
}

export function applyStreakStep(input: StreakStepInput): StreakStepResult {
  if (input.isFrozen) {
    return {
      misses7d: countMissesInWindow(input.previousDaysNewestLast, input.config.activeWindowDays - 1),
      streakAfter: input.previousStreak,
    };
  }

  const previousMisses = countMissesInWindow(input.previousDaysNewestLast, input.config.activeWindowDays - 1);
  const misses7d = input.dayCounts ? previousMisses : previousMisses + 1;

  if (input.dayCounts) {
    return { misses7d, streakAfter: input.previousStreak + 1 };
  }

  if (misses7d <= input.config.restDays) {
    return { misses7d, streakAfter: input.previousStreak };
  }

  return { misses7d, streakAfter: 0 };
}

export function applyStreakSequence(days: readonly FinalizedDayForStreak[], config: StreakConfig): readonly StreakStepResult[] {
  const results: StreakStepResult[] = [];

  for (const day of days) {
    const previousStreak = results.at(-1)?.streakAfter ?? 0;
    results.push(
      applyStreakStep({
        previousStreak,
        dayCounts: day.dayCounts,
        isFrozen: day.isFrozen,
        previousDaysNewestLast: days.slice(0, results.length),
        config,
      }),
    );
  }

  return results;
}
