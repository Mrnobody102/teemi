# Teemi

> Mỗi người một tấm. Cả nhóm một sổ.

Social challenge app private-first cho nhóm bạn thân Việt Nam. Repo này đã qua vòng nghiên cứu/phản biện và đang ở **giai đoạn 1: schema CSDL + logic nghiệp vụ thuần**, chưa build UI.

Tên sản phẩm là **Teemi**. Tên bảng CSDL `book` / `book_id` / `book_day` giữ nguyên vì đó là thuật ngữ kỹ thuật. Cơ chế boss chưa quyết sau Bước 0, nên repo hiện không build boss/HP/damage.

## Cấu trúc tài liệu

| Thư mục | Nội dung |
|---|---|
| [docs/00-source/](docs/00-source/) | Bản thảo gốc của founder (chưa qua phản biện) |
| [docs/research/](docs/research/) | Nghiên cứu thị trường, đối thủ, hành vi, kỹ thuật, pháp lý |
| [docs/critique/](docs/critique/) | Phản biện đối kháng + đánh giá chiến lược |
| [docs/plan/](docs/plan/) | Kế hoạch thực thi: MVP scope, kiến trúc, roadmap, metrics |
| [docs/adr/](docs/adr/) | Architecture Decision Records — mỗi quyết định lớn một file |
| [docs/design/](docs/design/) | Thiết kế UX/UI, flow, tone of voice |

## Bắt đầu từ đâu

1. Đọc [HANDOFF.md](HANDOFF.md) — trạng thái làm tiếp và ràng buộc mới nhất
2. Đọc [docs/plan/00-ke-hoach-tong.md](docs/plan/00-ke-hoach-tong.md) — bức tranh tổng
3. Đọc [docs/plan/_rulings.md](docs/plan/_rulings.md) mục A — nguồn chân lý cho mọi hằng số
4. Đọc [docs/adr/ADR-004-quyet-dinh-founder-04-09.md](docs/adr/ADR-004-quyet-dinh-founder-04-09.md) — founder giữ tên Teemi và để ngỏ boss

## Trạng thái

- [x] Ghi lại chiến lược gốc
- [x] Nghiên cứu thị trường & phản biện
- [x] Chốt nền kỹ thuật dùng chung: TypeScript strict, Drizzle, Vitest
- [x] Bắt đầu schema CSDL và core pure functions
- [ ] Prototype / kiểm chứng giả thuyết lõi
