"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Volunteer with us",
    description:
      "Join as a community champion, patient advocate, or program volunteer and help us create meaningful change from the ground up.",
    href: "/become-a-volunteer",
  },
  {
    number: "02",
    title: "Partner with us",
    description:
      "Civil society, academic, or health-sector organizations seeking collaboration can work with us to scale impact across Tanzania.",
    href: "/contact",
  },
  {
    number: "03",
    title: "Share your experience",
    description:
      "Help us document patient experiences and safety gaps as evidence to drive accountability and systemic reform.",
    href: "/contact",
  },
  {
    number: "04",
    title: "Support our work",
    description:
      "Foundations, embassies, and development partners can support our programs and help us reach more communities.",
    href: "/contact",
  },
];

export default function FeatureScrollSection() {
  return (
    <section className="py-[100px]">
      <div className="max-w-[1460px] mx-auto px-[30px]">
        {/* Header */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-16 max-w-[560px]"
        >
          <h2 className="font-heading text-[40px] lg:text-[56px] leading-[1.1] text-carbon-black">
            Ways to get involved
          </h2>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ y: 24 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Link
                href={feature.href}
                className="group flex flex-col gap-6 p-8 lg:p-10 bg-white rounded-2xl border border-carbon-black-5 hover:border-sky-blue hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-full bg-navy-blue-10 flex items-center justify-center group-hover:bg-sky-blue transition-colors duration-300">
                  <span className="font-heading text-[16px] text-navy-blue group-hover:text-white transition-colors duration-300">
                    {feature.number}
                  </span>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="font-heading text-[24px] lg:text-[28px] leading-[1.2] text-carbon-black group-hover:text-navy-blue transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="font-body text-[16px] leading-[1.6] text-steel-gray">
                    {feature.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 font-body font-medium text-[14px] text-sky-blue">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
