import AnimateIn from "@/components/ui/AnimateIn";

export default function UrgencySection() {
  return (
    <section className="py-[80px] lg:py-[140px] bg-ice-blue">
      <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
        <div className="flex flex-col gap-16 lg:gap-24">
          {/* Urgency Statement */}
          <div className="flex flex-col gap-12 lg:gap-16">
            <AnimateIn className="max-w-[820px] flex flex-col gap-4">
              <p className="font-body text-[12px] font-medium uppercase tracking-widest text-sky-blue">
                Urgency Statement
              </p>
              <h2 className="font-heading text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] text-carbon-black">
                Preventable Harm Is a Global Health Crisis
              </h2>
            </AnimateIn>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              <AnimateIn
                delay={0.08}
                className="flex flex-row lg:flex-col gap-10 lg:gap-12 lg:w-[280px] flex-shrink-0"
              >
                <div className="flex flex-col gap-1.5">
                  <p className="font-heading text-[48px] lg:text-[64px] leading-none text-navy-blue">
                    1 in 10
                  </p>
                  <p className="font-body text-[14px] lg:text-[15px] leading-[1.4] text-steel-gray max-w-[160px]">
                    patients harmed during health care
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="font-heading text-[48px] lg:text-[64px] leading-none text-navy-blue">
                    3M+
                  </p>
                  <p className="font-body text-[14px] lg:text-[15px] leading-[1.4] text-steel-gray max-w-[160px]">
                    lives lost each year to unsafe care
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.14} className="flex-1 flex flex-col gap-6 max-w-[680px] pt-1">
                <p className="font-body text-[17px] lg:text-[19px] leading-[1.7] text-steel-gray">
                  Every year, millions of patients experience preventable harm while seeking health
                  care. An estimated 1 in 10 patients is harmed during health care, and more than 3
                  million lives are lost annually due to unsafe care. The burden is greatest in low-
                  and middle-income countries, where preventable adverse events continue to threaten
                  patient outcomes and strain health systems.
                </p>
                <p className="font-body text-[17px] lg:text-[19px] leading-[1.7] text-steel-gray">
                  Most of these harms—including medication errors, healthcare-associated infections,
                  diagnostic errors, unsafe surgery, patient misidentification, falls, and unsafe
                  blood transfusions—are preventable. (WHO, 2023).
                </p>
                <p className="font-heading text-[22px] lg:text-[26px] leading-[1.35] text-carbon-black border-l-[3px] border-sky-blue pl-5 mt-2">
                  Safe care is not optional—it is a fundamental right.
                </p>
              </AnimateIn>
            </div>
          </div>

          {/* Why We Exist */}
          <AnimateIn delay={0.1} className="border-t border-carbon-black-5 pt-12 lg:pt-16 max-w-[820px]">
            <div className="flex flex-col gap-5">
              <h3 className="font-heading text-[28px] lg:text-[34px] leading-[1.2] text-carbon-black">
                Why We Exist
              </h3>
              <p className="font-heading text-[20px] lg:text-[24px] leading-[1.4] text-carbon-black">
                We believe that no patient should suffer harm while receiving care.
              </p>
              <p className="font-body text-[17px] lg:text-[19px] leading-[1.7] text-steel-gray">
                The Patient Safety Alliance brings together healthcare professionals, policymakers,
                researchers, educators, patients, and communities to strengthen patient safety
                systems, promote a culture of quality, and support evidence-based solutions that
                improve healthcare outcomes.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
