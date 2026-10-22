# Tầm nhìn hệ thống

_Viết 22/10/2026, sau khi DOC 2 và DOC 3 được đưa vào repo._

Tài liệu này đối chiếu **bản thảo gốc** (`docs/00-source/`, đủ 3 DOC) với
**nghiên cứu/phản biện** (`docs/research/`, `docs/critique/`) và **code đã có**
(`src/`), rồi đề xuất một hệ thống nhất quán.

> **Trạng thái: ĐỀ XUẤT.** Bốn cổng F-01…F-04 và D-01…D-10 vẫn thuộc founder.
> Chỗ nào là đề xuất thì ghi 🟡, chỗ nào đã được chứng minh thì ghi ✅.

## 1. Vấn đề cần giải, phát biểu lại cho đúng

Core loop gốc có **6 nhịp**: kèo riêng → proof → cà khịa → boss chung → recap → memory.
Kế hoạch hiện tại giữ **2 nhịp** (kèo riêng, proof), treo 1 (boss), cắt 3.

Cắt từng nhịp đều có lý do riêng hợp lý. Nhưng cộng lại thì chúng xoá hết nguồn
cảm xúc, và sản phẩm còn lại đúng là thứ DOC 1 §5 dặn đừng làm — *"không có cảm
xúc xã hội, không có câu chuyện để kể, không tạo ra kỷ niệm"*.

Nặng hơn, có một mâu thuẫn nằm trong chính hồ sơ:

- `r01` §6.3 ✅ — ba lợi thế phải bảo vệ *"bằng mọi giá"*, số 1 là **boss chung tạo
  progression chống novelty decay**. *"Nếu bất kỳ điều nào trong 3 điều trên không
  đúng, Teemi trở thành xác thứ 8."*
- `c-core-thesis` §180 ✅ — nếu boss bị gỡ thì **"nguồn lực chuyển hết sang
  Timeline/Memory Capsule"**.
- Hiện tại **cả hai đều không có**. Cơ chế chống "hết mới lạ là hết lý do mở app"
  đang bằng 0, trong khi 0/7 app cùng thể loại giữ được đà (BeReal −48% DAU/4
  tháng · Gas 1M DAU → 2.900 tải/tháng trong 12 tháng).

**Hệ thống phải mang ít nhất một trong hai cơ chế đó.** Phần còn lại của tài
liệu này tìm cách mang cả hai với chi phí thấp nhất.

## 2. Bốn quyết định kiến trúc

### 2.1. 🟡 Card trong nhóm chat là bề mặt chính, không phải sản phẩm phụ

`r01` ✅ chốt điều quan trọng nhất về Locket: nó là app duy nhất chưa từng sụp
**vì nó là utility (widget), không phải novelty**. Widget biến "phải mở app"
thành "liếc là thấy".

Bản web **không có widget**. Nhưng nó có một bề mặt tương đương mà hồ sơ đã tự
tìm ra: **tấm card nằm trong nhóm chat**. Phần lớn thành viên sẽ gặp Teemi dưới
dạng một card trong Zalo nhiều hơn là một trang họ chủ động mở.

⇒ Card không phải thứ xuất ra sau khi dùng app. **Card là màn hình chính.**
Ngân sách thiết kế phải chia theo đúng thứ tự đó.

**Hệ quả thiết kế quan trọng nhất:** dòng **recap tường thuật đặt LÊN card**, không
dựng màn riêng. Nó khôi phục nhịp "recap" của bản gốc với chi phí gần bằng 0 màn
hình, và làm card đáng dán hơn — tức là bơm thẳng vào cơ chế cold start.

### 2.2. 🟡 Chuỗi của sổ đã làm xong việc của boss. Boss còn lại đúng một việc: vạch đích

DOC 2 §9.1 nói việc của boss là *"biến việc mỗi người hoàn thành cam kết riêng
thành cảm giác cả nhóm cùng đánh một mục tiêu chung"*.

Sản phẩm hiện tại **đã làm việc đó rồi**: `Ngày thứ 34 · 71 tấm · chuỗi 6` là một
thanh tiến độ chung, đơn điệu tăng, công khai trong sổ. Boss không cần thiết cho
mục đích này.

Thứ boss thêm được mà chuỗi không có: **một vạch đích, một khoảnh khắc hạ được,
và một cái cớ để ăn mừng** — đúng những thứ nuôi lớp ký ức (DOC 2 §10.2: *"Boss
đầu tiên bị diệt"*, *"After Quest: đi ăn lẩu"*).

⇒ Thiết kế lại boss thành **cơ chế season/vạch đích**, không phải cơ chế tính điểm:

| | |
|---|---|
| HP | **chỉ giảm**, suy ra từ số ngày sổ đã tính. Không có đường hồi máu nên không thể sai số học |
| Thời hạn | season có deadline (`r01` §7 ✅: raid Pokémon Go, Habitica quest — boss hoạt động khi là *event có thời hạn*, không phải trạng thái nền vĩnh viễn) |
| Người hụt | **không làm boss hồi máu**, không sinh tội tập thể — đúng chỗ Habitica đã mất người |
| Chi phí | một display suy ra, không phải state mới |

Cách này tháo được bế tắc F-02: nó **không phải** "giữ boss" cũng **không phải**
"bỏ boss", nên không vi phạm ADR-004 F-02, và nó giữ được lợi thế số 1 ở `r01`.

### 2.3. 🟡 Reaction không phải tính năng chat. Nó là tính năng ký ức

Lý do cắt reaction là *"Zalo/Messenger làm tốt hơn"*. Đúng — và `r01` ✅ còn nói
đối thủ nguy hiểm nhất của Teemi chính là group chat. Dựng một khung chat yếu
cạnh một khung chat mạnh thì chắc chắn thua.

Nhưng reaction làm được một việc mà chat **không** làm được: nó **dính vĩnh viễn
vào một tấm proof cụ thể** và trở thành phần của timeline. Một câu cà khịa trong
Zalo trôi mất sau một ngày. `c-social-harm` ✅ đã dừng đúng ở kết luận này:
*"Roast không vào timeline. Roast là ephemeral, TTL 72h. Memory Capsule chỉ lấy
proof + reaction tích cực."*

⇒ Reaction giữ lại dưới dạng hẹp: **bộ nhãn cố định, một chạm, gắn vào proof,
nuôi lớp ký ức.** Không ô text tự do, không đếm số công khai, không thông báo.

### 2.4. ✅ Web-first là quyết định về THỨ TỰ, không phải về bản chất sản phẩm

Bản gốc nói rõ ngược lại: DOC 2 §19.3 *"Không build web full app ngay"*, DOC 3
§16 xếp **"Full web app"** vào **Won't-have**. Hướng hiện tại đảo ngược chính điều
đó, và **cổng F-03 chưa bao giờ đóng bằng văn bản**.

Hoà giải trung thực:

- Trực giác của founder đúng ở chỗ **widget là moat duy nhất đã được kiểm chứng ở
  VN** (`r01` ✅, Locket 10M+ tải nội địa). Widget chỉ có ở phía app.
- Nghiên cứu đúng ở chỗ **cold start quyết định sống chết của sản phẩm mà đơn vị
  là NHÓM**: P(≥2 người cùng vào) web 20,5% vs app 2,9% — hơn 7,1 lần. Và 65%
  công bản web dùng lại nguyên vẹn.
- ⇒ **Teemi là một app mà client đầu tiên là một trang web.** Web-first phải trả
  giá: không widget, không push riêng. Khoản trả giá đó được bù bằng **2.1** —
  card trong nhóm chat làm bề mặt ambient thay cho widget.
- Widget **vẫn là đích**, không được rơi khỏi roadmap. Nó là lý do cuối cùng để
  bọc app.

Ràng buộc kiến trúc theo sau: **lõi không được biết nó đang chạy trên client
nào.** `src/core/` hiện đã đúng vậy (không I/O, không framework) và phải giữ.

## 3. Hệ thống theo lớp

| Lớp | Nội dung | Trạng thái |
|---|---|---|
| **L0 · Thời gian & bất biến** | `book_date` 04:00 ICT · `A_eff` · ngưỡng `k` · van nghỉ · chuỗi · vòng đời sổ | ✅ xong, 16 test. Không đổi theo hướng nào |
| **L1 · Nghi thức** | kèo riêng → proof (ảnh + nhãn XONG/TOANG) | ✅ xong (UI), chưa nối CSDL |
| **L2 · Phản hồi xã hội** | reaction nhãn cố định gắn vào proof (**2.3**) | ❌ thiếu |
| **L3 · Tiến độ & vạch đích** | chuỗi + ba con số ✅ · season/boss làm vạch đích (**2.2**) | ⬜ một nửa |
| **L4 · Tường thuật** | recap một dòng, phrase bank viết tay, đặt trên card (**2.1**) | ❌ thiếu |
| **L5 · Ký ức** | thumbnail giữ **vĩnh viễn** ✅ (đã chốt ở `_rulings` mục A) · lưới · capsule | ⬜ hạ tầng có, UI chưa |
| **L6 · Phân phối** | card 4:5 + OG 1200×630 + link + mã 6 ký tự | ✅ xong (UI) |
| **L7 · An toàn & pháp lý** | report → auto-hide toàn cục · block · SLA kép 48h / 24h-6h · đèn pháp lý 2 counter | ⬜ một phần |

**Luật phụ thuộc:** L2→L5 chỉ có nghĩa nếu L1 sống. Và L1 chỉ được kiểm chứng
bằng **Bước 0**, thứ chưa chạy. Nên thứ tự không đổi: **Bước 0 trước, rồi mới
build L2/L4.**

Lớp ký ức (L5) đang tích luỹ **âm thầm** nhờ một quyết định đã có: thumbnail
320px giữ vĩnh viễn trong khi ảnh gốc TTL 72 giờ. Nghĩa là dữ liệu ký ức dày lên
từng ngày mà không cần xây tính năng nào — đúng cách xử lý "moat cần 6–12 tháng
mới chín" mà `c-positioning-brand` ✅ chỉ ra.

## 4. Bộ lọc tính năng — áp đúng lần này

DOC 1 §10.2 đặt ba câu hỏi cho mọi tính năng. Phản biện đã dùng nó để cắt, nhưng
chưa ai chĩa nó vào chính các bản kế hoạch. Áp lại cho bốn thứ đang tranh chấp:

| Tính năng | Mở app mỗi ngày? | Nhóm tương tác hơn? | Ritual mạnh hơn? | Kết |
|---|---|---|---|---|
| **Recap một dòng trên card** | có — card là lý do quay lại | có | có | 🟡 **vào MVP-0** |
| **Reaction nhãn cố định** | gián tiếp | **có** — đây là nhịp xã hội duy nhất còn lại | có | 🟡 **vào MVP-0** |
| **Season/vạch đích** | không trực tiếp | không | **có** — chống novelty decay | 🟡 vào MVP-0 nếu chi phí giữ ở mức display |
| Lưới 30 ngày · capsule · AI recap · gacha · role | không | không | không | ❌ giữ nguyên quyết định hoãn |

## 5. Những thứ hệ thống không được trở thành

Giữ nguyên, đã có lý do vững ở cả bản gốc lẫn phản biện:

**Không** mạng xã hội công khai · **không** chat trong app · **không** feed vô
hạn · **không** xếp hạng giữa các nhóm · **không** danh hiệu gán cho người cụ thể
(*Báo Thủ*, *vote sus*, trust score) · **không** hiện tên hay ô trống của người
VẮNG · **không** nút réo người chưa nộp · **không** SMS OTP · **không** voucher
hay tiền thật trong 6 tháng đầu · **không** vector DB / AI memory search ·
**không** cloud ảnh.

Hai mục in đậm là chỗ hệ thống **cố ý đi ngược bản gốc**: DOC 2 §6.2/§6.3 muốn
màn "Hôm nay" hiện *"Ai chưa nộp"* và có nút **Réo người chưa nộp**. Hệ thống này
từ chối, vì đối tượng là người từ 16 tuổi và một nút bêu tên là rủi ro không
tương xứng với lợi ích. Nguyên tắc P2 (*người vắng phải vô hình*) thắng ở đây —
nhưng phải ghi rõ đây là **chỗ trái bản gốc có ý thức**, không phải sơ suất.

## 6. Việc phải làm, theo thứ tự

1. **Soát lại 53 phán quyết + 123 hằng số mục A trên đủ 3 DOC.** Chúng được viết
   khi repo chỉ có 1/3 tài liệu.
2. **Ô test `<input type=file>` trong webview Android** — 4 giờ, chặn mọi quyết
   định kiến trúc.
3. **Bước 0, 14 ngày, không code** — nó kiểm chứng L1, và L2/L4 không đáng xây
   nếu L1 chết.
4. **Ký bằng văn bản: F-02 (boss), F-03 (web-first), D-01, D-04** — vào
   `ADR-000` theo luật mục D của `_rulings.md`.
5. Rồi mới: nối CSDL → magic link → upload R2 → **card có recap** → cron rollover.
