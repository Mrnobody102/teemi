# Ngôn ngữ thiết kế UI

_Viết 22/10/2026. Chủ quyền: **tone + UX**. Hằng số lấy từ `docs/plan/_rulings.md`
mục A; chuỗi chữ chính xác lấy từ `docs/plan/08-ux-flow-va-tone.md`._

## 0. Luật gốc, và chỗ bản dựng đầu tiên đã trượt

DOC 2 §18.1 chốt tỉ lệ:

> Doodle nguệch ngoạc, vui nhộn, bựa nhẹ, hơi ngốc, dễ meme. **Nhưng UX vẫn phải sạch.**
> **70% UX sạch, rõ, nhanh · 30% doodle/meme/personality**

Bản dựng 22/10 là **100% sạch, 0% personality** — tức là trượt luật này, và rơi
đúng vào "habit tracker khô" mà DOC 1 §5 dặn tránh. Tài liệu này sửa bằng cách
nói rõ **30% đó nằm ở đâu và không được nằm ở đâu**, chứ không bằng cách rắc
doodle đều khắp.

## 1. Chia bề mặt: cái gì sạch, cái gì có cá tính

| 70% phải sạch tuyệt đối | Vì sao |
|---|---|
| Hàng ảnh HÔM NAY | Ảnh của bạn mình **là nội dung**. Không trang trí lên nội dung |
| Ba con số | *"Ba dữ kiện, không tính từ, không cảm xúc"* |
| Nút chính (Nộp · Chốt sổ · Vào sổ này) | Đường đi 11–15 giây. Mọi thứ vui đặt ở đây đều là thuế |
| Form (tên sổ · tên hiển thị · cổng tuổi) | Bàn phím tiếng Việt trên máy yếu đã đủ chậm |
| Màn 7 · Chính sách & an toàn | Nghĩa vụ pháp lý. Doodle ở đây làm nó mất tin cậy |

| 30% mang cá tính | Cách làm |
|---|---|
| **Chữ** | Rẻ nhất, hiệu quả nhất. Bank ngôn ngữ ở DOC 2 §18.2 |
| **Card** | Nhiều cá tính nhất trên mỗi pixel — nó là bề mặt chính (xem `00` §2.1) |
| **Trạng thái trống & chờ** | `Chưa có tấm nào hôm nay.` · ô `+ Của tao` · dải cứu hộ 48 giờ |
| **Nhãn XONG / TOANG** | Khoảnh khắc kịch tính duy nhất của vòng lặp. Cho nó sức nặng |
| **Một nhân vật doodle** | Xuất hiện ở **đúng ba chỗ**: trạng thái trống · kết season · chân card |

## 2. Cấm tuyệt đối

- **Không đếm ngược, không đỏ báo động, không rung.** Dải cứu hộ 48 giờ *"không
  đếm ngược, không đỏ, không rung, không đổi chữ theo thời gian"*.
- **Không doodle đè lên ảnh người thật.**
- **Không chữ hay hình nào trỏ vào người VẮNG.** Người không nộp phải **vô hình**:
  không tên, không ô xám, không mẫu số `3/5`.
- **Không animation chen vào đường nộp proof.** Nộp xong là xong; thanh Hoàn tác
  10 giây là phản hồi duy nhất được phép.
- **Không danh hiệu gán cho người cụ thể** (*Báo Thủ*, *Thánh Lươn*…). Bank ngôn
  ngữ DOC 2 §18.2 chỉ được dùng cho **sổ** và cho **boss**, không cho người.
- **Không font chữ web trong app shell** — xem §5.

## 3. Bảng màu

Sổ tay viết tay: giấy ấm, mực bút bi, hai màu bút lông cho hai nhãn, một màu
highlight. **Không màu nào mang nghĩa nguy hiểm** — TOANG dùng màu đất, không đỏ.

| Token | Sáng | Tối | Dùng cho |
|---|---|---|---|
| `paper` | `#FBF9F4` | `#14130F` | nền trang |
| `surface` | `#F2EDE2` | `#1E1C16` | ô ảnh, thẻ, input |
| `ink` | `#16140F` | `#F2EFE6` | chữ chính |
| `muted` | `#6B6255` | `#9A9183` | ba con số, chú thích |
| `line` | `#E0D9C9` | `#2E2A22` | viền, đường kẻ |
| `done` | `#2F6B45` | `#7FB08C` | **chỉ** nhãn XONG |
| `toang` | `#A4542A` | `#D08A5C` | **chỉ** nhãn TOANG |
| `accent` | `#20324A` | `#8FB4D8` | nút chính (mực bút bi) |
| `marker` | `#F5D547` | `#C9A838` | gạch highlight tay, **chỉ sau một từ**, tối thì giảm độ chói |

**Chế độ tối là hạng nhất, không phải phần thêm.** Ngày của sổ cắt lúc 04:00 và
người ta nộp tấm cuối lúc nằm trên giường — màn hình sáng trắng lúc 23:50 là lỗi
thiết kế, không phải lựa chọn.

## 4. Chữ

Thang: **11 · 13 · 15 · 17 · 22 · 28**. Không có cỡ nào khác.

| Vai trò | Cỡ / đậm |
|---|---|
| Tên sổ | 17 semibold |
| Ba con số | 13 regular, màu `muted` — cố ý nhỏ và nhạt |
| Nhãn mục (`HÔM NAY`) | 11 semibold, letter-spacing rộng |
| Chữ thân | 15 |
| Nút | 15 medium |
| **Nhãn XONG / TOANG** | **17 semibold** |
| Mã sổ | 13 mono, letter-spacing rộng |

## 5. Font — và một mẹo kiếm được cá tính miễn phí

App shell dùng **font hệ thống**, không tải font web. Ngân sách first paint là
**≤120 KB gzip** trên máy ≤3 GB RAM trong webview; một file font là 20–40 KB đổi
lấy một chút duyên — không đáng.

Nhưng **card được render ở server bằng satori**. Font của card nằm trên server và
xuất ra PNG, **client trả 0 KB**. Nên:

> **Một font viết tay duy nhất, chỉ dùng trên card**, cho tên sổ và dòng recap.
> App shell: font hệ thống. Chi phí phía người dùng: bằng không.

Đây là chỗ đổi được nhiều cá tính nhất với giá thấp nhất trong cả sản phẩm, và
nó đặt cá tính đúng vào bề mặt mà người ngoài nhóm sẽ thấy.

## 6. Doodle

- **Inline SVG, nét vẽ (`stroke`), dùng `currentColor`** — tự đúng ở cả hai theme.
- **≤1,5 KB mỗi hình**, tối đa **2 hình một màn**.
- Không bao giờ animate trên đường nộp proof.
- Nhân vật: **doodle gốc, lấy cảm hứng anime, không copy IP** (DOC 2 §18.4 —
  không Naruto/Luffy/Goku/Gojo, không tên và không trang phục có bản quyền).

## 7. Bố cục & ngón tay

- Một tay, dùng buổi tối. **Hành động chính nằm ở 1/3 dưới màn hình.**
- Vùng chạm tối thiểu **44 × 44**.
- `env(safe-area-inset-*)` cho mọi thanh dính cạnh — webview không bảo đảm chrome.
- Nội dung `max-width: 420px`, canh giữa; lề hai bên **≥16 px** ở mọi độ rộng.
- Lưới ảnh hôm nay **3 cột**; ở 360 px mỗi ô ≈ 104 px, tỉ lệ 4:5.
- Lưới trên **card thích ứng** theo số người đã nộp: 1 · 1×2 · 2×2 · 2×3 · **2×4**.
  Trần sổ là 8 người nên nhánh 2×4 là **bắt buộc** — lưới 6 ô cố định sẽ im lặng
  loại 2 người đã nộp khỏi card, tức vi phạm P2. Snapshot test phải có fixture 8 người.

## 8. Ngân sách hiệu năng — đã đo, và đã phải chia hai tầng

Ngân sách gốc ở hồ sơ là **≤120 KB gzip cho first paint**. Đo thật ngày 22/10
trên bản dựng Next 16 + React 19:

| Trang | JS/CSS tải về | Tổng gzip |
|---|---|---|
| React page (`/so`) | 9 asset | **180,7 KB** — vượt 51% |
| trong đó riêng runtime React | 3 chunk | 153,7 KB |
| code sản phẩm (HTML của trang) | — | 3,3 KB |

**Kết luận: 120 KB không khả thi với Next.js App Router + React.** Khoảng 150 KB
là sàn của stack này, và nó bị tiêu hết trước khi có dòng code sản phẩm nào. Giữ
nguyên con số 120 KB cho mọi trang sẽ thành một ngân sách bị vi phạm từ ngày đầu
rồi bị bỏ qua — tệ hơn là không có ngân sách.

⇒ **Chia hai tầng, theo ai là người mở trang:**

| Tầng | Trang | Ngân sách | Lý do |
|---|---|---|---|
| **Công khai** | `/s/<slug>` — người LẠ mở từ card trong nhóm chat | **≤20 KB gzip, 0 KB JS** | Đây là cửa phễu cold start, bề mặt quyết định ~45% tỉ lệ chạm, trên máy tầm thấp trong webview. Nó chỉ-đọc nên không cần hydrate |
| **Thành viên** | 6 màn còn lại | **≤200 KB gzip**, trả một lần rồi cache | Người đã vào sổ sẽ mở lại hằng ngày; runtime được cache sau lần đầu |

Trang công khai đã được làm đúng tầng đó: **1,6 KB gzip, 0 asset** — nhẹ hơn bản
React **113 lần**. Cách làm: nó là **Route Handler trả HTML thuần**
(`src/app/s/[slug]/route.ts` + `src/ui/screens/so-cong-khai.ts`), không phải React
page, vì page nào cũng bị Next hydrate. Next chặn `react-dom/server` trong App
Router nên HTML được dựng bằng template, và **mọi dữ liệu người dùng đi qua
`esc()`**.

`tests/trang-cong-khai.test.ts` canh bảy tính chất của trang này — không
`<script>`, không `/_next/static`, không `<link>`, không font web, có `noindex`,
chỉ đúng một thẻ `<a>`, ảnh mờ 12px — để không ai vô tình biến nó về React page.

Các ràng buộc còn lại giữ nguyên:

| | |
|---|---|
| Font web trong shell | **0** |
| Thư viện animation / state ở MVP-0 | **0** — Server Components mặc định |
| Ảnh trong lưới | **chỉ** thumbnail 320px ~18 KB. Không bao giờ nạp ảnh gốc vào lưới |
| Card PNG | ≤150 KB |
| Nộp proof | 11–15 giây trên máy tầm trung, **đo trên máy thật** |

Lý do để những con số này là ràng buộc cứng: Lapse gọi được 30 triệu đô và vẫn
phải gỡ toàn bộ tính năng social vào 11/2025 vì chi phí hạ tầng media.

## 9. Bộ component

| Component | Ghi chú |
|---|---|
| `StatLine` | ba con số. Không icon, không màu |
| `ProofTile` | ảnh 4:5 + tên + nhãn. Chỉ render người **đã** nộp |
| `MyTile` | ô `+ Của tao`. **Chỉ hiện khi mình chưa nộp hôm nay** |
| `LabelButton` | XONG / TOANG. Chạm = gửi (UX-1). Không có nút Gửi thứ ba |
| `UndoBar` | 10 giây, phản hồi duy nhất sau khi nộp |
| `PrimaryAction` | nút dính đáy, trong safe-area |
| `Card` | 4:5 render server. Cộng một bản 1200×630 cho OG (mọi nền tảng crop về 1,91:1) |
| `RecapLine` | một dòng tường thuật trên card, từ phrase bank viết tay |
| `ReactionRow` | nhãn cố định, một chạm, **không** đếm số công khai |
| `Doodle` | inline SVG, `currentColor` |
| `EmptyState` | chữ + đúng một doodle |
| `PolicyBlock` | màn 7. Không doodle. In **cả hai** mốc SLA: 48h và 24h/6h |

`RecapLine` và `ReactionRow` phục vụ hai lớp đang thiếu (L4, L2 ở `00` §3) và
**chờ founder chốt** trước khi build.

## 10. Thang dự phòng chia sẻ — không phải chi tiết nhỏ

`navigator.share` **không chạy trong bất kỳ in-app webview Android nào** (Zalo,
Messenger, Instagram, Discord, Telegram như nhau — lỗi của Android, đổi kênh
không cứu được). Mọi màn có card phải có sẵn thang dự phòng, hiển thị **thường
trực** chứ không chỉ khi lỗi:

> Nút chia sẻ không hiện? Nhấn giữ vào card rồi chọn Lưu ảnh.

Và mã sổ 6 ký tự phải **nằm trong pixel** của card, font mono, tương phản ≥4,5:1 —
đó là đường thoát hiểm duy nhất sống sót nếu Zalo chặn domain.
