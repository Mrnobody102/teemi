import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

/*
 * Patrick Hand, tự cắt còn 241 ký tự tiếng Việt — 23 KB. Lý do chọn và cách
 * cắt lại: src/ui/fonts/README.md. `swap` để chữ hiện ngay bằng font hệ thống
 * rồi mới đổi, không bao giờ chặn render vì chờ font.
 */
const patrick = localFont({
  src: "../ui/fonts/PatrickHand-vi.woff2",
  variable: "--font-patrick",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Teemi — demo 7 màn",
  description: "Mỗi người một tấm. Cả nhóm một sổ.",
  // Trang sổ không bao giờ được index: URL đoán được = người lạ duyệt ảnh của
  // các nhóm bạn 16 tuổi.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={patrick.variable}>
      <body>{children}</body>
    </html>
  );
}
