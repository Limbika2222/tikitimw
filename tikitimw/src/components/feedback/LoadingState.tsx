"use client";

import { Loader2 } from "lucide-react";

type LoadingStateProps = {
  title?: string;
  description?: string;
};

export default function LoadingState({
  title = "Loading...",
  description = "Please wait while we fetch your data.",
}: LoadingStateProps) {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 p-12 text-center">
      <Loader2 className="mb-4 h-10 w-10 animate-spin text-violet-500" />

      <h2 className="text-lg font-semibold text-white">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm text-zinc-400">
        {description}
      </p>
    </div>
  );
}