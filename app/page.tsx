"use client";

import * as React from "react";
import { ArrowRight, Heart, Plus, Star } from "phosphor-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CheckIcon } from "@/components/ui/check-icon";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-title-section text-neutral-950">{title}</h2>
      <Separator />
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export default function ShowcasePage() {
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);
  const [switchChecked, setSwitchChecked] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("option-1");
  const [inputValue, setInputValue] = React.useState("");
  const [inputError, setInputError] = React.useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="mx-auto max-w-4xl space-y-16 px-6">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-display-lg text-neutral-950">
            Addi UI Kit Design Template
          </h1>
          <p className="text-body-large text-neutral-600">
            Component showcase with Addi design tokens, Base UI primitives, and
            motion animations.
          </p>
        </header>

        {/* Typography */}
        <Section title="Typography">
          <div className="space-y-3">
            <p className="text-display-lg text-neutral-950">Display Large (32px/700)</p>
            <p className="text-display text-neutral-950">Display (28px/700)</p>
            <p className="text-title-screen text-neutral-950">Title Screen (26px/600)</p>
            <p className="text-title-section text-neutral-950">Title Section (22px/600)</p>
            <p className="text-title-subsection text-neutral-950">Title Subsection (18px/600)</p>
            <p className="text-title-body text-neutral-950">Title Body (16px/600)</p>
            <p className="text-title-group text-neutral-950">Title Group (14px/500)</p>
            <p className="text-title-legal text-neutral-950">Title Legal (12px/500)</p>
            <p className="text-body-large text-neutral-950">Body Large (16px/400)</p>
            <p className="text-body text-neutral-950">Body (14px/400)</p>
            <p className="text-legal text-neutral-950">Legal (12px/400)</p>
            <p className="text-interactive text-neutral-950">Interactive (14px/600)</p>
            <p className="text-interactive-lg text-neutral-950">Interactive Large (16px/600)</p>
          </div>
        </Section>

        {/* Color Palette */}
        <Section title="Color Palette">
          {[
            { name: "Neutral", prefix: "neutral" },
            { name: "Brand", prefix: "brand" },
            { name: "Success", prefix: "success" },
            { name: "Danger", prefix: "danger" },
            { name: "Warning", prefix: "warning" },
            { name: "Info", prefix: "info" },
          ].map((ramp) => (
            <div key={ramp.prefix} className="space-y-2">
              <p className="text-title-group text-neutral-950">{ramp.name}</p>
              <div className="flex gap-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                  (shade) => (
                    <div
                      key={shade}
                      className="flex h-12 w-12 items-center justify-center rounded-md text-[10px]"
                      style={{
                        backgroundColor: `var(--color-${ramp.prefix}-${shade})`,
                        color: shade >= 500 ? "white" : "#030712",
                      }}
                    >
                      {shade}
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </Section>

        {/* Buttons */}
        <Section title="Buttons">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="default">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="compact">Compact</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button icon={ArrowRight} iconPosition="right">
                With Icon
              </Button>
              <Button icon={Heart} variant="secondary">
                Favorite
              </Button>
              <Button icon={Plus} size="icon" variant="ghost" />
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </Section>

        {/* Badges */}
        <Section title="Badges">
          <div className="flex flex-wrap gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </Section>

        {/* Cards */}
        <Section title="Cards">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Standard card with border</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body text-neutral-600">
                  Card content goes here.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="secondary">
                  Action
                </Button>
              </CardFooter>
            </Card>

            <Card variant="selected">
              <CardHeader>
                <CardTitle>Selected Card</CardTitle>
                <CardDescription>Highlighted selection state</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-brand-700" />
                  <span className="text-body text-neutral-600">Selected</span>
                </div>
              </CardContent>
            </Card>

            <Card variant="interactive">
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>Hover and tap animations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body text-neutral-600">Try hovering!</p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Form Controls */}
        <Section title="Form Controls">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Input */}
            <div className="space-y-2">
              <Label htmlFor="demo-input">Input</Label>
              <Input
                id="demo-input"
                placeholder="Type something..."
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setInputValue(e.target.value);
                  setInputError(false);
                }}
              />
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setInputError(!inputError)}
                >
                  Toggle Error
                </Button>
              </div>
              {inputError && (
                <Input
                  placeholder="Error state"
                  error
                  value="Invalid input"
                  readOnly
                />
              )}
            </div>

            {/* Textarea */}
            <div className="space-y-2">
              <Label htmlFor="demo-textarea">Textarea</Label>
              <Textarea
                id="demo-textarea"
                placeholder="Write a longer message..."
              />
            </div>

            {/* Checkbox */}
            <div className="space-y-2">
              <Label>Checkbox</Label>
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={checkboxChecked}
                  onCheckedChange={(checked: boolean) =>
                    setCheckboxChecked(checked)
                  }
                />
                <span className="text-body text-neutral-950">
                  {checkboxChecked ? "Checked" : "Unchecked"}
                </span>
              </div>
            </div>

            {/* Switch */}
            <div className="space-y-2">
              <Label>Switch</Label>
              <div className="flex items-center gap-3">
                <Switch
                  checked={switchChecked}
                  onCheckedChange={(checked: boolean) =>
                    setSwitchChecked(checked)
                  }
                />
                <span className="text-body text-neutral-950">
                  {switchChecked ? "On" : "Off"}
                </span>
              </div>
            </div>

            {/* Radio Group */}
            <div className="space-y-2">
              <Label>Radio Group</Label>
              <RadioGroup
                value={radioValue}
                onValueChange={setRadioValue}
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-1" />
                  <span className="text-body text-neutral-950">Option 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-2" />
                  <span className="text-body text-neutral-950">Option 2</span>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-3" />
                  <span className="text-body text-neutral-950">Option 3</span>
                </div>
              </RadioGroup>
            </div>

            {/* Select */}
            <div className="space-y-2">
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
            </div>
          </div>
        </Section>

        {/* Label Variants */}
        <Section title="Label Variants">
          <div className="flex flex-wrap gap-6">
            <Label variant="default">Default Label</Label>
            <Label variant="secondary">Secondary Label</Label>
            <Label variant="muted">Muted Label</Label>
          </div>
        </Section>

        {/* Feedback */}
        <Section title="Feedback">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Spinner className="size-5 text-brand-700" />
              <span className="text-body text-neutral-600">Loading...</span>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline" size="sm">
                    Hover for Tooltip
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </Section>

        {/* Icons */}
        <Section title="Icons">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CheckIcon className="text-success-700" />
              <span className="text-body text-neutral-600">CheckIcon</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={20} weight="fill" className="text-warning-500" />
              <span className="text-body text-neutral-600">Phosphor Star</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={20} weight="fill" className="text-danger-400" />
              <span className="text-body text-neutral-600">Phosphor Heart</span>
            </div>
          </div>
        </Section>

        {/* Border Radius Tokens */}
        <Section title="Border Radius Tokens">
          <div className="flex flex-wrap gap-4">
            {[4, 8, 12, 16, 24].map((r) => (
              <div
                key={r}
                className={`flex h-16 w-24 items-center justify-center border border-neutral-200 bg-white text-body text-neutral-600 rounded-${r}`}
              >
                {r}px
              </div>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <footer className="pt-8 text-center">
          <p className="text-legal text-neutral-400">
            Addi UI Kit Design Template — Built with Next.js, Tailwind CSS 4,
            Base UI, and Motion
          </p>
        </footer>
      </div>
    </div>
  );
}
