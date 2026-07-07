"use client";

import { useState } from "react";

import PageHeader from "@/components/data-display/PageHeader";
import SearchToolbar from "@/components/data-display/SearchToolbar";
import PrimaryButton from "@/components/ui/PrimaryButton";

import LoadingState from "@/components/feedback/LoadingState";
import ErrorState from "@/components/feedback/ErrorState";
import EmptyState from "@/components/feedback/EmptyState";

import OrganizationTable from "./OrganizationTable";

import { useOrganizations } from "../hooks/useOrganizations";

export default function OrganizationPage() {
  const [search, setSearch] = useState("");

  const {
    data: organizations,
    isLoading,
    error,
  } = useOrganizations({
    search,
  });

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState />;
  }

  return (
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
          <PrimaryButton>
            + New Organization
          </PrimaryButton>
        }
      />

      {!organizations || organizations.length === 0 ? (
        <EmptyState
          title="No organizations yet"
          description="Create your first organization to get started."
          action={
            <PrimaryButton>
              + New Organization
            </PrimaryButton>
          }
        />
      ) : (
        <OrganizationTable
          organizations={organizations}
        />
      )}
    </main>
  );
}