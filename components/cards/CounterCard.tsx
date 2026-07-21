"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CounterCardProps {
  value: number;
  suffix?: string;
  label: string;
  light?: boolean;
}

export default function CounterCard({ value, suffix = "", label, light = false }: CounterCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReduced = useReducedMotion();
  const [count, setCount] = useState(prefersReduced ? value : 0);

  useEffect(() => {
    if (prefersReduced) {
      setCount(value);
      return;
    }

    if (!isInView) return;
    const duration = 500; // shortened per request (400-600ms)
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value, prefersReduced]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <span className={`font-heading text-[40px] lg:text-[56px] leading-none ${light ? "text-white" : "text-navy-blue"}`}>
        {count}{suffix}
      </span>
      <span className={`font-body text-[16px] ${light ? "text-white/70" : "text-steel-gray"}`}>
        {label}
      </span>
    </div>
  );
}
