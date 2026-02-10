"use client";

import { CaretLeft, X } from "phosphor-react";
import { motion } from "motion/react";
import { fadeIn } from "@/lib/motion/variants";
import { Logo } from "@/components/ui";

interface ScreenShellProps {
  children: React.ReactNode;
  onBack?: () => void;
  onClose?: () => void;
  showBackButton?: boolean;
}

export function ScreenShell({
  children,
  onBack,
  onClose,
  showBackButton = false,
}: ScreenShellProps) {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-neutral-100 md:p-8">
      <motion.div
        className="relative flex h-dvh w-full flex-col bg-white md:h-[853px] md:w-[393px] md:rounded-2xl md:border md:border-neutral-200 md:shadow-xl"
        {...fadeIn}
      >
        {/* Nav bar */}
        <nav className="flex h-16 shrink-0 items-center justify-center px-6">
          {showBackButton ? (
            <button
              onClick={onBack}
              className="absolute left-6 flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700"
              aria-label="Volver"
            >
              <CaretLeft size={20} weight="regular" />
            </button>
          ) : null}
          <Logo type="primary" size="sm" />
          <button
            onClick={onClose ?? (() => window.history.back())}
            className="absolute right-6 flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700"
            aria-label="Cerrar"
          >
            <X size={20} weight="regular" />
          </button>
        </nav>

        {/* Content — scrollable */}
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pb-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
