"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Spinner } from "@/components/ui/spinner";
import { LOADER_MESSAGES } from "@/lib/down-payment/constants";
import { ScreenShell } from "./screen-shell";

interface LoaderScreenProps {
  onComplete: () => void;
}

export function LoaderScreen({ onComplete }: LoaderScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev >= LOADER_MESSAGES.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <ScreenShell>
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <Spinner size="lg" />
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-body-large text-neutral-600"
          >
            {LOADER_MESSAGES[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </ScreenShell>
  );
}
