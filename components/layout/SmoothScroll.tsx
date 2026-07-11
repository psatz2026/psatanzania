"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export const lenisStore: { lenis: Lenis | null } = { lenis: null };

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

  // New page always starts at the top — instant, no animation
  useEffect(() => {
    lenisStore.lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return <>{children}</>;
}
