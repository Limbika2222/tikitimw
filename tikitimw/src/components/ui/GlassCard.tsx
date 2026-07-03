import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        border
        border-white/5
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-2xl
        shadow-black/20
        transition-all
        duration-300
        hover:border-violet-500/20
        `,
        className
      )}
    >
      {children}
    </div>
  );
}