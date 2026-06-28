"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/causes" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

// Pages whose top section is dark (navy) — nav starts with white text on these
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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showDark ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1460px] mx-auto px-[30px]">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/psa_logo.png"
              alt="Patient Safety Alliance Tanzania"
              width={120}
              height={56}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-[15px] font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-sky-blue"
                    : showDark
                    ? "text-carbon-black hover:text-sky-blue"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
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
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                showDark || mobileOpen ? "bg-carbon-black" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                showDark || mobileOpen ? "bg-carbon-black" : "bg-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                showDark || mobileOpen ? "bg-carbon-black" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
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
            <div className="max-w-[1460px] mx-auto px-[30px] py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
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
