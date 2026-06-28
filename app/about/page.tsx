import CTASection from "@/components/sections/CTASection";
import CounterCard from "@/components/cards/CounterCard";
import StickyValueStack from "@/components/sections/StickyValueStack";
import AnimateIn from "@/components/ui/AnimateIn";

const stats = [
  { value: 6, suffix: "", label: "Strategic Pillars" },
  { value: 5, suffix: "+", label: "Active Programs" },
  { value: 20, suffix: "+", label: "Volunteers" },
  { value: 3, suffix: "", label: "Regions Covered" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-blue pt-[160px] pb-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="max-w-[800px]">
            <AnimateIn y={16}>
              <p className="font-body text-[14px] font-medium tracking-widest uppercase text-sky-blue mb-6">About PSA Tanzania</p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="font-heading text-[56px] lg:text-[72px] leading-[1.08] text-white mb-8">
                A youth-led movement for safer care
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="font-body text-[20px] leading-[1.5] text-white/75">
                Patient Safety Alliance Tanzania is dedicated to reducing preventable harm and building a health system where every patient is treated with safety, dignity, and respect.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-[80px] bg-ice-blue">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.1}>
                <CounterCard value={s.value} suffix={s.suffix} label={s.label} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + Values — sticky scroll stack */}
      <StickyValueStack />

      <CTASection
        title="Be part of the change."
        description="Whether you are a patient, health worker, researcher, or concerned citizen, there is a place for you in PSA Tanzania."
      />
    </>
  );
}
