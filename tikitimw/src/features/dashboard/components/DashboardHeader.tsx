import { CalendarDays } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-zinc-500">
          Welcome back 👋
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-2.5 rounded-2xl border border-white/5 bg-white/5 px-4 py-2.5 text-sm">
        <CalendarDays size={16} />
        <span>July 2026</span>
      </div>
    </div>
  );
}