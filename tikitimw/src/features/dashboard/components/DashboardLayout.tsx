import { GlassCard } from "@/components/ui/GlassCard";

export function DashboardLayout() {
  return (
    <div className="grid gap-5 xl:grid-cols-12">
      <GlassCard className="col-span-8 h-105 p-5">
        Revenue Chart
      </GlassCard>
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