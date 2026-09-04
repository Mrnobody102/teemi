# E02 — "DÁN ẢNH + LINK VÀO CHAT": THỰC TẾ KỸ THUẬT TRÊN TỪNG NỀN TẢNG

_Teemi · Tái thẩm định · Ngày viết: 04/09/2026 · Người viết: agent kiểm chứng kỹ thuật chia sẻ_

> **Câu hỏi được giao:** hướng D nói cơ chế thật chỉ là "sinh một ảnh card + link, người dùng tự dán vào nhóm chat", nên về nguyên tắc nó **không phụ thuộc Zalo**. Điều đó có đúng không?
>
> **Trả lời một dòng:** **Đúng một nửa, và nửa sai nằm ở chỗ nguy hiểm nhất.** Phần *dán ảnh* thật sự platform-agnostic — chạy ngang nhau trên cả 5 nền tảng. Phần *link có preview* cũng platform-agnostic **nhưng đòi hai tấm ảnh khác tỉ lệ, không phải một** (hướng D đang giả định một). Còn **cái nút "Chia sẻ" sinh ra card thì KHÔNG platform-agnostic và gãy đúng trên Android in-app webview** — tức trên ~60% thiết bị VN, trong đúng môi trường mà hướng D bắt nó phải chạy. Điểm gãy này **không phải lỗi của Zalo**: nó là giới hạn của Android WebView nói chung, nên đổi sang Messenger cũng gãy y hệt.

---

## 1. CƠ CHẾ ĐANG ĐƯỢC KIỂM CHỨNG — VIẾT LẠI CHO CHÍNH XÁC

Hướng D §2 mô tả bước 1 là: *"một người bấm nút 'Chốt sổ', hệ thống render card ảnh 4:5, người đó dán vào nhóm Zalo — **5 giây** (1 chạm 'Chia sẻ' + 1 chạm chọn nhóm)"*.

Câu đó gộp **ba cơ chế kỹ thuật hoàn toàn khác nhau** làm một, và ba cái đó có độ tin cậy rất khác nhau:

| # | Cơ chế | Nó là gì về mặt kỹ thuật | Độ tin cậy |
|---|---|---|---|
| **A** | **Dán ảnh** | User có sẵn file ảnh trong máy → dùng nút đính kèm của app chat | **Rất cao.** Không đụng web API nào |
| **B** | **Dán link** | User dán URL → app chat tự crawl OG tag → render card preview | **Cao**, nhưng phụ thuộc crawler + cache + tỉ lệ ảnh |
| **C** | **Nút "Chia sẻ" trong web** | `navigator.share({files})` hoặc `<a download>` để đưa ảnh từ trang web ra ngoài | **Thấp trong webview.** Đây là mắt xích gãy |

Toàn bộ tài liệu này tách ba cái đó ra. Kết luận khác nhau cho từng cái.

---

## 2. BẢNG SO SÁNH 5 NỀN TẢNG

### 2.1. Dán ẢNH vào chat — có hiện đầy đủ không?

| | **Zalo group** | **Messenger group** | **Instagram DM group** | **Discord** | **Telegram** |
|---|---|---|---|---|---|
| Ảnh 4:5 (1:1,25) có bị crop trong bong bóng chat? | Không crop [suy luận — không tìm được tài liệu chính thức, cần test tay] | **Không.** Messenger chỉ crop khi cao > 2,2× rộng (tức quá 1:2) — 4:5 nằm an toàn [FACT] | Không crop; IG hiển thị tối đa 4:5 rất quen thuộc [suy luận từ chuẩn feed IG] | Không crop, hiện inline nguyên tỉ lệ [FACT] | Không crop [suy luận] |
| Nén mất chữ? | **Nén mạnh nhất.** Ảnh gốc 4 MB → **~310 KB** ở chế độ thường, **~1,0 MB** ở HD [FACT] | Nén nhẹ hơn: 4 MB → **370 KB** thường, **2,6 MB** HD (gấp ~2,6× Zalo) [FACT] | Nén mạnh (cùng hạ tầng Meta) [suy luận] | Gần như không nén file gốc ≤ 8 MB (đính kèm giữ nguyên) [FACT] | Không nén nếu gửi dạng "File"; nén nếu gửi dạng ảnh [FACT phổ thông] |
| Ý nghĩa cho thiết kế card | **Zalo là mẫu số chung khắt khe nhất.** Thiết kế card phải đọc được sau khi bị nén xuống ~300 KB | | | | |

**Nguồn:** [Phong Vũ — so sánh ảnh HD Messenger vs Zalo](https://phongvu.vn/cong-nghe/anh-gui-hd-qua-messenger-va-zalo/) · [Manychat — tối ưu ảnh cho Messenger (quy tắc crop 2,2×)](https://help.manychat.com/hc/en-us/articles/14281167455388-How-to-optimize-images-for-Messenger) · [OpenGraph+ — Discord image specs](https://opengraphplus.com/consumers/discord/images) · [FPT Shop — gửi ảnh HD qua Zalo](https://fptshop.com.vn/tin-tuc/thu-thuat/cach-gui-anh-hd-qua-zalo-180811)

> **Ràng buộc thiết kế rút ra (số cứng):** card 4:5 phải được render ở **1080 × 1350 px**, chữ chính **≥ 48 px** ở kích thước đó, tương phản ≥ 4,5:1, và **không đặt thông tin sống-chết ở 8% rìa trên/dưới**. Lý do: Zalo nén ~13× so với file gốc, và Messenger có ngưỡng crop 1:2. Cả hai đều tha cho 4:5 — nên **4:5 là lựa chọn đúng, hướng D không sai chỗ này**.

---

### 2.2. Dán LINK — có hiện OG preview không, kích thước bao nhiêu?

| | **Zalo group** | **Messenger group** | **Instagram DM group** | **Discord** | **Telegram** |
|---|---|---|---|---|---|
| Có đọc `og:image` / `og:title` / `og:description`? | **Có** [FACT] | **Có** (crawler `facebookexternalhit`) [FACT] | **Có** — dùng chung crawler Meta với Facebook/Threads [FACT] | **Có**, thêm `twitter:card` và `theme-color` [FACT] | **Có** [FACT] |
| Kích thước ảnh preview | **1200 × 630** (1,91:1); **tối thiểu 600 × 315** để ra card lớn, dưới ngưỡng → thumbnail nhỏ; ≤ 8 MB, JPG/PNG [FACT] | 1200 × 630, tối thiểu 600 × 315 (dưới 200 × 200 thì không hiện gì) [FACT] | 1200 × 630 (1,91:1); JPG/PNG/WebP; ≤ 8 MB [FACT] | 1200 × 630; render rộng ~400 px; ≤ ~8 MB; cần `twitter:card=summary_large_image` để chắc chắn ra card lớn [FACT] | 1200 × 630 để ra preview lớn, **nếu nhỏ hơn sẽ tụt xuống thumbnail vuông nhỏ**; JPEG/PNG [FACT] |
| Cache preview | Có, khá lì — phải đổi URL hoặc chờ [FACT] | Có, rất lì; sửa bằng Facebook Sharing Debugger [FACT] | Dùng cache Facebook [FACT] | Cache theo URL [FACT] | Cache theo URL [FACT] |

**Nguồn:** [wiweb.vn — Open Graph và hiển thị link trên MXH VN](https://wiweb.vn/open-graph-la-gi/) · [ThemeWP — cập nhật thumbnail khi share lên Zalo/Facebook](https://themewp.vn/cap-nhat-thumbnail-khi-chia-se-link-website-len-zalo-facebook/) · [TopOnSeek — kích thước ảnh share Facebook & Zalo](https://www.toponseek.com/blogs/cap-nhat-kich-thuoc-share-hinh-facebook-zalo-chuan-nhat/) · [OGMagic — Social media preview image sizes 2026](https://ogmagic.dev/blog/social-media-preview-image-sizes) · [OpenGraph+ — Discord embed images 2026](https://opengraphplus.com/consumers/discord/images) · [OpenGraph+ — Telegram preview images 2026](https://opengraphplus.com/consumers/telegram/images) · [ogrilla — Instagram DM link preview specs 2026](https://www.ogrilla.com/blog/instagram-dm-link-preview-guide)

> ### PHÁT HIỆN 1 — LỖI THIẾT KẾ TRONG HƯỚNG D
>
> Cả **năm** nền tảng đều dùng **1,91:1 (1200 × 630)** cho OG preview. Card của hướng D là **4:5 (1080 × 1350)**.
>
> Nếu nhét ảnh 4:5 vào `og:image`, **mọi nền tảng đều crop nó về 1,91:1** — mất ~66% chiều cao, tức mất đúng phần lưới ảnh proof và dòng "3/5 đã nộp".
>
> **Hệ quả bắt buộc:** phải render **HAI ảnh cho mỗi lần chốt sổ**, không phải một:
> - `card_4x5.jpg` — 1080 × 1350 — để **dán như một tấm ảnh**
> - `og_1200x630.jpg` — bố cục ngang, chữ to hơn, ít thông tin hơn — để **làm preview của link**
>
> Chi phí: **+0,2 person-week** ở hạng mục số 5 trong bảng person-week của hướng D (satori/@vercel/og render hai template thay vì một). Rẻ. Nhưng nếu không phát hiện, mọi link chốt sổ sẽ hiện một card **bị cắt cụt** và toàn bộ giá trị "card ảnh 4:5 có mặt bạn mình" (giả định 45% tap-rate ở §9) bốc hơi.

---

### 2.3. Có chặn / cảnh báo domain lạ không?

| Nền tảng | Cơ chế chặn | Mức độ rủi ro cho Teemi |
|---|---|---|
| **Zalo** | **Có, và là nền tảng duy nhất trong 5 cái có blocklist domain công khai với quy trình gỡ.** Zalo hiện cảnh báo hoặc **chặn hoàn toàn** link vi phạm chính sách bảo mật; user thấy màn "Liên kết này đã bị chặn do vi phạm chính sách bảo mật chung của Zalo". Gỡ chặn: gửi yêu cầu tới `feedback@zalo.me` kèm domain + email đăng ký + lý do [FACT] | **CAO — rủi ro số 1 của cả hướng D** |
| **Messenger / Instagram** | Không có blocklist domain công khai cho link cá nhân, nhưng **có bộ lọc spam đọc nội dung tin nhắn**: cùng một tin nhắn đầu tiên chứa cùng một link gửi hàng loạt sẽ bị đẩy vào tab **Spam** ẩn [FACT] | **TRUNG BÌNH** — chỉ chạm khi phát tán hàng loạt bằng tin nhắn giống hệt nhau |
| **Discord** | Không chặn domain lạ; có AutoMod theo server do admin bật | **THẤP** |
| **Telegram** | Không chặn domain lạ | **THẤP** |

**Nguồn:** [Zalo Help — xử lý cảnh báo link lừa đảo](https://help.zalo.me/huong-dan/chuyen-muc/bao-mat-va-rieng-tu/xu-ly-canh-bao-link-lua-dao-tren-zalo/) · [Zalo Developers — cảnh báo liên kết bị chặn do vi phạm điều khoản](https://developers.zalo.me/community/detail/7976a59299d7708929c6) · [ThemeVIP — cách mở domain bị chặn bởi Zalo](https://themevip.net/cach-mo-ten-mien-domain-bi-chan-do-vi-pham-chinh-sach-bao-mat-chung-zalo/) · [SumGenius — Instagram DM link vào spam](https://sumgenius.ai/answers/instagram-dms-going-to-spam-message-requests)

Ngoài ra Zalo có quy trình **xác thực domain** bắt buộc (DNS TXT / file HTML / meta tag) cho mọi dịch vụ Zalo Platform — [Zalo For Developers — hướng dẫn xác thực domain](https://developers.zalo.me/docs/official-account/phu-luc/huong-dan-xac-thuc-domain). Đây là việc **phải làm ngay tuần này**, không phải khi launch.

---

### 2.4. Mở link ra webview trong app hay trình duyệt ngoài?

| Nền tảng | Mặc định | User đổi được không |
|---|---|---|
| **Zalo** | **In-app webview** | **Được.** Cá nhân → Cài đặt → **Quyền riêng tư** → **Tiện ích** → "**Chọn cách mở link**" → "Mở bằng trình duyệt web". Zalo cảnh báo rằng khi bật cái này thì **mất luôn cảnh báo link nghi ngờ** [FACT] |
| **Messenger** | **In-app webview** trên mobile | Có trên mobile (setting cũ "Open links in external browser"); **đã bị xoá trên bản desktop Microsoft Store** — bản đó dùng WebView2 và luôn mở Edge [FACT] |
| **Instagram** | **In-app webview** | Có, nhưng chôn sâu |
| **Discord** | In-app webview, **đổi được ngay trong Settings → App Settings → Web Browser**. iOS chỉ cho chọn Chrome / Safari / in-app. Tháng 04/2026 Discord vá lỗi Android khiến setting này không được áp dụng [FACT] | Được, dễ nhất trong 5 |
| **Telegram** | In-app webview, có toggle tắt | Được |

**Nguồn:** [FPT Shop — cách mở link trên Zalo bằng trình duyệt](https://fptshop.com.vn/tin-tuc/thu-thuat/cach-de-mo-lien-ket-tren-zalo-bang-trinh-duyet-web-164518) · [QuanTriMang — mở link Zalo bằng trình duyệt](https://quantrimang.com/cong-nghe/cach-mo-link-tren-zalo-bang-trinh-duyet-199742) · [Roboin — mở link ngoài trên Discord mobile (04/2026)](https://roboin.io/article/en/2026/04/20/how-to-open-links-in-an-external-browser-on-discord-mobile-app/) · [Microsoft Q&A — Messenger desktop dùng WebView2, luôn mở Edge](https://learn.microsoft.com/en-us/answers/questions/3960015/new-messenger-opens-links-in-edge-instead-of-defau)

**Kết luận mục này:** **cả 5 nền tảng đều mặc định in-app webview.** Nghĩa là mọi thứ ở mục 2.5 và mục 4 dưới đây áp dụng cho **tất cả**, không riêng Zalo.

---

### 2.5. Webview có cho chọn ảnh từ thư viện không (`<input type=file>`)?

Đây là bước 3 của core loop hướng D — **18 giây, "nộp proof"**. Nếu nó gãy thì sản phẩm gãy.

| Nền tảng / OS | Trạng thái | Bằng chứng |
|---|---|---|
| **Zalo webview — Android** | **KHÔNG TÌM ĐƯỢC tài liệu chính thức.** Zalo không công bố việc webview của họ có gắn `WebChromeClient.onShowFileChooser` hay không. **Phải test tay, không được giả định** | — |
| **Zalo webview — iOS** | KHÔNG TÌM ĐƯỢC. WKWebView hỗ trợ `<input type=file>` mặc định, nên nhiều khả năng chạy [suy luận] | — |
| **Messenger / Instagram webview — Android** | **CÓ, NHƯNG CÓ LỖI ĐÃ ĐƯỢC GHI NHẬN:** nếu ô upload có thuộc tính **`accept`**, nút bấm **hoàn toàn mất tác dụng** trên một số máy Android. Mở cùng trang đó ở trình duyệt ngoài thì hết lỗi [FACT] | [vielhuber — File upload in the Facebook In-App Browser](https://vielhuber.de/en/blog/file-upload-in-facebook-in-app-browser/) |
| **Facebook webview — iOS** | Lịch sử có bug crash khi `<input type=file>` **không có** thuộc tính `multiple` (báo cáo từ 2015, không rõ đã vá) | [FineUploader issue #1407](https://github.com/FineUploader/fine-uploader/issues/1407) |
| **Discord / Telegram webview** | Chạy bình thường [suy luận — không có báo cáo lỗi phổ biến] | — |

> ### PHÁT HIỆN 2 — HAI DÒNG CODE CỨU CẢ CORE LOOP
>
> ```html
> <!-- SAI: có accept → chết nút trên Messenger/Instagram Android -->
> <input type="file" accept="image/*">
>
> <!-- ĐÚNG: bỏ accept, thêm multiple -->
> <input type="file" multiple>
> ```
>
> Bỏ `accept` (né bug Meta Android) và thêm `multiple` (né bug Meta iOS), rồi **lọc MIME type bằng JavaScript sau khi user đã chọn file**. Đây là hai thay đổi **0 person-week** đứng giữa "core loop chạy" và "core loop chết im lặng trên hàng triệu máy" — và **không có tài liệu nào trong repo hiện tại nhắc tới nó**.

---

### 2.6. Thông báo khi có tin nhắn mới có đáng tin không?

| Nền tảng | Độ tin cậy | Ghi chú trung thực |
|---|---|---|
| **Zalo** | Cao nhất trong 5, nhưng **KHÔNG phải 100%** | Hướng D §6 nói Zalo là *"app duy nhất mà 100% ROM Việt whitelist sẵn"*. **Câu đó SAI.** Có hàng loạt bài hướng dẫn phổ thông về việc **Xiaomi/MIUI/HyperOS không báo tin nhắn Zalo**, phải tự bật "Tự khởi chạy" + tắt tiết kiệm pin; Vivo phải tắt "Tạm dừng hoạt động nếu không dùng" [FACT] |
| **Messenger** | Cao, cùng nhóm rủi ro ROM | Có bài hướng dẫn fix lỗi thông báo Messenger tương tự |
| **Instagram** | Trung bình | Group DM ít được ưu tiên |
| **Discord** | Trung bình–thấp trên ROM Việt | Discord nổi tiếng bị ROM Trung Quốc giết background |
| **Telegram** | Cao | Nhưng gần như không có mặt trong nhóm bạn VN |

**Nguồn:** [FastCare — Xiaomi không báo tin nhắn Zalo](https://fastcare.vn/blog/xiaomi-khong-bao-tin-nhan-zalo.html) · [CP-Hub — fix lỗi chậm thông báo Xiaomi 2025](https://cphub.vn/blogs/thu-thuat-cong-nghe/cach-fix-loi-cham-thong-bao-xiaomi-6-buoc-khac-phuc-triet-de-2025) · [MobileCity — fix lỗi thông báo Messenger](https://mobilecity.vn/tin-tuc/cach-fix-loi-thong-bao-messenger-tren-android-iphone.html)

> **Đính chính thẳng:** lợi thế thông báo của Zalo là **tương đối** (nó là app được user chăm chút whitelist nhất vì họ cần nó cho việc thật), **không phải tuyệt đối**. Giả thuyết H1 của hướng D (≥60% mở card trong 24h) vẫn là giả thuyết phải đo, không phải hệ quả hiển nhiên.

---

## 3. iOS vs ANDROID — KHÁC NHAU CHỖ NÀO

VN: **Android 60,38% · iOS 39,60%** (StatCounter T7/2026, dẫn lại trong r02). Không được bỏ bên nào.

| Vấn đề | iOS | Android | Ai thiệt |
|---|---|---|---|
| **`navigator.share()` trong in-app webview** | **CÓ** — WKWebView hỗ trợ [FACT] | **KHÔNG** — Android WebView không expose Web Share API [FACT] | **Android — mất nút Chia sẻ** |
| **`navigator.share({files})`** | Có (Safari/WKWebView 14+) | Ngay cả khi có `share`, Android WebView **thiếu `canShare()` và tham số files** [FACT] | **Android** |
| **`<a download>` / blob → lưu ảnh** | Hoạt động khá ổn trong WKWebView | **Không hoạt động mặc định** trong Android WebView nếu app chủ không gắn `DownloadListener`; blob URL còn tệ hơn từ Android 11 (Scoped Storage) [FACT] | **Android — mất luôn nút "Lưu ảnh"** |
| **`<input type=file>`** | Bug lịch sử khi thiếu `multiple` | Bug khi có `accept` (Meta) | Cả hai, kiểu khác nhau |
| **Zalo Mini App `chooseImage`** | `sourceType=camera` mở camera, `album` hiện popup | `camera` mở camera, `album` **mở thẳng hộp chọn ảnh** | Hành vi khác nhau → phải test riêng |
| **Instagram parse link trong DM** | Ổn | **Yếu hơn** — URL đôi khi hiện thành chữ đen thường, không thành card. Cách chữa: để URL trên một dòng riêng, có khoảng trắng bao quanh [FACT] | Android |
| **Discord chọn trình duyệt** | Chỉ Chrome / Safari / in-app | Tự do hơn | — |

**Nguồn:** [caniwebview — navigator.share theo từng webview](https://caniwebview.com/features/web-feature-share/) · [react-native-webview issue #1262 — Web Share không chạy trong WebView](https://github.com/react-native-webview/react-native-webview/issues/1262) · [Medium — Resolving Blob Download Issues in Android WebView](https://medium.com/@SrimanthChowdary/resolving-blob-download-issues-in-android-webview-a-comprehensive-guide-for-developers-ad103e0833bd) · [Zalo Platform Docs — chooseImage](https://docs.zaloplatforms.com/docs/MA/api/media/file/chooseImage) · [linkboo — Instagram link preview not showing 2026](https://link.boo/guides/instagram-link-preview-not-showing)

---

## 4. `navigator.share({files})` — CHẠY Ở ĐÂU, KHÔNG CHẠY Ở ĐÂU (2026)

| Môi trường | `navigator.share` | `share({files})` | Nguồn |
|---|---|---|---|
| Chrome desktop | Có (89+) | **Có** (89+) | caniuse |
| Chrome for Android (trình duyệt thật) | Có (61+) | **Có** | caniuse |
| Safari macOS | Có (14+) | **Có** (14+) | caniuse |
| Safari iOS (trình duyệt thật) | Có (12.2+) | **Có** (14+) | caniuse |
| Samsung Internet | Có | **Có** (11.1+) | caniuse |
| **Firefox / Firefox Android** | **Không** | **Không** | caniuse |
| **WKWebView (iOS in-app: Zalo, Messenger, IG, Discord, Telegram)** | **Có** | **Có** [suy luận từ việc WKWebView hỗ trợ đầy đủ] | caniwebview |
| **Android WebView (Android in-app: Zalo, Messenger, IG, Discord, Telegram)** | **KHÔNG** — MDN ghi không hỗ trợ; caniwebview ghi thiếu `canShare()`, tham số files và Permissions-Policy | **KHÔNG** | caniwebview, MDN, RN-WebView #1262 |
| Chrome Custom Tabs (Android) | Có (là Chrome thật) | Có | — |

Độ phủ toàn cầu của `share({files})` trên **trình duyệt thật**: **93,32%** ([caniuse](https://caniuse.com/mdn-api_navigator_share_data_files_parameter)). Con số đó **không áp dụng cho in-app webview** — và 100% traffic của hướng D đến từ in-app webview.

Yêu cầu bắt buộc: **HTTPS + transient activation** (phải gọi từ trong handler của một cú chạm thật, không gọi tự động) — [MDN Navigator.share](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share).

> ### PHÁT HIỆN 3 — THANG DỰ PHÒNG BỐN NẤC (bắt buộc, không phải tuỳ chọn)
>
> ```js
> // Nấc 1 — iOS in-app + mọi trình duyệt thật
> if (navigator.canShare?.({ files: [f] })) await navigator.share({ files: [f], text: caption });
> // Nấc 2 — chia sẻ link thay vì file (rộng hơn nhiều)
> else if (navigator.share) await navigator.share({ url, text: caption });
> // Nấc 3 — Zalo Mini App: openShareSheet({type:"image"}) — API native, không đụng Web Share
> // Nấc 4 — Android WebView trần: hiện ảnh <img> to giữa màn + dòng chữ
> //          "Nhấn giữ ảnh → Lưu ảnh → dán vào nhóm" + nút "Copy caption"
> ```
>
> **Nấc 4 là nấc phải hoạt động hoàn hảo**, vì nó phục vụ nhóm thiết bị đông nhất. Nhấn-giữ-để-lưu-ảnh là hành vi mà Gen Z VN đã làm sẵn — r02 §2.2 ghi rõ **"dùng ảnh chụp màn hình tin nhắn"** là một kỹ thuật biểu đạt **chính** của Gen Z VN. Nói cách khác: **nấc dự phòng thô sơ nhất lại là nấc hợp văn hoá nhất.** Bước 1 của core loop sẽ tốn **~12–15 giây trên Android**, không phải 5 giây [ước lượng]. Tổng core loop **~45–48 giây/người/ngày**, không phải 38.

---

## 5. KẾT LUẬN — CƠ CHẾ NÀY CÓ THẬT SỰ PLATFORM-AGNOSTIC KHÔNG?

| Thành phần | Platform-agnostic? | Nền tảng nào làm nó gãy |
|---|---|---|
| **A. Dán ảnh 4:5 vào nhóm** | **CÓ, hoàn toàn.** 5/5 nền tảng hiển thị đầy đủ | Không nền tảng nào. Chỉ cần chịu được nén của Zalo |
| **B. Link có OG preview** | **CÓ**, với điều kiện dùng ảnh 1200×630 riêng | Không nền tảng nào — **nhưng hướng D đang dùng sai tỉ lệ (mục 2.2)** |
| **C. Nút "Chia sẻ" sinh card** | **KHÔNG** | **Mọi in-app webview trên Android** — Zalo, Messenger, Instagram, Discord, Telegram, như nhau |
| **D. Nút "Lưu ảnh"** | **KHÔNG** | Y hệt C |
| **E. Chọn ảnh để nộp proof** | **Gần như có**, sau khi bỏ `accept` | Messenger/Instagram Android nếu để `accept` |
| **F. Thông báo** | Có (là noti của chính app chat) | ROM Xiaomi/Oppo/Vivo bóp mọi app như nhau |

**Trả lời trực tiếp founder:** đúng — **cơ chế này không phụ thuộc Zalo.** Nhưng lý do nó không phụ thuộc Zalo cũng chính là lý do nó **không được lợi gì từ Zalo**: nó là cơ chế của mẫu số chung nhỏ nhất. Điểm gãy duy nhất (C và D) là **Android WebView**, không phải VNG.

### Nếu Gen Z dùng Messenger nhiều hơn Zalo thì sao?

Trước hết, **số liệu không nói vậy** [FACT]:

| Chỉ số | Zalo | Messenger | Nguồn |
|---|---|---|---|
| Nền tảng nhắn tin **ưa thích nhất của Gen Z** (Q4/2025, công bố 02/2026) | **41%** | 27% (Facebook 23%) | [Decision Lab qua TechTimes](https://www.techtimes.vn/decision-lab-zalo-giu-vung-ngoi-dau-nen-tang-nhan-tin-tai-viet-nam-lot-top-10-pho-bien-toan-cau/) |
| Tỉ trọng **thời gian dùng** trong nhóm nhắn tin/gọi | **15,7%** | 6,0% | như trên |
| % dùng hàng tuần (Q&Me T3/2026) | **98%** | 88% | r02 §1.3 |
| % người ≤26 tuổi dùng | **96%** | — | Decision Lab |

Nhưng giả sử founder đúng cho **riêng ngữ cảnh nhóm bạn thân đùa giỡn** (một luận điểm khác hẳn với "app nào được dùng nhiều nhất" — và e01 là tài liệu phải trả lời nó, không phải tài liệu này). Câu hỏi kỹ thuật: **cơ chế card+link có chạy trên Messenger không?**

**Có. Và về mặt thuần kỹ thuật, Messenger TỐT HƠN Zalo ở 3 điểm, TỆ HƠN ở 3 điểm:**

| | Messenger tốt hơn | Messenger tệ hơn |
|---|---|---|
| 1 | **Nén ảnh nhẹ hơn ~2,6×** (2,6 MB vs 1,0 MB ở HD) → chữ trên card sắc nét hơn | **Bug `accept` trên webview Android** làm chết nút chọn ảnh — đã được ghi nhận, Zalo chưa có báo cáo tương tự |
| 2 | **Crawler OG trưởng thành nhất**, có Sharing Debugger công khai để bust cache | **Bộ lọc spam đọc nội dung tin nhắn** — link giống nhau gửi hàng loạt bị đẩy vào tab Spam |
| 3 | **Không có blocklist domain kiểu Zalo** cho link cá nhân | **Không có đường nâng cấp.** Group bot API của Messenger đã đóng vĩnh viễn; Zalo còn Mini App + Bot (xem mục 7) |

**Phán quyết:** nên **build web trung lập, không nhúng gì của Zalo ở MVP**, và để nút chia sẻ tự thích nghi theo môi trường. Nếu Bước 0 cho thấy nhóm bạn thật sự sống ở Messenger, **chuyển kênh tốn 0 person-week** — chỉ đổi chữ trong copy. Đó là lập luận mạnh nhất ủng hộ hướng D mà chính hướng D chưa nói ra: **nó là hướng duy nhất không phải chọn nền tảng trước khi biết câu trả lời.**

---

## 6. RỦI RO NỀN TẢNG — CÓ AI CHẶN ĐƯỢC CƠ CHẾ NÀY KHÔNG?

| # | Rủi ro | Xác suất | Sức sát thương | Tiền lệ / bằng chứng |
|---|---|---|---|---|
| 1 | **Zalo chặn domain** → user thấy màn cảnh báo, growth về 0 | Trung bình | **Chí mạng** | Có blocklist thật, có tiền lệ, có quy trình gỡ qua `feedback@zalo.me` [FACT] |
| 2 | **Meta đẩy link vào tab Spam** khi phát tán hàng loạt | Trung bình (chỉ khi làm growth bằng DM) | Cao | Meta công khai đọc nội dung tin để bắt spam [FACT] |
| 3 | **Nền tảng đóng API** | — | **Bằng 0 với cơ chế này** | Messenger đã đóng group bot API (2024–2026) — **và đó chính là bằng chứng cho luận điểm này**: cơ chế card+link không dùng API nào, nên **không có API nào để bị đóng** |
| 4 | **Instagram hạn chế link** | Cao nhưng không liên quan | Thấp | IG chỉ 11,7 triệu user VN (11,4%) — r02 đã kết luận "bỏ Instagram" |
| 5 | **Android WebView không đổi ý về Web Share** | Rất cao (hiện trạng nhiều năm) | Trung bình, đã có nấc 4 | caniwebview, MDN |
| 6 | **Cache OG preview lì** khi đổi thiết kế card | Cao | Thấp | Chữa bằng cách nhét hash vào URL ảnh |

**Điểm quan trọng nhất của mục này:** nền tảng **không thể "đóng" một cơ chế chỉ gồm ảnh + URL**, vì đóng nó nghĩa là đóng chính chức năng gửi ảnh và gửi link. Cái duy nhất họ chặn được là **domain cụ thể**. Vậy nên tài sản cần bảo vệ không phải là code — mà là **danh tiếng của domain**. Việc rẻ nhất và gấp nhất: đăng ký domain riêng, chạy HTTPS, có nội dung thật + trang ToS/Privacy tiếng Việt, **xác thực domain với Zalo Developers trước khi có user đầu tiên**, và **luôn giữ mã nhóm 6 ký tự gõ tay** làm đường thoát khi link bị chặn (hướng D §8 đã có, giữ nguyên).

---

## 7. ĐÍNH CHÍNH MỘT KẾT LUẬN SAI TRONG option-D §30

> option-D §0 ghi: *"**Zalo Mini App không biết nó đang ở trong nhóm nào.** Đây là phát hiện quan trọng nhất của mục này."*

**Kết luận đó SAI.** Bằng chứng lấy trực tiếp từ file định nghĩa kiểu của SDK chính thức `zmp-sdk@2.53.0` (tải từ unpkg ngày 04/09/2026):

```ts
type ContextInfo = {
  /** Ngữ cảnh hiện tại là người dùng hoặc nhóm chat. */
  type?: "USER_CHAT" | "GROUP_CHAT" | "";
  /** ID của người dùng hoặc nhóm chat tương ứng. */
  id?: string;
};

/**
 * API trả về thông tin ngữ cảnh của người dùng hoặc nhóm khi Mini App
 * được mở từ Menu mở rộng trong cửa sổ chat Zalo.
 * @minimumVersion Zalo Android: 22.06.02
 * @minimumVersion ZMP SDK: 2.22.0
 */
declare function getContextAsync(args?): Promise<ContextInfo | null>;
```

**Zalo Mini App CÓ biết nó đang ở nhóm nào** — trả về `type: "GROUP_CHAT"` kèm `id` của nhóm. Điều kiện: mini app phải được **mở từ Menu mở rộng trong cửa sổ chat**, không phải mở từ Mini App Store. [FACT — [mini.zalo.me/docs/api/getContextAsync](https://mini.zalo.me/docs/api/getContextAsync/), xác nhận bằng `index.d.ts` của SDK]

Ba giới hạn phải nói kèm, nếu không lại thành lạc quan quá đà:
1. Chỉ có **group id**, **không có danh sách thành viên** — vẫn phải tự dựng nhóm trong DB của mình.
2. `@minimumVersion` chỉ ghi **Zalo Android 22.06.02**, **không ghi phiên bản iOS** — nghĩa là hành vi trên iOS chưa được tài liệu bảo đảm [suy luận, phải test].
3. Nó không thay thế bot: mini app vẫn **không tự gửi được tin vào nhóm**, vẫn cần một con người bấm.

Ngoài ra, `openShareSheet` mạnh hơn tài liệu cũ mô tả — nó nhận **7 loại**: `text`, `image` (một hoặc **nhiều** `imageUrls`), `link` (có cờ `chatOnly`), `oa`, `gif`, `video`, `zmp_deep_link`; và trả về `status: 2` = "Đăng bài viết thành công qua cửa sổ chat". Tức **Zalo Mini App chia sẻ được ẢNH native**, không phải chỉ link — đây chính là **nấc 3** trong thang dự phòng ở mục 4, và nó **né hoàn toàn** vấn đề Android WebView. [FACT — `zmp-sdk@2.53.0/index.d.ts`]

**Hệ quả cho lộ trình:** "Nấc 1 — đóng gói Zalo Mini App (+2,0 PW)" trong option-D §11 có giá trị **cao hơn** những gì tài liệu đó tự đánh giá. Nó không chỉ đổi lấy `getUserID` và icon; nó **sửa đúng điểm gãy Android WebView** — thứ đắt nhất trong toàn bộ phân tích này.

---

## 8. VIỆC PHẢI LÀM — DANH SÁCH ĐÓNG, CÓ GIÁ

| # | Việc | Chi phí | Khi nào |
|---|---|---|---|
| 1 | Render **2 ảnh/lần chốt sổ**: `card 1080×1350` + `og 1200×630` | +0,2 PW | MVP, bắt buộc |
| 2 | `<input type="file" multiple>` — **bỏ `accept`**, lọc MIME bằng JS | 0 PW | MVP, bắt buộc |
| 3 | Thang chia sẻ 4 nấc (mục 4), nấc 4 phải đẹp | +0,3 PW | MVP, bắt buộc |
| 4 | Chữ trên card ≥ 48 px @1080 px, chịu được nén Zalo ~13× | 0 PW | MVP |
| 5 | `twitter:card=summary_large_image` + `og:image:width/height` (cho Discord + card lớn ở mọi nơi) | 0 PW | MVP |
| 6 | Hash trong URL ảnh OG để bust cache | 0 PW | MVP |
| 7 | Xác thực domain với Zalo Developers + ToS/Privacy tiếng Việt | ~0,1 PW | **Tuần này** |
| 8 | **Ma trận test tay: 5 nền tảng × 2 OS = 10 ô**, làm trong Bước 0, trước khi viết dòng code nào | ~4 giờ | **Bước 0** |
| | **Tổng thêm vào MVP** | **≈ +0,6 PW** (6,5 → **7,1 PW**) | |

Ô test quan trọng nhất trong 10 ô: **Zalo webview trên một máy Xiaomi/Oppo — `<input type=file>` có mở được thư viện ảnh không.** Nếu ô đó fail và không có cách chữa, **bước 3 của core loop chết**, và hướng D phải đi thẳng lên Zalo Mini App (dùng `chooseImage`) thay vì web thuần — tức +2,0 PW và một vòng kiểm duyệt 3–5 ngày ngay từ MVP.

---

## 9. KHÔNG TÌM ĐƯỢC

- Tài liệu chính thức của Zalo về **hành vi webview** của họ: có `onShowFileChooser` không, có hỗ trợ `<a download>` không, có expose `navigator.share` không. **Không công bố. Bắt buộc test tay.**
- Số liệu định lượng về **tỉ lệ crop ảnh dọc trong bong bóng chat Zalo**.
- Số liệu **Telegram / Discord ở VN** đủ tin cậy để đưa vào quyết định — cả hai đều nằm ngoài top app Q&Me 2026.
- Xác nhận bug `<input type=file>` thiếu `multiple` trên **Facebook iOS** còn tồn tại năm 2026 hay đã vá (nguồn duy nhất là issue từ 2015).
- `@minimumVersion` **iOS** của `getContextAsync`.
