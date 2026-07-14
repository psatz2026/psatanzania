"use client";

import { useState } from "react";
import CheckList from "@/components/ui/CheckList";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";

const roles = ["Community Health Champion", "Patient Advocate", "Program Volunteer", "Research Assistant", "Communications & Social Media", "Policy & Advocacy"];

export default function BecomeAVolunteerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Become a volunteer"
        lead="Join PSA Tanzania and use your skills to build a safer healthcare system for every patient."
        breadcrumbs={[{ name: "Become a Volunteer", path: "/become-a-volunteer" }]}
      />

      <section className="py-[60px] lg:py-[100px] bg-ice-blue">
        <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
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
                <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 shadow-sm">
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setError(null);
                      const form = e.currentTarget;
                      const data = new FormData(form);
                      const cv = data.get("cv");
                      if (cv instanceof File && cv.size > 4 * 1024 * 1024) {
                        setError("CV file must be 4MB or smaller.");
                        return;
                      }
                      setSubmitting(true);
                      try {
                        /* multipart FormData — browser sets the boundary header */
                        const res = await fetch("/api/volunteer", {
                          method: "POST",
                          body: data,
                        });
                        if (!res.ok) throw new Error("Failed to submit application");
                        setSubmitted(true);
                      } catch {
                        setError("Something went wrong. Please try again.");
                      } finally {
                        setSubmitting(false);
                      }
                    }}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        { id: "name", label: "Full name", type: "text", placeholder: "Your name" },
                        { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                        { id: "phone", label: "Phone (optional)", type: "tel", placeholder: "+255 ..." },
                        { id: "location", label: "Location / Region", type: "text", placeholder: "e.g. Dar es Salaam" },
                      ].map((field) => (
                        <div key={field.id} className="flex flex-col gap-2">
                          <label htmlFor={field.id} className="font-body text-[14px] font-medium text-carbon-black">{field.label}</label>
                          <input id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} className="font-body text-[16px] text-carbon-black w-full px-4 py-3 rounded-lg border border-steel-gray/25 bg-white focus:outline-none focus:border-sky-blue transition-colors placeholder:text-steel-gray/40" />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="role" className="font-body text-[14px] font-medium text-carbon-black">Preferred role</label>
                      <select id="role" name="role" required className="font-body text-[16px] text-carbon-black w-full px-4 py-3 rounded-lg border border-steel-gray/25 bg-white focus:outline-none focus:border-sky-blue transition-colors text-carbon-black">
                        <option value="">Select a role...</option>
                        {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="cv" className="font-body text-[14px] font-medium text-carbon-black">CV / Resume</label>
                      <input
                        id="cv"
                        name="cv"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        className="font-body text-[14px] text-steel-gray w-full rounded-lg border border-steel-gray/25 bg-white p-2 cursor-pointer file:mr-4 file:py-2 file:px-5 file:rounded-full file:border-0 file:bg-ice-blue file:font-body file:font-medium file:text-[14px] file:text-sky-blue file:cursor-pointer hover:file:bg-sky-blue hover:file:text-white file:transition-colors"
                      />
                      <p className="font-body text-[13px] text-steel-gray/70">PDF or Word document, up to 4MB.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="motivation" className="font-body text-[14px] font-medium text-carbon-black">Why do you want to volunteer?</label>
                      <textarea id="motivation" name="motivation" rows={5} required placeholder="Tell us what motivates you..." className="font-body text-[16px] text-carbon-black w-full px-4 py-3 rounded-lg border border-steel-gray/25 bg-white focus:outline-none focus:border-sky-blue transition-colors placeholder:text-steel-gray/40 resize-none" />
                    </div>
                    {error && (
                      <p className="font-body text-[14px] text-red-600">{error}</p>
                    )}
                    <Button label={submitting ? "Submitting..." : "Submit application"} type="submit" variant="primary" />
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
