import { prisma } from "@/lib/prisma";

type OrganizationListQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  sortBy?: "name" | "createdAt";
  sortOrder?: "asc" | "desc";
};

export class OrganizationRepository {
  async findAll(query: OrganizationListQuery = {}) {
    const {
      page = 1,
      pageSize = 10,
      search,
      status,
    } = query;

    return prisma.organization.findMany({
      where: {
        ...(status && {
          status,
        }),
        ...(search && {
          OR: [
            {
              name: {
                contains: search,
              },
            },
            {
              slug: {
                contains: search,
              },
            },
            {
              email: {
                contains: search,
              },
            },
            {
              city: {
                contains: search,
              },
            },
          ],
        }),
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findById(id: string) {
    return prisma.organization.findUnique({
      where: {
        id,
      },
    });
  }

  async findBySlug(slug: string) {
    return prisma.organization.findUnique({
      where: {
        slug,
      },
    });
  }

  async create(data: {
    name: string;
    slug: string;
    email?: string;
    phone?: string;
    country: string;
    city: string;
  }) {
    return prisma.organization.create({
      data,
    });
  }

  async update(
    id: string,
    data: Partial<{
      name: string;
      email: string;
      phone: string;
      city: string;
      country: string;
    }>
  ) {
    return prisma.organization.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.organization.delete({
      where: {
        id,
      },
    });
  }
}

export const organizationRepository =
  new OrganizationRepository();