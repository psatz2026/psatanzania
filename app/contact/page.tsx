"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";
import PageHero from "@/components/sections/PageHero";

const inputClass =
  "font-body text-[16px] text-carbon-black w-full px-4 py-3 rounded-lg border border-steel-gray/25 bg-white focus:outline-none focus:border-sky-blue placeholder:text-steel-gray/40 transition-colors";

const labelClass = "font-body text-[14px] font-medium text-carbon-black mb-1.5 block";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lead="Whether you are a patient, health worker, researcher, or organization, we want to hear from you."
      />

      {/* Content */}
      <section className="py-[60px] lg:py-[100px] bg-ice-blue">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Left: contact details */}
            <div className="lg:w-[320px] flex-shrink-0 flex flex-col gap-8 lg:sticky lg:top-[140px] self-start">

              <div className="bg-white rounded-2xl p-8 flex flex-col gap-7 shadow-sm">
                <div className="flex flex-col gap-1.5">
                  <span className="font-body text-[12px] font-medium uppercase tracking-widest text-steel-gray/50">Email</span>
                  <a href="mailto:psatz2026@gmail.com" className="font-body text-[16px] text-carbon-black hover:text-sky-blue transition-colors break-all">
                    psatz2026@gmail.com
                  </a>
                </div>

                <div className="h-px bg-steel-gray/10" />

                <div className="flex flex-col gap-1.5">
                  <span className="font-body text-[12px] font-medium uppercase tracking-widest text-steel-gray/50">Location</span>
                  <span className="font-body text-[16px] text-carbon-black">Dar es Salaam, Tanzania</span>
                </div>

                <div className="h-px bg-steel-gray/10" />

                <p className="font-body text-[14px] leading-[1.7] text-steel-gray">
                  We aim to respond within 2 business days.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col gap-4 items-center text-center py-10">
                    <div className="w-14 h-14 rounded-full bg-sky-blue flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-[28px] text-carbon-black">Message sent</h3>
                    <p className="font-body text-[16px] text-steel-gray">Thank you for reaching out. We will get back to you within 2 business days.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className={labelClass}>Full name</label>
                        <input id="name" type="text" placeholder="Your name" required className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>Email address</label>
                        <input id="email" type="email" placeholder="your@email.com" required className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className={labelClass}>Subject</label>
                      <input id="subject" type="text" placeholder="How can we help?" required className={inputClass} />
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass}>Message</label>
                      <textarea
                        id="message"
                        rows={6}
                        placeholder="Your message..."
                        required
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <div>
                      <Button label="Send message" type="submit" variant="primary" />
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
