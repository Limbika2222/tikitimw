import { GlassCard } from "@/components/ui/GlassCard";
import { RevenueChart } from "./charts/RevenueChart";

export function DashboardLayout() {
  return (
    <div className="grid gap-5 xl:grid-cols-12">
      <div className="col-span-8 h-120">
        <RevenueChart />
      </div>
      <GlassCard className="col-span-4 h-105 p-5">
        Upcoming Events
      </GlassCard>
      <GlassCard className="col-span-8 h-75 p-5">
        Recent Sales
      </GlassCard>
      <GlassCard className="col-span-4 h-75 p-5">
        Activity Feed
      </GlassCard>
    </div>
  );
}