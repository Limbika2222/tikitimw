import { NextRequest, NextResponse } from "next/server";

import { createOrganizationSchema } from "@/features/organizations/schemas/createOrganization.schema";
import { organizationService } from "@/features/organizations/services/organization.service";
import { organizationOnboardingService } from "@/features/organizations/services/organization-onboarding.service";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const page = Number(searchParams.get("page") ?? 1);
    const pageSize = Number(searchParams.get("pageSize") ?? 10);

    const search = searchParams.get("search") ?? undefined;

    const status =
      (searchParams.get("status") as
        | "ACTIVE"
        | "INACTIVE"
        | "SUSPENDED"
        | null) ?? undefined;

    const sortBy =
      (searchParams.get("sortBy") as
        | "name"
        | "createdAt"
        | null) ?? undefined;

    const sortOrder =
      (searchParams.get("sortOrder") as
        | "asc"
        | "desc"
        | null) ?? undefined;

    const organizations =
      await organizationService.getOrganizations({
        page,
        pageSize,
        search,
        status,
        sortBy,
        sortOrder,
      });

    return NextResponse.json(organizations);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Unexpected error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const data = createOrganizationSchema.parse(body);

    const result =
      await organizationOnboardingService.onboard(data);

    return NextResponse.json(result, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Unexpected error",
      },
      {
        status: 400,
      }
    );
  }
}