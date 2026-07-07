import {
  Building2,
  CalendarDays,
  Ticket,
  UserPlus,
} from "lucide-react";

import DashboardSection from "./DashboardSection";

const activities = [
  {
    title: "Organization Created",
    description: "Lake of Stars",
    time: "2 min ago",
    color: "bg-emerald-500/15 text-emerald-400",
    icon: Building2,
  },
  {
    title: "Event Published",
    description: "Mzuzu Marathon",
    time: "10 min ago",
    color: "bg-violet-500/15 text-violet-400",
    icon: CalendarDays,
  },
  {
    title: "VIP Tickets Sold",
    description: "120 Tickets",
    time: "18 min ago",
    color: "bg-amber-500/15 text-amber-400",
    icon: Ticket,
  },
  {
    title: "Organizer Invited",
    description: "Blantyre Events Ltd",
    time: "35 min ago",
    color: "bg-sky-500/15 text-sky-400",
    icon: UserPlus,
  },
];

export default function ActivityFeed() {
  return (
    <DashboardSection
      title="Live Activity"
      subtitle="Platform activity in real time"
    >
      <div className="space-y-2">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="group flex items-start gap-3 rounded-[20px] border border-zinc-800/70 bg-zinc-950/60 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/20 hover:bg-zinc-900 hover:shadow-lg hover:shadow-black/10"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1 ring-inset ring-white/5 ${activity.color}`}
              >
                <Icon className="h-4 w-4" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-white">
                  {activity.title}
                </h3>

                <p className="text-xs leading-4 text-zinc-500">
                  {activity.description}
                </p>
              </div>

              <span className="whitespace-nowrap pt-0.5 text-xs text-zinc-600">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </DashboardSection>
  );
}