# E04 — BẢO VỆ HƯỚNG APP: JUDGE PANEL ĐÃ BỎ SÓT GÌ

_Viết 04/09/2026. Vai: agent đối kháng được giao nhiệm vụ xây lập luận MẠNH NHẤT cho việc làm app native, và soi thiên lệch của vòng đánh giá 03/09._
_Ràng buộc cứng: tên **Teemi** (F-01) · **20 giờ/tuần ⇒ 1 pw ≈ 3,1 tuần lịch** (F-04) · **cơ chế boss CHƯA quyết** (F-02) — mọi đề xuất dưới đây phải để ngỏ cả hai đường boss._
_Quy ước: **[FACT + nguồn]** · **[suy luận]** · **[ước lượng]** · **KHÔNG TÌM ĐƯỢC**._

> **Tuyên bố vai trò, để founder đọc cho đúng.** Tài liệu này KHÔNG trung lập. Nó được giao nhiệm vụ làm luật sư bào chữa cho hướng app. Mục 4 là phần tôi tự khai giá phải trả, và ở đó có một con số tôi không gỡ được. Đọc mục 4 trước mục 2 nếu bạn muốn kiểm tra tôi có thành thật không.

---

## 0. KẾT LUẬN TRONG BỐN CÂU

1. **Khoảng cách 6,5 pw vs 11,0 pw là số ảo.** Hai con số không cùng phạm vi. Chuẩn hoá lại: hướng D ≈ **9,9 pw**, hướng A giữ **11,0 pw**. Chênh thật **1,1–2,4 pw ≈ 3,4–7,4 tuần lịch**, không phải 4,5 pw ≈ 14 tuần.
2. **Judge panel quyết bằng chỉ số acquisition, trong khi chính hồ sơ tuyên bố đơn vị sản phẩm là retention nhóm.** Trên trục retention, bằng chứng VN duy nhất đã được kiểm chứng (Locket = widget) chỉ tồn tại ở phía app — và **không có API widget cho web trên iOS lẫn Android tính đến 2026** [FACT].
3. **Một trong ba trụ của quyết định đã bị chính hồ sơ thu hồi ngày hôm nay.** ADR-003 (04/09) rút nhãn `[FACT]` khỏi con số ">85% Android": số thật là **Android 57,33% / iOS 42,64%** (StatCounter T8/2026). Lý do 3 của quyết định ("không phải chiến tranh với ROM Xiaomi/Oppo/Vivo") vừa mất 43% cơ sở, và cơ chế danh tính của D (localStorage) yếu nhất đúng trên 43% đó.
4. **"Chi phí sai lầm thấp nhất" chỉ đúng nếu bạn dừng lại.** Nếu D thành công, lộ trình của chính D (§11 nấc 3) là **+8–10 pw nữa** ⇒ tổng **14,5–16,5 pw ≈ 45–51 tuần lịch**, so với đi thẳng app **8,4–11,0 pw ≈ 26–34 tuần**. Hướng rẻ nhất là hướng **chậm nhất** trong nhánh thành công.

---

## 1. SOI THIÊN LỆCH CỦA JUDGE PANEL

### 1.1. Biên thắng là 4%, và nó được xử lý như một phán quyết dứt khoát

| | Điểm trung bình | Phiếu |
|---|---|---|
| **D-chat-native** | **41,0/70** | 2 |
| A-witness | 38,2/70 | 0 |
| C-duo-first | 35,5/70 | 1 |
| B-fixed-boss | 28,0/70 | 0 |

_Nguồn: `plan/01-dinh-nghia-san-pham-v2.md` §2 dòng 51._

Chênh D − A = **2,8 điểm trên thang 70 = 4,0%**. Với ba giám khảo cho điểm chủ quan trên bảy trục, 4% nằm trong nhiễu của chính phương pháp. Không có kiểm định độ nhạy nào ("nếu một giám khảo lệch 3 điểm ở trục pw thì thứ hạng có đổi không?"). **Và không có bảng điểm từng lăng kính nào được lưu trong repo** — tôi đã grep toàn bộ `docs/` cho `judge`, `lăng kính`, `rubric`, `/70`: chỉ có bốn dòng nhắc tới kết quả tổng, không có một dòng chi tiết nào. **KHÔNG TÌM ĐƯỢC bảng điểm.** ⇒ **Quyết định lớn nhất của dự án không audit được.**

Nhưng 4% đó đã được đóng đinh vào: 13 tài liệu `plan/`, 5 ADR, một schema (`book_id`), một tên miền, 8 script Bước 0, và một câu định vị 13 từ. Chi phí đảo ngược tăng từ 0 lên "vứt toàn bộ scope đã build" sau 23/09 (QĐ-40).

### 1.2. Ước lượng pw KHÔNG cùng phạm vi — đây là thiên lệch nặng nhất

Bảng dưới đặt cạnh nhau đúng các dòng của `option-A-witness.md` §10 và `option-D-chat-native.md` §10.

| Hạng mục | A (app) | D (web) | Nhận xét |
|---|---|---|---|
| Khung + schema + danh tính | 0,8 + 0,7 = **1,5** | **0,8** | A trả tiền auth thật (Apple/Google). D gộp "khung + schema + device token" vào 0,8 — không tin được |
| Vào nhóm + deep link + trang public | **1,2** | 0,8 (gộp cả chọn kèo) | |
| Chọn kèo | **0,3** | (gộp) | |
| Camera → nén → upload **+ hàng đợi offline** | **2,0** | **1,0** | D **không có hàng đợi retry**. Trên mạng di động VN trong webview, đó là khiếm khuyết, không phải khoản tiết kiệm |
| Màn hôm nay + reaction | **1,0** | 1,0 | |
| Tường / Lịch sử + render ảnh share | **0,8** | 0,8 + 0,6 (**đã cắt** để về 6,5) | D cắt Lịch sử; A giữ Tường |
| **Widget** | **0,5** | 0 | Không có API [FACT — xem §2.1] |
| **Push riêng** | **0,4** | 0 | |
| Analytics cấp nhóm | 0,4 | 0,4 | |
| An toàn/pháp lý | **0,6** | 0,4 | |
| **QA máy Android thật + submit store** | **0,8** | 0 | |
| **Nội dung/thiết kế** (icon, preset, copy, layout card, ảnh store) | **1,5** | **0 — KHÔNG CÓ DÒNG NÀO** | D vẫn phải thiết kế card, 8 preset, copy onboarding, OG image |
| Logic chuỗi + van + cron | (không tách dòng) | 0,5 | |
| **TỔNG CÔNG BỐ** | **11,0** | **6,5** | |

**Bốn khoản D không tính mà vẫn phải trả:**

| Khoản D thiếu | +pw | Căn cứ |
|---|---|---|
| Nội dung/thiết kế | **+1,1** | A định giá 1,5; trừ ảnh store ⇒ ~1,1 `[ước lượng]` |
| Hàng đợi upload tối thiểu | **+0,5** | Chênh dòng camera A(2,0) − D(1,0) trừ phần camera native `[ước lượng]` |
| Đường khôi phục danh tính | **+0,4** | `adr/pw-ledger.md` L-26 định giá email magic link đúng **+0,40 pw**. Bắt buộc vì ITP (§2.3) |
| Lịch sử 7/30 ngày (để so ngang với Tường của A) | **+0,6** | `option-D` §10 |
| **Vượt sổ cái đã ghi nhận** | **+0,75** | `adr/pw-ledger.md` §1: backlog thật **7,25 pw** trên trần 6,5 |
| **D chuẩn hoá** | **≈ 9,9 pw** | |

**Chênh thật: 11,0 − 9,9 = 1,1 pw ≈ 3,4 tuần lịch.** Và nếu công bằng ngược lại — cho A chịu cùng mức "nở scope khi bị soi" mà D đã chịu (+12% trong đúng một ngày) — thì A ≈ 12,3 pw, chênh **2,4 pw ≈ 7,4 tuần**. **Dải trung thực: 3,4 – 7,4 tuần lịch.** Đó là cái giá của widget + push riêng + danh tính bền + hàng đợi offline + một tài sản không nằm trên đất VNG.

### 1.3. Kiểm toán bất đối xứng

Ngày 03/09, **chín tài liệu** được viết song song trên nền hướng D. Kết quả sau **một ngày**: `adr/pw-ledger.md` ghi backlog thật **7,25 pw / trần 6,5** và MVP-0 **4,58 pw / trần 3,5** ⇒ **thiếu 1,08 pw**. Tức con số 6,5 đã nở **+11,5%** trong 24 giờ soi xét.

A, B, C **chưa từng bị soi một lần nào sau khi thua**. So một con số đã qua kiểm toán với ba con số chưa qua kiểm toán, rồi kết luận con số đầu nhỏ hơn — đó là lỗi phương pháp, không phải phát hiện.

### 1.4. Hai trong ba lăng kính cấu trúc sẵn để hướng rẻ nhất thắng

| Lăng kính | Đo cái gì | Có tương quan với "rẻ" không? |
|---|---|---|
| **Người build** (bus factor 1, 20h/tuần) | pw, độ dài vòng sửa lỗi, phụ thuộc bên ngoài | **Có, gần như 1:1.** Đây là lăng kính D được thiết kế để thắng |
| **Người dùng** | ma sát onboarding, số chạm, "có cài không" | **Có, gián tiếp.** "Không cài app" là câu trả lời rẻ cho ma sát ⇒ ưu D |
| **Bằng chứng** | tiền lệ đã chạy được ở thị trường thật | **Không.** Đây là lăng kính duy nhất trung lập |

Và trên đúng lăng kính trung lập đó, bằng chứng VN mạnh nhất trong toàn hồ sơ chỉ tồn tại ở phía app: **Locket = widget = utility**, `r01` §140 gọi đây là _"insight quan trọng nhất của mục 2"_ — _"0/7 app ritual viral giữ được đà; Locket là app duy nhất chưa từng sụp, vì nó là utility (widget), không phải novelty"_. Panel đã ghi nhận câu đó, rồi chọn hướng duy nhất **không thể** có widget.

### 1.5. Quyết bằng chỉ số acquisition, trong khi tuyên bố đơn vị là retention

`critique/00-danh-gia-chien-luoc.md` §1 câu 3: _"Đơn vị sản phẩm là NHÓM SỐNG, không phải install và không phải user — mọi metric, mọi kill criterion phải viết bằng đơn vị đó."_

Lý do 1 của quyết định là **pw** (chi phí). Bảng biện minh trung tâm của D (§9) là **funnel cold start** 3,2% → 14,2%. Cả hai đều là chỉ số **acquisition/cost**. Không có một dòng nào trong §2 của `01-v2` so sánh bốn hướng theo `group-D28`. **Hồ sơ tự đặt ra một đơn vị đo rồi quyết định bằng một đơn vị khác.**

### 1.6. Một trụ của quyết định đã bị thu hồi — và không ai chạy lại quyết định

**Lý do 3** của QĐ-40 là "không chiến tranh với ROM Xiaomi/Oppo/Vivo". Cơ sở: ">85% Android", gắn nhãn `[FACT]` ở ba tài liệu.

`adr/ADR-003-thi-phan-android-vn.md`, ngày **04/09/2026**:

| OS | Thị phần VN, T8/2026 |
|---|---|
| Android | **57,33%** |
| iOS | **42,64%** |

Nguồn: [gs.statcounter.com/os-market-share/mobile/viet-nam](https://gs.statcounter.com/os-market-share/mobile/viet-nam) [FACT]. ADR-003 ghi thẳng: _"Nhãn `[FACT]` gắn cho '>85%' bị **thu hồi**."_

Hệ quả mà ADR-003 chưa kéo hết:

1. **Với 42,64% người dùng (iOS), chiến tranh ROM không tồn tại.** APNs giao noti bình thường. Lý do 3 chỉ còn đúng trên 57%.
2. **Cơ chế danh tính của D yếu nhất đúng trên 43% đó** (§2.3).
3. **Web push dự phòng chỉ phủ Android** ⇒ bỏ sót 43%, không phải 15% — ADR-003 tự ghi điều này.

Cộng với lỗi 98% mà `ADR-004` F-03 đã tự thừa nhận: **quyết định 03/09 đứng trên hai con số, cả hai đều sai.**

---

## 2. LẬP LUẬN MẠNH NHẤT CHO APP

### 2.1. Widget — đây là thứ quyết định, và nó không thương lượng được

**[FACT]** Không tồn tại API cho phép web app / PWA tạo widget màn hình chính trên iOS hoặc Android tính đến 2026. Bề mặt widget duy nhất cho PWA là **Windows 11 Widgets Board**.
Nguồn: [Progressier — Can a PWA create home screen widgets?](https://intercom.help/progressier/en/articles/12814946-can-a-pwa-create-home-screen-widgets) · [Microsoft Learn — Build PWA-driven widgets](https://learn.microsoft.com/en-gb/microsoft-edge/progressive-web-apps-chromium/how-to/widgets) · [MobiLoud — Do PWAs work on iOS, 2026](https://www.mobiloud.com/blog/progressive-web-apps-ios/)

**[FACT]** Locket Widget tại Việt Nam: hạng 4 nhóm social app trên Google Play VN, **10M+ lượt tải nội địa**; Sensor Tower ước **~800k lượt tải/tháng và ~$300k doanh thu/tháng** cho VN (kỳ T2/2026); đã có lãi.
Nguồn: [42matters — Most popular social apps Vietnam](https://42matters.com/most-popular-social-apps-vietnam) · [Sensor Tower — Locket Widget, VN](https://app.sensortower.com/overview/1600525061?country=VN) · [TechCrunch 08/2025](https://techcrunch.com/2025/08/06/photo-sharing-app-locket-is-banking-on-a-new-celebrity-focused-feature-to-fuel-its-growth/)

**Lập luận, và đây là lập luận mạnh nhất trong tài liệu này** `[suy luận]`:

Widget là **bề mặt tái tương tác duy nhất ở Việt Nam miễn nhiễm với CẢ HAI hàng rào đã biết** — vì widget không phải là một lần *giao* tin, nó là một thứ *đã nằm sẵn* trên màn hình:

| Hàng rào | Push của app | Noti Zalo (hướng D) | **Widget** |
|---|---|---|---|
| Quyền thông báo (Android 13 runtime permission, opt-in tụt 85%→67%, `r05`) | mất ~33% | không dính | **không dính** |
| ROM Xiaomi/Oppo/Vivo giết background (`r05` §166) | mất thêm | không dính | **không dính** |
| Phụ thuộc user mở một app khác | không | **có — phải mở Zalo** | **không** |
| Phụ thuộc một tình nguyện viên bấm nút | không | **có** | **không** |
| Có trên web không? | — | — | **KHÔNG BAO GIỜ** |

Hướng D chống được hai hàng rào đầu bằng cách mượn kênh Zalo, nhưng đổi lấy **hai phụ thuộc mới**: người dùng phải mở Zalo, và một con người phải bấm "chốt sổ". Widget không có phụ thuộc nào trong bốn.

`option-D` §8 mục 2 tự viết: _"Không có widget = mất chính moat đã được kiểm chứng ở VN… Đây là cái giá lớn nhất và không có cách nào bù trong phạm vi web."_ Panel đọc câu đó và vẫn chọn D. Đó là lựa chọn có thể bảo vệ được **nếu** widget là phase-2 — nhưng §2.4 dưới đây cho thấy cổng mở khoá widget của D **không thể đọc được**.

**Trung thực:** widget là cơ chế **retention**, không phải acquisition. Nó chỉ chạy sau khi đã cài. Nó không sửa được con số ở §4.1.

### 2.2. Push riêng: hướng D có một điểm chết đơn, và chính hồ sơ đã lên lịch đo nó

Chuỗi phụ thuộc của D mỗi tối: **một người phải nhớ bấm → Zalo phải đẩy noti → người kia phải mở Zalo.** Đứt một mắt là cả nhóm không nhận cú hích nào. `option-D` §8 mục 3 xếp đây là rủi ro cấu trúc; QĐ-29 lên lịch đúng **2/14 ngày im lặng** (15/09 và 18/09) để đo — tức mẫu **14%**, một lần cho mỗi nhóm, không đủ để phân biệt "quên một hôm" với "cơ chế không tự chạy" `[suy luận]`.

Phương án cứu của D là **ZNS 300đ/tin** ⇒ 5 người × 30 ngày = **45.000đ/sổ/tháng**, chính D gọi là "quá đắt để làm mặc định". Ở 30 sổ beta = **1,35 triệu/tháng** cho một cơ chế nhắc. App: một `expo-notifications` local notification hằng ngày = **0đ, không cần server push, không cần FCM/APNs** `[suy luận từ r05 §1.5]`.

**Trung thực:** nếu H1 pass (≥60% mở card trong 24h) thì kênh Zalo thắng push app về tỉ lệ tới. Nhưng H1 đo **card do founder dán trong Bước 0** — tức đo lúc kênh còn mới và founder còn nhiệt. Và `_rulings.md` C21 đã hạ H1 xuống: _"H1 ở Bước 0 **chỉ có quyền DỪNG (<40%), không có quyền ĐI**"_ — tức bằng chứng trung tâm của D không được phép chứng minh D đúng, chỉ được phép chứng minh D sai.

### 2.3. Danh tính: "5–10%" là con số quá lạc quan, và nó sai nhất trên iOS

**[FACT]** WebKit/Safari xoá **toàn bộ script-writable storage** — localStorage, IndexedDB, SessionStorage, Service Worker registration — sau **7 ngày** không có tương tác first-party. Có hiệu lực từ iOS 13.4 / Safari 13.1 và vẫn còn năm 2026.
Nguồn: [Didomi — Apple adds a 7-Day Cap on All Script-Writable Storage](https://support.didomi.io/apple-adds-a-7-day-cap-on-all-script-writable-storage) · [iTnews](https://www.itnews.com.au/news/apple-cops-flak-for-deleting-local-browser-storage-after-7-days-539833)

Ghép ba dữ kiện:

| Dữ kiện | Nguồn |
|---|---|
| iOS = **42,64%** người dùng VN | ADR-003 [FACT] |
| Webview Zalo trên iOS là WKWebView ⇒ chịu chính sách WebKit | [suy luận] |
| Người mất danh tính = **đúng những người nghỉ ≥7 ngày** | số học |

Tức cơ chế danh tính của D **xoá tài khoản của chính nhóm người mà bạn muốn kéo lại**. Với `group_alive` D30 ~12,5% (`option-D` §7 mục 1), phần lớn dân số sẽ ở trạng thái nghỉ ≥7 ngày trong vòng một tháng ⇒ **phễu win-back có trần cấu trúc gần 0** `[suy luận]`. "Mất 5–10%" là `[ước lượng]` không nguồn trong chính `option-D` §8 mục 4; tôi cho rằng con số đúng lớn hơn nhiều lần trên nửa iOS của thị trường.

**Tiền lệ đúng loại:** Wordle lưu chuỗi trong localStorage; hàng loạt người chơi mất chuỗi khi đổi trình duyệt / xoá dữ liệu / khi NYT chuyển sang server. Nguồn: [Tom's Guide — Wordle fail, players lost streaks](https://www.tomsguide.com/uk/news/wordle-disaster-some-players-lose-their-streaks-in-transfer-to-nyt) · [Connections Hintz — Wordle streak tips](https://www.connectionshintz.com/blog/wordle-streak-tips). Một sản phẩm mà **chuỗi là con số duy nhất trên đầu màn hình** không được phép có lớp lưu trữ mà trình duyệt được quyền xoá.

App: Sign in with Apple / Google, token trong Keychain/Keystore. Vấn đề này **không tồn tại**, và nó không tốn SMS OTP ($0,2852/tin).

### 2.4. Cổng mở khoá widget của hướng D là một cổng không đọc được

`option-D` §11 nấc 3: app + widget chỉ được làm khi **group-D28 ≥ 35% trên ≥30 nhóm**.

`adr/ADR-000-bat-bien.md` bất biến #9: cohort quyết định là các sổ mở 02/12 → 29/12/2026, đọc `sổ-D28` ngày 26/01/2027, **n dự kiến ~24**, **KTC 95% ≈ ±17 điểm phần trăm** — và ADR-000 ghi rõ _"đó chính là con số mở khoá widget"_.

Một điểm ước lượng 35% với biên ±17 điểm không phân biệt được **18%** với **52%**. Cộng thêm: Tết 03–12/02/2027 bóp méo mọi cohort sau đó (ADR-000 #9), và `group_alive` yêu cầu A≥3 (ADR-000 #2) trong khi `option-D` §7 tự nhận D30 ~12,5%.

⇒ **"Làm app sau, khi đã chứng minh retention" là một lời hứa không thể đo được ở quy mô đã lên kế hoạch** `[suy luận]`. Trên thực tế nó là quyết định **không bao giờ làm app**, được viết dưới dạng "làm sau".

### 2.5. Cảm giác sản phẩm thật: tiền lệ có, và nó không nghiêng về web như founder có thể nghĩ

**Tiền lệ ỦNG HỘ web** (tôi nêu trước, vì nó là tiền lệ thật): **Wordle**. Một trang web tĩnh, không app, không tài khoản, tạo được thói quen hằng ngày cho hàng triệu người và lan bằng đúng cơ chế "dán ô vuông vào group chat". Đây là bằng chứng mạnh nhất cho hướng D và tôi không định giấu nó.

**Nhưng đọc hết câu chuyện:** Wordle là trò **một người**, không cần danh tính, không cần ảnh, không cần người khác hành động. Kết cục: NYT mua, chuyển vào **NYT Games app**, và đợt chuyển đó làm mất chuỗi của một loạt người dùng vì localStorage (nguồn §2.3). Tức tiền lệ web mạnh nhất mà ta có đã tự kết thúc bằng việc **chuyển vào app**.

**Bằng chứng định lượng web vs native** — dải rộng, tôi ghi cả hai đầu:

| Chỉ số | Web / PWA | Native | Nguồn |
|---|---|---|---|
| Thời lượng phiên | ~1,26 phút | ~9,15 phút | [MobiLoud — Apps vs mobile websites](https://www.mobiloud.com/blog/mobile-apps-vs-mobile-websites) |
| Thời gian/tháng | ~11 phút | ~200 phút | như trên |
| Repeat purchase (Flipkart, cùng giá trị đơn đầu) | 1× | **3,5×** | [BrewMyApp — Native app vs PWA case study](https://www.brewmyapp.io/blog/case-study-native-app-vs-pwa) |
| Chuyển đổi in-app vs web (đã hiệu chỉnh) | 1× | 2,3× (Tapcart, hạ từ 3,2×) | [MobiLoud](https://www.mobiloud.com/blog/mobile-apps-vs-mobile-websites) |
| Kết luận theo use case | tốt cho dùng **thỉnh thoảng** | tốt cho dùng **hằng ngày, thành thói quen** (social/fitness/messaging) | [Brainhub — PWA vs Native 2026](https://brainhub.eu/library/pwa-vs-native) |

**Cảnh báo trung thực về chất lượng bằng chứng:** toàn bộ dải này là e-commerce, không phải social nhóm bạn, và phần lớn do các công ty bán dịch vụ làm app xuất bản ⇒ có động cơ thổi số. **KHÔNG TÌM ĐƯỢC** một nghiên cứu so sánh `group-retention` web vs native cho consumer social, càng không có ở VN. Cái tôi rút ra được và dám ký tên: **phân loại use case** — sản phẩm dùng hằng ngày thành thói quen là loại mà native thắng, và Teemi tự định nghĩa mình đúng là loại đó.

**Và một hàng rào nữa cho nhánh PWA:** trên iOS, muốn có web push thì **bắt buộc user tự "Thêm vào Màn hình chính"** — Safari không có prompt cài tự động, quy trình 4+ chạm giấu trong menu Share; Apple từng công khai nói PWA có _"very low user adoption"_.
Nguồn: [MagicBell — PWA iOS limitations 2026](https://www.magicbell.com/blog/pwa-ios-limitations-safari-support-complete-guide) · [MobiLoud — PWAs on iOS](https://www.mobiloud.com/blog/progressive-web-apps-ios/)
⇒ Ở 42,64% thị trường VN, "không bắt cài" của hướng D chỉ đúng cho tới lúc bạn cần một kênh thông báo — rồi bạn vẫn phải bắt cài, chỉ là bằng một quy trình **khó hơn** App Store.

---

## 3. PHẢN BIỆN LÝ LẼ "BƯỚC 0 VÀ MVP CÙNG HÌNH DẠNG"

Đây là **lý do 2** của QĐ-40 và nó được gọi là _"lý do kỹ thuật, không phải lý do marketing"_. Tôi cho rằng nó không vững, vì bốn lý do.

**(a) Bước 0 giống hệt nhau ở CẢ BỐN hướng ⇒ nó không phân biệt được gì.**
`option-A` §9 mục 5, nguyên văn: _"Bước 0 thủ công, 14 ngày, không một dòng code. 6 nhóm × 5 người trong Zalo có sẵn, founder post ảnh Tường làm bằng Canva mỗi tối 21:00, đếm bằng Google Sheet. ~28 giờ, 0đ."_ So với `option-D` §10: _"14 ngày, 6 nhóm × 5 người trong Zalo, card làm tay bằng Canva, ~28 giờ, 0đ."_ **Cùng một thí nghiệm, cùng một chi phí, cùng một kênh.** Một đặc điểm mà cả bốn phương án đều có thì không phải là lý do chọn một phương án.

**(b) "Không có bước nhảy kiến trúc" là mệnh đề rỗng, vì Bước 0 không có kiến trúc.**
Thứ Bước 0 để lại là một Google Sheet 8 cột, một bank câu, và một câu trả lời hành vi. **0 dòng code được kế thừa ở mọi hướng.** Cái được kế thừa là *tri thức*, và tri thức thì hướng nào cũng dùng được.

**(c) Cùng hình dạng ⇒ Bước 0 mất khả năng phân biệt, đó là điểm YẾU chứ không phải mạnh.**
Nếu MVP của D chỉ là "nút bấm thay founder mở Canva", thì khi Bước 0 pass ta biết được gì? Ta biết **nghi thức chạy khi có founder đẩy**. Ta **không** biết sản phẩm đóng góp gì thêm — vì sản phẩm gần như không đóng góp gì thêm. Ở hướng app, Bước 0 pass rồi thì app là một cược **mới, tách bạch, đo được** (widget nâng D28 bao nhiêu điểm — giả thuyết A13). Thí nghiệm tốt phải tách được biến. "Cùng hình dạng" nghĩa là **không tách được biến**.

**(d) Chỗ hình dạng THAY ĐỔI là đúng chỗ nguy hiểm nhất, và không ai đo nó đủ.**
Bước 0: **founder** dán card. MVP: **một thành viên tình nguyện** dán card. Đó là một thay đổi hình dạng ở đúng điểm chết đơn mà `option-D` §8 mục 3 xếp hạng nghiêm trọng. QĐ-29 đo nó bằng 2/14 ngày. Vậy lý lẽ "cùng hình dạng" **đúng ở mọi chỗ trừ chỗ quan trọng nhất**.

**Và nó chứng minh quá nhiều:** nếu "giống bản làm tay nhất thì thắng" là một tiêu chí, thì phương án tối ưu là không bao giờ rời khỏi bản làm tay.

**Kết luận mục 3:** lý lẽ này không sai về sự kiện, nhưng nó **không có sức phân biệt**, và nó **đảo dấu** khi soi vào điểm rủi ro số 1. Nó là một lý lẽ tiện lợi, không phải một lý lẽ kỹ thuật.

---

## 4. NẾU LÀM APP, PHẢN BIỆN NÀO QUAY LẠI — TÔI TỰ KHAI GIÁ

Tôi đang bào chữa cho app. Đây là phần tôi không được phép làm nhẹ.

### 4.1. ☠️ FATAL vẫn còn nguyên: cold start. Đây là con số tôi không gỡ được.

Ngay cả ở phương án lai (app + vẫn dán card + vẫn có trang web xem-được), người thứ 2 muốn **nộp ảnh** thì vẫn phải cài.

| Bước | Hướng D | App lai |
|---|---|---|
| Đọc tin trong nhóm chat | 85% | 85% |
| Chạm card | 45% | 45% |
| Mở được nội dung | 90% | 90% |
| **Cài app** | — | **30%** |
| Xong onboarding | 75% | 75% |
| Nộp ngày đầu | 55% | 60% |
| **Tích/người được mời** | **14,2%** | **4,65%** |
| **P(sổ hình thành từ 6 lời mời)** — Bin(6,p), P(X≥2) | **20,5%** | **2,9%** |

_(Số học nhị thức. Tham số lấy nguyên từ `option-D` §9.)_

**Chênh 7,1 lần.** Ở quy mô founder tự tuyển 30 người khởi tạo: D ra ~6 sổ sống, app ra **~0,9 sổ**. Đây là lý lẽ mạnh nhất của hướng D và **nó đúng**.

**Phản biện duy nhất tôi có, và nó có giới hạn:** con số này mô tả **tăng trưởng organic**, còn Bước 0 và beta là **tuyển tay**. Điều kiện tuyển beta (`r04` §105, giữ nguyên ở cả bốn hướng) là *form bắt nhập tên 3 người bạn + link group chat có sẵn, chỉ mở sổ khi đủ 3* — trong luồng đó, "cài app" là một câu trong cuộc trò chuyện của founder, không phải một hệ số nhân trong phễu lạnh. Panel đã dùng **chỉ số giai đoạn tăng trưởng** để chọn **kiến trúc giai đoạn thí nghiệm**. Nhưng: nếu sản phẩm sống được, giai đoạn tăng trưởng sẽ tới, và lúc đó 7,1× là thật.

### 4.2. Các phản biện khác quay lại — kèm giá thật

| Phản biện quay lại | Mức | Giá thật, đã kiểm tra lại |
|---|---|---|
| **#23 "gõ teemi ở App Store ra Temu"** | MAJOR | **Quay lại 100%, và nó phá cơ sở của F-01.** F-01 giữ tên Teemi vì _"ở hướng chat-card không có store search"_. Có store thì lý do đó biến mất. Giảm thiểu: tiêu đề store `Teemi — sổ của nhóm`, ASO tiếng Việt, phân phối chính vẫn qua deep link + TikTok chứ không qua tìm kiếm store `[suy luận]`. **Founder phải mở lại F-01 nếu chọn app.** |
| **red flag [tech] ROM Xiaomi/Oppo/Vivo giết push** | MAJOR | Thật, nhưng chỉ trên **57,33%** thị trường (ADR-003), không phải 85%. Widget miễn nhiễm. Onboarding tắt tối ưu pin: 0,4 pw (A đã tính) |
| **Android 13 opt-in noti tụt 85% → 67%** (`r05`) | MAJOR | Thật. Nhưng widget không cần quyền |
| **Apple Guideline 1.1.1 / 1.2 (UGC)** | MAJOR | Quay lại. Cần report + block + EULA + ẩn nội dung trong 24h. **Nhưng delta ≈ 0**: `_rulings.md` C23 đã bắt buộc auto-hide toàn cục + SLA 24h/6h theo **Luật ANM 116/2025 Điều 16** cho cả web |
| **red flag [vn-market] app fatigue, 27 app/tuần, slot social thứ 4 khan hiếm** (`r02` §318) | MAJOR | Thật và không gỡ được. Đây là lý do widget phải có **từ v0**, không phải v1.1 |
| **EAS Update $1.326/tháng** | — | **Bị dùng sai ngữ cảnh.** Đó là giá ở **100k MAU**. Beta 30 sổ ≈ 120 người ⇒ **Free tier hoặc $19**. `r05` §417 đã có phương án tự host ≈ $20. Panel dùng chi phí giai đoạn quy mô để quyết định giai đoạn 30 sổ |
| **Vòng review store làm chậm sửa lỗi** | — | 2026: Apple công bố ~90% dưới 24–48h, thực tế app mới **2–5 ngày**, cao điểm 7+ ngày ([AppCompliance 2026](https://appcompliance.io/blog/app-store-review-time-2026/), [BetterCodePush](https://bettercodepush.com/blog/app-store-review-times-2026)). **Nhưng EAS Update đẩy sửa JS trong ~3 phút, không qua review** (`r05` §66). Chỉ thay đổi native mới phải chờ |
| **Giấy phép MXH NĐ 147/2024** | MAJOR | **Không phải phản biện chống app.** `option-D` §7 mục 2 tự thừa nhận: định nghĩa NĐ 147 Điều 3 ghi _"trên nền tảng website **hoặc ứng dụng**"_ ⇒ web KHÔNG né được. **Delta = 0** |
| **G1 trò chơi điện tử** | FATAL nếu có boss | Delta cũng ≈ 0 giữa app và web — NĐ 147 không phân biệt. Chỉ **cơ chế boss** mới tạo rủi ro, và F-02 chưa quyết. Thiết kế app dưới đây để ngỏ cả hai đường |
| **#13 "10.000 DAU đã lỗ"** | MAJOR | App **tốt hơn** ở đây: có IAP Apple/Google (kênh thanh toán duy nhất Gen Z VN dùng trơn tru), trong khi `option-D` §7 mục 4 thừa nhận web *"hạ trần doanh thu còn nhanh hơn hạ chi phí"* |
| **#26 MOAT = 0** | MAJOR | App **tốt hơn một chút**: widget + dữ liệu ảnh trên thiết bị + slot màn hình chính là ma sát chuyển đổi thật, một trang web 7 màn thì clone trong 2 tuần (`option-D` §7 mục 6) |
| **Rủi ro chủ nhà VNG** | MAJOR | App **tốt hơn nhiều**: `option-D` §8 mục 1 xếp đây là rủi ro nghiêm trọng nhất của D — VNG chặn domain là growth về 0. App vẫn dùng card dán vào chat nên vẫn dính một phần, nhưng nghi thức không chết theo |

**Tổng kết mục 4, thành thật:** hướng app trả bằng **một** thứ lớn (cold start 7,1×) và **một** thứ trung bình (tên trong store). Đổi lại nó gỡ được widget, push, danh tính, offline, doanh thu, moat và rủi ro chủ nhà. Pháp lý thì **hoà**, không phải thua — điều mà QĐ-40 đã ghi lệch.

---

## 5. PHƯƠNG ÁN APP TỐI GIẢN NHẤT VẪN CÒN NGHĨA

**Nguyên tắc cắt:** giữ **đúng phát minh thật** của hướng D — *card ảnh + link dán vào nhóm chat bất kỳ, và một trang web xem-được cho người chưa cài* — rồi thay **client** bằng app native để sở hữu widget, push và danh tính. `ADR-004` F-03 đã xác nhận cơ chế card **không dùng API Zalo**, nên nó chạy y hệt trên Messenger/Instagram/Discord. **App và card-in-chat chưa bao giờ loại trừ nhau — panel đã đóng khung sai thành nhị phân.**

Tên: **Teemi** (F-01). Boss: **để ngỏ** — bảng dưới không có dòng nào phụ thuộc vào việc có boss hay không; nếu Bước 0 nói "cần boss", boss cộng thêm 1,5–2,0 pw như QĐ-40 đã ước lượng, và schema `book_day` (ADR-001) không cần đổi.

| # | Hạng mục | pw | Ghi chú |
|---|---|---|---|
| 1 | Expo SDK 55 setup + EAS Build + Google Play internal testing + TestFlight | 0,6 | 1 store thật ở v0 |
| 2 | Schema + Supabase + RLS — **tái dùng nguyên `04`/ADR-001**, không thiết kế lại | 0,5 | `book_id`, `client_proof_id`, `roster_size` giữ nguyên |
| 3 | Danh tính: Sign in with Apple + Google | 0,5 | **0đ, không SMS OTP.** Xoá luôn rủi ro ITP |
| 4 | Vào sổ: deep link + mã 6 ký tự | 0,4 | Mã gõ tay là đường thoát hiểm ngày 1 |
| 5 | Chọn kèo: 8 preset 1 chạm, lưu **free-text** | 0,2 | Free-text = lá chắn Điều 38 khoản 2 (`r06`) |
| 6 | Camera/thư viện → nén → strip EXIF → upload R2 + **hàng đợi retry** | 1,2 | Hạng mục đắt nhất, và là thứ D không có |
| 7 | Màn Hôm nay: lưới trạng thái + chuỗi + van ngày nghỉ | 0,7 | Ô trống **không tên** (P2) |
| 8 | **Widget Android** (`react-native-android-widget`) | 0,5 | 57,33% thị trường |
| 9 | Nhắc 21:00 bằng **local notification** (không server push) | 0,2 | 0đ hạ tầng |
| 10 | **Card chia sẻ** → chia sẻ vào nhóm chat bất kỳ | 0,4 | Giữ nguyên phát minh của D |
| 11 | **Trang web công khai đọc-được** (1 route Next.js) cho người chưa cài | 0,5 | Giữ nguyên phễu của D tới trước bước cài |
| 12 | Analytics cấp **sổ** + 2 counter pháp lý (`monthly_visits`, `monthly_active_persons`) | 0,4 | ADR-000 #12 |
| 13 | ToS + Privacy + report + auto-hide + xoá dữ liệu + export ZIP | 0,4 | Nghĩa vụ Luật 91/2025 + ANM 116/2025 |
| 14 | Nội dung/thiết kế tối thiểu: icon, 8 preset, copy, layout card, ảnh store | 0,8 | So với 1,5 của hướng A |
| | **Cộng** | **7,3** | |
| | Đệm 15% (QA trên máy Xiaomi/Oppo/Samsung thật + vòng review đầu) | 1,1 | |
| | **TỔNG — "Teemi-min", Android trước** | **≈ 8,4 pw ≈ 26 tuần lịch** | `[ước lượng]` |
| | + Widget iOS (SwiftUI qua `@bacons/apple-targets`) — mở khoá 42,64% thị trường | +0,5 | ⇒ **8,9 pw ≈ 28 tuần** |
| | + Cùng mức nở scope mà D đã chịu khi bị soi (+12%) | ×1,12 | ⇒ **9,4–10,0 pw ≈ 29–31 tuần** `[ước lượng trung thực nhất]` |

### Cắt tới đâu thì app vẫn còn nghĩa?

**Ba thứ KHÔNG được cắt, vì cắt chúng thì app hết lý do tồn tại:**
1. **Widget** — nếu bỏ widget, bạn đang trả giá cài đặt mà không mua được thứ duy nhất chỉ app mới có. Bỏ widget ⇒ **chọn hướng D**, không có phương án giữa.
2. **Danh tính bền (Apple/Google sign-in)** — 0,5 pw, xoá cả một lớp rủi ro.
3. **Trang web công khai + card chia sẻ** — 0,9 pw, giữ lại toàn bộ phễu của D cho tới đúng trước bước cài.

**Được cắt sạch:** reaction/roast trong app (mượn chat — ý hay nhất của D, giữ), realtime websocket, Lịch sử >7 ngày, Tết Mode, ranking, Trust Score, đa sổ, recap AI, IAP, iOS widget ở v0.

### So sánh cuối cùng, cùng phạm vi

| Đường đi | pw | Tuần lịch @13h code/tuần | Có widget? | Danh tính bền? | Kênh riêng? |
|---|---|---|---|---|---|
| D như công bố | 6,5 | 20 | ❌ | ❌ | ❌ |
| **D chuẩn hoá** (§1.2) | **9,9** | **31** | ❌ | ❌ | ❌ |
| **Teemi-min (app lai)** | **8,4–10,0** | **26–31** | ✅ | ✅ | ✅ |
| A-witness như công bố | 11,0 | 34 | ✅ | ✅ | ✅ |
| **D rồi mới lên app** (§11 nấc 3) | **14,5–16,5** | **45–51** | muộn 25 tuần | ❌ rồi ✅ | muộn |

**Đọc bảng này một lần nữa:** khi so cùng phạm vi, app tối giản **không đắt hơn** hướng D được kiểm toán trung thực. Khoản 4,5 pw mà panel dùng để quyết định phần lớn là chênh lệch **cách viết bảng ước lượng**, không phải chênh lệch **công việc**.

---

## 6. NGHĨA LÀ GÌ CHO QUYẾT ĐỊNH

1. **Bước 0 chạy trong 14 ngày tới, KHÔNG code, và nó giống hệt nhau ở mọi hướng.** Founder không phải quyết app-hay-web trước 22/09. Quyết định này miễn phí cho tới đó — hãy dùng hết 14 ngày đó.
2. **Câu hỏi thật không phải "app hay web".** Nó là: *bạn có sẵn sàng dời ngày beta từ 02/12/2026 sang khoảng 03–04/2027 để đổi lấy widget + push + danh tính không?* Vì ở 13 giờ code/tuần, **không** phương án nào — kể cả D — lọt được mốc 02/12 (`01-v2` §4.10: từ 23/09 tới 02/12 chỉ có ~3,25 pw, nhỏ hơn cả trần MVP-0 là 3,5).
3. **Nếu chọn app, phải mở lại F-01 (tên) và phải chấp nhận cold start 7,1× tệ hơn.** Đó là hai hoá đơn thật, viết ra hôm nay.
4. **Nếu giữ D, phải sửa ba thứ ngay:** (a) đường khôi phục danh tính +0,4 pw — ITP 7 ngày × 42,64% iOS không phải rủi ro nhỏ; (b) hàng đợi upload +0,5 pw; (c) viết lại cổng nấc-3 bằng một tiêu chí đọc được ở n≈24, vì "group-D28 ≥ 35%" với KTC ±17 điểm không phải một cổng.
5. **Bỏ ba lý lẽ đã hỏng khỏi hồ sơ:** ">85% Android" (ADR-003 thu hồi), "98% Gen Z dùng Zalo cho nhóm bạn" (ADR-004 F-03 thu hồi), và "hướng D né được pháp lý" (chính `option-D` §7 mục 2 bác).

**Câu cuối, và tôi ký tên vào nó:** judge panel không sai về sự kiện nào lớn. Nó sai ở **cách so sánh** — so một con số đã kiểm toán với ba con số chưa kiểm toán, trên hai lăng kính tương quan với chi phí và một lăng kính bị bỏ qua, bằng chỉ số acquisition cho một dự án tự tuyên bố đo bằng retention, với biên thắng 4%. Kết quả có thể vẫn đúng. Nhưng nó **chưa được chứng minh**, và nó đã bị đóng đinh vào 13 tài liệu như thể đã được chứng minh.
