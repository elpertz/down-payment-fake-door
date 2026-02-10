"use client";

import { motion } from "motion/react";
import { Tag } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/motion/variants";
import type { RevealCopyVariant } from "@/lib/down-payment/types";
import { ScreenShell } from "./screen-shell";

interface RevealScreenProps {
  copyVariant: RevealCopyVariant;
  onContinue: () => void;
}

function renderBoldText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-[#18181f]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function RevealScreen({ copyVariant, onContinue }: RevealScreenProps) {
  return (
    <ScreenShell>
      <motion.div
        className="flex flex-1 flex-col pt-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={staggerItem}
          className="mb-6 flex size-12 items-center justify-center rounded-2xl border border-brand-200 bg-brand-100"
        >
          <Tag size={24} weight="regular" className="text-brand-700" />
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="mb-6 text-title-screen text-neutral-950 text-balance"
        >
          {copyVariant.title}
        </motion.h1>

        <motion.div variants={staggerItem} className="flex flex-col gap-4">
          {copyVariant.showZeroCard && (
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3">
              <div className="flex items-center justify-between">
                <span className="text-body font-semibold text-[#18181f]">
                  Pago inicial:
                </span>
                <span className="text-lg font-semibold text-[#18181f]">
                  $ 0
                </span>
              </div>
            </div>
          )}

          <p className="text-body text-[#18181f] text-balance">
            {renderBoldText(copyVariant.description)}
          </p>
        </motion.div>

        <div className="mt-auto pt-8">
          <Button onClick={onContinue} className="w-full">
            {copyVariant.cta}
          </Button>
        </div>
      </motion.div>
    </ScreenShell>
  );
}
