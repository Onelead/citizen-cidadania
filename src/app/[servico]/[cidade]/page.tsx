import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPage, pagePath, pages } from "@/content";
import { ServicePage } from "@/components/ServicePage";
import { COMPANY } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => ({ servico: p.service, cidade: p.city }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[servico]/[cidade]">): Promise<Metadata> {
  const { servico, cidade } = await params;
  const page = getPage(servico, cidade);
  if (!page) return {};
  const path = pagePath(page);
  return {
    title: { absolute: page.seoTitle },
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: COMPANY.name,
      url: path,
      title: page.seoTitle,
      description: page.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.metaDescription,
    },
  };
}

export default async function Page({
  params,
}: PageProps<"/[servico]/[cidade]">) {
  const { servico, cidade } = await params;
  const page = getPage(servico, cidade);
  if (!page) notFound();
  return <ServicePage page={page} />;
}
