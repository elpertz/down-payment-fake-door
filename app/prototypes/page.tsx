"use client";

import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tag } from "@/components/ui/tag";
import { Textarea } from "@/components/ui/textarea";

const starterIdeas = [
  "Landing Page for a New Feature",
  "Pricing Section + Call to Action",
  "Form Flow (Lead, Waitlist, Signup)",
  "Dashboard Empty State",
];

export default function PrototypesPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-12">
      <div className="mx-auto max-w-4xl space-y-8 px-6">
        <header className="space-y-3">
          <Link href="/" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Back Home
          </Link>
          <h1 className="text-display-lg text-neutral-950">Prototype Starters</h1>
          <p className="text-body-large text-neutral-600">
            Use this page as your scratchpad. Copy sections, swap content, and iterate quickly.
          </p>
        </header>

        <section id="starter-ideas" className="rounded-xl border border-neutral-200 bg-white p-6">
          <h2 className="text-title-section text-neutral-950">Starter Ideas</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {starterIdeas.map((idea) => (
              <Tag key={idea} variant="neutral">
                {idea}
              </Tag>
            ))}
          </div>
        </section>

        <Card id="quick-lead-form" variant="default">
          <CardHeader>
            <CardTitle>Example: Quick Lead Form</CardTitle>
            <CardDescription>
              Replace labels and copy. Keep structure, spacing, and component primitives.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="prototype-name">Name</Label>
              <Input id="prototype-name" placeholder="Type full name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="prototype-problem">What problem are you solving?</Label>
              <Textarea id="prototype-problem" placeholder="Describe in one paragraph" />
            </div>
            <div className="flex gap-2">
              <Button>Submit</Button>
              <Button variant="secondary">Save Draft</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
