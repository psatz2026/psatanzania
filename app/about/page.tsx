import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us — Our Mission for Patient Safety",
  description:
    "Patient Safety Alliance is a youth-led movement reducing preventable harm and building a health system where every patient is treated with safety, dignity, and respect.",
  path: "/about",
});
import CounterCard from "@/components/cards/CounterCard";
import StickyValueStack from "@/components/sections/StickyValueStack";
import AnimateIn from "@/components/ui/AnimateIn";

const stats = [
  { value: 2026, suffix: "", label: "Year Founded" },
  { value: 6, suffix: "", label: "Strategic Pillars" },
  { value: 7, suffix: "", label: "Core Values" },
  { value: 10, suffix: "+", label: "Priority Groups Served" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PSA"
        title="A youth-led movement for safer care"
        lead="Patient Safety Alliance is dedicated to reducing preventable harm and building a health system where every patient is treated with safety, dignity, and respect."
        breadcrumbs={[{ name: "About", path: "/about" }]}
      />

      {/* Stats */}
      <section className="py-[56px] lg:py-[80px] bg-ice-blue">
        <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
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
        description="Whether you are a patient, health worker, researcher, or concerned citizen, there is a place for you in PSA."
      />
    </>
  );
}
