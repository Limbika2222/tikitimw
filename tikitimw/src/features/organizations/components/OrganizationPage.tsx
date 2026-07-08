"use client";

import { useState } from "react";
import type {
  Organization,
  OrganizationStatus,
} from "@prisma/client";

import PageHeader from "@/components/data-display/PageHeader";
import SearchToolbar from "@/components/data-display/SearchToolbar";
import PrimaryButton from "@/components/ui/PrimaryButton";

import LoadingState from "@/components/feedback/LoadingState";
import ErrorState from "@/components/feedback/ErrorState";
import EmptyState from "@/components/feedback/EmptyState";

import OrganizationTable from "./OrganizationTable";
import OrganizationForm from "./OrganizationForm";
import CreateOrganizationDialog from "./CreateOrganizationDialog";
import OrganizationDetailsDrawer from "./OrganizationDetailsDrawer";

import { useOrganizations } from "../hooks/useOrganizations";

export default function OrganizationPage() {
  const [search, setSearch] = useState("");

  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [detailsOpen, setDetailsOpen] =
    useState(false);

  const [selectedOrganization, setSelectedOrganization] =
    useState<Organization | null>(null);

  const {
    data: organizations,
    isLoading,
    error,
    refetch,
  } = useOrganizations({
    search,
  });

  function handleView(
    organization: Organization
  ) {
    setSelectedOrganization(organization);
    setDetailsOpen(true);
  }

  function handleEdit(
    organization: Organization
  ) {
    console.log("Edit", organization.id);
  }

  function handleArchive(
    organization: Organization
  ) {
    console.log("Archive", organization.id);
  }

  function handleStatusChange(
    organization: Organization,
    status: OrganizationStatus
  ) {
    console.log(
      "Status",
      organization.id,
      status
    );
  }

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState />;
  }

  return (
    <>
      <main className="min-h-screen bg-zinc-950 p-8 text-white">
        <PageHeader
          title="Organizations"
          description="Manage all organizations on the TikitiMW platform."
        />

        <SearchToolbar
          value={search}
          onChange={setSearch}
          placeholder="Search organizations..."
          action={
            <PrimaryButton
              type="button"
              onClick={() =>
                setDialogOpen(true)
              }
            >
              + New Organization
            </PrimaryButton>
          }
        />

        {!organizations ||
        organizations.length === 0 ? (
          <EmptyState
            title="No organizations yet"
            description="Create your first organization to get started."
            action={
              <PrimaryButton
                type="button"
                onClick={() =>
                  setDialogOpen(true)
                }
              >
                + New Organization
              </PrimaryButton>
            }
          />
        ) : (
          <OrganizationTable
            organizations={organizations}
            onView={handleView}
            onEdit={handleEdit}
            onArchive={handleArchive}
            onStatusChange={
              handleStatusChange
            }
          />
        )}
      </main>

      <CreateOrganizationDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      >
        <OrganizationForm
          onSuccess={() => {
            setDialogOpen(false);
            refetch();
          }}
          onCancel={() =>
            setDialogOpen(false)
          }
        />
      </CreateOrganizationDialog>

      <OrganizationDetailsDrawer
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        organization={selectedOrganization}
      />
    </>
  );
}