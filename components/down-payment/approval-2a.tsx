"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { CalendarBlank, CaretUp, CaretDown, Check, Info } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/motion/variants";
import {
  PURCHASE_AMOUNT,
  DOWN_PAYMENT,
  CUOTAS_OPTIONS,
  WITH_DOWN_PAYMENT_DATA,
} from "@/lib/down-payment/constants";
import { formatCOP } from "@/lib/down-payment/format";
import type { CuotasOption } from "@/lib/down-payment/types";
import { ScreenShell } from "./screen-shell";
import { cn } from "@/lib/utils";

interface Approval2AProps {
  onContinue: (selectedCuotas: CuotasOption) => void;
}

export function Approval2A({ onContinue }: Approval2AProps) {
  const [selectedCuotas, setSelectedCuotas] = useState<CuotasOption | null>(
    null
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const planData = selectedCuotas
    ? WITH_DOWN_PAYMENT_DATA[selectedCuotas]
    : null;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isDropdownOpen]);

  return (
    <ScreenShell>
      <motion.div
        className="flex flex-1 flex-col pt-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Header section */}
        <motion.div variants={staggerItem} className="flex flex-col gap-4">
          <h1 className="text-title-screen text-neutral-950">
            Te aprobamos tu compra de {formatCOP(PURCHASE_AMOUNT)}
          </h1>

          {/* Pago inicial hoy card */}
          <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-100">
              <CalendarBlank
                size={20}
                weight="regular"
                className="text-brand-700"
              />
            </div>
            <div className="flex flex-1 items-center justify-between text-[#18181f]">
              <div className="flex flex-col">
                <span className="text-body font-semibold">
                  Pago inicial hoy
                </span>
                <span className="text-legal">24 de febrero 2026</span>
              </div>
              <span className="text-lg font-semibold">
                {formatCOP(DOWN_PAYMENT)}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Cuotas section */}
        <motion.div variants={staggerItem} className="mt-6 flex flex-col gap-4">
          <h2 className="text-title-section font-semibold text-neutral-950">
            Lo que falta, págalo en cuotas
          </h2>

          {/* Dropdown cuota selector */}
          <div className="relative" ref={dropdownRef}>
            {/* Selector container */}
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 pb-1">
              {/* Trigger */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex h-12 w-full items-center gap-2 rounded-xl border border-neutral-300 bg-white px-3"
              >
                <span
                  className={cn(
                    "flex-1 text-left text-body",
                    selectedCuotas
                      ? "text-neutral-950"
                      : "text-neutral-500"
                  )}
                >
                  {selectedCuotas ? (
                    <>
                      {selectedCuotas} cuotas de{" "}
                      <strong className="font-bold">
                        {formatCOP(planData!.monthly)}
                      </strong>
                    </>
                  ) : (
                    "Elige el número de cuotas"
                  )}
                </span>
                <div className="flex shrink-0 flex-col items-center">
                  <CaretUp size={12} weight="bold" className="text-neutral-500" />
                  <CaretDown size={12} weight="bold" className="text-neutral-500" />
                </div>
              </button>

              {/* Interest row */}
              <div className="flex items-center justify-between px-3 py-1">
                <div className="flex items-center">
                  <span className="text-body text-neutral-400">
                    Interés y fianza por cuota:
                  </span>
                  <Info
                    size={20}
                    weight="regular"
                    className="text-neutral-400"
                  />
                </div>
                <span className="text-body text-neutral-400">
                  {planData ? formatCOP(planData.interestFga) : "-"}
                </span>
              </div>
            </div>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-10 overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-[0px_8px_12px_-4px_rgba(0,0,0,0.1)]">
                {CUOTAS_OPTIONS.map((opt, i) => {
                  const optData = WITH_DOWN_PAYMENT_DATA[opt];
                  const isSelected = selectedCuotas === opt;
                  return (
                    <div key={opt}>
                      <button
                        onClick={() => {
                          setSelectedCuotas(opt);
                          setIsDropdownOpen(false);
                        }}
                        className={cn(
                          "flex w-full items-center py-2 pl-3 pr-2",
                          isSelected ? "bg-neutral-50" : "hover:bg-neutral-50"
                        )}
                      >
                        <span className="flex-1 text-left text-body text-neutral-950">
                          {opt} cuotas de{" "}
                          <strong className="font-bold">
                            {formatCOP(optData.monthly)}
                          </strong>
                        </span>
                        {isSelected && (
                          <Check
                            size={24}
                            weight="regular"
                            className="shrink-0 text-neutral-950"
                          />
                        )}
                      </button>
                      {i < CUOTAS_OPTIONS.length - 1 && (
                        <div className="h-px bg-neutral-200" />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="mt-auto flex flex-col items-center gap-3">
          {!selectedCuotas && (
            <p className="text-sm text-neutral-600">
              Elige cuotas para continuar
            </p>
          )}
          <Button
            onClick={() => selectedCuotas && onContinue(selectedCuotas)}
            className="w-full"
            disabled={!selectedCuotas}
          >
            Seleccionar metodo de pago
          </Button>
        </div>
      </motion.div>
    </ScreenShell>
  );
}
