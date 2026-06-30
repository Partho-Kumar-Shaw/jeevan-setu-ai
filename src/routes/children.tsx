import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { Baby, Syringe } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Route = createFileRoute("/children")({
  head: () => ({ meta: [{ title: "Children's Health · JeevanSetu AI" }] }),
  component: Children,
});

const growth = Array.from({ length: 12 }).map((_, i) => ({
  m: `${i}m`,
  h: 50 + i * 2.4,
  w: 3.5 + i * 0.6,
}));

const vaccines = [
  { n: "BCG", age: "At birth", done: true },
  { n: "Hepatitis B", age: "6 weeks", done: true },
  { n: "OPV", age: "6 weeks", done: true },
  { n: "DPT booster", age: "16 weeks", done: true },
  { n: "MMR", age: "9 months", done: true },
  { n: "MMR booster", age: "15 months", done: false, due: "Dec 1, 2025" },
  { n: "DPT booster 2", age: "5 years", done: false, due: "Mar 2026" },
];

function Children() {
  return (
    <AppShell>
      <PageHeader
        title="Children's Healthcare"
        subtitle="Growth, vaccinations and development for Rohit (8 yrs)"
      />
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-3xl bg-card p-7 ring-1 ring-border">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">Growth chart</h3>
                <p className="text-xs text-muted-foreground">Height (cm) · Weight (kg)</p>
              </div>
              <div className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">
                Healthy
              </div>
            </div>
            <div className="mt-4 h-60">
              <ResponsiveContainer>
                <LineChart data={growth}>
                  <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="m" tickLine={false} axisLine={false} fontSize={11} />
                  <YAxis tickLine={false} axisLine={false} fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid var(--color-border)",
                      background: "var(--color-card)",
                      fontSize: 12,
                    }}
                  />
                  <Line type="monotone" dataKey="h" stroke="var(--color-brand)" strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="w" stroke="var(--color-success)" strokeWidth={2.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl bg-card p-7 ring-1 ring-border">
            <h3 className="mb-4 font-bold">Vaccination timeline</h3>
            <div className="space-y-2">
              {vaccines.map((v) => (
                <div
                  key={v.n}
                  className={
                    "flex items-center gap-4 rounded-2xl p-3.5 " +
                    (v.done ? "bg-success/5" : "bg-warning/5")
                  }
                >
                  <div
                    className={
                      "grid size-10 place-items-center rounded-xl " +
                      (v.done ? "bg-success text-white" : "bg-warning text-white")
                    }
                  >
                    <Syringe className="size-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{v.n}</p>
                    <p className="text-xs text-muted-foreground">{v.age}</p>
                  </div>
                  <span className="text-xs font-bold">
                    {v.done ? "✓ Done" : `Due ${v.due}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 p-7 text-white">
            <Baby className="size-7" />
            <h3 className="mt-3 text-xl font-bold">Development milestones</h3>
            <p className="mt-1 text-sm text-white/85">
              Rohit is meeting all expected milestones for an 8-year-old.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              {["Reads independently", "Rides bicycle", "Tells time", "Solves multi-step problems"].map(
                (m) => (
                  <div key={m} className="flex items-center gap-2">
                    <div className="size-5 rounded-full bg-white/20 grid place-items-center text-[10px]">
                      ✓
                    </div>
                    {m}
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <h4 className="font-bold">School health record</h4>
            <div className="mt-3 space-y-2 text-sm">
              <Row k="Last checkup" v="22 Aug 2025" />
              <Row k="Eye test" v="20/20" />
              <Row k="Dental" v="No cavities" />
              <Row k="Allergies" v="Peanuts (mild)" />
            </div>
          </div>
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <h4 className="font-bold">Nutrition today</h4>
            <div className="mt-3 grid grid-cols-3 gap-3 text-center text-xs">
              <Nut label="Protein" v="32g" />
              <Nut label="Calcium" v="780mg" />
              <Nut label="Iron" v="9mg" />
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-semibold">{v}</span>
    </div>
  );
}
function Nut({ label, v }: { label: string; v: string }) {
  return (
    <div className="rounded-xl bg-muted p-3">
      <p className="text-base font-bold">{v}</p>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}
