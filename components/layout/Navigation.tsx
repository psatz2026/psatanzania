"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { lenisStore } from "@/components/layout/SmoothScroll";

const whoWeAreLinks = [
  { label: "Vision", href: "/about#vision" },
  { label: "Mission", href: "/about#mission" },
  { label: "Leadership", href: "/team#leadership" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/causes" },
  { label: "Team", href: "/team" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const darkHeroRoutes = ["/", "/about", "/causes", "/team", "/faqs", "/become-a-volunteer", "/contact"];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);
  const [mobileWhoOpen, setMobileWhoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const whoRef = useRef<HTMLDivElement>(null);

  const hasDarkHero = darkHeroRoutes.includes(pathname);
  const showDark = scrolled || !hasDarkHero;
  const whoActive = pathname === "/about" || pathname === "/team";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setWhoOpen(false);
    setMobileWhoOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!whoOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (whoRef.current && !whoRef.current.contains(e.target as Node)) {
        setWhoOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [whoOpen]);

  const linkClass = (active: boolean) =>
    `group relative font-body text-[15px] font-medium transition-colors duration-200 ${
      active
        ? "text-sky-blue"
        : showDark
          ? "text-carbon-black hover:text-sky-blue"
          : "text-white/90 hover:text-light-blue"
    }`;

  const underlineClass = (active: boolean) =>
    `absolute left-0 -bottom-1.5 h-[2px] w-full rounded-full origin-left transition-transform duration-200 ease-out ${
      showDark ? "bg-sky-blue" : "bg-light-blue"
    } ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`;

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
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className={linkClass(pathname === "/")}
            >
              Home
              <span aria-hidden className={underlineClass(pathname === "/")} />
            </Link>

            {/* Who We Are dropdown */}
            <div
              ref={whoRef}
              className="relative"
              onMouseEnter={() => setWhoOpen(true)}
              onMouseLeave={() => setWhoOpen(false)}
            >
              <button
                type="button"
                aria-expanded={whoOpen}
                aria-haspopup="true"
                onClick={() => setWhoOpen((v) => !v)}
                className={`${linkClass(whoActive)} inline-flex items-center gap-1.5`}
              >
                Who We Are
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden
                  className={`transition-transform duration-200 ${whoOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M2.5 4.5L6 8l3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span aria-hidden className={underlineClass(whoActive || whoOpen)} />
              </button>

              <AnimatePresence>
                {whoOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                  >
                    <div className="min-w-[180px] rounded-xl bg-white shadow-lg border border-carbon-black-5 py-2">
                      {whoWeAreLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-2.5 font-body text-[14px] font-medium text-carbon-black hover:text-sky-blue hover:bg-ice-blue transition-colors"
                          onClick={() => setWhoOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={linkClass(pathname === link.href)}
                >
                  {link.label}
                  <span aria-hidden className={underlineClass(pathname === link.href)} />
                </Link>
              ))}

            {/* Donate — visually distinct CTA placement only */}
            <Link
              href="/contact#donate"
              className="font-body text-[14px] font-medium text-white bg-[#C62828] hover:bg-[#B71C1C] px-4 h-[36px] inline-flex items-center rounded-full transition-colors active:scale-95"
            >
              Donate
            </Link>
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
              <span
                aria-hidden
                className="absolute inset-0 flex items-center justify-center translate-y-[46px] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0 whitespace-nowrap"
              >
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
            className="lg:hidden bg-white border-t border-carbon-black-5 shadow-xl max-h-[calc(100svh-70px)] overflow-y-auto"
          >
            <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px] py-6 flex flex-col gap-1">
              <Link
                href="/"
                aria-current={pathname === "/" ? "page" : undefined}
                className={`font-body text-[17px] font-medium py-3 border-b border-carbon-black-5 transition-colors ${
                  pathname === "/" ? "text-sky-blue" : "text-carbon-black hover:text-sky-blue"
                }`}
              >
                Home
              </Link>

              <div className="border-b border-carbon-black-5">
                <button
                  type="button"
                  aria-expanded={mobileWhoOpen}
                  onClick={() => setMobileWhoOpen((v) => !v)}
                  className={`w-full flex items-center justify-between font-body text-[17px] font-medium py-3 transition-colors ${
                    whoActive ? "text-sky-blue" : "text-carbon-black"
                  }`}
                >
                  Who We Are
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden
                    className={`transition-transform duration-200 ${mobileWhoOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M2.5 4.5L6 8l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileWhoOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col pb-3 pl-3">
                        {whoWeAreLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="font-body text-[15px] font-medium py-2.5 text-steel-gray hover:text-sky-blue transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks
                .filter((link) => link.href !== "/")
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`font-body text-[17px] font-medium py-3 border-b border-carbon-black-5 transition-colors ${
                      pathname === link.href
                        ? "text-sky-blue"
                        : "text-carbon-black hover:text-sky-blue"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

              <Link
                href="/contact#donate"
                className="mt-4 inline-flex items-center justify-center bg-[#C62828] text-white font-body font-medium text-[16px] px-6 py-4 rounded-full hover:bg-[#B71C1C] transition-colors"
              >
                Donate
              </Link>

              <Link
                href="/become-a-volunteer"
                className="mt-2 inline-flex items-center justify-center bg-sky-blue text-white font-body font-medium text-[16px] px-6 py-4 rounded-full hover:bg-light-blue transition-colors"
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
