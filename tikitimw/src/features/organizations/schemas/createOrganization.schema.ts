import { z } from "zod";

export const createOrganizationSchema = z.object({
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

  country: z.string().min(2),

  city: z.string().min(2),
});

export type CreateOrganizationInput =
  z.infer<typeof createOrganizationSchema>;