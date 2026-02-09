"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputContainerVariants = cva(
  "flex h-12 w-full items-center gap-2 overflow-hidden rounded-xl border px-4 py-2 transition-colors",
  {
    variants: {
      state: {
        active: "border-neutral-300 bg-white",
        hover: "border-neutral-400 bg-white",
        focus: "border-brand-700 bg-white ring-4 ring-focus-ring",
        typing: "border-brand-700 bg-white ring-4 ring-focus-ring",
        filled: "border-neutral-300 bg-white",
        success: "border-success-700 bg-success-50",
        warning: "border-warning-700 bg-warning-50",
        error: "border-danger-700 bg-danger-50",
        disabled: "border-neutral-200 bg-neutral-100",
        readOnly: "border-neutral-300 bg-neutral-100",
      },
    },
    defaultVariants: {
      state: "active",
    },
  }
);

const helperTextVariants = cva("text-legal", {
  variants: {
    state: {
      active: "text-neutral-600",
      hover: "text-neutral-600",
      focus: "text-neutral-600",
      typing: "text-neutral-600",
      filled: "text-neutral-600",
      success: "text-success-700",
      warning: "text-warning-700",
      error: "text-danger-700",
      disabled: "text-neutral-400",
      readOnly: "text-neutral-500",
    },
  },
  defaultVariants: {
    state: "active",
  },
});

type InputVisualState =
  | "active"
  | "hover"
  | "focus"
  | "typing"
  | "filled"
  | "success"
  | "warning"
  | "error"
  | "disabled"
  | "readOnly";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputContainerVariants> {
  error?: boolean;
  label?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      state,
      error,
      label,
      helperText,
      leftIcon,
      rightIcon,
      wrapperClassName,
      disabled,
      readOnly,
      value,
      ...props
    },
    ref
  ) => {
    const resolvedState: InputVisualState = error
      ? "error"
      : disabled
        ? "disabled"
        : readOnly
          ? "readOnly"
          : (state as InputVisualState | undefined) ?? (value ? "filled" : "active");
    const hasSemanticBorder =
      resolvedState === "success" || resolvedState === "warning" || resolvedState === "error";

    return (
      <div className={cn("flex w-full flex-col gap-2", wrapperClassName)}>
        {label && <label className="text-title-group text-neutral-900">{label}</label>}
        <div
          className={cn(
            inputContainerVariants({ state: resolvedState }),
            !disabled && !readOnly && "focus-within:ring-4 focus-within:ring-focus-ring",
            !disabled && !readOnly && !hasSemanticBorder && "focus-within:border-brand-700",
            readOnly && "cursor-not-allowed",
            className
          )}
        >
          {leftIcon ? <span className="text-neutral-500">{leftIcon}</span> : null}
          <input
            ref={ref}
            disabled={disabled}
            readOnly={readOnly}
            value={value}
            className={cn(
              "h-full w-full bg-transparent text-body text-neutral-950 placeholder:text-neutral-400 focus:outline-none",
              disabled && "cursor-not-allowed text-neutral-400",
              readOnly && "cursor-not-allowed"
            )}
            {...props}
          />
          {rightIcon ? <span className="text-neutral-500">{rightIcon}</span> : null}
        </div>
        {helperText ? (
          <p className={cn(helperTextVariants({ state: resolvedState }))}>{helperText}</p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
