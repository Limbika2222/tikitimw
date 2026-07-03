import {
  LayoutDashboard,
  CalendarDays,
  Ticket,
  Users,
  Wallet,
  QrCode,
  BarChart3,
  Megaphone,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Events",
    href: "/events",
    icon: CalendarDays,
  },
  {
    title: "Tickets",
    href: "/tickets",
    icon: Ticket,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Payments",
    href: "/payments",
    icon: Wallet,
  },
  {
    title: "Scanner",
    href: "/scanner",
    icon: QrCode,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Marketing",
    href: "/marketing",
    icon: Megaphone,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];