"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";

const socials = [
  {
    label: "Twitter / X",
    href: "https://twitter.com/psatanzania",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.744l7.736-8.858L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/psatanzania",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/psatanzania",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/psatanzania",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const inputClass =
  "font-body text-[15px] text-carbon-black w-full px-4 py-3 rounded-lg border border-steel-gray/25 bg-white focus:outline-none focus:border-sky-blue placeholder:text-steel-gray/40 transition-colors";

const labelClass = "font-body text-[13px] font-medium text-carbon-black mb-1.5 block";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Navy hero header */}
      <section className="bg-navy-blue pt-[160px] pb-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="max-w-[700px]">
            <AnimateIn y={16}>
              <p className="font-body text-[14px] font-medium tracking-widest uppercase text-sky-blue mb-6">Contact</p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="font-heading text-[56px] lg:text-[72px] leading-[1.08] text-white mb-8">
                Get in touch
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="font-body text-[20px] leading-[1.5] text-white/75">
                Whether you are a patient, health worker, researcher, or organization, we want to hear from you.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-[100px] bg-ice-blue">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Left: contact details */}
            <div className="lg:w-[320px] flex-shrink-0 flex flex-col gap-8 lg:sticky lg:top-[140px] self-start">

              <div className="bg-white rounded-2xl p-8 flex flex-col gap-7 shadow-sm">
                <div className="flex flex-col gap-1.5">
                  <span className="font-body text-[11px] font-medium uppercase tracking-widest text-steel-gray/50">Email</span>
                  <a href="mailto:info@psatanzania.org" className="font-body text-[15px] text-carbon-black hover:text-sky-blue transition-colors break-all">
                    info@psatanzania.org
                  </a>
                </div>

                <div className="h-px bg-steel-gray/10" />

                <div className="flex flex-col gap-1.5">
                  <span className="font-body text-[11px] font-medium uppercase tracking-widest text-steel-gray/50">Location</span>
                  <span className="font-body text-[15px] text-carbon-black">Dar es Salaam, Tanzania</span>
                </div>

                <div className="h-px bg-steel-gray/10" />

                <div className="flex flex-col gap-3">
                  <span className="font-body text-[11px] font-medium uppercase tracking-widest text-steel-gray/50">Follow us</span>
                  <div className="flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-10 h-10 rounded-full bg-ice-blue text-steel-gray hover:bg-sky-blue hover:text-white transition-all flex items-center justify-center"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-steel-gray/10" />

                <p className="font-body text-[13px] leading-[1.7] text-steel-gray">
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
