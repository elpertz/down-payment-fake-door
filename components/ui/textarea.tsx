"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "motion/react";

import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "flex min-h-[120px] w-full rounded-lg border bg-white px-4 py-3 text-body text-neutral-950 ring-offset-background placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-y",
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

export interface TextareaProps
  extends Omit<HTMLMotionProps<"textarea">, "ref">,
    VariantProps<typeof textareaVariants> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, error, ...props }, ref) => {
    const textareaVariant = error ? "error" : variant;

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
      <motion.textarea
        className={cn(textareaVariants({ variant: textareaVariant, className }))}
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
Textarea.displayName = "Textarea";

export { Textarea };
