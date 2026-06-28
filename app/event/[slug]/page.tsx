import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { events } from "@/data/events";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) notFound();

  const date = new Date(event.date);

  return (
    <>
      <section className="bg-navy-blue pt-[160px] pb-[80px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <Button label="← All events" href="/event" variant="ghost" className="!text-white/60 hover:!text-white mb-8 !px-0" />
          <div className="max-w-[800px]">
            <p className="font-body text-[14px] font-medium tracking-widest uppercase text-sky-blue mb-4">
              {date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </p>
            <h1 className="font-heading text-[46px] lg:text-[60px] leading-[1.1] text-white mb-6">{event.title}</h1>
            <div className="flex items-center gap-2 text-white/60">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span className="font-body text-[16px]">{event.location}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[80px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-[65%] flex flex-col gap-8">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
              </div>
              <p className="font-body text-[18px] leading-[1.7] text-steel-gray">{event.description}</p>
            </div>
            <div className="lg:w-[35%]">
              <div className="sticky top-24 flex flex-col gap-6 p-8 bg-ice-blue rounded-2xl">
                <h3 className="font-heading text-[20px] text-navy-blue">Event details</h3>
                {[
                  { label: "Date", value: date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) },
                  { label: "Location", value: event.location },
                ].map((d) => (
                  <div key={d.label} className="flex flex-col gap-1">
                    <span className="font-body text-[12px] font-medium uppercase tracking-widest text-sky-blue">{d.label}</span>
                    <span className="font-body text-[15px] text-carbon-black">{d.value}</span>
                  </div>
                ))}
                <Button label="Register interest" href="/contact" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
