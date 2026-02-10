"use client";

import { cn } from "@/lib/utils";
import { formatCOP } from "@/lib/down-payment/format";

interface InstallmentRowProps {
  number: number;
  label: string;
  date: string;
  amount: number;
  highlight?: boolean;
}

export function InstallmentRow({
  number,
  label,
  date,
  amount,
  highlight = false,
}: InstallmentRowProps) {
  return (
    <div
      className={cn(
        "relative z-[1] flex items-center gap-3",
        highlight
          ? "rounded-xl border border-neutral-200 bg-neutral-50 p-3"
          : "px-3 py-2"
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-xl text-body font-semibold",
          highlight
            ? "border border-brand-200 bg-brand-100 text-brand-700"
            : "border border-neutral-200 bg-neutral-50 text-neutral-700"
        )}
      >
        {number}
      </div>
      <div className="flex-1">
        <p
          className={cn(
            "text-body",
            highlight ? "font-semibold text-[#18181f]" : "text-[#18181f]"
          )}
        >
          {label}
        </p>
        <p className="text-legal text-neutral-600">{date}</p>
      </div>
      <p
        className={cn(
          "font-semibold",
          highlight
            ? "text-lg text-[#18181f]"
            : "text-body text-[#18181f]"
        )}
      >
        {formatCOP(amount)}
      </p>
    </div>
  );
}
