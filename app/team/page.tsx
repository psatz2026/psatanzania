import VolunteerCard from "@/components/cards/VolunteerCard";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";
import { volunteers } from "@/data/volunteers";

export default function TeamPage() {
  return (
    <>
      <section className="bg-navy-blue pt-[160px] pb-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="max-w-[700px]">
            <AnimateIn y={16}>
              <p className="font-body text-[14px] font-medium tracking-widest uppercase text-sky-blue mb-6">Our Team</p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="font-heading text-[56px] lg:text-[72px] leading-[1.08] text-white mb-8">
                The people behind PSA Tanzania
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="font-body text-[20px] leading-[1.5] text-white/75">
                A passionate, youth-led team of advocates, researchers, and health champions working together to make healthcare safer for every patient in Tanzania.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {volunteers.map((v, i) => (
              <AnimateIn key={v.name} delay={i * 0.1}>
                <VolunteerCard volunteer={v} />
              </AnimateIn>
            ))}
          </div>
          <AnimateIn className="text-center">
            <Button label="Join our team" href="/become-a-volunteer" variant="primary" />
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
