"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { User } from "phosphor-react";

import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "inline-flex items-center justify-center overflow-hidden rounded-2xl border font-semibold",
  {
    variants: {
      size: {
        xs: "h-8 w-8 text-body",
        sm: "h-10 w-10 text-title-body",
        md: "h-12 w-12 text-title-subsection",
      },
      tone: {
        primary: "border-brand-200 bg-brand-100 text-brand-700",
        info: "border-info-200 bg-info-100 text-info-700",
        success: "border-success-200 bg-success-100 text-success-700",
        warning: "border-warning-200 bg-warning-100 text-warning-700",
        danger: "border-danger-200 bg-danger-100 text-danger-700",
        neutral: "border-neutral-200 bg-neutral-100 text-neutral-700",
      },
    },
    defaultVariants: {
      size: "md",
      tone: "primary",
    },
  }
);

interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children">,
    VariantProps<typeof avatarVariants> {
  type?: "icon" | "initials" | "image";
  initials?: string;
  src?: string;
  alt?: string;
  icon?: React.ReactNode;
}

function Avatar({
  className,
  size,
  tone,
  type = "initials",
  initials = "AA",
  src,
  alt = "Avatar",
  icon,
  ...props
}: AvatarProps) {
  const pixelSize = size === "xs" ? 32 : size === "sm" ? 40 : 48;

  return (
    <span className={cn(avatarVariants({ size, tone }), className)} {...props}>
      {type === "image" && src ? (
        <Image src={src} alt={alt} width={pixelSize} height={pixelSize} className="size-full object-cover" />
      ) : type === "icon" ? (
        icon ?? <User size={size === "xs" ? 16 : size === "sm" ? 20 : 24} weight="regular" />
      ) : (
        <span>{initials}</span>
      )}
    </span>
  );
}

export { Avatar, avatarVariants };
export type { AvatarProps };
