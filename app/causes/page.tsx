import type { Metadata } from "next";
import CauseCard from "@/components/cards/CauseCard";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Six strategic pillars guide PSA Tanzania's work: patient empowerment, evidence generation, policy advocacy, capacity building, accountability, and youth leadership.",
};
import PageHero from "@/components/sections/PageHero";
import AnimateIn from "@/components/ui/AnimateIn";
import { causes } from "@/data/causes";

export default function CausesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Six pillars of change"
        lead="Our work is structured around six strategic pillars that guide everything from community programs to national policy advocacy."
      />

      <section className="py-[60px] lg:py-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
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
