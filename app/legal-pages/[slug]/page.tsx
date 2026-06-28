import { notFound } from "next/navigation";
import { legalPages } from "@/data/legal";

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const page = legalPages.find((p) => p.slug === params.slug);
  if (!page) notFound();

  const lines = page.content.split("\n").filter((l) => l.trim());

  return (
    <section className="pt-[160px] pb-[100px]">
      <div className="max-w-[800px] mx-auto px-[30px]">
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
