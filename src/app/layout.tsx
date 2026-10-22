import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
