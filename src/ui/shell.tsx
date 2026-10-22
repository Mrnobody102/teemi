import Link from "next/link";

/**
 * Khung một màn: tiêu đề trên, nội dung giữa, thanh hành động dính đáy.
 *
 * Hành động chính luôn ở 1/3 dưới màn hình (dùng một tay, buổi tối) và nằm
 * trong safe-area — webview không bảo đảm có chrome của trình duyệt.
 */
export function Shell({
  title,
  back,
  right,
  plainTitle = false,
  footer,
  children,
}: {
  title?: React.ReactNode;
  back?: string;
  right?: React.ReactNode;
  /** Màn chính sách: tiêu đề font hệ thống, không trang trí (luật 70/30). */
  plainTitle?: boolean;
  footer?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-dvh max-w-[420px] flex-col">
      {title || back || right ? (
        <header className="flex items-center gap-3 px-4 pt-4 pb-2">
          {back ? (
            <Link
              href={back}
              aria-label="Quay lại"
              className="-ml-1 flex h-11 w-11 shrink-0 items-center justify-center text-[22px] text-muted"
            >
              ←
            </Link>
          ) : null}
          <div className="min-w-0 flex-1">
            {typeof title === "string" ? (
              <h1
                className={
                  plainTitle
                    ? "text-[17px] font-semibold"
                    : "font-hand text-[26px] leading-tight"
                }
              >
                {title}
              </h1>
            ) : (
              title
            )}
          </div>
          {right}
        </header>
      ) : null}

      <div className="flex-1">{children}</div>

      {footer ? (
        <div className="sticky bottom-0 mt-auto bg-paper px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom,0px))]">
          {footer}
        </div>
      ) : null}
    </div>
  );
}

/** Nút chính kiểu sticker — màu bút highlight, viền mực, bóng cứng. */
export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="hand sticker flex min-h-12 items-center justify-center bg-marker px-4 py-2.5 font-hand text-[22px] text-[#16140f]"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  const cls =
    "hand-2 sticker flex min-h-12 w-full items-center justify-center bg-frame px-4 py-2.5 font-hand text-[20px]";
  return href ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <button type="button" className={cls}>
      {children}
    </button>
  );
}
