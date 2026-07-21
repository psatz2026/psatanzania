/**
 * Organizational structure chart.
 * TODO: [NEEDS INPUT FROM PSA: actual org structure/hierarchy] — replace placeholder labels.
 */
export default function OrgChart() {
  // Placeholder nodes until PSA provides the real hierarchy
  const board = "{{BOARD_OR_GOVERNANCE}}";
  const chair = "{{CHAIRPERSON}}";
  const secretary = "{{GENERAL_SECRETARY}}";
  const treasurer = "{{TREASURER}}";
  const programs = "{{PROGRAMS_LEAD}}";
  const operations = "{{OPERATIONS_LEAD}}";
  const community = "{{COMMUNITY_ENGAGEMENT}}";

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[640px] flex flex-col items-center gap-0 py-2">
        {/* Top */}
        <OrgBox label={board} tone="navy" />
        <Connector />

        {/* Executive row */}
        <div className="flex items-start justify-center gap-3 sm:gap-5 w-full max-w-[720px]">
          <OrgBox label={chair} />
          <OrgBox label={secretary} />
          <OrgBox label={treasurer} />
        </div>

        <Connector />

        {/* Functional row */}
        <div className="flex items-start justify-center gap-3 sm:gap-5 w-full max-w-[720px]">
          <OrgBox label={programs} tone="muted" />
          <OrgBox label={operations} tone="muted" />
          <OrgBox label={community} tone="muted" />
        </div>

        <p className="mt-6 font-body text-[13px] text-steel-gray/70 text-center max-w-[480px]">
          Placeholder structure — awaiting final hierarchy from PSA.
        </p>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex flex-col items-center" aria-hidden>
      <div className="w-px h-6 bg-steel-gray/30" />
      <div className="w-3 h-3 rounded-full border-2 border-sky-blue/40 bg-white" />
      <div className="w-px h-6 bg-steel-gray/30" />
    </div>
  );
}

function OrgBox({
  label,
  tone = "default",
}: {
  label: string;
  tone?: "navy" | "default" | "muted";
}) {
  const toneClass =
    tone === "navy"
      ? "bg-navy-blue text-white border-navy-blue"
      : tone === "muted"
        ? "bg-ice-blue text-carbon-black border-sky-blue/20"
        : "bg-white text-carbon-black border-carbon-black-5";

  return (
    <div
      className={`flex-1 min-w-0 max-w-[200px] rounded-xl border px-4 py-3.5 text-center ${toneClass}`}
    >
      <p className="font-body text-[13px] sm:text-[14px] leading-[1.4] font-medium break-words">
        {label}
      </p>
    </div>
  );
}
