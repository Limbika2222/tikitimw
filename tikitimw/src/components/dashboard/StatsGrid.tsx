import {
  CalendarDays,
  DollarSign,
  Ticket,
  Users,
} from "lucide-react";

import { StatCard } from "./StatCard";

export function StatsGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Revenue"
        value="MK 3.8M"
        change="+18%"
        icon={DollarSign}
      />

      <StatCard
        title="Tickets Sold"
        value="12,450"
        change="+12%"
        icon={Ticket}
      />

      <StatCard
        title="Customers"
        value="5,240"
        change="+8%"
        icon={Users}
      />

      <StatCard
        title="Events"
        value="24"
        change="+4%"
        icon={CalendarDays}
      />
    </section>
  );
}