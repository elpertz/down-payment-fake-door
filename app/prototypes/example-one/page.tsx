"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function ExampleOnePage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-4xl space-y-6 px-6">
        <Link href="/prototypes" className={buttonVariants({ variant: "ghost", size: "sm" })}>
          Back to Prototypes
        </Link>
        <h1 className="text-display-lg text-neutral-950">Example One</h1>
        <p className="text-body-large text-neutral-600">Your prototype will go here.</p>
      </div>
    </main>
  );
}
