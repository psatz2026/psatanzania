import CauseCard from "@/components/cards/CauseCard";
import CTASection from "@/components/sections/CTASection";
import { causes } from "@/data/causes";

export default function CausesStaticPage() {
  return (
    <>
      <section className="bg-ice-blue pt-[160px] pb-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="max-w-[700px]">
            <h1 className="font-heading text-[56px] lg:text-[72px] leading-[1.08] text-navy-blue mb-8">
              Our programs
            </h1>
            <p className="font-body text-[20px] leading-[1.5] text-steel-gray">
              Six strategic pillars guiding PSA Tanzania's work from 2026 to 2029.
            </p>
          </div>
        </div>
      </section>
      <section className="py-[100px]">
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
