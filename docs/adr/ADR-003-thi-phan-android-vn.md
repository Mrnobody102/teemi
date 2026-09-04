# ADR-003: Thị phần Android tại Việt Nam — chốt con số

- **Trạng thái**: đã chốt
- **Ngày**: 2026-09-04
- **Giải quyết**: mục D-08 trong [docs/plan/_rulings.md](../plan/_rulings.md)

## Bối cảnh

Hồ sơ kế hoạch có hai con số mâu thuẫn cho cùng một đại lượng:

| Nguồn trong repo | Con số | Nhãn |
|---|---|---|
| `01-dinh-nghia-san-pham-v2.md` §6 mục 3, `03-kien-truc-ky-thuat.md` R3, `07-roadmap-12-tuan.md` §8(b) | **>85% Android** | `[FACT]` |
| `08-ux-flow-va-tone.md` §8.2 (dẫn r02/StatCounter T7/2026) | **60,38% Android** | có nguồn |

Con số này không phải chi tiết trang trí. Nó là căn cứ của hai lập luận:
1. **Chọn Android web push làm kênh thông báo dự phòng** — nếu Android chỉ ~57% chứ không phải >85%, thì một kênh chỉ chạy trên Android bỏ sót ~43% người dùng, không phải ~15%.
2. **Ưu tiên chống ROM Xiaomi/Oppo/Vivo kill background** — vẫn quan trọng, nhưng không còn là "gần như toàn bộ người dùng".

## Kiểm chứng

StatCounter Global Stats, Mobile OS Market Share Viet Nam, **tháng 8/2026**:

| Hệ điều hành | Thị phần |
|---|---|
| Android | **57,33%** |
| iOS | **42,64%** |
| Khác | 0,03% |

Nguồn: [gs.statcounter.com/os-market-share/mobile/viet-nam](https://gs.statcounter.com/os-market-share/mobile/viet-nam) (truy cập 04/09/2026)

## Quyết định

**Chốt: Android ≈ 57%, iOS ≈ 43% tại Việt Nam (StatCounter, T8/2026).**

Nhãn `[FACT]` gắn cho ">85%" bị **thu hồi**. Mọi chỗ trong hồ sơ dùng ">85%" phải sửa về ~57% hoặc gỡ nhãn FACT.

## Hệ quả

1. **Android web push không còn là phương án dự phòng đủ.** Nó phủ ~57% người dùng, không phải ~85%. Nếu H1 (card thay được push) rơi vùng xám, web push chỉ cứu được hơn nửa số người — phải tính lại xem có đáng 0,3 pw không, hoặc phải có đường thứ hai cho iOS.
2. **iOS quan trọng hơn hồ sơ đang giả định.** Gần một nửa người dùng. Mọi quyết định "để iOS sau" phải xem lại.
3. **Đối trọng:** iOS ở VN tập trung ở nhóm thu nhập cao hơn — có lợi cho monetization, bất lợi cho giả định "người dùng VN không trả tiền" ở [10-mo-hinh-kinh-doanh.md](../plan/10-mo-hinh-kinh-doanh.md). Cũng cần xem lại.

## Cảnh báo về phương pháp đo

StatCounter đo **lưu lượng web**, không đo máy đang hoạt động. Người dùng iOS lướt web nhiều hơn trên đầu người, nên số này **thiên vị iOS** so với thị phần thiết bị thực. Thị phần thiết bị thực của Android tại VN nhiều khả năng cao hơn 57% — nhưng vẫn **không tới 85%**.

Với Chốt Sổ, StatCounter lại là thước đo *đúng hơn* thị phần thiết bị: sản phẩm là web app chạy trong webview, nên cái đáng quan tâm là phân bố của **lưu lượng web**, chính là thứ StatCounter đo.

## Khi nào xem lại

Kiểm lại tại cổng quyết định 26/01/2027, hoặc ngay khi có dữ liệu user-agent thật từ beta — dữ liệu của chính sản phẩm thắng mọi nguồn bên ngoài.
