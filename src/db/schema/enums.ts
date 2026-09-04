/**
 * NĂM ENUM của hồ sơ (04 §1.3 và §1.7). Không có enum thứ sáu.
 *
 * Lưu ý cho người đọc sau: KHÔNG có enum nào cho "season", "boss", "rank".
 * 04 §0 liệt kê những khái niệm đó vào danh sách KHÔNG TỒN TẠI.
 */

import { pgEnum } from "drizzle-orm/pg-core";

/**
 * Vòng đời của một sổ (state machine ở 04 §2.3).
 *   forming  → active   : có ≥2 người cùng nộp trong 1 ngày
 *   active   → dormant  : 7 ngày liên tiếp A < 3
 *   dormant  → dead     : 21 ngày liên tiếp không có tấm nào
 *   *        → archived : LỐI VÀO DUY NHẤT là "mọi thành viên đã rời" (A12/A38).
 *                         Cạnh "dead → archived sau 180 ngày" ĐÃ BỊ XOÁ khỏi đặc tả:
 *                         sổ ngủ lâu chỉ chuyển thumbnail sang lưu trữ lạnh, KHÔNG dọn.
 * `group_alive` = A ≥ 3 ⇔ status = 'active' (A08). Không có định nghĩa thứ hai trong repo.
 */
export const bookStatus = pgEnum("book_status", [
  "forming",
  "active",
  "dormant",
  "dead",
  "archived",
]);

/**
 * Vòng đời của một thành viên trong một sổ (04 §2.2).
 * - `dormant` là SUY RA ("không có tấm nào trong 7 ngày"), không phải hành động của người dùng.
 * - `paused` có trong enum và cột `membership.paused_until` có trong schema TỪ COMMIT ĐẦU,
 *   nhưng KHÔNG có UI ở MVP-0 (A50/S06/C34). Chi phí một giá trị enum + một cột = 0.
 * - `removed` KHÔNG có "chủ sổ" nào đặt được: không tồn tại vai chủ sổ, không có chức năng
 *   kick ở MVP-0 (A61/S17/C39). Chỉ founder đặt tay từ /admin sau một `report` đã resolved.
 */
export const memberStatus = pgEnum("member_status", [
  "invited",
  "active",
  "paused",
  "dormant",
  "left",
  "removed",
]);

/**
 * Nhãn của một tấm. CHỈ HAI GIÁ TRỊ, và "vắng" CỐ Ý không phải một trong hai (04 §1.4).
 *
 * Đây là nguyên tắc P2 được thực thi ở tầng CSDL chứ không ở tầng UI: KHÔNG tồn tại được
 * một hàng dữ liệu biểu diễn "người X hôm nay vắng". Không có hàng thì không có gì để
 * render thành ô trống có tên. Thêm một giá trị thứ ba vào enum này là phá nguyên tắc đó.
 */
export const proofStatus = pgEnum("proof_status", ["xong", "toang"]);

/** Lý do báo cáo một tấm (04 §1.7). */
export const reportReason = pgEnum("report_reason", [
  "nudity",
  "violence",
  "harassment",
  "minor",
  "other",
]);

/** Kết quả xử lý một báo cáo (04 §1.7). */
export const reportAction = pgEnum("report_action", [
  "removed",
  "kept",
  "account_blocked",
  "escalated",
]);
