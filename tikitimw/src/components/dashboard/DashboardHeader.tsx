import { CalendarDays, RefreshCw, Sparkles } from "lucide-react";

import PrimaryButton from "@/components/ui/PrimaryButton";

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mb-6 flex flex-col gap-5 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-[40px] font-semibold tracking-[-0.04em] text-white sm:text-[44px] lg:text-[48px]">
            Good Morning, Limbika 👋
          </h1>

          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-400">
            All Systems Operational
          </span>
        </div>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-[15px]">
          Welcome back. You currently manage
          <span className="font-semibold text-white"> 12 events </span>
          across
          <span className="font-semibold text-white"> 5 organizations</span>.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500 sm:gap-6">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {today}
          </div>

          <div className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Last synced just now
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 lg:justify-end">
        <button className="rounded-2xl border border-zinc-800/80 bg-zinc-900/80 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-800 hover:shadow-lg hover:shadow-black/20">
          Refresh
        </button>

        <PrimaryButton className="shadow-xl shadow-violet-950/20">
          <Sparkles className="h-5 w-5" />
          Create Event
        </PrimaryButton>
      </div>
    </div>
  );
}