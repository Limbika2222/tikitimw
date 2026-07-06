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
        p-6
        hover:-translate-y-1
        hover:shadow-violet-900/20
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-zinc-500">
            {title}
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            {value}
          </h2>
        </div>

        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{ background: iconColor }}
        >
          <Icon size={24} />
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2">
        <TrendingUp
          size={18}
          className="text-emerald-400"
        />

        <span className="font-semibold text-emerald-400">
          {change}
        </span>

        <span className="text-zinc-500">
          this month
        </span>
      </div>
    </GlassCard>
  );
}