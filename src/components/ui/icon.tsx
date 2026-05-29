import Image from "next/image";
import { ICONS } from "@/lib/icons";

interface Props {
  name: keyof typeof ICONS;
  size?: number;
  className?: string;
}

export default function Icon({
  name,
  size = 32,
  className = "",
}: Props) {

  return (
    <Image
      src={ICONS[name]}
      alt={name}
      width={size}
      height={size}
      className={className}
    />
  );
}