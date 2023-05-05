"use client";
import { Loader2 } from "lucide-react";
import { Button } from "../../../../../packages/ui/src/button";

export function ButtonVariants() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}

export function ButtonSizes() {
  return (
    <div className="flex items-center space-x-4">
      <Button size="xs">extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="2xl">2x Extra Large</Button>
    </div>
  );
}

export function ButtonStates() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="disabled">Disabled</Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading
      </Button>
    </div>
  );
}

export function ButtonIcon() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="primary" iconLeft={<span>👋</span>}>
        Hello
      </Button>
      <Button variant="primary" iconRight={<span>👋</span>}>
        Hello
      </Button>
    </div>
  );
}

export function ButtonGroup() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="primary">Hello</Button>
      <Button variant="primary">Hello</Button>
      <Button variant="primary">Hello</Button>
    </div>
  );
}

export function ButtonGroupSizes() {
  return (
    <div className="flex items-center space-x-4">
      <Button size="xs">Hello</Button>
      <Button size="xs">Hello</Button>
      <Button size="xs">Hello</Button>
    </div>
  );
}

export function ButtonGroupVariants() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="primary">Hello</Button>
      <Button variant="secondary">Hello</Button>
      <Button variant="ghost">Hello</Button>
    </div>
  );
}

export function ButtonGroupStates() {
  return (
    <div className="flex items-center space-x-4">
      <Button disabled>Hello</Button>
      <Button loading>Hello</Button>
    </div>
  );
}

export function ButtonGroupIcon() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="primary" iconLeft={<span>👋</span>}>
        Hello
      </Button>
      <Button variant="primary" iconRight={<span>👋</span>}>
        Hello
      </Button>
    </div>
  );
}

export function ButtonGroupVertical() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="primary">Hello</Button>
      <Button variant="primary">Hello</Button>
      <Button variant="primary">Hello</Button>
    </div>
  );
}

export function ButtonGroupVerticalSizes() {
  return (
    <div className="flex items-center space-x-4">
      <Button size="xs">Hello</Button>
      <Button size="xs">Hello</Button>
      <Button size="xs">Hello</Button>
    </div>
  );
}

export function ButtonGroupVerticalVariants() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="primary">Hello</Button>
      <Button variant="secondary">Hello</Button>
      <Button variant="ghost">Hello</Button>
    </div>
  );
}

export function ButtonGroupVerticalStates() {
  return (
    <div className="flex items-center space-x-4">
      <Button disabled>Hello</Button>
      <Button loading>Hello</Button>
    </div>
  );
}

export function ButtonGroupVerticalIcon() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="primary" iconLeft={<span>👋</span>}>
        Hello
      </Button>
      <Button variant="primary" iconRight={<span>👋</span>}>
        Hello
      </Button>
    </div>
  );
}

export function ButtonGroupVerticalStacked() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="primary">Hello</Button>
      <Button variant="primary">Hello</Button>
      <Button variant="primary">Hello</Button>
    </div>
  );
}

export function ButtonGroupVerticalStackedSizes() {
  return (
    <div className="flex items-center space-x-4">
      <Button size="xs">Hello</Button>
      <Button size="xs">Hello</Button>
      <Button size="xs">Hello</Button>
    </div>
  );
}

export function ButtonGroupVerticalStackedVariants() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="primary">Hello</Button>
      <Button variant="secondary">Hello</Button>
      <Button variant="ghost">Hello</Button>
    </div>
  );
}

export function ButtonGroupVerticalStackedStates() {
  return (
    <div className="flex items-center space-x-4">
      <Button disabled>Hello</Button>
      <Button loading>Hello</Button>
    </div>
  );
}

export function ButtonGroupVerticalStackedIcon() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="primary" iconLeft={<span>👋</span>}>
        Hello
      </Button>
      <Button variant="primary" iconRight={<span>👋</span>}>
        Hello
      </Button>
    </div>
  );
}
