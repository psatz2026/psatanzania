"use client";

import { useState, type ReactNode } from "react";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import {
  FormField,
  FieldError,
  formInputClass,
  fieldDescribedBy,
} from "@/components/ui/FormField";
import {
  validateContactForm,
  hasFieldErrors,
  type ContactField,
  type FieldErrors,
} from "@/lib/form-validation";

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-ice-blue text-sky-blue flex items-center justify-center hover:bg-sky-blue hover:text-white transition-colors"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icon}
      </svg>
    </a>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors<ContactField>>({});

  const clearFieldError = (field: ContactField) => {
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lead="Whether you are a patient, health worker, researcher, or organization, we want to hear from you."
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="py-[60px] lg:py-[100px] bg-ice-blue">
        <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-[320px] flex-shrink-0 flex flex-col gap-8 lg:sticky lg:top-[140px] self-start">
              <div className="bg-white rounded-2xl p-8 flex flex-col gap-7 shadow-sm">
                <div className="flex flex-col gap-1.5">
                  <span className="font-body text-[12px] font-medium uppercase tracking-widest text-steel-gray/50">
                    Email
                  </span>
                  <a
                    href="mailto:info@psatanzania.org"
                    className="font-body text-[16px] text-carbon-black hover:text-sky-blue transition-colors break-all"
                  >
                    info@psatanzania.org
                  </a>
                </div>

                <div className="h-px bg-steel-gray/10" />

                {/* TODO: [NEEDS INPUT FROM PSA: phone number] */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-body text-[12px] font-medium uppercase tracking-widest text-steel-gray/50">
                    Phone
                  </span>
                  <a
                    href="tel:+255788323232"
                    className="font-body text-[16px] text-carbon-black hover:text-sky-blue transition-colors break-normal"
                  >
                    +255 788 323 232
                  </a>
                </div>

                <div className="h-px bg-steel-gray/10" />

                {/* TODO: [NEEDS INPUT FROM PSA: postal address] */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-body text-[12px] font-medium uppercase tracking-widest text-steel-gray/50">
                    Postal address
                  </span>
                  <span className="font-body text-[16px] text-carbon-black leading-[1.5]">
                    {"{{POSTAL_ADDRESS}}"}
                  </span>
                </div>

                <div className="h-px bg-steel-gray/10" />

                <div className="flex flex-col gap-1.5">
                  <span className="font-body text-[12px] font-medium uppercase tracking-widest text-steel-gray/50">
                    Location
                  </span>
                  <span className="font-body text-[16px] text-carbon-black">
                    Dar es Salaam, Tanzania
                  </span>
                </div>

                <div className="h-px bg-steel-gray/10" />

                {/* TODO: [NEEDS INPUT FROM PSA: social media URLs] */}
                <div className="flex flex-col gap-3">
                  <span className="font-body text-[12px] font-medium uppercase tracking-widest text-steel-gray/50">
                    Follow us
                  </span>
                  <div className="flex items-center gap-3">
                    <SocialLink
                      href="{{FACEBOOK_URL}}"
                      label="Facebook"
                      icon={
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      }
                    />
                    <SocialLink
                      href="{{INSTAGRAM_URL}}"
                      label="Instagram"
                      icon={
                        <>
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </>
                      }
                    />
                    <SocialLink
                      href="{{X_URL}}"
                      label="X (Twitter)"
                      icon={
                        <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768" />
                      }
                    />
                    <SocialLink
                      href="{{LINKEDIN_URL}}"
                      label="LinkedIn"
                      icon={
                        <>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </>
                      }
                    />
                  </div>
                </div>

                <div className="h-px bg-steel-gray/10" />

                <p className="font-body text-[14px] leading-[1.7] text-steel-gray">
                  We aim to respond within 2 business days.
                </p>
              </div>

              {/* Donate placeholder anchor — styling/placement only, no payment flow */}
              <div
                id="donate"
                className="scroll-mt-[120px] bg-white rounded-2xl p-8 shadow-sm border border-carbon-black-5"
              >
                <h3 className="font-heading text-[20px] text-carbon-black mb-2">Donate</h3>
                <p className="font-body text-[15px] leading-[1.6] text-steel-gray">
                  Donation options coming soon. Reach out via the form or email if you would like
                  to support our work.
                </p>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col gap-4 items-center text-center py-10">
                    <div className="w-14 h-14 rounded-full bg-sky-blue flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="font-heading text-[28px] text-carbon-black">Message sent</h3>
                    <p className="font-body text-[16px] text-steel-gray">
                      Thank you for reaching out. We will get back to you within 2 business days.
                    </p>
                  </div>
                ) : (
                  <form
                    noValidate
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setFormError(null);

                      const form = e.currentTarget;
                      const data = new FormData(form);
                      const errors = validateContactForm(data);

                      if (hasFieldErrors(errors)) {
                        setFieldErrors(errors);
                        return;
                      }

                      setFieldErrors({});
                      setSubmitting(true);

                      try {
                        const res = await fetch("/api/contact", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            name: data.get("name"),
                            email: data.get("email"),
                            subject: data.get("subject"),
                            message: data.get("message"),
                          }),
                        });

                        if (!res.ok) {
                          const body = await res.json().catch(() => ({}));
                          throw new Error(
                            body.error ??
                              "We could not send your message. Please check your details and try again."
                          );
                        }

                        setSubmitted(true);
                      } catch (err) {
                        setFormError(
                          err instanceof Error
                            ? err.message
                            : "Something went wrong. Please try again."
                        );
                      } finally {
                        setSubmitting(false);
                      }
                    }}
                    className="flex flex-col gap-6"
                  >
                    <p className="font-body text-[13px] text-steel-gray">
                      Fields marked with <span className="text-red-600">*</span> are required.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField id="name" label="Full name" required error={fieldErrors.name}>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          className={formInputClass(!!fieldErrors.name)}
                          aria-invalid={!!fieldErrors.name}
                          aria-describedby={fieldDescribedBy("name", fieldErrors.name)}
                          onChange={() => clearFieldError("name")}
                        />
                      </FormField>

                      <FormField
                        id="email"
                        label="Email address"
                        required
                        error={fieldErrors.email}
                      >
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          className={formInputClass(!!fieldErrors.email)}
                          aria-invalid={!!fieldErrors.email}
                          aria-describedby={fieldDescribedBy("email", fieldErrors.email)}
                          onChange={() => clearFieldError("email")}
                        />
                      </FormField>
                    </div>

                    <FormField id="subject" label="Subject" required error={fieldErrors.subject}>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="How can we help?"
                        className={formInputClass(!!fieldErrors.subject)}
                        aria-invalid={!!fieldErrors.subject}
                        aria-describedby={fieldDescribedBy("subject", fieldErrors.subject)}
                        onChange={() => clearFieldError("subject")}
                      />
                    </FormField>

                    <FormField id="message" label="Message" required error={fieldErrors.message}>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Your message..."
                        className={formInputClass(!!fieldErrors.message, "resize-none")}
                        aria-invalid={!!fieldErrors.message}
                        aria-describedby={fieldDescribedBy("message", fieldErrors.message)}
                        onChange={() => clearFieldError("message")}
                      />
                    </FormField>

                    {formError && (
                      <FieldError id="contact-form-error" message={formError} />
                    )}

                    <div>
                      <Button
                        label={submitting ? "Sending..." : "Send message"}
                        type="submit"
                        variant="primary"
                      />
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
