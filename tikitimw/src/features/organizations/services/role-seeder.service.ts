import { Prisma, RoleType } from "@prisma/client";

export class RoleSeederService {
  async seed(
    tx: Prisma.TransactionClient,
    organizationId: string
  ) {
    return tx.role.createManyAndReturn({
      data: [
        {
          organizationId,
          name: "Super Administrator",
          type: RoleType.SUPER_ADMIN,
          description:
            "Full access to the organization.",
        },
        {
          organizationId,
          name: "Administrator",
          type: RoleType.ADMIN,
          description:
            "Administrative access.",
        },
        {
          organizationId,
          name: "Organizer",
          type: RoleType.ORGANIZER,
          description:
            "Creates and manages events.",
        },
        {
          organizationId,
          name: "Staff",
          type: RoleType.STAFF,
          description:
            "Organization staff.",
        },
        {
          organizationId,
          name: "Scanner",
          type: RoleType.SCANNER,
          description:
            "Scans tickets at entry.",
        },
      ],
    });
  }
}

export const roleSeederService =
  new RoleSeederService();