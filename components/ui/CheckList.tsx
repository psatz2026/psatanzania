interface CheckListProps {
  items: string[];
  light?: boolean;
}

export default function CheckList({ items, light = false }: CheckListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-blue flex items-center justify-center mt-0.5">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path
                d="M1 4l2.5 2.5L9 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={`font-body text-[16px] leading-[1.5] ${
              light ? "text-white/80" : "text-steel-gray"
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
