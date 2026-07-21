"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";
import { pillarIcons } from "@/lib/pillar-icons";

const ease = [0.23, 1, 0.32, 1] as const;

const pillars = [
  {
    question: "Patient Rights, Provider Safety & Community Engagement",
    answer:
      "We strengthen patient and community awareness of patient rights, responsibilities, and safety practices through community dialogues, campaigns, youth engagement, and patient safety champions.",
    icon: pillarIcons["patient-rights-awareness"],
  },
  {
    question: "Capacity Building for Safer and Respectful Care",
    answer:
      "We build the capacity of patients, caregivers, community actors, and healthcare providers to promote safer, respectful, and patient-centred care.",
    icon: pillarIcons["capacity-building"],
  },
  {
    question: "Evidence Generation & Knowledge Translation",
    answer:
      "We generate and use evidence on patient experiences, safety gaps, and service delivery challenges so our advocacy is credible, ethical, and trusted by stakeholders.",
    icon: pillarIcons["research-evidence-learning"],
  },
  {
    question: "Advocacy & Policy Influence",
    answer:
      "We promote accountability and policy reforms that protect patients from preventable harm, engaging government, regulators, facilities, and civil society to strengthen patient protection.",
    icon: pillarIcons["advocacy-policy-influence"],
  },
  {
    question: "Partnerships & Collaboration",
    answer:
      "We are building a trusted national platform that brings patients, communities, providers, and partners together so patient voices are organized, visible, and influential.",
    icon: pillarIcons["partnerships-patient-voice"],
  },
  {
    question: "Sustainable Leadership & Institutional Strengthening",
    answer:
      "We invest in strong governance, safeguarding, data protection, and sustainable systems so PSA can deliver its mission professionally and protect community trust.",
    icon: pillarIcons["institutional-strengthening"],
  },
];

export default function MissionSection() {
  const [open, setOpen] = useState<number | null>(0);
  /* Panel keeps showing the last opened pillar even if all are collapsed */
  const [active, setActive] = useState(0);

  const handleChange = (i: number | null) => {
    setOpen(i);
    if (i !== null) setActive(i);
  };

  const pillar = pillars[active];

  return (
    <section className="py-[80px] lg:py-[140px]">
      <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
        <div className="bg-navy-blue rounded-2xl overflow-hidden">
          <div className="p-6 sm:p-[40px] lg:p-[80px] xl:p-[100px]">
            <div className="flex flex-col gap-14">
              {/* Header */}
              <AnimateIn className="flex flex-col gap-4 max-w-[700px] mx-auto text-center">
                <h2 className="font-heading text-[40px] lg:text-[56px] leading-[1.1] text-white">
                  Our strategic pillars
                </h2>
                <p className="font-body text-[18px] leading-[1.5] text-white/70">
                  Six mutually reinforcing pillars guide our work. Explore the
                  full set on our Programs page.
                </p>
              </AnimateIn>

              {/* Content grid */}
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                <AnimateIn delay={0.1} className="lg:w-[55%] w-full flex flex-col gap-10">
                  <Accordion items={pillars} light value={open} onChange={handleChange} />
                  <Button label="Our Programs" href="/causes" variant="white" />
                </AnimateIn>

                {/* Pillar display panel — mirrors the open accordion item */}
                <AnimateIn
                  delay={0.2}
                  className="hidden lg:flex lg:w-[45%] relative h-[600px] rounded-2xl bg-white/5 border border-white/10 overflow-hidden items-center justify-center self-stretch"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, transform: "translateY(14px)", filter: "blur(8px)" }}
                      animate={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                      exit={{ opacity: 0, transform: "translateY(-10px)", filter: "blur(8px)", transition: { duration: 0.15, ease } }}
                      transition={{ duration: 0.25, ease }}
                      className="relative flex flex-col items-center text-center gap-6 px-12"
                    >
                      {/* Ghost number */}
                      <span
                        aria-hidden
                        className="absolute -top-[110px] left-1/2 -translate-x-1/2 font-heading text-[200px] leading-none text-light-blue/10 select-none pointer-events-none"
                      >
                        {String(active + 1).padStart(2, "0")}
                      </span>
                      <div className="w-[76px] h-[76px] rounded-full bg-white/10 flex items-center justify-center text-light-blue">
                        {pillar.icon}
                      </div>
                      <h3 className="font-heading text-[30px] leading-[1.2] text-white max-w-[340px]">
                        {pillar.question}
                      </h3>
                    </motion.div>
                  </AnimatePresence>

                  {/* Pillar position dots */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    {pillars.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Show pillar ${i + 1}`}
                        onClick={() => handleChange(i)}
                        className={`h-[6px] rounded-full transition-all duration-300 ${
                          i === active ? "w-6 bg-light-blue" : "w-[6px] bg-white/20 hover:bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
