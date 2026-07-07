import { organizationRepository } from "../repositories/organization.repository";

type GetOrganizationsOptions = {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  sortBy?: "name" | "createdAt";
  sortOrder?: "asc" | "desc";
};

type CreateOrganizationInput = {
  name: string;
  slug: string;
  email?: string;
  phone?: string;
  country: string;
  city: string;
};

export class OrganizationService {
  async getOrganizations(options: GetOrganizationsOptions = {}) {
    return organizationRepository.findAll(options);
  }

  async getOrganizationById(id: string) {
    return organizationRepository.findById(id);
  }

  async createOrganization(data: CreateOrganizationInput) {
    const existing = await organizationRepository.findBySlug(data.slug);

    if (existing) {
      throw new Error("Organization slug already exists.");
    }

    return organizationRepository.create(data);
  }

  async updateOrganization(
    id: string,
    data: Partial<{
      name: string;
      email: string;
      phone: string;
      city: string;
      country: string;
    }>
  ) {
    return organizationRepository.update(id, data);
  }

  async deleteOrganization(id: string) {
    return organizationRepository.delete(id);
  }
}

export const organizationService = new OrganizationService();