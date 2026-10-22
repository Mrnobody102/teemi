ALTER TABLE "book" DROP CONSTRAINT "book_code_fmt";--> statement-breakpoint
ALTER TABLE "book" DROP CONSTRAINT "book_name_len";--> statement-breakpoint
ALTER TABLE "book" DROP CONSTRAINT "book_branch_ok";--> statement-breakpoint
ALTER TABLE "goal" DROP CONSTRAINT "goal_len";--> statement-breakpoint
ALTER TABLE "proof" DROP CONSTRAINT "proof_bytes_sane";--> statement-breakpoint
ALTER TABLE "report" DROP CONSTRAINT "report_note_len";--> statement-breakpoint
DROP INDEX "membership_person_idx";--> statement-breakpoint
DROP INDEX "proof_book_day_idx";--> statement-breakpoint
DROP INDEX "proof_active_idx";--> statement-breakpoint
DROP INDEX "proof_ttl_idx";--> statement-breakpoint
DROP INDEX "report_open_idx";--> statement-breakpoint
CREATE INDEX "membership_person_idx" ON "membership" USING btree ("person_id") WHERE "status" = 'active';--> statement-breakpoint
CREATE INDEX "proof_book_day_idx" ON "proof" USING btree ("book_id","book_date" DESC NULLS LAST) WHERE "deleted_at" is null and "hidden_at" is null;--> statement-breakpoint
CREATE INDEX "proof_active_idx" ON "proof" USING btree ("book_id","person_id","book_date" DESC NULLS LAST) WHERE "deleted_at" is null;--> statement-breakpoint
CREATE INDEX "proof_ttl_idx" ON "proof" USING btree ("orig_expires_at") WHERE "orig_key" is not null;--> statement-breakpoint
CREATE INDEX "report_open_idx" ON "report" USING btree ("sla_due_at") WHERE "resolved_at" is null;--> statement-breakpoint
ALTER TABLE "book" ADD CONSTRAINT "book_code_fmt" CHECK ("code" ~ '^[2-9ACDEFGHJKMNPQRTUVWXY]{6}$');--> statement-breakpoint
ALTER TABLE "book" ADD CONSTRAINT "book_name_len" CHECK (char_length("name") between 1 and 24);--> statement-breakpoint
ALTER TABLE "book" ADD CONSTRAINT "book_branch_ok" CHECK ("branch" in ('A','B'));--> statement-breakpoint
ALTER TABLE "goal" ADD CONSTRAINT "goal_len" CHECK (char_length("goal_text") between 1 and 30);--> statement-breakpoint
ALTER TABLE "proof" ADD CONSTRAINT "proof_bytes_sane" CHECK ("bytes_orig" is null or "bytes_orig" <= 800000);--> statement-breakpoint
ALTER TABLE "report" ADD CONSTRAINT "report_note_len" CHECK ("note" is null or char_length("note") <= 500);