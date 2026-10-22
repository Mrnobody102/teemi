export interface MetricTotals {
  readonly presentCount: number;
  readonly xongCount: number;
  readonly rosterSize: number;
}

export function qcRoster(totals: MetricTotals): number | null {
  return divideOrNull(totals.presentCount, totals.rosterSize);
}

export function qxRoster(totals: MetricTotals): number | null {
  return divideOrNull(totals.xongCount, totals.rosterSize);
}

export function divideOrNull(numerator: number, denominator: number): number | null {
  if (denominator === 0) {
    return null;
  }

  return numerator / denominator;
}
