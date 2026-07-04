import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { Bell, Calendar, CheckCircle2, FileText, Pill, Siren } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/notifications")({
  head: () => ({ meta: [{ title: "Notifications · JeevanSetu AI" }] }),
  component: Notifications,
});

type Item = {
  id: number;
  cat: string;
  i: React.ReactNode;
  t: string;
  d: string;
  c: string;
  time: string;
};

const seed: Item[] = [
  { id: 1, cat: "Medicine", i: <Pill />, t: "Take Metformin 500mg", d: "Due in 30 minutes", c: "warning", time: "now" },
  { id: 2, cat: "Appointments", i: <Calendar />, t: "Appointment confirmed", d: "Dr. Kavita Rao · Tomorrow 6:30 PM", c: "brand", time: "1h" },
  { id: 3, cat: "Reports", i: <FileText />, t: "Lab report ready", d: "CBC + Lipid panel · Tap to view AI summary", c: "success", time: "3h" },
  { id: 4, cat: "Family", i: <Siren />, t: "Family alert · Mom", d: "BP reading higher than usual (148/95)", c: "emergency", time: "5h" },
  { id: 5, cat: "Medicine", i: <Bell />, t: "Vaccination due", d: "Rohit · MMR booster · Dec 1", c: "warning", time: "1d" },
  { id: 6, cat: "Schemes", i: <CheckCircle2 />, t: "Insurance renewed", d: "PMJAY benefits active for next year", c: "success", time: "2d" },
];

const colors: Record<string, string> = {
  warning: "bg-warning/10 text-warning",
  brand: "bg-brand/10 text-brand",
  success: "bg-success/10 text-success",
  emergency: "bg-emergency/10 text-emergency",
};

const tabs = ["All", "Medicine", "Appointments", "Reports", "Family", "Schemes"];

function Notifications() {
  const [items, setItems] = useState<Item[]>(seed);
  const [tab, setTab] = useState("All");
  const [read, setRead] = useState<Set<number>>(new Set());

  const filtered = useMemo(
    () => (tab === "All" ? items : items.filter((i) => i.cat === tab)),
    [items, tab],
  );

  return (
    <AppShell>
      <PageHeader
        title="Notifications"
        subtitle="Medicine, appointments, reports & family alerts"
        action={
          <div className="flex gap-2">
            <button
              onClick={() => {
                setRead(new Set(items.map((i) => i.id)));
                toast.success("All notifications marked as read");
              }}
              className="rounded-xl bg-muted px-4 py-2 text-xs font-bold"
            >
              Mark all read
            </button>
            <button
              onClick={() => {
                setItems([]);
                toast("Notifications cleared");
              }}
              className="rounded-xl bg-card ring-1 ring-border px-4 py-2 text-xs font-bold"
            >
              Clear
            </button>
          </div>
        }
      />

      <div className="mb-5 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={
              "rounded-full px-4 py-1.5 text-xs font-bold " +
              (tab === t
                ? "bg-brand text-white"
                : "bg-card ring-1 ring-border text-muted-foreground hover:bg-muted")
            }
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.length === 0 && (
          <div className="rounded-2xl bg-card p-8 text-center text-sm text-muted-foreground ring-1 ring-border">
            You're all caught up ✨
          </div>
        )}
        {filtered.map((n) => {
          const isRead = read.has(n.id);
          return (
            <button
              key={n.id}
              onClick={() => {
                setRead((r) => new Set(r).add(n.id));
                toast(n.t, { description: n.d });
              }}
              className={
                "flex w-full items-start gap-4 rounded-2xl p-4 ring-1 hover:shadow-md transition-shadow text-left " +
                (isRead ? "bg-muted/50 ring-border/50" : "bg-card ring-border")
              }
            >
              <div className={`grid size-11 place-items-center rounded-xl ${colors[n.c]}`}>
                {n.i}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className={"font-bold " + (isRead ? "text-muted-foreground" : "")}>
                    {n.t}
                  </p>
                  <span className="text-[10px] font-bold text-muted-foreground">{n.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{n.d}</p>
              </div>
            </button>
          );
        })}
      </div>
    </AppShell>
  );
}
