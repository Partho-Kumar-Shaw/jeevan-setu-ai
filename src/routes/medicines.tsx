import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { Pill } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/medicines")({
  head: () => ({ meta: [{ title: "Medicines · JeevanSetu AI" }] }),
  component: Medicines,
});

type Reminder = { t: string; n: string; taken: boolean };
const initial: Reminder[] = [
  { t: "08:00", n: "Amlodipine 5mg", taken: true },
  { t: "13:00", n: "Metformin 500mg", taken: true },
  { t: "20:00", n: "Metformin 500mg", taken: false },
  { t: "21:30", n: "Vitamin D3", taken: false },
];

const channels = ["WhatsApp · +91 98xx", "Voice call", "SMS", "Family caregiver"];

function Medicines() {
  const [reminders, setReminders] = useState<Reminder[]>(initial);
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    "WhatsApp · +91 98xx": true,
    "Voice call": true,
    "SMS": true,
    "Family caregiver": true,
  });

  const markTaken = (i: number) => {
    setReminders((r) =>
      r.map((x, idx) => (idx === i ? { ...x, taken: !x.taken } : x)),
    );
    if (!reminders[i].taken) toast.success(`${reminders[i].n} marked as taken`);
  };

  return (
    <AppShell>
      <PageHeader
        title="Medicine Reminders"
        subtitle="Smart notifications · voice & WhatsApp alerts"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-card p-7 ring-1 ring-border">
          <h3 className="font-bold">Today's schedule</h3>
          <div className="mt-5 space-y-3">
            {reminders.map((r, i) => (
              <div
                key={r.t}
                className={
                  "flex items-center gap-4 rounded-2xl p-4 ring-1 " +
                  (r.taken
                    ? "bg-success/5 ring-success/20"
                    : "bg-muted ring-border")
                }
              >
                <div className="grid size-12 place-items-center rounded-xl bg-card ring-1 ring-border text-xs font-bold">
                  {r.t}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{r.n}</p>
                  <p className="text-xs text-muted-foreground">
                    {r.taken ? "Taken on time" : "Upcoming"}
                  </p>
                </div>
                <button
                  onClick={() => markTaken(i)}
                  className={
                    "rounded-full px-4 py-1.5 text-xs font-bold " +
                    (r.taken
                      ? "bg-success/10 text-success"
                      : "bg-brand text-white")
                  }
                >
                  {r.taken ? "✓ Done" : "Mark"}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-secondary p-7 text-white">
            <Pill className="size-7" />
            <h3 className="mt-3 text-xl font-bold">Adherence: 92%</h3>
            <p className="mt-1 text-sm text-white/80">
              Excellent! You've taken 28 of 30 doses on time this week.
            </p>
          </div>
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <h4 className="font-bold">Refills due soon</h4>
            <div className="mt-4 space-y-3 text-sm">
              <Refill name="Amlodipine 5mg" days={3} />
              <Refill name="Vitamin D3" days={8} />
              <Refill name="Metformin 500mg" days={12} />
            </div>
          </div>
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <h4 className="font-bold">Notification channels</h4>
            <div className="mt-3 space-y-2 text-sm">
              {channels.map((c) => (
                <div
                  key={c}
                  className="flex items-center justify-between rounded-xl bg-muted px-3 py-2"
                >
                  <span>{c}</span>
                  <button
                    onClick={() => {
                      setEnabled((e) => ({ ...e, [c]: !e[c] }));
                      toast(
                        `${c} ${!enabled[c] ? "enabled" : "disabled"}`,
                      );
                    }}
                    className={
                      "h-5 w-9 rounded-full p-0.5 transition-colors " +
                      (enabled[c] ? "bg-brand" : "bg-card ring-1 ring-border")
                    }
                  >
                    <div
                      className={
                        "size-4 rounded-full bg-white shadow transition-transform " +
                        (enabled[c] ? "translate-x-4" : "translate-x-0")
                      }
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Refill({ name, days }: { name: string; days: number }) {
  const urgent = days <= 5;
  return (
    <div className="flex items-center justify-between rounded-xl bg-muted p-3">
      <span className="font-semibold">{name}</span>
      <div className="flex items-center gap-2">
        <span
          className={
            "rounded-full px-2.5 py-1 text-[10px] font-bold " +
            (urgent ? "bg-emergency/10 text-emergency" : "bg-warning/10 text-warning")
          }
        >
          {days} days left
        </span>
        <button
          onClick={() =>
            toast.success(`Refill ordered for ${name}`, {
              description: "Delivering by tomorrow evening",
            })
          }
          className="rounded-full bg-brand px-3 py-1 text-[10px] font-bold text-white"
        >
          Refill
        </button>
      </div>
    </div>
  );
}
