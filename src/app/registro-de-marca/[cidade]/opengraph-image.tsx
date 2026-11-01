import { getCity } from "@/data/cities";
import { BRAND_NAME } from "@/content/brand";
import { ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Citizen Cidadania";

export { generateStaticParams } from "./page";

export default async function Image({
  params,
}: {
  params: Promise<{ cidade: string }>;
}) {
  const city = getCity((await params).cidade);
  return ogImage(`${BRAND_NAME} em ${city?.name ?? ""}`);
}
