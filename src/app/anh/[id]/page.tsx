import { ScreenAnhChiTiet } from "../../../ui/screens/anh-chi-tiet";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ScreenAnhChiTiet personId={id} />;
}
