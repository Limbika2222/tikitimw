import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="flex h-11 w-full max-w-[380px] items-center gap-3 rounded-2xl border border-zinc-800/70 bg-zinc-900/60 px-4 shadow-sm transition-all duration-200 focus-within:border-violet-500/60 focus-within:bg-zinc-900 focus-within:shadow-lg focus-within:shadow-black/10 xl:w-[420px]">
      <Search className="h-4.5 w-4.5 text-zinc-500" />

      <input
        className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
        placeholder="Search events, organizations..."
      />
    </div>
  );
}