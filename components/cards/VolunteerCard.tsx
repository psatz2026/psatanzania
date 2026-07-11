import Image from "next/image";
import { Volunteer } from "@/lib/types";

export default function VolunteerCard({ volunteer }: { volunteer: Volunteer }) {
  return (
    <div className="flex flex-col items-center text-center gap-5 p-8 bg-white rounded-2xl border border-carbon-black-5 hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-28 h-28 rounded-full overflow-hidden bg-ice-blue flex-shrink-0">
        <Image
          src={volunteer.image}
          alt={volunteer.name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-[18px] text-carbon-black">{volunteer.name}</h3>
        <p className="font-body text-[14px] text-sky-blue font-medium">{volunteer.role}</p>
      </div>
    </div>
  );
}
