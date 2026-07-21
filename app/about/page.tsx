import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/seo";
import CounterCard from "@/components/cards/CounterCard";
import StickyValueStack from "@/components/sections/StickyValueStack";
import AnimateIn from "@/components/ui/AnimateIn";

export const metadata: Metadata = pageMetadata({
  title: "About Us — Our Mission for Patient Safety in Tanzania",
  description:
    "Patient Safety Alliance Tanzania is a youth-led movement reducing preventable harm and building a health system where every patient is treated with safety, dignity, and respect.",
  path: "/about",
});

const stats = [
  { value: 2026, suffix: "", label: "Year Founded" },
  { value: 6, suffix: "", label: "Strategic Pillars" },
  { value: 7, suffix: "", label: "Core Values" },
  { value: 10, suffix: "+", label: "Priority Groups Served" },
];

const featuredProgrammes = [
  "National Patient Safety Campaign",
  "Patient Safety Learning Hub",
  "Healthcare Quality Improvement Collaborative",
  "Youth for Patient Safety Network",
  "Digital Health & Patient Safety Initiative",
  "Patient Safety Research Forums",
];

const targetPopulation = [
  "Healthcare workers",
  "Community healthcare workers",
  "Pregnant women",
  "Children's parents and caregivers",
  "Elderly people",
  "Key vulnerable groups",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PSA Tanzania"
        title="A youth-led movement for safer care"
        lead="Patient Safety Alliance Tanzania is dedicated to reducing preventable harm and building a health system where every patient is treated with safety, dignity, and respect."
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

      {/* Vision + Mission + Core Values */}
      <StickyValueStack />

      {/* Featured Programmes */}
      <section className="py-[60px] lg:py-[100px]">
        <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
          <AnimateIn className="flex flex-col gap-3 mb-10 max-w-[640px]">
            <h2 className="font-heading text-[28px] lg:text-[40px] leading-[1.2] text-carbon-black">
              Featured Programmes
            </h2>
            <p className="font-body text-[17px] leading-[1.6] text-steel-gray">
              Initiatives advancing safer, more accountable care across Tanzania.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {featuredProgrammes.map((programme, i) => (
              <AnimateIn key={programme} delay={i * 0.05}>
                <div className="h-full rounded-xl border border-carbon-black-5 bg-white p-5 lg:p-6 flex items-start gap-4">
                  <span
                    aria-hidden
                    className="font-heading text-[14px] text-sky-blue mt-0.5 flex-shrink-0"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-heading text-[17px] lg:text-[18px] leading-[1.35] text-carbon-black">
                    {programme}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Target Population */}
      <section className="py-[60px] lg:py-[100px] bg-ice-blue">
        <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
          <AnimateIn className="flex flex-col gap-3 mb-10 max-w-[640px]">
            <h2 className="font-heading text-[28px] lg:text-[40px] leading-[1.2] text-carbon-black">
              Target Population
            </h2>
            <p className="font-body text-[17px] leading-[1.6] text-steel-gray">
              Who we serve and stand alongside.
            </p>
          </AnimateIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {targetPopulation.map((group, i) => (
              <AnimateIn key={group} delay={i * 0.04}>
                <li className="font-body text-[16px] lg:text-[17px] leading-[1.5] text-carbon-black bg-white rounded-xl border border-carbon-black-5 px-5 py-4">
                  {group}
                </li>
              </AnimateIn>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Be part of the change."
        description="Whether you are a patient, health worker, researcher, or concerned citizen, there is a place for you in PSA Tanzania."
      />
    </>
  );
}
