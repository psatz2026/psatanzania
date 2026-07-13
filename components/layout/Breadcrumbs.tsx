import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, type BreadcrumbEntry } from "@/lib/seo";

interface BreadcrumbsProps {
  /** Trail after Home — Home is prepended automatically. */
  items: BreadcrumbEntry[];
  tone?: "navy" | "light";
  className?: string;
}

export default function Breadcrumbs({
  items,
  tone = "navy",
  className = "",
}: BreadcrumbsProps) {
  const trail: BreadcrumbEntry[] = [{ name: "Home", path: "/" }, ...items];
  const dark = tone === "navy";

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-[13px]">
          {trail.map((item, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden className={dark ? "text-white/30" : "text-steel-gray/40"}>
                    /
                  </span>
                )}
                {isLast ? (
                  <span aria-current="page" className={dark ? "text-white/60" : "text-steel-gray"}>
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className={
                      dark
                        ? "text-white/60 hover:text-white transition-colors"
                        : "text-steel-gray hover:text-sky-blue transition-colors"
                    }
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
