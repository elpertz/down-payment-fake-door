"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  CreditCard,
  Calendar,
  Info,
} from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { staggerContainer, staggerItem } from "@/lib/motion/variants";
import {
  DOWN_PAYMENT,
  PAYMENT_DAY,
  PAYMENT_METHODS,
} from "@/lib/down-payment/constants";
import { formatCOP } from "@/lib/down-payment/format";
import type { PaymentMethodId } from "@/lib/down-payment/types";
import { ScreenShell } from "./screen-shell";
import { cn } from "@/lib/utils";

interface PaymentMethodScreenProps {
  remainingCuotas: number;
  monthlyPayment: number;
  interestFga: number;
  onContinue: (method: PaymentMethodId) => void;
  onBack: () => void;
  heading?: string;
}

const METHOD_IMAGES: Record<string, string> = {
  pse: "/pse.png",
  nequi: "/nequi.png",
};

export function PaymentMethodScreen({
  remainingCuotas,
  monthlyPayment,
  interestFga,
  onContinue,
  onBack,
  heading = "Selecciona tu método de pago",
}: PaymentMethodScreenProps) {
  const [selected, setSelected] = useState<PaymentMethodId | null>(null);

  return (
    <ScreenShell showBackButton onBack={onBack}>
      <motion.div
        className="flex flex-1 flex-col pt-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Summary card */}
        <motion.div variants={staggerItem}>
          <div className="rounded-2xl border border-neutral-300 bg-neutral-50 p-4">
            {/* Pago inicial hoy row */}
            <div className="flex items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-100">
                <Calendar size={20} weight="regular" className="text-brand-700" />
              </div>
              <div className="flex flex-1 items-center justify-between text-[#18181f]">
                <div className="flex flex-col">
                  <span className="text-body font-semibold">Pago inicial hoy</span>
                  <span className="text-legal">24 de febrero 2026</span>
                </div>
                <span className="text-lg font-semibold">
                  {formatCOP(DOWN_PAYMENT)}
                </span>
              </div>
            </div>

            <div className="my-4 border-t border-dashed border-neutral-300" />

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-body text-neutral-950">
                  <span className="font-bold">{remainingCuotas} Cuotas </span>
                  <span>restantes de:</span>
                </p>
                <span className="text-body font-semibold text-[#18181f]">
                  {formatCOP(monthlyPayment)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-body text-neutral-950">
                  <span>Interés y fianza por cuota:</span>
                  <Info size={20} weight="regular" className="text-neutral-400" />
                </div>
                <span className="text-body text-[#18181f]">
                  {formatCOP(interestFga)}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Payment method selection */}
        <motion.div variants={staggerItem} className="mt-6 flex flex-col gap-4">
          <h2 className="text-title-section font-semibold text-neutral-950">
            {heading}
          </h2>
          <div className="flex flex-col gap-px rounded-2xl border border-neutral-200 bg-white p-0.5">
            {PAYMENT_METHODS.map((method, i) => {
              const imageSrc = METHOD_IMAGES[method.icon];
              const isSelected = selected === method.id;
              return (
                <div key={method.id}>
                  <button
                    onClick={() => setSelected(method.id)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-xl py-2 pl-3 pr-2",
                      isSelected ? "bg-brand-50" : ""
                    )}
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
                      {imageSrc ? (
                        <img src={imageSrc} alt={method.label} className="size-full object-cover" />
                      ) : (
                        <CreditCard size={20} weight="regular" className="text-neutral-700" />
                      )}
                    </div>
                    <span className="flex-1 text-left text-body font-semibold text-neutral-950">
                      {method.label}
                    </span>
                    <div
                      className={cn(
                        "flex size-6 shrink-0 items-center justify-center rounded-full border",
                        isSelected
                          ? "border-brand-700"
                          : "border-neutral-400 bg-white"
                      )}
                    >
                      {isSelected && (
                        <span className="size-3 rounded-full bg-brand-700" />
                      )}
                    </div>
                  </button>
                  {i < PAYMENT_METHODS.length - 1 && <Separator />}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-auto flex flex-col gap-[19px]">
          <div className="flex items-center gap-[13px]">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-100">
              <Calendar size={20} weight="regular" className="text-brand-700" />
            </div>
            <div className="flex items-baseline gap-1 text-body text-neutral-950">
              <span>Fecha de pago:</span>
              <span className="font-semibold">{PAYMENT_DAY} de cada més</span>
            </div>
          </div>
          <Button
            onClick={() => selected && onContinue(selected)}
            className="w-full"
            disabled={!selected}
          >
            Continuar
          </Button>
        </div>
      </motion.div>
    </ScreenShell>
  );
}
