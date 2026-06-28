interface SocialIconProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export default function SocialIcon({ href, label, children }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-navy-blue-10 flex items-center justify-center text-navy-blue hover:bg-sky-blue hover:text-white transition-all duration-200"
    >
      {children}
    </a>
  );
}
