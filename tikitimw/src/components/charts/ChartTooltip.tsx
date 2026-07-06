"use client";

interface TooltipProps {
  active?: boolean;
  payload?: {
    value: number;
  }[];
  label?: string;
}

export function ChartTooltip({
  active,
  payload,
  label,
}: TooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div
      className="
        rounded-2xl
        border
        border-white/5
        bg-[#111827]
        px-4
        py-3
        shadow-xl
      "
    >
      <p className="text-zinc-400">
        {label}
      </p>

      <p className="mt-1 font-bold">
        MK {payload[0].value.toLocaleString()}
      </p>
    </div>
  );
}