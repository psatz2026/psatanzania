function RoleCard({ label }: { label: string }) {
  return (
    <div className="relative z-10 min-w-[140px] sm:min-w-[160px] rounded-xl border border-sky-blue/20 bg-white px-5 py-3.5 sm:px-6 sm:py-4 text-center shadow-[0_2px_16px_rgba(27,56,136,0.07)]">
      <span className="font-heading text-[16px] sm:text-[18px] leading-[1.3] text-carbon-black">
        {label}
      </span>
    </div>
  );
}

function VLine({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`w-px shrink-0 bg-sky-blue/35 ${className}`} />;
}

export default function OrgStructureChart() {
  return (
    <div
      className="w-full flex flex-col items-center"
      role="img"
      aria-label="Organizational structure: Chairperson at the top, Treasurer and General Secretary below, then three Members"
    >
      {/* Level 1 */}
      <RoleCard label="Chairperson" />
      <VLine className="h-7 sm:h-8" />

      {/* Level 2 — Treasurer & General Secretary */}
      <div className="relative flex w-full max-w-[520px] justify-center gap-4 sm:gap-10 md:gap-16">
        <div
          aria-hidden
          className="absolute top-0 left-1/4 right-1/4 h-px bg-sky-blue/35"
        />
        <div className="flex flex-1 flex-col items-center max-w-[220px]">
          <VLine className="h-5 sm:h-6" />
          <RoleCard label="Treasurer" />
        </div>
        <div className="flex flex-1 flex-col items-center max-w-[220px]">
          <VLine className="h-5 sm:h-6" />
          <RoleCard label="General Secretary" />
        </div>
      </div>

      <VLine className="h-7 sm:h-8" />

      {/* Level 3 — Members: stacked on mobile, row on tablet+ */}
      <div className="relative flex w-full max-w-[720px] flex-col items-center sm:flex-row sm:items-start sm:justify-center sm:gap-6 md:gap-8">
        <div
          aria-hidden
          className="absolute top-0 left-[16.666%] right-[16.666%] hidden h-px bg-sky-blue/35 sm:block"
        />

        {(["Member", "Member", "Member"] as const).map((label, i) => (
          <div key={i} className="flex flex-col items-center sm:flex-1">
            {/* Desktop/tablet drop from horizontal bar */}
            <VLine className="hidden h-5 sm:block sm:h-6" />
            {/* Mobile connector between stacked cards */}
            {i > 0 && <VLine className="h-7 sm:hidden" />}
            <RoleCard label={label} />
          </div>
        ))}
      </div>
    </div>
  );
}
