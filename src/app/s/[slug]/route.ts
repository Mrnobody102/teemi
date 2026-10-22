import { renderSoCongKhai } from "../../../ui/screens/so-cong-khai";

/**
 * Trang công khai của link mời — Route Handler, không phải page.
 *
 * Page nào cũng bị Next hydrate, tức kéo theo ~178 KB JS phải tải và chạy.
 * Trang này chỉ-đọc nên không cần hydrate, và nó là cửa phễu cold start trên
 * máy yếu. Xem `docs/design/01` §8 và `src/ui/screens/so-cong-khai.ts`.
 */
export async function GET(): Promise<Response> {
  return new Response(renderSoCongKhai(), {
    headers: {
      "content-type": "text/html; charset=utf-8",
      // share_token có TTL 7 ngày; cache ngắn để card cũ không kẹt bản lỗi thời.
      "cache-control": "public, max-age=60",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}
