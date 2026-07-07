import { ArrowUpRight, LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string | number;
  change: string;
  subtitle?: string;
  icon: LucideIcon;
}

export default function KpiCard({
  title,
  value,
  change,
  subtitle = "Compared to last month",
  icon: Icon,
}: KpiCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-900/70 p-3 shadow-[0_1px_0_rgba(255,255,255,0.02),0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/20 hover:shadow-2xl hover:shadow-violet-950/10 md:p-4">
      {/* Background glow */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0 space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            {title}
          </p>

          <h2 className="text-[32px] font-semibold leading-none tracking-[-0.04em] text-white md:text-[36px]">
            {value}
          </h2>

          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/15">
              <ArrowUpRight className="h-3 w-3" />
              {change}
            </div>
          </div>

          <p className="text-xs leading-4 text-zinc-500">
            {subtitle}
          </p>
        </div>

        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600/20 to-fuchsia-600/20 ring-1 ring-violet-500/20 md:h-16 md:w-16">
          <Icon className="h-7 w-7 text-violet-400 md:h-8 md:w-8" />
        </div>
      </div>
    </div>
  );
}