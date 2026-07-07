import {
  BarChart3,
  Building2,
  CalendarDays,
  CreditCard,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";

export const adminNavigation = [
  {
    section: "MAIN",
    items: [
      {
        title: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Organizations",
        href: "/admin/organizations",
        icon: Building2,
      },
      {
        title: "Events",
        href: "/admin/events",
        icon: CalendarDays,
      },
      {
        title: "Users",
        href: "/admin/users",
        icon: Users,
      },
      {
        title: "Payments",
        href: "/admin/payments",
        icon: CreditCard,
      },
    ],
  },
  {
    section: "TOOLS",
    items: [
      {
        title: "Analytics",
        href: "/admin/analytics",
        icon: BarChart3,
      },
      {
        title: "Settings",
        href: "/admin/settings",
        icon: Settings,
      },
    ],
  },
];