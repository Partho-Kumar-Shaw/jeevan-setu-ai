import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Route = createFileRoute("/analytics")({
  head: () => ({ meta: [{ title: "Health Analytics · JeevanSetu AI" }] }),
  component: Analytics,
});

const bp = Array.from({ length: 12 }).map((_, i) => ({
  m: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
  sys: 118 + Math.round(Math.sin(i) * 6 + i * 0.4),
  dia: 78 + Math.round(Math.cos(i) * 4),
}));
const sugar = Array.from({ length: 7 }).map((_, i) => ({
  d: ["M", "T", "W", "T", "F", "S", "S"][i],
  v: 100 + Math.round(Math.random() * 30),
}));
const cal = Array.from({ length: 7 }).map((_, i) => ({
  d: ["M", "T", "W", "T", "F", "S", "S"][i],
  v: 1800 + Math.round(Math.random() * 400),
}));

function Analytics() {
  return (
    <AppShell>
      <PageHeader
        title="Health Analytics"
        subtitle="Beautiful charts of your vitals — explained by AI"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <Kpi label="Avg BP" v="120/80" sub="Normal" tone="success" />
        <Kpi label="Avg Sugar" v="112" sub="mg/dL · Slightly high" tone="warning" />
        <Kpi label="Resting HR" v="72" sub="BPM · Optimal" tone="success" />
        <Kpi label="BMI" v="22.4" sub="Healthy weight" tone="success" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Chart title="Blood Pressure · 12 months" sub="Systolic / Diastolic">
          <LineChart data={bp}>
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
            <Line type="monotone" dataKey="sys" stroke="var(--color-brand)" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="dia" stroke="var(--color-success)" strokeWidth={2.5} dot={false} />
          </LineChart>
        </Chart>

        <Chart title="Blood Sugar · Week" sub="Fasting mg/dL">
          <AreaChart data={sugar}>
            <defs>
              <linearGradient id="ga" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--color-warning)" stopOpacity={0.5} />
                <stop offset="100%" stopColor="var(--color-warning)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="d" tickLine={false} axisLine={false} fontSize={11} />
            <YAxis tickLine={false} axisLine={false} fontSize={11} />
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
              stroke="var(--color-warning)"
              strokeWidth={2.5}
              fill="url(#ga)"
            />
          </AreaChart>
        </Chart>

        <Chart title="Calories burned" sub="kcal · Week">
          <BarChart data={cal}>
            <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="d" tickLine={false} axisLine={false} fontSize={11} />
            <YAxis tickLine={false} axisLine={false} fontSize={11} />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid var(--color-border)",
                background: "var(--color-card)",
                fontSize: 12,
              }}
            />
            <Bar dataKey="v" fill="var(--color-brand)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </Chart>

        <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-secondary p-7 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-white/70">
            AI Report
          </p>
          <h3 className="mt-2 text-xl font-bold leading-snug">
            "Your cardiovascular health improved 14% in 3 months."
          </h3>
          <ul className="mt-5 space-y-2 text-sm text-white/80">
            <li>• Systolic BP dropped from 132 → 120</li>
            <li>• Resting heart rate down from 78 → 72</li>
            <li>• Watch fasting sugar — trending slightly above 110</li>
          </ul>
        </div>
      </div>
    </AppShell>
  );
}

function Kpi({
  label,
  v,
  sub,
  tone,
}: {
  label: string;
  v: string;
  sub: string;
  tone: "success" | "warning";
}) {
  return (
    <div className="rounded-2xl bg-card p-5 ring-1 ring-border">
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-3xl font-extrabold">{v}</p>
      <p
        className={
          "mt-1 text-xs font-bold " +
          (tone === "success" ? "text-success" : "text-warning")
        }
      >
        {sub}
      </p>
    </div>
  );
}

function Chart({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children: React.ReactElement;
}) {
  return (
    <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
      <div className="mb-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
