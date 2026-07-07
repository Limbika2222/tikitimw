"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { adminNavigation } from "@/constants/admin-navigation";

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <div className="flex-1 overflow-y-auto px-3 pb-3">
      {adminNavigation.map((group) => (
        <div key={group.section} className="mb-6 last:mb-0">
          <p className="mb-2.5 px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            {group.section}
          </p>

          <div className="space-y-1">
            {group.items.map((item) => {
              const Icon = item.icon;

              const active =
                pathname === item.href ||
                pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center justify-between rounded-[18px] px-3.5 py-3 transition-all duration-200 ${
                    active
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-950/20 ring-1 ring-inset ring-white/10"
                      : "text-zinc-400 hover:bg-zinc-900/80 hover:text-white hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className="text-[15px] font-medium">
                      {item.title}
                    </span>
                  </div>

                  <ChevronRight
                    className={`h-4 w-4 transition-all duration-200 ${
                      active
                        ? "translate-x-0"
                        : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}