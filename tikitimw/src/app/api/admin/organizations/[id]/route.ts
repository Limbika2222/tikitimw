import { NextRequest, NextResponse } from "next/server";

import { organizationService } from "@/features/organizations/services/organization.service";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  _request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const organization =
      await organizationService.getOrganizationById(id);

    if (!organization) {
      return NextResponse.json(
        {
          message: "Organization not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(organization);
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

export async function PATCH(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const body = await request.json();

    const organization =
      await organizationService.updateOrganization(
        id,
        body
      );

    return NextResponse.json(organization);
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

export async function DELETE(
  _request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    await organizationService.deleteOrganization(id);

    return NextResponse.json({
      success: true,
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