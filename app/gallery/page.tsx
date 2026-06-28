import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { gallery } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <>
      <section className="bg-navy-blue pt-[160px] pb-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="max-w-[600px]">
            <p className="font-body text-[14px] font-medium tracking-widest uppercase text-sky-blue mb-6">Gallery</p>
            <h1 className="font-heading text-[56px] lg:text-[72px] leading-[1.08] text-white mb-8">
              Our work in pictures
            </h1>
          </div>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((item, i) => (
              <div key={i} className="break-inside-avoid group relative rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.caption}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue-90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 gap-2">
                  {item.category && <Badge label={item.category} variant="blue" />}
                  <p className="font-body text-[14px] text-white">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
