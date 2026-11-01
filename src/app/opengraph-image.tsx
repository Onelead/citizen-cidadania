import { ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Citizen Cidadania";

export default function Image() {
  return ogImage("Cidadania e documentação internacional");
}

export const dynamic = "force-static";
