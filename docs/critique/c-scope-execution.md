# C-SCOPE — PHẢN BIỆN: SCOPE & NĂNG LỰC THỰC THI

> Góc phản biện: **tính khả thi thực thi**. Không bàn ý tưởng hay/dở, chỉ hỏi một câu: *ai build, trong bao lâu, bằng tiền nào, và cái gì sẽ vỡ trước?*
> Ngày: 2026-08-28 · Nguồn gốc: `docs/00-source/doc-01-product-strategy.md` (2.407 từ) + 8 file research trong `docs/research/`.
> Quy ước: **[FACT]** có nguồn · **[INFERENCE]** suy luận từ số có nguồn · **[GUESS]** ước lượng kỹ thuật của tôi, không có nguồn.
> ⚠️ Ghi chú trung thực: session này đã hết hạn ngạch WebSearch trước khi tôi kịp tìm benchmark công khai về "thời gian build MVP social app". **KHÔNG TÌM ĐƯỢC SỐ LIỆU** bên ngoài cho phần ước lượng person-week — toàn bộ bảng ước lượng bên dưới là **[GUESS]** của tôi với giả định nêu rõ, không phải fact. Hãy đối chiếu với kinh nghiệm thật của bạn trước khi dùng để lập kế hoạch.

---

## 0. Kết luận trước, lập luận sau

DOC 1 tự nhận: *"MVP phải cực rõ, cực nhỏ, cực dễ hiểu"* (§10.1) và *"MVP chỉ làm social ritual lõi"* (§12.1). Nhưng đọc §11.2 (Free core) + §7 (flow 9 bước) + §12 (7 nhóm rủi ro, mỗi nhóm kèm cơ chế xử lý phải build), cái được gọi là MVP có **ít nhất 17 hệ thống độc lập**. Ước lượng của tôi: **~33 person-week kỹ thuật + ~8 person-week nội dung/thiết kế** — tức **8–12 tháng cho một người**, 5–7 tháng cho hai người.

Đối chiếu với đồng hồ đếm ngược mà chính research đã đo: social ritual app Gen Z có half-life **4–6 tháng sau đỉnh** ([Sensor Tower/BeReal](https://sensortower.com/blog/getting-real-about-bereal), Gas −98% trong 12 tháng — [42matters](https://42matters.com/blog/?p=gas-downloads-down-98-following-discord-acquisition)) **[FACT]**. Nghĩa là ở kế hoạch hiện tại, **thời gian build ≈ toàn bộ vòng đời dự kiến của sản phẩm**. Đó không phải rủi ro scope. Đó là lỗi số học.

---

## 1. Kiểm kê feature: "MVP cực nhỏ" thật ra là 17 hệ thống

DOC 1 không có mục "MVP scope" nên tôi trích từ §7 (flow lõi) + §11.2 (Free core) — hai chỗ founder mô tả cái phải có ngay:

| # | Hệ thống (trích trực tiếp từ DOC 1) | Trích ở đâu |
|---|---|---|
| 1 | Tạo/tham gia nhóm | §7.1 |
| 2 | Personal goal (kèo riêng) | §7.2, §11.2 |
| 3 | Nhóm duyệt luật chơi / proof rule | §7.3 |
| 4 | Nộp proof hằng ngày | §7.4, §11.2 |
| 5 | Reaction | §7.5, §11.2 |
| 6 | Pass / sus | §7.5 |
| 7 | Cà khịa (roast) | §7.5 |
| 8 | Boss chung (mất máu / hồi máu) | §7.6, §11.2 |
| 9 | Daily recap | §7.7, §11.2 |
| 10 | Weekly recap | §11.2 |
| 11 | Memory Capsule | §7.8, §11.2 |
| 12 | Group Timeline | §7.9, §11.2 |
| 13 | Highlight | §11.2 |
| 14 | Share card | §11.2 |
| 15 | Casual mode / Life Happens / Skip / Pause / private reason / Support Mode | §12.4 |
| 16 | Comeback Season | §12.4 |
| 17 | Context isolation đa nhóm (không cross-share, không lộ hoạt động nhóm khác) | §12.5 |

Chưa tính phần §11.3 (theme, boss skin, role pack, AI recap, AI memory search, smart album, export, gacha, custom roast tone, premium season, multi-group, multi-goal) và §11.5 (sponsor + anti-cheat + trust score + quota + audit) — founder đã tự xếp sang phase sau, tốt. Nhưng §12.5 "context isolation đa nhóm" thì **không** ở phase sau: nó nằm trong danh sách xử lý rủi ro, và nó buộc data model phải multi-group ngay từ commit đầu.

**Ước lượng công sức [GUESS].** Giả định: 1 dev full-stack có kinh nghiệm Expo + Supabase; 1 person-week = 40 giờ *nominal*; chưa nhân hệ số lịch.

| Hạng mục | pw | Vì sao đắt hơn nó trông |
|---|---|---|
| Setup Expo SDK 55 + EAS + env + crash reporting | 1,0 | |
| Auth Google/Apple + xoá tài khoản trong app | 1,5 | Thiếu nút xoá tài khoản là 1 trong 3 lý do reject App Store phổ biến nhất **[FACT — r06]** |
| Schema + RLS 6–8 bảng + test RLS | 1,5 | App private-first: một policy sai = rò ảnh riêng tư sang nhóm khác |
| Invite: link + deferred deep link + web landing + mã 6 ký tự + OG preview + whitelist domain Zalo | 2,0 | r04 xếp đây là nút thắt số 1 |
| Media pipeline: in-app camera, nén WebP 1440+thumb 320, strip EXIF, presigned PUT, R2 lifecycle, outbox offline, retry 3G | 2,5 | |
| Nộp proof ≤3 chạm, nhãn "phút 89", logical_date server-side | 1,5 | |
| Tạo kèo dạng if-then + 3 loại proof | 1,0 | |
| Màn nhóm: hôm nay ai nộp/chưa nộp, reaction, roast picker | 2,0 | |
| Reaction + roast template + throttle + gộp noti | 1,5 | |
| **Boss state machine** | 3,0 | §3 bên dưới |
| **Daily recap (cron theo timezone nhóm + render ảnh)** | 2,5 | §2 bên dưới |
| Weekly recap + season end + Memory Capsule | 2,0 | |
| Timeline + highlight | 1,5 | |
| Push infra: token, xin quyền, hướng dẫn tắt tối ưu pin theo hãng, cron 15', quiet hours, dedup | 2,0 | ROM Xiaomi/Oppo/Vivo giết background **[INFERENCE — r05]** |
| Trạng thái thành viên (Active/Casual/Spectator/Paused) + Life Happens + Skip | 1,5 | §4 bên dưới — cross-cutting |
| Context isolation đa nhóm | 1,0 | |
| Analytics cohort **cấp nhóm** + dashboard kill-criteria | 1,5 | |
| Safety plumbing: report/block, EULA, privacy policy song ngữ, age gate 16+, support URL, xoá dữ liệu thật ở R2 | 1,5 | Apple Guideline 1.2 bắt buộc đủ 4 thành phần **[FACT — r06]** |
| Store submission + age rating questionnaire + vòng reject | 1,0 | ~25% submission bị reject **[FACT — r06]** |
| QA trên máy Android tầm trung thật + mạng yếu | 1,5 | 60–85% user VN là Android **[FACT]** |
| **Tổng kỹ thuật** | **~33 pw** | |
| Nội dung/thiết kế: brand doodle, boss 1 con × 4 trạng thái, 200–300 câu roast, copy onboarding, share card, icon, ảnh store | **~8 pw** | Không phải việc của kỹ sư — §5 |

**Đổi ra lịch [GUESS]:** một người làm toàn thời gian hiếm khi đạt >65% thời gian cho code (còn support, pháp lý, marketing, họp, tuyển beta). 33 ÷ 0,65 ≈ **51 tuần lịch ≈ 12 tháng**. Hai người: **6–7 tháng**. Cộng đường găng pháp lý chạy song song: D-U-N-S 7–30 ngày làm việc + lập công ty TNHH **[FACT — r06]**.

**Kịch bản thất bại cụ thể:** founder khởi công 09/2026, nhắm cửa sổ ra mắt 01/01/2027 (New Year resolution — khuyến nghị của r02). Đến 01/2027 mới xong ~11 hệ thống; hoãn sang cửa sổ "đầu năm học" cuối 08/2027 — tức **11 tháng** sau. Trong 11 tháng đó, nhóm 5 người bạn dùng làm beta đã có 2 người đi làm ở tỉnh khác, và khung pháp lý VN đã thay đổi thêm ít nhất một lần (8 tháng qua đã có 4 văn bản mới: Luật 91/2025, ND 356/2025, Luật ANM 116/2025, ND 330/2026 **[FACT — r06]**).

---

## 2. Recap hằng ngày không phải một màn hình. Nó là một hệ phân tán.

DOC 1 §7.7 viết đúng một dòng: *"Cuối ngày có recap"*. Thực tế phải giải:

- **Cron theo timezone của nhóm** + cutoff 04:00 (khuyến nghị r05). Không thể chạy một cron 21:00 toàn cục.
- **Idempotency**: pg_cron chạy mỗi 15 phút, retry, deploy giữa chừng → nhóm nhận recap 2 lần là bug làm mất niềm tin ngay tuần đầu. Cần `unique(group_id, logical_date, kind)` **[FACT — r05 §3.3]**.
- **Proof đến muộn**: proof lúc 23:58 sau khi recap đã gửi lúc 21:00 → recap sai. Phải chọn: recap chốt sổ lúc mấy giờ, hay recap sửa được?
- **Thành viên lệch múi giờ**: Linh đi du học Nhật (UTC+9). Nhóm để mặc định Asia/Ho_Chi_Minh. Recap gửi 21:00 VN = 23:00 giờ Linh; deadline nộp 04:00 VN = 06:00 giờ Linh. Nếu Linh nộp 01:00 giờ Nhật (= 23:00 VN hôm trước) thì tính ngày nào? Đây là **quyết định sản phẩm**, không phải bug — và DOC 1 chưa đụng tới.
- **Render ảnh share card**: recap phải đẹp khi screenshot (r02 xác định screenshot-vào-Zalo là kênh phân phối thật). Render client-side thì phải làm view-shot + font + safe area cho 6 kích thước màn; render server-side thì phải chạy headless renderer — thêm một dịch vụ nữa.
- **Recap khi KHÔNG có gì xảy ra**: ngày 3, nhóm 5 người chỉ 1 người nộp. Recap vẫn phải vui. Đây là bài toán *copywriting tổ hợp*, không phải bài toán code: 6 mức số người nộp × 4 trạng thái thành viên × giai đoạn season → hàng trăm nhánh câu.

**Ước lượng lại: 2,5 pw kỹ thuật + phần copy nằm trong 8 pw nội dung.** Nếu founder nghĩ recap là "1 ngày làm màn hình tổng kết", sai số **~10 lần**.

---

## 3. Boss là game economy — và Teemi vĩnh viễn không đủ dữ liệu để cân bằng nó

Boss cần: state machine (HP, damage, season start/end, thành phần conjunctive mở combo khi cả nhóm nộp, đòn comeback ×2, tương tác với Life Happens/Pause, recompute idempotent khi proof đến muộn, cutoff timezone, chặn backfill). Ước **3 pw** chỉ riêng logic, chưa tính art/animation.

Nhưng vấn đề nghiêm trọng hơn là: **cân bằng boss cần dữ liệu mà app nhỏ không bao giờ có.**

Tính cụ thể **[INFERENCE — công thức chuẩn hai tỉ lệ, α=0,05 hai phía, power 80%]**:

- Muốn biết "boss hồi máu khi có người miss" tốt hơn hay tệ hơn "chỉ chậm damage", đo bằng Group D7 (giả định 40% vs 45%, tức chênh 5 điểm phần trăm):
  n = 7,849 × [0,40×0,60 + 0,45×0,55] ÷ 0,05² ≈ **1.531 nhóm mỗi nhánh** → **3.062 nhóm ≈ 15.300 người** cho **một** thử nghiệm.
- Với beta 30 nhóm (15 nhóm/nhánh), hiệu ứng tối thiểu phát hiện được là **δ ≈ 50 điểm phần trăm** — tức bạn chỉ "thấy" được thay đổi nào đẩy Group D7 từ 40% lên 90%. Mọi thứ nhỏ hơn thế là nhiễu.

Đối chiếu: Duolingo đã chạy **hơn 600 thử nghiệm chỉ riêng cho streak** **[FACT — [blog Duolingo](https://blog.duolingo.com/how-streaks-keep-duolingo-learners-committed-to-their-language-goals/)]**, và vẫn phải phân tích dữ liệu mới dám giới hạn Friend Streak ở 5 người **[FACT — [Duolingo product lessons](https://blog.duolingo.com/product-lessons-friend-streak/)]**. Teemi đang định làm cùng lúc **hai** loại thiết kế cần tinh chỉnh bằng dữ liệu — game design (cân bằng HP/damage/quy đổi giữa kèo khó dễ) và social design (kích thước nhóm, ngưỡng cà khịa, guilt tập thể) — với ngân sách dữ liệu bằng 0.

**Hệ quả hành động:** đừng thiết kế một nền kinh tế có tham số để tinh chỉnh. Thiết kế boss **không có tham số nào cần tinh chỉnh**: `HP = số ngày season × số thành viên Active`, `1 proof = 1 damage`, `miss = 0 damage` (không hồi máu). Boss trở thành **thanh tiến độ có mặt mũi** — vừa xoá bài toán cân bằng, vừa là đường lùi pháp lý khỏi rủi ro bị xếp loại game G1 **[FACT — r06/r08]**.

---

## 4. Loại feature đắt nhất trong DOC 1 lại được viết thành một gạch đầu dòng

§12.4 xử lý rủi ro toxic bằng: *"Casual mode; Life Happens; Skip; Pause; private reason; Support Mode; không roast goal nhạy cảm; Comeback Season"* — 8 cơ chế trong một dòng.

Đây là **cross-cutting features**: mỗi cái đụng vào boss, streak, recap, notification, quyền hiển thị. Ma trận test bùng nổ:
4 trạng thái thành viên × 3 trạng thái proof (nộp/muộn/miss) × 2 (trong/ngoài tuần nghỉ) × 2 (có/không dùng Life Happens) = **48 tổ hợp** cần đúng ở *cả* boss HP, *cả* recap copy, *cả* streak, *cả* push. Một nhóm 5 người có thể ở 4⁵ = 1.024 tổ hợp trạng thái.

**Kịch bản bug thật:** Nam bật Pause thứ Bảy. Cron recap 21:00 vẫn đếm Nam vào mẫu số → recap nói "2/5 nộp" thay vì "2/4". Boss tính damage trên 5 → tiến độ chậm hơn kỳ vọng. Cà khịa tự động bắn vào Nam đang ốm. Nam gỡ app. Nhóm còn 4, tuần sau còn 3, tuần sau nữa chết — đúng cơ chế cascade mà r03 mô tả (sucker effect). Một dòng gạch đầu dòng, một nhóm chết.

Ước lượng: **1,5–2,5 pw** để build + một khoản thuế QA vĩnh viễn cho mọi feature sau này.

---

## 5. "Vui" là thứ không spec được, không ai được phân công, và nó có treadmill

DOC 1 bán vibe: doodle/meme brand, giọng cà khịa, boss có personality, recap bựa nhẹ (§5, §12.2). Research xác nhận đây là **lý do chọn Expo thay Flutter** — để OTA update sửa 200 câu roast hằng tuần **[INFERENCE — r05 §1.6]**. Tức kiến trúc kỹ thuật đã được chọn dựa trên giả định **có người viết roast hằng tuần, mãi mãi**.

DOC 1 không có một chữ nào về ai làm việc đó. Từ khoá "tuyển", "ngân sách", "tháng" xuất hiện **0 lần** trong 2.407 từ (đã grep).

Số học của treadmill **[INFERENCE]**: nhóm 5 người, mỗi recap dùng ~5 câu, 30 recap/tháng → **150 câu/tháng/nhóm**. Phrase bank 250 câu bị một nhóm nhìn hết trong **~50 ngày**. Sau đó cà khịa thành lặp, và lặp thì hết vui — mà "vui" chính là toàn bộ điểm khác biệt so với Habitica.

Đây là khác biệt cấu trúc so với mọi tiền lệ thành công: **Locket, BeReal, Yope có content 100% do người dùng tạo nên không bao giờ cũ. Teemi có content do nhà phát hành cấp — nó cũ theo lịch.** Chi phí đó không xuất hiện ở đâu trong DOC 1.

Chi phí thật [GUESS — không tìm được bảng lương copywriter VN có nguồn trong session này]: một copywriter tiếng Việt giỏi giọng Gen Z làm bán thời gian, hoặc founder tự viết ~4–6 giờ/tuần vĩnh viễn. Neo tham chiếu duy nhất có nguồn: một video micro-KOC TikTok VN giá 612k–3,06tr VNĐ **[FACT — r02]** — nội dung có giọng ở VN không miễn phí.

---

## 6. Vòng research vừa rồi CỘNG scope, không TRỪ — và để lại 3 mâu thuẫn chưa ai xử

Research được sinh ra để thu hẹp phạm vi. Kết quả ngược lại: nó thêm **widget P0, season 28 ngày, comeback là cơ chế lõi, form if-then bắt buộc, roast consent 3 mức + danh sách chủ đề cấm, 4 trạng thái thành viên, pHash, in-app camera bắt buộc, analytics cấp nhóm, Tết Mode, age gate 16+, xoá tài khoản trong app, audit log 2 năm, OTP SMS**. Cộng thêm **~10–14 pw**. Không có một feature nào bị nghiên cứu đề nghị **bỏ**.

Tệ hơn, ba mâu thuẫn trực tiếp giữa các file research vẫn đang mở, và mỗi cái là một ngã ba kiến trúc:

| Mâu thuẫn | Bên A | Bên B | Chi phí nếu chọn sai |
|---|---|---|---|
| Widget | r04: **P0, không thương lượng** (Locket 9M DAU nhờ widget) | r05: **hoãn v1.1** (WidgetKit Swift-only, 1–2 tuần/platform) | 2–4 pw + rework |
| Máy chủ | r06: **đặt DB tại VN** (ND 330/2026 phạt tới 5% doanh thu; giấy phép MXH đòi máy chủ VN) | r05: **Supabase Singapore** ($55/tháng, latency ổn) | Migrate hạ tầng giữa chừng: 3–5 pw |
| Auth | r02+r06: **OTP số điện thoại bắt buộc** theo ND 147 | r05: **bỏ hẳn phone auth** (Twilio $0,2852/SMS đi VN) | ZNS + duyệt brandname hàng tuần–tháng, chặn ngày launch |

**Đây mới là rủi ro thực thi nguy hiểm nhất:** founder sẽ bắt đầu code trước khi chốt ba câu này, và sẽ build hai lần. Cả ba đều phải chốt **trước dòng code đầu tiên**, và câu "máy chủ ở đâu" phải chốt bằng **ý kiến luật sư bằng văn bản**, không phải bằng cảm giác.

---

## 7. DOC 1 không phải một bản kế hoạch — nó là một bản tuyên ngôn

Kiểm chứng bằng grep trên chính file (2.407 từ):

- Ký tự `%`: **0 lần**. Không có một mục tiêu định lượng nào.
- "tháng", "ngân sách", "metric", "chỉ số", "KPI", "deadline", "tuyển": **0 lần**.
- "retention": 2 lần, cả hai ở dạng tính từ ("Duo có retention tốt"), không kèm số.
- Không có tiêu chí thất bại. Không có ngày. Không có ai làm gì.
- Toàn bộ số trong file là số thứ tự mục hoặc số minh hoạ ví dụ ("15 phút", "5 trang", "phút 89").

Hệ quả không phải là "thiếu tài liệu". Hệ quả là: **không có gì trong DOC 1 có thể sai.** Một chiến lược không thể sai là một chiến lược không thể học. Sáu tháng nữa, khi Group D7 là 22%, sẽ không có dòng nào trong DOC 1 nói cho founder biết 22% là thắng hay thua — nên founder sẽ build thêm feature, đó là hành vi mặc định của người không có ngưỡng.

---

## 8. Bus factor = 1, và pháp lý nằm trên đường găng

DOC 1 không nêu team. Nếu đây là dự án một người: người đó phải cùng lúc là dev RN, dev backend, người thiết kế game economy, copywriter giọng Gen Z, người vẽ boss, người chạy beta 20–30 nhóm bằng tay (khuyến nghị r04), người làm TikTok organic, và người đi lập công ty TNHH + xin giấy xác nhận MXH. **[FACT — r06]** Ngưỡng phải xin giấy phép MXH chỉ là **1.000 người dùng thường xuyên/tháng ≈ 200 nhóm 5 người** — tức "thành công" và "vi phạm" xảy ra trong cùng một tuần nếu không chuẩn bị trước, và thủ tục mất hàng tháng.

Điều này có nghĩa: **pháp lý không phải rủi ro song song, nó là một task trên đường găng phải khởi động trước khi code**, cùng D-U-N-S (7–30 ngày làm việc).

---

## 9. ĐỀ XUẤT: MVP nhỏ hơn 3 lần — và một bước 0 không cần code

### Bước 0 — "Teemi bằng tay" trong chính Zalo group (2 tuần, 0 dòng code, ~0đ)

Giả thuyết lõi của DOC 1 §7 là: *"Một nhóm bạn có quay lại mỗi ngày để nộp proof, reaction, xem boss và đọc recap không?"* Câu này **không cần app để trả lời**.

Cách chạy:
- Tuyển **6 nhóm × 5 người = 30 người** (đúng tệp: 18–26, đã có group Zalo).
- Mỗi người chọn 1 kèo. Proof = gửi ảnh vào group Zalo như bình thường.
- Founder mỗi tối 21:00 post vào từng group **một ảnh recap làm bằng Canva**: thanh máu boss (vẽ tay), ai nộp / ai chưa, 1 câu cà khịa viết tay.
- Chi phí: ~20 phút/nhóm/tối × 6 nhóm × 14 ngày ≈ **28 giờ tổng**.

Đo đúng 3 số:
1. **Group D14** = % nhóm còn ≥3 người gửi proof ở ngày 14. Ngưỡng đi tiếp: **≥50%** (cao hơn ngưỡng app vì đang có founder bơm tay).
2. **Reaction/proof** — mục tiêu ≥3 (neo Strava ~3,5 kudos/hoạt động **[FACT — r04]**).
3. **Chỉ số quan trọng nhất: có ai tự nhắc nhau "nộp proof chưa" mà không cần founder không?** Nếu không có hành vi này trong 14 ngày với nhóm bạn thật + founder ngồi bơm — app sẽ không tạo ra nó. **Kill dự án tại đây, tiết kiệm 33 person-week.**

### Bước 1 — MVP thật: 5 màn hình, ~11,5 pw (≈3,5–4 tháng/1 người, 7–9 tuần/2 người)

| Màn | Nội dung | pw |
|---|---|---|
| — | Setup + auth Google/Apple + xoá tài khoản | 1,0 |
| — | Schema 5 bảng + RLS | 1,0 |
| 1 | Vào nhóm: link + mã 6 ký tự + landing web tối giản | 1,0 |
| 2 | Tạo kèo: 1 kèo/người, form if-then 3 trường | 0,5 |
| 3 | Camera → proof (≤3 chạm) + nén + R2 + outbox offline | 2,0 |
| 4 | Home: boss HP + hàng "hôm nay ai nộp" + lưới ảnh 30 ngày | 1,5 |
| 5 | Recap 21:00 (một timezone duy nhất: Asia/Ho_Chi_Minh) + share card | 1,5 |
| — | Reaction 5 emoji + 40 câu roast template + throttle | 1,0 |
| — | Push: 1 nhắc + 1 recap + onboarding tắt tối ưu pin | 0,5 |
| — | Analytics cấp nhóm + dashboard kill-criteria | 0,5 |
| — | QA Android tầm trung + submit store | 1,0 |
| | **Tổng** | **11,5** |

**Cắt thẳng (không phải "để sau", mà là không nói tới trong pitch):** weekly recap, Memory Capsule (giữ lại lưới ảnh 30 ngày làm phiên bản 0,5 pw của timeline — đủ tạo switching cost, không cần sản phẩm ký ức hoàn chỉnh), highlight, role nhóm, Quick Challenge, gacha, AI, theme/skin, trust score, sponsor, đa nhóm (**1 người = 1 nhóm ở MVP**, xoá luôn context isolation), đa kèo, Support Mode, Casual/Spectator (chỉ giữ **"Life Happens: 2 lượt nghỉ/season"**), widget (v1.1), video, vote sus (chỉ pass ngầm định + reaction).

**Ràng buộc thiết kế biến cả game design lẫn social design thành hằng số — để không phải tinh chỉnh cái không tinh chỉnh được:**
- Season **cứng 14 ngày**, HP = 14 × số thành viên. 1 proof = 1 damage. Miss = 0 damage, **boss không hồi máu**.
- Nhóm **cứng tối đa 5 người**.
- Không xếp hạng, không role gắn nhãn bản sắc, roast chỉ từ template.
- Multi-timezone: chưa hỗ trợ. Nhóm ở VN. Ghi thẳng trong onboarding.

**Ngân sách scope làm luật:** MVP có trần cứng **12 pw**. Sau khi chốt, mọi feature mới phải **đánh đổi 1-1** với một feature đang có trong danh sách — không có "thêm nhanh thôi".

### Kill criteria (viết trước, dán lên tường, kèm ngày)

| Mốc | Chỉ số | Ngưỡng dừng |
|---|---|---|
| Kết Bước 0 (D14) | % nhóm còn ≥3 người nộp proof | < 50% → dừng, không viết code |
| Beta 30 nhóm, D7 | Group D7 (nhóm còn ≥2 người nộp) | < 30% → quay lại vấn đề, cấm thêm feature **[neo: Yope D7=40% — FACT r04]** |
| Beta, D14 | Reaction trung bình/proof | < 2 → nhóm chưa đủ ấm |
| Beta, D30 | % nhóm còn ≥3 người Active | < 25% → dừng |
| Tháng 5 sau launch | DAU so với đỉnh | mất > 50% → không đổ thêm tiền vào feature **[neo: đường cong BeReal — FACT r01]** |

---

## 10. Câu cuối

DOC 1 kết bằng: *"Build một social ritual trước, không build một feature platform."* Đó là câu đúng. Nhưng chính DOC 1 mô tả một feature platform 17 hệ thống và gọi nó là ritual. Khoảng cách giữa câu khẩu hiệu và bảng feature — chứ không phải đối thủ, không phải Locket, không phải Nghị định 147 — là thứ nhiều khả năng giết Teemi nhất.

Phép thử trung thực: **nếu giả thuyết lõi đúng, nó phải hiện ra trong 14 ngày với 6 nhóm bạn và một cái ảnh Canva.** Nếu nó không hiện ra ở đó, 33 person-week sẽ không làm nó hiện ra.
