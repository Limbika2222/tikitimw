import { ReactNode } from "react";

interface DashboardSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function DashboardSection({
  title,
  subtitle,
  children,
}: DashboardSectionProps) {
  return (
    <section className="rounded-3xl border border-zinc-800/70 bg-zinc-900/70 p-3 shadow-[0_1px_0_rgba(255,255,255,0.02),0_24px_60px_rgba(0,0,0,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-700/80 hover:shadow-2xl hover:shadow-black/20 md:p-4">
      <div className="mb-3 md:mb-4">
        <h2 className="text-base font-semibold tracking-[-0.02em] text-white md:text-lg">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-xs leading-4 text-zinc-500">
            {subtitle}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}