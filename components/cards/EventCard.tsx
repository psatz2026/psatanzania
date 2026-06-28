import Image from "next/image";
import Link from "next/link";
import { Event } from "@/lib/types";

export default function EventCard({ event }: { event: Event }) {
  const date = new Date(event.date);
  const day = date.toLocaleDateString("en-GB", { day: "2-digit" });
  const month = date.toLocaleDateString("en-GB", { month: "short" });
  const year = date.getFullYear();

  return (
    <Link
      href={`/event/${event.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-carbon-black-5 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white rounded-xl px-3 py-2 text-center shadow-sm">
          <div className="font-heading text-[22px] leading-none text-navy-blue">{day}</div>
          <div className="font-body text-[11px] uppercase tracking-wide text-steel-gray">{month} {year}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h3 className="font-heading text-[18px] leading-[1.3] text-carbon-black group-hover:text-sky-blue transition-colors duration-200 line-clamp-2">
          {event.title}
        </h3>
        <div className="flex items-center gap-2 text-steel-gray">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="font-body text-[13px]">{event.location}</span>
        </div>
      </div>
    </Link>
  );
}
