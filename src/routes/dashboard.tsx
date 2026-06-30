import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import {
  Activity,
  Bot,
  Calendar,
  Droplet,
  FolderHeart,
  Hospital,
  Pill,
  ScanLine,
  Siren,
  Users,
} from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard · JeevanSetu AI" }] }),
  component: Dashboard,
});

const quick = [
  { to: "/doctors", icon: Calendar, label: "Find Doctor", color: "bg-blue-50 text-brand" },
  { to: "/medicines", icon: Pill, label: "Buy Medicines", color: "bg-emerald-50 text-success" },
  { to: "/hospitals", icon: Hospital, label: "Hospitals", color: "bg-purple-50 text-purple-600" },
  { to: "/blood", icon: Droplet, label: "Blood Bank", color: "bg-red-50 text-emergency" },
];

const sugarData = [
  { d: "Mon", v: 108 },
  { d: "Tue", v: 115 },
  { d: "Wed", v: 102 },
  { d: "Thu", v: 120 },
  { d: "Fri", v: 110 },
  { d: "Sat", v: 118 },
  { d: "Sun", v: 112 },
];

function Dashboard() {
  return (
    <AppShell>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          {/* AI Assistant hero */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-secondary p-8 text-white shadow-2xl shadow-brand/20">
            <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  AI Health Assistant
                </p>
                <h2 className="mt-2 text-3xl font-bold leading-tight">Namaste, Anjali.</h2>
                <p className="mt-2 max-w-md text-white/80">
                  "Your blood sugar was slightly high this morning. Shall we adjust your lunch
                  plan?"
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/assistant"
                    className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-brand shadow-sm"
                  >
                    Check symptoms
                  </Link>
                  <Link
                    to="/medicines"
                    className="rounded-full bg-white/20 px-6 py-2.5 text-sm font-bold backdrop-blur-md"
                  >
                    Medicine reminder
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex size-32 items-center justify-center rounded-full bg-white/10 p-2 backdrop-blur-xl">
                <div className="grid size-full place-items-center rounded-full border-4 border-white/30 bg-gradient-to-t from-white/40 to-transparent">
                  <Bot className="size-10 text-white" />
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/10 blur-3xl" />
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {quick.map((q) => {
              const Icon = q.icon;
              return (
                <Link
                  key={q.label}
                  to={q.to}
                  className="group rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border transition-all hover:shadow-md"
                >
                  <div
                    className={`mb-3 flex size-11 items-center justify-center rounded-xl ${q.color}`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <span className="text-sm font-semibold">{q.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Health Journey */}
          <section className="rounded-3xl bg-card p-7 shadow-sm ring-1 ring-border">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold">Health Journey</h3>
              <Link to="/locker" className="text-sm font-bold text-brand">
                View locker →
              </Link>
            </div>
            <div className="space-y-7">
              <TimelineItem
                color="bg-brand"
                date="Today · 10:30 AM"
                title="Physiotherapy Session"
                meta="Apollo Medical Center · Dr. Rajesh Kumar"
              />
              <TimelineItem
                color="bg-success"
                date="14 Oct 2025"
                title="Vaccination Completed"
                meta="Flu Shot Booster · Digital Certificate Issued"
              />
              <TimelineItem
                color="bg-warning"
                date="10 Oct 2025"
                title="Blood Test Results"
                meta='"Hemoglobin slightly low. Suggested: Dates, Spinach, Beetroot."'
                italic
              />
              <TimelineItem
                color="bg-muted-foreground"
                date="22 Aug 2025"
                title="MRI Scan — Knee"
                meta="Max Hospital · Reports uploaded"
              />
            </div>
          </section>

          {/* Sugar chart */}
          <section className="rounded-3xl bg-card p-7 shadow-sm ring-1 ring-border">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Blood Sugar · 7 days</h3>
                <p className="text-xs text-muted-foreground">Fasting · mg/dL</p>
              </div>
              <Link to="/analytics" className="text-sm font-bold text-brand">
                Full analytics →
              </Link>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sugarData}>
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-brand)" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="var(--color-brand)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="d" tickLine={false} axisLine={false} fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid var(--color-border)",
                      background: "var(--color-card)",
                      fontSize: 12,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="v"
                    stroke="var(--color-brand)"
                    strokeWidth={2.5}
                    fill="url(#g1)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="space-y-6 lg:col-span-4">
          {/* SOS */}
          <div className="rounded-3xl bg-emergency/5 p-7 text-center ring-2 ring-emergency/20">
            <div className="mx-auto mb-5 flex size-20 items-center justify-center rounded-full bg-emergency shadow-xl shadow-emergency/40 animate-pulse">
              <Siren className="size-10 text-white" />
            </div>
            <h3 className="text-xl font-extrabold uppercase tracking-tight text-emergency">
              Emergency SOS
            </h3>
            <p className="mt-2 text-sm text-emergency/70">
              Tap for ambulance, hospital alert, and family notification.
            </p>
            <Link
              to="/sos"
              className="mt-5 block w-full rounded-2xl bg-emergency py-3.5 text-sm font-bold text-white shadow-lg"
            >
              PRESS SOS BUTTON
            </Link>
          </div>

          {/* Vitals */}
          <div className="rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border">
            <h3 className="mb-4 font-bold">Live Vitals</h3>
            <div className="space-y-3">
              <Vital color="bg-emergency" label="Heart Rate" value="72" unit="BPM" />
              <Vital color="bg-brand" label="Blood Sugar" value="112" unit="mg/dL" />
              <Vital color="bg-success" label="SpO₂" value="98" unit="%" />
              <Vital color="bg-warning" label="BP" value="120/80" unit="mmHg" />
            </div>
          </div>

          {/* Family */}
          <div className="rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold">Family Hub</h3>
              <Link to="/family" className="text-xs font-bold text-brand">
                Manage →
              </Link>
            </div>
            <div className="flex -space-x-2">
              {["DA", "MA", "RO", "KI"].map((i, idx) => (
                <div
                  key={i}
                  className={`grid size-12 place-items-center rounded-full text-xs font-bold text-white ring-4 ring-card ${
                    ["bg-brand", "bg-success", "bg-warning", "bg-emergency"][idx]
                  }`}
                >
                  {i}
                </div>
              ))}
              <div className="grid size-12 place-items-center rounded-full bg-muted text-xs font-bold text-muted-foreground ring-4 ring-card">
                +2
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-warning/10 p-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-warning">
                Reminder
              </p>
              <p className="mt-1 text-xs font-medium">
                Dad's BP check is due in 30 mins.
              </p>
            </div>
          </div>

          {/* PMJAY */}
          <div className="overflow-hidden rounded-3xl bg-slate-950 p-6 text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
              PMJAY Benefit
            </p>
            <h4 className="mt-2 text-base font-bold">
              You are eligible for ₹5 Lakh cover.
            </h4>
            <p className="mt-2 text-xs text-white/60">
              Use your Ayushman Card at 25,000+ empanelled hospitals.
            </p>
            <button className="mt-4 w-full rounded-xl bg-white/10 py-2 text-xs font-bold backdrop-blur-md">
              View coverage
            </button>
          </div>

          {/* Shortcuts */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { to: "/scanner", icon: ScanLine, label: "Scan Rx" },
              { to: "/locker", icon: FolderHeart, label: "Locker" },
              { to: "/analytics", icon: Activity, label: "Trends" },
              { to: "/family", icon: Users, label: "Family" },
              { to: "/assistant", icon: Bot, label: "AI Chat" },
              { to: "/hospitals", icon: Hospital, label: "Nearby" },
            ].map((s) => {
              const I = s.icon;
              return (
                <Link
                  key={s.label}
                  to={s.to}
                  className="flex flex-col items-center gap-1 rounded-2xl bg-card p-3 text-center ring-1 ring-border hover:bg-muted"
                >
                  <I className="size-4 text-brand" />
                  <span className="text-[11px] font-semibold">{s.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function TimelineItem({
  color,
  date,
  title,
  meta,
  italic,
}: {
  color: string;
  date: string;
  title: string;
  meta: string;
  italic?: boolean;
}) {
  return (
    <div className="relative flex gap-6 pl-4">
      <div className="absolute left-0 top-0 h-full w-px bg-border" />
      <div
        className={`absolute -left-1.5 top-1 size-3 rounded-full ring-2 ring-card ${color}`}
      />
      <div className="flex-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          {date}
        </p>
        <h4 className="mt-1 font-semibold">{title}</h4>
        <p
          className={`mt-0.5 text-sm text-muted-foreground ${italic ? "italic" : ""}`}
        >
          {meta}
        </p>
      </div>
    </div>
  );
}

function Vital({
  color,
  label,
  value,
  unit,
}: {
  color: string;
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-muted p-3.5">
      <div className="flex items-center gap-3">
        <div className={`size-2 rounded-full ${color}`} />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className="text-lg font-bold">
        {value}
        <span className="ml-1 text-[10px] font-medium text-muted-foreground">{unit}</span>
      </span>
    </div>
  );
}
