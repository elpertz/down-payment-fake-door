import { cn } from "@/lib/utils";

type SpinnerSize = "xs" | "sm" | "md" | "lg";

const sizeClasses: Record<SpinnerSize, string> = {
  xs: "size-4",
  sm: "size-6",
  md: "size-8",
  lg: "size-10",
};

interface SpinnerProps extends Omit<React.ComponentProps<"svg">, "size"> {
  size?: SpinnerSize;
  onDark?: boolean;
}

function Spinner({ className, size = "xs", onDark = false, ...props }: SpinnerProps) {
  return (
    <svg
      role="status"
      aria-label="Loading"
      viewBox="0 0 24 24"
      className={cn(
        "animate-spin",
        sizeClasses[size],
        onDark ? "text-white" : "text-brand-700",
        className
      )}
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="9.5"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="40 60"
      />
    </svg>
  );
}

export { Spinner };
export type { SpinnerProps, SpinnerSize };
