import {
  CalendarDays,
  DollarSign,
  Ticket,
  Users,
} from "lucide-react";

import { MetricCard } from "./MetricCard";

export function KpiGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        title="Revenue"
        value="MK 3.8M"
        change="+18%"
        icon={DollarSign}
        iconColor="#7C3AED"
      />

      <MetricCard
        title="Tickets"
        value="12,450"
        change="+11%"
        icon={Ticket}
        iconColor="#2563EB"
      />

      <MetricCard
        title="Customers"
        value="5,240"
        change="+7%"
        icon={Users}
        iconColor="#10B981"
      />

      <MetricCard
        title="Events"
        value="24"
        change="+4%"
        icon={CalendarDays}
        iconColor="#F59E0B"
      />
    </div>
  );
}