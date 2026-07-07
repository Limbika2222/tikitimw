"use client";

import { ResponsiveContainer } from "recharts";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function ChartContainer({
  children,
}: Props) {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}