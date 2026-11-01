import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCity, getRegionOf } from "@/data/cities";
import { BRAND_NAME, BRAND_SLUG, brandVariants } from "@/content/brand";
import { COMPANY } from "@/lib/site";
import { BrandPage } from "@/components/brand/BrandPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ cidade: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/registro-de-marca/[cidade]">): Promise<Metadata> {
  const city = getCity((await params).cidade);
  if (!city) return {};
  const title = `${BRAND_NAME} em ${city.name}`;
  const description = brandVariants(city).meta;
  const path = `/${BRAND_SLUG}/${city.slug}/`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: COMPANY.name,
      url: path,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({
  params,
}: PageProps<"/registro-de-marca/[cidade]">) {
  const city = getCity((await params).cidade);
  if (!city) notFound();
  return <BrandPage city={city} region={getRegionOf(city.slug)} />;
}
