"use client";

import { useState } from "react";

export default function OrganizationForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    slug: "",
    email: "",
    phone: "",
    country: "Malawi",
    city: "",
  });

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "/api/admin/organizations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      alert("Organization created successfully.");

      setForm({
        name: "",
        slug: "",
        email: "",
        phone: "",
        country: "Malawi",
        city: "",
      });
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3"
        placeholder="Organization Name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <input
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3"
        placeholder="Slug"
        value={form.slug}
        onChange={(e) =>
          setForm({
            ...form,
            slug: e.target.value,
          })
        }
      />

      <input
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) =>
          setForm({
            ...form,
            phone: e.target.value,
          })
        }
      />

      <input
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3"
        placeholder="City"
        value={form.city}
        onChange={(e) =>
          setForm({
            ...form,
            city: e.target.value,
          })
        }
      />

      <button
        disabled={loading}
        className="w-full rounded-xl bg-violet-600 py-3 font-semibold hover:bg-violet-500"
      >
        {loading ? "Creating..." : "Create Organization"}
      </button>
    </form>
  );
}