"use client";

import Link from "next/link";
import { ArrowUpRight } from "phosphor-react";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";

const prototypeCards = [
  {
    title: "Fixed Down Payment",
    description:
      "A clear, fixed installment plan for the down payment: 1 payment today + 3 monthly installments.",
    href: "/prototypes/cuota-inicial-opcion-1",
    cta: "View Fixed Offering",
  },
  {
    title: "Flexible Down Payment",
    description:
      "Choose your own installment plan for the down payment with a flexible number of cuotas.",
    href: "/prototypes/cuota-inicial-opcion-2a",
    cta: "View Flexible Offering",
  },
];

const projectLinks = [
  { label: "Home", href: "/" },
  { label: "Component Examples", href: "/examples" },
  { label: "Example One", href: "/prototypes/example-one" },
  { label: "Project Guide", href: "/docs" },
];

export default function HomePage() {
  return (
    <main className="min-h-[80dvh] bg-white py-12">
      <div className="mx-auto flex min-h-[80dvh] max-w-4xl flex-col justify-between px-6">
        <div className="space-y-10">
        <header className="space-y-3">
          <Logo type="primary" size="lg" />
          <h1 className="text-display-lg text-neutral-950">Down Payment Fake-Door Demo</h1>
          <p className="max-w-2xl text-body-large text-neutral-600">
            Explore two down payment proposals: a fixed offering for clarity and a flexible offering for choice.
          </p>
        </header>

        <section>
          <h2 className="mb-4 text-title-section text-neutral-950">Proposals</h2>
          <div className="grid grid-cols-1 gap-4">
            {prototypeCards.map((prototype) => (
              <Card key={prototype.href} variant="default">
                <CardHeader>
                  <CardTitle>{prototype.title}</CardTitle>
                  <CardDescription>{prototype.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={prototype.href}
                    className={buttonVariants({ variant: "default", size: "default" })}
                  >
                    {prototype.cta}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        </div>

        <footer className="mt-10 border-t border-neutral-200 py-6">
          <div className="flex flex-wrap items-center gap-4">
            {projectLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 text-body text-brand-700 hover:text-brand-800"
              >
                {link.label}
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
