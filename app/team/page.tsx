import type { Metadata } from "next";
import VolunteerCard from "@/components/cards/VolunteerCard";
import PageHero from "@/components/sections/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Our Team — Leadership & Patient Safety Advocates",
  description:
    "Meet the leadership and members of Patient Safety Alliance Tanzania — advocates, researchers, and health champions working for safer care.",
  path: "/team",
});
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";
import { volunteers } from "@/data/volunteers";

const teamJsonLd = volunteers.map((v) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: v.name,
  jobTitle: v.role,
  image: `${SITE_URL}${v.image}`,
  worksFor: { "@id": `${SITE_URL}/#organization` },
}));

export default function TeamPage() {
  return (
    <>
      <JsonLd data={teamJsonLd} />
      <PageHero
        eyebrow="Our Team"
        title="The people behind PSA Tanzania"
        lead="A passionate, youth-led team of advocates, researchers, and health champions working together to make healthcare safer for every patient in Tanzania."
        breadcrumbs={[{ name: "Team", path: "/team" }]}
      />

      <section className="py-[60px] lg:py-[100px]">
        <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px] flex flex-col gap-16 lg:gap-20">

          {/* Leadership */}
          <div className="flex flex-col gap-8">
            <AnimateIn>
              <h2 className="font-heading text-[28px] lg:text-[34px] leading-[1.3] text-carbon-black">
                Leadership
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {volunteers.map((v, i) => (
                <AnimateIn key={v.name} delay={i * 0.08}>
                  <VolunteerCard volunteer={v} />
                </AnimateIn>
              ))}
            </div>
          </div>

          <AnimateIn className="text-center">
            <Button label="Join our team" href="/become-a-volunteer" variant="primary" />
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
