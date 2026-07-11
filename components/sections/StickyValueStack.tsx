import Link from "next/link";

const values = [
  {
    title: "Patient Safety First",
    description:
      "Everything we do starts with the patient. We design every program, advocacy campaign, and piece of research around the question: does this make patients safer?",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    title: "Dignity & Respect",
    description:
      "Every patient deserves to be treated with compassion, honesty, and respect, regardless of background, income, or circumstance. We hold the health system accountable to this standard.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: "Evidence-Based Action",
    description:
      "We let data and lived patient experience lead. Our advocacy positions are grounded in rigorous evidence, and we generate new evidence where gaps exist.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
      </svg>
    ),
  },
  {
    title: "Youth Leadership",
    description:
      "Young people are not just the future of health advocacy. They are its present. PSA Tanzania is led by youth, for everyone, channelling the energy and creativity of a new generation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9l4 2.18V15c0 3 5 5 7 5s7-2 7-5v-3.82L22 9 12 3zm6 14c0 1.29-2.97 3-6 3s-6-1.71-6-3v-2.73l6 3.27 6-3.27V17z" />
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

export default function StickyValueStack() {
  return (
    <section className="overflow-x-clip pt-[80px] lg:pt-[140px]">
      <div className="max-w-[1460px] mx-auto px-[30px] pb-[80px] lg:pb-[140px]">

        {/* Desktop — sticky left + stacking value cards */}
        <div className="hidden lg:flex gap-[80px]">

          {/* Left: sticky below nav (nav=80px) */}
          <div className="w-[400px] flex-shrink-0 sticky top-[80px] pt-[60px] self-start flex flex-col gap-8">
            <h2 className="font-heading text-[56px] leading-[1.1] text-carbon-black">
              Our mission
            </h2>
            <p className="font-body text-[18px] leading-[1.7] text-steel-gray">
              To promote patient safety and patient-centred care in Tanzania by empowering communities, generating evidence, and advocating for accountability within the health system.
            </p>
            {/* Overlapping avatar circles — links to team page */}
            <Link
              href="/team"
              className="group flex items-center"
              style={{ marginLeft: "-4px" }}
            >
              {avatars.map((src, i) => (
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

          {/* Right: value card list — gap-[140px] creates scroll distance */}
          <div className="flex-1 flex flex-col gap-[140px] pt-[60px] min-w-0">
            {values.map((value, i) => (
              <div
                key={i}
                className="sticky bg-white rounded-2xl shadow-sm border border-carbon-black-5 p-10 flex flex-col gap-6"
                style={{ top: "140px", zIndex: i + 1 }}
              >
                <div className="w-[64px] h-[64px] rounded-full bg-yellow flex items-center justify-center text-carbon-black flex-shrink-0">
                  {value.icon}
                </div>
                <h3 className="font-heading text-[28px] lg:text-[32px] leading-[1.2] text-carbon-black">
                  {value.title}
                </h3>
                <p className="font-body text-[16px] leading-[1.7] text-steel-gray">
                  {value.description}
                </p>
              </div>
            ))}
            <div style={{ height: "1px" }} />
          </div>
        </div>

        {/* Mobile — stacked layout */}
        <div className="lg:hidden flex flex-col gap-10 pt-[60px]">
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-[40px] leading-[1.1] text-carbon-black">Our mission</h2>
            <p className="font-body text-[18px] leading-[1.7] text-steel-gray">
              To promote patient safety and patient-centred care in Tanzania by empowering communities, generating evidence, and advocating for accountability within the health system.
            </p>
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
          {values.map((value, i) => (
            <div key={i} className="bg-white rounded-2xl border border-carbon-black-5 p-8 flex flex-col gap-5">
              <div className="w-14 h-14 rounded-full bg-yellow flex items-center justify-center text-carbon-black">
                {value.icon}
              </div>
              <h3 className="font-heading text-[22px] leading-[1.2] text-carbon-black">{value.title}</h3>
              <p className="font-body text-[16px] leading-[1.7] text-steel-gray">{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
