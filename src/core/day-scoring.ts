export interface ThresholdConfig {
  readonly kSmall: number;
  readonly kLarge: number;
}

export function activeEffective(activeToday: number, activePrevious: number | null): number {
  return activePrevious === null ? activeToday : Math.min(activeToday, activePrevious);
}

export function quorumThreshold(activeEff: number, config: ThresholdConfig): number {
  return activeEff <= 2 ? config.kSmall : config.kLarge;
}

export function dayCounts(input: {
  readonly activeEff: number;
  readonly presentCount: number;
  readonly kRequired: number;
  readonly isFrozen: boolean;
  readonly previousDayCounts?: boolean;
}): boolean {
  if (input.isFrozen) {
    return input.previousDayCounts ?? false;
  }

  return input.activeEff > 0 && input.presentCount >= input.kRequired;
}

export function isFullTable(input: { readonly activeEff: number; readonly presentCount: number }): boolean {
  return input.activeEff >= 2 && input.presentCount === input.activeEff;
}
