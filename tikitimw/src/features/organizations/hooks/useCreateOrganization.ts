import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createOrganization } from "../api/organization.api";
import type { CreateOrganizationInput } from "../schemas/createOrganization.schema";

export function useCreateOrganization() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateOrganizationInput) =>
      createOrganization(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["organizations"],
      });
    },
  });
}