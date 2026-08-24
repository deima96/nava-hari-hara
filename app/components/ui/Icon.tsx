type IconSize = "sm" | "md" | "lg" | "xl" | "2xl";

type IconProps = {
  name: string;
  size?: IconSize;
  className?: string;
};

const sizeClasses: Record<IconSize, string> = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
  "2xl": "text-5xl",
};

export default function Icon({
  name,
  size = "md",
  className = "",
}: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${sizeClasses[size]} ${className}`}
    >
      {name}
    </span>
  );
}
