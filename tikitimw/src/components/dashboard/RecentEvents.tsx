import DashboardSection from "./DashboardSection";

const events = [
  {
    name: "Lake of Stars",
    date: "25 Jul 2026",
    tickets: 1254,
    revenue: "MWK 8.4M",
    status: "Published",
  },
  {
    name: "Mzuzu Marathon",
    date: "04 Aug 2026",
    tickets: 842,
    revenue: "MWK 3.1M",
    status: "Draft",
  },
  {
    name: "Sand Music Festival",
    date: "18 Sep 2026",
    tickets: 2312,
    revenue: "MWK 9.7M",
    status: "Sold Out",
  },
];

const statusClasses: Record<string, string> = {
  Published: "bg-emerald-500/10 text-emerald-400",
  Draft: "bg-amber-500/10 text-amber-400",
  "Sold Out": "bg-red-500/10 text-red-400",
};

export default function RecentEvents() {
  return (
    <DashboardSection
      title="Recent Events"
      subtitle="Latest events on the platform"
    >
      <div className="overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-950/40 shadow-[0_1px_0_rgba(255,255,255,0.02),0_20px_50px_rgba(0,0,0,0.18)]">
        <table className="w-full border-separate border-spacing-0">
          <thead className="bg-zinc-900/80">
            <tr className="text-left text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Tickets</th>
              <th className="px-4 py-2">Revenue</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-800/70">
            {events.map((event) => (
              <tr
                key={event.name}
                className="transition-colors duration-200 hover:bg-zinc-900/55"
              >
                <td className="px-4 py-3 text-sm font-medium text-white">
                  <div className="leading-5">{event.name}</div>
                </td>

                <td className="whitespace-nowrap px-4 py-3 text-sm text-zinc-400">
                  {event.date}
                </td>

                <td className="whitespace-nowrap px-4 py-3 text-sm text-zinc-400">
                  {event.tickets.toLocaleString()}
                </td>

                <td className="whitespace-nowrap px-4 py-3 text-sm text-white">
                  {event.revenue}
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${statusClasses[event.status]}`}
                  >
                    {event.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardSection>
  );
}