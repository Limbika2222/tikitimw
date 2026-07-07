"use client";

import DataTable, {
  DataTableColumn,
} from "@/components/data-display/DataTable";

type Organization = {
  id: string;
  name: string;
  city: string;
  country: string;
  status: string;
};

type Props = {
  organizations: Organization[];
};

const columns: DataTableColumn<Organization>[] = [
  {
    key: "name",
    title: "Organization",
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