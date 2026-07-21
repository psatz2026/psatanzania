"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically load the accessible counters so the UrgencySection can remain a server component.
const AccessibleCounters = dynamic(() => import("@/components/ui/AccessibleCounters"), { ssr: false });

export default function NoSSRAccessibleCounters() {
  const items = [
    { id: "harm-rate", label: "Patients harmed (approx.)", display: "1 in 10" },
    { id: "annual-deaths", label: "Lives lost annually (global)", value: 3000000 },
  ];

  return <AccessibleCounters items={items} />;
}
