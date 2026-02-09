"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-4xl space-y-8 px-6">
        <header className="space-y-3">
          <Link href="/" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Back Home
          </Link>
          <h1 className="text-display-lg text-neutral-950">Project Documentation</h1>
          <p className="text-body-large text-neutral-600">
            Quick guide for how to use this template and the best practices to keep prototypes clean.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>How To Use This Template</CardTitle>
            <CardDescription>Simple flow for starting and iterating quickly.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-body text-neutral-700">
            <p>1. Start in <code>/prototypes</code> to build your first screen.</p>
            <p>2. Use <code>/examples</code> to copy component patterns and states.</p>
            <p>3. Reuse existing UI components from <code>/components/ui</code> before creating new ones.</p>
            <p>4. Run <code>pnpm lint</code> and <code>pnpm build</code> before sharing.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>Keep the template consistent and easy for others to pick up.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-body text-neutral-700">
            <p>1. Keep one prototype flow per section or page.</p>
            <p>2. Prefer neutral visual defaults and semantic states for feedback.</p>
            <p>3. Validate mobile and desktop behavior for each prototype.</p>
            <p>4. Keep motion subtle and use it mainly for buttons/meaningful feedback.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
