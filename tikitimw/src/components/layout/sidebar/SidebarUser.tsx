import { Shield } from "lucide-react";

export default function SidebarUser() {
  return (
    <div className="border-t border-zinc-800/60 p-5">
      <div className="flex items-center gap-3.5 rounded-[20px] bg-zinc-900/80 p-4 ring-1 ring-inset ring-white/5 transition-colors hover:bg-zinc-900">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-600 text-base font-semibold text-white">
          L
        </div>

        <div>
          <p className="text-sm font-semibold text-white">
            Limbika
          </p>

          <div className="mt-1 flex items-center gap-2 text-xs text-zinc-400">
            <Shield className="h-3.5 w-3.5" />
            Super Admin
          </div>
        </div>
      </div>
    </div>
  );
}