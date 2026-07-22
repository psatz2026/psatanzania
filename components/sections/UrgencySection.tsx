import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";
import NoSSRAccessibleCounters from "@/components/ui/NoSSRAccessibleCounters";

export default function UrgencySection() {
  return (
    <section id="urgency" className="py-[60px] lg:py-[100px]">
      <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-start">

          {/* Left: heading + editorial WHO quotation */}
          <div className="min-w-0">
            <AnimateIn>
              <h2 className="font-heading text-[34px] lg:text-[40px] leading-[1.08] text-carbon-black">
                Preventable Harm Is a Global Health Crisis
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.08} className="mt-8 lg:mt-10">
              <figure className="relative overflow-hidden rounded-2xl border border-navy-blue/8 bg-ice-blue/60 pl-0 shadow-[0_2px_24px_rgba(27,56,136,0.06)]">
                {/* Left brand accent */}
                <div
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-[3px] sm:w-1 bg-navy-blue rounded-l-2xl"
                />

                {/* Decorative quotation mark */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-3 left-5 sm:left-8 font-heading text-[120px] sm:text-[160px] leading-none text-navy-blue/[0.07] select-none"
                >
                  &ldquo;
                </span>

                <div className="relative px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
                  <blockquote
                    cite="https://www.who.int/news-room/fact-sheets/detail/patient-safety"
                    className="max-w-[68ch]"
                  >
                    <p className="font-body text-[17px] sm:text-[18px] leading-[1.7] text-carbon-black/85 italic">
                      Every year, millions of patients experience preventable harm while seeking
                      health care. An estimated 1 in 10 patients is harmed during health care, and
                      more than 3 million lives are lost annually due to unsafe care. Preventable
                      adverse events continue to threaten patient outcomes and strain health
                      systems.
                    </p>
                    <p className="mt-5 font-body text-[17px] sm:text-[18px] leading-[1.7] text-carbon-black/85 italic">
                      Most of these harms, including medication errors, healthcare-associated
                      infections, diagnostic errors, unsafe surgery, patient misidentification,
                      falls, and unsafe blood transfusions, are preventable.
                    </p>
                  </blockquote>

                  <figcaption className="mt-7 sm:mt-8 font-body text-[13px] sm:text-[14px] leading-[1.5] tracking-wide text-steel-gray">
                    <cite className="not-italic">— World Health Organization (WHO), 2023</cite>
                  </figcaption>
                </div>
              </figure>
            </AnimateIn>

            <AnimateIn delay={0.14}>
              <p className="mt-8 lg:mt-10 font-heading text-[18px] leading-[1.4] text-carbon-black">
                <strong>Safe care is not optional — it is a fundamental right.</strong>
              </p>
            </AnimateIn>
          </div>

          {/* Right: Why we exist card */}
          <AnimateIn delay={0.1}>
            <aside className="rounded-2xl bg-ice-blue p-6 lg:p-8">
              <h3 className="font-heading text-[20px] text-carbon-black">Why We Exist</h3>
              <p className="mt-3 font-body text-[16px] leading-[1.6] text-steel-gray">
                We believe that no patient should suffer harm while receiving care. The Patient
                Safety Alliance brings together healthcare professionals, policymakers,
                researchers, educators, patients, and communities to strengthen patient safety
                systems, promote a culture of quality, and support evidence-based solutions that
                improve healthcare outcomes.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  label="Our Programs"
                  href="/causes"
                  variant="white"
                  className="hover:!bg-sky-blue hover:!text-white"
                />
                <Button label="Get Involved" href="/become-a-volunteer" variant="outlined" />
              </div>
            </aside>
          </AnimateIn>

        </div>

        <div className="mt-6">
          <NoSSRAccessibleCounters />
        </div>
      </div>
    </section>
  );
}
