"use client";

import { Plus } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";

export function QuickCreate() {
  return (
    <GradientButton className="flex items-center gap-2">
      <Plus size={18} />

      Create Event
    </GradientButton>
  );
}