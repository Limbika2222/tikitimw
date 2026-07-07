import { useQuery } from "@tanstack/react-query";

import {
  getOrganizations,
  OrganizationQuery,
} from "../api/organization.api";

export function useOrganizations(
  query: OrganizationQuery = {}
) {
  return useQuery({
    queryKey: ["organizations", query],
    queryFn: () => getOrganizations(query),
  });
}