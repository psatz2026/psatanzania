const features = [
  {
    title: "Volunteer with us",
    description: "Join as a community champion, patient advocate, or program volunteer.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Partner with us",
    description: "Civil society, academic, or health-sector organizations seeking collaboration.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 12l-4.463 4.969-1.537-1.472 3-3.497H3v-2h3V7.53L1.537 4.031 3.074 2.56 9 9.03V12zm4.982 4.647L12 15l-2 2 1.5 2H9v2h10v-2h-2.5l1.5-2-2-2-1.018 1.647zM17 7h-4v2h4v3l4-4-4-4v3z" />
      </svg>
    ),
  },
  {
    title: "Share your experience",
    description: "Help us document patient experiences and safety gaps as evidence.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
      </svg>
    ),
  },
  {
    title: "Support our work",
    description: "Foundations, embassies, and development partners can support our programs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
];

export default function FeatureScrollSection() {
  return (
    <section className="overflow-x-clip pt-[140px]">
      <div className="max-w-[1460px] mx-auto px-[30px] pb-[140px]">

        {/* Desktop — sticky left + stacking cards (mirrors Framer exactly) */}
        <div className="hidden lg:flex gap-[80px]">

          {/* Left: sticky below nav (nav=80px) */}
          <div className="w-[380px] flex-shrink-0 sticky top-[80px] pt-[60px] self-start">
            <h2 className="font-heading text-[56px] leading-[1.1] text-carbon-black">
              Ways to<br />get involved
            </h2>
          </div>

          {/* Right: card list — gap-[140px] is the scroll distance between cards */}
          <div className="flex-1 flex flex-col gap-[140px] pt-[60px] min-w-0">
            {features.map((feature, i) => (
              <div
                key={i}
                className="sticky bg-white rounded-2xl shadow-sm border border-carbon-black-5 p-10 flex flex-col gap-6"
                style={{ top: "140px", zIndex: i + 1 }}
              >
                {/* Yellow icon circle */}
                <div className="w-[64px] h-[64px] rounded-full bg-yellow flex items-center justify-center text-carbon-black flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-[28px] lg:text-[32px] leading-[1.2] text-carbon-black">
                  {feature.title}
                </h3>
                <p className="font-body text-[17px] leading-[1.6] text-steel-gray">
                  {feature.description}
                </p>
              </div>
            ))}
            {/* Trailing spacer — lets the last card complete its scroll */}
            <div style={{ height: "1px" }} />
          </div>
        </div>

        {/* Mobile — simple vertical list */}
        <div className="lg:hidden flex flex-col gap-6 pt-[60px]">
          <h2 className="font-heading text-[40px] leading-[1.1] text-carbon-black mb-4">
            Ways to get involved
          </h2>
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl border border-carbon-black-5 p-8 flex flex-col gap-5">
              <div className="w-14 h-14 rounded-full bg-yellow flex items-center justify-center text-carbon-black">
                {feature.icon}
              </div>
              <h3 className="font-heading text-[22px] leading-[1.2] text-carbon-black">{feature.title}</h3>
              <p className="font-body text-[16px] leading-[1.6] text-steel-gray">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
