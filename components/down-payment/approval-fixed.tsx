"use client";

import { motion } from "motion/react";
import { Info } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { staggerContainer, staggerItem } from "@/lib/motion/variants";
import {
  PURCHASE_AMOUNT,
  DOWN_PAYMENT,
  WITH_DOWN_PAYMENT_DATA,
  START_DATE,
} from "@/lib/down-payment/constants";
import { formatCOP } from "@/lib/down-payment/format";
import { buildFixedInstallments } from "@/lib/down-payment/loan-calculator";
import { ScreenShell } from "./screen-shell";
import { InstallmentRow } from "./installment-row";

interface ApprovalFixedProps {
  onContinue: () => void;
}

export function ApprovalFixed({ onContinue }: ApprovalFixedProps) {
  const planData = WITH_DOWN_PAYMENT_DATA[4];
  const installments = buildFixedInstallments(
    DOWN_PAYMENT,
    planData.monthly,
    START_DATE
  );

  return (
    <ScreenShell>
      <motion.div
        className="flex flex-1 flex-col pt-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={staggerItem} className="mb-6 space-y-4">
          <p className="text-title-screen text-neutral-950 whitespace-pre-line text-balance">
            {"Te aprobamos tu compra\n"}
            {formatCOP(PURCHASE_AMOUNT)}
          </p>
          <p className="text-body text-[#18181f]">
            Paga en 4 cuotas tu compra
          </p>
        </motion.div>

        <motion.div variants={staggerItem}>
          <div className="relative flex flex-col">
            {/* Vertical dashed line connecting avatars */}
            <div className="absolute left-[27px] top-[56px] z-0 h-[140px] w-0 border-l border-dashed border-neutral-200" />

            {installments.map((row, i) => (
              <InstallmentRow
                key={row.number}
                number={row.number}
                label={row.label}
                date={row.date}
                amount={row.amount}
                highlight={i === 0}
              />
            ))}
          </div>

          <div className="mt-[18px] flex flex-col gap-[21px]">
            <Separator />
            <div className="flex items-start justify-between px-3">
              <div className="flex items-center gap-0.5 text-body text-[#18181f]">
                <span>Interés y fianza por cuota:</span>
                <Info size={20} weight="regular" className="text-neutral-400" />
              </div>
              <span className="text-body font-semibold text-[#18181f]">
                {formatCOP(planData.interestFga)}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-auto pt-8">
          <Button onClick={onContinue} className="w-full">
            Seleccionar metodo de pago
          </Button>
        </div>
      </motion.div>
    </ScreenShell>
  );
}
