import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

const values = [
  {
    title: "Patient Safety First",
    description:
      "No patient should suffer avoidable harm while seeking healthcare. We prioritize actions that reduce preventable harm, improve quality of care, and protect patients from unsafe, negligent, or disrespectful practices.",
  },
  {
    title: "Dignity & Respect",
    description:
      "Every patient deserves to be treated with dignity, compassion, privacy, and respect, regardless of age, gender, disability, income, health condition, nationality, or background.",
  },
  {
    title: "Equity & Inclusion",
    description:
      "We promote fair and inclusive healthcare for all, intentionally prioritizing vulnerable and marginalized groups most at risk of being left behind in patient safety education, evidence, and policy dialogue.",
  },
  {
    title: "Patient Voice & Participation",
    description:
      "Patients, families, and communities are active participants in healthcare decisions, not passive recipients. Their lived experience and rights should shape healthcare planning, delivery, monitoring, and evaluation.",
  },
  {
    title: "Accountability & Transparency",
    description:
      "Healthcare systems must be responsive, transparent, and answerable to the people they serve. Internally, we hold ourselves to the same standard: responsible leadership, transparent reporting, and ethical use of resources.",
  },
  {
    title: "Evidence & Learning",
    description:
      "Patient safety advocacy should be informed by evidence, patient experiences, research, and continuous learning. We document experiences and service gaps to guide advocacy, training, and program design.",
  },
  {
    title: "Collaboration & Partnership",
    description:
      "Patient safety cannot be improved by one actor alone. Safer healthcare requires collaboration among patients, communities, health workers, government, civil society, academia, and development partners. This is our motto: Collaborating for Better Care.",
  },
];

const avatars = [
  "/team/anna_peter-psachairperson.png",
  "/team/Dr.Godfrey_Smart-psageneralsecretary.png",
  "/team/DR.SAUL_SHEMDOE-foundingmemberandtreasurer.png",
  "/team/Dr.Jacquiline_tungaraza-member.png",
];

export default function StickyValueStack() {
  return (
    <section className="overflow-x-clip pt-[80px] lg:pt-[140px]">
      <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px] pb-[80px] lg:pb-[100px]">
        {/* Vision + Mission — Vision given greater prominence */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div id="vision" className="lg:w-[58%] scroll-mt-[120px]">
            <AnimateIn className="flex flex-col gap-5">
              <p className="font-body text-[12px] font-medium uppercase tracking-widest text-sky-blue">
                Our vision
              </p>
              <h2 className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.15] text-carbon-black">
                A people-centered healthcare system where every patient, regardless of who they
                are, receives safe, respectful, equitable healthcare free from preventable harm.
              </h2>
            </AnimateIn>
          </div>

          <div
            id="mission"
            className="lg:w-[42%] scroll-mt-[120px] border-t lg:border-t-0 lg:border-l border-carbon-black-5 pt-8 lg:pt-0 lg:pl-10"
          >
            <AnimateIn delay={0.1} className="flex flex-col gap-4">
              <p className="font-body text-[12px] font-medium uppercase tracking-widest text-steel-gray/60">
                Our mission
              </p>
              <p className="font-body text-[16px] lg:text-[17px] leading-[1.7] text-steel-gray">
                To promote patient safety and patient-centered quality healthcare in Tanzania by
                empowering healthcare providers, patients, and communities, generating evidence,
                advocating for accountability, and collaborating with healthcare stakeholders to
                reduce preventable harm and strengthen trust in the health system.
              </p>
              <Link
                href="/team"
                className="group flex items-center mt-2"
                style={{ marginLeft: "-4px" }}
              >
                {avatars.map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden flex-shrink-0 bg-ice-blue transition-transform duration-200 ease-out group-hover:translate-x-[2px]"
                    style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: i }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="PSA Tanzania team member" className="w-full h-full object-cover" />
                  </div>
                ))}
                <span className="ml-3 font-body text-[14px] font-medium text-steel-gray transition-colors duration-200 group-hover:text-sky-blue">
                  Our team →
                </span>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </div>

      {/* Core Values — de-emphasized relative to Vision/Mission */}
      <div className="bg-ice-blue/60 border-t border-carbon-black-5">
        <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px] py-[56px] lg:py-[72px]">
          <AnimateIn className="flex flex-col gap-2 mb-8 lg:mb-10 max-w-[560px]">
            <h2 className="font-heading text-[22px] lg:text-[26px] leading-[1.3] text-carbon-black">
              Core Values
            </h2>
            <p className="font-body text-[15px] leading-[1.6] text-steel-gray">
              The principles that quietly guide how we work.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {values.map((value, i) => (
              <AnimateIn key={value.title} delay={i * 0.04}>
                <div className="bg-white/80 rounded-xl border border-carbon-black-5 p-5 lg:p-6 flex flex-col gap-2.5 h-full">
                  <h3 className="font-heading text-[16px] lg:text-[17px] leading-[1.3] text-carbon-black">
                    {value.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.65] text-steel-gray">
                    {value.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
