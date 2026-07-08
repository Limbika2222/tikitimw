"use client";

import type { Organization } from "@prisma/client";

import {
  Building2,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type OrganizationDetailsDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  organization: Organization | null;
};

export default function OrganizationDetailsDrawer({
  open,
  onOpenChange,
  organization,
}: OrganizationDetailsDrawerProps) {
  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent
        side="right"
        className="flex h-screen w-full flex-col overflow-hidden border-zinc-800 bg-zinc-950 text-white sm:max-w-2xl"
      >
        <SheetHeader className="flex-shrink-0 border-b border-zinc-800 p-6">
          <SheetTitle className="text-2xl font-semibold text-white">
            Organization Details
          </SheetTitle>

          <SheetDescription>
            View organization information.
          </SheetDescription>
        </SheetHeader>

        {!organization ? (
          <div className="flex h-full items-center justify-center text-zinc-500">
            No organization selected.
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-8">
              {/* Logo */}
              <div className="flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-zinc-900">
                  <Building2 className="h-10 w-10 text-violet-500" />
                </div>
              </div>

              {/* Name */}
              <div className="text-center">
                <h2 className="text-2xl font-bold">
                  {organization.name}
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                  {organization.status}
                </p>
              </div>

              {/* General Information */}
              <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                <h3 className="mb-5 font-semibold">
                  General Information
                </h3>

                <div className="space-y-4">
                  <InfoRow
                    icon={<Mail className="h-4 w-4" />}
                    label="Email"
                    value={organization.email}
                  />

                  <InfoRow
                    icon={<Phone className="h-4 w-4" />}
                    label="Phone"
                    value={organization.phone}
                  />

                  <InfoRow
                    icon={<Globe className="h-4 w-4" />}
                    label="Website"
                    value={organization.website}
                  />

                  <InfoRow
                    icon={<MapPin className="h-4 w-4" />}
                    label="Location"
                    value={`${organization.city}, ${organization.country}`}
                  />

                  <InfoRow
                    icon={<Building2 className="h-4 w-4" />}
                    label="Address"
                    value={organization.address}
                  />
                </div>
              </section>

              {/* Statistics */}
              <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                <h3 className="mb-5 font-semibold">
                  Statistics
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <StatCard
                    label="Events"
                    value="0"
                  />

                  <StatCard
                    label="Staff"
                    value="1"
                  />

                  <StatCard
                    label="Tickets"
                    value="0"
                  />

                  <StatCard
                    label="Revenue"
                    value="MWK 0"
                  />
                </div>
              </section>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

type InfoRowProps = {
  icon: React.ReactNode;
  label: string;
  value?: string | null;
};

function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-violet-400">
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-zinc-500">
          {label}
        </p>

        <p className="text-sm text-white">
          {value || "-"}
        </p>
      </div>
    </div>
  );
}

type StatCardProps = {
  label: string;
  value: string;
};

function StatCard({
  label,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      <p className="text-xs uppercase tracking-wide text-zinc-500">
        {label}
      </p>

      <p className="mt-2 text-xl font-semibold">
        {value}
      </p>
    </div>
  );
}