import Hero from "@/components/sections/Hero";
import PartnersQuoteSection from "@/components/sections/PartnersQuoteSection";
import UrgencySection from "@/components/sections/UrgencySection";
import CTASection from "@/components/sections/CTASection";
import FeatureScrollSection from "@/components/sections/FeatureScrollSection";
import MissionSection from "@/components/sections/MissionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersQuoteSection />
      <UrgencySection />
      <CTASection />
      <FeatureScrollSection />
      <MissionSection />
    </>
  );
}
