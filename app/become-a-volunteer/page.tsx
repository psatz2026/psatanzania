"use client";

import { useState } from "react";
import CheckList from "@/components/ui/CheckList";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import {
  FormField,
  FieldError,
  formInputClass,
  formFileInputClass,
  fieldDescribedBy,
} from "@/components/ui/FormField";
import {
  validateVolunteerForm,
  hasFieldErrors,
  type VolunteerField,
  type FieldErrors,
} from "@/lib/form-validation";

const roles = [
  "Community Health Champion",
  "Patient Advocate",
  "Program Volunteer",
  "Research Assistant",
  "Communications & Social Media",
  "Policy & Advocacy",
];

const textFields: {
  id: VolunteerField;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  optional?: boolean;
}[] = [
  { id: "name", label: "Full name", type: "text", placeholder: "Your name", required: true },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "your@email.com",
    required: true,
  },
  {
    id: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "+255 ...",
    optional: true,
  },
  {
    id: "location",
    label: "Location / Region",
    type: "text",
    placeholder: "e.g. Dar es Salaam",
    optional: true,
  },
];

export default function BecomeAVolunteerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors<VolunteerField>>({});

  const clearFieldError = (field: VolunteerField) => {
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
        eyebrow="Get Involved"
        title="Become a volunteer"
        lead="Join PSA Tanzania and use your skills to build a safer healthcare system for every patient."
        breadcrumbs={[{ name: "Become a Volunteer", path: "/become-a-volunteer" }]}
      />

      <section
        id="volunteer"
        className="py-[60px] lg:py-[100px] bg-ice-blue scroll-mt-[100px]"
      >
        <div className="max-w-[1460px] mx-auto px-5 sm:px-[30px]">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-[35%] flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="font-heading text-[28px] text-carbon-black">
                  Why volunteer with us?
                </h2>
                <p className="font-body text-[16px] leading-[1.6] text-steel-gray">
                  As a PSA Tanzania volunteer you will contribute to real change, develop new
                  skills, and join a passionate community of advocates.
                </p>
              </div>
              <div
                id="membership"
                className="scroll-mt-[100px] rounded-2xl border border-sky-blue/20 bg-white p-6 shadow-sm flex flex-col gap-3"
              >
                <h3 className="font-heading text-[20px] leading-[1.3] text-carbon-black">
                  Become a member
                </h3>
                <p className="font-body text-[15px] leading-[1.6] text-steel-gray">
                  Membership connects you to our network of patient safety champions. Apply below
                  and note your interest in membership in your motivation.
                </p>
              </div>
              <CheckList
                items={[
                  "Meaningful, flexible roles",
                  "Training and mentorship provided",
                  "Join a youth-led movement",
                  "Gain experience in health advocacy",
                  "Build your professional network",
                ]}
              />
            </div>

            <div className="lg:w-[65%]">
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 flex flex-col gap-4 text-center shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-sky-blue flex items-center justify-center mx-auto">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-[24px] text-navy-blue">Application received!</h3>
                  <p className="font-body text-[16px] text-steel-gray">
                    Thank you for applying. We will review your application and be in touch shortly.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 shadow-sm">
                  <form
                    noValidate
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setFormError(null);

                      const form = e.currentTarget;
                      const data = new FormData(form);
                      const errors = validateVolunteerForm(data);

                      if (hasFieldErrors(errors)) {
                        setFieldErrors(errors);
                        return;
                      }

                      setFieldErrors({});
                      setSubmitting(true);

                      try {
                        const res = await fetch("/api/volunteer", {
                          method: "POST",
                          body: data,
                        });

                        if (!res.ok) {
                          const body = await res.json().catch(() => ({}));
                          throw new Error(
                            body.error ??
                              "We could not submit your application. Please check your details and try again."
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {textFields.map((field) => (
                        <FormField
                          key={field.id}
                          id={field.id}
                          label={field.label}
                          required={field.required}
                          optional={field.optional}
                          error={fieldErrors[field.id]}
                        >
                          <input
                            id={field.id}
                            name={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            className={formInputClass(!!fieldErrors[field.id])}
                            aria-invalid={!!fieldErrors[field.id]}
                            aria-describedby={fieldDescribedBy(
                              field.id,
                              fieldErrors[field.id]
                            )}
                            onChange={() => clearFieldError(field.id)}
                          />
                        </FormField>
                      ))}
                    </div>

                    <FormField
                      id="role"
                      label="Preferred role"
                      required
                      error={fieldErrors.role}
                    >
                      <select
                        id="role"
                        name="role"
                        defaultValue=""
                        className={formInputClass(!!fieldErrors.role)}
                        aria-invalid={!!fieldErrors.role}
                        aria-describedby={fieldDescribedBy("role", fieldErrors.role)}
                        onChange={() => clearFieldError("role")}
                      >
                        <option value="" disabled>
                          Select a role...
                        </option>
                        {roles.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </FormField>

                    <FormField
                      id="cv"
                      label="CV / Resume"
                      required
                      error={fieldErrors.cv}
                      hint="PDF or Word document, up to 4MB."
                    >
                      <input
                        id="cv"
                        name="cv"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className={formFileInputClass(!!fieldErrors.cv)}
                        aria-invalid={!!fieldErrors.cv}
                        aria-describedby={fieldDescribedBy(
                          "cv",
                          fieldErrors.cv,
                          "PDF or Word document, up to 4MB."
                        )}
                        onChange={() => clearFieldError("cv")}
                      />
                    </FormField>

                    <FormField
                      id="motivation"
                      label="Why do you want to volunteer?"
                      required
                      error={fieldErrors.motivation}
                    >
                      <textarea
                        id="motivation"
                        name="motivation"
                        rows={5}
                        placeholder="Tell us what motivates you..."
                        className={formInputClass(!!fieldErrors.motivation, "resize-none")}
                        aria-invalid={!!fieldErrors.motivation}
                        aria-describedby={fieldDescribedBy(
                          "motivation",
                          fieldErrors.motivation
                        )}
                        onChange={() => clearFieldError("motivation")}
                      />
                    </FormField>

                    {formError && (
                      <FieldError id="volunteer-form-error" message={formError} />
                    )}

                    <Button
                      label={submitting ? "Submitting..." : "Submit application"}
                      type="submit"
                      variant="primary"
                    />
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
