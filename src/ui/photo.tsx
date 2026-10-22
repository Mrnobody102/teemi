/**
 * Ảnh proof giả, dựng bằng CSS từ một seed ổn định.
 *
 * Cố ý KHÔNG dùng ảnh stock người thật: demo này để nhìn bố cục và cơ chế, và
 * một bức ảnh stock sẽ ngầm hứa một mức độ hoàn thiện chưa có. Khi R2 có thật,
 * component này đổi thành <img src={thumbUrl}>.
 */
export function Photo({ seed, className = "" }: { seed: string; className?: string }) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) % 360;
  }
  const hue = hash;
  const hue2 = (hash + 40) % 360;

  return (
    <div
      aria-hidden
      className={`h-full w-full ${className}`}
      style={{
        background: `
          radial-gradient(70% 60% at 30% 25%, hsl(${hue} 32% 72%) 0%, transparent 70%),
          radial-gradient(60% 70% at 75% 80%, hsl(${hue2} 28% 58%) 0%, transparent 65%),
          linear-gradient(160deg, hsl(${hue} 18% 86%), hsl(${hue2} 20% 64%))
        `,
      }}
    />
  );
}
