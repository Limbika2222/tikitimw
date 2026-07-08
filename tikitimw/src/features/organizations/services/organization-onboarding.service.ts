import { prisma } from "@/lib/prisma";
import crypto from "node:crypto";
import { RoleType } from "@prisma/client";

import { roleSeederService } from "./role-seeder.service";

import type { CreateOrganizationInput } from "../schemas/createOrganization.schema";

export class OrganizationOnboardingService {
  async onboard(data: CreateOrganizationInput) {
    return prisma.$transaction(async (tx) => {
      // Step 1
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

      // Step 2
      const roles = await roleSeederService.seed(tx, organization.id);

      const superAdminRole = roles.find(
        (role) => role.type === RoleType.SUPER_ADMIN,
      );

      if (!superAdminRole) {
        throw new Error("SUPER_ADMIN role could not be created.");
      }

      const invitationToken = crypto.randomUUID();
      const invitationExpiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);

      const admin = await tx.user.create({
        data: {
          organizationId: organization.id,
          roleId: superAdminRole.id,
          firstName: data.admin.firstName,
          lastName: data.admin.lastName,
          email: data.admin.email,
          phone: data.admin.phone || null,
          passwordHash: null,
          invitationToken,
          invitationExpiresAt,
        },
      });

      return {
        success: true,
        organization,
        roles,
        admin,
      };
    });
  }
}

export const organizationOnboardingService =
  new OrganizationOnboardingService();