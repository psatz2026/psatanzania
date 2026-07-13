import { notFound } from "next/navigation";
import Link from "next/link";
import ProgramCover from "@/components/ui/ProgramCover";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { causes } from "@/data/causes";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return causes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cause = causes.find((c) => c.slug === slug);
  if (!cause) return {};
  return pageMetadata({
    title: `${cause.title} | Our Programs`,
    description: cause.description,
    path: `/causes/${cause.slug}`,
  });
}

export default async function CauseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cause = causes.find((c) => c.slug === slug);
  if (!cause) notFound();
  const relatedCauses = causes.filter((c) => c.slug !== cause.slug).slice(0, 3);

  return (
    <>
      <section className="bg-navy-blue pt-[130px] lg:pt-[170px] pb-[60px] lg:pb-[90px]">
        <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
          <Breadcrumbs
            items={[
              { name: "Programs", path: "/causes" },
              { name: cause.title, path: `/causes/${cause.slug}` },
            ]}
            tone="navy"
            className="mb-6"
          />
          <Button label="← All programs" href="/causes" variant="ghost" className="!text-white/60 hover:!text-white mb-8 !px-0" />
          <div className="mb-4"><Badge label={cause.category} variant="blue" /></div>
          <h1 className="font-heading text-[clamp(36px,6vw,68px)] leading-[1.08] max-w-[820px] text-white">{cause.title}</h1>
          <div className="border-t border-white/10 mt-10 pt-7 max-w-[560px]">
            <p className="font-body text-[17px] sm:text-[19px] leading-[1.6] text-white/70">{cause.description}</p>
          </div>
        </div>
      </section>

      <section className="py-[56px] lg:py-[80px]">
        <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-[60%] flex flex-col gap-8">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <ProgramCover slug={cause.slug} size="hero" />
              </div>
              {cause.fullDescription && (
                <>
                  <h2 className="font-heading text-[26px] text-navy-blue">About this program</h2>
                  <p className="font-body text-[18px] leading-[1.7] text-steel-gray">{cause.fullDescription}</p>
                </>
              )}
            </div>
            <div className="lg:w-[40%]">
              <div className="sticky top-24 flex flex-col gap-6 p-8 bg-ice-blue rounded-2xl">
                <h2 className="font-heading text-[20px] text-navy-blue">Get involved</h2>
                <p className="font-body text-[16px] leading-[1.6] text-steel-gray">
                  Interested in supporting this program? We welcome volunteers, partners, and funders.
                </p>
                <Button label="Volunteer with us" href="/become-a-volunteer" variant="primary" />
                <Button label="Contact us" href="/contact" variant="outlined" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedCauses.length > 0 && (
        <section className="pb-[80px] lg:pb-[120px]">
          <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
            <h2 className="font-heading text-[28px] text-carbon-black mb-8">
              Explore other programs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedCauses.map((c) => (
                <Link
                  key={c.slug}
                  href={`/causes/${c.slug}`}
                  className="group flex flex-col gap-2 p-6 bg-ice-blue rounded-2xl hover:bg-sky-blue/10 transition-colors duration-200"
                >
                  <span className="font-heading text-[17px] text-carbon-black group-hover:text-sky-blue transition-colors duration-200">
                    {c.title}
                  </span>
                  <span className="font-body text-[14px] text-steel-gray line-clamp-2">
                    {c.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
