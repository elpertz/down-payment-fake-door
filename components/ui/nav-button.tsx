"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import type { IconProps } from "phosphor-react";

import { cn } from "@/lib/utils";
import { MOTION_ENABLED, motionProps } from "@/lib/motion/config";
import { Spinner } from "@/components/ui/spinner";

const navButtonVariants = cva(
  "inline-flex items-center justify-center rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-brand-700 text-white hover:bg-brand-800 active:bg-brand-950 data-[loading=true]:bg-brand-950 disabled:bg-neutral-100 disabled:text-neutral-300",
        secondary: "bg-brand-50 text-brand-700 hover:bg-brand-100 active:bg-brand-200 data-[loading=true]:bg-brand-200 disabled:bg-neutral-100 disabled:text-neutral-300",
        ghost: "bg-transparent text-brand-700 hover:bg-neutral-50 active:bg-neutral-200 data-[loading=true]:bg-transparent disabled:text-neutral-400",
      },
      size: {
        md: "h-12 w-12 p-3",
        sm: "h-10 w-10 p-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface NavButtonProps
  extends Omit<React.ComponentPropsWithoutRef<typeof motion.button>, "children">,
    VariantProps<typeof navButtonVariants> {
  icon: React.ComponentType<IconProps>;
  iconSize?: number;
  loading?: boolean;
  label?: string;
}

const NavButton = React.forwardRef<HTMLButtonElement, NavButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon: Icon,
      iconSize,
      loading = false,
      disabled,
      label,
      ...props
    },
    ref
  ) => {
    const resolvedVariant = variant ?? "primary";
    const resolvedSize = iconSize ?? (size === "sm" ? 20 : 24);
    const onDark = resolvedVariant === "primary";
    const interactiveMotion = motionProps({
      whileHover: { scale: 1.01 },
      whileTap: { scale: 0.98 },
      transition: { duration: 0.15, ease: [0, 0, 0.2, 1] as const },
    });

    return (
      <motion.button
        ref={ref}
        type="button"
        className={cn(navButtonVariants({ variant, size, className }), loading && "pointer-events-none")}
        disabled={disabled}
        aria-busy={loading || undefined}
        data-loading={loading ? "true" : "false"}
        aria-label={label ?? "Navigation action"}
        {...interactiveMotion}
        {...props}
        style={{
          willChange: MOTION_ENABLED ? "transform" : undefined,
          ...props.style,
        }}
      >
        {loading ? (
          <Spinner size={size === "sm" ? "xs" : "sm"} onDark={onDark} />
        ) : (
          <Icon size={resolvedSize} weight="regular" />
        )}
      </motion.button>
    );
  }
);
NavButton.displayName = "NavButton";

export { NavButton, navButtonVariants };
