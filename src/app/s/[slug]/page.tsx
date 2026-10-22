import { ScreenSoHomNay } from "../../../ui/screens/so-hom-nay";

/** Trang public của link mời. Slug dựng từ `share_token`, TTL 7 ngày, noindex. */
export default function Page() {
  return <ScreenSoHomNay mode="public" />;
}
