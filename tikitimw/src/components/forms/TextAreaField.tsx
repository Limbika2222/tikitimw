"use client";

import {
  forwardRef,
  TextareaHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(({ label, error, className, rows = 4, ...props }, ref) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          "w-full rounded-2xl",
          "border border-zinc-800",
          "bg-zinc-900/80",
          "px-4 py-3",
          "text-white",
          "placeholder:text-zinc-500",
          "outline-none",
          "transition-all",
          "duration-200",
          "focus:border-violet-500",
          "focus:ring-4",
          "focus:ring-violet-500/20",
          "disabled:opacity-50",
          "resize-y",
          className
        )}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
});

TextAreaField.displayName = "TextAreaField";

export default TextAreaField;