/** Khung điện thoại — chỉ dùng ở trang tổng thể để xem nhiều màn cạnh nhau. */
export function Phone({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="m-0 flex flex-col">
      <figcaption className="mb-2">
        <div className="text-[13px] font-medium text-ink">{title}</div>
        {note ? <div className="text-[12px] leading-snug text-muted">{note}</div> : null}
      </figcaption>
      <div className="h-[620px] w-full overflow-hidden rounded-[22px] border border-line bg-paper shadow-sm">
        <div className="h-full overflow-y-auto">{children}</div>
      </div>
    </figure>
  );
}
