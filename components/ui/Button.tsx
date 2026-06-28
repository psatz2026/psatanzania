import Link from "next/link";

type ButtonVariant = "primary" | "outlined" | "ghost" | "white";

interface ButtonProps {
  label: string;
  href?: string;
  variant?: ButtonVariant;
  openInNewTab?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-sky-blue text-white hover:bg-light-blue",
  outlined:
    "bg-transparent border-2 border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white",
  ghost:
    "bg-transparent text-sky-blue hover:bg-sky-blue/10",
  white:
    "bg-white text-navy-blue hover:bg-ice-blue",
};

export default function Button({
  label,
  href,
  variant = "primary",
  openInNewTab = false,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-body font-medium text-[15px] px-6 py-3 rounded-full transition-all duration-200 active:scale-95 cursor-pointer";
  const combined = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className={combined}
      >
        {label}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {label}
    </button>
  );
}
