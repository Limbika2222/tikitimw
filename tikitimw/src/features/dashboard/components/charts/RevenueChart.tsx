"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { revenueData } from "@/data/dashboard/revenue";

import { ChartCard } from "@/components/charts/ChartCard";
import { ChartContainer } from "@/components/charts/ChartContainer";
import { ChartHeader } from "@/components/charts/ChartHeader";
import { ChartTooltip } from "@/components/charts/ChartTooltip";

export function RevenueChart() {
  return (
    <ChartCard>
      <ChartHeader
        title="Revenue Overview"
        value="MK 3,785,000"
        change="+18%"
      />

      <ChartContainer>
        <AreaChart
          data={revenueData}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient
              id="revenueGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#7C3AED"
                stopOpacity={0.45}
              />

              <stop
                offset="95%"
                stopColor="#7C3AED"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="#1F2430"
            vertical={false}
          />

          <XAxis
            dataKey="month"
            tick={{
              fill: "#71717A",
              fontSize: 12,
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            hide
          />

          <Tooltip
            content={<ChartTooltip />}
            cursor={{
              stroke: "#7C3AED",
              strokeDasharray: "4 4",
            }}
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8B5CF6"
            strokeWidth={4}
            fill="url(#revenueGradient)"
            dot={false}
            activeDot={{
              r: 7,
              fill: "#A855F7",
              stroke: "#FFFFFF",
              strokeWidth: 3,
            }}
          />
        </AreaChart>
      </ChartContainer>
    </ChartCard>
  );
}