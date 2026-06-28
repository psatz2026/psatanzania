"use client";

import { useState } from "react";
import CheckList from "@/components/ui/CheckList";
import Button from "@/components/ui/Button";

const roles = ["Community Health Champion", "Patient Advocate", "Program Volunteer", "Research Assistant", "Communications & Social Media", "Policy & Advocacy"];

export default function BecomeAVolunteerPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-navy-blue pt-[160px] pb-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="max-w-[700px]">
            <p className="font-body text-[14px] font-medium tracking-widest uppercase text-sky-blue mb-6">Get Involved</p>
            <h1 className="font-heading text-[56px] lg:text-[72px] leading-[1.08] text-white mb-8">
              Become a volunteer
            </h1>
            <p className="font-body text-[20px] leading-[1.5] text-white/75">
              Join PSA Tanzania and use your skills to build a safer healthcare system for every patient.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[100px]">
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
                <div className="flex flex-col gap-4 p-10 bg-ice-blue rounded-2xl text-center">
                  <div className="w-14 h-14 rounded-full bg-sky-blue flex items-center justify-center mx-auto">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-[24px] text-navy-blue">Application received!</h3>
                  <p className="font-body text-[16px] text-steel-gray">Thank you for applying. We will review your application and be in touch shortly.</p>
                </div>
              ) : (
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
                        <input id={field.id} type={field.type} placeholder={field.placeholder} className="font-body text-[16px] px-4 py-3 border border-carbon-black-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-blue/50 placeholder:text-steel-gray/50" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="role" className="font-body text-[14px] font-medium text-carbon-black">Preferred role</label>
                    <select id="role" required className="font-body text-[16px] px-4 py-3 border border-carbon-black-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-blue/50 bg-white text-carbon-black">
                      <option value="">Select a role...</option>
                      {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="motivation" className="font-body text-[14px] font-medium text-carbon-black">Why do you want to volunteer?</label>
                    <textarea id="motivation" rows={5} required placeholder="Tell us what motivates you..." className="font-body text-[16px] px-4 py-3 border border-carbon-black-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-blue/50 placeholder:text-steel-gray/50 resize-none" />
                  </div>
                  <Button label="Submit application" type="submit" variant="primary" />
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
