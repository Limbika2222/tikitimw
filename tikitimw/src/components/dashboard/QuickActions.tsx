import {
  Building2,
  CalendarPlus,
  UserPlus,
  BarChart3,
} from "lucide-react";

import DashboardSection from "./DashboardSection";

const actions = [
  {
    title: "Create Organization",
    icon: Building2,
  },
  {
    title: "Create Event",
    icon: CalendarPlus,
  },
  {
    title: "Invite Organizer",
    icon: UserPlus,
  },
  {
    title: "View Reports",
    icon: BarChart3,
  },
];

export default function QuickActions() {
  return (
    <DashboardSection
      title="Quick Actions"
      subtitle="Frequently used tasks"
    >
      <div className="grid gap-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="group flex items-center gap-3 rounded-[20px] border border-zinc-800/70 bg-zinc-950/60 p-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/25 hover:bg-zinc-900 hover:shadow-lg hover:shadow-black/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 ring-1 ring-inset ring-violet-500/10 transition-transform duration-200 group-hover:scale-[1.02]">
                <Icon className="h-4 w-4 text-violet-400" />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">
                  {action.title}
                </p>

                <p className="text-xs leading-4 text-zinc-500">
                  Open module
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </DashboardSection>
  );
}