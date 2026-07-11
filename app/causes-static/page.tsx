import CauseCard from "@/components/cards/CauseCard";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import { causes } from "@/data/causes";

export default function CausesStaticPage() {
  return (
    <>
      <PageHero
        tone="light"
        eyebrow="Our Programs"
        title="Our programs"
        lead="Six strategic pillars guiding PSA Tanzania's work."
      />
      <section className="py-[60px] lg:py-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((cause) => <CauseCard key={cause.slug} cause={cause} />)}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
