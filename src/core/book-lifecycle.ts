export type BookStatus = "forming" | "active" | "dormant" | "dead" | "archived";

export interface LifecycleInput {
  readonly currentStatus: BookStatus;
  readonly activePeopleIn7d: number;
  readonly consecutiveDaysActiveBelow3: number;
  readonly consecutiveDaysWithoutProof: number;
  readonly everyMemberLeft: boolean;
  readonly formedToday: boolean;
}

export function nextBookStatus(input: LifecycleInput): BookStatus {
  if (input.everyMemberLeft) {
    return "archived";
  }

  if (input.currentStatus === "archived") {
    return "archived";
  }

  if (input.currentStatus === "forming") {
    if (input.formedToday) {
      return "active";
    }
    if (input.consecutiveDaysWithoutProof >= 14) {
      return "dead";
    }
    return "forming";
  }

  if (input.consecutiveDaysWithoutProof >= 21) {
    return "dead";
  }

  if (input.currentStatus === "dead" && input.activePeopleIn7d > 0) {
    return "active";
  }

  if (input.activePeopleIn7d >= 3) {
    return "active";
  }

  if (input.consecutiveDaysActiveBelow3 >= 7) {
    return "dormant";
  }

  return input.currentStatus;
}
