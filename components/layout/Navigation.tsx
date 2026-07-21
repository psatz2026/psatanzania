"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { lenisStore } from "@/components/layout/SmoothScroll";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Who We Are",
    children: [
      { label: "Vision", href: "/about#vision" },
      { label: "Mission", href: "/about#mission" },
      { label: "Leadership", href: "/team" },
    ],
  },
  { label: "Programs", href: "/causes" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const darkHeroRoutes = ["/", "/about", "/causes", "/team", "/faqs", "/become-a-volunteer", "/contact"];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();

  const hasDarkHero = darkHeroRoutes.includes(pathname);
  const showDark = scrolled || !hasDarkHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpenGroup(null); }, [pathname]);

  // Close dropdown on Escape
  useEffect(() => {
    if (!openGroup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenGroup(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openGroup]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showDark ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
        <div
          className={`flex items-center justify-between transition-[height] duration-300 ${
            scrolled ? "h-[60px] lg:h-[66px]" : "h-[70px] lg:h-[84px]"
          }`}
        >

          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 sm:gap-4 flex-shrink-0"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                lenisStore.lenis?.scrollTo(0);
              }
            }}
          >
            <span className="flex items-center justify-center w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] rounded-full bg-white shadow-sm flex-shrink-0">
              <Image
                src="/psa-tanzania-logo-icon.png"
                alt=""
                width={34}
                height={34}
                className="w-[26px] h-[26px] lg:w-[34px] lg:h-[34px] object-contain"
                priority
              />
            </span>
            <span
              className={`font-heading text-[13px] lg:text-[15px] leading-[1.3] max-w-[140px] lg:max-w-[160px] ${
                showDark ? "text-carbon-black" : "text-white"
              }`}
            >
              Patient Safety Alliance 
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if ((link as any).children) {
                const group = link as any;
                const isOpen = openGroup === group.label;
                return (
                  <div
                    key={group.label}
                    className="relative"
                    onMouseEnter={() => setOpenGroup(group.label)}
                    onMouseLeave={() => setOpenGroup(null)}
                  >
                    {/* Button + connected panel container */}
                    <div className="overflow-visible">
                      <button
                        aria-haspopup="true"
                        aria-expanded={isOpen ? "true" : "false"}
                        onClick={() => setOpenGroup(isOpen ? null : group.label)}
                        onFocus={() => setOpenGroup(group.label)}
                        className={`relative font-body text-[15px] font-medium transition-colors duration-200 flex items-center gap-2 px-3 py-2 ${
                          isOpen
                            ? (showDark ? 'rounded-t-lg bg-white text-carbon-black' : 'rounded-t-lg bg-navy-blue text-white')
                            : (showDark ? 'text-carbon-black hover:text-sky-blue' : 'text-white/90 hover:text-light-blue')
                        }`}
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      >
                        <span>{group.label}</span>
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                        <path d="M6 9l6 6 6-6" stroke={showDark ? "#1B3888" : "#FFFFFF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {/* Links panel — connected to the button */}
                      <div className={`${isOpen ? 'block' : 'hidden'} absolute left-0 top-full w-56 z-50`}>
                        <div className={`${showDark ? 'bg-white text-carbon-black rounded-b-lg border-t border-carbon-black-5' : 'bg-navy-blue text-white rounded-b-lg border-t border-white/10'}`}>
                          {group.children.map((child: any) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2 text-sm font-body transition-colors ${
                                showDark
                                  ? pathname === child.href
                                    ? 'text-sky-blue bg-ice-blue/10'
                                    : 'text-carbon-black hover:text-sky-blue hover:bg-ice-blue/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue/20'
                                  : pathname === child.href
                                  ? 'text-yellow bg-white/10'
                                  : 'text-white hover:text-ice-blue hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow/20'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={(link as any).href}
                  href={(link as any).href}
                  aria-current={pathname === (link as any).href ? "page" : undefined}
                  className={`group relative font-body text-[15px] font-medium transition-colors duration-200 ${
                    pathname === (link as any).href
                      ? "text-sky-blue"
                      : showDark
                      ? "text-carbon-black hover:text-sky-blue"
                      : "text-white/90 hover:text-light-blue"
                  }`}
                >
                  {(link as any).label}
                  <span
                    aria-hidden
                    className={`absolute left-0 -bottom-1.5 h-[2px] w-full rounded-full origin-left transition-transform duration-200 ease-out ${(showDark ? "bg-sky-blue" : "bg-light-blue")} ${(pathname === (link as any).href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/become-a-volunteer"
              className="group relative inline-flex items-center justify-center bg-sky-blue text-white font-body font-medium text-[15px] px-6 h-[46px] rounded-full overflow-hidden active:scale-95"
            >
              <span className="transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-[46px] whitespace-nowrap">
                Get Involved
              </span>
              <span aria-hidden className="absolute inset-0 flex items-center justify-center translate-y-[46px] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0 whitespace-nowrap">
                Get Involved
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {[
              mobileOpen ? "rotate-45 translate-y-[7px]" : "",
              mobileOpen ? "opacity-0" : "",
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : "",
            ].map((extra, i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  showDark || mobileOpen ? "bg-carbon-black" : "bg-white"
                } ${extra}`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-carbon-black-5 shadow-xl"
          >
            <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px] py-6 flex flex-col gap-1">
              {navLinks.map((link) => {
                if ((link as any).children) {
                  const group = link as any;
                  return (
                    <div key={group.label} className="py-2 border-b border-carbon-black-5">
                      <div className="font-body text-[17px] font-medium py-3 text-carbon-black">{group.label}</div>
                      <div className="flex flex-col pl-4">
                        {group.children.map((child: any) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className={`font-body text-[15px] py-2 transition-colors ${pathname === child.href ? "text-sky-blue" : "text-carbon-black hover:text-sky-blue"}`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={(link as any).href}
                    href={(link as any).href}
                    aria-current={pathname === (link as any).href ? "page" : undefined}
                    className={`font-body text-[17px] font-medium py-3 border-b border-carbon-black-5 transition-colors ${
                      pathname === (link as any).href ? "text-sky-blue" : "text-carbon-black hover:text-sky-blue"
                    }`}
                  >
                    {(link as any).label}
                  </Link>
                );
              })}
              <Link
                href="/become-a-volunteer"
                className="mt-4 inline-flex items-center justify-center bg-sky-blue text-white font-body font-medium text-[16px] px-6 py-4 rounded-full hover:bg-light-blue transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
