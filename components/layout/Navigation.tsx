"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { lenisStore } from "@/components/layout/SmoothScroll";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/causes" },
  { label: "Team", href: "/team" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const darkHeroRoutes = ["/", "/about", "/causes", "/team", "/faqs", "/become-a-volunteer", "/contact"];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const hasDarkHero = darkHeroRoutes.includes(pathname);
  const showDark = scrolled || !hasDarkHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

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
            className="flex-shrink-0"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                lenisStore.lenis?.scrollTo(0);
              }
            }}
          >
            {showDark ? (
              <Image
                src="/psa-tanzania-logo-full.png"
                alt="Patient Safety Alliance Tanzania"
                width={120}
                height={60}
                className="h-[40px] lg:h-[48px] w-auto object-contain"
                priority
              />
            ) : (
              <span className="flex items-center justify-center w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] rounded-full bg-white shadow-sm">
                <Image
                  src="/psa-tanzania-logo-icon.png"
                  alt="Patient Safety Alliance Tanzania"
                  width={34}
                  height={34}
                  className="w-[26px] h-[26px] lg:w-[34px] lg:h-[34px] object-contain"
                  priority
                />
              </span>
            )}
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`group relative font-body text-[15px] font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-sky-blue"
                    : showDark
                    ? "text-carbon-black hover:text-sky-blue"
                    : "text-white/90 hover:text-light-blue"
                }`}
              >
                {link.label}
                <span
                  aria-hidden
                  className={`absolute left-0 -bottom-1.5 h-[2px] w-full rounded-full origin-left transition-transform duration-200 ease-out ${
                    showDark ? "bg-sky-blue" : "bg-light-blue"
                  } ${
                    pathname === link.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`font-body text-[17px] font-medium py-3 border-b border-carbon-black-5 transition-colors ${
                    pathname === link.href ? "text-sky-blue" : "text-carbon-black hover:text-sky-blue"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
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
