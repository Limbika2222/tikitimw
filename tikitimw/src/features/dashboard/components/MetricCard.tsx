import { GlassCard } from "@/components/ui/GlassCard";
import { LucideIcon, TrendingUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  iconColor: string;
}

export function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor,
}: MetricCardProps) {
  return (
    <GlassCard
      className="
        group
        p-5
        hover:-translate-y-1
        hover:shadow-violet-900/20
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            {value}
          </h2>
        </div>

        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{ background: iconColor }}
        >
          <Icon size={20} />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm">
        <TrendingUp
          size={16}
          className="text-emerald-400"
        />

        <span className="font-medium text-emerald-400">
          {change}
        </span>

        <span className="text-zinc-500">
          this month
        </span>
      </div>
    </GlassCard>
  );
}