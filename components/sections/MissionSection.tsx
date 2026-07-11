import Image from "next/image";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";

const pillars = [
  {
    question: "Patient Empowerment",
    answer:
      "We equip patients and communities with knowledge, skills, and platforms to actively participate in their healthcare decisions and advocate for their rights.",
  },
  {
    question: "Evidence Generation",
    answer:
      "We conduct research and collect data on patient safety incidents to generate evidence that informs policy, practice, and advocacy.",
  },
  {
    question: "Policy Advocacy",
    answer:
      "We engage with government, regulators, and health institutions to promote patient-centred policies and accountability frameworks.",
  },
  {
    question: "Capacity Building",
    answer:
      "We train healthcare workers, community health volunteers, and patient advocates to build a culture of safety across the health system.",
  },
  {
    question: "Accountability & Transparency",
    answer:
      "We promote open reporting systems, grievance mechanisms, and public accountability tools that reduce preventable harm.",
  },
  {
    question: "Youth Leadership",
    answer:
      "We place young people at the centre of health advocacy, creating pathways for youth-led change in healthcare governance.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-[80px] lg:py-[140px]">
      <div className="max-w-[1460px] mx-auto px-[30px]">
        <div className="bg-navy-blue rounded-2xl overflow-hidden">
          <div className="p-[60px] lg:p-[80px] xl:p-[100px]">
            <div className="flex flex-col gap-14">
              {/* Header */}
              <AnimateIn className="flex flex-col gap-4 max-w-[700px] mx-auto text-center">
                <h2 className="font-heading text-[40px] lg:text-[56px] leading-[1.1] text-white">
                  Our strategic pillars
                </h2>
                <p className="font-body text-[18px] leading-[1.5] text-white/70">
                  Six mutually reinforcing pillars guide our work from 2026 to 2029. Explore the full set on our Programs page.
                </p>
              </AnimateIn>

              {/* Content grid */}
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                <AnimateIn delay={0.1} className="lg:w-[55%] flex flex-col gap-10">
                  <Accordion items={pillars} light />
                  <Button label="Our Programs" href="/causes" variant="white" />
                </AnimateIn>
                <AnimateIn delay={0.2} className="lg:w-[45%] relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
                  <Image
                    src="https://framerusercontent.com/images/nmBXjeuU5Pr3XtsNLTfUj7YhY.jpg"
                    alt="PSA Tanzania team"
                    fill
                    className="object-cover"
                  />
                </AnimateIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
