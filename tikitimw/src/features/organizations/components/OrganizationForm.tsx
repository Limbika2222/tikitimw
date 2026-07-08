"use client";

import { useState } from "react";

import FormSection from "@/components/forms/FormSection";
import FormRow from "@/components/forms/FormRow";
import TextField from "@/components/forms/TextField";
import PhoneField from "@/components/forms/PhoneField";
import TextAreaField from "@/components/forms/TextAreaField";
import PrimaryButton from "@/components/ui/PrimaryButton";

import { useCreateOrganization } from "../hooks/useCreateOrganization";

import type { CreateOrganizationInput } from "../schemas/createOrganization.schema";

type OrganizationFormProps = {
  onSuccess?: () => void;
  onCancel?: () => void;
};

const initialForm: CreateOrganizationInput = {
  organization: {
    name: "",
    slug: "",
    email: "",
    phone: "",
    website: "",
    logoUrl: "",
    address: "",
    country: "Malawi",
    city: "",
  },

  admin: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },

  sendInvitation: true,
};

export default function OrganizationForm({
  onSuccess,
  onCancel,
}: OrganizationFormProps) {
  const [form, setForm] =
    useState<CreateOrganizationInput>(initialForm);
  const [slugEdited, setSlugEdited] = useState(false);
  const [error, setError] = useState("");

  const createOrganization =
    useCreateOrganization();

  function updateOrganization(
    field: keyof CreateOrganizationInput["organization"],
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      organization: {
        ...prev.organization,
        [field]: value,
      },
    }));
  }

  function updateOrganizationName(value: string) {
    setForm((prev) => ({
      ...prev,
      organization: {
        ...prev.organization,
        name: value,
      },
    }));

    // Only auto-generate slug if the user hasn't manually edited it
    if (!slugEdited) {
      const slug = value
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "") // Remove special characters
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-") // Replace multiple hyphens with single
        .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

      setForm((prev) => ({
        ...prev,
        organization: {
          ...prev.organization,
          slug: slug,
        },
      }));
    }
  }

  function updateAdmin(
    field: keyof CreateOrganizationInput["admin"],
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      admin: {
        ...prev.admin,
        [field]: value,
      },
    }));
  }

  const handleCancel = () => {
    setForm(initialForm);
    setError("");
    setSlugEdited(false);
    onCancel?.();
  };

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    setError("");

    try {
      await createOrganization.mutateAsync(form);

      // Reset form state
      setForm(initialForm);
      setSlugEdited(false);
      setError("");

      // Call success callback (closes dialog in parent)
      onSuccess?.();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unexpected error. Failed to create organization."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Error Display */}
      {error && (
        <div className="rounded-lg border border-red-800 bg-red-950/50 p-4 text-sm text-red-300">
          <p className="flex items-start gap-2">
            <span className="mt-0.5">⚠️</span>
            <span>{error}</span>
          </p>
        </div>
      )}

      <FormSection
        title="Organization Information"
        description="Basic details about the organization."
      >
        <FormRow>
          <TextField
            label="Organization Name"
            placeholder="TikitiMW"
            value={form.organization.name}
            onChange={(e) =>
              updateOrganizationName(e.target.value)
            }
            required
            disabled={createOrganization.isPending}
          />

          <TextField
            label="Slug"
            placeholder="tikitimw"
            value={form.organization.slug}
            onChange={(e) => {
              setSlugEdited(true);
              updateOrganization("slug", e.target.value);
            }}
            required
            disabled={createOrganization.isPending}
          />
        </FormRow>

        <FormRow>
          <TextField
            label="Email"
            type="email"
            placeholder="info@example.com"
            value={form.organization.email ?? ""}
            onChange={(e) =>
              updateOrganization("email", e.target.value)
            }
            disabled={createOrganization.isPending}
          />

          <PhoneField
            label="Phone"
            value={form.organization.phone ?? ""}
            onChange={(e) =>
              updateOrganization("phone", e.target.value)
            }
            disabled={createOrganization.isPending}
          />
        </FormRow>

        <FormRow>
          <TextField
            label="Website"
            type="url"
            placeholder="https://example.com"
            value={form.organization.website ?? ""}
            onChange={(e) =>
              updateOrganization("website", e.target.value)
            }
            disabled={createOrganization.isPending}
          />

          {/* Logo Upload */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">
              Organization Logo
            </label>

            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/svg+xml"
              className="block w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-zinc-300 file:mr-4 file:rounded-xl file:border-0 file:bg-violet-600 file:px-4 file:py-2 file:text-white hover:file:bg-violet-500"
              disabled={createOrganization.isPending}
            />

            <p className="text-xs text-zinc-500">
              PNG, JPG, WEBP or SVG. Maximum 2 MB.
            </p>
          </div>
        </FormRow>

        <FormRow>
          <TextField
            label="Country"
            value={form.organization.country}
            onChange={(e) =>
              updateOrganization("country", e.target.value)
            }
            required
            disabled={createOrganization.isPending}
          />

          <TextField
            label="City"
            placeholder="Blantyre"
            value={form.organization.city}
            onChange={(e) =>
              updateOrganization("city", e.target.value)
            }
            required
            disabled={createOrganization.isPending}
          />
        </FormRow>

        <FormRow columns={1}>
          <TextAreaField
            label="Address"
            placeholder="Enter the organization's physical address..."
            rows={4}
            value={form.organization.address ?? ""}
            onChange={(e) =>
              updateOrganization("address", e.target.value)
            }
            disabled={createOrganization.isPending}
          />
        </FormRow>
      </FormSection>

      <FormSection
        title="Primary Administrator"
        description="This user will become the Super Administrator for the organization."
      >
        <FormRow>
          <TextField
            label="First Name"
            placeholder="John"
            value={form.admin.firstName}
            onChange={(e) =>
              updateAdmin("firstName", e.target.value)
            }
            required
            disabled={createOrganization.isPending}
          />

          <TextField
            label="Last Name"
            placeholder="Doe"
            value={form.admin.lastName}
            onChange={(e) =>
              updateAdmin("lastName", e.target.value)
            }
            required
            disabled={createOrganization.isPending}
          />
        </FormRow>

        <FormRow>
          <TextField
            label="Email"
            type="email"
            placeholder="john@example.com"
            value={form.admin.email}
            onChange={(e) =>
              updateAdmin("email", e.target.value)
            }
            required
            disabled={createOrganization.isPending}
          />

          <PhoneField
            label="Phone"
            value={form.admin.phone ?? ""}
            onChange={(e) =>
              updateAdmin("phone", e.target.value)
            }
            disabled={createOrganization.isPending}
          />
        </FormRow>
      </FormSection>

      <FormSection
        title="Invitation"
        description="Choose whether to send an invitation email to the administrator."
      >
        <label className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
          <input
            type="checkbox"
            checked={form.sendInvitation}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                sendInvitation: e.target.checked,
              }))
            }
            className="h-4 w-4 rounded border-zinc-700 accent-violet-600"
            disabled={createOrganization.isPending}
          />

          <span className="text-sm text-zinc-300">
            Send invitation email after creating the organization.
          </span>
        </label>
      </FormSection>

      <div className="flex justify-end gap-3 border-t border-zinc-800 pt-6">
        <PrimaryButton
          type="button"
          className="bg-zinc-800 hover:bg-zinc-700"
          onClick={handleCancel}
          disabled={createOrganization.isPending}
        >
          Cancel
        </PrimaryButton>

        <PrimaryButton
          type="submit"
          loading={createOrganization.isPending}
        >
          {createOrganization.isPending
            ? "Creating..."
            : "Create Organization"}
        </PrimaryButton>
      </div>
    </form>
  );
}