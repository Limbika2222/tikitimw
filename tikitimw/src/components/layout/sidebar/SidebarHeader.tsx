import { Ticket } from "lucide-react";

export default function SidebarHeader() {
  return (
    <div className="px-6 py-7">
      <div className="flex items-center gap-3.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-900/25">
          <Ticket className="h-6 w-6 text-white" />
        </div>

        <div>
          <h1 className="text-[18px] font-semibold tracking-[-0.03em] text-white">
            TikitiMW
          </h1>

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            Event Platform
          </p>
        </div>
      </div>
    </div>
  );
}