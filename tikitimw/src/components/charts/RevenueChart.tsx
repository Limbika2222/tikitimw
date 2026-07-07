"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import {
  Download,
  TrendingUp,
} from "lucide-react";

const data = [
  { month: "Jan", revenue: 12 },
  { month: "Feb", revenue: 18 },
  { month: "Mar", revenue: 22 },
  { month: "Apr", revenue: 30 },
  { month: "May", revenue: 28 },
  { month: "Jun", revenue: 42 },
  { month: "Jul", revenue: 50 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-3xl border border-zinc-800/70 bg-zinc-900/70 p-3 shadow-[0_1px_0_rgba(255,255,255,0.02),0_24px_70px_rgba(0,0,0,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-700/80 hover:shadow-2xl hover:shadow-black/20 md:p-4">
      {/* Header */}

      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Revenue Analytics
          </p>

          <h2 className="mt-2 text-[28px] font-semibold tracking-[-0.04em] text-white md:text-[32px]">
            MWK 84.2M
          </h2>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/15">
              <TrendingUp className="h-3 w-3" />
              +22%
            </div>

            <span className="text-xs leading-4 text-zinc-500">
              compared to last month
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 lg:justify-end">
          {["7D", "30D", "90D", "Year"].map((period) => (
            <button
              key={period}
              className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-all duration-200 ${
                period === "30D"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-900/20"
                  : "bg-zinc-800/80 text-zinc-400 hover:-translate-y-0.5 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}

      <div className="mt-3 h-64 md:mt-4 md:h-72">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart
            data={data}
            margin={{ top: 8, right: 8, left: -18, bottom: 0 }}
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
                  stopColor="#8b5cf6"
                  stopOpacity={0.45}
                />

                <stop
                  offset="95%"
                  stopColor="#8b5cf6"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#27272a"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#71717a" }}
              axisLine={false}
              tickLine={false}
              tickMargin={14}
            />

            <Tooltip
              cursor={{ stroke: "#8b5cf6", strokeOpacity: 0.12, strokeWidth: 1 }}
              contentStyle={{
                background: "rgba(9, 9, 11, 0.96)",
                border: "1px solid rgba(63, 63, 70, 0.9)",
                borderRadius: 16,
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.35)",
                color: "#fff",
                padding: "12px 14px",
              }}
              labelStyle={{ color: "#a1a1aa", fontSize: 12, fontWeight: 600, marginBottom: 4 }}
              itemStyle={{ color: "#fff", fontSize: 13 }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8b5cf6"
              strokeWidth={3}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}

      <div className="mt-3 flex flex-col gap-3 border-t border-zinc-800/80 pt-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />

            <span className="text-xs text-zinc-400">
              Revenue
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />

            <span className="text-xs text-zinc-400">
              Tickets
            </span>
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-2xl border border-zinc-700/80 bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-lg hover:shadow-black/10">
          <Download className="h-4 w-4" />
          Export Report
        </button>
      </div>
    </div>
  );
}