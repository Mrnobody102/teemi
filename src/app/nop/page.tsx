import { ScreenNop } from "../../ui/screens/nop";

export default async function Page({ searchParams }: { searchParams: Promise<{ b?: string }> }) {
  const { b } = await searchParams;
  return <ScreenNop step={b ? "label" : "pick"} />;
}
