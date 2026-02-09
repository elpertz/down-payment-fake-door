"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "phosphor-react";

import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const alertVariants = cva(
  "flex w-full items-start rounded-2xl border p-3",
  {
    variants: {
      variant: {
        neutral: "border-neutral-200 bg-neutral-50 text-neutral-900",
        info: "border-info-200 bg-info-50 text-info-900",
        success: "border-success-200 bg-success-50 text-success-900",
        warning: "border-warning-200 bg-warning-50 text-warning-900",
        danger: "border-danger-200 bg-danger-50 text-danger-900",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  description?: string;
  showAvatar?: boolean;
  closable?: boolean;
  onClose?: () => void;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

function Alert({
  className,
  variant,
  title = "Title",
  description = "Description",
  showAvatar = true,
  closable = false,
  onClose,
  ctaLabel,
  onCtaClick,
  ...props
}: AlertProps) {
  return (
    <div className={cn(alertVariants({ variant }), className)} role="status" {...props}>
      {showAvatar && (
        <Avatar
          type="icon"
          size="sm"
          tone={variant === "neutral" ? "neutral" : variant}
          className="shrink-0"
        />
      )}
      <div className={cn("min-w-0 flex-1", showAvatar ? "ml-3" : "")}> 
        <p className="text-title-body text-current">{title}</p>
        <p className="mt-1 text-body text-neutral-600">{description}</p>
        {ctaLabel && (
          <div className="mt-2">
            <Button size="sm" onClick={onCtaClick}>
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
      {closable && (
        <button
          type="button"
          onClick={onClose}
          className="ml-2 inline-flex size-6 items-center justify-center rounded-md text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
          aria-label="Close alert"
        >
          <X size={16} weight="bold" />
        </button>
      )}
    </div>
  );
}

export { Alert, alertVariants };
export type { AlertProps };
