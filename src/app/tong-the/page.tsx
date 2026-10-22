/**
 * Xem cả 7 màn cùng lúc — chỉ để dev nhìn, không phải màn của app.
 * Mỗi khung là iframe trỏ vào route thật.
 */
const screens: ReadonlyArray<readonly [string, string]> = [
  ["Sổ hôm nay", "/so"],
  ["Link mời", "/s/w9td4mz2hb"],
  ["Mở sổ", "/mo-so"],
  ["Chọn kèo", "/mo-so?b=goal"],
  ["Nộp", "/nop"],
  ["Chọn nhãn", "/nop?b=1"],
  ["Card", "/card"],
  ["Ảnh", "/anh/p-linh"],
  ["Của tôi", "/cua-toi"],
  ["Chính sách", "/chinh-sach"],
];

export default function Page() {
  return (
    <main className="px-5 py-6">
      <div className="flex flex-wrap gap-6">
        {screens.map(([title, href]) => (
          <figure key={href} className="m-0">
            <a href={href} className="mb-2 block font-hand text-[20px]">
              {title}
            </a>
            <iframe src={href} title={title} loading="lazy" className="hand block h-[720px] w-[360px] bg-paper" />
          </figure>
        ))}
      </div>
    </main>
  );
}
