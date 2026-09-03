# PHẠM VI MVP — CHỐT SỔ

_Viết 03/09/2026. Tài liệu con của `/home/huypq/teemi/docs/plan/01-dinh-nghia-san-pham-v2.md` (§4.10, §5, §6, §11, §12). Mọi con số ở đây phải khớp với file đó; chỗ nào tôi thấy file đó sai hoặc thiếu, tôi ghi vào §8 "Bất đồng" chứ không tự đi hướng khác._

**Lịch dùng trong tài liệu này lấy nguyên từ §4.10 của v2:** Bước 0 chạy 08/09 → 21/09/2026 · quyết định bằng văn bản 22/09 · dòng code đầu tiên 23/09 · beta chạy 02/12 · **trần cứng 15/12/2026**.

---

## 1. MVP LÀ GÌ TRONG DỰ ÁN NÀY

### 1.1. Định nghĩa dùng làm luật

> **MVP của Chốt Sổ không phải "phiên bản đầu tiên của sản phẩm". Nó là thí nghiệm rẻ nhất đủ sức làm founder ĐỔI Ý.**

Phép thử để biết một hạng mục có thuộc MVP hay không, hỏi đúng một câu:

> _"Nếu bỏ hạng mục này, có giả thuyết nào ở §11 trở nên không đo được không?"_

- Không → hạng mục đó **không thuộc MVP**, bất kể nó rẻ đến đâu.
- Có → nó thuộc MVP, bất kể nó chán đến đâu.

Luật này quan trọng vì cạm bẫy của founder một mình không phải là làm feature to. Nó là làm **hai chục thứ nhỏ, mỗi thứ nửa ngày** — đúng thứ mà phản biện #9 đã bắt được ở DOC 1: "MVP cực nhỏ" hoá ra là 17 hệ thống ≈ 33 pw (c-scope-execution §1).

### 1.2. MVP KHÔNG trả lời câu hỏi nào

Ba câu hỏi dưới đây **không** do MVP trả lời. Nếu founder viết code để trả lời chúng, đó là vi phạm phạm vi:

| Câu hỏi | Ai trả lời | Khi nào |
|---|---|---|
| "Nhóm bạn thật có tự chốt sổ vào một tối founder im lặng không?" | **Bước 0 làm tay** (§5) | 08/09 → 22/09/2026, **0 dòng code** |
| "Kèo có giá trị hay chỉ là thuế?" (H3) | **Bước 0**, hai nhánh | cùng cửa sổ trên |
| "Sản phẩm này có thành một doanh nghiệp không?" | Không giai đoạn nào trong tài liệu này | v2 §9 mục 5 đã gọi đúng tên: small profitable business hoặc portfolio piece |

### 1.3. MVP trả lời ĐÚNG MỘT câu hỏi

> **"Khi cái sổ do phần mềm dựng thay vì do founder dựng tay mỗi tối, nhịp có giữ nguyên không — và nó có lan sang sổ thứ hai mà founder không đi tuyển không?"**

Tách thành hai chỉ số nhị phân, không có vùng diễn giải:

| Ký hiệu | Định nghĩa | Ngưỡng | Đọc kết quả |
|---|---|---|---|
| **M1** | `group-D14(app)` trên ≥8 sổ beta | **≥ B**, với `B` = `group-D14` đo tay ở Bước 0 | Nếu app **không bằng** founder ngồi dán card Canva, app không có lý do tồn tại (v2 §11, neo nội bộ) |
| **M2** | Số sổ mở mới **không do founder tuyển** trong 28 ngày beta | **≥ 1** | M2 = 0 nghĩa là card không phải kênh phân phối, mà chỉ là một tấm ảnh đẹp |

`B` chưa tồn tại hôm nay. **Không được đặt một con số cho `B` trước 22/09** — đặt trước là tự viết đề bài dễ cho mình.

### 1.4. Ba thứ MVP phải làm được, ngoài chuyện chạy

1. **Đo được H1, H2, H3 mà không cần founder mở SQL bằng tay.** Một dashboard đọc trong 3 phút mỗi sáng Chủ nhật. Nếu phải viết query tay thì founder sẽ không đo, và không đo thì 6,5 pw là tiền đổ xuống sông.
2. **Xoá được sạch.** Một nút "xoá dữ liệu của tôi" hoạt động thật, vì đây là hàng rào pháp lý rẻ nhất (Luật 91/2025, NĐ 53/2022) và vì nó là điều kiện để dừng dự án cho tử tế.
3. **Chết được rẻ.** Deploy = một lệnh; rollback < 10 phút; toàn bộ hạ tầng ~$0–12/tháng ở quy mô beta. Với bus factor = 1, độ dài vòng lặp sửa lỗi quan trọng hơn độ đẹp (v2 §2, lý do 3).

---

## 2. BẢNG USER STORY

Quy ước: **1 person-week (pw) = 5 person-day (pd) = 40 giờ nominal.** Tổng phải bằng **32,5 pd = 6,5 pw** — trần cứng của v2 §4.10. Cột "Mức" dùng ở §4: **WS** = Walking skeleton · **MVP** = MVP thật · **v1** = v1 công khai.

| ID | Story | Tiêu chí hoàn thành (kiểm chứng được) | pd | Phụ thuộc | Mức |
|---|---|---|---|---|---|
| **US-00** | Là founder, tôi có khung dự án + schema + RLS + deploy để mọi thứ khác đứng lên được | 6 bảng (`sổ`,`thành viên`,`kèo`,`tấm`,`ngày`,`sự_kiện`) có `group_id` ở mọi bảng · RLS policy viết **trước** UI cho cả 6 · `vercel --prod` chạy 1 lệnh · rollback đo được <10 phút | **3,0** | — | WS |
| **US-01** | Là người mở sổ, tôi đặt tên sổ và nhận mã 6 ký tự + link mời | [CHỐT 2026-08-28, QĐ-12] Bảng chữ **đúng 28 ký tự**, đọc từ `remote_config['book.code_alphabet']`: `23456789 A C D E F G H J K M N P Q R T U V W X Y` (loại `0/O`, `1/I/L`, `B` vs 8, `S` vs 5, `Z` vs 2). 28⁶ ≈ **481 triệu** tổ hợp. ⚠️ Regex cũ của `04` `^[2-9A-HJ-NP-Z]{6}$` **CHỨA chữ L** (dải J–N) — đúng ký tự dễ đọc nhầm thành 1/I trên ảnh JPEG đã qua nén của Zalo, tức nó giết chính đường thoát hiểm mà mã này tồn tại để cung cấp. Test CI: **`slug` công khai không được chứa `code6` như substring** · sinh 200 mã liên tiếp không trùng, không ra từ tục · link mời mở được trong webview Zalo | 1,5 | US-00 | WS |
| **US-02** | Là người được mời, tôi vào sổ bằng link hoặc mã, **không đăng nhập** | Device token trong `localStorage` · vào lại sau khi đóng app vẫn đúng người · nhập mã 6 ký tự khôi phục được trên máy khác · **0 màn đăng nhập** | 1,5 | US-01 | WS |
| **US-03** | Là thành viên, tôi chọn kèo bằng 8 nút preset hoặc tự viết ≤30 ký tự | 8 preset đúng danh sách v2 §4.8 · preset **copy thành text** vào `goal_text`, `preset_id` không lưu per-user trên server · 10 từ khoá rối loạn ăn uống kích hoạt màn hỗ trợ + ghi `safety_screen_shown{reason_bucket}` | 1,0 | US-02 | WS |
| **US-04** | Là thành viên, tôi mở sổ và **thấy ảnh của mọi người trước**, ô của mình sau | Pixel đầu tiên dưới header là hàng ảnh hôm nay, không phải nút Nộp (snapshot test, P5) · người VẮNG **không render gì cả** — không ô, không tên (test CI, P2) · ba con số hiển thị | **2,5** | US-02 | WS |
| **US-05** | Là thành viên, tôi nộp một tấm kèm nhãn XONG hoặc TOANG | Chọn từ thư viện **mặc định**, không ép chụp · nén cạnh dài 1080 q=0,72 → đo thật ≤150 KB trên 20 ảnh Android tầm trung · **strip EXIF trước khi upload** · presigned PUT thẳng R2, bytes không đi qua API server · nhãn bắt buộc, không có lựa chọn thứ ba | **3,5** | US-00 | WS |
| **US-06** | Là thành viên, tôi nộp lại và tấm cũ bị ghi đè | 1 tấm/người/ngày · nộp lần 2 ghi đè, không cộng thêm vào `số tấm` | 0,3 | US-05 | WS |
| **US-07** | Là thành viên, tôi cuộn xuống thấy lưới 30 ngày | Trong **cùng màn** Sổ hôm nay, không phải màn riêng · thumbnail 320px · lazy load | 1,5 | US-04 | MVP |
| **US-08** | Là bất kỳ ai trong sổ, tôi bấm "Chốt sổ" và nhận card 4:5 | Render server-side (satori) <2s p95 · font Việt **có dấu** nhúng sẵn, 0 ký tự tofu · chỉ ảnh người ĐÃ nộp · dòng chân `Minh chốt sổ · mai tới lượt Linh` · snapshot test card (P4) | **3,0** | US-04 | WS |
| **US-09** | Là người chốt sổ, tôi chia sẻ card vào Zalo hoặc lưu ảnh | Nút Chia sẻ dùng Web Share API, fallback "Lưu ảnh" + copy caption · caption soạn sẵn đúng chuỗi v2 §4.6 · **test bằng tay trên Zalo iOS + Zalo Android** | 0,5 | US-08 | WS |
| **US-10** | Là người chưa vào sổ, tôi mở link và thấy trang public | [CHỐT 2026-08-28, QĐ-05b] **GIỮ trang public, CẮT nút thả tim** khỏi MVP-0. Ảnh mờ + tên sổ + nút vào sổ · OG preview 4:5 (ảnh tĩnh ở MVP-0). **Vì sao giữ trang public dù cả hai bản cắt đều đề nghị cắt:** M2 ("≥1 sổ mở mới không do founder tuyển") là 1 trong 2 tiêu chí thành công của MVP, và trang public là bề mặt phân phối duy nhất — cắt nó rồi đo phân phối là tự vô hiệu hoá thí nghiệm (§4.3 của chính tài liệu này đã cảnh báo). **Vì sao cắt nút tim:** không giả thuyết nào gắn với nó, và HM-1/HM-3 xây trên nó đã bị bỏ (`06` §4.2) | **0,6** | US-08 | MVP |
| **US-11** | Là hệ thống, tôi tính "ngày" đúng ranh giới 04:00 ICT và ngưỡng `k` | `NGÀY = 04:00→03:59 ICT` · **[CHỐT 2026-08-28, QĐ-14b] `k` tính trên `A_eff = min(A(D), A(D−1))`**: `k=1` nếu `A_eff ≤2`, `k=2` nếu `A_eff ≥3`. Lý do (`04` §9.1, cùng họ với lỗi `ceil(0,6×A)` mà v2 đã bắt): nếu `k` tính trên `A` của **cùng ngày**, thì sổ 2 người (k=1) có người thứ 3 nộp một mình sẽ nhảy lên k=2, present=1 < 2 ⇒ **mất ngày và mất chuỗi ĐÚNG vào ngày có thêm bạn**. Sổ bị phạt vì có thêm bạn. Sửa là một hàm `min()`, **0 pw, phải vào trước commit đầu** vì sau đó là dữ liệu lịch sử · rollover **04:05 ICT** (QĐ-21, không phải 04:00 — biên nộp muộn 120 giây) · nộp lúc 01:00 tính cho hôm trước · rollover **batch 04:00**, không realtime · mọi hằng số đọc từ remote config (P6) | 1,2 | US-05 | WS |
| **US-12** | Là hệ thống, tôi giữ chuỗi với 2 van ngày nghỉ / cửa sổ 7 ngày trượt | 2 ngày hụt đầu → icon xám **không tên** · ngày hụt thứ 3 mới đứt · chuỗi chỉ giảm về đúng 0 (test bất biến US-22) | 0,8 | US-11 | MVP |
| **US-13** | Là thành viên, tôi thấy "Hôm nay đủ mâm" và mốc sổ 25/50/100/250/500 | Card đổi màu · **không** nêu tên ai đóng góp nhiều nhất · không vật phẩm, không tiền tệ | 0,5 | US-08 | MVP |
| **US-14** | Là thành viên, tôi thấy tên người chốt sổ **ngày mai** trên card | Chỉ số xoay vòng theo thứ tự vào sổ · **ai cũng bấm được bất cứ lúc nào**, không khoá · ngày vẫn tính khi không ai chốt (unit test, P11) | 0,2 | US-08 | WS |
| **US-15** | Là thành viên, tôi vào "Của tôi" xem tỉ lệ riêng tư, đổi kèo, rời sổ, xoá dữ liệu | "Bạn đã có mặt 23/30 ngày" **chỉ mình thấy** · đổi kèo 1 lần/30 ngày · **xoá dữ liệu chạy thật**, kiểm bằng cách xoá rồi query DB | 1,5 | US-03 | MVP |
| **US-16** | Là thành viên, tôi mở một ảnh và báo cáo / chặn / xoá ảnh của chính mình | Báo cáo ghi `report_created`, gửi email founder · chặn = ẩn ảnh người đó với riêng tôi · xoá ảnh mình ghi `proof_deleted_by_self` | 1,2 | US-04 | MVP |
| **US-17** | Là người dùng, tôi đọc được ToS, quyền riêng tư, cách báo cáo, **SLA KÉP** | Trang tĩnh, có email thật, có ngày cập nhật · [CHỐT 2026-08-28, QĐ-17] ghi **hai** con số cho **hai** đối tượng: **48 giờ** cho khiếu nại người dùng (v2 §10d) · **24 giờ, khẩn cấp 6 giờ** cho yêu cầu của cơ quan nhà nước (**luật định, không thương lượng** — Luật ANM 116/2025). Bản trước ghi một con số 48h và ghi rõ "không phải 24h", tức **phủ nhận đúng nghĩa vụ luật định** | 0,8 | — | MVP |
| **US-18** | Là hệ thống, tôi chặn người khai <16 tuổi mở sổ | [CHỐT 2026-08-28, QĐ-20] **Một ô tick "tôi đủ 16 tuổi", lưu cờ boolean `is_16_plus` + `age_gate_at`. KHÔNG lưu năm sinh, KHÔNG lưu ngày sinh** — nguyên tắc tối thiểu hoá dữ liệu (Luật 91/2025), và đây là nhóm người dùng nhạy cảm nhất trong sản phẩm. Kiểm tra ở **tầng ứng dụng** · <16 không mở được sổ · ToS ghi "dành cho người ≥16" · gọi đúng tên: **hàng rào giấy tờ, không phải hàng rào kỹ thuật** | 0,3 | US-01 | MVP |
| **US-19** | Là hệ thống, tôi xoá ảnh gốc sau 72h và giữ thumbnail 320px | R2 lifecycle rule chạy thật, kiểm bằng cách đặt TTL 1h ở staging · lưới 30 ngày vẫn hiển thị đủ sau khi gốc bị xoá | 0,7 | US-05 | MVP |
| **US-20** | Là founder, tôi đọc H1/H2/H3 trong 3 phút | Cột đầu tiên là **`book_id`** (P10, QĐ-02c) · `group_alive = ≥3 người nộp trong 7 ngày` · **32 event của danh mục hợp nhất** (`04` §7.1) + bảng `audit_log` có trong schema **từ commit đầu** — không backfill được · `pulse_survey` ngày 7 và 21 · exit survey 1 câu · ở MVP-0: **6 truy vấn SQL chạy tay**, không phải UI | **3,25** | US-11 | MVP |
| **US-21** | Là founder, tôi đổi hằng số cơ chế mà không deploy | `k`, số van, giờ chốt, TTL, ngưỡng mốc đọc từ bảng `config` · `grep` không tìm thấy số ma trong logic ngày/chuỗi (lint CI, P6) | 0,5 | US-00 | MVP |
| **US-22** | Là founder, tôi có test chặn được vi phạm nguyên tắc | 10.000 mô phỏng 30 ngày, assert không cột nào giảm ngoài `chuỗi` (P1) · test CI quét template bank tìm `{goal}` / `{goal_text}` (P3) · test CI quét cây render tìm `member.name` trong nhánh `vắng` (P2) · **đỏ = không merge** | 1,0 | US-12 | MVP |
| **US-23** | Là founder, tôi đo được **tỉ lệ mở card trong 24h** (H1) | Link trên card mang `?c=<card_id>` · ghi `card_opened{card_id, member_id, ts}` · dedupe theo member · báo cáo theo sổ, theo tuần | 0,8 | US-08 | MVP |
| **US-24** | Là hệ thống, tôi rollover lúc **04:05 ICT** (QĐ-21). **Cron 21:00 đã bị cắt** (QĐ-22 — trạng thái "sẵn sàng chốt" suy ra được từ giờ server, và v2 §4.7 nói hệ thống không gửi gì lúc 21:00) | Cron chạy 2 lần không sinh 2 bản ghi (**idempotency key `unique(group_id, logical_date, kind)`**) · chạy đúng giờ ICT khi server ở UTC · **không** gửi noti nào của mình | 1,0 | US-11 | MVP |
| | **TỔNG** | | **32,5 pd = 6,5 pw** | | |

**Không có story nào cho:** đăng nhập · reaction · comment · chat · boss · xếp hạng · season · cửa hàng · danh sách nhiều sổ · onboarding carousel · push của mình · caption trên proof. Xem §6.

---

## 3. ƯỚC LƯỢNG THEO HẠNG MỤC KỸ THUẬT + CẠM BẪY

### 3.1. Bảng chính

Cột cuối là **số ngày đội thêm nếu trúng bẫy** — không cộng vào tổng, nhưng là thứ phải nhìn khi đọc lịch. Nguồn: r05 (tech stack), c-scope-execution, v2 §10(h).

| # | Hạng mục | pw | Cạm bẫy dễ đánh giá thấp | Đội thêm nếu trúng |
|---|---|---|---|---|
| 1 | Khung + schema + **RLS** + deploy + danh tính nhẹ | 0,9 | **RLS không có `auth.uid()` khi danh tính là device token.** Mọi hướng dẫn Supabase giả định user đã đăng nhập. Với `localStorage` token, founder phải chọn: Supabase Anonymous Sign-in, hoặc tự viết API route dùng service key và tự kiểm quyền — cả hai đều đắt hơn "bật RLS". **Chọn sai ở tuần 1 = viết lại lớp truy cập ở tuần 6.** · `localStorage` trong webview Zalo có thể bị dọn theo cache; ITP trên iOS giới hạn storage do script ghi [cần kiểm chứng cho webview Zalo cụ thể] → mất tài khoản, ~5–10% người dùng [ước lượng, option-D §242] | +3 pd |
| 2 | **Media pipeline** (nén, EXIF, presigned R2, thumbnail, TTL) | 0,9 | **HEIC của iPhone** không decode được bằng canvas ở một số WebView → phải fallback · **EXIF orientation**: strip EXIF mà không xoay trước = ảnh nằm ngang 90° cho một nửa người dùng Android · ảnh 12MP làm hết bộ nhớ tab trên máy tầm trung → phải resize theo bước · **CORS trên R2 cho presigned PUT** phải cấu hình riêng, không mặc định · số 110 KB trong v2 §4.5 là [ước lượng] — r05 §456 yêu cầu đo thật 20 ảnh trước khi tin | +4 pd |
| 3 | **Render card server-side** (satori / @vercel/og) | 0,8 | **Font tiếng Việt có dấu phải nhúng thủ công** — satori không tự nạp font; thiếu là ra ô vuông, và card là bề mặt marketing duy nhất · satori chỉ hỗ trợ một tập con CSS (không grid đầy đủ, không nhiều thuộc tính) → layout phải viết lại · ảnh từ R2 phải fetch + inline base64, làm card nặng và chậm · cold start edge function | +3 pd |
| 4 | Màn Sổ hôm nay + lưới 30 ngày + trang public | 1,3 | Hàng ảnh "người khác trước" nghe như CSS nhưng là **ràng buộc kiểm chứng bằng snapshot test** (P5) · lưới 30 ngày với sổ 6 người = 180 thumbnail → phải phân trang/lazy ngay từ đầu · trạng thái "chưa vào sổ" là một nhánh render thứ hai của cùng màn, dễ rò rỉ dữ liệu qua RLS | +2 pd |
| 5 | Mở sổ / Vào sổ / chọn kèo + **deep link mời + OG** | 0,7 | **Zalo cache OG preview rất dai** — sửa card xong link cũ vẫn ra ảnh cũ, phải thêm tham số version vào URL [cần kiểm chứng độ dài cache] · webview Zalo có thể cắt query param khi mở link [cần kiểm chứng — nằm trong buổi kiểm chứng nền tảng 04/09] · nếu Zalo cảnh báo domain `.vn` lạ thì toàn bộ kênh phân phối về 0 (v2 §9 mục 7) — **mã 6 ký tự gõ tay là đường thoát bắt buộc, không phải tính năng phụ** | +2 pd |
| 6 | **Logic ngày + cron + timezone** | 0,4 | 0,4 pw là con số lạc quan nhất trong bảng. **Cron chạy UTC, ngày là ICT** — 21:00 ICT = 14:00 UTC; viết đúng một lần thì rẻ, viết sai thì sinh bug ma xuất hiện mỗi đêm · **idempotency bắt buộc**: cron retry hoặc deploy giữa chừng = chạy 2 lần (r05 §184) · Vercel Hobby giới hạn cron [cần kiểm chứng: Hobby có thể chỉ cho 1 lần/ngày] → có thể phải dùng pg_cron hoặc Cloudflare Worker · backfill khi tấm đến muộn phải recompute idempotent | +3 pd |
| 7 | Màn Của tôi | 0,3 | "Xoá dữ liệu của tôi" **chạy thật** đụng R2 + Postgres + cache. Làm nửa vời là rủi ro pháp lý, không phải nợ kỹ thuật | +1 pd |
| 8 | **Analytics cấp sổ + 4 event an toàn + đo H1** | 0,5 | Hạng mục dễ bị hoãn nhất và **không được hoãn**: thêm event sau khi có dữ liệu = mất toàn bộ lịch sử (v2 §8, phản biện #22) · dashboard cấp sổ khác hẳn dashboard cấp user; công cụ có sẵn (PostHog free) đều mặc định cấp user → nhiều khả năng phải tự viết một view SQL + một trang | +2 pd |
| 9 | Pháp lý & an toàn (ToS, riêng tư, báo cáo/chặn, soft delete, age gate, chặn từ khoá) | 0,5 | Viết ToS/privacy không phải copy mẫu — nó phải khớp với TTL 72h, với "không nhận diện khuôn mặt", với SLA 48h · **báo cáo phải có nơi tới**: một email founder đọc thật, và founder phải chấp nhận 48h là lời hứa ràng buộc mình mỗi ngày trong năm | +2 pd |
| 10 | Test bất biến + test CI template bank/render | 0,2 | 10.000 mô phỏng cần một máy sinh dữ liệu — tức phải mô hình hoá cơ chế lần thứ hai. Đây là chỗ 0,2 pw hay thành 0,6 pw | +2 pd |
| | **TỔNG** | **6,5** | | **+24 pd** (tối đa lý thuyết = **+4,8 pw**) |

**Đọc cột cuối cho đúng:** không phải mọi cái bẫy đều sập. Nhưng nếu **một phần ba** số bẫy sập (kịch bản bình thường với founder chưa từng làm satori + R2 + webview Zalo), tổng thật là **6,5 + 1,6 ≈ 8,1 pw**.

### 3.2. Đổi ra tuần lịch — phần mà v2 chưa làm

v2 §4.10 viết "6,5 pw ÷ 0,65 ≈ 10 tuần lịch". Phép chia đó **ngầm giả định founder làm 40 giờ/tuần**. Nhưng chính v2 §9 mục 12 đặt kill gate ở _">15 giờ/tuần"_ như một dấu hiệu xấu. Hai chỗ này không thể cùng đúng. Bảng dưới tính lại minh bạch:

`6,5 pw = 260 giờ nominal.` Hiệu suất 0,65 = phần thời gian dự án thực sự vào code (phần còn lại: pháp lý, tuyển beta, trả lời tin nhắn, hạ tầng).

| Kịch bản giờ | Giờ code hiệu dụng/tuần | Tuần lịch cho 6,5 pw | Ngày beta nếu bắt đầu 23/09 | Có kịp trần 15/12/2026? |
|---|---|---|---|---|
| Toàn thời gian 40h/tuần (giả định ngầm của v2) | 26,0 | **10,0** | 02/12/2026 | ✅ khít, 0 đệm |
| **20h/tuần (đề bài tài liệu này)** | **13,0** | **20,0** | **09/02/2027** | ❌ **trễ 8 tuần** |
| 20h/tuần, bàn giấy làm ngoài giờ dự án | 20,0 | 13,0 | 22/12/2026 | ❌ trễ 1 tuần |
| 15h/tuần (mức kill gate coi là "còn chấp nhận") | 9,75 | **26,7** | 27/03/2027 | ❌ trễ 15 tuần |
| 20h/tuần **+ một phần ba số bẫy sập** (8,1 pw) | 13,0 | **24,9** | 15/03/2027 | ❌ trễ 13 tuần |

**Kết luận số học, không phải quan điểm:**

> Ở 20 giờ/tuần, **6,5 pw không vừa với trần 15/12/2026.** Cửa sổ 23/09 → 15/12 là 11,7 tuần × 13 giờ = **152 giờ = 3,8 pw**.

Founder có đúng ba lựa chọn, và phải chọn bằng văn bản trước 23/09:

| Lựa chọn | Nội dung | Cái giá |
|---|---|---|
| **(a) Toàn thời gian 10 tuần** | 40h/tuần từ 23/09 đến 02/12 | Mâu thuẫn với kill gate 15h/tuần; và 10 tuần toàn thời gian với bus factor 1 không có đệm ốm đau |
| **(b) Cắt scope xuống 3,8 pw** | Ship đúng **mức WS + một nửa mức MVP** ở §4, hoãn phần còn lại sang sau beta | Mất một phần khả năng đo H2/H3 nếu cắt nhầm chỗ — xem §4.3 để biết cắt gì |
| **(c) Dời trần sang 15/02/2027** | Giữ đủ 6,5 pw ở 20h/tuần | Mất cửa sổ "đầu năm mới" mà r02 khuyến nghị; và mỗi tuần trôi là một tuần founder có thể bỏ cuộc |

**Khuyến nghị:** **(b)**. Lý do: trần lịch là thứ duy nhất trong hồ sơ này chống được scope creep, và (c) đúng một lần thì lần sau cũng sẽ đúng.

---

## 4. BA MỨC PHẠM VI

### 4.0. Mức 0 — Bước 0 làm tay (KHÔNG PHẢI phần mềm)

| | |
|---|---|
| **Làm gì** | Toàn bộ §5 |
| **Bao lâu** | 14 ngày lịch (08/09 → 21/09), **~30 giờ** của founder, **0 dòng code sản phẩm** |
| **Học được** | H1 (proxy), H2, H3, cổng phi số, và giá trị `B` để làm neo cho MVP |
| **Chi phí tiền mặt** | ~**0đ** cho Bước 0. (Domain `chotso.vn` **≈750.000đ/năm** — một con số duy nhất, QĐ-27 — mua trong tuần này vì lý do pháp lý, không vì Bước 0. **Lấy báo giá thật ngày 03/09 và thay con số này**) |
| **Điều kiện đi tiếp** | H2 đạt **và** H3 không fail **và** ≥1/8 sổ tự hỏi "mai còn chốt sổ không?" |

### 4.1. Mức 1 — Walking skeleton (1 nhóm bạn thật của founder)

**Mục đích:** chứng minh đường ống chạy từ đầu tới cuối trên máy thật, trong Zalo thật, với người thật — **không** để đo retention.

| | |
|---|---|
| **Làm gì** | US-00 (3,0) · US-02 (1,5) · US-03 (1,0) · US-04 (2,5) · US-05 (3,5) · US-06 (0,3) · US-08 (3,0) · US-09 (0,5) · US-11 (1,2) · US-14 (0,2) |
| **Được phép làm tay (wizard-of-oz)** | **US-01 bị bỏ hẳn: mở sổ = founder chạy một câu SQL insert** · người chốt sổ = chỉ founder · không có lưới 30 ngày · không có trang public · không có dashboard (đọc SQL tay) · không có TTL (ảnh nằm đó) · không có màn Của tôi · không có báo cáo/chặn (**vì chỉ có nhóm bạn founder, và founder ngồi cạnh**) |
| **pw** | **16,7 pd = 3,34 pw** |
| **Bao lâu ở 20h/tuần** | 16,7 pd × 8h = 133,6 giờ ÷ 13h hiệu dụng ≈ **10,3 tuần lịch**. Ở 40h/tuần (26h hiệu dụng): **5,1 tuần** |
| **Học được** | 3 điều mà không cách nào khác biết được: (1) `chooseImage`/camera trong webview Zalo có chạy đồng nhất trên Xiaomi/Oppo/Samsung không · (2) card satori có font Việt đúng và Zalo có preview đúng 4:5 không · (3) **số KB thật** của ảnh sau nén trên máy thật, thay số [ước lượng] 110 KB bằng số [FACT] |
| **Chi phí hạ tầng** | **$0/tháng** (Vercel Hobby + Supabase free + R2 free tier 10 GB). ⚠️ Vercel Hobby cấm dùng thương mại — hợp lệ ở mức này vì chưa có doanh thu, nhưng phải chuyển Pro ($20/tháng) trước khi có bất kỳ đồng nào |
| **Cổng ra** | Founder + 4 người bạn dùng **7 ngày liên tiếp** không có bug chặn đường. Không đo retention ở mức này — n=1 sổ, và đó là nhóm của founder |

### 4.2. Mức 2 — MVP thật (5–10 sổ ngoài, không quen founder trực tiếp)

| | |
|---|---|
| **Làm gì thêm** | Toàn bộ 15 story còn lại: US-01, 07, 10, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 |
| **Làm gì thêm (chi tiết)** | US-01 (1,5) · 07 (1,5) · 10 (1,2) · 12 (0,8) · 13 (0,5) · 15 (1,5) · 16 (1,2) · 17 (0,8) · 18 (0,3) · 19 (0,7) · 20 (2,5) · 21 (0,5) · 22 (1,0) · 23 (0,8) · 24 (1,0) |
| **Không còn được làm tay** | Mở sổ tự phục vụ · bất kỳ ai chốt sổ được · TTL chạy thật · xoá dữ liệu chạy thật · dashboard tự tính |
| **pw** | **+15,8 pd = +3,16 pw → tổng 32,5 pd = 6,5 pw** |
| **Bao lâu ở 20h/tuần** | +15,8 pd × 8h = 126,4 giờ ÷ 13 ≈ **+9,7 tuần** → **tổng ~20 tuần lịch** kể từ 23/09 |
| **Học được** | **M1** (`group-D14(app)` ≥ `B`) và **M2** (≥1 sổ sinh ra không do founder tuyển) · H1 đo bằng số thật thay vì proxy · phân bố ngày hụt (1 người có mặt hay 0 người) → quyết định mở/không mở cơ chế "gánh" · tỉ lệ TOANG/tổng tấm theo tuần |
| **Chi phí hạ tầng** | ~**$0–12/tháng**. R2 ở 10 sổ: 10 × 20 MB/năm = 200 MB → **trong free tier**. Con số $3/tháng của v2 §4.5 là cho 10.000 sổ, không phải cho beta |
| **Chi phí vận hành** | **~5 giờ/tuần** (v2 §9), trần cứng 10 giờ/tuần |
| **Cổng ra** | ≥8 sổ chạy đủ 28 ngày · dashboard đọc được trong 3 phút · **M1 đạt** |

### 4.3. Nếu chọn (b) — cắt xuống 3,8 pw vừa trần 15/12

Cắt theo thứ tự này, **không** cắt theo cảm giác:

| Cắt | pd tiết kiệm | Vì sao cắt được | Hậu quả chấp nhận |
|---|---|---|---|
| US-07 lưới 30 ngày | 1,5 | Không giả thuyết nào chết vì thiếu nó trong 28 ngày đầu | Mất "switching cost" — nhưng switching cost ở beta 28 ngày là ảo |
| US-13 đủ mâm + mốc sổ | 0,5 | Là phần thưởng, không phải phép đo | Card kém vui hơn |
| US-15 màn Của tôi (giữ lại **chỉ** nút xoá dữ liệu) | 1,0 | Đổi kèo/rời sổ làm được bằng nhắn founder ở quy mô 10 sổ | Ops +10 phút/tuần |
| US-21 remote config | 0,5 | P6 quan trọng khi có nhiều sổ; ở 10 sổ, deploy lại là đủ | Vi phạm P6 tạm thời — **ghi vào ADR kèm ngày trả nợ** |
| US-10 trang public + thả tim | 1,2 | Đây là vòng lan truyền → **cắt cái này thì M2 không đo được** | ⚠️ **Chỉ cắt nếu chấp nhận bỏ M2 ở vòng beta đầu** |
| **Tổng cắt** | **4,7 pd** | | |

6,5 pw − 0,94 pw = **5,56 pw**. Vẫn chưa vừa 3,8 pw. Phần thiếu còn lại (1,76 pw ≈ 8,8 pd) **không cắt được bằng feature** — nó chỉ cắt được bằng cách **giảm số sổ beta từ 10 xuống 5** (US-20 dashboard đơn giản hơn, US-16 báo cáo/chặn thay bằng "nhắn founder") hoặc bằng cách **tăng giờ**. Nói thẳng: **ở 20 giờ/tuần, trần 15/12/2026 chỉ đạt được nếu beta chạy 5 sổ thay vì 10.** Đó là con số, không phải sự bi quan.

### 4.4. Mức 3 — "v1 lên store": KHÔNG TỒN TẠI Ở LỘ TRÌNH NÀY

Đề bài yêu cầu mô tả "v1 lên store". Trả lời trung thực theo v2 §6 mục 2: **không có mức đó, và việc nó không tồn tại là một quyết định, không phải một thiếu sót.**

| | |
|---|---|
| **v1 công khai = web, không phải store** | Mở đăng ký tự do trên `chotso.vn`, +1 sổ/người (US bỏ khoá đa sổ), +Android web push nếu H1 vùng xám |
| **pw** | +1,5 pw [ước lượng] |
| **Chi phí hạ tầng** | Vercel Pro $20 + Supabase Pro $25 + R2 ~$3 + domain ≈ **$50/tháng ≈ 1,3 triệu VND/tháng** |
| **Cửa mở store (nấc 4)** | **`group-D28 ≥ 35%` trên ≥30 sổ** — khoá cứng, ghi vào ADR hôm nay |
| **Nếu mở** | App native + widget: **+8 đến +12 pw** [ước lượng dựa r05: WidgetKit Swift-only 1–2 tuần/nền tảng, cộng store review, cộng EAS] · cộng **pháp nhân VN** (đường găng dài nhất) · cộng Apple Guideline 1.1.1/1.2 quay lại thành rủi ro thật |
| **Cửa pháp lý bắt buộc trước mọi thứ** | [CHỐT 2026-08-28, QĐ-04] **Đèn vàng: `monthly_visits` 6.000 HOẶC `monthly_active_persons` 600** (≈60 sổ ở A=4,0) → bắt đầu hồ sơ Giấy phép MXH (3–6 tháng, cần pháp nhân VN + người chịu trách nhiệm nội dung quốc tịch VN). **Đèn đỏ: 8.500 lượt / 850 người → dừng nhận sổ mới ngay trong ngày.** Ngưỡng luật là **OR** và nhánh lượt-truy-cập bind trước ~2,5 lần — con số "700 người" cũ báo động **muộn 2,5 lần** |

Nói gọn: **store không phải nấc tiếp theo của MVP. Nó là một dự án khác, mở khoá bằng một con số, và con số đó chưa tồn tại.**

---

## 5. LÀM BẰNG TAY TRƯỚC KHI CODE — BƯỚC 0, 14 NGÀY, 0 DÒNG CODE

_Đây là phần quan trọng nhất của tài liệu. Nếu founder chỉ đọc một mục, đọc mục này._

### 5.1. Nguyên tắc: mô phỏng đúng MA SÁT, không mô phỏng đúng công nghệ

Sai lầm phổ biến của Bước 0 làm tay là làm cho nó **dễ hơn sản phẩm** — rồi kết luận sai rằng nhịp tồn tại. Trong sản phẩm, người dùng phải **bấm một link, mở một trang, chọn ảnh, chọn nhãn, gửi**. Nếu Bước 0 chỉ yêu cầu "dán ảnh vào nhóm", nó bỏ mất chính bước có ma sát cao nhất.

Cách xử lý: **Bước 0 chia hai giai đoạn, và độ chênh giữa hai giai đoạn chính là phép đo ma sát của cái link** — một con số không tài liệu nào trong hồ sơ đang có.

| Giai đoạn | Ngày | Cách nộp | Đo cái gì |
|---|---|---|---|
| **G1 — trần trên** | 1–7 | Dán ảnh **thẳng vào nhóm Zalo** kèm một chữ `XONG` hoặc `TOANG` | Nhịp có tồn tại ở dạng dễ nhất không. **Nếu G1 mà `q_c` < 0,45 thì dừng ngay ngày 7, không cần chạy G2** |
| **G2 — có ma sát thật** | 8–14 | Bấm link → **Google Form** → tải ảnh + chọn nhãn → gửi. Founder ghép ảnh thành sổ và card | Con số so với ngưỡng H2. Chứa **cả 3 ngày cửa sổ im lặng** |
| **Δ = q_c(G1) − q_c(G2)** | | | **Thuế của cái link.** Nếu Δ > 0,20 thì phần lớn 6,5 pw đang dùng để dựng chính cái thuế đó |

### 5.2. Bộ đồ nghề — 5 thứ, tất cả miễn phí

| Công cụ | Dùng làm gì | Ghi chú |
|---|---|---|
| **Google Form (tuyển)** | Lọc sổ đủ điều kiện | Bắt nhập **tên 3 người bạn + link nhóm chat ĐÃ CÓ**. Chỉ duyệt khi đủ 3. **Không tạo nhóm mới — chiếm nhóm đã có** |
| **Google Form (nộp hằng ngày, G2)** | Thay màn Nộp | 1 form/sổ. 3 câu: tên (dropdown, không gõ tay) · ảnh (file upload) · nhãn (radio XONG/TOANG) |
| **Google Sheet** | Thay database + dashboard | 2 sheet: `raw` và `daily` — §5.6 |
| **Canva** | Thay màn Card chốt sổ | 1 template 1080×1350 có 6 ô ảnh placeholder |
| **Zalo** | Kênh phân phối + kênh cà khịa | Không thay thế bằng gì cả — đó là toàn bộ luận điểm |

⚠️ **Cạm bẫy đã biết của Google Form:** tải file lên **bắt buộc đăng nhập Google**. Trên Android gần như ai cũng có sẵn; trên iOS thì không chắc [cần kiểm chứng ngay ngày 8 với 8 sổ]. **Bắt buộc có đường thoát:** ai không đăng nhập được thì gửi ảnh riêng cho founder trên Zalo, và founder **ghi lại đường nào được dùng** ở cột `path`. Số người phải dùng đường thoát là một phát hiện, không phải một phiền toái.

### 5.3. Cấu hình 8 sổ — hai nhánh, để thí nghiệm có thể sai

| | Nhánh A (5 sổ) | Nhánh B (3 sổ) |
|---|---|---|
| Kèo | Có, 8 preset hoặc tự viết | **Không có** |
| Nhãn | XONG / TOANG | **Không có nhãn** |
| Nội dung ảnh | Ảnh liên quan tới kèo | "Hôm nay tao thế nào" (bất kỳ) |
| Card | Ảnh + `Ngày thứ N · X tấm · chuỗi Y` | Ảnh + `Ngày thứ N` |
| Đây là | Sản phẩm trong tài liệu v2 | Đối chứng kiểu Locket |

**Luật tuyển:** không tuyển bù sau **ngày 3**. Sổ chết trong 14 ngày là **dữ liệu**, không phải sự cố cần vá.

### 5.4. Một tối của founder — timeline chính xác

| Giờ | Việc | Phút/sổ nhánh A | Phút/sổ nhánh B |
|---|---|---|---|
| 20:40 | Mở Sheet, mở Form response, tải ảnh trong ngày | 6 | 3 |
| 20:50 | Kéo ảnh vào template Canva, sửa 3 con số, xuất PNG | 8 | 4 |
| 21:00 | Dán card + caption vào nhóm Zalo (ngày 1–7) **hoặc** gửi riêng cho người trực (ngày 8–14) | 3 | 2 |
| 21:10 | Ghi `raw`: ai XONG/TOANG/VẮNG, ai đã xem card, có ai tự nhắc nhau không | 3 | 1 |
| | **Tổng/sổ** | **20** | **10** |

`5 × 20 + 3 × 10 = 130 phút/tối × 14 tối = 30,3 giờ ≈ 15 giờ/tuần.` Khớp bảng §9 của v2.

> **Cảnh báo vận hành:** 2 giờ 10 phút **mỗi tối, 14 tối liên tiếp, không nghỉ** là mức mà một người bình thường sẽ bỏ ở tối thứ 9. Chuẩn bị trước ngày 08/09: template Canva phải kéo-thả được trong 2 phút, và Form response phải xuất ảnh về một thư mục Drive đặt sẵn tên theo ngày. Nếu ngày 3 vẫn mất 20 phút/sổ, **giảm nhánh A từ 5 xuống 4 sổ** — đừng giảm số ngày, và tuyệt đối đừng giảm giấc ngủ.

### 5.5. Cửa sổ im lặng — cách làm ĐÚNG, khác với cách v2 viết

v2 §10(f) yêu cầu: ngày 8, 11, 14 founder **"không post gì, không nhắc gì, không trả lời gì"**. Nếu hiểu theo nghĩa đen thì founder cũng không dán card — mà card là **cơ chế phân phối của chính sản phẩm**. Bỏ card đi rồi đo `q_c` là đo một sản phẩm khác, và nó sẽ fail vì lý do sai.

**Cách làm đúng, giữ nguyên tinh thần của v2 và giữ được phép đo:**

- **20:45** ngày 8/11/14: founder làm card như mọi tối, rồi **gửi RIÊNG** cho thành viên đang tới lượt trực — đúng cơ chế xoay vòng của sản phẩm (US-14).
- Founder **không gõ một chữ nào trong nhóm** từ 04:00 ngày 8 đến 04:00 ngày 9 (và tương tự ngày 11, 14).
- Nếu người trực **quên dán**, founder **để nguyên**. Ngày đó không có card. **Đó chính là phép đo điểm chết đơn** ở v2 §9 mục 9 — miễn phí, không cần code.
- Exit survey và mọi câu hỏi của founder dời sang **ngày 15**, sau khi cửa sổ đo đã đóng.

Ba con số lấy từ ba ngày đó, và **chỉ ba ngày đó**, mới được đem so với ngưỡng H2/H3.

### 5.6. Google Sheet — cấu trúc chính xác

**Sheet `raw`** — một dòng cho mỗi người, mỗi ngày (8 sổ × ~5 người × 14 ngày ≈ **560 dòng**, nhập tay ~3 phút/tối/sổ):

| Cột | Giá trị | Ghi chú |
|---|---|---|
| `date` | 2026-09-08 | ranh giới 04:00: ảnh gửi lúc 01:00 ghi cho ngày hôm trước |
| `group_id` | A1..A5, B1..B3 | |
| `branch` | A / B | |
| `member_id` | A1-m1.. | **không ghi tên thật vào sheet** |
| `status` | xong / toang / vắng | nhánh B chỉ có `co` / `vang` |
| `received_at` | giờ:phút | để tính phân bố giờ nộp — dữ liệu cho US-24 |
| `path` | form / zalo-riêng / nhóm | đo cạm bẫy đăng nhập Google ở §5.2 |
| `seen_card` | y / n / ? | §5.7 |
| `self_nudge` | 0/1 | người này có tự nhắc người khác mà founder không khơi mào không |
| `founder_spoke` | y / n | **n** ở ngày 8, 11, 14 |

**Sheet `daily`** — **8 cột** suy ra bằng công thức: **`q_c_roster`** · **`q_x_roster`** · `q_c_sliding` · `q_x_sliding` · số ngày sổ tụt dưới 3 người có mặt · số lần tự nhắc nhau · tỉ lệ TOANG/tổng tấm · **tỉ lệ click shortlink trong 24h**.

Thêm một cột vào sheet `raw`: **`roster_size`** — nhập một lần ở cuối ngày 3 của mỗi sổ, **giữ nguyên 11 ngày còn lại**.

> ### ⛔ [CHỐT 2026-08-28 — QĐ-03] MẪU SỐ CỦA `q_c` ĐÃ ĐỔI. Đây là sửa đổi đắt nhất nếu bỏ sót, và hạn của nó là **07/09/2026**.
> Bản trước của mục này ghi: _"`q_c` và `q_x` tính trên thành viên Active = đã nộp ≥1 tấm trong 7 ngày gần nhất"_ — **đó chính là lỗi mà `06` §9 BĐ-1 bắt được**, và nó bắt bằng một ví dụ số: sổ 5 người, 3 người bỏ hẳn từ ngày 8. Ba người đó **rơi khỏi mẫu số Active** sau 7 ngày ⇒ `q_c` **nhảy từ 0,54 lên 0,90** trong khi sổ vừa mất 60% thành viên và `group_alive` = FALSE. Founder đọc "GT-01 PASS" trên một cái sổ đang chết.
> **Luật chốt:**
> - **`q_c_roster` = (số lượt có mặt) / (roster_size)** — `roster_size` = số người đã nộp ≥1 tấm trong **3 ngày đầu** của sổ, **đóng băng 14 ngày**. **Đây là con số so với ngưỡng 0,45 / 0,35.**
> - `q_c_sliding` (mẫu số Active trượt) giữ lại làm **cột báo cáo phụ**, **không bao giờ** dùng cho quyết định đi/dừng.
> - **Phải sửa Sheet TRƯỚC 08/09.** Sau ngày đó không sửa hồi tố được: roster ngày 1–3 không tái dựng lại được từ dữ liệu đã thu.

### 5.7. Đo H1 mà không có code

Trong sản phẩm, "mở card" = mở trang web (US-23). Ở Bước 0 không có trang web, nên cần proxy. Ba lựa chọn, theo thứ tự ưu tiên:

| Cách | Cách làm | Điểm yếu |
|---|---|---|
| **(1) Trạng thái "đã xem" của Zalo** | Zalo hiển thị số người đã xem một tin nhắn trong nhóm; chạm vào xem danh sách. Founder ghi lại lúc 21:00 hôm sau. **[cần kiểm chứng trong buổi kiểm chứng nền tảng 04/09 — nếu Zalo không cho xem danh sách theo tin nhắn nhóm, dùng cách 2]** | Đo "thấy tin nhắn", không đo "mở nội dung" |
| **(2) Link rút gọn riêng cho từng sổ, từng ngày** | Mỗi tối tạo 1 link rút gọn (Bitly / short.io, gói free) trỏ tới Form; đọc số click hôm sau | Đếm click, không dedupe theo người. **Founder tuyệt đối không tự bấm link của mình** |
| **(3) Timestamp nộp trên Form** | Số người nộp trong 24h / số Active | Gộp "mở" với "nộp" — chính là biến mà H1 cần tách. Chỉ dùng làm chặn dưới |

**Ghi vào kết luận ngày 22/09 đúng như sau:** H1 ở Bước 0 là **proxy có sai lệch đã biết**; con số H1 thật chỉ có sau US-23 ở beta. Nếu proxy < 40% thì đã đủ để dừng; nếu proxy ≥ 60% thì **chưa** đủ để ăn mừng.

> ### ✅ [CHỐT 2026-08-28 — QĐ-05] Cách (2) là BẮT BUỘC, không phải "ưu tiên 2". Và H1 chỉ có quyền DỪNG.
> **(a) Thiết bị đo chốt là shortlink theo sổ theo ngày** (cách 2), setup trước **07/09/2026**, ~30 phút, dùng **Short.io gói free** (không tự host — giữ nguyên lập luận pháp lý "không máy chủ, không dịch vụ" của `05` GIAI ĐOẠN 0, và giữ nguyên lệnh cấm viết code sản phẩm của v2 §12). Cách (1) — danh sách "Đã xem" của Zalo — **xuống làm dữ liệu tham khảo**, vì `06` BĐ-3 chỉ ra điều quyết định: **một ảnh Canva dán vào Zalo không sinh sự kiện "mở"**, nên không có shortlink thì ngày 22/09 **không có con số H1 nào tồn tại**.
> **(b) `07` §4 CỔNG #1 đã được sửa theo:** H1 mất vế "≥60% mới ĐI", giữ vế "<40% thì DỪNG". Ngưỡng ≥60% dời sang **tuần 2 của beta**, khi US-23 chạy. Lý do: cho một proxy không có thiết bị đo quyền phủ quyết một dự án là cách chắc chắn nhất để founder phải bịa một con số ở ngày quyết định.

### 5.8. Template card Canva — quy cách

- **Khổ 1080 × 1350 px (4:5).** Không đổi khổ giữa chừng — v2 §4.6 khoá.
- **Dòng 1:** tên sổ do nhóm tự đặt.
- **Dòng 2:** `Ngày thứ 9 · 31 tấm · chuỗi 4` (nhánh B: chỉ `Ngày thứ 9`).
- **Khối giữa:** lưới **thích ứng theo số người đã nộp** [CHỐT 2026-08-28, QĐ-30], **chỉ ô của người đã nộp**. Ô của người vắng **không tồn tại** — không ô xám, không silhouette, không tên. Đây là ràng buộc P2, và Bước 0 phải tuân đúng như sản phẩm.
  - 1 người → 1 ô lớn · 2 người → 1×2 · 3–4 người → 2×2 · 5–6 người → 2×3 · **7–8 người → 2×4 (ô nhỏ hơn)**
  - **Vì sao phải có nhánh 7–8:** trần thành viên/sổ là **8** (`04` §1.3, thực thi bằng trigger, và con số 8 đã đi vào câu hỏi gửi luật sư nên nó là ràng buộc pháp lý). Lưới 2×3 cố định chỉ có **6 ô** ⇒ ở ngày đủ mâm của một sổ 7–8 người, **hai người đã nộp sẽ không lên card mà không có quy tắc nào nói ai bị cắt**. Đó đúng là loại quyết định mà nguyên tắc **P2** tồn tại để tránh: không được có ô trống có tên, nhưng cũng **không được im lặng loại bỏ một người đã nộp**.
  - **Bắt buộc: snapshot test của card (P4) phải có một fixture 8 người.**
- **Nhãn nhỏ trên mỗi ảnh:** `✓` hoặc `💀` (nhánh A). Nhánh B không có nhãn.
- **Dòng chân:** `Minh chốt sổ · mai tới lượt Linh`.
- **Không bao giờ có trên card:** nội dung kèo của bất kỳ ai · tên người vắng · "còn thiếu 2 người" · bất kỳ con số nào có thể giảm ngoài chuỗi.

### 5.9. Script tin nhắn — dùng nguyên văn, không "cải tiến"

> ### ⚠️ [CHỐT 2026-08-28 — QĐ-31] LUẬT T2 CỦA `08` ÁP LÊN TOÀN BỘ 8 SCRIPT DƯỚI ĐÂY.
> `08-ux-flow-va-tone.md` §2.2 chỉ ra rằng **`Bấm vô nộp đi` là một mệnh lệnh chỉ có nghĩa với người CHƯA nộp** — tức cùng hình dạng ngữ nghĩa với chữ cấm vĩnh viễn `đứa nào chưa` mà v2 §1 gọi là "chữ nguy hiểm nhất trong toàn bộ hồ sơ". Caption chốt: **`Sổ tối nay đây. Mỗi đứa một tấm, không cần cài app.`** (vẫn đủ ba chữ bắt buộc, mất mệnh lệnh, 0 pw).
> **Hệ quả cho mục này:** script **S5** đang dùng _"Gửi tấm của mày vô đây, 20 giây"_ — **cùng hình dạng mệnh lệnh nhắm vào người chưa nộp**. Sửa thành: **_"Sổ tối nay đây. Mỗi đứa một tấm, 20 giây."_** Soát lại cả 8 script theo cùng một luật trước 08/09: **không câu nào được chỉ có nghĩa với người chưa làm.**
> Đây là loại lỗi **rẻ hôm nay và không sửa được sau khi đã vào bank câu thu từ Bước 0** — caption này sẽ được dán **112 lần** (8 sổ × 14 ngày) vào nhóm bạn thật.

Mọi script dưới đây đã kiểm tra không chứa 7 chữ bị cấm (`boss`, `game`, `nhiệm vụ`, `gamification`, `ritual`, `đứa nào chưa`, `thử thách`) và không nêu tên người vắng.

**S1 — tin tuyển (đăng story / nhắn riêng), 05/09:**
> Tao đang thử một thứ trong 14 ngày: **tối nào nhóm cũng chốt sổ — mỗi đứa một tấm, không ai cài app.**
> Cần vài nhóm bạn **đã có sẵn nhóm chat**. Tụi mày không phải tải gì, không phải đăng ký gì. Mỗi tối gửi một tấm ảnh, hết.
> Phần bày biện tao lo. Nhóm nào tham gia thì điền form 2 phút: [link]

**S2 — Form tuyển, 5 câu, chỉ duyệt khi đủ:**
> 1. Nhóm chat của tụi mày đã có sẵn chưa? (có / chưa có)
> 2. Tên (hoặc nickname) của 3 người sẽ tham gia cùng bạn
> 3. Nhóm này thường nhắn nhau mấy lần một tuần? (hằng ngày / vài lần / hiếm)
> 4. Số người trong nhóm chat đó
> 5. Tất cả đều từ 16 tuổi trở lên? (có / không) — **"không" = loại, không thương lượng**

**S3 — kickoff nhánh A, 20:00 ngày 08/09:**
> Chào cả nhóm. 14 ngày tới tối nào tụi mình cũng chốt sổ. Luật đúng ba dòng:
> **1.** Mỗi đứa chọn một kèo cho riêng mình: ngủ trước 12h · đi bộ 20 phút · học 15 phút · đọc 5 trang · không trà sữa hôm nay · tập 15 phút · không bỏ bữa sáng · không mất tích. Hoặc tự viết một câu ngắn.
> **2.** Mỗi tối gửi **đúng một tấm ảnh**, kèm một chữ: **XONG** hoặc **TOANG**. TOANG vẫn tính — miễn là có mặt. Tấm toang thường là tấm buồn cười nhất.
> **3.** 21:00 tao dán sổ của cả nhóm vào đây.
> Không ai bị nêu tên vì không gửi. Không có bảng xếp hạng. Ảnh chỉ nằm trong nhóm này.
> Kèo của mày là gì? Rep một dòng.

**S4 — kickoff nhánh B, 20:00 ngày 08/09:**
> Chào cả nhóm. 14 ngày tới tối nào tụi mình cũng gửi **một tấm "hôm nay tao thế nào"** vào đây. Không luật gì thêm, không phải làm gì hết, ảnh gì cũng được.
> 21:00 tao dán sổ của cả nhóm vào đây.
> Ảnh chỉ nằm trong nhóm này.

**S5 — caption card hằng tối, ngày 1–7:**
> Sổ tối nay đây 👇 Gửi tấm của mày vô đây, 20 giây: [link]

**S6 — bàn giao trực, nhắn RIÊNG ngày 07/09 (không đăng vào nhóm):**
> Nhờ mày việc này: từ tối mai tới hết ngày 14, khoảng 20:45 tao gửi riêng cho mày cái sổ của tối đó, mày dán vào nhóm giúp tao.
> Tao sẽ im trong nhóm mấy hôm đó — đây là phần quan trọng nhất, mày đừng nói với ai.
> Và nếu có tối nào mày quên dán thì **cứ để quên**, đừng dán bù. Quên cũng là kết quả tao cần biết.

**S7 — exit survey, ngày 15/09 và 22/09, nhắn RIÊNG từng người, đúng một câu:**
> Hỏi thật một câu thôi: **nếu từ mai không ai dán sổ vào nhóm nữa thì mày thấy sao?** Trả lời một dòng, thật lòng, tao không giận.

**S8 — khi một sổ im 3 ngày liên tiếp (nhắn RIÊNG người mở sổ, KHÔNG nhắn vào nhóm):**
> Nhóm mày ngưng rồi hả? Không sao đâu, tao chỉ cần biết lý do thật: chán · quên · phiền · hay bận? Một chữ thôi cũng được.

### 5.10. Ba thứ TUYỆT ĐỐI không làm trong 14 ngày này

1. **Không viết code sản phẩm.** Không "làm sẵn schema cho đỡ phí thời gian". Nếu Bước 0 fail, schema đó là rác.
2. **Không nhắc trong nhóm ở ngày 8, 11, 14** — kể cả thả tim, kể cả trả lời câu hỏi.
3. **Không cứu sổ đang chết.** Sổ chết là dữ liệu tốt nhất trong toàn bộ thí nghiệm.

---

## 6. DANH SÁCH KHÔNG LÀM — ĐẦY ĐỦ

20 mục đầu giữ nguyên từ v2 §6 (không nhắc lại ở đây để tránh trôi bản). Dưới đây là **7 mục bổ sung ở tầng phạm vi MVP** mà v2 chưa liệt kê vì nó nói về sản phẩm chứ không nói về công trường:

| # | Không làm ở MVP | Lý do | Điều kiện mở lại |
|---|---|---|---|
| 21 | **Màn đăng nhập, tài khoản, khôi phục qua email** | Device token + mã 6 ký tự đủ cho ≤10 sổ. Auth là hố 3–5 pd với RLS | Khi mất tài khoản >10% người dùng beta, đo bằng số lần nhập mã khôi phục |
| 22 | **Đa sổ trong UI** | v2 §6 mục 14 đã khoá. Nhưng **cột `group_id` + RLS vẫn viết từ commit đầu** — chi phí hôm nay bằng 0, chi phí retrofit là 3–5 pw | v1.1, +0,3 pw |
| 23 | **Dashboard đẹp / công cụ analytics của bên thứ ba** | PostHog & co. mặc định đo cấp **user**; dùng chúng là vi phạm P10 ngay từ cấu hình. Một view SQL + một trang tĩnh là đủ | Khi >100 sổ, việc tự viết mới đắt hơn |
| 24 | **Tối ưu hiệu năng, cache CDN, ảnh responsive nhiều size** | Ở 10 sổ, tổng traffic dưới 1 GB/tháng. Tối ưu bây giờ là tối ưu cho một sản phẩm chưa chắc tồn tại | >1.000 sổ hoặc hoá đơn R2 >$20/tháng |
| 25 | **Thiết kế thương hiệu, art, illustration, animation** | c-scope-execution ước ~8 pw nội dung/thiết kế cho DOC 1. Ở đây: 1 font, 2 màu, 0 illustration. Card là bề mặt duy nhất cần đẹp | Sau khi M1 đạt |
| 26 | **i18n / tiếng Anh** | Một múi giờ, một ngôn ngữ. v2 §6 mục 18 | >5% người dùng ngoài VN |
| 27 | **Test end-to-end đầy đủ (Playwright/Cypress)** | Chỉ giữ 3 test có ý nghĩa: bất biến 10.000 mô phỏng, quét template bank, quét cây render. Chúng bảo vệ **nguyên tắc**, không bảo vệ pixel | Khi có người thứ hai trong đội — đó là lúc test bắt đầu trả lãi |

**Luật đánh đổi 1-1 (P7) áp dụng nguyên vẹn:** mọi hạng mục thêm vào tài liệu này phải cắt một hạng mục đang có, ghi rõ pd, ghi vào commit message.

---

## 7. DEFINITION OF DONE

MVP **xong** khi và chỉ khi cả 5 khối dưới đây đều tick hết. Không có "gần xong".

### 7.1. Sản phẩm

- [ ] Đúng **7 màn + 1 slot dự phòng để trống**. [CHỐT 2026-08-28, QĐ-32] Slot 8 **chỉ** được lấp nếu Bước 0 chứng minh một màn là bắt buộc, và lý do phải nằm trong ADR. **Yêu cầu của `10` §4 luật 1 (lấp slot 8 bằng fake door "Bao cả sổ", +0,2 pw) BỊ TỪ CHỐI ở MVP-0**: một fake door bán hàng không phải một phát hiện của Bước 0, và nó đang bị khoá thêm bởi QĐ-01 (doanh thu 0 tuyệt đối). Fake door T3 của `10` chuyển sang **tuần 4 của beta ở dạng một dòng text trong màn Của tôi**, không phải một màn
- [ ] Một người mới, không quen founder, tự mở sổ → mời 3 bạn → cả 4 nộp tấm đầu tiên, **không nhắn founder một câu nào**
- [ ] Toàn bộ luồng chạy trong **webview Zalo trên máy thật**: 1 Xiaomi, 1 Oppo, 1 Samsung tầm trung, 1 iPhone
- [ ] Card render <2s p95, font Việt đủ dấu, preview đúng 4:5 trong Zalo
- [ ] Mã 6 ký tự gõ tay vào được sổ khi link bị chặn

### 7.2. Nguyên tắc (tự động, không review bằng mắt)

- [ ] Test 10.000 mô phỏng 30 ngày **xanh**: không cột nào giảm ngoài `chuỗi`, và `chuỗi` chỉ giảm về đúng 0 khi hết van (P1)
- [ ] Test CI quét cây render: 0 chỗ nhận `member.name` trong nhánh `vắng` (P2)
- [ ] Test CI quét template bank: 0 placeholder `{goal}` / `{goal_text}` (P3)
- [ ] Snapshot test card: luôn có ≥2 con số không bao giờ giảm (P4)
- [ ] Snapshot test layout: pixel đầu tiên dưới header là ảnh người khác, không phải nút Nộp (P5)
- [ ] Lint/grep CI: 0 số ma trong logic ngày/chuỗi/ngưỡng (P6)
- [ ] Unit test: `ngày_tính` không phụ thuộc `card_shared` (P11)
- [ ] Tổng pd trong backlog ≤ trần đã chốt, **kiểm bằng `docs/adr/pw-ledger.md`** (P7) [CHỐT 2026-08-28, QĐ-33]. Luật: **một khoản cắt chỉ được chi một lần**; không PR nào được merge nếu tổng vượt trần. Trước ngày này, sáu tài liệu độc lập cùng tiêu một khoản cắt ("nút thả tim 0,2 pw" được bán **ba lần**) và không có nơi nào cho biết tổng pw hiện tại là bao nhiêu — tức P7 **không kiểm tra được**

### 7.3. Đo lường

- [ ] Dashboard cấp **sổ**, cột đầu là **`book_id`** (QĐ-02c), đọc H1/H2/H3 trong **3 phút**. Ở MVP-0 dashboard = **6 truy vấn SQL chạy tay**, không phải UI
- [ ] **Toàn bộ 32 event của danh mục hợp nhất** (`04` §7.1, QĐ-02) có mặt trong schema **từ commit đầu tiên** — không backfill được. Trong đó 4 event an toàn: `member_left{misses_7d, was_removed_by_moderation, days_in, toang_14d, kept_proofs}` · `report_created/resolved` · `safety_screen_shown{reason_bucket}` · `proof_deleted_by_self`
- [ ] Bảng `audit_log` (QĐ-19) có mặt từ migration đầu — nghĩa vụ lưu ≥2 năm, không làm bù được
- [ ] `group_alive` cài đúng định nghĩa đã chốt: **≥3 người nộp tấm trong 7 ngày gần nhất**
- [ ] **Hai** dòng cảnh báo tự động [CHỐT 2026-08-28, QĐ-04]: `monthly_visits` (vàng **6.000** / đỏ **8.500**) và `monthly_active_persons` (vàng **600** / đỏ **850**). **Con số 700 cũ đã bị bác** — ngưỡng NĐ 147/2024 là **OR** và nhánh lượt-truy-cập bind trước ~2,5 lần (`05` §0 kết luận 2)
- [ ] `q_c_roster` (mẫu số đóng băng) là con số so ngưỡng; `q_c` trượt chỉ là cột báo cáo (QĐ-03)
- [ ] `card_opened` dedupe theo thành viên, đủ để tính H1 thật

### 7.4. Pháp lý & an toàn

- [ ] ToS + quyền riêng tư online, khớp với TTL 72h và với "không nhận diện khuôn mặt"
- [ ] **SLA KÉP công bố ở màn 7** [CHỐT 2026-08-28, QĐ-17]: **48 giờ** cho khiếu nại của người dùng · **24 giờ (khẩn cấp 6 giờ)** cho yêu cầu của cơ quan nhà nước. Hai con số cho hai đối tượng — con số thứ hai là **luật định, không thương lượng** (Luật ANM 116/2025) và không được gộp vào 48h
- [ ] **Auto-hide TOÀN CỤC ngay ở report đầu tiên** [QĐ-16]: `proof.hidden_at = now()` ẩn với **tất cả**, không chỉ với người báo cáo. Founder xử trong 48h, khôi phục nếu report sai. Thiết kế cũ của `08` §6.4 (ẩn client-side chỉ với người báo) để nội dung vi phạm hiển thị với 4 người còn lại tối đa 48 giờ ⇒ **không thoả nghĩa vụ "gỡ bỏ kịp thời"** của Luật ANM 116/2025 Điều 16 khoản 3
- [ ] `RUNBOOK.md` tồn tại và chứa: công tắc `remote_config['service.paused']` · **script khoá một sổ khẩn cấp** · một login Supabase chỉ-đọc · câu trả lời mẫu cho khiếu nại · **tên một người thứ hai**
- [ ] Age gate lưu **cờ boolean `is_16_plus`, KHÔNG lưu năm sinh** (QĐ-20, tối thiểu hoá dữ liệu — Luật 91/2025)
- [ ] Age gate ≥16 ở luồng Mở sổ (kiểm tra ở **tầng ứng dụng**, không phải CHECK constraint gọi `now()` — Postgres cấm hàm không-IMMUTABLE trong CHECK)
- [ ] Chặn 10 từ khoá rối loạn ăn uống ở ô kèo tự viết → màn hỗ trợ + 3 preset an toàn + event
- [ ] "Xoá dữ liệu của tôi" chạy thật, kiểm bằng cách xoá rồi query DB **và** query R2
- [ ] EXIF bị strip, kiểm bằng `exiftool` trên 5 ảnh đã upload
- [ ] Ảnh gốc thật sự biến mất sau 72h, kiểm ở staging với TTL 1h

### 7.5. Vận hành & thoát

- [ ] Deploy = **1 lệnh**; rollback đo được **<10 phút**
- [ ] Hoá đơn hạ tầng tháng đầu **≤$40** [CHỐT 2026-08-28, QĐ-09 — thay cho ≤$12]. Kỳ vọng **$28–37**: **Supabase Pro $25 là bắt buộc từ ngày beta chạy** vì Free **không có backup hằng ngày**, trong khi sản phẩm hứa giữ thumbnail vĩnh viễn và ToS hứa giữ ảnh. Tiêu chí ≤$12 cũ sẽ **fail bằng thiết kế**. Đèn báo động: **>$60/tháng**
- [ ] Giờ vận hành của founder ≤**5 giờ/tuần** trong 2 tuần beta liên tiếp
- [ ] Ảnh nằm ở R2, không nằm ở Supabase Storage; mọi truy cập media đi qua một `StorageAdapter` (điều kiện của ADR-001 để di chuyển ≤1 pw nếu luật sư yêu cầu đặt tại VN)
- [ ] Kill gate của founder vẫn dán trên tường, chưa bị gỡ xuống

### 7.6. Cổng cuối — vượt qua thì mới gọi là MVP thành công

- [ ] **M1**: `group-D14(app) ≥ B` trên **≥12 sổ beta** (QĐ-25). `B` tính theo công thức chốt ở `07` §4 QĐ-26 (mẫu số **5 sổ nhánh A**, loại sổ số 0, roster đóng băng). ⚠️ **Với n=5, `B` chỉ nhận giá trị {0,20,40,60,80,100}% — bước nhảy 20 điểm.** Chỉ tuyên bố "đạt" khi biên ≥1 bậc của B, hoặc khi cả hai đều ≥60%
- [ ] **M2**: ≥1 sổ mở mới **không do founder tuyển** trong 28 ngày
- [ ] **H1 thật** (từ `card_opened`, không phải proxy Bước 0) ≥60%, hoặc 40–60% và **chỉ** ship Android web push, không thêm gì khác. ⚠️ Phương án dự phòng này **có thể không tồn tại**: `03` §9 B4 cho rằng Service Worker nhiều khả năng không đăng ký được trong webview Zalo. Buổi kiểm chứng 04/09 phải trả lời
- [ ] Không có sự cố an toàn nào phải xử lý quá 48h

---

## 8. BẤT ĐỒNG VỚI ĐỊNH NGHĨA SẢN PHẨM v2

Bốn điểm. Không điểm nào đòi đổi hướng; cả bốn đều là chỗ v2 **thiếu một con số hoặc mâu thuẫn với chính nó**.

**(1) Lịch 10 tuần của §4.10 chỉ đúng nếu founder làm 40 giờ/tuần — và điều đó mâu thuẫn với kill gate ">15 giờ/tuần" của §9.**
6,5 pw = 260 giờ. Ở 20 giờ/tuần và hiệu suất 0,65 thì ra **20 tuần lịch**, tức beta chạy 09/02/2027, **trễ trần cứng 15/12/2026 tám tuần**. Ở 15 giờ/tuần thì 26,7 tuần. Đề nghị: trước 23/09 founder ghi vào ADR đúng một con số — số giờ/tuần cam kết — rồi chọn (a) toàn thời gian 10 tuần, (b) cắt scope xuống **3,8 pw** và beta **5 sổ** thay vì 10, hay (c) dời trần sang 15/02/2027. **Khuyến nghị (b).** Trần lịch là hàng rào duy nhất chống scope creep; phá nó một lần là phá vĩnh viễn.

**(2) "Cửa sổ im lặng" của §10(f) hiểu theo nghĩa đen sẽ giết luôn phép đo.**
Nếu ngày 8/11/14 founder "không post gì" thì card không được dán, mà card **là** cơ chế phân phối của sản phẩm. Đo `q_c` trong điều kiện không có card là đo một sản phẩm khác. Đề nghị sửa thành: founder làm card như thường, **gửi riêng cho thành viên đang tới lượt trực** (đúng cơ chế xoay vòng US-14), và im lặng tuyệt đối trong nhóm. Người trực quên dán → **để nguyên**, và đó chính là phép đo điểm chết đơn ở §9 mục 9, thu được miễn phí.

**(3) Bước 0 một-giai-đoạn sẽ đo ra một con số dễ hơn sản phẩm.**
Dán ảnh thẳng vào nhóm Zalo **không có** bước bấm link — chính là bước ma sát cao nhất của sản phẩm thật. Đề nghị chia G1 (ngày 1–7, dán vào nhóm) và G2 (ngày 8–14, qua Google Form), lấy **Δ = q_c(G1) − q_c(G2)** làm "thuế của cái link". Chỉ `q_c(G2)` mới được đem so ngưỡng H2. Chi phí: 0đ, 0 pw, khoảng 40 phút chuẩn bị thêm.

**(4) v2 không nói ai đo H1 ở Bước 0 và bằng cách nào.** §11 đặt ngưỡng "≥60% mở card trong 24h" cho cả Bước 0 lẫn MVP, nhưng ở Bước 0 không có trang web để đo "mở". Ba proxy khả dĩ ở §5.7 đều có sai lệch đã biết. Đề nghị ghi rõ trong kết luận 22/09: **H1 ở Bước 0 chỉ đủ để DỪNG (nếu <40%), không đủ để ĐI TIẾP.** Ngưỡng ≥60% chỉ có hiệu lực sau khi US-23 chạy ở beta.

_Ngoài ra, một ghi chú không phải bất đồng: đề bài nói "hôm nay là 28/08/2026" trong khi v2 ghi ngày viết 03/09/2026 và toàn bộ lịch bắt đầu 03/09. Tài liệu này dùng lịch của v2 vì nó là tài liệu đã chốt. Nếu ngày thật là 28/08 thì founder có thêm 6 ngày đệm — dùng nó cho buổi kiểm chứng nền tảng ở §10(h) và cho việc chuẩn bị template Canva, đừng dùng để mở rộng phạm vi._

---

## 9. CÂU HỎI MỞ CẦN FOUNDER QUYẾT

Xếp theo hạn chót. Mỗi câu phải trả lời bằng một câu văn có số, ghi vào ADR.

| # | Câu hỏi | Hạn | Vì sao không hoãn được |
|---|---|---|---|
| 1 | **Bao nhiêu giờ/tuần cho dự án này, con số thật?** | **22/09/2026** | Toàn bộ §3.2 phụ thuộc câu này. Không có nó thì mọi lịch trong hồ sơ là hư cấu |
| 2 | Chọn (a) toàn thời gian 10 tuần / (b) cắt còn 3,8 pw + 5 sổ / (c) dời trần sang 15/02/2027? | 22/09/2026 | Chọn sau khi đã viết code là chọn muộn |
| 3 | **Danh tính: Supabase Anonymous Sign-in hay API route + service key?** | **23/09/2026** (trước dòng code đầu) | Chọn sai = viết lại lớp truy cập ở tuần 6, +3 pd |
| 4 | Nếu H2 đạt nhưng H3 **fail** (nhánh không-kèo thắng ≥10 điểm) — founder có thật sự bỏ kèo không? | 22/09/2026 | Trả lời câu này **trước** khi thấy dữ liệu. Trả lời sau là hợp lý hoá |
| 5 | Zalo có cảnh báo domain `.vn` lạ không? `chooseImage` có chạy đồng nhất trên 3 ROM không? OG 4:5 có bị crop không? | **04/09/2026**, buổi kiểm chứng nền tảng | Cả ba đều có thể làm sụp kênh phân phối; biết trước tốn 1 buổi, biết sau tốn 6,5 pw |
| 6 | Google Form file upload bắt đăng nhập Google — bao nhiêu % thành viên vướng? | Ngày 8 của Bước 0 | Nếu >30% vướng thì `q_c(G2)` đang đo Google, không đo sản phẩm |
| 7 | Zalo có cho xem **danh sách người đã xem** một tin nhắn nhóm không? | 04/09/2026 | Quyết định proxy H1 ở §5.7 |
| 8 | Luật sư trả lời gì cho **7 câu** đã hợp nhất ở `05` §11 (QĐ-14)? | Trước 23/09 nếu có thể; **câu 3 bắt buộc có trước 20/12/2026** (ngày T4 của `10`) | Câu 1b quyết định trần beta là 60 hay 600 sổ. Câu 3 quyết định toàn bộ §3–§7 của `10` có tồn tại không. Hai câu Điều 32 BLDS quyết định card (ảnh 4–8 người) và cả hai phương án monetization |
| 9 | Giá thật của `.vn` năm 2026 và thời gian chờ cấp? | 03/09/2026 | Giấy phép MXH đòi tên miền còn hiệu lực ≥6 tháng — đây là việc rẻ nhất mà tốn thời gian chờ nhất |
| 10 | Trần doanh thu tính lại bằng eCPM thật của tệp VN là bao nhiêu? | 06/09/2026 (3 giờ bàn giấy) | Con số 2,6 tỷ VND/năm tính trên IAP, trong khi Locket kiếm tiền bằng quảng cáo. Không được dùng con số cũ để ra quyết định chiến lược |
| 11 | Nếu ngày 3 của Bước 0 vẫn mất 20 phút/sổ, cắt nhánh A xuống 4 sổ hay giữ 5 và chấp nhận 15 giờ/tuần? | 10/09/2026 | Bước 0 chết vì kiệt sức ở tối thứ 9 là kịch bản thất bại có thật nhất |
| 12 | `B` (`group-D14` đo tay ở Bước 0) bằng bao nhiêu? | 22/09/2026, **không sớm hơn** | Đặt trước là tự ra đề dễ cho mình |
