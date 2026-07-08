"use client";

import type {
  Organization,
  OrganizationStatus,
} from "@prisma/client";

import {
  MoreHorizontal,
  Eye,
  Pencil,
  Archive,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

type Props = {
  organization: Organization;

  onView: (organization: Organization) => void;

  onEdit: (organization: Organization) => void;

  onArchive: (organization: Organization) => void;

  onStatusChange: (
    organization: Organization,
    status: OrganizationStatus
  ) => void;
};

export default function OrganizationActions({
  organization,
  onView,
  onEdit,
  onArchive,
  onStatusChange,
}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon-sm"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        }
      />

      <DropdownMenuContent align="end">

        <DropdownMenuItem
          onClick={() => onView(organization)}
        >
          <Eye className="h-4 w-4" />
          View Details
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => onEdit(organization)}
        >
          <Pencil className="h-4 w-4" />
          Edit
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <ShieldCheck className="h-4 w-4" />
            Change Status
          </DropdownMenuSubTrigger>

          <DropdownMenuSubContent>

            <DropdownMenuItem
              onClick={() =>
                onStatusChange(
                  organization,
                  "ACTIVE"
                )
              }
            >
              Active
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() =>
                onStatusChange(
                  organization,
                  "INACTIVE"
                )
              }
            >
              Inactive
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() =>
                onStatusChange(
                  organization,
                  "SUSPENDED"
                )
              }
            >
              Suspended
            </DropdownMenuItem>

          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          variant="destructive"
          onClick={() => onArchive(organization)}
        >
          <Archive className="h-4 w-4" />
          Archive
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}