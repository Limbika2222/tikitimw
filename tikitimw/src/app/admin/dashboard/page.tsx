import {
  Building2,
  CalendarDays,
  Users,
  Wallet,
} from "lucide-react";

import RevenueChart from "@/components/charts/RevenueChart";

import KpiCard from "@/components/data-display/KpiCard";

import DashboardGrid from "@/components/dashboard/DashboardGrid";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import RecentEvents from "@/components/dashboard/RecentEvents";
import QuickActions from "@/components/dashboard/QuickActions";

export default function AdminDashboardPage() {
  return (
    <>

      {/* KPI Cards */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          title="Organizations"
          value="12"
          change="2 this month"
          icon={Building2}
        />

        <KpiCard
          title="Events"
          value="57"
          change="8 today"
          icon={CalendarDays}
        />

        <KpiCard
          title="Users"
          value="428"
          change="15%"
          icon={Users}
        />

        <KpiCard
          title="Revenue"
          value="MWK 84.2M"
          change="22%"
          icon={Wallet}
        />
      </div>

      {/* Dashboard Grid */}

      <DashboardGrid
        topLeft={<RevenueChart />}
        topRight={<ActivityFeed />}
        bottomLeft={<RecentEvents />}
        bottomRight={<QuickActions />}
      />
    </>
  );
}
