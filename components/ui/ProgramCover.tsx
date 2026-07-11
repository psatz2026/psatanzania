import { pillarIcons } from "@/lib/pillar-icons";
import { causes } from "@/data/causes";

interface ProgramCoverProps {
  slug: string;
  size?: "card" | "hero";
  className?: string;
}

export default function ProgramCover({
  slug,
  size = "card",
  className = "",
}: ProgramCoverProps) {
  const index = causes.findIndex((c) => c.slug === slug);
  const number = String((index === -1 ? 0 : index) + 1).padStart(2, "0");
  const icon = pillarIcons[slug];
  const hero = size === "hero";

  return (
    <div
      className={`relative w-full h-full bg-ice-blue overflow-hidden flex items-center justify-center ${className}`}
    >
      {/* Corner ring motif */}
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className={`absolute -top-8 -right-8 text-sky-blue pointer-events-none ${
          hero ? "w-[240px] h-[240px]" : "w-[150px] h-[150px]"
        }`}
        fill="none"
      >
        <circle cx="130" cy="70" r="34" stroke="currentColor" strokeWidth="2" opacity="0.18" />
        <circle cx="130" cy="70" r="62" stroke="currentColor" strokeWidth="2" opacity="0.11" />
        <circle cx="130" cy="70" r="92" stroke="currentColor" strokeWidth="2" opacity="0.06" />
      </svg>

      {/* Ghost number */}
      <span
        aria-hidden
        className={`absolute left-6 bottom-0 font-heading leading-none text-sky-blue/10 select-none pointer-events-none ${
          hero ? "text-[220px] -mb-8" : "text-[130px] -mb-5"
        }`}
      >
        {number}
      </span>

      {/* Icon */}
      <div
        className={`relative rounded-full bg-sky-blue/10 flex items-center justify-center text-sky-blue transition-transform duration-300 ease-out group-hover:scale-110 ${
          hero ? "w-[104px] h-[104px] [&_svg]:w-[44px] [&_svg]:h-[44px]" : "w-[72px] h-[72px]"
        }`}
      >
        {icon}
      </div>
    </div>
  );
}
