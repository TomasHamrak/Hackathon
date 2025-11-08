interface SkeletonBarProps {
  width: number;
  height?: number;
  color?: "primary" | "secondary" | "tertiary";
  className?: string;
}

export default function SkeletonBar({
  width,
  height = 10,
  color = "secondary",
  className = "",
}: SkeletonBarProps) {
  const colorClasses = {
    primary: "bg-grey-85",
    secondary: "bg-grey-70",
    tertiary: "bg-grey-60",
  };

  return (
    <div
      className={`rounded-[10px] ${colorClasses[color]} ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
}
