"use client";

import { useState } from "react";
import CheckList from "@/components/ui/CheckList";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";

const roles = ["Community Health Champion", "Patient Advocate", "Program Volunteer", "Research Assistant", "Communications & Social Media", "Policy & Advocacy"];

export default function BecomeAVolunteerPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Become a volunteer"
        lead="Join PSA Tanzania and use your skills to build a safer healthcare system for every patient."
      />

      <section className="py-[60px] lg:py-[100px] bg-ice-blue">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Why volunteer */}
            <div className="lg:w-[35%] flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="font-heading text-[28px] text-carbon-black">Why volunteer with us?</h2>
                <p className="font-body text-[16px] leading-[1.6] text-steel-gray">
                  As a PSA Tanzania volunteer you will contribute to real change, develop new skills, and join a passionate community of advocates.
                </p>
              </div>
              <CheckList items={["Meaningful, flexible roles", "Training and mentorship provided", "Join a youth-led movement", "Gain experience in health advocacy", "Build your professional network"]} />
            </div>

            {/* Application form */}
            <div className="lg:w-[65%]">
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 flex flex-col gap-4 text-center shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-sky-blue flex items-center justify-center mx-auto">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-[24px] text-navy-blue">Application received!</h3>
                  <p className="font-body text-[16px] text-steel-gray">Thank you for applying. We will review your application and be in touch shortly.</p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        { id: "name", label: "Full name", type: "text", placeholder: "Your name" },
                        { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                        { id: "phone", label: "Phone (optional)", type: "tel", placeholder: "+255 ..." },
                        { id: "location", label: "Location / Region", type: "text", placeholder: "e.g. Dar es Salaam" },
                      ].map((field) => (
                        <div key={field.id} className="flex flex-col gap-2">
                          <label htmlFor={field.id} className="font-body text-[14px] font-medium text-carbon-black">{field.label}</label>
                          <input id={field.id} type={field.type} placeholder={field.placeholder} className="font-body text-[16px] px-4 py-3 border border-steel-gray/20 rounded-xl bg-ice-blue focus:outline-none focus:ring-2 focus:ring-sky-blue/40 placeholder:text-steel-gray/40" />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="role" className="font-body text-[14px] font-medium text-carbon-black">Preferred role</label>
                      <select id="role" required className="font-body text-[16px] px-4 py-3 border border-steel-gray/20 rounded-xl bg-ice-blue focus:outline-none focus:ring-2 focus:ring-sky-blue/40 text-carbon-black">
                        <option value="">Select a role...</option>
                        {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="motivation" className="font-body text-[14px] font-medium text-carbon-black">Why do you want to volunteer?</label>
                      <textarea id="motivation" rows={5} required placeholder="Tell us what motivates you..." className="font-body text-[16px] px-4 py-3 border border-steel-gray/20 rounded-xl bg-ice-blue focus:outline-none focus:ring-2 focus:ring-sky-blue/40 placeholder:text-steel-gray/40 resize-none" />
                    </div>
                    <Button label="Submit application" type="submit" variant="primary" />
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
