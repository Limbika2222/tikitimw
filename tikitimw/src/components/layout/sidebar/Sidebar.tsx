"use client";

import { navigation } from "@/constants/navigation";

import { SidebarLogo } from "./SidebarLogo";
import { SidebarItem } from "./SidebarItem";
import { SidebarProfile } from "./SidebarProfile";
import { SidebarUpgrade } from "./SidebarUpgrade";
import { SidebarCollapse } from "./SidebarCollapse";

export function Sidebar() {
  return (
    <aside
      className="
        sticky
        top-0
        flex
        h-screen
        w-[255px]
        flex-col
        border-r
        border-white/5
        bg-gradient-to-b
        from-[#090B13]
        via-[#0C0F17]
        to-[#10131C]
      "
    >
      <SidebarLogo />

      <div className="flex-1 overflow-y-auto px-4 py-5">
        <nav className="space-y-2">
          {navigation.map((item, index) => (
            <SidebarItem
              key={item.title}
              item={item}
              active={index === 0}
            />
          ))}
        </nav>

        <div className="mt-10">
          <SidebarUpgrade />
        </div>
      </div>

      <div className="space-y-3 border-t border-white/5 p-4">
        <SidebarProfile />
        <SidebarCollapse />
      </div>
    </aside>
  );
}