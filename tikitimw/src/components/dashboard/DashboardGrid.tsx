import { ReactNode } from "react";

interface DashboardGridProps {
  topLeft: ReactNode;
  topRight: ReactNode;
  bottomLeft: ReactNode;
  bottomRight: ReactNode;
}

export default function DashboardGrid({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: DashboardGridProps) {
  return (
    <div className="mt-4 space-y-3 xl:mt-6 xl:space-y-4">
      <div className="grid grid-cols-12 gap-3 xl:gap-4">
        <div className="col-span-12 xl:col-span-8">
          {topLeft}
        </div>

        <div className="col-span-12 xl:col-span-4">
          {topRight}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3 xl:gap-4">
        <div className="col-span-12 xl:col-span-8">
          {bottomLeft}
        </div>

        <div className="col-span-12 xl:col-span-4">
          {bottomRight}
        </div>
      </div>
    </div>
  );
}