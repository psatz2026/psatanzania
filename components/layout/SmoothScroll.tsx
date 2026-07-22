"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export const lenisStore: { lenis: Lenis | null } = { lenis: null };

const SCROLL_OFFSET = -100;

export function scrollToHash(hash: string, immediate = false) {
  const id = hash.replace(/^#/, "");
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  if (lenisStore.lenis) {
    lenisStore.lenis.scrollTo(el, { offset: SCROLL_OFFSET, immediate });
  } else {
    el.scrollIntoView({ behavior: immediate ? "auto" : "smooth", block: "start" });
  }
  return true;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisStore.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisStore.lenis = null;
    };
  }, []);

  // New page: scroll to hash if present, otherwise top
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const timer = window.setTimeout(() => scrollToHash(hash), 50);
      return () => window.clearTimeout(timer);
    }
    lenisStore.lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  // Same-page hash changes (e.g. in-page nav)
  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash) scrollToHash(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return <>{children}</>;
}
