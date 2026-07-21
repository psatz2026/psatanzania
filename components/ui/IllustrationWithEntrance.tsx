"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export default function IllustrationWithEntrance() {
  const prefersReduced = useReducedMotion();
  const ease = [0.23, 1, 0.32, 1] as const;

  const imgEl = (
    // Decorative image from public/ — alt is empty because caption provides context and image is decorative
    <img
    src="/patients_doctors.png"
      alt=""
      aria-hidden="true"
      className="w-full h-full object-cover"
    />
  );

  if (prefersReduced) {
    return (
      <div className="w-full h-[300px] lg:h-[420px] overflow-hidden rounded-2xl bg-ice-blue">
        {imgEl}
      </div>
    );
  }

  return (    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.2, ease }}
      className="w-full h-[300px] lg:h-[420px] overflow-hidden rounded-2xl bg-ice-blue"
    >
      {imgEl}
    </motion.div>
  );
}
