import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { causes } from "@/data/causes";

export function generateStaticParams() {
  return causes.map((c) => ({ slug: c.slug }));
}

export default function CauseDetailPage({ params }: { params: { slug: string } }) {
  const cause = causes.find((c) => c.slug === params.slug);
  if (!cause) notFound();

  return (
    <>
      <section className="bg-navy-blue pt-[160px] pb-[80px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <Button label="← All programs" href="/causes" variant="ghost" className="!text-white/60 hover:!text-white mb-8 !px-0" />
          <div className="max-w-[800px]">
            <div className="mb-4"><Badge label={cause.category} variant="blue" /></div>
            <h1 className="font-heading text-[46px] lg:text-[60px] leading-[1.1] text-white mb-6">{cause.title}</h1>
            <p className="font-body text-[20px] leading-[1.5] text-white/75">{cause.description}</p>
          </div>
        </div>
      </section>

      <section className="py-[80px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-[60%] flex flex-col gap-8">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image src={cause.image} alt={cause.title} fill className="object-cover" />
              </div>
              {cause.fullDescription && (
                <p className="font-body text-[18px] leading-[1.7] text-steel-gray">{cause.fullDescription}</p>
              )}
            </div>
            <div className="lg:w-[40%]">
              <div className="sticky top-24 flex flex-col gap-6 p-8 bg-ice-blue rounded-2xl">
                <h3 className="font-heading text-[20px] text-navy-blue">Get involved</h3>
                <p className="font-body text-[15px] leading-[1.6] text-steel-gray">
                  Interested in supporting this program? We welcome volunteers, partners, and funders.
                </p>
                <Button label="Volunteer with us" href="/become-a-volunteer" variant="primary" />
                <Button label="Contact us" href="/contact" variant="outlined" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
