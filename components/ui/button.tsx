"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import type { IconProps } from "phosphor-react";

import { cn } from "@/lib/utils";
import { springConfig } from "@/lib/motion/transitions";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 relative z-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-700 text-white hover:bg-brand-800 active:bg-brand-800 disabled:bg-neutral-200 disabled:text-neutral-400/60",
        destructive:
          "bg-danger-700 border-[1.5px] border-white text-white hover:bg-danger-700/90 active:bg-danger-700/80 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:border-white",
        secondary:
          "bg-brand-100 text-brand-700 hover:bg-brand-200 active:bg-brand-200 disabled:bg-neutral-200 disabled:text-neutral-400",
        ghost:
          "bg-transparent text-brand-700 hover:bg-neutral-50 active:bg-neutral-200 disabled:text-neutral-400",
        tertiary:
          "bg-neutral-200 text-neutral-950 hover:bg-neutral-300 active:bg-neutral-300 disabled:bg-neutral-200 disabled:text-neutral-400",
        outline:
          "border-2 border-neutral-200 bg-white text-neutral-950 hover:bg-neutral-50 hover:border-neutral-300 active:bg-neutral-200 disabled:border-neutral-200 disabled:text-neutral-400",
        link: "text-brand-700 underline-offset-4 hover:underline disabled:text-neutral-400",
      },
      size: {
        default: "h-12 px-6 py-3 rounded-xl text-interactive",
        sm: "h-8 px-4 py-2 rounded-lg text-interactive",
        lg: "h-14 px-8 py-4 rounded-xl text-interactive-lg",
        compact: "h-10 px-4 py-2 rounded-lg text-interactive",
        icon: "h-10 w-10 p-0 rounded-lg",
        "icon-sm": "h-8 w-8 p-0 rounded-lg",
        "icon-lg": "h-12 w-12 p-0 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentType<IconProps>;
  iconPosition?: "left" | "right";
  iconSize?: number;
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
      ...props
    },
    ref
  ) => {
    const isIconOnly =
      (size === "icon" || size === "icon-sm" || size === "icon-lg") &&
      !children;

    const buttonContent =
      isIconOnly && Icon ? (
        <Icon size={iconSize} weight="regular" className="shrink-0" />
      ) : (
        <span className="relative z-10 inline-flex items-center justify-center gap-2 whitespace-nowrap">
          {Icon && iconPosition === "left" && (
            <Icon size={iconSize} weight="regular" className="shrink-0" />
          )}
          <span>{children}</span>
          {Icon && iconPosition === "right" && (
            <Icon size={iconSize} weight="regular" className="shrink-0" />
          )}
        </span>
      );

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={springConfig}
        {...(props as any)}
        style={{
          willChange: "transform",
          ...props.style,
        }}
      >
        {buttonContent}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
