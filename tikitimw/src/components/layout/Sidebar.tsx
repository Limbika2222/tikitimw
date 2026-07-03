"use client";

import { navigation } from "@/constants/navigation";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-white/5 bg-[#0F1117]">
      {/* Logo */}
      <div className="border-b border-white/5 p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-xl font-bold">
            T
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight">
              TikitiMW
            </h2>

            <p className="text-sm text-zinc-500">
              Organizer Portal
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 space-y-2 overflow-y-auto p-4">
        {navigation.map((item, index) => (
          <SidebarItem
            key={item.title}
            title={item.title}
            href={item.href}
            icon={item.icon}
            active={index === 0}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-white/5 p-5">
        <div className="flex items-center gap-3 rounded-2xl bg-[#171A23] p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 font-bold">
            L
          </div>

          <div>
            <p className="font-semibold">
              Limbika
            </p>

            <p className="text-sm text-zinc-500">
              Super Organizer
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}