interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}

export default function FeatureCard({ number, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-6 p-8 bg-white rounded-2xl border border-carbon-black-5 shadow-sm">
      <div className="w-12 h-12 rounded-full bg-navy-blue-10 flex items-center justify-center">
        <span className="font-heading text-[18px] text-navy-blue">{number}</span>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-heading text-[24px] leading-[1.2] text-carbon-black">{title}</h3>
        <p className="font-body text-[16px] leading-[1.6] text-steel-gray">{description}</p>
      </div>
    </div>
  );
}
