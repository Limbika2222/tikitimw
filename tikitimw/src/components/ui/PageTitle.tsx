interface PageTitleProps {
  title: string;
  subtitle: string;
}

export function PageTitle({
  title,
  subtitle,
}: PageTitleProps) {
  return (
    <div className="space-y-2">
      <p className="text-zinc-500">
        {subtitle}
      </p>

      <h1 className="text-5xl font-bold tracking-tight">
        {title}
      </h1>
    </div>
  );
}