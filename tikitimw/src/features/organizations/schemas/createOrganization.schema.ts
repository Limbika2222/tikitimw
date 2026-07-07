import { z } from "zod";

export const createOrganizationSchema = z.object({
  organization: z.object({
    name: z.string().min(3).max(100),

    slug: z
      .string()
      .min(3)
      .max(50)
      .regex(/^[a-z0-9-]+$/, {
        message:
          "Slug may only contain lowercase letters, numbers and hyphens.",
      }),

    email: z.string().email().optional(),

    phone: z.string().optional(),

    website: z.string().url().optional().or(z.literal("")),

    address: z.string().optional(),

    logoUrl: z.string().optional(),

    country: z.string().min(2),

    city: z.string().min(2),
  }),

  admin: z.object({
    firstName: z.string().min(2).max(50),

    lastName: z.string().min(2).max(50),

    email: z.string().email(),

    phone: z.string().optional(),
  }),

  sendInvitation: z.boolean().default(true),
});

export type CreateOrganizationInput =
  z.infer<typeof createOrganizationSchema>;