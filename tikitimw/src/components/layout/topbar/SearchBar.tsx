"use client";

import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        placeholder="Search events, customers, tickets..."
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-white/5
          bg-white/[0.03]
          pl-14
          pr-5
          text-sm
          outline-none
          backdrop-blur-xl
          transition-all
          duration-300
          focus:border-violet-500/40
          focus:bg-white/[0.05]
        "
      />
    </div>
  );
}