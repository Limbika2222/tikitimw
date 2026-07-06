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
    <div className="mb-8 flex items-start justify-between">
      <div>
        <p className="text-zinc-500">
          {title}
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          {value}
        </h2>
      </div>

      <div
        className="
          rounded-full
          bg-emerald-500/10
          px-4
          py-2
          text-sm
          font-semibold
          text-emerald-400
        "
      >
        {change}
      </div>
    </div>
  );
}