"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import type { IconProps } from "phosphor-react";

import { cn } from "@/lib/utils";
import { MOTION_ENABLED, motionProps } from "@/lib/motion/config";
import { Spinner } from "@/components/ui/spinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-neutral-300 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-700 text-white hover:bg-brand-800 active:bg-brand-950 data-[loading=true]:bg-brand-950 disabled:bg-neutral-100",
        secondary:
          "bg-brand-50 text-brand-700 hover:bg-brand-100 active:bg-brand-200 data-[loading=true]:bg-brand-200 disabled:bg-neutral-100",
        ghost:
          "bg-transparent text-brand-700 hover:bg-neutral-50 active:bg-neutral-200 data-[loading=true]:bg-transparent disabled:bg-transparent",
        destructive:
          "bg-danger-700 text-white hover:bg-danger-800 active:bg-danger-900 data-[loading=true]:bg-danger-900 disabled:bg-neutral-100",
        tertiary:
          "bg-neutral-200 text-neutral-950 hover:bg-neutral-300 active:bg-neutral-300 disabled:bg-neutral-100",
        outline:
          "border border-neutral-200 bg-white text-neutral-950 hover:bg-neutral-50 active:bg-neutral-200 disabled:border-neutral-200 disabled:bg-neutral-100",
        link: "bg-transparent text-brand-700 underline-offset-4 hover:underline disabled:text-neutral-400",
      },
      size: {
        default: "h-12 min-h-12 rounded-xl px-6 py-2 text-interactive-lg",
        sm: "h-8 min-h-8 rounded-xl px-4 py-1.5 text-interactive",
        lg: "h-14 min-h-14 rounded-xl px-8 py-3 text-interactive-lg",
        compact: "h-10 min-h-10 rounded-xl px-4 py-2 text-interactive",
        icon: "h-12 w-12 rounded-xl p-0",
        "icon-sm": "h-10 w-10 rounded-xl p-0",
        "icon-lg": "h-14 w-14 rounded-xl p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<typeof motion.button>, "children">,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  icon?: React.ComponentType<IconProps>;
  iconPosition?: "left" | "right";
  iconSize?: number;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon: Icon,
      iconPosition = "left",
      iconSize = 20,
      children,
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const resolvedVariant = variant ?? "default";
    const isIconOnly =
      (size === "icon" || size === "icon-sm" || size === "icon-lg") &&
      !children;

    const interactiveMotion = motionProps({
      whileHover: { scale: 1.01 },
      whileTap: { scale: 0.98 },
      transition: { duration: 0.15, ease: [0, 0, 0.2, 1] as const },
    });

    const resolvedDisabled = Boolean(disabled);

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }), loading && "pointer-events-none")}
        ref={ref}
        {...interactiveMotion}
        {...props}
        disabled={resolvedDisabled}
        aria-busy={loading || undefined}
        style={{
          willChange: MOTION_ENABLED ? "transform" : undefined,
          ...props.style,
        }}
        data-loading={loading ? "true" : "false"}
      >
        {loading ? (
          <Spinner
            size={size === "sm" ? "xs" : "sm"}
            onDark={resolvedVariant === "default" || resolvedVariant === "destructive"}
          />
        ) : (
          <>
            {Icon && iconPosition === "left" && (
              <Icon size={iconSize} weight="regular" className="shrink-0" />
            )}
            {!isIconOnly && <span>{children}</span>}
            {isIconOnly && Icon && (
              <Icon size={iconSize} weight="regular" className="shrink-0" />
            )}
            {Icon && iconPosition === "right" && !isIconOnly && (
              <Icon size={iconSize} weight="regular" className="shrink-0" />
            )}
          </>
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
