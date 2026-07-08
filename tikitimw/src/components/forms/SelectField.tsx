"use client";

import {
  forwardRef,
  SelectHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

type Option = {
  label: string;
  value: string;
};

interface SelectFieldProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: string;
  placeholder?: string;
}

const SelectField = forwardRef<
  HTMLSelectElement,
  SelectFieldProps
>(
  (
    {
      label,
      options,
      error,
      placeholder = "Select an option",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-300">
          {label}
        </label>

        <select
          ref={ref}
          className={cn(
            "w-full rounded-2xl",
            "border border-zinc-800",
            "bg-zinc-900/80",
            "px-4 py-3",
            "text-white",
            "outline-none",
            "transition-all",
            "duration-200",
            "focus:border-violet-500",
            "focus:ring-4",
            "focus:ring-violet-500/20",
            className
          )}
          {...props}
        >
          <option value="">
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

SelectField.displayName = "SelectField";

export default SelectField;