"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  title: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
}

export function SidebarItem({
  title,
  href,
  icon: Icon,
  active = false,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
        active
          ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
      }`}
    >
      <Icon
        size={20}
        className="transition-transform duration-200 group-hover:scale-110"
      />

      <span className="font-medium">{title}</span>
    </Link>
  );
}