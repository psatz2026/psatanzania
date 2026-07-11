import VolunteerCard from "@/components/cards/VolunteerCard";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";
import { leadership, members } from "@/data/volunteers";

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people behind PSA Tanzania"
        lead="A passionate, youth-led team of advocates, researchers, and health champions working together to make healthcare safer for every patient in Tanzania."
      />

      <section className="py-[60px] lg:py-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px] flex flex-col gap-16 lg:gap-20">

          {/* Leadership */}
          <div className="flex flex-col gap-8">
            <AnimateIn>
              <h2 className="font-heading text-[28px] lg:text-[34px] leading-[1.3] text-carbon-black">
                Leadership
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((v, i) => (
                <AnimateIn key={v.name} delay={i * 0.08}>
                  <VolunteerCard volunteer={v} />
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Members */}
          <div className="flex flex-col gap-8">
            <AnimateIn>
              <h2 className="font-heading text-[28px] lg:text-[34px] leading-[1.3] text-carbon-black">
                Members
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((v, i) => (
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
