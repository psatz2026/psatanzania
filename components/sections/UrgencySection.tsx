import Button from "@/components/ui/Button";
import NoSSRAccessibleCounters from "@/components/ui/NoSSRAccessibleCounters";

export default function UrgencySection() {
  return (
    <section id="urgency" className="py-[60px] lg:py-[100px]">
      <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">

          {/* Left: Urgency statement */}
          <div>
            <h2 className="font-heading text-[34px] lg:text-[40px] leading-[1.08] text-carbon-black">
              Preventable Harm Is a Global Health Crisis
            </h2>

            <p className="mt-6 font-body text-[18px] leading-[1.6] text-steel-gray max-w-[760px]">
              Every year, millions of patients experience preventable harm while seeking
              health care. An estimated 1 in 10 patients is harmed during health care, and
              more than 3 million lives are lost annually due to unsafe care. Preventable adverse events
              continue to threaten patient outcomes and strain health systems.
            </p>

            <p className="mt-4 font-body text-[18px] leading-[1.6] text-steel-gray max-w-[760px]">
              Most of these harms, including medication errors, healthcare-associated
              infections, diagnostic errors, unsafe surgery, patient misidentification, falls,
              and unsafe blood transfusions, are preventable.
            </p>

            <p className="mt-6 font-heading text-[18px] leading-[1.4] text-carbon-black">
              <strong>Safe care is not optional — it is a fundamental right.</strong>
            </p>

            {/* Counters row — accessible, reduced-motion aware */}
            <div>
              {/* Import is client-only; component lives in components/ui */}
              {/* eslint-disable-next-line @next/next/no-assign-imports */}
            </div>
          </div>

          {/* Right: Why we exist card */}
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
              <Button label="Our Programs" href="/causes" variant="white" />
              <Button label="Get Involved" href="/become-a-volunteer" variant="outlined" />
            </div>
          </aside>

        </div>

        {/* Counters (client component) */}
        <div className="mt-6">
          <NoSSRAccessibleCounters />
        </div>
      </div>
    </section>
  );
}
