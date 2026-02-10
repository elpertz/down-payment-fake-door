"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { LoaderScreen } from "@/components/down-payment/loader-screen";
import { ApprovalFixed } from "@/components/down-payment/approval-fixed";
import { PaymentMethodScreen } from "@/components/down-payment/payment-method-screen";
import { RevealScreen } from "@/components/down-payment/reveal-screen";
import { LoanSelector } from "@/components/down-payment/loan-selector";
import {
  WITH_DOWN_PAYMENT_DATA,
  REVEAL_COPY_VARIANTS,
  FINANCED_AMOUNT,
} from "@/lib/down-payment/constants";

export default function Option1Page() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const planData = WITH_DOWN_PAYMENT_DATA[4]; // fixed 4 installments
  const revealCopy = REVEAL_COPY_VARIANTS.find((v) => v.id === 5)!; // "Ya no pagas hoy"

  const handleLoaderComplete = useCallback(() => setStep(1), []);

  switch (step) {
    case 0:
      return <LoaderScreen onComplete={handleLoaderComplete} />;
    case 1:
      return <ApprovalFixed onContinue={() => setStep(2)} />;
    case 2:
      return (
        <PaymentMethodScreen
          remainingCuotas={3}
          monthlyPayment={Math.round(FINANCED_AMOUNT / 3)}
          interestFga={planData.interestFga}
          onContinue={() => setStep(3)}
          onBack={() => setStep(1)}
          heading="¿Cómo quieres pagar hoy?"
        />
      );
    case 3:
      return (
        <RevealScreen copyVariant={revealCopy} onContinue={() => setStep(4)} />
      );
    case 4:
      return <LoanSelector onConfirm={() => router.push("/")} />;
    default:
      return null;
  }
}
