export type FieldErrors<T extends string> = Partial<Record<T, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Please enter your email address.";
  if (!EMAIL_PATTERN.test(trimmed)) {
    return "Please enter a valid email address (e.g. name@example.com).";
  }
  return undefined;
}

export function validateRequired(value: string, message: string): string | undefined {
  if (!value.trim()) return message;
  return undefined;
}

export type ContactField = "name" | "email" | "subject" | "message";

export function validateContactForm(data: FormData): FieldErrors<ContactField> {
  const errors: FieldErrors<ContactField> = {};

  const name = String(data.get("name") ?? "");
  const email = String(data.get("email") ?? "");
  const subject = String(data.get("subject") ?? "");
  const message = String(data.get("message") ?? "");

  const nameError = validateRequired(name, "Please enter your full name.");
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(email);
  if (emailError) errors.email = emailError;

  const subjectError = validateRequired(subject, "Please enter a subject for your message.");
  if (subjectError) errors.subject = subjectError;

  const messageError = validateRequired(message, "Please enter your message.");
  if (messageError) errors.message = messageError;

  return errors;
}

const ALLOWED_CV_EXTENSIONS = [".pdf", ".doc", ".docx"];
const MAX_CV_BYTES = 4 * 1024 * 1024;

export type VolunteerField =
  | "name"
  | "email"
  | "phone"
  | "location"
  | "role"
  | "cv"
  | "motivation";

export function validateVolunteerForm(data: FormData): FieldErrors<VolunteerField> {
  const errors: FieldErrors<VolunteerField> = {};

  const name = String(data.get("name") ?? "");
  const email = String(data.get("email") ?? "");
  const role = String(data.get("role") ?? "");
  const motivation = String(data.get("motivation") ?? "");
  const cv = data.get("cv");

  const nameError = validateRequired(name, "Please enter your full name.");
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(email);
  if (emailError) errors.email = emailError;

  if (!role.trim()) {
    errors.role = "Please select a preferred role.";
  }

  if (!(cv instanceof File) || cv.size === 0) {
    errors.cv = "Please upload your CV or resume.";
  } else {
    if (cv.size > MAX_CV_BYTES) {
      errors.cv = "Your CV must be 4MB or smaller. Please choose a smaller file.";
    } else {
      const lower = cv.name.toLowerCase();
      if (!ALLOWED_CV_EXTENSIONS.some((ext) => lower.endsWith(ext))) {
        errors.cv = "Please upload a PDF or Word document (.pdf, .doc, or .docx).";
      }
    }
  }

  const motivationError = validateRequired(
    motivation,
    "Please tell us why you want to volunteer."
  );
  if (motivationError) errors.motivation = motivationError;

  return errors;
}

export function hasFieldErrors<T extends string>(errors: FieldErrors<T>): boolean {
  return Object.keys(errors).length > 0;
}
