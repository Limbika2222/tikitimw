"use client";

import DataTable, {
  DataTableColumn,
} from "@/components/data-display/DataTable";

import type { Organization } from "@prisma/client";

type Props = {
  organizations: Organization[];
};

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
];

export default function OrganizationTable({
  organizations,
}: Props) {
  return (
    <DataTable
      columns={columns}
      data={organizations}
      emptyMessage="No organizations found."
    />
  );
}