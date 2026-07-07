import { DashboardLayout } from "./DashboardLayout";
import { KpiGrid } from "./KpiGrid";

export function DashboardPage() {
  return (
    <div className="space-y-8">
      <KpiGrid />
      <DashboardLayout />
    </div>
  );
}