import { ReactNode } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

interface ChartCardProps {
  children: ReactNode;
}

export function ChartCard({
  children,
}: ChartCardProps) {
  return (
    <GlassCard
      className="
        rounded-[32px]
        p-7
        h-full
      "
    >
      {children}
    </GlassCard>
  );
}