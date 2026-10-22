export interface AnalyticsEventDefinition {
  readonly id: number;
  readonly name: string;
}

export const analyticsEvents = [
  { id: 1, name: "book_created" },
  { id: 2, name: "invite_link_created" },
  { id: 3, name: "invite_link_opened" },
  { id: 4, name: "member_joined" },
  { id: 5, name: "goal_set" },
  { id: 6, name: "goal_changed" },
  { id: 7, name: "safety_screen_shown" },
  { id: 8, name: "proof_intent" },
  { id: 9, name: "proof_committed" },
  { id: 10, name: "proof_failed" },
  { id: 11, name: "proof_deleted_by_self" },
  { id: 12, name: "card_rendered" },
  { id: 13, name: "card_shared" },
  { id: 14, name: "card_opened" },
  { id: 15, name: "book_day_finalized" },
  { id: 16, name: "full_table_hit" },
  { id: 17, name: "streak_broken" },
  { id: 18, name: "milestone_hit" },
  { id: 19, name: "member_dormant" },
  { id: 20, name: "member_left" },
  { id: 21, name: "report_created" },
  { id: 22, name: "report_resolved" },
  { id: 23, name: "block_created" },
  { id: 24, name: "exit_survey_answered" },
  // Số 25 là `heart_sent` đã bị cắt. Không tái sử dụng số này.
  { id: 26, name: "book_status_changed" },
  { id: 27, name: "silence_window_day" },
  { id: 28, name: "visits_alert" },
  { id: 29, name: "persons_alert" },
  { id: 30, name: "pulse_survey" },
  { id: 31, name: "submit_started" },
  { id: 32, name: "submit_abandoned" },
] as const satisfies readonly AnalyticsEventDefinition[];

export type AnalyticsEventName = (typeof analyticsEvents)[number]["name"];

export function eventNameById(id: number): AnalyticsEventName | null {
  return analyticsEvents.find((event) => event.id === id)?.name ?? null;
}
