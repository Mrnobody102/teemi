# HƯỚNG D — SỐNG TRONG CHAT: KHÔNG BẮT CÀI APP TRƯỚC

_Thiết kế sản phẩm v2 cho Teemi. Ngày viết: 03/09/2026. Người viết: product designer được giao riêng hướng D._

> **Phạm vi:** tài liệu này chỉ thiết kế hướng D. Không so sánh, không đề xuất kết hợp với hướng khác. Mục 7 và 8 là phần trung thực về chỗ hướng này thua.

---

## 0. KIỂM CHỨNG NỀN TẢNG TRƯỚC — VÌ CẢ HƯỚNG NÀY ĐỨNG HAY SẬP Ở ĐÂY

Trước khi thiết kế một dòng nào, phải trả lời: **nền tảng chat ở VN còn mở tới đâu?** Tôi đã fetch tài liệu gốc trong ngày 03/09/2026.

| Bề mặt | Trạng thái thật | Nguồn |
|---|---|---|
| **Zalo Bot vào được nhóm chat** | **CÓ — nhưng tài liệu chính thức ghi rõ tính năng đang ở "giai đoạn thử nghiệm nội bộ, chưa phát hành chính thức"**. Bot vào nhóm bằng link từ Zalo Bot Creator, trưởng nhóm bấm xác nhận. Bot chỉ nhận được event khi user **reply tin của bot** hoặc **@mention bot** — không đọc được toàn bộ tin nhóm. Group id nằm ở `chat.id` trong webhook. | [docs.zaloplatforms.com — Bot tương tác với Nhóm Chat](https://docs.zaloplatforms.com/docs/BOT/best-practices/build-bot-interaction-with-group) [FACT, fetch 03/09/2026] |
| **Zalo Bot — giá và hạn mức** | Gói **Basic miễn phí: tối đa 3 bot, 50 người dùng/bot, 3.000 tin/tháng**. Gói **Pro 129.000đ/tháng** (chi tiết hạn mức chưa công bố). Cá nhân đăng ký được, không bắt buộc doanh nghiệp. | [bot.zaloplatforms.com](https://bot.zaloplatforms.com/) [FACT, fetch 03/09/2026] |
| **Zalo Bot API — bề mặt kỹ thuật** | Hình dạng gần giống Telegram Bot API: `sendMessage`, `sendPhoto`, `sendSticker`, `editMessageText`, `deleteMessage`, `pinMessage`, `setChatKeyboard`, `banChatMember`, `promoteChatAdmin`, `setWebhook` / long-polling (hai cái loại trừ nhau). Text tối đa 2.000 ký tự. | [zalo-bot-js SDK README](https://github.com/KaiyoDev/zalo-bot-js) + [OpenClaw Zalo channel](https://docs.openclaw.ai/channels/zalo) [FACT] |
| **Zalo Mini App — có group context không?** | **KHÔNG.** Danh mục API gồm `getUserInfo`, `getUserID`, `getPhoneNumber`, `chooseImage`, `createCameraContext`, `openShareSheet`, `openChat`, `followOA`, `openProfile`, Storage, Routing, Payment. **Không có API nào trả về group id / danh sách thành viên khi mini app được mở từ một nhóm chat.** | [docs.zaloplatforms.com — Mini App API](https://docs.zaloplatforms.com/docs/MA/api/intro) [FACT, fetch 03/09/2026] |
| **Zalo Mini App — ai đăng ký được** | Cá nhân đăng ký được: xác thực tự động bằng tài khoản Zalo cá nhân **đã eKYC**. Doanh nghiệp thì qua OA doanh nghiệp hoặc hồ sơ GPKD. Duyệt hồ sơ **3–5 ngày làm việc**. Mini App bắt buộc gắn với một OA. | [miniapp.vn — khởi tạo & xác thực 2026](https://miniapp.vn/huong-dan-khoi-tao-va-xac-thuc-tren-zalo-mini-app-nam-2026/), [pandaloyalty.com](https://pandaloyalty.com/huong-dan-khoi-tao-va-xac-thuc-tren-zalo-mini-app/) [FACT] |
| **Zalo OA — gửi tin chủ động** | Chỉ được gửi chủ động **trong 7 ngày kể từ tương tác cuối**. Broadcast: OA thường **20 tin/tháng**, OA xác thực **40 tin/tháng**, người quan tâm nhận tối đa 1–4 tin/tháng. Ngoài cửa sổ 7 ngày phải dùng **ZNS trả phí**, template phải được Zalo duyệt 1–3 ngày. Giá ZNS xác thực ~**300đ/tin**. | [oa.zalo.me — tổng quan các loại tin](https://oa.zalo.me/home/documents/guides/tong-quan-cac-loai-tin-nhan-tren-zalo-official-account-_3651713298729094511), [bảng giá ZNS](https://www.smsthuonghieu.com/gia-zns/) (r05) [FACT] |
| **Messenger bot trong group chat** | **ĐÓNG.** Group bot của Messenger ra 2017 rồi bị gỡ; Groups API bị Meta khai tử ~04/2024 (gỡ quyền đọc/đăng bài nhóm cho bên thứ ba). Chức năng "Message Any Member & Group Chat Bot" **chỉ còn ở Workplace** (sản phẩm doanh nghiệp). Không có lộ trình mở lại. Tháng 04/2026 Meta còn gỡ tiếp 3 message tag. | [Meta — Workplace Group and Chat Bots](https://developers.facebook.com/docs/workplace/bots/), [Facebook Groups API discontinued](https://multiplegroupposter.com/blog/facebook-groups-api-discontinued/), [Messenger Platform Changelog](https://developers.facebook.com/docs/messenger-platform/changelog/) [FACT] |
| **PWA / web push trên iOS** | Web push chạy từ iOS 16.4 (03/2023) **nhưng bắt buộc user tự "Thêm vào Màn hình chính"**; push **không hoạt động trong tab Safari**. iOS 26 mặc định mọi site thêm vào Home Screen chạy dạng web app, nhưng **bước cài vẫn bắt buộc**. Android/Chrome thì push web chạy không cần cài. | [MagicBell — PWA iOS Limitations 2026](https://www.magicbell.com/blog/pwa-ios-limitations-safari-support-complete-guide), [Pushpad](https://pushpad.xyz/blog/ios-special-requirements-for-web-push-notifications) [FACT] |

### Phán quyết nền tảng — nói thẳng

**Ba câu, không vòng vo:**

1. **Messenger đã đóng hoàn toàn.** Bất kỳ thiết kế nào dựa vào bot trong group Messenger là ảo tưởng. Loại bỏ khỏi kế hoạch, vĩnh viễn.
2. **Zalo Bot trong nhóm là thật, đã có tài liệu, đã có SDK cộng đồng — nhưng chính Zalo ghi "thử nghiệm nội bộ, chưa phát hành chính thức", và gói free chỉ 50 người/bot.** Một founder bus-factor-1 **không được phép đặt đường găng lên một API beta của một công ty khác**. Bot là *gia tốc*, không phải *nền móng*.
3. **Zalo Mini App không biết nó đang ở trong nhóm nào.** Đây là phát hiện quan trọng nhất của mục này và nó phá tan phiên bản lãng mạn của hướng D ("app tự chạy nghi thức trong group chat"). Mini App chỉ là một web app chạy trong Zalo, có `getUserID` miễn phí và `openShareSheet`. Không hơn.

**Vậy hướng D còn lại gì?** Còn lại đúng một thứ, và nó vẫn đủ mạnh:

> **Nghi thức chạy trong nhóm Zalo bằng một CARD ẢNH do chính con người dán vào, và một trang web mở-là-dùng đứng phía sau card đó.**

Không bot bắt buộc. Không cài app. Không push của riêng mình. **Kênh thông báo là chính Zalo, và người bấm nút gửi là một thành viên trong nhóm.** Đây không phải phương án B đáng thất vọng — mục 6 sẽ cho thấy nó gỡ được đúng những phản biện nặng nhất.

Vì cả sản phẩm xoay quanh hành động "chốt sổ", tên làm việc của hướng này là **CHỐT SỔ** (`chotso.vn`). Tên "Teemi" bị bỏ theo phản biện #23 (App Store trả về Temu) — và "Chốt Sổ" là **đúng chữ người dùng đã nói sẵn**, không phải chữ founder nghĩ ra.

---

## 1. CÂU ĐỊNH VỊ — BẰNG NGÔN NGỮ NGƯỜI DÙNG

> **"Không cài gì hết. Mở link trong nhóm Zalo là thấy tối nay đứa nào làm, đứa nào chưa."**

Câu người dùng nói lại với bạn mình khi dán link:

> _"Tối nào tao cũng chốt sổ. Mày bấm vô nộp cái ảnh đi, 10 giây thôi, không phải tải app."_

Ba chữ phải có trong mọi câu bán: **không cài** · **trong nhóm Zalo** · **đứa nào chưa**. Ba chữ **cấm** xuất hiện: "boss", "nhiệm vụ", "gamification". (Xem mục 5 và mục 6 về lý do pháp lý của lệnh cấm chữ "boss".)

---

## 2. CORE LOOP — 5 BƯỚC, KÈM SỐ GIÂY

Đơn vị thời gian đo bằng giây, cho **một thành viên bình thường trong một ngày**.

| # | Bước | Xảy ra ở đâu | Giây của user | Ghi chú thiết kế |
|---|---|---|---|---|
| 1 | **Chốt sổ 21:00** — một người bấm nút "Chốt sổ", hệ thống render card ảnh 4:5 (chuỗi nhóm, X/A đã nộp, 4 ảnh proof nhỏ), người đó dán vào nhóm Zalo | Web → Zalo group | **5 giây** (1 chạm "Chia sẻ" + 1 chạm chọn nhóm) | Người bấm là ai cũng được. Ai bấm đầu tiên thì tên người đó lên card: _"Minh chốt sổ tối nay"_ — biến việc dán thành một vai trò có danh, không phải việc vặt |
| 2 | **Thấy noti Zalo, chạm card** → mở bảng trong webview Zalo | Zalo group | **3 giây** | Đây là chỗ hướng D ăn tiền: noti do **Zalo** đẩy, không phải mình. 100% tới máy, không bị ROM Xiaomi/Oppo/Vivo giết |
| 3 | **Nộp proof** — chọn ảnh có sẵn trong máy hoặc chụp mới, gửi | Web (in-app browser) | **18 giây** | Mặc định mở thẳng thư viện ảnh, **không** ép chụp trực tiếp (BeReal ép và vẫn chỉ đạt 55% trong cửa sổ 2 phút — nghiêm khắc sớm là rủi ro #1 theo r07) |
| 4 | **Cà khịa** — thả sticker/rep tin ngay trên card trong nhóm Zalo | Zalo group | **10 giây** | **0 person-week để build.** Toàn bộ reaction, roast, meme, voice — dùng đồ có sẵn của Zalo, hay hơn mọi template mình viết được |
| 5 | **Bảng cập nhật** — chuỗi nhóm +1 nếu hôm nay ≥2 người nộp | Web | **2 giây** | Một con số duy nhất trên đầu màn: **chuỗi ngày của nhóm** |

**Tổng: ~38 giây/người/ngày.** Trong đó chỉ **23 giây** nằm trong sản phẩm của mình (bước 1, 3, 5); 15 giây còn lại nằm trong Zalo — và đó là **chủ ý**, không phải thất bại.

Phản biện #7 nói: _"Nghĩa vụ ở lại trong Teemi; phần thưởng rò rỉ ngược về Zalo. Đó là định nghĩa của một app bị gỡ."_ Hướng D trả lời bằng cách **không có app để gỡ**. Nghĩa vụ 23 giây, phần thưởng ở Zalo — nhưng vì không tốn slot màn hình chính, không tốn dung lượng, không tốn một lần cài, thì tỉ số nghĩa vụ/phần thưởng không cần phải thắng. Nó chỉ cần không âm.

---

## 3. MÀN HÌNH Ở MVP — 7 MÀN

Tất cả là web (Next.js), mở được từ link, chạy trong webview Zalo lẫn browser thường.

| # | Màn | Nội dung | Vì sao phải có |
|---|---|---|---|
| 1 | **Bảng hôm nay** (home, cũng là trang public của link mời) | Chuỗi nhóm · X/A hôm nay · lưới avatar + ảnh proof · nút "Nộp" · nút "Chốt sổ" | Đây là sản phẩm. Người chưa vào nhóm mở link cũng thấy được (blur ảnh, hiện đủ tên + trạng thái) → chính là "web preview chơi được" mà phản biện #5 đề xuất |
| 2 | **Nộp proof** | Chọn ảnh / chụp · 1 dòng caption ≤40 ký tự · nút Gửi | Nén client-side trước khi upload (mục 4.4) |
| 3 | **Tạo nhóm / Vào nhóm** | Tên nhóm · mã 6 ký tự · link mời | Mã gõ tay là phương án dự phòng bắt buộc, vì Zalo có thể cảnh báo domain lạ (r04) |
| 4 | **Chọn kèo** | 8 preset 1 chạm + ô tự viết ≤30 ký tự | Preset để bước này rơi từ ~60 giây xuống ~5 giây (theo hướng xử lý của phản biện #4). Kèo lưu dạng **free text**, không taxonomy sức khoẻ — lý do pháp lý ở mục 6 |
| 5 | **Card chốt sổ** | Preview ảnh 4:5 · nút "Chia sẻ vào Zalo" · nút "Lưu ảnh" | Nút "Lưu ảnh" là bắt buộc: Gen Z VN screenshot-rồi-paste là kỹ thuật biểu đạt chính (r02) |
| 6 | **Lịch sử nhóm** | Lưới 7 ngày × A người, chạm để xem ảnh | Bản mầm của Timeline. Rẻ, và là thứ duy nhất chống novelty decay (r04) |
| 7 | **Của tôi** | Kèo hiện tại · chuỗi cá nhân · Tạm nghỉ (Life Happens) · Rời nhóm · **Xoá dữ liệu của tôi** | "Xoá dữ liệu" không phải feature, là nghĩa vụ theo Luật 91/2025 |

**KHÔNG có màn Reaction. KHÔNG có màn Chat. KHÔNG có màn Boss. KHÔNG có màn Đăng nhập.**

Màn đăng nhập biến mất bằng hai đường: trong Zalo Mini App dùng `getUserID` (miễn phí, ổn định theo OA); ngoài Zalo dùng device token trong `localStorage` + link khôi phục. **Không SMS OTP ở MVP** — điều này một mình xoá khoản chi $0,2852/SMS mà phản biện [tech] gọi là "khoản chi bất ngờ lớn nhất của dự án".

---

## 4. CƠ CHẾ — BẢNG SỐ

### 4.1. Không có boss. Có ba con số.

| Con số | Định nghĩa | Tính chất |
|---|---|---|
| `q` | tỉ lệ một thành viên Active nộp proof trong ngày | biến đo, không phải biến thiết kế |
| **Chuỗi nhóm** | số ngày liên tiếp mà **≥2 người** trong nhóm nộp proof | **đơn điệu tăng hoặc reset về 0**, không bao giờ trừ dần |
| **Điểm tuần** | tổng số proof của cả nhóm trong 7 ngày | **đơn điệu tăng, không bao giờ giảm** |

Ngưỡng giữ chuỗi là **k = 2 với mọi nhóm ≥3 người** (k = 1 nếu nhóm chỉ có 2 người). Đây là bản đơn giản hoá có chủ đích của `ceil(0,6 × Active)`: nó **đơn điệu theo A** (nhóm càng đông càng dễ giữ chuỗi), trong khi công thức 0,6×A bị gãy ở A=4 (ceil(2,4)=3 khó hơn cả A=5 cần 3) — một lỗi nhỏ nhưng sẽ làm nhóm 4 người ức chế vô lý.

### 4.2. Bảng xác suất giữ chuỗi mỗi ngày — P(X ≥ 2), X ~ Bin(A, q)

| q ↓ / A → | A=2 (k=1) | A=3 | A=4 | A=5 | A=6 |
|---|---|---|---|---|---|
| 0,35 | 57,8% | 28,2% | 43,7% | 57,2% | 68,1% |
| 0,40 | 64,0% | 35,2% | 52,5% | 66,3% | 76,7% |
| **0,45** | **69,8%** | **42,5%** | **60,9%** | **74,4%** | **83,6%** |
| 0,50 | 75,0% | 50,0% | 68,8% | 81,3% | 89,1% |
| 0,55 | 79,8% | 57,5% | 75,9% | 86,9% | 93,0% |
| 0,60 | 84,0% | 64,8% | 82,1% | 91,3% | 95,9% |

_(Tính bằng số học nhị thức, không phải ước lượng.)_

**Đọc bảng:** ở `q = 0,45` — ước lượng trung tâm của digest — nhóm 5 người giữ được chuỗi **74,4% số ngày**, tức trung bình đứt 1 lần mỗi 3,9 ngày. Đó vẫn là quá nhiều. Nên:

### 4.3. Hai van an toàn cho chuỗi (bắt buộc ở MVP)

| Van | Quy tắc | Số |
|---|---|---|
| **Ngày nghỉ** | Mỗi nhóm được **2 "ngày nghỉ" trong mỗi 7 ngày**: hai ngày hụt đầu tiên trong tuần không làm đứt chuỗi, chỉ hiện icon xám | xem bảng ngay dưới |
| **Tết Mode** | 25 tháng Chạp → mùng 5 Tết: chuỗi **đóng băng**, không đứt, không đếm | Trả lời trực tiếp red flag [vn-market] "RỦI RO TẾT" |

**Bảng hiệu lực của "ngày nghỉ"** — nhóm A=5, q=0,45, P(ngày tính) = 0,744 → P(ngày hụt) = 0,256. Xác suất **chuỗi sống trọn 7 ngày**:

| Số ngày nghỉ/tuần | P(chuỗi sống hết tuần) | Bội số |
|---|---|---|
| 0 (không có van) | **12,6%** | 1,0× |
| 1 | **43,0%** | 3,4× |
| **2 (chọn)** | **74,3%** | **5,9×** |
| 3 | 92,4% | 7,3× |

_(Bin(7; 0,256), P(X ≤ k). Số học.)_

`0,744⁷ = 12,6%` là con số phải dán lên tường: **không có van an toàn, 87% số nhóm mất chuỗi ngay trong tuần đầu tiên.** Chọn 2 ngày nghỉ vì đó là điểm mà đường cong bắt đầu bão hoà — lên 3 chỉ thêm 18 điểm phần trăm nhưng làm chuỗi mất hết ý nghĩa. Đây là lý do định lượng, không phải lòng tốt.

### 4.4. Bảng "ngày full" — phần thưởng hiếm, luôn nói dạng khẳng định

| A | P(cả nhóm nộp) ở q=0,45 | Tần suất |
|---|---|---|
| 2 | 20,3% | 1 lần / 4,9 ngày |
| 3 | 9,1% | 1 lần / 11 ngày |
| 4 | 4,1% | 1 lần / 24 ngày |
| 5 | 1,85% | 1 lần / 54 ngày |

Ngày full → card đổi màu vàng + dòng chữ **"Hôm nay đủ mâm."** Hiếm là đúng ý đồ (variable-ratio). **Tuyệt đối không có màn hình nào nói "hụt vì thiếu Nam"** — quy tắc bất di bất dịch: card chỉ hiển thị **ai đã nộp**, người chưa nộp là **ô trống không tên**. Đây là hàng rào cứng chống phản biện #18 (đổ lỗi công khai có tên người).

### 4.5. Kinh tế media (bảng số, vì đây là chỗ dễ chết nhất về chi phí)

| Tham số | Giá trị | Nguồn |
|---|---|---|
| Nén client-side | cạnh dài 1080px, JPEG q=0,72 → **~110 KB/ảnh** | [ước lượng, browser-image-compression] |
| TTL ảnh gốc | **72 giờ**, sau đó chỉ giữ **thumbnail 320px ~18 KB** | quyết định thiết kế |
| Dung lượng/nhóm 5 người/năm | 5 × 365 × 18 KB + đệm ≈ **36 MB** (so với ~550 MB/nhóm/năm nếu giữ ảnh gốc — con số của red flag [integrity]) | số học |
| 10.000 nhóm/năm | **~360 GB** thay vì 5,5 TB | số học |
| Lưu trữ R2 | $0,015/GB/tháng · egress $0 | r05 |
| Chi phí lưu trữ ở 10.000 nhóm | **~$5,4/tháng** | số học |

**Giảm 15 lần dung lượng bằng một dòng TTL.** Và nó đồng thời là lá chắn pháp lý (mục 6).

---

## 5. CẮT GÌ SO VỚI DOC 1 — VÀ TẠI SAO CẮT ĐƯỢC

| Bị cắt | Lý do cắt được |
|---|---|
| **Boss chung + HP + damage** | (a) Phản biện #1 [FATAL] chứng minh hàm hồi máu sai về toán. (b) Điều nguy hiểm hơn: "nhiều người chơi tương tác đồng thời qua máy chủ" là **mô tả nguyên văn G1** trong ND 147/2024 (r06 §3). Bỏ boss cắt đồng thời một lỗi toán và một rủi ro giấy phép game. (c) Chuỗi nhóm giữ nguyên chức năng tâm lý (mục tiêu chung, đơn điệu) mà không mang theo cả hai rủi ro |
| **Reaction / cà khịa trong app** | Zalo có sticker, voice, meme, quote, gọi video. Template roast do mình viết **luôn thua**. Cắt đi tiết kiệm ~1,5 person-week **và** né Apple Guideline 1.1.1/1.2 (r06 §6) |
| **Nhãn "Báo Thủ", ranking, vote "proof hơi sus", Trust Score** | Đây là 4 điểm rủi ro shame cao nhất trong toàn product (red flag [behavior], [integrity]). Cắt sạch. Không có bảng xếp hạng ở MVP |
| **App native, widget, push riêng, EAS Update** | Không có app thì không có $1.326/tháng EAS ở 100k MAU, không có vòng review store, không có 30% phí IAP. Đổi lại mất widget — mục 8 tính giá của mất mát này |
| **SMS OTP** | `getUserID` của Zalo Mini App + device token. Xoá $0,2852/SMS và xoá cả việc đăng ký brandname SMS theo ND 91/2020 (thủ tục hàng tuần–tháng) |
| **Memory Capsule, AI recap, gacha, sponsor, premium, Buddy Match, public feed** | Đều là phase-2 theo chính DOC 1 §12.1. Ở hướng D chúng bị hoãn cứng, không có ngoại lệ |
| **Realtime (websocket)** | Polling 15 giây khi tab đang mở. $207/tháng ở 100k DAU cho thứ user không nhận ra (red flag [tech]) |
| **Yêu cầu ≥3 người mới bắt đầu** | Nhóm 2 người chạy đủ: bảng, proof, chuỗi (k=1), card. Xoá số hạng `0,735⁴` khỏi funnel |
| **Timeline dài hạn** | Còn lại 7 ngày + lưới 30 ngày. Không có "memory capsule". Ảnh gốc chết sau 72h |

**Giữ nguyên đúng một thứ của DOC 1, và đây là thứ đúng nhất trong đó:** _mỗi người một kèo khác nhau_. Phán quyết chiến lược đã xác nhận 0/16 app khảo sát giải được khoảng trống này. Hướng D giữ trọn nó, chỉ vứt cái vỏ game bọc quanh.

---

## 6. HƯỚNG NÀY GIẢI QUYẾT PHẢN BIỆN NÀO

Trích tên phản biện từ digest, kèm cơ chế giải.

| Phản biện | Cách hướng D giải |
|---|---|
| **#1 [FATAL] "Khoảnh khắc cả nhóm nộp đủ xảy ra 1 lần/98 ngày — và boss hồi máu mỗi ngày không nghỉ"** | Bỏ boss hoàn toàn. Ngưỡng ngày-tính hạ xuống **k=2**, cho 74,4% ngày ở A=5, q=0,45 (bảng 4.2) thay vì 1,85%. Không có hàm hồi máu để sai |
| **#5 "Cold start: 29 lượt cài organic mới ra 1 nhóm sống"** | Xoá bước "cài thật 30%" khỏi funnel. Xem bảng funnel ở mục 9: 3,2% → **14,2%/người bạn**, P(nhóm hình thành từ 6 lời mời) từ 3,4% lên **20,5%** |
| **#7 "Zalo group hút mất phần thưởng, Teemi giữ lại toàn bộ nghĩa vụ"** | Không tách hai thứ ra nữa. Nghĩa vụ 23 giây trong web, phần thưởng ở đúng chỗ nó vốn xảy ra. Không có app để bị gỡ ở đợt dọn máy |
| **#9 "MVP cực nhỏ thực chất là 17 hệ thống ≈ 33 person-week"** | Còn **6,5 person-week** cho bản test được (bảng mục 10). Cắt 8 hệ thống, chuyển 3 hệ thống sang Zalo |
| **#4 "Thứ giữ chân là ĐƯỢC NHÌN THẤY NHAU, và boss chính là thuế đánh lên nó"** | Hướng D nộp đúng luận điểm này: bỏ thuế, giữ việc-được-nhìn-thấy, và đặt nó ở nơi nhóm đã nhìn thấy nhau sẵn |
| **red flag [tech] "PUSH BỊ CHẶN BỞI ROM ANDROID VN"** (>85% user Android, Xiaomi/Oppo/Vivo kill background) | Không dùng push của mình. Dùng **noti của Zalo** — app duy nhất mà 100% ROM Việt whitelist sẵn. Đây là lợi thế cấu trúc, không phải mẹo |
| **red flag [tech] "PHONE OTP GIẾT NGÂN SÁCH" ($0,2852/SMS)** | Không có OTP ở MVP |
| **red flag [tech] "EAS UPDATE $1.326/THÁNG" + "SUPABASE EGRESS $0,09/GB"** | Không có app → không EAS. Ảnh trên R2 egress $0, TTL 72h → ~$5,4/tháng ở 10.000 nhóm (bảng 4.5) |
| **red flag [tech] "SPAM NOTI REACTION"** (30 reaction/tối = 30 push = uninstall) | Không có push của mình để spam. Reaction là tin nhắn Zalo, người dùng đã có sẵn công cụ tắt |
| **red flag [legal] "BOSS CHUNG CÓ THỂ BỊ XẾP LÀ TRÒ CHƠI ĐIỆN TỬ G1"** | Bỏ boss, bỏ HP, bỏ damage, bỏ vật phẩm ảo. Còn lại một bảng đếm và một chuỗi ngày — rất khó lập luận là trò chơi điện tử |
| **red flag [legal] "MẤT MIỄN TRỪ STARTUP 5 NĂM DO THIẾT KẾ SẢN PHẨM"** | Bốn quyết định rẻ tiền được đưa vào MVP: kèo lưu **free-text không taxonomy sức khoẻ**; **strip EXIF** khi upload; **không nhận diện khuôn mặt** dưới bất kỳ hình thức nào; **ảnh gốc TTL 72h**. Giữ được Điều 38 khoản 2 |
| **red flag [legal] "CÀ KHỊA/ROAST NHẮM VÀO CÁ NHÂN CÓ THẬT" chạm Apple 1.1.1/1.2** | Không submit App Store ở MVP, và nội dung roast không nằm trong hệ thống của mình |
| **#23 "Gõ teemi ở App Store ra Temu"** | Đổi tên sang **Chốt Sổ**. Không lên store thì tên cũng không cần chiến thắng thuật toán tìm kiếm của store |
| **#24 "SÁU câu định vị = không có câu nào"** | Đúng một câu, ở mục 1, bằng chữ người dùng |
| **red flag [vn-market] "App fatigue: 27 app/tuần, slot app xã hội thứ 4 cực khan hiếm"** | Không xin slot nào |
| **red flag [retention] "Đo retention theo user sẽ che giấu việc nhóm đang chết"** | Đơn vị analytics là nhóm ngay từ dòng code đầu (mục 12) |

---

## 7. PHẢN BIỆN HƯỚNG NÀY **KHÔNG** GIẢI QUYẾT ĐƯỢC

Trung thực. Không giảm nhẹ.

1. **#6 "Xác suất nhóm 5 người sống 30 ngày ≈ 12,5%".** Hướng D làm cửa vào rẻ hơn, **không** làm nhóm bạn bền hơn. ~40% nhóm messaging chết trong tuần đầu là baseline vật lý (WeChat/WWW 2016) và không có kênh phân phối nào xoá được nó.

2. **[legal] Giấy phép mạng xã hội, ngưỡng ~1.000 người dùng thường xuyên/tháng — KHÔNG né được.** Định nghĩa của ND 147 Điều 3 nói rõ _"trên nền tảng **website hoặc ứng dụng**"_. Một web app cho phép người dùng cung cấp, trao đổi, chia sẻ thông tin với nhau **vẫn là mạng xã hội**. Chạy dưới dạng Zalo Mini App cũng không đổi: Zalo là kênh phân phối, Chốt Sổ vẫn là bên cung cấp dịch vụ. Ai nghĩ "làm web thì luật không đụng tới" là hiểu sai luật.

3. **[legal] Nội địa hoá dữ liệu (ND 53/2022) và chuyển dữ liệu xuyên biên giới (ND 330/2026, phạt tới 5% doanh thu năm trước).** TTL 72h làm giảm khối lượng dữ liệu nhạy cảm chứ không xoá nghĩa vụ.

4. **#13 "Ở 10.000 DAU app đã lỗ; hoà vốn lương 1 người cần 60k–120k DAU tại VN".** Hướng D hạ chi phí hạ tầng đáng kể nhưng **hạ trần doanh thu còn nhanh hơn**: không có IAP của Apple/Google, mà thanh toán web ở VN cho Gen Z là bài toán khó hơn hẳn.

5. **#15/#17 "Bán memory không có tiền lệ trả tiền" và "Không monetize ở MVP đang gộp hai thứ khác nhau — failure mode của Geneva".** Hướng D không đóng góp gì cho câu hỏi tiền. Nó chỉ mua thêm thời gian.

6. **#26 "MOAT bằng 0 trong 6 tháng đầu".** Hướng D làm moat **thấp hơn nữa**: một trang web 7 màn thì bất kỳ ai cũng clone trong 2 tuần, và VNG — chủ nhà — clone trong 2 ngày nếu muốn.

7. **#3 "Tự đặt độ khó + thưởng chung = cuộc đua xuống đáy".** Không đụng tới. Vẫn cần peer-approval kèo và câu hỏi cuối mùa "kèo này có thật sự khó với mày không?".

8. **#22 "Không có metric nào phát hiện được tác hại".** Hướng D làm **tệ hơn**: khi roast diễn ra trong Zalo, mình không nhìn thấy gì, không log được gì, không can thiệp được gì. Một nhóm đang bắt nạt một thành viên thì dashboard vẫn xanh.

9. **#21 "Vị thành niên: age gate tự khai không hoạt động".** Web app còn dễ vào hơn app store. Luật ANM 116/2025 Điều 16 khoản 2 vẫn treo đó.

10. **[integrity] Gian lận proof.** Không có camera bắt buộc, không có perceptual hash ở MVP → nộp ảnh cũ là chuyện dễ. Chấp nhận: theo r07, nghiêm khắc hoá quá sớm là rủi ro lớn hơn gian lận.

---

## 8. RỦI RO **MỚI** DO CHÍNH HƯỚNG NÀY TẠO RA

1. **Rủi ro chủ nhà (nghiêm trọng nhất).** Sản phẩm sống nhờ (a) link mở được trong Zalo, (b) card render đẹp trong Zalo, (c) noti của Zalo. Cả ba đều do VNG kiểm soát. r04 đã ghi: Zalo **có** hệ thống cảnh báo/chặn domain — một sáng thức dậy thấy màn "Link này có thể không an toàn" là growth về 0. Giảm thiểu: domain riêng có brand + HTTPS + nội dung thật, chủ động whitelist với Zalo trước launch, **và mã nhóm 6 ký tự gõ tay làm đường thoát hiểm ngày 1**.

2. **Không có widget = mất chính moat đã được kiểm chứng ở VN.** Digest nói thẳng: _"Locket sống sót vì nó là UTILITY (widget)"_, và _"moat duy nhất đã biết là widget"_. Hướng D tự nguyện từ bỏ nó. Đây là cái giá lớn nhất và không có cách nào bù trong phạm vi web.

3. **Nghi thức có một điểm chết đơn (single point of failure): người chốt sổ.** Nếu tối nay không ai bấm "Chốt sổ", nhóm không nhận được cú hích nào — không có noti dự phòng. Giảm thiểu một phần: nhắc luân phiên qua ZNS 300đ/tin cho **một người/ngày** (5 người × 30 ngày × 300đ = **45.000đ/nhóm/tháng** — quá đắt để làm mặc định, chỉ dùng cứu nhóm sắp chết). Đây là lý do thật để mong Zalo Bot ra khỏi beta.

4. **Danh tính mong manh trong webview.** Zalo in-app browser + ITP + user đổi máy = mất tài khoản. Không có OTP thì không có đường khôi phục chắc chắn. Chấp nhận mất ~5–10% người dùng vì lý do này [ước lượng].

5. **Mù analytics.** Phần lớn tương tác (bước 4) xảy ra trong Zalo, mình không đo được. Chỉ đo được lượt mở card và lượt nộp. Nghĩa là **không thể chứng minh sản phẩm đang tạo giá trị**, chỉ chứng minh được người ta có bấm.

6. **Camera/thư viện trong webview Zalo không đồng nhất trên các ROM Android.** Phải test thật trên Xiaomi/Oppo/Samsung trước khi mời nhóm đầu tiên, không giả định.

7. **Nếu đi đường Zalo Mini App: phụ thuộc kiểm duyệt.** Hệ sinh thái Mini App hiện nghiêng hẳn về thương mại/CSKH (r01 §224). Một mini app "nghi thức nhóm bạn" có thể bị từ chối vì không thuộc nhóm ngành quen thuộc, và mỗi lần cập nhật là một lần duyệt.

8. **Nếu thành công, chủ nhà thấy trước tiên.** Zalo nhìn thấy toàn bộ traffic vào domain của mình, kể cả trước khi mình có 1.000 người dùng.

---

## 9. COLD START — 90 GIÂY ĐẦU TIÊN CỦA NGƯỜI DÙNG SỐ 1, VÀ CÁCH CÓ NGƯỜI THỨ 2

### Người thứ 1 — đồng hồ bấm giây

| Giây | Việc | Màn |
|---|---|---|
| 0–4 | Chạm link `chotso.vn` (từ TikTok của founder / từ tin nhắn founder). **Không có màn hình chờ, không đăng nhập.** | — |
| 4–12 | Thấy **bảng mẫu của một nhóm giả** đang chạy: chuỗi 12 ngày, 3/5 đã nộp, 3 ảnh proof. Hiểu ngay sản phẩm là gì mà không cần đọc chữ | 1 |
| 12–20 | Chạm "Tạo nhóm của tao" → gõ tên nhóm (hoặc bấm gợi ý "Nhóm 5 con báo") | 3 |
| 20–28 | Chọn kèo: 8 preset, 1 chạm. ("Ngủ trước 12h" · "Đi bộ 20 phút" · "Không trà sữa" · "Đọc 5 trang" · "Học 15 phút" · "Tập 15 phút" · "Không bỏ bữa sáng" · "Không mất tích") | 4 |
| 28–52 | "Nộp proof đầu tiên" → mở thư viện → chọn 1 ảnh bất kỳ → gửi | 2 |
| 52–70 | Card hiện ra: tên nhóm, chuỗi **1**, 1/1 đã nộp, ảnh vừa nộp | 5 |
| 70–90 | Chạm **"Chia sẻ vào nhóm Zalo"** → chọn nhóm → gửi. Card đã có sẵn caption: _"Tao mở sổ rồi. Kèo tao: ngủ trước 12h. Bấm vô nộp đi, không cần cài app."_ | 5 |

**90 giây, 0 lần cài, 0 lần nhập số điện thoại, 6 lần chạm.**

Nguyên tắc cứng: **card chia sẻ phải được sinh ra TỪ proof của chính user, không phải từ một lời mời trống.** Người thứ 2 không nhận được "mời bạn dùng app", họ nhận được **một bức ảnh của bạn mình kèm một dòng chữ có tên bạn mình**.

### Người thứ 2 — funnel, có số

| Bước | App-based (từ phản biện #5) | Hướng D | Lý do khác biệt |
|---|---|---|---|
| Đọc tin trong group | 85% | 85% | không đổi |
| Chạm vào link/card | 35% | **45%** | card ảnh 4:5 có mặt bạn mình, không phải link trần |
| Mở được nội dung | (gộp trong "cài 30%") | **90%** | mở trong webview Zalo, không rời app, không qua store |
| Cài app | **30%** | **— (xoá bước)** | đây là toàn bộ giá trị của hướng D |
| Xong onboarding | 60% | **75%** | không login, kèo 1 chạm |
| Nộp proof ngày đầu | 60% | **55%** | thấp hơn một chút: cam kết nhẹ hơn thì cũng dễ bỏ hơn |
| **Tích** | **3,2%** | **14,2%** | **×4,4** |

P(nhóm hình thành) = P(≥2 trong số người được mời đi hết funnel):

| Số người được mời | p = 0,032 (app) | p = 0,142 (hướng D) |
|---|---|---|
| 4 | 0,6% | **9,9%** |
| 6 | 1,6% | **20,5%** |
| 8 | 3,3% | **31,0%** |

_(Bin(n, p), P(X≥2). Số học.)_

Ở 6 lời mời: **1 nhóm hình thành trên ~4,9 người khởi tạo**, thay vì ~29 lượt cài. Đây là con số biện minh cho toàn bộ hướng D.

**Điều kiện tuyển beta (copy từ r04 §105, giữ nguyên):** form đăng ký bắt nhập **tên 3 người bạn + link group chat có sẵn**, chỉ mở nhóm khi đủ 3. Không tạo nhóm mới — **chiếm nhóm đã có** (bài học Discord, r04 §98).

---

## 10. ƯỚC LƯỢNG PERSON-WEEK

Giả định: 1 người, Next.js + Postgres (Supabase Singapore) + Cloudflare R2 + Vercel, đã biết stack.

### Bản MVP test được (web thuần, chưa đóng gói Zalo Mini App)

| # | Hạng mục | PW |
|---|---|---|
| 1 | Khung dự án, schema (group / member / goal / proof / day), danh tính nhẹ (device token + mã nhóm) | 0,8 |
| 2 | Màn 1 **Bảng hôm nay** + polling 15s + trạng thái public cho người chưa vào nhóm | 1,0 |
| 3 | Màn 2 **Nộp proof**: chọn ảnh, nén client-side, strip EXIF, signed upload R2, TTL 72h | 1,0 |
| 4 | Màn 3 + 4 **Tạo/Vào nhóm** + **Chọn kèo** (8 preset) + link mời + OG preview | 0,8 |
| 5 | Màn 5 **Card chốt sổ**: render ảnh 4:5 server-side (satori/@vercel/og), nút Chia sẻ + Lưu ảnh | 0,8 |
| 6 | Màn 6 **Lịch sử 7/30 ngày** + Màn 7 **Của tôi** (tạm nghỉ, rời nhóm, xoá dữ liệu) | 0,6 |
| 7 | Logic chuỗi + ngày nghỉ + Tết Mode + cron 21:00 nhắc người chốt sổ | 0,5 |
| 8 | Analytics **theo nhóm**: `group_alive`, `q`, `installs_per_activated_group`, `card_open_rate` | 0,4 |
| 9 | ToS + Chính sách quyền riêng tư + nút báo cáo + soft delete | 0,4 |
| | **Cộng** | **6,3** |
| | Đệm 20% cho việc test trên ROM Android thật | 1,2 |
| | **TỔNG MVP** | **≈ 7,5 PW** |

Nếu cắt tiếp màn 6 (Lịch sử) và Tết Mode sang bản sau: **≈ 6,5 PW** — đây là con số tôi cam kết cho "MVP có thể test".

### Các hạng mục sau MVP (không tính vào con số trên)

| Hạng mục | PW | Điều kiện kích hoạt |
|---|---|---|
| Đóng gói **Zalo Mini App** (ZMP SDK, đăng ký OA + eKYC, `getUserID`, `openShareSheet` native, submit duyệt 3–5 ngày) | 2,0 | sau khi H1+H2 ở mục 12 pass |
| **Zalo Bot chốt sổ tự động 21:00** trong nhóm | 1,5 | **chỉ khi Zalo tuyên bố group API ra khỏi beta** |
| ZNS nhắc luân phiên (template + duyệt) | 0,8 | chỉ nếu H3 fail vì lý do người chốt sổ |
| App native + widget | 8–10 | chỉ khi group-D28 ≥ 35% |

**So sánh:** phản biện #9 đo MVP theo DOC 1 ở **≈33 person-week**. Hướng D ở **6,5**. Chênh lệch 26,5 PW ≈ **6 tháng làm việc của founder** — đó là toàn bộ giá trị thực dụng của tài liệu này.

**Nhưng trước 6,5 PW đó là 0 PW:** giữ nguyên Bước 0 của phán quyết chiến lược — 14 ngày, 6 nhóm × 5 người trong Zalo, card làm tay bằng Canva, ~28 giờ, 0đ. Hướng D là hướng duy nhất mà **Bước 0 và MVP có cùng hình dạng**: Bước 0 là founder dán card tay, MVP là nút bấm sinh card. Không có bước nhảy kiến trúc giữa hai giai đoạn — đó là lý do kỹ thuật để chọn hướng D.

---

## 11. ĐƯỜNG LỚN LÊN — NẾU HƯỚNG NÀY CHẠY

Bốn nấc, mỗi nấc có điều kiện mở khoá bằng số. Không nấc nào được làm sớm.

**Nấc 1 — Đóng gói thành Zalo Mini App (+2,0 PW).**
Điều kiện: H1 và H2 (mục 12) pass trên ≥6 nhóm. Được gì: icon trong Zalo → không cần link nữa; `getUserID` → danh tính bền, hết mong manh; `openShareSheet` native → bước 1 rơi từ 5 giây xuống ~3 giây; và một kênh thông báo hợp pháp qua OA trong cửa sổ 7 ngày.

**Nấc 2 — Bot tự chốt sổ (+1,5 PW).**
Điều kiện cứng: **Zalo tuyên bố group API rời trạng thái thử nghiệm nội bộ.** Được gì: xoá rủi ro #3 ở mục 8 — nghi thức không còn phụ thuộc một con người bấm nút. Đây là nâng cấp có giá trị cao nhất trong toàn bộ lộ trình, và **nó không nằm trong tay founder**. Theo dõi changelog hàng tháng, không chờ đợi.

**Nấc 3 — App native + widget (+8–10 PW).**
Điều kiện: **group-D28 ≥ 35%** trên ≥30 nhóm. Chỉ khi đã có bằng chứng nhóm sống mới đáng trả giá store review, EAS, push, ROM. Widget là moat đã được kiểm chứng ở VN (Locket) — nhưng nó là **phần thưởng cho việc đã chứng minh retention**, không phải công cụ để tạo ra retention.

**Nấc 4 — Pháp nhân + Giấy phép MXH.**
Điều kiện kích hoạt: **700 người dùng thường xuyên/tháng** — đặt trước ngưỡng 1.000 của ND 147 một khoảng đệm 30%, vì thủ tục mất 3–6 tháng và cần pháp nhân VN + tên miền .vn + máy chủ tại VN + người chịu trách nhiệm nội dung quốc tịch VN. **Đăng ký `chotso.vn` ngay tuần này**, vì giấy phép yêu cầu tên miền .vn còn hiệu lực ≥6 tháng — đây là việc rẻ nhất, mất nhiều thời gian nhất, và làm được ngay hôm nay.

---

## 12. KIỂM CHỨNG — 3 GIẢ THUYẾT, NGƯỠNG SỐ CỤ THỂ

Chạy trên **6 nhóm × 5 người**, **14 ngày**, trong Bước 0 (làm tay) rồi lặp lại trên MVP.

### H1 — Card trong nhóm Zalo thay được push riêng

> **Giả thuyết:** Vì card do người thật dán vào nhóm, tỉ lệ thành viên **mở card trong 24 giờ** cao hơn hẳn open-rate push của app thường.

| Kết quả | Ngưỡng | Hành động |
|---|---|---|
| Pass | **≥ 60%** thành viên active mở card trong 24h, trung bình 6 nhóm, tuần 2 | Đi tiếp. Đây là bằng chứng cho luận điểm trung tâm của hướng D |
| Vùng xám | 40–60% | Bật ZNS nhắc luân phiên, đo lại 7 ngày |
| **Fail** | **< 40%** | **Hướng D sai.** Nếu mượn kênh Zalo mà vẫn không tới người, thì lợi thế duy nhất của hướng này không tồn tại. Dừng, không patch |

_Đối chứng: opt-in push Android đã rơi 85%→67% do Android 13, và ROM Xiaomi/Oppo/Vivo giết background (r05). Nếu H1 chỉ ngang push thường thì không đáng đánh đổi widget._

### H2 — Nghi thức có nhịp thật, không phải founder đẩy

> **Giả thuyết:** `q` (tỉ lệ thành viên active nộp proof/ngày) trong tuần 2 đủ cao để chuỗi nhóm sống.

| Kết quả | Ngưỡng | Hành động |
|---|---|---|
| Pass | **q ≥ 0,45** trung bình tuần 2 **và** ≥4/6 nhóm giữ được chuỗi ≥5 ngày liên tiếp | Đi tiếp, tune ngày nghỉ theo dữ liệu |
| Vùng xám | 0,35 ≤ q < 0,45 | Ép nhóm mặc định xuống **3 người** (bảng 4.2: A=3 vẫn cho 42,5% ngày ở q=0,45; A=5 cho 74,4% — nhóm nhỏ dễ chết hơn, nên đây là bước lùi có tính toán, không phải mặc định) |
| **Fail** | **q < 0,35** | Nghi thức hằng ngày không tồn tại. Dừng toàn bộ hướng nộp-proof-mỗi-ngày |

_Ghi chú đo lường: `q` phải tính trên **thành viên Active** (đã nộp ≥1 proof trong 7 ngày qua), không phải headcount danh nghĩa. Tính sai mẫu số là cách tự lừa mình rẻ nhất._

### H3 — Sản phẩm không phải là founder

> **Giả thuyết:** Việc "chốt sổ" tự lan sang người khác mà không cần founder khơi mào.

| Kết quả | Ngưỡng | Hành động |
|---|---|---|
| Pass | **≥ 50%** số card chốt sổ trong tuần 2 do người **không phải** người tạo nhóm đăng, **và** ≥2/6 nhóm tự chốt sổ ≥5/7 ngày mà founder không nhắn gì | Sản phẩm có nhịp riêng. Build MVP |
| Vùng xám | 1 nhóm đạt | Kéo dài Bước 0 thêm 14 ngày, đổi nhóm, không viết code |
| **Fail** | **0/6 nhóm** tự chạy, hoặc <25% card do người khác đăng | Đây không phải sản phẩm, đây là founder làm việc bằng tay. Dừng — **tiết kiệm 6,5 person-week** |

**Một quy tắc chung cho cả ba:** đơn vị đo là **nhóm**, không phải user. Retention báo cáo dạng `group-D7 / group-D14 / group-D28`, với `group_alive = ≥3 người nộp proof trong 7 ngày liên tiếp gần nhất` — chốt bằng văn bản ngay hôm nay theo phán quyết chiến lược, trước khi có user nào, vì định nghĩa này đã trôi trong chính repo (r04 §13 nói ≥3, §64 nói ≥2).

---

## 13. PHÁN QUYẾT VỀ HƯỚNG D

**Khả thi — nhưng chỉ ở phiên bản khiêm tốn của nó, và founder phải chấp nhận đúng phiên bản đó.**

Phiên bản ảo tưởng — *"bot chạy nghi thức tự động trong group chat, không ai phải làm gì"* — **không khả thi tháng 09/2026**: Messenger đã đóng vĩnh viễn, Zalo Bot trong nhóm đang ở trạng thái thử nghiệm nội bộ do chính Zalo ghi trong tài liệu, gói free chỉ 50 người/bot, và Zalo Mini App không hề biết nó đang ở trong nhóm nào.

Phiên bản khả thi — *"một trang web 7 màn, mở-là-dùng, sinh ra card ảnh để một con người dán vào nhóm Zalo mỗi tối"* — **build được trong 6,5 person-week**, chạy được ngay tuần tới, và gỡ được 15 phản biện trong digest, trong đó có phản biện FATAL và ba red flag chi phí lớn nhất của stack.

**Cái giá phải trả, nói thẳng:** mất widget — tức mất chính cái moat duy nhất đã được kiểm chứng ở thị trường VN; mù analytics ở phần vui nhất của sản phẩm; và sống trên đất của VNG. Hướng D **không** trả lời câu hỏi tiền, **không** làm nhóm bạn bền hơn, và **không** né được giấy phép mạng xã hội.

Nó chỉ làm được đúng một việc, và làm rất tốt: **biến chi phí sai lầm từ 33 person-week xuống 6,5 person-week, và biến câu hỏi "có ai chịu cài không" thành câu hỏi "có ai chịu bấm không".** Với một founder một mình, ngân sách thấp, chưa pháp nhân, đó là cách rẻ nhất để biết mình đúng hay sai.
