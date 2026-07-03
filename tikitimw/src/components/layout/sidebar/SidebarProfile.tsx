import { ChevronDown } from "lucide-react";

export function SidebarProfile() {
  return (
    <button
      className="
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        border
        border-white/5
        bg-white/3
        p-3
        transition-all
        duration-300
        hover:bg-white/5
      "
    >
      <div className="relative">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-violet-600
            text-sm
            font-bold
          "
        >
          L
        </div>

        <div
          className="
            absolute
            bottom-0
            right-0
            h-3
            w-3
            rounded-full
            border-2
            border-[#0F1117]
            bg-emerald-400
          "
        />
      </div>

      <div className="flex-1 text-left">
        <p className="text-sm font-semibold leading-none">
          Limbika Z.
        </p>

        <p className="mt-1 text-xs text-zinc-500">
          Super Organizer
        </p>
      </div>

      <ChevronDown size={16} className="text-zinc-500" />
    </button>
  );
}