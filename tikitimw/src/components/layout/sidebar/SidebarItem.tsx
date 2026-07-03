"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

interface SidebarItemProps {
  item: NavigationItem;
  active?: boolean;
}

export function SidebarItem({
  item,
  active = false,
}: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={`
        group
        flex
        items-center
        gap-3
        rounded-xl
        px-3.5
        py-2.5
        transition-all
        duration-300

        ${
          active
            ? "bg-linear-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-900/40"
            : "text-zinc-400 hover:bg-white/5 hover:text-white"
        }
      `}
    >
      <div
        className={`
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          transition-all

          ${
            active
              ? "bg-white/10"
              : "bg-white/5 group-hover:bg-white/10"
          }
        `}
      >
        <Icon size={18} />
      </div>

      <span className="text-sm font-medium leading-none">
        {item.title}
      </span>
    </Link>
  );
}