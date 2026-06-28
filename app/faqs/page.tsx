import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import AnimateIn from "@/components/ui/AnimateIn";
import { faqs } from "@/data/faqs";

export default function FAQsPage() {
  const categories = Array.from(new Set(faqs.map((f) => f.category).filter(Boolean)));

  return (
    <>
      <section className="bg-navy-blue pt-[160px] pb-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="max-w-[700px]">
            <AnimateIn y={16}><p className="font-body text-[14px] font-medium tracking-widest uppercase text-sky-blue mb-6">FAQs</p></AnimateIn>
            <AnimateIn delay={0.1}><h1 className="font-heading text-[56px] lg:text-[72px] leading-[1.08] text-white mb-8">Frequently asked questions</h1></AnimateIn>
          </div>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="max-w-[800px] mx-auto flex flex-col gap-14">
            {categories.map((category, i) => (
              <AnimateIn key={category} delay={i * 0.08}>
                <div className="flex flex-col gap-6">
                  <h2 className="font-heading text-[24px] text-navy-blue border-b-2 border-sky-blue pb-3">
                    {category}
                  </h2>
                  <Accordion
                    items={faqs
                      .filter((f) => f.category === category)
                      .map((f) => ({ question: f.question, answer: f.answer }))}
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Still have questions?" description="Get in touch and our team will be happy to help." primaryLabel="Contact Us" primaryHref="/contact" secondaryLabel="About Us" secondaryHref="/about" />
    </>
  );
}
