"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "motion/react";

import { cn } from "@/lib/utils";
import { springConfig } from "@/lib/motion/transitions";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-legal font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-neutral-200 text-brand-700",
        secondary: "border-transparent bg-neutral-50 text-neutral-600",
        success: "border-transparent bg-success-50 text-success-700",
        warning: "border-transparent bg-warning-50 text-warning-700",
        danger: "border-transparent bg-danger-50 text-danger-700",
        info: "border-transparent bg-info-50 text-info-700",
        outline: "border-neutral-200 text-brand-700 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends Omit<HTMLMotionProps<"div">, "ref">,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <motion.div
      className={cn(badgeVariants({ variant }), className)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={springConfig}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
