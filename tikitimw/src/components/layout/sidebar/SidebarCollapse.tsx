"use client";

import { PanelLeftClose } from "lucide-react";

export function SidebarCollapse() {
  return (
    <button
      className="
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        border-white/5
        bg-white/3
        px-3.5
        py-2.5
        text-sm
        font-medium
        text-zinc-400
        transition-all
        duration-300
        hover:bg-white/5
        hover:text-white
      "
    >
      <PanelLeftClose size={16} />
      Collapse Sidebar
    </button>
  );
}