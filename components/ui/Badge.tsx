interface BadgeProps {
  label: string;
  variant?: "blue" | "ice";
}

const styles = {
  blue: "bg-sky-blue-20 text-sky-blue",
  ice: "bg-ice-blue text-navy-blue",
};

export default function Badge({ label, variant = "blue" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-body font-medium text-[13px] px-3 py-1 rounded-full ${styles[variant]}`}
    >
      {label}
    </span>
  );
}
