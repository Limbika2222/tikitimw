import { prisma } from "@/lib/prisma";

import type { CreateOrganizationInput } from "../schemas/createOrganization.schema";

export class OrganizationOnboardingService {
  async onboard(data: CreateOrganizationInput) {
    return prisma.$transaction(async (tx) => {
      const organization = await tx.organization.create({
        data: {
          name: data.organization.name,
          slug: data.organization.slug,
          email: data.organization.email || null,
          phone: data.organization.phone || null,
          website: data.organization.website || null,
          address: data.organization.address || null,
          logoUrl: data.organization.logoUrl || null,
          country: data.organization.country,
          city: data.organization.city,
        },
      });

      return {
        success: true,
        organization,
      };
    });
  }
}

export const organizationOnboardingService =
  new OrganizationOnboardingService();