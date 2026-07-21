import type { Metadata } from "next";
import CauseCard from "@/components/cards/CauseCard";
import CTASection from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Programs — Patient Safety Initiatives in Tanzania",
  description:
    "Six strategic pillars guide PSA Tanzania's work: patient empowerment, evidence generation, policy advocacy, capacity building, accountability, and youth leadership.",
  path: "/causes",
});
import PageHero from "@/components/sections/PageHero";
import AnimateIn from "@/components/ui/AnimateIn";
import { causes } from "@/data/causes";

export default function CausesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
          title="Featured Programs"
          lead="Our work is structured around six programs that guide everything from community engagement to national policy advocacy."
        breadcrumbs={[{ name: "Programs", path: "/causes" }]}
      />

      <section className="py-[60px] lg:py-[100px]">
        <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((cause, i) => (
              <AnimateIn key={cause.slug} delay={i * 0.08}>
                <CauseCard cause={cause} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to support a cause?" description="Get involved and help us drive real change in patient safety across Tanzania." />
    </>
  );
}
