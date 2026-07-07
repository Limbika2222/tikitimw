"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import React from "react";

type SearchToolbarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  action?: React.ReactNode;
};

export default function SearchToolbar({
  value,
  onChange,
  placeholder = "Search...",
  action,
}: SearchToolbarProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-md">
        <Search
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
        />

        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="pl-10"
        />
      </div>

      {action}
    </div>
  );
}