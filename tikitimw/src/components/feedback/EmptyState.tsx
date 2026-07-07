"use client";

import { Inbox } from "lucide-react";

type EmptyStateProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

export default function EmptyState({
  title = "No records found",
  description = "There is nothing to display yet.",
  action,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 p-12 text-center">
      <Inbox className="mb-4 h-10 w-10 text-zinc-500" />

      <h2 className="text-lg font-semibold text-white">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm text-zinc-400">
        {description}
      </p>

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}