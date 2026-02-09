"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrototypesPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-12">
      <div className="mx-auto max-w-4xl space-y-8 px-6">
        <header className="space-y-3">
          <Link href="/" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Back Home
          </Link>
          <h1 className="text-display-lg text-neutral-950">Prototypes</h1>
          <p className="text-body-large text-neutral-600">
            Create multiple prototype pages under this folder.
          </p>
        </header>

        <Card variant="default">
          <CardHeader>
            <CardTitle>Example One</CardTitle>
            <CardDescription>
              First prototype page.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/prototypes/example-one" className={buttonVariants({ variant: "default" })}>
              Open Example One
            </Link>
          </CardContent>
        </Card>

        <Card variant="default">
          <CardHeader>
            <CardTitle>Example Two</CardTitle>
            <CardDescription>
              Second prototype page.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/prototypes/example-two" className={buttonVariants({ variant: "default" })}>
              Open Example Two
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
