import Hero from "@/components/sections/Hero";
import PartnersQuoteSection from "@/components/sections/PartnersQuoteSection";
import CTASection from "@/components/sections/CTASection";
import FeatureScrollSection from "@/components/sections/FeatureScrollSection";
import MissionSection from "@/components/sections/MissionSection";
import EventCard from "@/components/cards/EventCard";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";
import { events } from "@/data/events";

export default function Home() {
  const recentEvents = events.slice(0, 3);

  return (
    <>
      <Hero />
      <PartnersQuoteSection />
      <CTASection />
      <FeatureScrollSection />
      <MissionSection />

      {/* Recent Events */}
      <section className="py-[140px] overflow-hidden">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <AnimateIn className="flex items-center justify-between gap-6 mb-16">
            <h2 className="font-heading text-[40px] lg:text-[56px] leading-[1.1] text-carbon-black max-w-[500px]">
              Recent events
            </h2>
            <Button label="Explore all events" href="/event" variant="outlined" />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentEvents.map((event, i) => (
              <AnimateIn key={event.slug} delay={i * 0.1}>
                <EventCard event={event} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
