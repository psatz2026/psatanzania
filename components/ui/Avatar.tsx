import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export default function Avatar({ src, alt, size = 48 }: AvatarProps) {
  return (
    <div
      className="rounded-full overflow-hidden flex-shrink-0 bg-ice-blue"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
