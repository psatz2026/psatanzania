import Button from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Ready to make a difference?",
  description = "Join PSA Tanzania and help us build a safer, more accountable healthcare system for every patient.",
  primaryLabel = "Get Involved",
  primaryHref = "/become-a-volunteer",
  secondaryLabel = "Learn More",
  secondaryHref = "/about",
}: CTASectionProps) {
  return (
    <section className="bg-sky-blue">
      <div className="max-w-[1460px] mx-auto px-[30px] py-[80px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-[600px]">
            <h2 className="font-heading text-[40px] lg:text-[46px] leading-[1.1] text-white">
              {title}
            </h2>
            <p className="font-body text-[18px] leading-[1.5] text-white/80">{description}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button label={primaryLabel} href={primaryHref} variant="white" />
            <Button label={secondaryLabel} href={secondaryHref} variant="outlined" className="!border-white !text-white hover:!bg-white hover:!text-sky-blue" />
          </div>
        </div>
      </div>
    </section>
  );
}
