"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export const lenisStore: { lenis: Lenis | null } = { lenis: null };

function scrollToHash(hash: string, immediate = false) {
  const id = hash.replace(/^#/, "");
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  lenisStore.lenis?.scrollTo(el, { offset: -100, immediate });
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

    const onHashClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.includes("#")) return;

      try {
        const url = new URL(href, window.location.origin);
        if (url.pathname !== window.location.pathname) return;
        if (!url.hash) return;
        e.preventDefault();
        history.pushState(null, "", url.hash);
        scrollToHash(url.hash);
      } catch {
        /* ignore malformed hrefs */
      }
    };

    document.addEventListener("click", onHashClick);

    return () => {
      document.removeEventListener("click", onHashClick);
      lenis.destroy();
      lenisStore.lenis = null;
    };
  }, []);

  // New page: respect hash anchors, otherwise start at top
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait a frame so the destination page has painted
      requestAnimationFrame(() => {
        if (!scrollToHash(hash, true)) {
          // Element may mount slightly later (e.g. client sections)
          setTimeout(() => scrollToHash(hash), 100);
        }
      });
      return;
    }
    lenisStore.lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return <>{children}</>;
}
