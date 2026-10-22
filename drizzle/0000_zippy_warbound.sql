CREATE EXTENSION IF NOT EXISTS pgcrypto;--> statement-breakpoint
CREATE OR REPLACE FUNCTION ict_book_date(ts timestamptz)
RETURNS date
LANGUAGE sql
IMMUTABLE
AS $fn$
  SELECT ((timestamp 'epoch'
           + ((extract(epoch from ts)::bigint + 10800) * interval '1 second'))::date)
$fn$;--> statement-breakpoint
CREATE OR REPLACE FUNCTION ict_day_start(d date) RETURNS timestamptz
LANGUAGE sql IMMUTABLE AS $fn$
  SELECT to_timestamp(((d - date 'epoch')::bigint * 86400) + 14400 - 25200)
$fn$;--> statement-breakpoint
CREATE OR REPLACE FUNCTION current_person_id() RETURNS uuid
LANGUAGE sql STABLE AS $fn$
  SELECT coalesce(
    nullif(current_setting('request.jwt.claims', true)::jsonb ->> 'sub',''),
    nullif(current_setting('app.person_id', true),'')
  )::uuid
$fn$;--> statement-breakpoint
CREATE TYPE "public"."book_status" AS ENUM('forming', 'active', 'dormant', 'dead', 'archived');--> statement-breakpoint
CREATE TYPE "public"."member_status" AS ENUM('invited', 'active', 'paused', 'dormant', 'left', 'removed');--> statement-breakpoint
CREATE TYPE "public"."proof_status" AS ENUM('xong', 'toang');--> statement-breakpoint
CREATE TYPE "public"."report_action" AS ENUM('removed', 'kept', 'account_blocked', 'escalated');--> statement-breakpoint
CREATE TYPE "public"."report_reason" AS ENUM('nudity', 'violence', 'harassment', 'minor', 'other');--> statement-breakpoint
CREATE TABLE "device" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"person_id" uuid NOT NULL,
	"token_hash" "bytea" NOT NULL,
	"ua_family" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_seen_at" timestamp with time zone DEFAULT now() NOT NULL,
	"revoked_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "person" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"display_name" text NOT NULL,
	"avatar_seed" text DEFAULT gen_random_uuid()::text NOT NULL,
	"is_16_plus" boolean DEFAULT false NOT NULL,
	"age_gate_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_seen_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone,
	"anonymized_at" timestamp with time zone,
	CONSTRAINT "person_name_len" CHECK (char_length("display_name") between 1 and 24)
);
--> statement-breakpoint
CREATE TABLE "book" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"code" char(6) NOT NULL,
	"name" text NOT NULL,
	"created_by" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"started_on" date NOT NULL,
	"status" "book_status" DEFAULT 'forming' NOT NULL,
	"status_since" timestamp with time zone DEFAULT now() NOT NULL,
	"branch" char(1) DEFAULT 'A' NOT NULL,
	"rotation_idx" integer DEFAULT 0 NOT NULL,
	"archived_at" timestamp with time zone,
	CONSTRAINT "book_code_fmt" CHECK ("code" ~ '^[2-9ACDEFGHJKMNPQRTUVWXY]{6}$'),
	CONSTRAINT "book_name_len" CHECK (char_length("name") between 1 and 24),
	CONSTRAINT "book_branch_ok" CHECK ("branch" in ('A','B'))
);
--> statement-breakpoint
CREATE TABLE "goal" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"book_id" uuid NOT NULL,
	"person_id" uuid NOT NULL,
	"goal_text" text NOT NULL,
	"is_custom" boolean DEFAULT false NOT NULL,
	"effective_from" date NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "goal_len" CHECK (char_length("goal_text") between 1 and 30)
);
--> statement-breakpoint
CREATE TABLE "membership" (
	"book_id" uuid NOT NULL,
	"person_id" uuid NOT NULL,
	"status" "member_status" DEFAULT 'invited' NOT NULL,
	"status_since" timestamp with time zone DEFAULT now() NOT NULL,
	"joined_at" timestamp with time zone,
	"left_at" timestamp with time zone,
	"invited_by" uuid,
	"rotation_pos" integer NOT NULL,
	"keep_proofs_on_leave" boolean DEFAULT true NOT NULL,
	"paused_until" timestamp with time zone,
	CONSTRAINT "membership_book_id_person_id_pk" PRIMARY KEY("book_id","person_id")
);
--> statement-breakpoint
CREATE TABLE "book_day" (
	"book_id" uuid NOT NULL,
	"book_date" date NOT NULL,
	"day_number" integer NOT NULL,
	"active_count" smallint NOT NULL,
	"roster_size" smallint NOT NULL,
	"k_required" smallint NOT NULL,
	"present_count" smallint NOT NULL,
	"xong_count" smallint NOT NULL,
	"toang_count" smallint NOT NULL,
	"is_full_table" boolean NOT NULL,
	"is_frozen" boolean DEFAULT false NOT NULL,
	"day_counts" boolean NOT NULL,
	"misses_7d" smallint NOT NULL,
	"streak_after" integer NOT NULL,
	"proof_total_after" integer NOT NULL,
	"finalized_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "book_day_book_id_book_date_pk" PRIMARY KEY("book_id","book_date")
);
--> statement-breakpoint
CREATE TABLE "proof" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"book_id" uuid NOT NULL,
	"person_id" uuid NOT NULL,
	"client_proof_id" uuid NOT NULL,
	"intent_at" timestamp with time zone,
	"submitted_at" timestamp with time zone DEFAULT now() NOT NULL,
	"book_date" date GENERATED ALWAYS AS (ict_book_date(case when "intent_at" is not null and "submitted_at" - "intent_at" <= interval '120 seconds' then "intent_at" else "submitted_at" end)) STORED,
	"status" "proof_status" NOT NULL,
	"orig_key" text,
	"thumb_key" text,
	"bytes_orig" integer,
	"orig_expires_at" timestamp with time zone,
	"replaced_count" smallint DEFAULT 0 NOT NULL,
	"deleted_at" timestamp with time zone,
	"deleted_by" uuid,
	"hidden_at" timestamp with time zone,
	CONSTRAINT "proof_bytes_sane" CHECK ("bytes_orig" is null or "bytes_orig" <= 800000)
);
--> statement-breakpoint
CREATE TABLE "card" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"book_id" uuid NOT NULL,
	"book_date" date NOT NULL,
	"rendered_by" uuid NOT NULL,
	"rendered_at" timestamp with time zone DEFAULT now() NOT NULL,
	"image_key" text,
	"next_closer" uuid,
	"share_token" text NOT NULL,
	"share_expires_at" timestamp with time zone DEFAULT now() + interval '7 days' NOT NULL,
	"open_count" integer DEFAULT 0 NOT NULL,
	"asset_nonce" text DEFAULT encode(gen_random_bytes(8),'hex') NOT NULL,
	"person_ids" uuid[] DEFAULT '{}'::uuid[] NOT NULL,
	"rerendered_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "card_open" (
	"card_id" uuid NOT NULL,
	"person_id" uuid,
	"opener_hash" "bytea" NOT NULL,
	"opened_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "card_open_card_id_opener_hash_pk" PRIMARY KEY("card_id","opener_hash")
);
--> statement-breakpoint
CREATE TABLE "audit_log" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"at" timestamp with time zone DEFAULT now() NOT NULL,
	"person_id" uuid,
	"book_id" uuid,
	"action" text NOT NULL,
	"ip_trunc" "inet",
	"ua_family" text,
	"detail" jsonb,
	"retain_until" date DEFAULT (now() + interval '25 months')::date NOT NULL
);
--> statement-breakpoint
CREATE TABLE "block" (
	"blocker_id" uuid NOT NULL,
	"blocked_id" uuid NOT NULL,
	"book_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "block_blocker_id_blocked_id_book_id_pk" PRIMARY KEY("blocker_id","blocked_id","book_id")
);
--> statement-breakpoint
CREATE TABLE "moderation_evidence" (
	"proof_id" uuid NOT NULL,
	"report_id" uuid NOT NULL,
	"object_key" text NOT NULL,
	"retain_until" date NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "moderation_evidence_report_id_proof_id_pk" PRIMARY KEY("report_id","proof_id")
);
--> statement-breakpoint
CREATE TABLE "report" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"proof_id" uuid,
	"book_id" uuid NOT NULL,
	"reporter_id" uuid,
	"reason" "report_reason" NOT NULL,
	"note" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"sla_due_at" timestamp with time zone GENERATED ALWAYS AS ("created_at" + interval '48 hours') STORED,
	"resolved_at" timestamp with time zone,
	"action" "report_action",
	CONSTRAINT "report_note_len" CHECK ("note" is null or char_length("note") <= 500)
);
--> statement-breakpoint
CREATE TABLE "event" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"occurred_at" timestamp with time zone DEFAULT now() NOT NULL,
	"book_date" date GENERATED ALWAYS AS (ict_book_date("occurred_at")) STORED,
	"book_id" uuid,
	"person_id" uuid,
	"session_id" uuid,
	"props" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"schema_ver" smallint DEFAULT 1 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exit_survey" (
	"person_id" uuid,
	"book_id" uuid,
	"choice" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "rate_bucket" (
	"subject_type" text NOT NULL,
	"subject_id" text NOT NULL,
	"action" text NOT NULL,
	"window_start" timestamp with time zone NOT NULL,
	"n" integer DEFAULT 0 NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "rate_bucket_subject_type_subject_id_action_window_start_pk" PRIMARY KEY("subject_type","subject_id","action","window_start")
);
--> statement-breakpoint
CREATE TABLE "remote_config" (
	"key" text PRIMARY KEY NOT NULL,
	"value" jsonb NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"note" text
);
--> statement-breakpoint
CREATE TABLE "request_idem" (
	"key" text PRIMARY KEY NOT NULL,
	"person_id" uuid,
	"endpoint" text NOT NULL,
	"status_code" smallint NOT NULL,
	"response" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "safety_keyword" (
	"pattern" text PRIMARY KEY NOT NULL,
	"bucket" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "device" ADD CONSTRAINT "device_person_id_person_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."person"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "book" ADD CONSTRAINT "book_created_by_person_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."person"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "goal" ADD CONSTRAINT "goal_book_id_book_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."book"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "goal" ADD CONSTRAINT "goal_person_id_person_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."person"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "membership" ADD CONSTRAINT "membership_book_id_book_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."book"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "membership" ADD CONSTRAINT "membership_person_id_person_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."person"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "membership" ADD CONSTRAINT "membership_invited_by_person_id_fk" FOREIGN KEY ("invited_by") REFERENCES "public"."person"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "book_day" ADD CONSTRAINT "book_day_book_id_book_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."book"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "proof" ADD CONSTRAINT "proof_book_id_book_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."book"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "proof" ADD CONSTRAINT "proof_person_id_person_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."person"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "proof" ADD CONSTRAINT "proof_deleted_by_person_id_fk" FOREIGN KEY ("deleted_by") REFERENCES "public"."person"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "card" ADD CONSTRAINT "card_book_id_book_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."book"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "card" ADD CONSTRAINT "card_rendered_by_person_id_fk" FOREIGN KEY ("rendered_by") REFERENCES "public"."person"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "card" ADD CONSTRAINT "card_next_closer_person_id_fk" FOREIGN KEY ("next_closer") REFERENCES "public"."person"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "card_open" ADD CONSTRAINT "card_open_card_id_card_id_fk" FOREIGN KEY ("card_id") REFERENCES "public"."card"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "card_open" ADD CONSTRAINT "card_open_person_id_person_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."person"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "audit_log" ADD CONSTRAINT "audit_log_person_id_person_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."person"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "audit_log" ADD CONSTRAINT "audit_log_book_id_book_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."book"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "block" ADD CONSTRAINT "block_blocker_id_person_id_fk" FOREIGN KEY ("blocker_id") REFERENCES "public"."person"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "block" ADD CONSTRAINT "block_blocked_id_person_id_fk" FOREIGN KEY ("blocked_id") REFERENCES "public"."person"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "block" ADD CONSTRAINT "block_book_id_book_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."book"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moderation_evidence" ADD CONSTRAINT "moderation_evidence_report_id_report_id_fk" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report" ADD CONSTRAINT "report_proof_id_proof_id_fk" FOREIGN KEY ("proof_id") REFERENCES "public"."proof"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report" ADD CONSTRAINT "report_book_id_book_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."book"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report" ADD CONSTRAINT "report_reporter_id_person_id_fk" FOREIGN KEY ("reporter_id") REFERENCES "public"."person"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exit_survey" ADD CONSTRAINT "exit_survey_person_id_person_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."person"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exit_survey" ADD CONSTRAINT "exit_survey_book_id_book_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."book"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "device_token_uq" ON "device" USING btree ("token_hash") WHERE "revoked_at" is null;--> statement-breakpoint
CREATE INDEX "device_person_idx" ON "device" USING btree ("person_id");--> statement-breakpoint
CREATE UNIQUE INDEX "book_code_uq" ON "book" USING btree ("code");--> statement-breakpoint
CREATE INDEX "book_status_idx" ON "book" USING btree ("status","status_since");--> statement-breakpoint
CREATE UNIQUE INDEX "goal_current_uq" ON "goal" USING btree ("book_id","person_id","effective_from");--> statement-breakpoint
CREATE INDEX "goal_lookup_idx" ON "goal" USING btree ("book_id","person_id","effective_from" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "membership_person_idx" ON "membership" USING btree ("person_id") WHERE "status" = 'active';--> statement-breakpoint
CREATE INDEX "membership_book_idx" ON "membership" USING btree ("book_id","status");--> statement-breakpoint
CREATE INDEX "book_day_recent_idx" ON "book_day" USING btree ("book_id","book_date" DESC NULLS LAST);--> statement-breakpoint
CREATE UNIQUE INDEX "proof_one_per_person_day_uq" ON "proof" USING btree ("book_id","person_id","book_date");--> statement-breakpoint
CREATE UNIQUE INDEX "proof_client_uq" ON "proof" USING btree ("client_proof_id");--> statement-breakpoint
CREATE INDEX "proof_book_day_idx" ON "proof" USING btree ("book_id","book_date" DESC NULLS LAST) WHERE "deleted_at" is null and "hidden_at" is null;--> statement-breakpoint
CREATE INDEX "proof_active_idx" ON "proof" USING btree ("book_id","person_id","book_date" DESC NULLS LAST) WHERE "deleted_at" is null;--> statement-breakpoint
CREATE INDEX "proof_ttl_idx" ON "proof" USING btree ("orig_expires_at") WHERE "orig_key" is not null;--> statement-breakpoint
CREATE UNIQUE INDEX "card_one_per_day_uq" ON "card" USING btree ("book_id","book_date");--> statement-breakpoint
CREATE UNIQUE INDEX "card_share_uq" ON "card" USING btree ("share_token");--> statement-breakpoint
CREATE INDEX "card_open_time_idx" ON "card_open" USING btree ("card_id","opened_at");--> statement-breakpoint
CREATE INDEX "audit_log_at_idx" ON "audit_log" USING btree ("at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "audit_log_person_idx" ON "audit_log" USING btree ("person_id","at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "report_open_idx" ON "report" USING btree ("sla_due_at") WHERE "resolved_at" is null;--> statement-breakpoint
CREATE INDEX "event_name_time_idx" ON "event" USING btree ("name","occurred_at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "event_book_idx" ON "event" USING btree ("book_id","book_date");--> statement-breakpoint
CREATE INDEX "event_time_brin" ON "event" USING brin ("occurred_at");--> statement-breakpoint
CREATE INDEX "rate_bucket_gc_idx" ON "rate_bucket" USING btree ("window_start");--> statement-breakpoint
CREATE INDEX "request_idem_gc_idx" ON "request_idem" USING btree ("created_at");
--> statement-breakpoint
CREATE OR REPLACE FUNCTION enforce_book_cap() RETURNS trigger
LANGUAGE plpgsql AS $fn$
DECLARE n int;
BEGIN
  SELECT count(*) INTO n FROM membership
   WHERE book_id = new.book_id
     AND status IN ('invited','active','paused','dormant');
  IF n > 8 THEN
    RAISE EXCEPTION 'BOOK_FULL: sổ % đã đủ 8 người', new.book_id USING errcode='23514';
  END IF;
  RETURN null;
END $fn$;--> statement-breakpoint
CREATE CONSTRAINT TRIGGER membership_cap AFTER INSERT OR UPDATE ON membership
  DEFERRABLE INITIALLY DEFERRED FOR EACH ROW EXECUTE FUNCTION enforce_book_cap();--> statement-breakpoint
CREATE OR REPLACE FUNCTION book_day_monotonic() RETURNS trigger
LANGUAGE plpgsql AS $fn$
DECLARE prev book_day%rowtype;
BEGIN
  SELECT * INTO prev FROM book_day
   WHERE book_id = new.book_id AND book_date = new.book_date - 1;
  IF found THEN
    IF new.day_number <= prev.day_number
       OR new.proof_total_after < prev.proof_total_after THEN
      RAISE EXCEPTION 'P1_VIOLATION: cột đơn điệu bị giảm ở %/%', new.book_id, new.book_date;
    END IF;
    IF new.streak_after < prev.streak_after AND new.streak_after <> 0 THEN
      RAISE EXCEPTION 'P1_VIOLATION: streak giảm mà không về 0 (% -> %)',
        prev.streak_after, new.streak_after;
    END IF;
  END IF;
  RETURN new;
END $fn$;--> statement-breakpoint
CREATE TRIGGER book_day_monotonic_trg BEFORE INSERT OR UPDATE ON book_day
  FOR EACH ROW EXECUTE FUNCTION book_day_monotonic();--> statement-breakpoint
CREATE OR REPLACE FUNCTION auto_hide_on_report() RETURNS trigger
LANGUAGE plpgsql AS $fn$
BEGIN
  UPDATE proof SET hidden_at = now()
   WHERE id = new.proof_id AND hidden_at IS null AND deleted_at IS null;
  RETURN new;
END $fn$;--> statement-breakpoint
CREATE TRIGGER report_auto_hide AFTER INSERT ON report
  FOR EACH ROW WHEN (new.proof_id IS NOT null)
  EXECUTE FUNCTION auto_hide_on_report();--> statement-breakpoint
INSERT INTO remote_config(key,value,note) VALUES
  ('day.cutoff_hour',        '4',      'ranh giới ngày, giờ ICT'),
  ('day.close_time',         '"21:00"','giờ sổ sẵn sàng chốt, suy ra từ giờ server'),
  ('threshold.k_small',      '1',      'A_eff <= 2'),
  ('threshold.k_large',      '2',      'A_eff >= 3; ngưỡng phẳng'),
  ('threshold.active_window','7',      'ngày, để tính A'),
  ('streak.rest_days',       '2',      'van/cửa sổ 7 ngày trượt'),
  ('proof.orig_ttl_hours',   '72',     ''),
  ('proof.thumb_px',         '320',    ''),
  ('proof.upload_grace_sec', '120',    'biên nộp muộn kỹ thuật'),
  ('book.member_cap',        '8',      ''),
  ('book.code_alphabet',     '"23456789ACDEFGHJKMNPQRTUVWXY"', '28 ký tự, QĐ-12'),
  ('card.image_ttl_days',    '90',     'hết hạn thì thay ảnh tĩnh, không 404'),
  ('legal.visits_amber',     '6000',   'đèn vàng monthly_visits'),
  ('legal.visits_red',       '8500',   'đèn đỏ monthly_visits'),
  ('legal.persons_amber',    '600',    'đèn vàng monthly_active_persons'),
  ('legal.persons_red',      '850',    'đèn đỏ monthly_active_persons'),
  ('signup_paused',          'false',  'dừng nhận sổ mới, không dừng sổ đang chạy'),
  ('service.paused',         'false',  'công tắc khoá dịch vụ khẩn cấp'),
  ('freeze.dates',           '[]',     'Tết freeze: 2027-02-03..2027-02-12 khi bật');--> statement-breakpoint
INSERT INTO safety_keyword(pattern,bucket) VALUES
  ('kcal','eating_disorder'),('calo','eating_disorder'),('cân','eating_disorder'),
  ('kg','eating_disorder'),('giảm cân','eating_disorder'),('nhịn','eating_disorder'),
  ('ăn kiêng','eating_disorder'),('nhịn ăn','eating_disorder'),
  ('eat clean','eating_disorder'),('detox','eating_disorder');
