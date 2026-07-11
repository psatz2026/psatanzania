import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import AnimateIn from "@/components/ui/AnimateIn";
import { faqs } from "@/data/faqs";

export default function FAQsPage() {
  const categories = Array.from(new Set(faqs.map((f) => f.category).filter(Boolean)));

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        lead="Answers to the questions we hear most from patients, volunteers, and partners."
      />

      <section className="py-[60px] lg:py-[100px]">
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
