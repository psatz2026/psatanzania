"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface CounterItem {
  id: string;
  label: string;
  value?: number; // numeric target value (for count-up)
  display?: string; // fallback display (e.g., "1 in 10")
}

export default function AccessibleCounters({ items }: { items: CounterItem[] }) {
  const reduce = useReducedMotion();
  const [counts, setCounts] = useState<string[]>(() => items.map((it) => it.display ?? "0"));
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const announcerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Announce the stats for screen readers once when component appears
    if (announcerRef.current) {
      const text = items
        .map((it, i) => `${it.label}: ${it.display ?? (it.value ? it.value.toLocaleString() : "n/a")}`)
        .join("; ");
      announcerRef.current.textContent = text;
    }
  }, [items]);

  useEffect(() => {
    // If reduced motion, just set final displays and skip animation
    if (reduce) {
      setCounts(items.map((it) => it.display ?? (it.value ? formatNumber(it.value) : "")));
      return;
    }

    const duration = 800; // ms
    const start = performance.now();
    startRef.current = start;

    const ticks = items.map((it) => ({
      from: 0,
      to: it.value ?? 0,
    }));

    const step = (now: number) => {
      const t = Math.min(1, (now - (startRef.current ?? now)) / duration);
      const eased = easeOutCubic(t);
      const next = ticks.map((tk, i) => {
        if (!tk.to || tk.to === 0) return items[i].display ?? "";
        const val = Math.round(tk.from + (tk.to - tk.from) * eased);
        return formatNumber(val);
      });
      setCounts(next);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [items, reduce]);

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
      {/* Live region for screen readers */}
      <div ref={announcerRef} aria-live="polite" className="sr-only" />

      {items.map((it, idx) => (
        <div key={it.id} className="flex flex-col items-start">
          <div className="font-heading text-[32px] lg:text-[36px] leading-none text-navy-blue">
            {counts[idx] ?? it.display}
          </div>
          <div className="mt-2 font-body text-[15px] text-steel-gray">{it.label}</div>
        </div>
      ))}
    </div>
  );
}

function formatNumber(n: number) {
  if (n >= 1000000) {
    return Math.round(n / 100000) / 10 + "M+"; // e.g., 3,000,000 -> 3.0M+
  }
  if (n >= 1000) return n.toLocaleString();
  return String(n);
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}
