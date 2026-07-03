export function SidebarLogo() {
  return (
    <div className="px-4 py-5">
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-br
            from-violet-500
            to-violet-700
            text-xl
            font-bold
            shadow-lg
            shadow-violet-900/40
          "
        >
          T
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight">
            TikitiMW
          </h1>

          <p className="text-xs text-zinc-500">
            Organizer Platform
          </p>
        </div>
      </div>
    </div>
  );
}