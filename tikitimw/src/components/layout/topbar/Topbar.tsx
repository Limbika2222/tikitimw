"use client";

import { SearchBar } from "./SearchBar";
import { NotificationButton } from "./NotificationButton";
import { QuickCreate } from "./QuickCreate";
import { ProfileMenu } from "./ProfileMenu";

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#09090B]/80 backdrop-blur-2xl">
      <div className="flex h-24 items-center justify-between px-10">
        {/* Left */}
        <div className="flex-1 max-w-xl">
          <SearchBar />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <QuickCreate />

          <NotificationButton />

          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}