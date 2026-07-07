export type OrganizationQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  sortBy?: "name" | "createdAt";
  sortOrder?: "asc" | "desc";
};

const BASE_URL = "/api/admin/organizations";

function buildQueryString(query: OrganizationQuery = {}) {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.set(key, String(value));
    }
  });

  return params.toString();
}

export async function getOrganizations(
  query: OrganizationQuery = {}
) {
  const qs = buildQueryString(query);

  const response = await fetch(
    qs ? `${BASE_URL}?${qs}` : BASE_URL
  );

  if (!response.ok) {
    throw new Error("Failed to fetch organizations.");
  }

  return response.json();
}

export async function getOrganization(id: string) {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch organization.");
  }

  return response.json();
}

export async function createOrganization(data: unknown) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create organization.");
  }

  return response.json();
}

export async function updateOrganization(
  id: string,
  data: unknown
) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update organization.");
  }

  return response.json();
}

export async function deleteOrganization(id: string) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete organization.");
  }

  return response.json();
}