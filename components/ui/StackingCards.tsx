"use client";

import { useRef } from "react";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export interface StackItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/* Tiny alternating tilts — a real deck never stacks perfectly straight */
const tilts = [-0.7, 0.5, -0.4, 0.8, -0.5, 0.6];

function StackedCard({
  item,
  index,
  count,
  progress,
  reduce,
}: {
  item: StackItem;
  index: number;
  count: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  /* Settle only while the next card is actually covering this one */
  const start = (index + 0.55) / count;
  const end = (index + 1) / count;
  const scale = useTransform(progress, [start, end], [1, 0.955]);
  /* White veil fades IN over the covered card — dims it without the card
     itself going transparent (transparency lets lower cards bleed through) */
  const veil = useTransform(progress, [start, end], [0, 0.55]);
  const isLast = index === count - 1;
  const animated = !isLast && !reduce;

  return (
    <motion.div
      style={{
        top: 140 + index * 12,
        zIndex: index + 1,
        transformOrigin: "top center",
        rotate: reduce ? 0 : tilts[index % tilts.length],
        ...(animated ? { scale } : {}),
      }}
      className="sticky bg-white rounded-2xl shadow-[0_2px_16px_rgba(27,56,136,0.07)] border border-sky-blue/20 p-10 flex flex-col gap-6 overflow-hidden"
    >
      {/* Corner brand motif — rings + medical plus, cropped by the card edge */}
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="absolute -top-10 -right-10 w-[190px] h-[190px] -z-10 text-sky-blue pointer-events-none"
        fill="none"
      >
        <circle cx="130" cy="70" r="34" stroke="currentColor" strokeWidth="2" opacity="0.22" />
        <circle cx="130" cy="70" r="62" stroke="currentColor" strokeWidth="2" opacity="0.14" />
        <circle cx="130" cy="70" r="92" stroke="currentColor" strokeWidth="2" opacity="0.08" />
        <rect x="124" y="52" width="12" height="36" rx="3" fill="currentColor" opacity="0.2" />
        <rect x="112" y="64" width="36" height="12" rx="3" fill="currentColor" opacity="0.2" />
      </svg>
      <div className="w-[64px] h-[64px] rounded-full bg-ice-blue flex items-center justify-center text-sky-blue flex-shrink-0">
        {item.icon}
      </div>
      <h3 className="font-heading text-[28px] lg:text-[32px] leading-[1.2] text-carbon-black">
        {item.title}
      </h3>
      <p className="font-body text-[16px] leading-[1.6] text-steel-gray">
        {item.description}
      </p>
      {animated && (
        <motion.div
          aria-hidden
          style={{ opacity: veil }}
          className="absolute inset-0 bg-white rounded-2xl pointer-events-none"
        />
      )}
    </motion.div>
  );
}

export default function StackingCards({ items }: { items: StackItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.2", "end end"],
  });

  return (
    <div ref={ref} className="flex-1 flex flex-col gap-[140px] pt-[60px] min-w-0">
      {items.map((item, i) => (
        <StackedCard
          key={item.title}
          item={item}
          index={i}
          count={items.length}
          progress={scrollYProgress}
          reduce={!!reduce}
        />
      ))}
      {/* Trailing spacer — lets the last card complete its scroll */}
      <div style={{ height: 1 }} />
    </div>
  );
}
