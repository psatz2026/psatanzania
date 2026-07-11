export default function PartnersIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 520 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A patient and a caregiver standing together as partners in care"
      className={className}
    >
      {/* Soft backdrop circle */}
      <circle cx="260" cy="210" r="150" fill="#FFFFFF" opacity="0.6" />

      {/* Heart between the two figures */}
      <path
        d="M260 138c-16-20-48-9-48 13 0 20 26 31 48 49 22-18 48-29 48-49 0-22-32-33-48-13z"
        fill="#45B3E8"
      />
      {/* Medical plus inside the heart */}
      <rect x="253" y="146" width="14" height="38" rx="3" fill="#FFFFFF" />
      <rect x="241" y="158" width="38" height="14" rx="3" fill="#FFFFFF" />

      {/* Left figure — patient (navy) */}
      <circle cx="185" cy="235" r="32" fill="#1B3888" />
      <path
        d="M135 342c0-30 22-52 50-52s50 22 50 52v6H135v-6z"
        fill="#1B3888"
      />

      {/* Right figure — caregiver (sky blue) */}
      <circle cx="335" cy="235" r="32" fill="#2E8FD0" />
      <path
        d="M285 342c0-30 22-52 50-52s50 22 50 52v6H285v-6z"
        fill="#2E8FD0"
      />

      {/* Accent dots */}
      <circle cx="150" cy="150" r="7" fill="#45B3E8" opacity="0.55" />
      <circle cx="372" cy="140" r="5" fill="#2E8FD0" opacity="0.45" />
      <circle cx="398" cy="188" r="8" fill="#45B3E8" opacity="0.35" />
      <circle cx="122" cy="196" r="5" fill="#1B3888" opacity="0.25" />

      {/* Heartbeat line under the figures */}
      <path
        d="M96 372h96l16-22 20 40 18-28 10 10h168"
        stroke="#45B3E8"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  );
}
