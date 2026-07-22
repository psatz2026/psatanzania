"use client";

import { useState, useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { lenisStore, scrollToHash } from "@/components/layout/SmoothScroll";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Who We Are",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Vision", href: "/about#vision" },
      { label: "Mission", href: "/about#mission" },
      { label: "Leadership", href: "/team#leadership" },
    ],
  },
  { label: "Programs", href: "/causes" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const darkHeroRoutes = ["/", "/about", "/causes", "/team", "/faqs", "/become-a-volunteer", "/contact"];

const donateHref = "/contact#donate";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const navigationRef = useRef<HTMLElement>(null);

  const hasDarkHero = darkHeroRoutes.includes(pathname);
  const showDark = scrolled || !hasDarkHero;

  const scrollToAboutSection = (section: string) => {
    const target = Array.from(
      document.querySelectorAll<HTMLElement>(`[data-about-section="${section}"]`)
    ).find((element) => element.getClientRects().length > 0);

    if (!target) return;
    lenisStore.lenis?.scrollTo(target, { offset: -100 });
    if (!lenisStore.lenis) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleHashNav = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const [path, section] = href.split("#");
    if (!section || pathname !== path) return;
    event.preventDefault();
    window.history.replaceState(null, "", href);
    if (path === "/about") {
      scrollToAboutSection(section);
    } else {
      scrollToHash(`#${section}`);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setMobileGroup(null); setOpenGroup(null); }, [pathname]);

  useEffect(() => {
    const section = window.location.hash.slice(1);
    if (!section) return;

    if (pathname === "/about" && (section === "vision" || section === "mission")) {
      const timer = window.setTimeout(() => scrollToAboutSection(section), 0);
      return () => window.clearTimeout(timer);
    }

    if (
      (pathname === "/contact" && ["donate", "partnership", "sponsorship"].includes(section)) ||
      (pathname === "/team" && section === "leadership") ||
      (pathname === "/become-a-volunteer" && ["volunteer", "membership"].includes(section))
    ) {
      const timer = window.setTimeout(() => scrollToHash(`#${section}`), 50);
      return () => window.clearTimeout(timer);
    }
  }, [pathname]);

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
    const onPointerDown = (event: PointerEvent) => {
      if (!navigationRef.current?.contains(event.target as Node)) setOpenGroup(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

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
          <nav ref={navigationRef} className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              if ("children" in link) {
                const group = link as {
                  label: string;
                  children: { label: string; href: string }[];
                };
                const isOpen = openGroup === group.label;
                return (
                  <div
                    key={group.label}
                    className="relative"
                    onMouseEnter={() => setOpenGroup(group.label)}
                    onMouseLeave={() => setOpenGroup(null)}
                  >
                    <div className="relative">
                      <button
                        aria-haspopup="true"
                        aria-expanded={isOpen ? "true" : "false"}
                        onClick={() => setOpenGroup(isOpen ? null : group.label)}
                        onFocus={() => setOpenGroup(group.label)}
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-2 font-body text-[15px] font-medium transition-[color,background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] ${
                          isOpen
                            ? (showDark ? "bg-ice-blue text-navy-blue" : "bg-white/10 text-white")
                            : (showDark ? "text-carbon-black hover:text-sky-blue" : "text-white/90 hover:text-light-blue")
                        }`}
                      >
                        <span>{group.label}</span>
                        <svg
                          className={`h-3 w-3 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? "rotate-180" : "rotate-0"}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {/* Links panel — connected to the button */}
                      <div
                        aria-hidden={!isOpen}
                        className={`absolute left-0 top-full z-50 w-[220px] origin-top-left rounded-xl border border-navy-blue/10 bg-white p-1.5 shadow-[0_18px_45px_rgba(27,56,136,0.16),0_2px_8px_rgba(24,22,24,0.04)] transition-[opacity,transform,visibility] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-1 scale-[0.97] opacity-0 pointer-events-none"}`}
                      >
                        <span
                          aria-hidden
                          className="absolute -top-1 left-5 h-2 w-2 rotate-45 border-l border-t border-navy-blue/10 bg-white"
                        />
                        <div className="flex flex-col gap-1">
                          {group.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={(event) => {
                                setOpenGroup(null);
                                handleHashNav(event, child.href);
                              }}
                              className="group/item flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 font-body transition-[background-color,color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] text-carbon-black hover:bg-ice-blue hover:text-navy-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue/50"
                            >
                              <span className="font-body text-[15px] font-medium">{child.label}</span>
                              <svg aria-hidden viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-sky-blue transition-transform duration-150 group-hover/item:translate-x-0.5">
                                <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
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

          {/* Desktop CTA — Donate */}
           <div className="hidden lg:flex items-center">
            <Link
              href={donateHref}
              onClick={(event) => handleHashNav(event, donateHref)}
              className="group relative inline-flex items-center justify-center bg-[#E23D3D] text-white font-body font-medium text-[15px] px-6 h-[46px] rounded-full overflow-hidden shadow-sm transition-[background-color,transform,box-shadow] duration-200 ease-out hover:bg-[#C93434] hover:-translate-y-0.5 hover:shadow-md active:scale-95 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E23D3D]/50 focus-visible:ring-offset-2"
            >
              Donate
            </Link>
          </div>


          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => {
              if (mobileOpen) setMobileGroup(null);
              setMobileOpen(!mobileOpen);
            }}
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
                if ("children" in link) {
                  const group = link as {
                    label: string;
                    children: { label: string; href: string }[];
                  };
                  const isOpen = mobileGroup === group.label;
                  return (
                    <div key={group.label} className="py-2 border-b border-carbon-black-5">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setMobileGroup(isOpen ? null : group.label)}
                        className={`flex w-full items-center justify-between rounded-lg py-3 text-left font-body text-[17px] font-medium transition-[color,background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] ${isOpen ? "text-navy-blue" : "text-carbon-black"}`}
                      >
                        <span>{group.label}</span>
                        <svg aria-hidden viewBox="0 0 24 24" fill="none" className={`h-4 w-4 text-sky-blue transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? "rotate-180" : "rotate-0"}`}>
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {isOpen && (
                      <div className="flex flex-col border-l border-navy-blue/10 pl-4 pb-2">
                        {group.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            onClick={(event) => {
                              setMobileGroup(null);
                              setMobileOpen(false);
                              handleHashNav(event, child.href);
                            }}
                            className={`font-body text-[15px] py-2.5 transition-colors ${pathname === child.href ? "text-sky-blue" : "text-carbon-black hover:text-sky-blue"}`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                      )}
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
                href={donateHref}
                onClick={(event) => {
                  setMobileOpen(false);
                  handleHashNav(event, donateHref);
                }}
                className="mt-4 inline-flex items-center justify-center bg-[#E23D3D] text-white font-body font-medium text-[16px] px-6 py-4 rounded-full shadow-sm transition-[background-color,transform,box-shadow] duration-200 ease-out hover:bg-[#C93434] hover:-translate-y-0.5 hover:shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E23D3D]/50 focus-visible:ring-offset-2"
              >
                Donate
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
