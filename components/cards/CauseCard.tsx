import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { Cause } from "@/lib/types";

export default function CauseCard({ cause }: { cause: Cause }) {
  return (
    <Link
      href={`/causes/${cause.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-carbon-black-5 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={cause.image}
          alt={cause.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <Badge label={cause.category} variant="ice" />
        <h3 className="font-heading text-[20px] leading-[1.3] text-carbon-black group-hover:text-sky-blue transition-colors duration-200">
          {cause.title}
        </h3>
        <p className="font-body text-[15px] leading-[1.5] text-steel-gray line-clamp-3">
          {cause.description}
        </p>
        <span className="mt-2 inline-flex items-center gap-1 font-body font-medium text-[14px] text-sky-blue">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
