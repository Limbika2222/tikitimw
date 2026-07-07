import { ReactNode } from "react";

import AppShell from "@/components/layout/AppShell";
import AdminSidebar from "@/components/layout/AdminSidebar";
import AdminTopbar from "@/components/layout/AdminTopbar";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AppShell
      sidebar={<AdminSidebar />}
      topbar={<AdminTopbar />}
    >
      {children}
    </AppShell>
  );
}