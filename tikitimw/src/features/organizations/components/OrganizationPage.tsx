"use client";

import PageHeader from "@/components/data-display/PageHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";
import LoadingState from "@/components/feedback/LoadingState";
import ErrorState from "@/components/feedback/ErrorState";
import EmptyState from "@/components/feedback/EmptyState";

import OrganizationTable from "./OrganizationTable";
import { useOrganizations } from "../hooks/useOrganizations";

export default function OrganizationPage() {
  const {
    data: organizations,
    isLoading,
    error,
  } = useOrganizations();

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState />;
  }

  if (!organizations || organizations.length === 0) {
    return (
      <main className="min-h-screen bg-zinc-950 p-8 text-white">
        <PageHeader
          title="Organizations"
          description="Manage all organizations on the TikitiMW platform."
          action={
            <PrimaryButton>
              + New Organization
            </PrimaryButton>
          }
        />

        <EmptyState
          title="No organizations yet"
          description="Create your first organization to get started."
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <PageHeader
        title="Organizations"
        description="Manage all organizations on the TikitiMW platform."
        action={
          <PrimaryButton>
            + New Organization
          </PrimaryButton>
        }
      />

      <OrganizationTable organizations={organizations} />
    </main>
  );
}