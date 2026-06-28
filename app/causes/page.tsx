import CauseCard from "@/components/cards/CauseCard";
import CTASection from "@/components/sections/CTASection";
import { causes } from "@/data/causes";

export default function CausesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-blue pt-[160px] pb-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="max-w-[700px]">
            <p className="font-body text-[14px] font-medium tracking-widest uppercase text-sky-blue mb-6">Our Programs</p>
            <h1 className="font-heading text-[56px] lg:text-[72px] leading-[1.08] text-white mb-8">
              Six pillars of change
            </h1>
            <p className="font-body text-[20px] leading-[1.5] text-white/75">
              Our work is structured around six strategic pillars that guide everything from community programs to national policy advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((cause) => (
              <CauseCard key={cause.slug} cause={cause} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to support a cause?" description="Get involved and help us drive real change in patient safety across Tanzania." />
    </>
  );
}
