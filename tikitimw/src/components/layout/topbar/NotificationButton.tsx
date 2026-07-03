"use client";

import { Bell } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";

export function NotificationButton() {
  return (
    <div className="relative">
      <IconButton>
        <Bell size={20} />
      </IconButton>

      <span
        className="
          absolute
          right-1
          top-1
          h-3
          w-3
          rounded-full
          bg-red-500
          ring-4
          ring-[#09090B]
        "
      />
    </div>
  );
}