"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { IconProps } from "phosphor-react";

import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex min-h-5 items-center gap-1 rounded-lg border px-2 py-0 text-title-group transition-colors",
  {
    variants: {
      variant: {
        brand: "border-brand-200 bg-brand-100 text-brand-700",
        neutral: "border-neutral-200 bg-neutral-100 text-neutral-700",
        info: "border-info-200 bg-info-100 text-info-700",
        success: "border-success-200 bg-success-100 text-success-700",
        warning: "border-warning-200 bg-warning-100 text-warning-700",
        danger: "border-danger-200 bg-danger-100 text-danger-700",
      },
    },
    defaultVariants: {
      variant: "brand",
    },
  }
);

interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  icon?: React.ComponentType<IconProps>;
  iconSize?: number;
}

function Tag({ className, variant, icon: Icon, iconSize = 14, children, ...props }: TagProps) {
  return (
    <span className={cn(tagVariants({ variant }), className)} {...props}>
      {Icon && <Icon size={iconSize} weight="regular" />}
      <span>{children}</span>
    </span>
  );
}

export { Tag, tagVariants };
export type { TagProps };
