"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-navy-blue pt-[160px] pb-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="max-w-[700px]">
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="font-body text-[14px] font-medium tracking-widest uppercase text-sky-blue mb-6">Contact</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease, delay: 0.1 }} className="font-heading text-[56px] lg:text-[72px] leading-[1.08] text-white mb-8">Get in touch</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.2 }} className="font-body text-[20px] leading-[1.5] text-white/75">Whether you are a patient, health worker, researcher, or organization — we want to hear from you.</motion.p>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-ice-blue">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact info */}
            <div className="lg:w-[35%] flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h2 className="font-heading text-[28px] text-carbon-black">Contact information</h2>
                <p className="font-body text-[16px] leading-[1.6] text-steel-gray">
                  Reach us by email or follow us on social media. We aim to respond within 2 business days.
                </p>
              </div>
              {[
                { label: "Email", value: "info@psatanzania.org" },
                { label: "Location", value: "Dar es Salaam, Tanzania" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="font-body text-[13px] font-medium uppercase tracking-widest text-sky-blue">{item.label}</span>
                  <span className="font-body text-[16px] text-carbon-black">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:w-[65%]">
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 flex flex-col gap-4 text-center shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-sky-blue flex items-center justify-center mx-auto">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-[24px] text-navy-blue">Message sent!</h3>
                  <p className="font-body text-[16px] text-steel-gray">Thank you for reaching out. We'll get back to you within 2 business days.</p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        { id: "name", label: "Full name", type: "text", placeholder: "Your name" },
                        { id: "email", label: "Email address", type: "email", placeholder: "your@email.com" },
                      ].map((field) => (
                        <div key={field.id} className="flex flex-col gap-2">
                          <label htmlFor={field.id} className="font-body text-[14px] font-medium text-carbon-black">
                            {field.label}
                          </label>
                          <input
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            required
                            className="font-body text-[16px] px-4 py-3 border border-steel-gray/20 rounded-xl bg-ice-blue focus:outline-none focus:ring-2 focus:ring-sky-blue/40 placeholder:text-steel-gray/40"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="font-body text-[14px] font-medium text-carbon-black">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="How can we help?"
                        required
                        className="font-body text-[16px] px-4 py-3 border border-steel-gray/20 rounded-xl bg-ice-blue focus:outline-none focus:ring-2 focus:ring-sky-blue/40 placeholder:text-steel-gray/40"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-body text-[14px] font-medium text-carbon-black">Message</label>
                      <textarea
                        id="message"
                        rows={6}
                        placeholder="Your message..."
                        required
                        className="font-body text-[16px] px-4 py-3 border border-steel-gray/20 rounded-xl bg-ice-blue focus:outline-none focus:ring-2 focus:ring-sky-blue/40 placeholder:text-steel-gray/40 resize-none"
                      />
                    </div>
                    <Button label="Send message" type="submit" variant="primary" />
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
