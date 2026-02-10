"use client";

import { cn } from "@/lib/utils";

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}

export function ProgressBar({ totalSteps, currentStep }: ProgressBarProps) {
  return (
    <div className="flex items-center justify-center gap-2 py-3" role="progressbar" aria-valuenow={currentStep} aria-valuemin={0} aria-valuemax={totalSteps}>
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            i === currentStep ? "w-6 bg-brand-700" : "w-2 bg-neutral-200",
            i < currentStep && "w-2 bg-brand-300"
          )}
        />
      ))}
    </div>
  );
}
