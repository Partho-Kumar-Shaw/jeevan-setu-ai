import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  Activity,
  Bot,
  Calendar,
  Droplet,
  FolderHeart,
  Home,
  Hospital,
  Pill,
  ScanLine,
  Settings,
  Siren,
  Users,
} from "lucide-react";

const nav = [
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/assistant", label: "AI Assistant", icon: Bot },
  { to: "/hospitals", label: "Hospitals", icon: Hospital },
  { to: "/doctors", label: "Doctors", icon: Calendar },
  { to: "/locker", label: "Health Locker", icon: FolderHeart },
  { to: "/scanner", label: "Med Scanner", icon: ScanLine },
  { to: "/medicines", label: "Medicines", icon: Pill },
  { to: "/blood", label: "Blood Bank", icon: Droplet },
  { to: "/analytics", label: "Analytics", icon: Activity },
  { to: "/family", label: "Family", icon: Users },
  { to: "/sos", label: "SOS", icon: Siren },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-surface">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex sticky top-0 h-screen w-64 shrink-0 flex-col border-r border-border bg-card px-4 py-6">
          <Link to="/dashboard" className="flex items-center gap-3 px-2 mb-8">
            <div className="flex size-10 items-center justify-center rounded-xl bg-brand shadow-lg shadow-brand/20">
              <div className="size-5 rounded-full border-2 border-white" />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight">
                JeevanSetu <span className="text-brand">AI</span>
              </h1>
              <p className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                Health Super App
              </p>
            </div>
          </Link>

          <nav className="flex flex-col gap-1">
            {nav.map((item) => {
              const active =
                pathname === item.to || pathname.startsWith(item.to + "/");
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors " +
                    (active
                      ? "bg-brand text-brand-foreground shadow-sm shadow-brand/20"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground")
                  }
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-2xl bg-slate-950 p-4 text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
              PMJAY Active
            </p>
            <p className="mt-1 text-sm font-bold">₹5 Lakh cover</p>
            <p className="mt-1 text-[11px] text-white/60">
              Cashless at 25,000+ hospitals
            </p>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          <header className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-md">
            <div className="flex items-center justify-between gap-4 px-4 md:px-8 py-3">
              <Link to="/dashboard" className="flex items-center gap-2 lg:hidden">
                <div className="flex size-8 items-center justify-center rounded-lg bg-brand">
                  <div className="size-4 rounded-full border-2 border-white" />
                </div>
                <span className="font-bold">JeevanSetu</span>
              </Link>
              <div className="hidden md:flex flex-1 max-w-xl">
                <input
                  type="text"
                  placeholder="Search doctors, medicines, labs, hospitals..."
                  className="w-full rounded-2xl border-none bg-muted py-2.5 px-4 text-sm outline-none focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div className="flex items-center gap-3">
                <Link
                  to="/sos"
                  className="hidden sm:inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emergency/30 hover:scale-[1.02] transition-transform"
                >
                  <Siren className="size-3.5" /> SOS
                </Link>
                <button className="flex size-9 items-center justify-center rounded-full bg-muted text-xs font-bold">
                  EN
                </button>
                <div className="size-9 rounded-full bg-gradient-to-br from-brand to-brand-secondary ring-2 ring-card flex items-center justify-center text-white text-xs font-bold">
                  AS
                </div>
              </div>
            </div>
          </header>

          <main className="px-4 md:px-8 py-6 md:py-8 pb-24 lg:pb-8">{children}</main>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-border bg-card px-6 py-2 lg:hidden">
        <div className="flex items-center justify-between">
          {[
            { to: "/dashboard", label: "Home", icon: Home },
            { to: "/locker", label: "Records", icon: FolderHeart },
            { to: "/sos", label: "SOS", icon: Siren, primary: true },
            { to: "/assistant", label: "Chat", icon: Bot },
            { to: "/settings", label: "Profile", icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            const active = pathname === item.to;
            if (item.primary) {
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="-mt-7 flex size-14 items-center justify-center rounded-full bg-emergency text-white shadow-xl shadow-emergency/40"
                >
                  <Icon className="size-6" />
                </Link>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to}
                className={
                  "flex flex-col items-center gap-1 py-1 " +
                  (active ? "text-brand" : "text-muted-foreground")
                }
              >
                <Icon className="size-5" />
                <span className="text-[10px] font-bold">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}
