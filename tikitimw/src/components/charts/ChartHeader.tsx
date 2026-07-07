interface ChartHeaderProps {
  title: string;
  value: string;
  change: string;
}

export function ChartHeader({
  title,
  value,
  change,
}: ChartHeaderProps) {
  return (
    <div className="mb-4 flex items-start justify-between">
      <div>
        <p className="text-xs text-zinc-500">
          {title}
        </p>

        <h2 className="mt-1 text-2xl font-bold">
          {value}
        </h2>
      </div>

      <div
        className="
          rounded-full
          bg-emerald-500/10
          px-3
          py-1
          text-xs
          font-semibold
          text-emerald-400
        "
      >
        {change}
      </div>
    </div>
  );
}