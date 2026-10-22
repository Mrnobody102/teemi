import { redirect } from "next/navigation";

// Demo chỉ có một sổ, nên trang chủ mở thẳng sổ đó.
export default function Page() {
  redirect("/so");
}
