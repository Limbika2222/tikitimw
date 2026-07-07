import { ReactNode } from "react";

type FormSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function FormSection({
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm text-zinc-400">
            {description}
          </p>
        )}
      </div>

      <div className="space-y-5">
        {children}
      </div>
    </section>
  );
}