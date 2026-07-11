import AnimateIn from "@/components/ui/AnimateIn";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "navy" | "light";
}

export default function PageHero({
  eyebrow,
  title,
  lead,
  tone = "navy",
}: PageHeroProps) {
  const navy = tone === "navy";

  return (
    <section
      className={`${navy ? "bg-navy-blue" : "bg-ice-blue"} pt-[130px] lg:pt-[170px] pb-[60px] lg:pb-[90px]`}
    >
      <div className="max-w-[1460px] mx-auto px-[30px]">
        <AnimateIn y={16}>
          <p
            className={`font-body text-[13px] font-medium tracking-[0.2em] uppercase mb-6 ${
              navy ? "text-light-blue" : "text-sky-blue"
            }`}
          >
            {eyebrow}
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h1
            className={`font-heading text-[clamp(36px,6vw,68px)] leading-[1.08] max-w-[820px] ${
              navy ? "text-white" : "text-navy-blue"
            }`}
          >
            {title}
          </h1>
        </AnimateIn>
        {lead && (
          <AnimateIn delay={0.2}>
            <div
              className={`border-t mt-10 pt-7 max-w-[560px] ${
                navy ? "border-white/10" : "border-navy-blue/10"
              }`}
            >
              <p
                className={`font-body text-[17px] sm:text-[19px] leading-[1.6] ${
                  navy ? "text-white/70" : "text-steel-gray"
                }`}
              >
                {lead}
              </p>
            </div>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
