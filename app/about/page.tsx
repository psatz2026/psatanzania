import Image from "next/image";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import CounterCard from "@/components/cards/CounterCard";

const stats = [
  { value: 6, suffix: "", label: "Strategic Pillars" },
  { value: 5, suffix: "+", label: "Active Programs" },
  { value: 20, suffix: "+", label: "Volunteers" },
  { value: 3, suffix: "", label: "Regions Covered" },
];

const team = [
  { name: "Founding Team", description: "PSA Tanzania was founded in 2026 by young health advocates committed to transforming patient safety in Tanzania." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-blue pt-[160px] pb-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="max-w-[800px]">
            <p className="font-body text-[14px] font-medium tracking-widest uppercase text-sky-blue mb-6">About PSA Tanzania</p>
            <h1 className="font-heading text-[56px] lg:text-[72px] leading-[1.08] text-white mb-8">
              A youth-led movement for safer care
            </h1>
            <p className="font-body text-[20px] leading-[1.5] text-white/75">
              Patient Safety Alliance Tanzania is dedicated to reducing preventable harm and building a health system where every patient is treated with safety, dignity, and respect.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-[80px] bg-ice-blue">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s) => (
              <CounterCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-[120px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-[50%] relative h-[400px] lg:h-[520px] w-full rounded-2xl overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/nmBXjeuU5Pr3XtsNLTfUj7YhY.jpg"
                alt="PSA Tanzania community"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:w-[50%] flex flex-col gap-8">
              <h2 className="font-heading text-[40px] lg:text-[46px] leading-[1.15] text-carbon-black">Our mission</h2>
              <p className="font-body text-[18px] leading-[1.7] text-steel-gray">
                To promote patient safety and patient-centred care in Tanzania by empowering communities, generating evidence, and advocating for accountability within the health system.
              </p>
              <p className="font-body text-[18px] leading-[1.7] text-steel-gray">
                We believe that safety is not a privilege — it is a right. Every patient deserves to receive care that is free from preventable harm, delivered with respect and dignity, and shaped by their own voice.
              </p>
              <Button label="Our Programs" href="/causes" variant="primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[80px] bg-ice-blue">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <h2 className="font-heading text-[40px] leading-[1.1] text-carbon-black mb-12 text-center">Our values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Youth-Led", desc: "We believe young people are not just the future of health advocacy — they are its present." },
              { title: "Evidence-Based", desc: "Every advocacy position we take is grounded in data, research, and lived patient experience." },
              { title: "Community-Centred", desc: "We design and deliver our programs with communities, not for them." },
            ].map((v) => (
              <div key={v.title} className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-carbon-black-5">
                <h3 className="font-heading text-[22px] text-navy-blue">{v.title}</h3>
                <p className="font-body text-[16px] leading-[1.6] text-steel-gray">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Be part of the change."
        description="Whether you are a patient, health worker, researcher, or concerned citizen — there is a place for you in PSA Tanzania."
      />
    </>
  );
}
