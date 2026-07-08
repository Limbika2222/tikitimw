"use client";

import type { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type CreateOrganizationDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

export default function CreateOrganizationDialog({
  open,
  onOpenChange,
  children,
}: CreateOrganizationDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className="
          w-[95vw]
          max-w-6xl
          h-[90vh]
          max-h-[90vh]
          overflow-hidden
          border
          border-zinc-800
          bg-zinc-950
          p-0
          text-white
        "
      >
        <div className="flex h-full flex-col overflow-hidden">
          <DialogHeader
            className="
              flex-shrink-0
              border-b
              border-zinc-800
              px-8
              py-6
            "
          >
            <DialogTitle className="text-2xl font-semibold">
              Create Organization
            </DialogTitle>

            <DialogDescription className="text-zinc-400">
              Create a new organization and invite its primary administrator.
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto px-8 py-6">
            {children}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}