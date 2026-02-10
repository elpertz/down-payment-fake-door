"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/motion/variants";
import {
  PURCHASE_AMOUNT,
  CUOTAS_OPTIONS,
  POST_REVEAL_DATA,
} from "@/lib/down-payment/constants";
import { formatCOP } from "@/lib/down-payment/format";
import type { CuotasOption } from "@/lib/down-payment/types";
import { ScreenShell } from "./screen-shell";
import { cn } from "@/lib/utils";

interface LoanSelectorProps {
  onConfirm: (cuotas: CuotasOption) => void;
}

export function LoanSelector({ onConfirm }: LoanSelectorProps) {
  const [selected, setSelected] = useState<CuotasOption | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    if (!selected) return;
    setConfirmed(true);
    setTimeout(() => onConfirm(selected), 1500);
  };

  if (confirmed) {
    return (
      <ScreenShell>
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <CheckCircle
              size={64}
              weight="fill"
              className="text-success-600"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-title-section text-neutral-950"
          >
            Compra confirmada
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-body text-neutral-600"
          >
            Redirigiendo...
          </motion.p>
        </div>
      </ScreenShell>
    );
  }

  return (
    <ScreenShell>
      <motion.div
        className="flex flex-1 flex-col"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Purchase summary header */}
        <motion.div variants={staggerItem} className="px-2 pb-[14px] pt-3">
          <p className="text-body font-semibold text-neutral-600">Tu compra</p>
          <p className="text-display-lg text-neutral-950">
            {formatCOP(PURCHASE_AMOUNT)}
          </p>
        </motion.div>

        {/* Loan options */}
        <motion.div variants={staggerItem}>
          <div className="rounded-lg border border-[#ebeced] bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-title-section font-semibold text-neutral-950">
                  Crédito Grande
                </p>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <p className="text-body text-neutral-600">
                Cuotas mensuales más cómodas
              </p>

              {CUOTAS_OPTIONS.map((cuotas) => {
                const data = POST_REVEAL_DATA[cuotas];
                const isSelected = selected === cuotas;
                return (
                  <button
                    key={cuotas}
                    onClick={() => setSelected(cuotas)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg border border-[#ebeced] bg-white p-4",
                      isSelected && "border-brand-700 bg-brand-50"
                    )}
                  >
                    <div
                      className={cn(
                        "flex size-5 shrink-0 items-center justify-center rounded-full border",
                        isSelected
                          ? "border-brand-700"
                          : "border-neutral-400 bg-white"
                      )}
                    >
                      {isSelected && (
                        <span className="size-2.5 rounded-full bg-brand-700" />
                      )}
                    </div>
                    <span className="flex-1 text-left text-body text-[#1c1c1c]">
                      {cuotas} cuotas
                    </span>
                    <span className="text-body font-semibold text-[#1c1c1c]">
                      {formatCOP(data.monthly)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="mt-auto flex flex-col gap-2 border-t border-neutral-200 pt-4">
          <p className="text-legal text-neutral-500">
            Los descuentos y ofertas otorgados están sujetos a{" "}
            <span className="text-brand-700 underline">
              Términos y Condiciones
            </span>
            .
          </p>
          <Button
            onClick={handleConfirm}
            className="w-full"
            disabled={!selected}
          >
            Siguiente
          </Button>
        </div>
      </motion.div>
    </ScreenShell>
  );
}
