"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  light?: boolean;
  defaultOpen?: number;
  /* Controlled mode — pass both to drive the accordion from outside */
  value?: number | null;
  onChange?: (index: number | null) => void;
}

export default function Accordion({
  items,
  light = false,
  defaultOpen,
  value,
  onChange,
}: AccordionProps) {
  const [internalOpen, setInternalOpen] = useState<number | null>(
    defaultOpen ?? null
  );
  const controlled = value !== undefined;
  const open = controlled ? value : internalOpen;
  const setOpen = (i: number | null) => {
    if (!controlled) setInternalOpen(i);
    onChange?.(i);
  };

  return (
    <div className="flex flex-col divide-y divide-current/10">
      {items.map((item, i) => {
        const panelId = `accordion-panel-${i}-${item.question.slice(0, 12).replace(/\s+/g, "-")}`;
        const buttonId = `accordion-button-${i}-${item.question.slice(0, 12).replace(/\s+/g, "-")}`;
        return (
          <div key={i} className="py-5">
            <h3 className="m-0">
              <button
                id={buttonId}
                aria-expanded={open === i}
                aria-controls={panelId}
                className={`w-full flex items-start justify-between gap-4 text-left ${
                  light ? "text-white" : "text-carbon-black"
                }`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-heading text-[18px] leading-[1.3]">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  } ${light ? "border-white/30" : "border-carbon-black/20"}`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1v10M1 6h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p
                    className={`pt-4 font-body text-[16px] leading-[1.6] ${
                      light ? "text-white/70" : "text-steel-gray"
                    }`}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
