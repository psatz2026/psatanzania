import { notFound } from "next/navigation";
import { legalPages } from "@/data/legal";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = legalPages.find((p) => p.slug === slug);
  if (!page) return {};
  return pageMetadata({
    title: page.title,
    description: `${page.title} for Patient Safety Alliance Tanzania — how we handle your data and the terms that govern use of our website.`,
    path: `/legal-pages/${page.slug}`,
  });
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = legalPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const lines = page.content.split("\n").filter((l) => l.trim());

  return (
    <section className="pt-[130px] lg:pt-[170px] pb-[60px] lg:pb-[90px]">
      <div className="max-w-[800px] mx-auto px-5 sm:px-[30px]">
        <Breadcrumbs
          items={[{ name: page.title, path: `/legal-pages/${page.slug}` }]}
          tone="light"
          className="mb-6"
        />
        <h1 className="font-heading text-[46px] leading-[1.1] text-navy-blue mb-4">{page.title}</h1>
        {page.lastUpdated && (
          <p className="font-body text-[14px] text-steel-gray mb-12">
            Last updated: {new Date(page.lastUpdated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        )}
        <div className="flex flex-col gap-4">
          {lines.map((line, i) => {
            if (line.startsWith("## ")) return <h2 key={i} className="font-heading text-[32px] text-navy-blue mt-8">{line.replace("## ", "")}</h2>;
            if (line.startsWith("### ")) return <h3 key={i} className="font-heading text-[22px] text-carbon-black mt-4">{line.replace("### ", "")}</h3>;
            return <p key={i} className="font-body text-[17px] leading-[1.7] text-steel-gray">{line}</p>;
          })}
        </div>
      </div>
    </section>
  );
}
