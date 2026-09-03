# R06 — PHÁP LÝ VIỆT NAM, CHÍNH SÁCH APP STORE & QUYỀN RIÊNG TƯ

_Nghiên cứu cho Teemi — social challenge app private-first. Ngày nghiên cứu: 2026-08-28._

> **CẢNH BÁO ĐẦU TIÊN:** Đề bài gốc hỏi về **Nghị định 13/2023/NĐ-CP** và **Luật An ninh mạng 2018**. **Cả hai đã bị thay thế.** Khung pháp lý Việt Nam về dữ liệu cá nhân và an ninh mạng đã thay đổi toàn diện trong 8 tháng gần đây. Nếu founder đang làm việc theo giả định cũ thì mọi checklist compliance đều sai. Đây là phát hiện quan trọng nhất của tài liệu này.

> **Miễn trừ trách nhiệm:** Đây là research đầu vào, KHÔNG phải tư vấn pháp lý. Ba câu hỏi trong tài liệu này (giấy phép mạng xã hội, phân loại game, phân loại dữ liệu nhạy cảm) **bắt buộc phải có ý kiến luật sư VN bằng văn bản** trước khi lên store thu tiền.

---

## 0. TL;DR — 7 điều có thể giết dự án

| # | Rủi ro | Mức độ | Ngưỡng kích hoạt |
|---|---|---|---|
| 1 | Teemi bị coi là **mạng xã hội** → cần **Giấy phép** (không phải chỉ thông báo) | 🔴 Sống còn | ~**1.000 người dùng thường xuyên/tháng** hoặc 10.000 lượt truy cập/tháng |
| 2 | Giấy phép MXH đòi **pháp nhân VN + tên miền .vn + máy chủ tại VN + lưu log 2 năm** | 🔴 Sống còn | Ngay khi cần giấy phép |
| 3 | Cơ chế **boss chung + gacha** có thể bị xếp là **trò chơi điện tử G1** cần giấy phép riêng | 🟠 Cao | Khi có tương tác nhiều người chơi qua máy chủ + vật phẩm ảo bán được |
| 4 | Goal về ngủ/đi bộ/ăn uống + ảnh mặt có thể bị coi là **dữ liệu cá nhân nhạy cảm** → **mất miễn trừ startup 5 năm** | 🔴 Sống còn | Ngay từ ngày 1 |
| 5 | User **dưới 16 tuổi** — Luật An ninh mạng 2025 (hiệu lực 01/7/2026) buộc **cha mẹ đứng tên đăng ký tài khoản** | 🟠 Cao | Ngay từ ngày 1 |
| 6 | Apple **Guideline 1.2** — cơ chế moderation đủ 5 thành phần; "cà khịa/roast" chạm **1.1.1 mean-spirited** và **1.2 bullying** | 🟠 Cao | Lần submit đầu tiên |
| 7 | **Nghị định 330/2026/NĐ-CP** (ban hành 19/8/2026) — phạt tới **3 tỷ đồng**, riêng chuyển dữ liệu xuyên biên giới tới **5% doanh thu năm trước** | 🟠 Cao | Ngay lập tức |

---

## 1. BẢN ĐỒ VĂN BẢN PHÁP LUẬT ĐANG CÓ HIỆU LỰC (cập nhật 28/08/2026)

| Văn bản | Trạng thái | Hiệu lực | Ảnh hưởng tới Teemi |
|---|---|---|---|
| **Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15** | ✅ Đang hiệu lực | 01/01/2026 | Toàn bộ nghĩa vụ về dữ liệu cá nhân |
| **Nghị định 356/2025/NĐ-CP** (ban hành 31/12/2025) | ✅ Đang hiệu lực | 01/01/2026 | **Thay thế hoàn toàn Nghị định 13/2023** |
| ~~Nghị định 13/2023/NĐ-CP~~ | ❌ **ĐÃ HẾT HIỆU LỰC** | — | Đừng dùng làm căn cứ nữa |
| **Luật An ninh mạng số 116/2025/QH15** (QH thông qua 10/12/2025) | ✅ Đang hiệu lực | **01/07/2026** | Kế thừa/hợp nhất Luật ANM 2018 + Luật ATTTM 2015. Điều 16 về trẻ em. Điều 26 kiểm tra chuyển dữ liệu xuyên biên giới |
| ~~Luật An ninh mạng 2018~~ | ❌ Đã được thay thế/hợp nhất | — | Nội dung nội địa hoá dữ liệu vẫn còn nhưng cần đọc theo Luật 116/2025 |
| **Nghị định 147/2024/NĐ-CP** | ✅ Đang hiệu lực | 25/12/2024 | Giấy phép mạng xã hội, giấy phép game, xác thực tài khoản |
| **Nghị định 330/2026/NĐ-CP** (ban hành 19/8/2026) | ✅ Đang hiệu lực | 19/08/2026 | Xử phạt VPHC an ninh mạng + bảo vệ dữ liệu cá nhân |
| **Nghị định 53/2022/NĐ-CP** | ✅ Vẫn hiệu lực | 01/10/2022 | Nội địa hoá dữ liệu (Điều 26, 27) |
| **Nghị định 163/2024/NĐ-CP** (Luật Viễn thông 2023) | ✅ Đang hiệu lực | 24/12/2024 (OTT từ 01/01/2025) | Nếu Teemi có **chat** → dịch vụ viễn thông cơ bản trên Internet (OTT) |

Nguồn: [Bộ Công an](https://bocongan.gov.vn/chinh-sach-phap-luat/bai-viet/luat-bao-ve-du-lieu-ca-nhan-chinh-thuc-co-hieu-luc-thi-hanh-tu-ngay-01-01-2026-1767186124) · [Báo Chính phủ](https://baochinhphu.vn/luat-bao-ve-du-lieu-ca-nhan-chinh-thuc-co-hieu-luc-tu-ngay-mai-1-1-2026-102251231155609721.htm) · [Frasers Law](https://www.frasersvn.com/vi/legal-updates-and-publications/the-next-chapter-in-data-protection-new-decree-guiding-the-personal-data-protection-law) · [Xây dựng chính sách — Luật ANM 116/2025](https://xaydungchinhsach.chinhphu.vn/nhung-noi-dung-moi-trong-luat-an-ninh-mang-so-116-2025-qh15-119260629145615168.htm) · [Nghị định 147/2024 toàn văn](https://vanban.chinhphu.vn/?pageid=27160&docid=211654) · [Nghị định 330/2026](https://vanban.chinhphu.vn/?docid=219266&pageid=27160)

---

## 2. CÂU HỎI SỐNG CÒN #1 — TEEMI CÓ PHẢI "MẠNG XÃ HỘI" KHÔNG?

### 2.1. Định nghĩa pháp lý

Nghị định 147/2024, Điều 3 định nghĩa **mạng xã hội** là:

> _"hệ thống thông tin được thiết lập trên nền tảng website hoặc ứng dụng trên Internet, cung cấp các dịch vụ, công cụ cho phép người sử dụng dịch vụ cung cấp, trao đổi, tương tác, chia sẻ thông tin với nhau."_

**Đối chiếu với Teemi (INFERENCE — nhưng suy luận rất mạnh):**

| Tiêu chí định nghĩa | Teemi có? |
|---|---|
| Ứng dụng trên Internet | ✅ App iOS/Android |
| Cho phép người dùng **cung cấp** thông tin | ✅ Nộp proof (ảnh/text) |
| Cho phép người dùng **trao đổi, tương tác** | ✅ Reaction, cà khịa |
| Cho phép **chia sẻ thông tin với nhau** | ✅ Timeline nhóm, recap |

→ **Kết luận: Teemi gần như chắc chắn rơi vào định nghĩa "mạng xã hội".** Định nghĩa của ND 147 **không có ngoại lệ cho nhóm riêng tư/private**. "Private-first" là định vị sản phẩm, không phải lá chắn pháp lý. Zalo, Messenger đều có nhóm kín và vẫn là MXH.

### 2.2. Ngưỡng: Giấy phép vs Giấy xác nhận thông báo

| Quy mô | Thủ tục | Nguồn |
|---|---|---|
| **≥ 10.000 lượt truy cập thường xuyên/tháng** HOẶC **> 1.000 người sử dụng thường xuyên/tháng** | **GIẤY PHÉP cung cấp dịch vụ mạng xã hội** | [Vạn Luật](https://vanluat.vn/giay-phep-mang-xa-hoi-998.html) |
| Dưới ngưỡng trên | **GIẤY XÁC NHẬN THÔNG BÁO cung cấp dịch vụ mạng xã hội** | [Thư viện Pháp luật](https://thuvienphapluat.vn/phap-luat-doanh-nghiep/cong-viec-phap-ly/thu-tuc-cung-cap-dich-vu-mang-xa-hoi-2025-405.html) |
| Nền tảng **xuyên biên giới** ≥ 100.000 lượt truy cập từ VN/tháng | Nghĩa vụ xác thực tài khoản theo **điểm e khoản 3 Điều 23** | [Bộ KH&CN](https://mst.gov.vn/xac-thuc-tai-khoan-mang-xa-hoi-bang-so-dien-thoai-cu-hich-moi-tu-nghi-dinh-147-2024-nd-cp-197241227105213649.htm) |

> ⚠️ **Con số cần nội hoá: 1.000 người dùng thường xuyên/tháng = khoảng 200 nhóm 5 người.** Đây là quy mô một app viral nhẹ ở một trường đại học. Teemi sẽ chạm ngưỡng này **trong vài tuần** nếu launch thành công. Founder nên coi giấy phép MXH là việc **KHI NÀO**, không phải **CÓ HAY KHÔNG**.

### 2.3. Điều kiện để được cấp Giấy phép MXH (FACT)

- Là **cơ quan/tổ chức/doanh nghiệp thành lập theo pháp luật Việt Nam**, có ngành nghề đăng ký kinh doanh phù hợp (mã **6311 / 6312**) đã đăng tải trên Cổng thông tin quốc gia về đăng ký doanh nghiệp
- Đã **đăng ký tên miền** để cung cấp dịch vụ — thực tế yêu cầu **tên miền .vn** còn hiệu lực ≥ 6 tháng
- **Nhân sự người Việt Nam** chịu trách nhiệm quản lý nội dung
- Hệ thống kỹ thuật có **tối thiểu 01 máy chủ đặt tại Việt Nam**
- **Lưu trữ thông tin tài khoản người dùng và nhật ký (log) tối thiểu 02 năm**: thời điểm đăng nhập/đăng xuất, địa chỉ IP, nhật ký giao dịch
- **Thời hạn giấy phép tối đa 05 năm**, gia hạn không quá 01 lần và không quá 02 năm
- Cơ quan cấp: **Bộ Văn hoá, Thể thao và Du lịch** (sau tái cơ cấu bộ ngành 2025), thời hạn xét duyệt **25 ngày** kể từ ngày nhận hồ sơ hợp lệ

Nguồn: [Luật Việt An](https://luatvietan.vn/giay-phep-mang-xa-hoi.html) · [Vạn Luật](https://vanluat.vn/giay-phep-mang-xa-hoi-998.html) · [Cổng DVC Quốc gia — thủ tục 2.002181](https://dichvucong.gov.vn/p/home/dvc-chi-tiet-thu-tuc-hanh-chinh.html?ma_thu_tuc=2.002181)

### 2.4. Nghĩa vụ vận hành sau khi là MXH

| Nghĩa vụ | Chi tiết | Ảnh hưởng kiến trúc |
|---|---|---|
| **Xác thực tài khoản** | Bắt buộc bằng **số điện thoại di động tại Việt Nam**; nếu không có thì bằng **số định danh cá nhân**. Chỉ tài khoản đã xác thực mới được đăng, chia sẻ thông tin | ❌ Không thể dùng Apple Sign-In / Google Sign-In làm phương thức duy nhất. **Phải có OTP SMS.** Chi phí SMS phải vào mô hình tài chính |
| **Trẻ dưới 16 tuổi** | Cha mẹ/người giám hộ **đăng ký tài khoản bằng thông tin của mình** và chịu trách nhiệm giám sát | Cần flow riêng, hoặc chặn hẳn <16 |
| **Lưu log ≥ 2 năm** | IP, login/logout, nhật ký giao dịch | Cần audit log store, chi phí hạ tầng |
| **Gỡ nội dung vi phạm** | **24 giờ** khi có yêu cầu của cơ quan nhà nước; **48 giờ** với khiếu nại có căn cứ từ người dùng. Luật ANM 2025 siết thêm: **24 giờ**, **06 giờ** cho trường hợp khẩn cấp | Cần quy trình vận hành người thật, không chỉ code |
| **Máy chủ tại VN** | Tối thiểu 01 máy chủ | ❌ Không thể chạy 100% Firebase/Supabase US region |

### 2.5. Nội địa hoá dữ liệu

- **Nghị định 53/2022, Điều 26**: dữ liệu phải lưu tại VN gồm **thông tin cá nhân của người sử dụng dịch vụ tại Việt Nam**, dữ liệu do người dùng VN tạo ra, dữ liệu về mối quan hệ của người dùng VN.
- **Doanh nghiệp nước ngoài**: chỉ phải lưu trữ trong nước và đặt chi nhánh/VPĐD **khi có yêu cầu bằng văn bản của Bộ Công an**; thời hạn lưu tối thiểu **24 tháng** kể từ ngày có yêu cầu.
- **Doanh nghiệp trong nước** cung cấp dịch vụ MXH: nghĩa vụ lưu trữ trong nước là **mặc định**, cộng với điều kiện "máy chủ tại VN" của giấy phép MXH.

Nguồn: [An toàn thông tin — hướng dẫn ND 53/2022](https://antoanthongtin.vn/tin/nghi-dinh-53-2022-huong-dan-chi-tiet-ve-noi-dia-hoa-du-lieu-tai-viet-nam) · [VNG Cloud](https://vngcloud.vn/vi/blog/huong-dan-ve-noi-dia-hoa-du-lieu-tai-viet-nam)

> **INFERENCE quan trọng:** Chiến lược "lập công ty Singapore để né luật VN" **không hoạt động** khi Teemi phục vụ chủ yếu người dùng VN. Pháp nhân nước ngoài không xin được giấy phép MXH VN, và khi vượt 100.000 lượt truy cập/tháng vẫn bị ràng buộc nghĩa vụ xuyên biên giới (Điều 23 ND 147) — thậm chí nặng hơn (xác thực toàn bộ user, phối hợp gỡ nội dung, có thể bị yêu cầu đặt VPĐD).

---

## 3. CÂU HỎI SỐNG CÒN #2 — "BOSS CHUNG" CÓ PHẢI GAME CẦN GIẤY PHÉP?

Nghị định 147/2024 phân loại **trò chơi điện tử trên mạng** thành 4 nhóm:

| Loại | Đặc điểm | Thủ tục |
|---|---|---|
| **G1** | Có tương tác giữa **nhiều người chơi với nhau đồng thời thông qua hệ thống máy chủ** | **Giấy phép cung cấp dịch vụ G1** + **Quyết định phát hành** từng trò chơi |
| **G2** | Chỉ tương tác giữa người chơi với máy chủ | Giấy chứng nhận + Giấy xác nhận thông báo phát hành |
| **G3** | Nhiều người chơi tương tác nhưng không qua máy chủ | Như G2 |
| **G4** | Tải về, không tương tác | Như G2 |

**Rủi ro cho Teemi (INFERENCE):** Cơ chế "cả nhóm cùng đánh một con boss, boss mất máu khi cả nhóm nộp proof, hồi máu khi có người miss" là **tương tác giữa nhiều người chơi đồng thời thông qua máy chủ** — mô tả đúng chữ của G1. Nếu cơ quan quản lý diễn giải chặt, Teemi cần **cả giấy phép MXH lẫn giấy phép G1**. Giấy phép G1 khó và tốn hơn nhiều.

**Quy định về vật phẩm ảo (FACT):**
- Vật phẩm ảo, đơn vị ảo, điểm thưởng **chỉ được sử dụng trong phạm vi trò chơi**, **không được quy đổi** thành tiền, thẻ trả trước, thẻ ngân hàng, thẻ mua hàng hay hiện vật có giá trị giao dịch bên ngoài
- **Nghiêm cấm mua bán vật phẩm ảo, điểm thưởng giữa những người chơi với nhau**
- Cấm gắn khuyến mãi có thưởng bằng tiền/hiện vật thật vào giao diện hoặc tính năng của trò chơi
- Nghị định 174/2026 (từ 01/7/2026): mua bán vật phẩm ảo có thể bị phạt đến 3 triệu đồng

Nguồn: [Bộ KH&CN](https://mst.gov.vn/nghi-dinh-147-2024-nd-cp-quan-ly-chat-che-dich-vu-tro-choi-dien-tu-tren-mang-va-thong-tin-tren-internet-197241227124622733.htm) · [Pháp luật Phát triển](https://phapluatphattrien.vn/quy-dinh-ve-vat-pham-ao-diem-thuong-trong-tro-choi-dien-tu-tu-25-12-2024-d2659.html) · [Luật Việt An — Giấy phép G1](https://luatvietan.vn/giay-phep-game-online-g1.html)

### Khuyến nghị thiết kế để giảm rủi ro G1

1. **Không gọi Teemi là game** ở bất kỳ đâu: mô tả app, website, pitch, App Store category (chọn Health & Fitness / Social Networking, **không chọn Games**).
2. **Boss không phải gameplay**: boss là **cách trực quan hoá tiến độ nhóm** (progress bar có nhân vật), không có combat, không có input skill, không có win/lose state tách rời khỏi việc nộp proof. Máu boss = hàm số của tỉ lệ hoàn thành. Nếu boss chỉ là visualization của một metric, lập luận "không phải trò chơi điện tử" mạnh hơn nhiều.
3. **Không bán gacha bằng tiền thật ở MVP.** Doc chiến lược đã nói "Gacha cosmetic pool" trong premium — **hoãn**. Gacha thu tiền = vừa dính Apple 3.1.1 (bắt buộc công bố tỉ lệ), vừa kéo Teemi vào vùng "trò chơi có yếu tố may rủi".
4. **Không có bất kỳ cơ chế nào đổi vật phẩm/điểm sang tiền, voucher, hiện vật.** Đây cũng chính là lý do doc chiến lược đúng khi hoãn sponsor/voucher — nhưng lý do không chỉ là anti-cheat, mà là pháp lý.
5. **Không có leaderboard toàn app, không P2P trade.**

---

## 4. DỮ LIỆU CÁ NHÂN — LUẬT 91/2025 & NGHỊ ĐỊNH 356/2025

### 4.1. Miễn trừ startup — đòn bẩy lớn nhất mà Teemi có

**Điều 38 khoản 2 Luật 91/2025/QH15 (FACT):**

> _Doanh nghiệp nhỏ, doanh nghiệp khởi nghiệp được quyền lựa chọn thực hiện hoặc không thực hiện quy định tại **Điều 21, Điều 22 và khoản 2 Điều 33** của Luật này trong thời gian **05 năm** kể từ ngày Luật có hiệu lực thi hành, **trừ** doanh nghiệp nhỏ, doanh nghiệp khởi nghiệp kinh doanh dịch vụ xử lý dữ liệu cá nhân, **trực tiếp xử lý dữ liệu cá nhân nhạy cảm** hoặc **xử lý dữ liệu cá nhân của số lượng lớn chủ thể dữ liệu cá nhân**._

Được miễn:
- **Điều 21** — Đánh giá tác động xử lý dữ liệu cá nhân (DPIA)
- **Điều 22** — Cập nhật hồ sơ DPIA và hồ sơ đánh giá tác động chuyển dữ liệu xuyên biên giới (TIA)
- **Khoản 2 Điều 33** — Chỉ định bộ phận/nhân sự bảo vệ dữ liệu cá nhân (DPO) hoặc thuê dịch vụ

Thời hạn miễn: **01/01/2026 → 01/01/2031**. Hộ kinh doanh và doanh nghiệp siêu nhỏ được **miễn hoàn toàn** (không giới hạn 5 năm).

**Ngưỡng "số lượng lớn chủ thể": từ 100.000 chủ thể trở lên** (theo phân tích của XT Law — cần đối chiếu lại với Điều tương ứng của ND 356/2025).

Nguồn: [Thư viện Pháp luật — lưu ý cho hộ KD/DN siêu nhỏ/nhỏ/khởi nghiệp](https://thuvienphapluat.vn/phap-luat/mot-so-luu-y-khi-luat-bao-ve-du-lieu-ca-nhan-2025-co-hieu-luc-danh-cho-ho-kinh-doanh-doanh-nghiep-s-924781-244918.html) · [XT Law](https://xtlaw.com.vn/luat-bao-ve-du-lieu-ca-nhan-doanh-nghiep-can-luu-y-gi.html)

### 4.2. 🔴 CÁI BẪY: Teemi rất dễ tự đánh mất miễn trừ này

Miễn trừ mất hiệu lực nếu **trực tiếp xử lý dữ liệu cá nhân nhạy cảm**. Dữ liệu nhạy cảm theo pháp luật VN bao gồm (FACT, danh mục tại Nghị định 356/2025): **dữ liệu về sức khoẻ và tình trạng sức khoẻ**, **dữ liệu sinh trắc học**, **dữ liệu về vị trí cá nhân**, đời sống/xu hướng tình dục, dữ liệu về tội phạm, quan điểm chính trị/tôn giáo, dữ liệu tài chính, và một số nhóm khác.

**Đối chiếu với thiết kế Teemi trong doc chiến lược — 4 điểm chạm nguy hiểm:**

| Tính năng Teemi | Nguy cơ thành dữ liệu nhạy cảm | Cách né |
|---|---|---|
| Goal "ngủ trước 12h", "đi bộ 20 phút", "bớt trà sữa", "tập gym" | **Dữ liệu về sức khoẻ/tình trạng sức khoẻ** nếu app lưu goal dưới dạng taxonomy sức khoẻ có cấu trúc | Lưu goal là **free-text do user tự viết**, KHÔNG phân loại/tag theo danh mục health, KHÔNG tích hợp HealthKit/Google Fit, KHÔNG suy luận chỉ số sức khoẻ |
| Ảnh proof có mặt người | **Dữ liệu sinh trắc học** nếu xử lý để nhận dạng | ❌ Tuyệt đối **không** face detection/recognition/clustering. Không "smart album theo người" ở MVP (doc chiến lược có nhắc smart album — hoãn) |
| Ảnh proof có **EXIF GPS** | **Dữ liệu về vị trí cá nhân** | ✅ **Strip toàn bộ EXIF ngay tại client trước khi upload.** Đây là 10 dòng code cứu 5 năm miễn trừ |
| Check-in địa điểm, "đi ăn lẩu" | Dữ liệu vị trí | Không thu thập toạ độ. Không xin quyền Location ở MVP |

> **Đây là phát hiện hành động được quan trọng nhất của tài liệu này.** Bốn quyết định kỹ thuật rẻ tiền ở MVP (free-text goal, không face recognition, strip EXIF, không location) là điều kiện để Teemi giữ được miễn trừ DPIA/TIA/DPO trong 5 năm. Nếu mất, founder phải lập hồ sơ DPIA, hồ sơ TIA, cập nhật 6 tháng/lần, và chỉ định nhân sự bảo vệ dữ liệu có **tối thiểu 02 năm kinh nghiệm** trong pháp chế/an ninh mạng/quản trị rủi ro (yêu cầu mới của ND 356/2025) — chi phí và ma sát rất lớn cho một team nhỏ.

Nguồn danh mục dữ liệu nhạy cảm: [Thư viện Pháp luật — Danh mục DLCN nhạy cảm từ 01/01/2026](https://thuvienphapluat.vn/phap-luat/danh-muc-du-lieu-ca-nhan-nhay-cam-tu-01012026-theo-nghi-dinh-3562025ndcp-day-du-nhat-ra-sao-249476.html) · [Nghị định 356/2025 toàn văn](https://thuvienphapluat.vn/van-ban/Quyen-dan-su/Nghi-dinh-356-2025-ND-CP-huong-dan-Luat-Bao-ve-du-lieu-ca-nhan-687428.aspx)

### 4.3. Nghĩa vụ KHÔNG được miễn (phải làm ngay từ MVP)

| Nghĩa vụ | Chi tiết | Nguồn |
|---|---|---|
| **Sự đồng ý** | Phải **hoàn toàn tự nguyện**, rõ ràng, cho từng mục đích. **Im lặng/không phản hồi KHÔNG phải là đồng ý**. Không được dùng dark pattern, không tick sẵn | [VnExpress](https://vnexpress.net/10-dieu-phai-biet-de-bao-ve-du-lieu-ca-nhan-5002500.html) |
| **Thông báo trước khi xử lý** | Mục đích, loại dữ liệu, bên thứ ba nhận dữ liệu, thời gian lưu, quyền của chủ thể | Luật 91/2025 |
| **Rút lại đồng ý** | Xử lý trong **15 ngày** | VnExpress |
| **Quyền truy cập/cung cấp dữ liệu** | **10 ngày** nếu xử lý trực tiếp; **15 ngày** nếu có bên thứ ba | [Frasers Law](https://www.frasersvn.com/vi/legal-updates-and-publications/the-next-chapter-in-data-protection-new-decree-guiding-the-personal-data-protection-law) |
| **Quyền xoá dữ liệu** | **20 ngày** nếu xử lý trực tiếp | Frasers Law |
| **Thông báo sự cố lộ lọt** | **72 giờ** kể từ khi phát hiện, thông báo cho chủ thể và cơ quan chuyên trách (A05 — Cục An ninh mạng, Bộ Công an) | VnExpress |
| **Cấm yêu cầu ảnh giấy tờ tuỳ thân** | MXH **không được** yêu cầu người dùng cung cấp ảnh CCCD/giấy tờ để xác thực | VnExpress |

> ⚠️ Điểm cuối tạo **mâu thuẫn thực tế**: ND 147 yêu cầu xác thực bằng số định danh cá nhân khi user không có SĐT VN, nhưng Luật 91/2025 cấm MXH đòi **ảnh giấy tờ**. Cách xử lý an toàn: chỉ nhận **số** định danh (nhập tay, hoặc qua VNeID), **không lưu ảnh giấy tờ**, không lưu bản scan.

### 4.4. Chuyển dữ liệu xuyên biên giới

Nếu Teemi dùng Firebase / Supabase / AWS / Cloudflare R2 với region ngoài VN → đó là **chuyển dữ liệu cá nhân xuyên biên giới**.

- Luật ANM 116/2025 **Điều 26** bổ sung cơ chế **kiểm tra, đánh giá việc chuyển dữ liệu xuyên biên giới** — quy định mới, không có trong Luật 2018 hay ND 53/2022
- Mức phạt cao nhất trong toàn bộ khung: **5% doanh thu năm trước liền kề**, hoặc tối đa 3 tỷ đồng nếu chưa có doanh thu (Nghị định 330/2026)
- Miễn trừ Điều 22 (hồ sơ TIA) chỉ miễn **thủ tục hồ sơ**, **không miễn nghĩa vụ tuân thủ** điều kiện chuyển dữ liệu

**Khuyến nghị (INFERENCE):** Từ MVP, đặt **primary database + object storage tại VN** (VNG Cloud, Viettel IDC, FPT Cloud, CMC Cloud đều có S3-compatible storage và đã marketing về tuân thủ ND 53). Chi phí cao hơn Firebase nhưng: (a) giải quyết luôn điều kiện "máy chủ tại VN" của giấy phép MXH, (b) né rủi ro 5% doanh thu, (c) latency tốt hơn cho user VN. Nếu vẫn dùng dịch vụ nước ngoài, giới hạn ở dịch vụ **không chạm dữ liệu cá nhân** (push notification token, crash-free analytics đã ẩn danh, CDN cho asset tĩnh).

### 4.5. Mức phạt — Nghị định 330/2026/NĐ-CP

| Hành vi | Mức phạt |
|---|---|
| Vi phạm chuyển dữ liệu xuyên biên giới | Tối đa **5% doanh thu năm trước liền kề**; 3 tỷ nếu không có doanh thu |
| **Mua bán dữ liệu cá nhân** | Tối đa **10 lần khoản thu** từ hành vi vi phạm, tối thiểu 3 tỷ đồng |
| Các vi phạm khác về bảo vệ DLCN | Tối đa **3 tỷ đồng** (tổ chức); cá nhân bằng **1/2** |
| Cung cấp/chia sẻ nội dung vi phạm (an ninh mạng) | 5 – 20 triệu đồng |
| Vi phạm về ứng phó/khắc phục sự cố | 10 – 70 triệu đồng |

Hình thức bổ sung: **đình chỉ hoạt động, tước giấy phép, buộc xoá dữ liệu, buộc nộp lại khoản thu bất hợp pháp** (Điều 4, Điều 5 ND 330/2026).

Nguồn: [Báo Chính phủ](https://baochinhphu.vn/muc-xu-phat-vi-pham-hanh-chinh-doi-voi-hanh-vi-vi-pham-ve-bao-ve-du-lieu-ca-nhan-102260822154959691.htm) · [LuatVietnam](https://luatvietnam.vn/vi-pham-hanh-chinh/nghi-dinh-330-2026-nd-cp-xu-phat-vi-pham-hanh-chinh-trong-an-ninh-mang-va-bao-ve-du-lieu-445214-d1.html)

---

## 5. NGƯỜI DÙNG VỊ THÀNH NIÊN

Target của Teemi là 16–28. **Thực tế sẽ có user 13–15** — đây là rủi ro phải xử lý từ ngày đầu, không phải sau.

### 5.1. Việt Nam

| Quy định | Nội dung | Hiệu lực |
|---|---|---|
| **Luật Trẻ em 2016** | Trẻ em = **người dưới 16 tuổi** (khác GDPR/COPPA) | — |
| **Nghị định 147/2024** | MXH: trẻ dưới 16 tuổi → **cha mẹ/người giám hộ đăng ký tài khoản bằng thông tin của mình** | 25/12/2024 |
| **Luật ANM 116/2025, Điều 16 khoản 2** | Mở rộng: trẻ em sử dụng **dịch vụ giá trị gia tăng trên không gian mạng** thì cha mẹ/người giám hộ **phải đăng ký tài khoản bằng thông tin của mình** và có trách nhiệm giám sát, quản lý nội dung trẻ truy cập, đăng tải, chia sẻ | **01/07/2026 — ĐANG CÓ HIỆU LỰC** |
| **Luật ANM 116/2025, Điều 16** | Nhà cung cấp dịch vụ phải: kiểm soát nội dung độc hại, ngăn chặn chia sẻ nội dung gây hại cho trẻ, **gỡ bỏ kịp thời**, xây dựng hệ thống kỹ thuật chặn nội dung độc hại, phối hợp cơ quan chức năng | 01/07/2026 |
| **Luật 91/2025** | Xử lý DLCN trẻ em phải có đồng ý của **cha mẹ/người giám hộ** — bắt buộc, không ngoại lệ. Trẻ **từ đủ 07 tuổi** trở lên: công bố/tiết lộ thông tin đời tư cần **cả sự đồng ý của trẻ và người đại diện theo pháp luật** | 01/01/2026 |
| Phạt | Thu thập, xử lý dữ liệu trẻ em trái phép: tới **3 tỷ đồng** (tổ chức), 1,5 tỷ (cá nhân) | — |

Nguồn: [LuatVietnam — 4 quy định Điều 16 Luật ANM 2025](https://luatvietnam.vn/linh-vuc-khac/tre-em-su-dung-mang-xa-hoi-luu-y-quy-dinh-tai-luat-an-ninh-mang-2025-883-106338-article.html) · [Thư viện Pháp luật](https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/cha-me-phai-dang-ky-tai-khoan-mang-cho-con-tu-172026-dung-khong-tre-duoi-16-tuoi-dung-mang-xa-hoi-c-276815.html) · [Công an Tây Ninh](https://congan.tayninh.gov.vn/vi/chi-tiet-tin-tuc?Id=269127)

**Vấn đề sản phẩm:** Teemi bản chất là app cho nhóm bạn — nhóm bạn cấp 3 là target tự nhiên và viral nhất. Nhưng flow "cha mẹ đăng ký tài khoản cho con bằng thông tin của mình" **giết hoàn toàn** trải nghiệm rủ bạn vào nhóm. 

**Khuyến nghị (INFERENCE):** MVP đặt **age gate 16+** (neutral age screen: hỏi ngày sinh, không gợi ý đáp án đúng), từ chối đăng ký nếu <16, ghi rõ trong ToS. Chấp nhận mất một phần thị trường cấp 3 để đổi lấy sự đơn giản pháp lý. Xem xét flow parental consent chỉ khi đã có doanh thu và nguồn lực pháp chế.

### 5.2. Nước ngoài (nếu phát hành ngoài VN)

| Khung | Áp dụng khi | Ngưỡng tuổi | Ghi chú |
|---|---|---|---|
| **COPPA** (Mỹ) | Có user Mỹ dưới 13 | <13 | FTC đã sửa đổi Quy tắc COPPA năm 2025, bổ sung yêu cầu về **đồng ý riêng cho việc tiết lộ cho bên thứ ba**, **chính sách lưu trữ dữ liệu bằng văn bản**, **chương trình an ninh thông tin bằng văn bản**. ⚠️ **KHÔNG TÌM ĐƯỢC NGUỒN XÁC MINH TRỰC TIẾP** (ftc.gov trả về 403) — cần luật sư US xác nhận ngày compliance deadline |
| **GDPR** (EU) | Có user EU | 13–16 tuỳ quốc gia | Nếu có, cần: cơ sở pháp lý, DPO có thể bắt buộc, quyền xoá/di chuyển dữ liệu, thông báo vi phạm 72h |
| **DSA** (EU) | Là hosting/intermediary service ở EU | — | Notice-and-action, báo cáo minh bạch, bảo vệ người chưa thành niên (Điều 28), cấm quảng cáo nhắm mục tiêu trẻ vị thành niên |
| **Apple age assurance** | Australia, Brazil, Singapore | 18+ | Từ **24/02/2026**, Apple chặn tải app 18+ nếu chưa xác nhận là người lớn |

**Khuyến nghị mạnh:** **MVP chỉ phát hành ở App Store / Play Store Việt Nam** (country availability = Vietnam only). Điều này loại bỏ COPPA, GDPR, DSA, và các luật age assurance của Úc/Brazil/Utah/Louisiana khỏi bề mặt rủi ro. Mở rộng quốc gia là quyết định có chi phí pháp lý, cần tính riêng.

---

## 6. APP STORE & GOOGLE PLAY

### 6.1. Apple — Guideline 1.2 User-Generated Content (FACT, nguyên văn)

> _Apps with user-generated content or social networking services must include:_
> - _A method for **filtering objectionable material** from being posted to the app_
> - _A mechanism to **report offensive content** and timely responses to concerns_
> - _The ability to **block abusive users** from the service_
> - _**Published contact information** so users can easily reach you_

Ngoài ra, người dùng phải **đồng ý với EULA nêu rõ không dung thứ nội dung phản cảm và người dùng lạm dụng**. Trong thực tiễn review, Apple yêu cầu developer **xử lý báo cáo nội dung phản cảm trong vòng 24 giờ** bằng cách gỡ nội dung và loại bỏ người dùng vi phạm — đây là tiêu chuẩn App Review áp dụng khi từ chối app theo 1.2. (⚠️ Cụm "24 hours" xuất hiện trong hướng dẫn thực thi và các thông báo reject, **không nằm trong 4 gạch đầu dòng nguyên văn** của guideline hiện hành; nguồn thứ cấp nhất quán khẳng định yêu cầu này.)

Guideline 1.2 cũng nêu: app "used primarily for ... **objectification of real people (e.g. 'hot-or-not' voting)**, making physical threats, or **bullying** do not belong on the App Store and **may be removed without notice**."

**Cập nhật mới nhất: 06/02/2026** — Apple làm rõ app có **random hoặc anonymous chat** thuộc phạm vi Guideline 1.2.

Nguồn: [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) · [Apple Developer News 06/02/2026](https://developer.apple.com/news/?id=d75yllv4) · [BuddyBoss](https://buddyboss.com/docs/app-store-guideline-1-2-safety-user-generated-content/)

### 6.2. Các guideline khác Teemi chạm

| Guideline | Nội dung | Rủi ro Teemi |
|---|---|---|
| **1.1.1** | Cấm nội dung **defamatory, discriminatory, mean-spirited**, đặc biệt nếu có khả năng **làm nhục, đe doạ, gây hại cho cá nhân hoặc nhóm cụ thể** | 🔴 **"Cà khịa", "roast", "Báo Thủ tuần này", "Nam lại dùng kỹ năng mất tích"** — đây là roast nhắm vào **cá nhân có thật, được định danh**. Đúng vùng cấm |
| **1.2** | Bullying, objectification of real people (hot-or-not voting) | 🔴 Vote "proof hơi sus", ranking người tệ nhất nhóm ≈ hot-or-not voting về người thật |
| **3.1.1** | Loot box phải **công bố tỉ lệ (odds)** trước khi mua | 🟠 Gacha cosmetic premium |
| **5.1.1(v)** | App có tạo tài khoản **phải có chức năng xoá tài khoản NGAY TRONG APP** | 🔴 Lý do reject phổ biến năm 2026 |
| **5.1.1** | Privacy policy URL bắt buộc, phải khai báo đúng dữ liệu thu thập (App Privacy nutrition label) | 🔴 Top 3 lý do reject 2026 |
| **5.1.4** | App thu thập/truyền/chia sẻ thông tin cá nhân **từ trẻ vị thành niên** (bao gồm **ảnh, video, drawings, khả năng chat**) phải có privacy policy và tuân thủ luật bảo vệ trẻ em | 🟠 Ảnh proof từ user <18 |
| **1.4.1** | Health claims phải có dữ liệu/phương pháp chứng minh; nhắc user hỏi bác sĩ | 🟡 Không được marketing "giúp bạn ngủ ngon hơn / giảm cân" như tuyên bố y tế |
| **1.5** | Support URL phải hoạt động | 🔴 Lý do reject số 1 năm 2026 |
| **2.1** | Crash, tính năng không demo được, thiếu demo account | 🔴 Nhóm reject lớn nhất. Teemi cần **demo account có sẵn nhóm + dữ liệu mẫu** cho reviewer |
| **4.3** | Spam / app trùng lặp | 🟡 |

**Age rating mới (từ 24/07/2025):** hệ thống mở rộng từ 4+/9+ thành **4+ / 9+ / 13+ / 16+ / 18+**. Bộ câu hỏi mới bắt buộc khai báo về **in-app controls, capabilities (user-generated content, messaging, social features), medical/wellness topics, violent themes**. Deadline trả lời: **31/01/2026 (đã qua)** — app mới phải trả lời khi submit. Có thể **tự nâng rating cao hơn mức Apple tính**.

**Declared Age Range API:** Apple mở rộng cho Brazil; với tài khoản mới ở **Utah (từ 06/05/2026)** và **Louisiana (từ 01/07/2026)**, age category được chia sẻ với app khi request qua API. Từ **24/02/2026** Apple chặn tải app 18+ ở **Úc, Brazil, Singapore** nếu chưa xác nhận người lớn.

Nguồn: [Apple Developer News — Updated age ratings](https://developer.apple.com/news/?id=ks775ehf) · [Apple Developer News — Age requirements](https://developer.apple.com/news/?id=f5zj08ey) · [Declared Age Range docs](https://developer.apple.com/documentation/declaredagerange)

### 6.3. Google Play — UGC Policy

App có UGC phải triển khai **moderation mạnh mẽ, hiệu quả và liên tục**:
- Yêu cầu user **chấp nhận terms of use trước khi tạo nội dung**
- **Định nghĩa nội dung và hành vi phản cảm** trong chính sách của app
- Thực hiện moderation phù hợp với loại UGC
- **Hệ thống báo cáo và chặn UGC/người dùng ngay trong app** (không phải rời app để report)
- Hành động với UGC/user vi phạm khi cần

Nguồn: [Play Console Help — User Generated Content](https://support.google.com/googleplay/android-developer/answer/9876937?hl=en) · [Moderation requirements](https://support.google.com/googleplay/android-developer/answer/12923286?hl=en)

### 6.4. Thống kê reject 2026 (FACT)

Apple review khoảng **7,77 triệu lượt submit**, reject gần **1,93 triệu (~25%)**. Bốn nhóm lớn nhất theo thứ tự: **Performance (2.1) → Legal → Design → Privacy**. Ba lý do reject đơn lẻ phổ biến nhất 2026: **support URL hỏng (1.5)**, **privacy policy thiếu/không chính xác (5.1.1)**, và **thiếu chức năng xoá tài khoản trong app**. Privacy là nhóm tăng nhanh nhất.

Nguồn: [QAwerk](https://qawerk.com/blog/app-store-rejection-reasons/) · [OpenSpace Services](https://www.openspaceservices.com/blog/general/apple-app-store-rejection-guide-2026-the-15-most-common-reasons-and-how-to-fix-each)

---

## 7. DỮ LIỆU ẢNH PROOF

| Câu hỏi | Trả lời |
|---|---|
| Ảnh proof có phải dữ liệu cá nhân? | **Có** — ảnh chứa hình ảnh cá nhân là dữ liệu cá nhân cơ bản |
| Có phải **nhạy cảm**? | **Không mặc định.** Trở thành nhạy cảm khi: (a) xử lý sinh trắc học (nhận diện khuôn mặt), (b) chứa EXIF GPS → dữ liệu vị trí, (c) tiết lộ tình trạng sức khoẻ. Xem mục 4.2 |
| Ai sở hữu? | User giữ quyền sở hữu/quyền tác giả. Teemi cần **license phi độc quyền, có thể huỷ, giới hạn mục đích** trong ToS — chỉ để vận hành dịch vụ. **Không** xin license vĩnh viễn/toàn cầu/chuyển nhượng được (vừa gây phản ứng user, vừa khó biện minh dưới nguyên tắc mục đích của Luật 91/2025) |
| Xoá tài khoản thì xoá gì? | Ảnh proof, metadata, reaction/comment của user, goal, lịch sử proof, entry trong timeline nhóm, backup, cache CDN, dữ liệu ở bên thứ ba (processor). **Thời hạn 20 ngày** (ND 356/2025) |
| Xoá thế nào với nội dung nhóm? | Xung đột thực tế: xoá ảnh của A làm hỏng timeline kỷ niệm của cả nhóm. **Cách xử lý:** xoá cứng media + PII; giữ lại **sự kiện đã ẩn danh** ("một thành viên đã nộp proof") để không phá vỡ tính toàn vẹn recap. Phải nói rõ điều này trong Privacy Policy **trước** khi user tạo nội dung |
| Right to be forgotten | Luật 91/2025 công nhận quyền yêu cầu **xoá / chỉnh sửa / ẩn danh hoá** dữ liệu; rút đồng ý xử lý trong **15 ngày**; xoá trong **20 ngày** |
| Retention | Phải công bố **thời gian lưu trữ** trong thông báo xử lý dữ liệu. Teemi nên đặt chính sách rõ: ví dụ media proof lưu 12 tháng ở free tier, premium lưu lâu hơn — điều này vừa là compliance vừa là mô hình kinh doanh (khớp với "Memory business" trong doc chiến lược) |
| Nghĩa vụ với MXH | Nếu là MXH: lưu **thông tin tài khoản + log tối thiểu 2 năm** — mâu thuẫn biểu kiến với quyền xoá. Cách xử lý: xoá **nội dung và PII**, giữ **log kỹ thuật tối thiểu** theo nghĩa vụ luật định, ghi rõ trong Privacy Policy |

---

## 8. MODERATION — NGHĨA VỤ VÀ MỨC TỐI THIỂU CHO MVP

**"Private group" không miễn trừ nghĩa vụ moderation.** Cả Apple 1.2, Google Play UGC, ND 147 và Luật ANM 116/2025 đều áp dụng theo **khả năng đăng tải và chia sẻ nội dung của người dùng**, không theo phạm vi hiển thị. Teemi có nội dung do user tạo → đủ điều kiện. Vụ nội dung xâm hại trẻ em trong một nhóm kín vẫn là trách nhiệm của nhà cung cấp dịch vụ.

### Checklist moderation tối thiểu cho MVP

1. **Report nội dung** — nút report trên **mọi** proof, reaction, comment, tên nhóm, avatar, tên hiển thị. Trong app, không qua email.
2. **Report người dùng** — riêng biệt với report nội dung.
3. **Block người dùng** — chặn ở cấp cá nhân (không thấy nội dung của nhau), kể cả trong cùng nhóm.
4. **Rời nhóm ngay lập tức** — một cú chạm, không cần admin duyệt.
5. **Filter chủ động** — tối thiểu: blocklist từ khoá tiếng Việt (có dấu + không dấu + teencode + leetspeak) cho text; với ảnh, dùng dịch vụ phân loại nội dung nhạy cảm (Google Cloud Vision SafeSearch, AWS Rekognition, hoặc CoreML on-device). Apple từ chối app không có **method for filtering** — chỉ có report là không đủ.
6. **EULA chống nội dung phản cảm** — user phải accept trước khi tạo nội dung đầu tiên (bắt buộc theo cả Apple và Google).
7. **Contact info công khai** — support email + support URL hoạt động, ghi trong App Store Connect và trong app.
8. **SLA xử lý 24 giờ** — cần người trực. Với team nhỏ: alert vào Slack/Telegram + quy trình viết sẵn + auto-hide nội dung khi đạt N report trong khi chờ người xử lý.
9. **Gỡ nội dung theo yêu cầu cơ quan nhà nước trong 24 giờ (06 giờ nếu khẩn cấp)** — cần một địa chỉ liên hệ pháp lý được công bố.
10. **Nhật ký moderation** — lưu ai report gì, xử lý ra sao, khi nào. Đây là bằng chứng khi Apple hoặc cơ quan quản lý hỏi.
11. **Xoá tài khoản trong app** (Apple 5.1.1(v)) — không phải "gửi email cho chúng tôi".

### Rủi ro riêng của "cà khịa" (roast)

Đây là điểm sản phẩm ăn tiền nhất của Teemi và cũng là điểm pháp lý mong manh nhất. Doc chiến lược đã có "Troll nhưng không toxic", "không roast goal nhạy cảm" — cần biến thành ràng buộc kỹ thuật:

- **Roast phải là template do Teemi cung cấp**, không phải free-text tuỳ ý — kiểm soát được nội dung, chứng minh được với Apple rằng có "method for filtering"
- **Không có ranking "tệ nhất"** hiển thị công khai. "Báo Thủ tuần này" nên là **badge tự nhận / opt-in**, không phải nhãn nhóm gán cho một người
- **Không vote về người** (chống 1.2 "objectification of real people"). Vote "proof hơi sus" phải nhắm vào **proof**, không nhắm vào **người**, và không tạo điểm số tích luỹ về độ đáng tin của cá nhân
- **Opt-out khỏi bị roast** ở cấp cá nhân — vừa là an toàn tâm lý (rủi ro 12.4 trong doc chiến lược), vừa là bằng chứng anti-bullying với Apple
- Nếu có **AI roast**: phải qua safety filter, và phải khai báo AI capability trong bộ câu hỏi age rating mới của Apple

---

## 9. DOANH NGHIỆP & THUẾ

### 9.1. So sánh loại hình

| Phương án | Ưu | Nhược | Phù hợp giai đoạn |
|---|---|---|---|
| **Cá nhân / hộ kinh doanh VN** | Rẻ, nhanh. Doanh thu ≤ 100 triệu/năm được miễn GTGT + TNCN. Được **miễn hoàn toàn** Điều 21/22/khoản 2 Điều 33 Luật 91/2025 | ❌ **Không xin được giấy phép MXH** (yêu cầu là cơ quan/tổ chức/doanh nghiệp). Không tách trách nhiệm cá nhân. Không gọi vốn được | Chỉ giai đoạn thử nghiệm TestFlight/beta |
| **Công ty TNHH VN** | ✅ Xin được giấy phép MXH. Được ưu đãi thuế phần mềm. Nhận payout Apple/Google trực tiếp | Chi phí kế toán, tuân thủ. Thuộc diện "doanh nghiệp nhỏ/khởi nghiệp" → vẫn được miễn 5 năm nếu tránh dữ liệu nhạy cảm | ✅ **Khuyến nghị cho Teemi** |
| **Công ty Singapore / US** | Dễ gọi vốn quốc tế, payout đơn giản, thuế Singapore ưu đãi | ❌ **Không xin được giấy phép MXH VN.** Khi >100.000 lượt truy cập từ VN/tháng thì bị nghĩa vụ xuyên biên giới nặng hơn. Chi phí duy trì $2–5k/năm | Chỉ khi đã có vốn ngoại; thường làm **holding Singapore + subsidiary VN** |

**Khuyến nghị (INFERENCE):** Với thị trường chính là VN và bắt buộc phải có giấy phép MXH, cấu trúc tối ưu là **Công ty TNHH tại Việt Nam** ngay từ đầu, mã ngành **6311** (xử lý dữ liệu, cho thuê và hoạt động liên quan) và **6312** (cổng thông tin), cộng **6201** (lập trình máy vi tính). Nếu sau này gọi vốn quốc tế, thêm holding Singapore ở vòng seed — chứ không đảo ngược thứ tự.

### 9.2. Thuế

| Chủ thể | Nghĩa vụ |
|---|---|
| **Cá nhân kinh doanh VN** nhận tiền từ Apple/Google | **5% GTGT + 2% TNCN** trên doanh thu (Thông tư 40/2021/TT-BTC, nhóm dịch vụ). Miễn nếu doanh thu ≤ 100 triệu/năm. Cơ quan thuế đã truy thu diện này — Cục Thuế từng thu **203 tỷ đồng** từ người viết ứng dụng cho App Store |
| **Doanh nghiệp VN** | Thuế **TNDN 20%**. Nhưng **sản xuất sản phẩm phần mềm được ưu đãi**: thuế suất **10% trong 15 năm**, kèm miễn/giảm theo Luật Thuế TNDN 2025 và Luật Công nghiệp Công nghệ số 2025. Xuất khẩu phần mềm/dịch vụ số thường hưởng GTGT 0% |
| **Apple / Google** | Là nhà cung cấp nước ngoài đã đăng ký kê khai, tự nộp GTGT và TNDN qua Cổng thông tin điện tử của Cục Thuế; phần chia doanh thu trả về VN cần được ghi nhận theo **doanh thu gộp trước phí nền tảng** |

Nguồn: [Thông tư 40/2021/TT-BTC](https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-40-2021-TT-BTC-huong-dan-thue-gia-tri-gia-tang-thue-thu-nhap-ca-nhan-477635.aspx) · [Tuổi Trẻ — truy thu 203 tỷ](https://tuoitre.vn/nld/kinh-te/nhieu-nguoi-viet-ung-dung-cho-apple-store-vao-tam-ngam-cuc-thue-thu-203-ti-dong-tien-thue-2021091107560168.htm) · [FAMA Consulting — ưu đãi thuế phần mềm 2026](https://famaconsulting.vn/en/uu-dai-thue-cho-doanh-nghiep-san-xuat-phan-mem-tu-nam-2026) · [Gonnapass](https://gonnapass.com/viet-app-qua-nen-tang-chiu-thue-nao-shopify-google-apple-store/)

### 9.3. Giấy tờ để nhận tiền từ Apple/Google

- **D-U-N-S Number** — bắt buộc để đăng ký Apple Developer Program dạng **Organization**. Miễn phí, xác minh **7–30 ngày làm việc**. Đăng ký sớm vì đây là đường găng
- Pháp nhân hợp lệ (LLC/JSC) để ký Apple Developer Program License Agreement
- **Paid Applications Agreement** trong App Store Connect: cần thông tin thuế (form W-8BEN-E cho pháp nhân VN), thông tin ngân hàng nhận payout (tài khoản doanh nghiệp, USD hoặc VND tuỳ ngân hàng)
- Google Play: tài khoản Merchant, thông tin thuế, tài khoản ngân hàng
- Phí Apple Developer Program: **$99/năm**; Google Play: **$25 một lần**

Nguồn: [Apple — Enrollment](https://developer.apple.com/support/enrollment/) · [Global Link Consulting — D-U-N-S cho Apple](https://globallinkconsulting.sg/en/article/duns-registration/duns-for-apple-developer)

---

## 10. CHECKLIST HÀNH ĐỘNG

### 🔴 A. BẮT BUỘC TRƯỚC MVP (trước khi submit lần đầu)

**Pháp lý cơ bản**
- [ ] Thành lập **Công ty TNHH VN**, mã ngành 6201 + 6311 + 6312
- [ ] Đăng ký **D-U-N-S Number** (làm ngay — mất tới 30 ngày)
- [ ] Đăng ký Apple Developer Program (Organization) + Google Play Developer
- [ ] Mua **tên miền .vn** (điều kiện giấy phép MXH sau này)
- [ ] Kiểm tra **nhãn hiệu "Teemi"** tại Cục SHTT + App Store + domain + social handle

**Tài liệu bắt buộc**
- [ ] **Privacy Policy** (tiếng Việt + tiếng Anh) tuân thủ Luật 91/2025: mục đích, loại dữ liệu, bên thứ ba, thời gian lưu, quyền chủ thể, cách gửi yêu cầu, thời hạn phản hồi (10/15/20 ngày)
- [ ] **Terms of Service / EULA** có điều khoản **không dung thứ nội dung phản cảm và người dùng lạm dụng** (bắt buộc theo Apple 1.2 và Google Play)
- [ ] **Community Guidelines** định nghĩa rõ "cà khịa được phép" vs "bắt nạt bị cấm" — vừa cho user vừa để trình Apple khi bị hỏi
- [ ] **Support URL** hoạt động + support email (lý do reject số 1 năm 2026)

**Thiết kế bảo vệ miễn trừ startup (quan trọng nhất)**
- [ ] Goal lưu dạng **free-text**, không phân loại theo taxonomy sức khoẻ
- [ ] **Strip toàn bộ EXIF** (đặc biệt GPS) tại client trước khi upload
- [ ] **Không** face detection / recognition / clustering
- [ ] **Không** xin quyền Location
- [ ] **Không** tích hợp HealthKit / Google Fit
- [ ] Ghi lại quyết định này thành **decision record** để chứng minh khi bị kiểm tra

**Sản phẩm & moderation**
- [ ] Report nội dung + report user + block user + rời nhóm (tất cả trong app)
- [ ] Filter từ khoá tiếng Việt + phân loại ảnh nhạy cảm
- [ ] **Xoá tài khoản trong app** (Apple 5.1.1(v)) — xoá thật, có xác nhận, hoàn tất ≤20 ngày
- [ ] Consent flow rõ ràng, **không tick sẵn**, tách riêng từng mục đích
- [ ] **Age gate 16+**, neutral (hỏi ngày sinh, không gợi ý)
- [ ] **Không** gacha thu tiền, **không** voucher/phần thưởng quy đổi giá trị thật
- [ ] Boss là **progress visualization**, không phải gameplay; App Store category **KHÔNG chọn Games**
- [ ] **Country availability = Vietnam only**
- [ ] Trả lời bộ câu hỏi **age rating mới** của Apple (khai báo UGC, messaging, AI)
- [ ] **Demo account** cho reviewer, có sẵn nhóm + dữ liệu mẫu (chống reject 2.1)

**Hạ tầng**
- [ ] Database + object storage **primary tại VN** (VNG Cloud / Viettel IDC / FPT Cloud / CMC Cloud)
- [ ] Bật **audit log** ngay từ đầu (cần cho nghĩa vụ 2 năm sau này)

### 🟠 B. TRƯỚC KHI CÓ 10.000 USER (thực chất: trước 1.000 người dùng thường xuyên/tháng)

- [ ] ⚠️ **Ý kiến luật sư bằng văn bản: Teemi có phải MXH không? Cần Giấy phép hay Giấy xác nhận thông báo?** Làm việc này **trước** khi tới ngưỡng, vì thủ tục mất nhiều tháng
- [ ] Nộp hồ sơ **Giấy xác nhận thông báo cung cấp dịch vụ MXH** (làm sớm khi còn nhỏ — nhẹ hơn nhiều so với xin giấy phép khi đã bị chú ý)
- [ ] Chuẩn bị hồ sơ **Giấy phép cung cấp dịch vụ MXH**: tên miền .vn, máy chủ VN, nhân sự VN quản lý nội dung, đề án
- [ ] Triển khai **xác thực số điện thoại VN (OTP SMS)** — đưa chi phí SMS vào mô hình tài chính
- [ ] Hệ thống **lưu log 2 năm**: IP, login/logout, nhật ký giao dịch
- [ ] Quy trình **gỡ nội dung 24h / 06h khẩn cấp** với người trực thật
- [ ] ⚠️ **Ý kiến luật sư: cơ chế boss có phải trò chơi điện tử G1 không?**
- [ ] Đánh giá lại: đã chạm **100.000 chủ thể dữ liệu** chưa? Nếu gần → mất miễn trừ Điều 38, phải chuẩn bị DPIA + DPO
- [ ] Rà soát lại toàn bộ vendor: có chuyển dữ liệu xuyên biên giới không (rủi ro 5% doanh thu)
- [ ] Chính sách xử lý user <16 (chặn, hay flow parental consent)

### 🟢 C. TRƯỚC KHI THU TIỀN

- [ ] Ký **Paid Applications Agreement**, hoàn tất W-8BEN-E, thông tin ngân hàng
- [ ] Đăng ký thuế, hoá đơn điện tử, kế toán
- [ ] Xác nhận điều kiện hưởng **ưu đãi thuế sản xuất phần mềm**
- [ ] Điều khoản subscription rõ: giá, chu kỳ, auto-renew, cách huỷ (Apple 3.1.2)
- [ ] Nếu có gacha: **công bố tỉ lệ (odds)** trước khi mua (Apple 3.1.1) — và cân nhắc **bỏ hẳn** vì rủi ro pháp lý VN
- [ ] Chính sách hoàn tiền + điều khoản bảo vệ người tiêu dùng (Luật Bảo vệ quyền lợi người tiêu dùng 2023)
- [ ] Nếu premium có "lưu trữ dài hơn": ghi rõ **retention policy** trong Privacy Policy — vừa compliance vừa là sản phẩm
- [ ] Rà soát: có nghĩa vụ **DPO** chưa (nếu đã mất miễn trừ) — nhân sự cần **≥2 năm kinh nghiệm** pháp chế/an ninh mạng/quản trị rủi ro theo ND 356/2025

---

## 11. NHỮNG ĐIỀU KHÔNG XÁC MINH ĐƯỢC (nói thẳng)

1. **Điều/khoản chính xác của ND 147/2024 quy định ngưỡng 10.000 lượt truy cập / 1.000 người dùng thường xuyên.** Con số được xác nhận nhất quán bởi hai nguồn độc lập (Vạn Luật, Thư viện Pháp luật) nhưng không trích được nguyên văn từ Công báo. **Cần luật sư đối chiếu bản gốc.**
2. **Danh mục đầy đủ dữ liệu cá nhân nhạy cảm theo ND 356/2025** — các nguồn truy cập được (thuvienphapluat 403, congan.quangngai không đầy đủ) chỉ xác nhận một phần: có dữ liệu vị trí, tội phạm, sức khoẻ, sinh trắc học. **Cần đọc bản gốc Nghị định 356/2025 để biết chính xác dữ liệu về "thói quen sinh hoạt" có bị coi là sức khoẻ không.** Đây là câu hỏi quyết định số phận miễn trừ 5 năm của Teemi.
3. **COPPA 2025 amendments** — ftc.gov trả về 403. Ngày compliance deadline chưa xác minh được. **Không tự tin dùng.** Nếu MVP chỉ phát hành VN thì không cần.
4. **Ngưỡng "số lượng lớn chủ thể dữ liệu" = 100.000** — chỉ có một nguồn (XT Law), chưa đối chiếu điều khoản gốc.
5. **Cụm "24 giờ" trong Apple Guideline 1.2** — không nằm trong 4 gạch đầu dòng nguyên văn của guideline hiện hành, nhưng là yêu cầu thực thi nhất quán trong các thông báo reject và tài liệu hướng dẫn của bên thứ ba. Thiết kế cho 24 giờ, đừng cãi.
6. **Nghị định 147/2024 có bị sửa đổi sau tái cơ cấu bộ ngành 2025 không** — thẩm quyền cấp phép đã chuyển từ Bộ TT&TT sang Bộ VHTTDL; cần kiểm tra có nghị định sửa đổi nào không.

---

## 12. NĂM CÂU HỎI ĐƯA THẲNG CHO LUẬT SƯ VN

1. Teemi (app nhóm kín, user nộp ảnh + text, reaction lẫn nhau, không có feed công khai, không có chat 1-1) có thuộc định nghĩa "mạng xã hội" tại Điều 3 Nghị định 147/2024 không? Nếu có, ở quy mô nào thì cần Giấy phép thay vì Giấy xác nhận thông báo, và **cách đo "người sử dụng thường xuyên"** là gì?
2. Cơ chế "boss nhóm" mô tả như trên có bị xếp là trò chơi điện tử trên mạng loại G1 không? Nếu có, cần thay đổi thiết kế thế nào để không phải xin giấy phép G1?
3. Dữ liệu Teemi thu thập (goal free-text về thói quen sinh hoạt, ảnh proof đã strip EXIF, không nhận diện khuôn mặt) có bị coi là **dữ liệu cá nhân nhạy cảm** theo Nghị định 356/2025 không? Teemi có giữ được miễn trừ Điều 38 khoản 2 Luật 91/2025 không?
4. Nghĩa vụ **lưu log 2 năm** (ND 147) và **quyền xoá dữ liệu 20 ngày** (ND 356) mâu thuẫn thế nào, và cách thiết kế hệ thống để thoả mãn cả hai?
5. Với Điều 16 khoản 2 Luật ANM 116/2025, việc **chặn hoàn toàn user dưới 16 tuổi** bằng age gate tự khai có đủ để miễn trách nhiệm không, hay Teemi vẫn phải làm age assurance thực chất?

---

## PHỤ LỤC — DANH MỤC NGUỒN

**Luật & Nghị định**
- [Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 — Công báo](https://congbao.chinhphu.vn/van-ban/luat-so-91-2025-qh15-45578.htm)
- [Nghị định 356/2025/NĐ-CP — toàn văn](https://thuvienphapluat.vn/van-ban/Quyen-dan-su/Nghi-dinh-356-2025-ND-CP-huong-dan-Luat-Bao-ve-du-lieu-ca-nhan-687428.aspx)
- [Nghị định 147/2024/NĐ-CP — Chinhphu.vn](https://vanban.chinhphu.vn/?pageid=27160&docid=211654)
- [Nghị định 330/2026/NĐ-CP — Chinhphu.vn](https://vanban.chinhphu.vn/?docid=219266&pageid=27160)
- [Luật An ninh mạng 116/2025/QH15 — nội dung mới](https://xaydungchinhsach.chinhphu.vn/nhung-noi-dung-moi-trong-luat-an-ninh-mang-so-116-2025-qh15-119260629145615168.htm)
- [Nghị định 163/2024/NĐ-CP hướng dẫn Luật Viễn thông](https://thuvienphapluat.vn/van-ban/Cong-nghe-thong-tin/Nghi-dinh-163-2024-ND-CP-huong-dan-Luat-Vien-thong-620748.aspx)

**Cơ quan nhà nước**
- [Bộ Công an — Luật BVDLCN có hiệu lực 01/01/2026](https://bocongan.gov.vn/chinh-sach-phap-luat/bai-viet/luat-bao-ve-du-lieu-ca-nhan-chinh-thuc-co-hieu-luc-thi-hanh-tu-ngay-01-01-2026-1767186124)
- [Bộ KH&CN — xác thực tài khoản MXH](https://mst.gov.vn/xac-thuc-tai-khoan-mang-xa-hoi-bang-so-dien-thoai-cu-hich-moi-tu-nghi-dinh-147-2024-nd-cp-197241227105213649.htm)
- [Bộ KH&CN — quản lý trò chơi điện tử ND 147](https://mst.gov.vn/nghi-dinh-147-2024-nd-cp-quan-ly-chat-che-dich-vu-tro-choi-dien-tu-tren-mang-va-thong-tin-tren-internet-197241227124622733.htm)
- [Cổng DVC Quốc gia — thủ tục cấp GP MXH 2.002181](https://dichvucong.gov.vn/p/home/dvc-chi-tiet-thu-tuc-hanh-chinh.html?ma_thu_tuc=2.002181)
- [ABEI — danh sách giấy phép MXH đã cấp](https://abei.gov.vn/danh-sach-cap-phep/danh-sach-giay-phep-thiet-lap-mang-xa-hoi-tren-mang-tinh-den-3182025/106296)
- [Báo Chính phủ — mức xử phạt VPHC về BVDLCN](https://baochinhphu.vn/muc-xu-phat-vi-pham-hanh-chinh-doi-voi-hanh-vi-vi-pham-ve-bao-ve-du-lieu-ca-nhan-102260822154959691.htm)

**Apple / Google**
- [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Apple Developer News — cập nhật guideline 06/02/2026](https://developer.apple.com/news/?id=d75yllv4)
- [Apple Developer News — age ratings mới](https://developer.apple.com/news/?id=ks775ehf)
- [Apple Developer News — age requirements Brazil/Australia/Singapore/Utah/Louisiana](https://developer.apple.com/news/?id=f5zj08ey)
- [Google Play — User Generated Content policy](https://support.google.com/googleplay/android-developer/answer/9876937?hl=en)
- [Google Play — moderation requirements](https://support.google.com/googleplay/android-developer/answer/12923286?hl=en)

**Phân tích của hãng luật / chuyên gia**
- [Frasers Law — Nghị định 356/2025](https://www.frasersvn.com/vi/legal-updates-and-publications/the-next-chapter-in-data-protection-new-decree-guiding-the-personal-data-protection-law)
- [XT Law — Luật BVDLCN, doanh nghiệp cần lưu ý gì](https://xtlaw.com.vn/luat-bao-ve-du-lieu-ca-nhan-doanh-nghiep-can-luu-y-gi.html)
- [Luật Việt An — Giấy phép mạng xã hội](https://luatvietan.vn/giay-phep-mang-xa-hoi.html)
- [Vạn Luật — Giấy phép mạng xã hội](https://vanluat.vn/giay-phep-mang-xa-hoi-998.html)
- [Luật Việt An — Giấy phép game G1](https://luatvietan.vn/giay-phep-game-online-g1.html)
- [KPMG VN — Nghị định Viễn thông mới](https://kpmg.com/vn/vi/insights/2024/12/vietnam-new-telecommunications-decree.html)
- [Antoanthongtin.vn — nội địa hoá dữ liệu ND 53/2022](https://antoanthongtin.vn/tin/nghi-dinh-53-2022-huong-dan-chi-tiet-ve-noi-dia-hoa-du-lieu-tai-viet-nam)
