"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { LoaderScreen } from "@/components/down-payment/loader-screen";
import { Approval2A } from "@/components/down-payment/approval-2a";
import { PaymentMethodScreen } from "@/components/down-payment/payment-method-screen";
import { RevealScreen } from "@/components/down-payment/reveal-screen";
import { LoanSelector } from "@/components/down-payment/loan-selector";
import {
  WITH_DOWN_PAYMENT_DATA,
  REVEAL_COPY_VARIANTS,
} from "@/lib/down-payment/constants";
import type { CuotasOption } from "@/lib/down-payment/types";

export default function Option2APage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selectedPreRevealCuotas, setSelectedPreRevealCuotas] =
    useState<CuotasOption | null>(null);

  const revealCopy = REVEAL_COPY_VARIANTS.find((v) => v.id === 2)!;

  const planData = selectedPreRevealCuotas
    ? WITH_DOWN_PAYMENT_DATA[selectedPreRevealCuotas]
    : null;

  const handleLoaderComplete = useCallback(() => setStep(1), []);

  const handleApprovalContinue = (cuotas: CuotasOption) => {
    setSelectedPreRevealCuotas(cuotas);
    setStep(2);
  };

  switch (step) {
    case 0:
      return <LoaderScreen onComplete={handleLoaderComplete} />;
    case 1:
      return <Approval2A onContinue={handleApprovalContinue} />;
    case 2:
      return (
        <PaymentMethodScreen
          remainingCuotas={selectedPreRevealCuotas ?? 0}
          monthlyPayment={planData?.monthly ?? 0}
          interestFga={planData?.interestFga ?? 0}
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
