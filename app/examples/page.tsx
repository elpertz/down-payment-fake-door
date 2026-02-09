"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Broadcast, Heart, Info, Plus, Star } from "phosphor-react";

import { Alert } from "@/components/ui/alert";
import { Avatar } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavButton } from "@/components/ui/nav-button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { Tag } from "@/components/ui/tag";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="space-y-4">
      <h2 className="text-title-section text-neutral-950">{title}</h2>
      <Separator />
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export default function ShowcasePage() {
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("option-1");
  const [switchChecked, setSwitchChecked] = React.useState(false);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-4xl space-y-16 px-6">
        <header className="space-y-3">
          <Link href="/" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Back Home
          </Link>
          <h1 className="text-display-lg text-neutral-950">UI Component Examples</h1>
          <p className="text-body-large text-neutral-600">
            Figma-aligned examples for core components and interaction states.
          </p>
        </header>

        <Section id="buttons" title="Buttons">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="default">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="default" icon={ArrowRight} iconPosition="right">
                Icon Right
              </Button>
              <Button variant="secondary" icon={Heart}>Icon Left</Button>
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Medium</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <NavButton icon={Broadcast} variant="primary" size="md" label="Primary nav" />
              <NavButton icon={Broadcast} variant="secondary" size="md" label="Secondary nav" />
              <NavButton icon={Broadcast} variant="ghost" size="md" label="Ghost nav" />
              <NavButton icon={Broadcast} variant="primary" size="sm" label="Small nav" />
              <NavButton icon={Broadcast} variant="primary" loading label="Loading nav" />
            </div>
          </div>
        </Section>

        <Section title="Tags">
          <div className="flex flex-wrap gap-3">
            <Tag variant="brand" icon={Broadcast}>Label</Tag>
            <Tag variant="neutral">Label</Tag>
            <Tag variant="info">Label</Tag>
            <Tag variant="success">Label</Tag>
            <Tag variant="warning">Label</Tag>
            <Tag variant="danger">Label</Tag>
          </div>
        </Section>

        <Section id="cards" title="Cards">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Standard card with border.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body text-neutral-600">Card content goes here.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="secondary">Action</Button>
              </CardFooter>
            </Card>

            <Card variant="selected">
              <CardHeader>
                <CardTitle>Selected Card</CardTitle>
                <CardDescription>Brand-highlighted state.</CardDescription>
              </CardHeader>
              <CardContent>
                <Tag variant="brand">Selected</Tag>
              </CardContent>
            </Card>

            <Card variant="interactive">
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>Hover and press interactions.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body text-neutral-600">Try hovering this card.</p>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section id="form-controls" title="Form Controls">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <Input label="Label" placeholder="Placeholder" helperText="Helper text" leftIcon={<Broadcast size={20} />} />
              <Input label="Focus" placeholder="Focused" state="focus" />
              <Input label="Success" placeholder="Filled value" defaultValue="Success" state="success" helperText="Looks good" />
              <Input label="Warning" placeholder="Warning" state="warning" helperText="Please double-check" />
              <Input label="Error" placeholder="Error" error helperText="This field is required" rightIcon={<Info size={20} />} />
              <Input label="Disabled" placeholder="Disabled" disabled />
              <Input label="Read only" placeholder="Read only" value="Static value" readOnly />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="demo-textarea">Textarea</Label>
              <Textarea id="demo-textarea" placeholder="Write a longer message..." />

              <div className="flex flex-col gap-2 pt-4">
                <Label>Select</Label>
                <Select defaultValue="option-1">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option-1">Option 1</SelectItem>
                    <SelectItem value="option-2">Option 2</SelectItem>
                    <SelectItem value="option-3">Option 3</SelectItem>
                  </SelectContent>
                </Select>

                <Label className="pt-2">Select (Small)</Label>
                <Select defaultValue="option-2">
                  <SelectTrigger size="sm">
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option-1">Option 1</SelectItem>
                    <SelectItem value="option-2">Option 2</SelectItem>
                    <SelectItem value="option-3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Selection Controls">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <Label>Checkbox</Label>
              <div className="flex items-center gap-3">
                <Checkbox checked={checkboxChecked} onCheckedChange={(checked: boolean) => setCheckboxChecked(checked)} />
                <span className="text-body text-neutral-950">{checkboxChecked ? "Checked" : "Unchecked"}</span>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox indeterminate />
                <span className="text-body text-neutral-950">Indeterminate</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Radio</Label>
              <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-1" />
                  <span className="text-body text-neutral-950">Option 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-2" />
                  <span className="text-body text-neutral-950">Option 2</span>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Switch</Label>
              <div className="flex items-center gap-3">
                <Switch checked={switchChecked} onCheckedChange={(checked: boolean) => setSwitchChecked(checked)} />
                <span className="text-body text-neutral-950">{switchChecked ? "On" : "Off"}</span>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Feedback">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Spinner size="xs" />
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <div className="rounded-lg bg-neutral-900 p-3">
                <Spinner size="sm" onDark />
              </div>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="sm">Hover for Tooltip</Button>} />
                <TooltipContent title="Title" description="Description" showClose />
              </Tooltip>
            </TooltipProvider>

            <div className="space-y-3">
              <Alert variant="neutral" title="Neutral" description="Description" closable />
              <Alert variant="info" title="Info" description="Description" />
              <Alert variant="success" title="Success" description="Description" />
              <Alert variant="warning" title="Warning" description="Description" />
              <Alert variant="danger" title="Danger" description="Description" ctaLabel="CTA" />
            </div>
          </div>
        </Section>

        <Section title="Avatar">
          <div className="flex flex-wrap items-center gap-3">
            <Avatar type="initials" size="md" tone="primary" initials="AA" />
            <Avatar type="initials" size="sm" tone="success" initials="AA" />
            <Avatar type="initials" size="xs" tone="danger" initials="AA" />
            <Avatar type="icon" size="md" tone="warning" />
            <Avatar type="icon" size="sm" tone="info" />
            <Avatar type="icon" size="xs" tone="neutral" />
          </div>
        </Section>

        <Section title="Icons">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Star size={20} weight="fill" className="text-warning-500" />
              <span className="text-body text-neutral-600">Phosphor Star</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={20} weight="fill" className="text-danger-400" />
              <span className="text-body text-neutral-600">Phosphor Heart</span>
            </div>
            <div className="flex items-center gap-2">
              <Plus size={20} className="text-brand-700" />
              <span className="text-body text-neutral-600">Phosphor Plus</span>
            </div>
          </div>
        </Section>

        <footer className="pt-8 text-center">
          <p className="text-legal text-neutral-400">
            Addi UI Kit Design Template — Figma-aligned primitives and states.
          </p>
        </footer>
      </div>
    </div>
  );
}
