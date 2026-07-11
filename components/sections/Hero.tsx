"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

const ease = [0.23, 1, 0.32, 1] as const;

const rotatingWords = [
  "every patient",
  "every mother",
  "every newborn",
  "every community",
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease, delay },
  };
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % rotatingWords.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-navy-blue min-h-[100svh] flex items-center overflow-x-clip">
      <div className="max-w-[1460px] w-full mx-auto px-[30px] pt-[110px] pb-[70px]">

        {/* Headline — top left */}
        <motion.h1
          {...fadeUp(0)}
          className="font-heading text-[clamp(34px,9.5vw,92px)] leading-[1.08] text-white"
        >
          <span className="block">Safer care for</span>
          <span className="inline-grid text-light-blue">
            {rotatingWords.map((word, i) => (
              <motion.span
                key={word}
                aria-hidden={i !== index}
                initial={false}
                animate={{
                  opacity: i === index ? 1 : 0,
                  transform:
                    reduceMotion || i === index
                      ? "translateY(0px)"
                      : "translateY(14px)",
                  filter: i === index ? "blur(0px)" : "blur(8px)",
                }}
                transition={{ duration: 0.45, ease }}
                className="col-start-1 row-start-1 whitespace-nowrap"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block">in Tanzania.</span>
        </motion.h1>

        {/* Supporting copy + CTA — offset bottom right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-14 lg:mt-20">
          <motion.div
            {...fadeUp(0.15)}
            className="lg:col-start-8 lg:col-span-5 flex flex-col items-start gap-7 border-t border-white/10 pt-8"
          >
            <p className="font-body text-[17px] sm:text-[19px] leading-[1.6] text-white/70 max-w-[440px]">
              A youth-led alliance reducing preventable harm and putting
              patients at the centre of care.
            </p>
            <Button label="Get Involved" href="/become-a-volunteer" variant="white" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
