import SidebarHeader from "./sidebar/SidebarHeader";
import SidebarNav from "./sidebar/SidebarNav";
import SidebarUser from "./sidebar/SidebarUser";

export default function AdminSidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-800/60 bg-[#0B0B0F]">
      <SidebarHeader />

      <SidebarNav />

      <SidebarUser />
    </aside>
  );
}