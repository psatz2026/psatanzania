"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { lenisStore } from "@/components/layout/SmoothScroll";

const ease = [0.23, 1, 0.32, 1] as const;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    if (lenisStore.lenis) {
      lenisStore.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            transform: reduceMotion ? "none" : "translateY(10px) scale(0.95)",
          }}
          animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
          exit={{
            opacity: 0,
            transform: reduceMotion ? "none" : "translateY(10px) scale(0.95)",
            transition: { duration: 0.15, ease },
          }}
          transition={{ duration: 0.2, ease }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-sky-blue text-white shadow-lg flex items-center justify-center transition-colors hover:bg-light-blue active:scale-95"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
