import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  icon: LucideIcon;
}

export function StatCard({
  title,
  value,
  change,
  positive = true,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="group rounded-3xl border border-white/5 bg-[#151823] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-[#191D2A]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-zinc-500">{title}</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            {value}
          </h2>
        </div>

        <div className="rounded-2xl bg-violet-600/20 p-3">
          <Icon className="text-violet-400" size={24} />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {positive ? (
          <TrendingUp size={18} className="text-emerald-400" />
        ) : (
          <TrendingDown size={18} className="text-red-400" />
        )}

        <span
          className={
            positive
              ? "text-sm font-medium text-emerald-400"
              : "text-sm font-medium text-red-400"
          }
        >
          {change}
        </span>

        <span className="text-sm text-zinc-500">
          vs last month
        </span>
      </div>
    </div>
  );
}