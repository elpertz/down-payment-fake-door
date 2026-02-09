"use client";

import * as React from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import { X } from "phosphor-react";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

type TooltipContentProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Popup> & {
  sideOffset?: number;
  title?: string;
  description?: string;
  showClose?: boolean;
  onClose?: () => void;
};

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  (
    {
      className,
      sideOffset = 8,
      title,
      description,
      showClose = false,
      onClose,
      children,
      ...props
    },
    ref
  ) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner sideOffset={sideOffset}>
        <TooltipPrimitive.Popup
          ref={ref}
          className={cn(
            "relative z-50 max-w-[320px] overflow-hidden rounded-xl bg-neutral-800 p-3 text-neutral-50 shadow-[0_8px_12px_-4px_rgba(0,0,0,0.1)]",
            "data-[ending-style]:animate-out data-[starting-style]:animate-in",
            "data-[side=top]:after:absolute data-[side=top]:after:-bottom-1 data-[side=top]:after:left-1/2 data-[side=top]:after:size-2 data-[side=top]:after:-translate-x-1/2 data-[side=top]:after:rotate-45 data-[side=top]:after:bg-neutral-800",
            className
          )}
          {...props}
        >
          {title || description ? (
            <div className="flex items-start gap-3">
              <div className="min-w-0 flex-1 space-y-1">
                {title ? <p className="text-title-body text-neutral-50">{title}</p> : null}
                {description ? <p className="text-body text-neutral-100">{description}</p> : null}
                {children}
              </div>
              {showClose ? (
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex size-6 items-center justify-center rounded-md text-neutral-100 transition-colors hover:bg-neutral-700"
                  aria-label="Close tooltip"
                >
                  <X size={14} weight="bold" />
                </button>
              ) : null}
            </div>
          ) : (
            children
          )}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
);
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
export type { TooltipContentProps };
