import Image from "next/image";
import Button from "@/components/ui/Button";

export default function PartnersQuoteSection() {
  return (
    <section className="py-[140px]">
      <div className="max-w-[1460px] mx-auto px-[30px]">
        <div className="flex flex-col gap-14 max-w-[1000px] mx-auto">
          {/* Heading */}
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="font-heading text-[32px] lg:text-[40px] xl:text-[46px] leading-[1.2] text-carbon-black">
              Patients are not just recipients of care. They are partners in making it safer.
            </h2>
          </div>

          {/* Image + text */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-[45%] relative h-[300px] lg:h-[380px] w-full rounded-2xl overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/nmBXjeuU5Pr3XtsNLTfUj7YhY.jpg"
                alt="Patient safety community"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:w-[55%] flex flex-col justify-between gap-16">
              <p className="font-body text-[18px] leading-[1.6] text-steel-gray">
                Patient Safety Alliance is a youth-led non-profit promoting patient safety, strengthening patient voices, and supporting a more responsive, inclusive, and accountable healthcare system in Tanzania.
              </p>
              <div className="flex flex-col gap-6">
                <div className="w-px h-12 bg-steel-gray/20" />
                <Button label="About Us" href="/about" variant="outlined" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
