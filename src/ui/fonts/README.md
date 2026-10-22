# Font

`PatrickHand-vi.woff2` — **Patrick Hand**, cắt còn 241 ký tự: đủ bảng chữ tiếng
Việt (12 nguyên âm × 6 thanh, hoa và thường, `đ`/`Đ`), ASCII in được, và vài dấu
câu typographic. Danh sách ký tự: `PatrickHand-vi.chars.txt`.

Giấy phép SIL OFL 1.1 (`OFL-PatrickHand.txt`). Dòng copyright **không khai báo
Reserved Font Name**, nên được phép cắt và giữ tên.

## Vì sao font này

So trên chữ thật của sản phẩm (22/10/2026), 6 font viết tay có subset tiếng Việt:

| Font | Kết | Lý do |
|---|---|---|
| Caveat · Gochi Hand · Coming Soon | loại | **không có dấu tiếng Việt** |
| Sriracha | loại | nghiêng kiểu chữ ký, đọc mệt |
| Mali · Shantell Sans | loại | quá rộng — tên sổ xuống dòng ở 380 px |
| Itim | loại | sạch quá, mất chất doodle |
| Pangolin | đẹp nhất, nhưng **58 KB** sau khi cắt | nét răng cưa = nhiều điểm vẽ |
| **Patrick Hand** | **chọn — 23 KB** sau khi cắt | gọn, dấu chồng rõ, nhẹ hơn Pangolin 2,5 lần |

Subset Google Fonts không cắt được đủ: tiếng Việt cần **cả** subset `latin`
(72,9 KB với Pangolin) **và** `vietnamese`, vì chữ cái gốc nằm ở `latin`.

## Cắt lại

```bash
pip install fonttools brotli
pyftsubset PatrickHand-Regular.ttf --text-file=PatrickHand-vi.chars.txt \
  --flavor=woff2 --layout-features='kern,liga,ccmp,mark,mkmk,locl' \
  --output-file=PatrickHand-vi.woff2
```

Font chỉ dùng cho **chữ trang trí** (tên sổ, tiêu đề, nhãn XONG/TOANG, trạng
thái trống). Form, chữ thân, màn chính sách dùng font hệ thống — luật 70/30.
Ký tự ngoài bảng (emoji trong tên sổ chẳng hạn) tự rơi về font hệ thống.
