import Link from "next/link";
import CounterCard from "@/components/cards/CounterCard";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

const values = [
  {
    title: "Patient Safety First",
    description:
      "No patient should suffer avoidable harm while seeking healthcare. We prioritize actions that reduce preventable harm, improve quality of care, and protect patients from unsafe, negligent, or disrespectful practices.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    title: "Dignity & Respect",
    description:
      "Every patient deserves to be treated with dignity, compassion, privacy, and respect, regardless of age, gender, disability, income, health condition, nationality, or background.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: "Equity & Inclusion",
    description:
      "We promote fair and inclusive healthcare for all, intentionally prioritizing vulnerable and marginalized groups most at risk of being left behind in patient safety education, evidence, and policy dialogue.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.25a.75.75 0 0 1 .75.75v.756a49.106 49.106 0 0 1 9.152 1 .75.75 0 0 1-.152 1.485h-1.918l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 18.75 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 0 1-.262 1.453h-8.37a.75.75 0 0 1-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 5.25 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84L4.168 6.241H2.25a.75.75 0 0 1-.152-1.485 49.105 49.105 0 0 1 9.152-1V3a.75.75 0 0 1 .75-.75Z" />
      </svg>
    ),
  },
  {
    title: "Patient Voice & Participation",
    description:
      "Patients, families, and communities are active participants in healthcare decisions, not passive recipients. Their lived experience and rights should shape healthcare planning, delivery, monitoring, and evaluation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
      </svg>
    ),
  },
  {
    title: "Accountability & Transparency",
    description:
      "Healthcare systems must be responsive, transparent, and answerable to the people they serve. Internally, we hold ourselves to the same standard: responsible leadership, transparent reporting, and ethical use of resources.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path
          fillRule="evenodd"
          d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Evidence & Learning",
    description:
      "Patient safety advocacy should be informed by evidence, patient experiences, research, and continuous learning. We document experiences and service gaps to guide advocacy, training, and program design.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
      </svg>
    ),
  },
  {
    title: "Collaboration & Partnership",
    description:
      "Patient safety cannot be improved by one actor alone. Safer healthcare requires collaboration among patients, communities, health workers, government, civil society, academia, and development partners. This is our motto: Collaborating for Better Care.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
      </svg>
    ),
  },
];

const avatars = [
  "/team/anna_peter-psachairperson.png",
  "/team/Dr.Godfrey_Smart-psageneralsecretary.png",
  "/team/DR.SAUL_SHEMDOE-foundingmemberandtreasurer.png",
  "/team/Dr.Jacquiline_tungaraza-member.png",
];

import IllustrationWithEntrance from "@/components/ui/IllustrationWithEntrance";

export default function StickyValueStack() {
  return (
    <section className="overflow-x-clip pt-[80px] lg:pt-[140px]">
      <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px] pb-[80px] lg:pb-[140px]">

        {/* Desktop — two-column layout: sticky mission left + illustration/avatar right */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_420px] gap-[80px]">
          {/* Left column: mission/vision (sticky) */}
          <div className="pt-[60px] self-start">
            <div className="w-full sticky top-[80px] flex flex-col gap-8">
              <h2 className="font-heading text-[56px] leading-[1.1] text-carbon-black">
                Our vision
              </h2>
              <p className="font-body text-[18px] leading-[1.7] text-steel-gray">
                "A people-centered healthcare system where every patient, regardless of who they are, receives safe, respectful, equitable healthcare free from preventable harm."
              </p>
              <div className="border-t border-carbon-black-5 pt-6 flex flex-col gap-3">
                <h3 className="font-heading text-[20px] text-carbon-black">Our mission</h3>
                <p className="font-body text-[16px] leading-[1.7] text-steel-gray">
                  To promote patient safety and patient-centered quality healthcare in Tanzania by empowering healthcare providers, patients, and communities, generating evidence, advocating for accountability, and collaborating with healthcare stakeholders to reduce preventable harm and strengthen trust in the health system.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: illustration + avatars */}
          <div className="pt-[60px] self-start">
            <div className="sticky top-[80px] flex flex-col gap-6">
              {/* Decorative SVG illustration with a subtle entrance animation */}
              {/* Will animate scale + opacity on first entrance, respects prefers-reduced-motion */}
              <IllustrationWithEntrance />

              <Link href="/team" className="group flex items-center mt-4" style={{ marginLeft: "-4px" }}>                {avatars.map((src, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden flex-shrink-0 bg-ice-blue transition-transform duration-200 ease-out group-hover:translate-x-[2px]"
                    style={{ marginLeft: i === 0 ? 0 : "-12px", zIndex: i }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="PSA Tanzania team member" className="w-full h-full object-cover" />
                  </div>
                ))}
                <span className="ml-4 font-body text-[14px] font-medium text-steel-gray transition-colors duration-200 group-hover:text-sky-blue">
                  Our team →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Core values — moved below the mission with a clear heading (desktop) */}
        <div className="hidden lg:block mt-12">
          <h2 className="font-heading text-[34px] leading-[1.1] text-carbon-black">Our core values</h2>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-sky-blue/20 shadow-[0_2px_16px_rgba(27,56,136,0.07)] p-6 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-ice-blue flex items-center justify-center text-sky-blue flex-shrink-0">
                  {v.icon}
                </div>
                <h3 className="font-heading text-[18px] leading-[1.2] text-carbon-black">{v.title}</h3>
                <p className="font-body text-[14px] leading-[1.6] text-steel-gray">{v.description}</p>
              </div>
            ))}
          </div>

          {/* Target population — minimal chips */}
          <div className="mt-10">
            <h3 className="font-heading text-[24px] leading-[1.1] text-carbon-black">Target Population</h3>
            <ul className="mt-4 flex flex-wrap gap-3" aria-label="Target population">
              <li>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-ice-blue text-carbon-black border border-sky-blue/10 font-body text-[14px]">
                  Healthcare workers
                </span>
              </li>
              <li>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-ice-blue text-carbon-black border border-sky-blue/10 font-body text-[14px]">
                  Community healthcare workers
                </span>
              </li>
              <li>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-ice-blue text-carbon-black border border-sky-blue/10 font-body text-[14px]">
                  Pregnant women
                </span>
              </li>
              <li>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-ice-blue text-carbon-black border border-sky-blue/10 font-body text-[14px]">
                  Childrenâs parents and caregivers
                </span>
              </li>
              <li>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-ice-blue text-carbon-black border border-sky-blue/10 font-body text-[14px]">
                  Elderly people
                </span>
              </li>
              <li>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-ice-blue text-carbon-black border border-sky-blue/10 font-body text-[14px]">
                  Key vulnerable groups
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile — stacked layout */}
        <div className="lg:hidden flex flex-col gap-10 pt-[60px]">
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-[40px] leading-[1.1] text-carbon-black">Our vision</h2>
            <p className="font-body text-[18px] leading-[1.7] text-steel-gray">
              "A people-centered healthcare system where every patient, regardless of who they are, receives safe, respectful, equitable healthcare free from preventable harm."
            </p>
            <div className="border-t border-carbon-black-5 pt-5 flex flex-col gap-2">
              <h3 className="font-heading text-[20px] text-carbon-black">Our mission</h3>
              <p className="font-body text-[16px] leading-[1.7] text-steel-gray">
                To promote patient safety and patient-centered quality healthcare in Tanzania by empowering healthcare providers, patients, and communities, generating evidence, advocating for accountability, and collaborating with healthcare stakeholders to reduce preventable harm and strengthen trust in the health system.
              </p>
            </div>
            <Link href="/team" className="flex items-center">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden flex-shrink-0 bg-ice-blue"
                  style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: i }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="PSA Tanzania team member" className="w-full h-full object-cover" />
                </div>
              ))}
              <span className="ml-3 font-body text-[14px] font-medium text-steel-gray">Our team →</span>
            </Link>
          </div>
          {/* Horizontal snap carousel — swipe through the values */}
          <div className="-mx-5 sm:-mx-[30px]">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 sm:px-[30px] pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="snap-center flex-shrink-0 w-[82%] max-w-[340px] bg-white rounded-2xl border border-sky-blue/20 shadow-[0_2px_16px_rgba(27,56,136,0.07)] p-7 flex flex-col gap-5"
                >
                  <div className="w-14 h-14 rounded-full bg-ice-blue flex items-center justify-center text-sky-blue flex-shrink-0">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-[22px] leading-[1.2] text-carbon-black">{value.title}</h3>
                  <p className="font-body text-[16px] leading-[1.7] text-steel-gray">{value.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 px-5 sm:px-[30px] font-body text-[13px] text-steel-gray/60">
              Swipe to explore our {values.length} core values
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
