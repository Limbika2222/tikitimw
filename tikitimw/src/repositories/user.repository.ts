import { prisma } from "@/lib/prisma";

export class UserRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        organization: true,
        role: true,
      },
    });
  }

  async findById(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        organization: true,
        role: true,
      },
    });
  }

  async create(data: {
    organizationId: string;
    roleId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    passwordHash: string;
  }) {
    return prisma.user.create({
      data,
    });
  }
}

export const userRepository = new UserRepository();