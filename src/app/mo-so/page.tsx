import { ScreenMoSo } from "../../ui/screens/mo-so";

export default async function Page({ searchParams }: { searchParams: Promise<{ b?: string }> }) {
  const { b } = await searchParams;
  return <ScreenMoSo step={b === "goal" ? "goal" : "name"} />;
}
