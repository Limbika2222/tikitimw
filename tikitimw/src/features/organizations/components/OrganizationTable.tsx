"use client";

import type {
  Organization,
  OrganizationStatus,
} from "@prisma/client";

import DataTable, {
  DataTableColumn,
} from "@/components/data-display/DataTable";

import OrganizationActions from "./OrganizationActions";

type Props = {
  organizations: Organization[];

  onView: (organization: Organization) => void;

  onEdit: (organization: Organization) => void;

  onArchive: (organization: Organization) => void;

  onStatusChange: (
    organization: Organization,
    status: OrganizationStatus
  ) => void;
};

export default function OrganizationTable({
  organizations,
  onView,
  onEdit,
  onArchive,
  onStatusChange,
}: Props) {
  const columns: DataTableColumn<Organization>[] = [
    {
      key: "name",
      title: "Organization",
    },
    {
      key: "email",
      title: "Email",
      render: (organization) =>
        organization.email ?? "-",
    },
    {
      key: "city",
      title: "City",
    },
    {
      key: "country",
      title: "Country",
    },
    {
      key: "status",
      title: "Status",
    },
    {
      key: "actions",
      title: "",
      render: (organization) => (
        <div className="flex justify-end">
          <OrganizationActions
            organization={organization}
            onView={onView}
            onEdit={onEdit}
            onArchive={onArchive}
            onStatusChange={onStatusChange}
          />
        </div>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={organizations}
      emptyMessage="No organizations found."
    />
  );
}