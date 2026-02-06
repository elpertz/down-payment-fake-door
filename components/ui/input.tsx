"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "motion/react";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex h-12 w-full rounded-lg border bg-white px-4 py-3 text-body text-neutral-950 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
  {
    variants: {
      variant: {
        default: "border-neutral-200 focus-visible:border-brand-700",
        error: "border-danger-700 focus-visible:border-danger-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends Omit<HTMLMotionProps<"input">, "ref">,
    VariantProps<typeof inputVariants> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, error, ...props }, ref) => {
    const inputVariant = error ? "error" : variant;

    const motionProps =
      error && props.value
        ? {
            animate: {
              x: [0, -4, 4, -4, 4, 0],
            },
            transition: {
              duration: 0.4,
              ease: [0.42, 0, 0.58, 1] as const,
            },
          }
        : {};

    return (
      <motion.input
        type={type}
        className={cn(inputVariants({ variant: inputVariant, className }))}
        ref={ref}
        {...motionProps}
        {...props}
        style={{
          willChange: error ? "transform" : undefined,
          ...props.style,
        }}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
