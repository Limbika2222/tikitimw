import { Bell } from "lucide-react";

import SearchBox from "./topbar/SearchBox";
import CreateButton from "./topbar/CreateButton";
import UserMenu from "./topbar/UserMenu";

export default function AdminTopbar() {
  return (
    <header className="flex h-20 items-center justify-between gap-6 border-b border-zinc-800/60 bg-[#09090B]/95 px-6 backdrop-blur xl:px-8">
      <div className="min-w-0">
        <h1 className="text-[22px] font-semibold tracking-[-0.03em] text-white">
          Good Morning 👋
        </h1>

        <p className="mt-1 text-sm leading-6 text-zinc-500">
          Welcome back to TikitiMW.
        </p>
      </div>

      <div className="flex items-center gap-3 xl:gap-4">
        <SearchBox />

        <CreateButton />

        <button className="relative h-12 w-12 shrink-0 rounded-2xl border border-zinc-800/70 bg-zinc-900/70 transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-lg hover:shadow-black/10">
          <Bell className="h-5 w-5 text-white" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <UserMenu />
      </div>
    </header>
  );
}