import { ReactNode } from "react";

export const formLabelClass = "font-body text-[14px] font-medium text-carbon-black";
export const formOptionalClass =
  "font-body text-[13px] font-normal text-steel-gray/70 ml-1.5";
export const formHintClass = "font-body text-[13px] text-steel-gray/70";
export const formErrorClass = "font-body text-[13px] text-red-600";

export function formInputClass(hasError?: boolean, extra?: string) {
  return [
    "font-body text-[16px] text-carbon-black w-full px-4 py-3 rounded-lg border bg-white focus:outline-none transition-colors placeholder:text-steel-gray/40",
    hasError
      ? "border-red-600 focus:border-red-600"
      : "border-steel-gray/25 focus:border-sky-blue",
    extra ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

export const formFileClass =
  "font-body text-[14px] text-steel-gray w-full rounded-lg border bg-white p-2 cursor-pointer file:mr-4 file:py-2 file:px-5 file:rounded-full file:border-0 file:bg-ice-blue file:font-body file:font-medium file:text-[14px] file:text-sky-blue file:cursor-pointer hover:file:bg-sky-blue hover:file:text-white file:transition-colors";

export function formFileInputClass(hasError?: boolean) {
  return hasError ? `${formFileClass} border-red-600` : `${formFileClass} border-steel-gray/25`;
}

interface FormLabelProps {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
  optional?: boolean;
}

export function FormLabel({ htmlFor, children, required, optional }: FormLabelProps) {
  return (
    <label htmlFor={htmlFor} className={formLabelClass}>
      {children}
      {required && (
        <span className="text-red-600 ml-0.5" aria-hidden="true">
          *
        </span>
      )}
      {optional && <span className={formOptionalClass}>(Optional)</span>}
    </label>
  );
}

interface FieldErrorProps {
  id: string;
  message?: string;
}

export function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className={formErrorClass}>
      {message}
    </p>
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}

export function FormField({
  id,
  label,
  required,
  optional,
  error,
  hint,
  children,
}: FormFieldProps) {
  const errorId = `${id}-error`;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className="flex flex-col gap-2">
      <FormLabel htmlFor={id} required={required} optional={optional}>
        {label}
      </FormLabel>
      {children}
      {hint && (
        <p id={hintId} className={formHintClass}>
          {hint}
        </p>
      )}
      <FieldError id={errorId} message={error} />
    </div>
  );
}

export function fieldDescribedBy(
  id: string,
  error?: string,
  hint?: string
): string | undefined {
  const ids = [];
  if (error) ids.push(`${id}-error`);
  if (hint) ids.push(`${id}-hint`);
  return ids.length > 0 ? ids.join(" ") : undefined;
}
