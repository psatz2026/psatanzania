import Hero from "@/components/sections/Hero";
import UrgencySection from "@/components/sections/UrgencySection";
import PartnersQuoteSection from "@/components/sections/PartnersQuoteSection";
import CTASection from "@/components/sections/CTASection";
import FeatureScrollSection from "@/components/sections/FeatureScrollSection";
import MissionSection from "@/components/sections/MissionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <UrgencySection />
      <PartnersQuoteSection />
      <CTASection />
      <FeatureScrollSection />
      <MissionSection />
    </>
  );
}
