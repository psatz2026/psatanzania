import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-navy-blue overflow-hidden">
      <div className="max-w-[1460px] mx-auto px-[30px] pt-[180px] pb-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left — Text content */}
          <div className="flex flex-col gap-10 justify-between h-full">
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-5">
                <h1 className="font-heading text-[56px] lg:text-[72px] xl:text-[80px] leading-[1.08] text-white">
                  Promoting patient safety and patient-centred care in Tanzania
                </h1>
                <p className="font-body text-[18px] lg:text-[20px] leading-[1.4] text-white/75 max-w-[540px]">
                  A youth-led alliance empowering patients and communities, generating evidence, and advocating for accountability to reduce preventable harm and strengthen trust in the health system.
                </p>
              </div>
              <div className="pb-10">
                <Button
                  label="Get Involved"
                  href="/become-a-volunteer"
                  variant="white"
                />
              </div>
            </div>

            {/* Tagline row */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFD166">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-[14px] text-white/60">
                Youth-led · Founded 2026 · Tanzania
              </p>
            </div>
          </div>

          {/* Right — Images + yellow card */}
          <div className="flex flex-col gap-10 pt-5">
            <div className="grid grid-cols-2 gap-4">
              {/* Main photo */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden h-[260px]">
                <Image
                  src="https://framerusercontent.com/images/7E3nqiTmmCAKr7Ynna3VJv5tsQs.jpg"
                  alt="PSA Tanzania community"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Donation box illustration */}
              <div className="col-span-2 relative h-[140px]">
                <Image
                  src="https://framerusercontent.com/images/WXhvjJmV3fdgw32EPDbNgovDwWE.svg"
                  alt="Support illustration"
                  fill
                  className="object-contain object-center"
                  unoptimized
                />
              </div>
            </div>

            {/* Yellow CTA card */}
            <div className="flex items-center gap-4 bg-yellow rounded-2xl p-5">
              <div className="w-12 h-12 rounded-full bg-white flex-shrink-0 flex items-center justify-center shadow-sm">
                <Image
                  src="https://framerusercontent.com/images/kx5IxSshcVCFSos6XeI4vvEujnI.svg"
                  alt="Programs icon"
                  width={24}
                  height={24}
                  unoptimized
                />
              </div>
              <p className="font-body font-medium text-[16px] leading-[1.4] text-carbon-black flex-1">
                Working together for safer, more respectful care for every patient and community.
              </p>
              <Button label="Our Programs" href="/causes" variant="outlined" className="!border-carbon-black !text-carbon-black hover:!bg-carbon-black hover:!text-white flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
