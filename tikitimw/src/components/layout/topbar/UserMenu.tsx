import { ChevronDown } from "lucide-react";

export default function UserMenu() {
  return (
    <button className="flex items-center gap-3 rounded-2xl border border-zinc-800/70 bg-zinc-900/60 px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-lg hover:shadow-black/10">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white">
        L
      </div>

      <div className="text-left">
        <p className="text-sm font-semibold leading-5 text-white">
          Limbika
        </p>

        <p className="text-xs leading-4 text-zinc-500">
          Super Admin
        </p>
      </div>

      <ChevronDown className="h-4 w-4 text-zinc-500" />
    </button>
  );
}