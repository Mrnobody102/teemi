# Ngôn ngữ thiết kế UI

_Viết 22/10/2026. Chủ quyền: **tone + UX**. Hằng số lấy từ `docs/plan/_rulings.md`
mục A; chuỗi chữ chính xác lấy từ `docs/plan/08-ux-flow-va-tone.md`._

## 0. Luật gốc, và chỗ bản dựng đầu tiên đã trượt

DOC 2 §18.1 chốt tỉ lệ:

> Doodle nguệch ngoạc, vui nhộn, bựa nhẹ, hơi ngốc, dễ meme. **Nhưng UX vẫn phải sạch.**
> **70% UX sạch, rõ, nhanh · 30% doodle/meme/personality**

Bản dựng đầu tiên (22/10) là **100% sạch, 0% personality** — trượt luật này,
rơi đúng vào "habit tracker khô" mà DOC 1 §5 dặn tránh. Bản hiện tại sửa bằng
cách nói rõ **30% đó nằm ở đâu và không được nằm ở đâu**, chứ không rắc doodle
đều khắp. Mọi quyết định dưới đây đã được **kiểm bằng ảnh chụp màn hình thật**
(Playwright, 360×780, cả sáng lẫn tối), không chỉ đọc code.

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

Sổ tay viết tay: giấy ấm chấm bi, mực bút bi, bút highlight vàng, hai màu bút
lông cho hai nhãn. **Không màu nào mang nghĩa nguy hiểm** — TOANG màu đất, không đỏ.

| Token | Sáng | Tối | Dùng cho |
|---|---|---|---|
| `paper` | `#FBF9F4` | `#14130F` | nền trang, chấm bi `dot` 18px |
| `surface` · `frame` | `#F2EDE2` · `#FFFDF8` | `#1E1C16` · `#23201A` | ô nhập · khung polaroid, nút phụ |
| `ink` | `#16140F` | `#F2EFE6` | chữ, **mọi viền vẽ tay** |
| `muted` · `line` | `#6B6255` · `#E0D9C9` | `#9A9183` · `#2E2A22` | ba con số, chú thích · đường kẻ |
| `done` | `#2F6B45` | `#7FB08C` | **chỉ** nhãn XONG |
| `toang` | `#A4542A` | `#D08A5C` | **chỉ** nhãn TOANG |
| `marker` | `#F5D547` | `#D9BB3F` | nút chính, thân linh vật, gạch highlight sau **một** cụm từ |
| `shadow` | `#16140F` | `#4A4438` | bóng cứng của nút sticker. Ở theme tối **không được** là đen — đen trên nền gần đen thì không thấy, nút trông phẳng (thấy khi chụp màn hình) |

**Chế độ tối là hạng nhất, không phải phần thêm.** Ngày của sổ cắt lúc 04:00 và
người ta nộp tấm cuối lúc nằm trên giường.

**Ba tiện ích vẽ tay, 0 JS, 0 ảnh** (`src/app/globals.css`):

| | |
|---|---|
| `.hand` · `.hand-2` | viền mực 2px, `border-radius` bất đối xứng → bốn góc lệch nhau như nét bút. Hai biến thể để hai ô cạnh nhau không giống hệt |
| `.sticker` | bóng cứng lệch 3px; ấn xuống thì bóng mất. Tắt nhún khi `prefers-reduced-motion` |
| `.polaroid` + `.tape` | ảnh nằm TRONG khung; băng dính trên **mép khung**, chừa 5px trước ảnh. Bản đầu đè lên ảnh 1px — sửa sau khi chụp màn hình |

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

## 5. Font — Patrick Hand, tự cắt còn 23 KB

So 6 font viết tay có subset tiếng Việt **bằng chính chữ của sản phẩm** (chi
tiết: `src/ui/fonts/README.md`):

- **Caveat** — font tay phổ biến nhất — **không có dấu tiếng Việt**. Loại ngay.
- Sriracha nghiêng khó đọc; Mali, Shantell Sans quá rộng (tên sổ xuống dòng ở
  380px); Itim sạch quá, mất chất doodle.
- **Pangolin** đẹp nhất nhưng **58 KB** sau khi cắt — rìa răng cưa là nhiều điểm vẽ.
- **Patrick Hand — chọn.** Cắt còn 241 ký tự (đủ bảng chữ tiếng Việt hoa/thường,
  ASCII, dấu câu) → **23 KB**, nhẹ hơn Pangolin 2,5 lần. OFL, không khai báo
  Reserved Font Name nên được cắt và giữ tên.

Subset sẵn của Google Fonts không dùng được: tiếng Việt cần **cả** subset `latin`
**lẫn** `vietnamese`, vì chữ cái gốc nằm ở `latin` (riêng `latin` của Pangolin
là 72,9 KB).

**Chỉ dùng cho chữ trang trí:** tên sổ, tiêu đề, nhãn XONG/TOANG, nút, trạng thái
trống. Form, chữ thân, ba con số, màn chính sách dùng font hệ thống — luật 70/30.
`display: swap` nên chữ hiện ngay bằng font hệ thống, không bao giờ chờ font.

Trang công khai **không** dùng font tay: đó là một request + 23 KB, đúng thứ
trang đó không được trả. Chất vẽ tay ở đó đến từ viền, khung polaroid, nút
sticker và linh vật SVG nội tuyến.

## 6. Doodle

`src/ui/doodle.tsx`. Inline SVG, nét `currentColor` hoặc biến theme → đúng ở cả
hai theme mà không cần bản riêng.

**Linh vật:** một cục tròn vàng màu bút highlight, viền mực, má hồng. Ba dáng:
`ngu` (cả sổ chưa ai nộp) · `vui` · `ngo` (ngó ra). Không tên, không lời thoại —
nó là nhân vật phụ, không được thành "giọng" của app nói với người dùng. Doodle
gốc, không copy IP (DOC 2 §18.4).

**Icon nhãn được VẼ, không dùng emoji.** Emoji 💀 hiện thành **ô vuông rỗng** trên
máy không có font emoji — thấy tận mắt ở ảnh chụp đầu tiên — và mỗi hãng điện
thoại vẽ emoji một kiểu. Nhãn TOANG không được phụ thuộc vào điều đó.

- Tối đa **2 linh vật một màn**; icon nhãn không tính.
- Linh vật ở: trạng thái trống · dòng van nghỉ màn 1 · ngó từ **mép** card.
- **Không bao giờ** đè lên ảnh của người thật; không animate trên đường nộp.

## 7. Bố cục & ngón tay

- Một tay, dùng buổi tối. **Hành động chính nằm ở 1/3 dưới màn hình.**
- Vùng chạm tối thiểu **44 × 44**.
- `env(safe-area-inset-*)` cho mọi thanh dính cạnh — webview không bảo đảm chrome.
- Nội dung `max-width: 420px`, canh giữa; lề hai bên **≥16 px** ở mọi độ rộng.
- Lưới ảnh hôm nay **3 cột**; ở 360 px mỗi ô ≈ 104 px, tỉ lệ 4:5.
- Lưới trên **card thích ứng** theo số người đã nộp: 1 · 1×2 · 2×2 · 2×3 · **2×4**.
  Trần sổ là 8 người nên nhánh 2×4 là **bắt buộc** — lưới 6 ô cố định sẽ im lặng
  loại 2 người đã nộp khỏi card, tức vi phạm P2. Snapshot test phải có fixture 8 người.

## 8. Ngân sách hiệu năng — hai chỉ số, không phải một

**Đính chính:** bản trước gọi con số 181 KB là "first paint" và kết luận ngân
sách 120 KB không khả thi. **Sai tên chỉ số.** Next xuất toàn bộ JS dạng `async`
— không chặn lần vẽ đầu. Thứ chặn render chỉ là HTML + một file CSS. Đo lại
(22/10, gzip, sau khi thêm font):

| Trang | **First paint** (HTML + CSS chặn render) | **Tổng tải** (thêm JS async + font) |
|---|---|---|
| `/s/<slug>` công khai | **2,4 KB** | **2,4 KB** — 0 JS, 0 font |
| `/so`, `/card`, `/nop` | **~9 KB** | **~205 KB** — 178 KB JS + 22 KB font |

| Chỉ số | Ngân sách | Hiện tại |
|---|---|---|
| First paint, mọi trang | **≤120 KB** (hồ sơ) | ✅ ≤9,3 KB |
| Tổng tải, trang công khai | **≤20 KB, 0 JS** | ✅ 2,4 KB |
| Tổng tải, trang thành viên | **≤200 KB**, trả một lần rồi cache | ⚠️ **205 KB — vượt 5 KB vì font** |

**Vì sao trang công khai vẫn phải 0 JS** dù first paint của React page đã nhỏ:
người lạ mở từ card trên máy ≤3 GB RAM không được phải tải và **chạy** 178 KB
JavaScript chỉ để xem một trang chỉ-đọc mà có thể họ không bao giờ vào. Nó là
Route Handler trả HTML thuần (`src/app/s/[slug]/route.ts`), vì page nào cũng bị
Next hydrate; Next chặn `react-dom/server` trong App Router nên HTML dựng bằng
template, mọi dữ liệu người dùng qua `esc()`. `tests/trang-cong-khai.test.ts` canh
7 tính chất.

**5 KB vượt ở trang thành viên — chưa cắt, có lý do.** Đòn bẩy rẻ nhất là bỏ ~67
chữ hoa có dấu khỏi font (≈6 KB). Không làm vì tên người Việt mở đầu bằng chữ
hoa có dấu rất thường (*Ánh, Ân, Ước, Ổi*) — cắt đi thì tên đó vẽ nửa bằng font
tay, nửa bằng font hệ thống. Xem lại khi có số liệu thật về mạng của người dùng.

Các ràng buộc còn lại giữ nguyên:

| | |
|---|---|
| Thư viện animation / state ở MVP-0 | **0** — Server Components mặc định |
| Ảnh trong lưới | **chỉ** thumbnail 320px ~18 KB, không bao giờ ảnh gốc |
| Card PNG | ≤150 KB |
| Nộp proof | 11–15 giây trên máy tầm trung, **đo trên máy thật** |

## 9. Bộ component

| Component | File | Ghi chú |
|---|---|---|
| `Shell` | `src/ui/shell.tsx` | tiêu đề · nội dung · thanh hành động **dính đáy, trong safe-area** |
| `PrimaryButton` · `SecondaryButton` | `shell.tsx` | sticker vàng / sticker giấy, cao ≥48px |
| `ProofTile` · `LabelMark` | `src/ui/proof-tile.tsx` | polaroid nghiêng xen kẽ; chỉ render người **đã** nộp |
| `Mascot` · `Icon*` | `src/ui/doodle.tsx` | §6 |
| `cardGrid` | `src/ui/card-layout.ts` | bố cục card bằng **flexbox + px tính sẵn** — satori chỉ hỗ trợ flex, nên PNG thật dùng lại đúng thuật toán này |
| `renderSoCongKhai` | `src/ui/screens/so-cong-khai.ts` | trang công khai, HTML thuần |

**`cardGrid` sửa hai lỗi thấy khi chụp màn hình:** (1) card khoá 4:5 với
`overflow:hidden`, ảnh to đẩy **mã sổ** ra khỏi khung — mất đường thoát hiểm
UX-2; (2) 3 ảnh trong lưới 2×2 để lại ô trống trông như "thiếu một người" — vi
phạm P2. Giờ kích thước ô tính từ chiều cao còn lại và hàng cuối căn giữa.
`tests/card-layout.test.ts` kiểm 1…8 người, gồm fixture 8 người bắt buộc.

Chưa có, chờ founder chốt (`00` §3): `RecapLine` (L4) · `ReactionRow` (L2) · `UndoBar`.

## 10. Thang dự phòng chia sẻ — không phải chi tiết nhỏ

`navigator.share` **không chạy trong bất kỳ in-app webview Android nào** (Zalo,
Messenger, Instagram, Discord, Telegram như nhau — lỗi của Android, đổi kênh
không cứu được). Mọi màn có card phải có sẵn thang dự phòng, hiển thị **thường
trực** chứ không chỉ khi lỗi:

> Nút chia sẻ không hiện? Nhấn giữ vào card rồi chọn Lưu ảnh.

Và mã sổ 6 ký tự phải **nằm trong pixel** của card, font mono, tương phản ≥4,5:1 —
đó là đường thoát hiểm duy nhất sống sót nếu Zalo chặn domain.
