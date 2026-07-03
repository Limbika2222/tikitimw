"use client";

import { ChevronDown } from "lucide-react";

export function ProfileMenu() {
  return (
    <button
      className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/5
        bg-white/3
        px-4
        py-2
        transition-all
        hover:bg-white/5
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-violet-500
          to-violet-700
          font-bold
        "
      >
        L
      </div>

      <div className="text-left">
        <p className="text-sm font-semibold">
          Limbika
        </p>

        <p className="text-xs text-zinc-500">
          Organizer
        </p>
      </div>

      <ChevronDown
        size={18}
        className="text-zinc-500"
      />
    </button>
  );
}