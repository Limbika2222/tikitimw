import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createOrganization } from "../api/organization.api";

export function useCreateOrganization() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createOrganization,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["organizations"],
      });
    },
  });
}