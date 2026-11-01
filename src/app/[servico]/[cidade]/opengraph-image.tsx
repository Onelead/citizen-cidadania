import { getPage } from "@/content";
import { ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Citizen Cidadania";

export default async function Image({
  params,
}: {
  params: Promise<{ servico: string; cidade: string }>;
}) {
  const { servico, cidade } = await params;
  return ogImage(getPage(servico, cidade)?.h1 ?? "Citizen Cidadania");
}

export { generateStaticParams } from "./page";
