import { ArrowUpRight } from "lucide-react";

export function SidebarUpgrade() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-violet-500/20
        bg-gradient-to-br
        from-violet-600/20
        via-violet-500/10
        to-transparent
        p-4
      "
    >
      <p className="text-base font-semibold">
        Upgrade to Pro
      </p>

      <p className="mt-1.5 text-xs leading-5 text-zinc-400">
        Unlock analytics, team collaboration and advanced reporting.
      </p>

      <button
        className="
          mt-4
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-violet-600
          py-2.5
          text-sm
          font-medium
          transition-all
          hover:bg-violet-500
        "
      >
        Upgrade

        <ArrowUpRight size={15} />
      </button>
    </div>
  );
}