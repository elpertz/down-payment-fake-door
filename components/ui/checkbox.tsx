"use client";

import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

import { cn } from "@/lib/utils";

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  indeterminate?: boolean;
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, indeterminate = false, ...props }, ref) => {
    return (
      <CheckboxPrimitive.Root
        ref={ref}
        data-indeterminate={indeterminate ? "true" : "false"}
        aria-checked={indeterminate ? "mixed" : undefined}
        className={cn(
          "group peer relative flex size-6 shrink-0 items-center justify-center rounded border border-neutral-400 bg-white transition-colors",
          "hover:border-neutral-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus-ring focus-visible:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[checked]:border-brand-700 data-[checked]:bg-brand-700 data-[checked]:text-white",
          "group-data-[indeterminate=true]:border-brand-700 group-data-[indeterminate=true]:bg-brand-700 group-data-[indeterminate=true]:text-white",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="absolute inset-0 flex items-center justify-center text-current">
          <svg
            viewBox="0 0 16 16"
            className="hidden size-4 group-data-[checked]:block group-data-[indeterminate=true]:hidden"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8.5L6.5 12L13 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            viewBox="0 0 16 16"
            className="hidden size-4 group-data-[indeterminate=true]:block"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8H13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
export type { CheckboxProps };
