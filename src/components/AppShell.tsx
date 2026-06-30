import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useTheme } from "@/hooks/use-theme";
import {
  Activity,
  Baby,
  Bell,
  Bot,
  Brain,
  Calendar,
  Droplet,
  FileSearch,
  FolderHeart,
  Heart,
  Home,
  Hospital,
  Leaf,
  Moon,
  Pill,
  ScanLine,
  Search,
  Settings,
  ShieldCheck,
  Siren,
  Stethoscope,
  Sun,
  User,
  Users,
} from "lucide-react";

const groups: { label: string; items: { to: string; label: string; icon: typeof Home }[] }[] = [
  {
    label: "Overview",
    items: [
      { to: "/dashboard", label: "Dashboard", icon: Home },
      { to: "/assistant", label: "AI Copilot", icon: Bot },
      { to: "/analytics", label: "Analytics", icon: Activity },
    ],
  },
  {
    label: "Care",
    items: [
      { to: "/doctors", label: "Doctors", icon: Stethoscope },
      { to: "/hospitals", label: "Hospitals", icon: Hospital },
      { to: "/locker", label: "Health Locker", icon: FolderHeart },
      { to: "/reports", label: "AI Reports", icon: FileSearch },
      { to: "/scanner", label: "Med Scanner", icon: ScanLine },
      { to: "/medicines", label: "Medicines", icon: Pill },
    ],
  },
  {
    label: "Family & Specialty",
    items: [
      { to: "/family", label: "Family Hub", icon: Users },
      { to: "/women", label: "Women's Health", icon: Heart },
      { to: "/children", label: "Children", icon: Baby },
      { to: "/mental", label: "Mental Wellness", icon: Brain },
      { to: "/lifestyle", label: "Lifestyle", icon: Leaf },
    ],
  },
  {
    label: "Services",
    items: [
      { to: "/blood", label: "Blood & Organ", icon: Droplet },
      { to: "/diseases", label: "Disease Explorer", icon: Search },
      { to: "/schemes", label: "Govt Schemes", icon: ShieldCheck },
      { to: "/sos", label: "Emergency SOS", icon: Siren },
    ],
  },
  {
    label: "You",
    items: [
      { to: "/profile", label: "Profile", icon: User },
      { to: "/notifications", label: "Notifications", icon: Bell },
      { to: "/settings", label: "Settings", icon: Settings },
    ],
  },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-surface">
      <div className="flex">
        <aside className="hidden lg:flex sticky top-0 h-screen w-64 shrink-0 flex-col border-r border-border bg-card px-4 py-5 overflow-y-auto">
          <Link to="/dashboard" className="flex items-center gap-3 px-2 mb-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-brand shadow-lg shadow-brand/20">
              <div className="size-5 rounded-full border-2 border-white" />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight">
                JeevanSetu <span className="text-brand">AI</span>
              </h1>
              <p className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                Health OS
              </p>
            </div>
          </Link>

          <nav className="flex flex-col gap-5">
            {groups.map((g) => (
              <div key={g.label}>
                <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {g.label}
                </p>
                <div className="flex flex-col gap-0.5">
                  {g.items.map((item) => {
                    const active = pathname === item.to;
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={
                          "relative flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors " +
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
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-6 rounded-2xl bg-slate-950 p-4 text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
              PMJAY Active
            </p>
            <p className="mt-1 text-sm font-bold">₹5 Lakh cover</p>
            <p className="mt-1 text-[11px] text-white/60">
              Cashless at 25,000+ hospitals
            </p>
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          <header className="sticky top-0 z-40 border-b border-border bg-card/70 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4 px-4 md:px-8 py-3">
              <Link to="/dashboard" className="flex items-center gap-2 lg:hidden">
                <div className="flex size-8 items-center justify-center rounded-lg bg-brand">
                  <div className="size-4 rounded-full border-2 border-white" />
                </div>
                <span className="font-bold">JeevanSetu</span>
              </Link>
              <div className="hidden md:flex flex-1 max-w-xl">
                <div className="flex w-full items-center gap-2 rounded-2xl bg-muted px-3 py-2 ring-1 ring-transparent focus-within:ring-brand/40">
                  <Search className="size-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search doctors, medicines, schemes…"
                    className="flex-1 bg-transparent text-sm outline-none"
                  />
                  <kbd className="hidden md:inline rounded bg-card px-1.5 py-0.5 text-[10px] font-bold text-muted-foreground ring-1 ring-border">
                    ⌘K
                  </kbd>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to="/sos"
                  className="hidden sm:inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emergency/30 hover:scale-[1.02] transition-transform"
                >
                  <Siren className="size-3.5" /> SOS
                </Link>
                <button
                  onClick={toggle}
                  className="grid size-9 place-items-center rounded-full bg-muted text-foreground hover:bg-accent"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
                </button>
                <Link
                  to="/notifications"
                  className="relative grid size-9 place-items-center rounded-full bg-muted hover:bg-accent"
                >
                  <Bell className="size-4" />
                  <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-emergency" />
                </Link>
                <Link
                  to="/profile"
                  className="size-9 rounded-full bg-gradient-to-br from-brand to-brand-secondary ring-2 ring-card flex items-center justify-center text-white text-xs font-bold"
                >
                  AS
                </Link>
              </div>
            </div>
          </header>

          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="px-4 md:px-8 py-6 md:py-8 pb-24 lg:pb-8"
          >
            {children}
          </motion.main>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-border bg-card/90 backdrop-blur-xl px-6 py-2 lg:hidden">
        <div className="flex items-center justify-between">
          {[
            { to: "/dashboard", label: "Home", icon: Home },
            { to: "/locker", label: "Locker", icon: FolderHeart },
            { to: "/sos", label: "SOS", icon: Siren, primary: true },
            { to: "/assistant", label: "AI", icon: Bot },
            { to: "/profile", label: "Me", icon: User },
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

export function GradientCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-secondary p-7 text-white shadow-2xl shadow-brand/20 " +
        className
      }
    >
      <div className="absolute -right-16 -top-16 size-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 size-56 rounded-full bg-white/5 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
