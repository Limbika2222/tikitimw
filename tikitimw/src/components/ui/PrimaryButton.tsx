"use client";

import { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function PrimaryButton({
  loading = false,
  className,
  children,
  disabled,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      disabled={loading || disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "rounded-2xl",
        "bg-gradient-to-r from-violet-600 to-purple-600",
        "px-6 py-3",
        "font-semibold",
        "text-white",
        "shadow-lg shadow-violet-900/20",
        "transition-all duration-200",
        "hover:scale-[1.02]",
        "hover:from-violet-500 hover:to-purple-500",
        "active:scale-[0.98]",
        "disabled:cursor-not-allowed",
        "disabled:opacity-60",
        className
      )}
      {...props}
    >
      {loading && (
        <Loader2 className="h-4 w-4 animate-spin" />
      )}

      {children}
    </button>
  );
}