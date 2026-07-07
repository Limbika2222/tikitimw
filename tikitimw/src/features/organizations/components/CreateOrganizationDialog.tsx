"use client";

import { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

export default function CreateOrganizationDialog({
  open,
  onOpenChange,
  children,
}: Props) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-3xl border-zinc-800 bg-zinc-950 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Create Organization
          </DialogTitle>

          <DialogDescription className="text-zinc-400">
            Create a new organization and invite its primary
            administrator.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}