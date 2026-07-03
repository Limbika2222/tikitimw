import { Plus } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-sm text-zinc-500">
          Welcome back 👋
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Dashboard
        </h1>
      </div>

      <button className="flex items-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 font-medium transition hover:bg-violet-500">
        <Plus size={18} />
        Create Event
      </button>
    </div>
  );
}