import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { Bell, Calendar, CheckCircle2, FileText, Pill, Siren } from "lucide-react";

export const Route = createFileRoute("/notifications")({
  head: () => ({ meta: [{ title: "Notifications · JeevanSetu AI" }] }),
  component: Notifications,
});

const items = [
  { i: <Pill />, t: "Take Metformin 500mg", d: "Due in 30 minutes", c: "warning", time: "now" },
  { i: <Calendar />, t: "Appointment confirmed", d: "Dr. Kavita Rao · Tomorrow 6:30 PM", c: "brand", time: "1h" },
  { i: <FileText />, t: "Lab report ready", d: "CBC + Lipid panel · Tap to view AI summary", c: "success", time: "3h" },
  { i: <Siren />, t: "Family alert · Mom", d: "BP reading higher than usual (148/95)", c: "emergency", time: "5h" },
  { i: <Bell />, t: "Vaccination due", d: "Rohit · MMR booster · Dec 1", c: "warning", time: "1d" },
  { i: <CheckCircle2 />, t: "Insurance renewed", d: "PMJAY benefits active for next year", c: "success", time: "2d" },
];

const colors: Record<string, string> = {
  warning: "bg-warning/10 text-warning",
  brand: "bg-brand/10 text-brand",
  success: "bg-success/10 text-success",
  emergency: "bg-emergency/10 text-emergency",
};

function Notifications() {
  return (
    <AppShell>
      <PageHeader
        title="Notifications"
        subtitle="Medicine, appointments, reports & family alerts"
        action={
          <button className="rounded-xl bg-muted px-4 py-2 text-xs font-bold">
            Mark all read
          </button>
        }
      />

      <div className="mb-5 flex flex-wrap gap-2">
        {["All", "Medicine", "Appointments", "Reports", "Family", "Schemes"].map((t, i) => (
          <button
            key={t}
            className={
              "rounded-full px-4 py-1.5 text-xs font-bold " +
              (i === 0
                ? "bg-brand text-white"
                : "bg-card ring-1 ring-border text-muted-foreground hover:bg-muted")
            }
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {items.map((n) => (
          <div
            key={n.t}
            className="flex items-start gap-4 rounded-2xl bg-card p-4 ring-1 ring-border hover:shadow-md transition-shadow"
          >
            <div className={`grid size-11 place-items-center rounded-xl ${colors[n.c]}`}>
              {n.i}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-bold">{n.t}</p>
                <span className="text-[10px] font-bold text-muted-foreground">{n.time}</span>
              </div>
              <p className="text-sm text-muted-foreground">{n.d}</p>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
