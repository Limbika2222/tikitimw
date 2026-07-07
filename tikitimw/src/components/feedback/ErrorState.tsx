"use client";

import { AlertTriangle } from "lucide-react";

type ErrorStateProps = {
  title?: string;
  description?: string;
};

export default function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load the requested data. Please try again.",
}: ErrorStateProps) {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-red-900/40 bg-zinc-900 p-12 text-center">
      <AlertTriangle className="mb-4 h-10 w-10 text-red-500" />

      <h2 className="text-lg font-semibold text-white">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm text-zinc-400">
        {description}
      </p>
    </div>
  );
}