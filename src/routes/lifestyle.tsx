import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { Droplets, Dumbbell, Flame, Moon, Salad } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/lifestyle")({
  head: () => ({ meta: [{ title: "Lifestyle · JeevanSetu AI" }] }),
  component: Lifestyle,
});

const meals = [
  { t: "Breakfast", food: "Vegetable upma + banana", kcal: 380 },
  { t: "Lunch", food: "Roti, dal, sabzi, salad", kcal: 540 },
  { t: "Snack", food: "Almonds + green tea", kcal: 180 },
  { t: "Dinner", food: "Brown rice, palak paneer", kcal: 520 },
];

function Ring({
  value,
  max,
  color,
  label,
  unit,
}: {
  value: number;
  max: number;
  color: string;
  label: string;
  unit: string;
}) {
  const pct = Math.min(value / max, 1);
  const c = 2 * Math.PI * 36;
  return (
    <div className="flex flex-col items-center rounded-2xl bg-card p-5 ring-1 ring-border">
      <svg viewBox="0 0 80 80" className="size-24 -rotate-90">
        <circle cx="40" cy="40" r="36" stroke="var(--color-muted)" strokeWidth="8" fill="none" />
        <motion.circle
          cx="40"
          cy="40"
          r="36"
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - pct) }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>
      <p className="mt-2 text-xl font-extrabold">{value}</p>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {label} · {unit}
      </p>
    </div>
  );
}

function Lifestyle() {
  return (
    <AppShell>
      <PageHeader title="Lifestyle" subtitle="Diet, workout, yoga, hydration & sleep" />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 mb-6">
        <Ring value={8420} max={10000} color="var(--color-brand)" label="Steps" unit="today" />
        <Ring value={1620} max={2000} color="var(--color-success)" label="Calories" unit="kcal" />
        <Ring value={2.1} max={3} color="var(--color-warning)" label="Water" unit="L" />
        <Ring value={7.4} max={8} color="var(--color-emergency)" label="Sleep" unit="hrs" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
          <div className="mb-4 flex items-center gap-2">
            <div className="grid size-10 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
              <Salad className="size-5" />
            </div>
            <h3 className="font-bold">Today's diet plan</h3>
          </div>
          <div className="space-y-3">
            {meals.map((m) => (
              <div
                key={m.t}
                className="flex items-center justify-between rounded-2xl bg-muted p-3.5"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {m.t}
                  </p>
                  <p className="font-semibold">{m.food}</p>
                </div>
                <span className="text-sm font-bold">{m.kcal} kcal</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl bg-brand/10 p-3 text-brand">
            <span className="text-xs font-bold uppercase tracking-widest">Total</span>
            <span className="font-bold">1,620 / 2,000 kcal</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-rose-500 p-6 text-white">
            <Dumbbell className="size-7" />
            <h3 className="mt-3 text-xl font-bold">Today's workout</h3>
            <p className="mt-1 text-sm text-white/85">
              45 min · Functional strength · Beginner
            </p>
            <button className="mt-4 rounded-xl bg-white px-5 py-2 text-sm font-bold text-rose-600">
              Start now
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Tile icon={<Flame />} title="Calories burned" v="412 kcal" color="text-orange-500" />
            <Tile icon={<Droplets />} title="Hydration" v="2.1 L" color="text-sky-500" />
            <Tile icon={<Moon />} title="Sleep score" v="92 / 100" color="text-violet-500" />
            <Tile icon={<Dumbbell />} title="Streak" v="14 days" color="text-emerald-500" />
          </div>
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <h4 className="font-bold">10-min yoga · Surya Namaskar</h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Perfect for morning energy + flexibility.
            </p>
            <div className="mt-3 grid grid-cols-6 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-gradient-to-br from-amber-200 to-orange-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Tile({
  icon,
  title,
  v,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  v: string;
  color: string;
}) {
  return (
    <div className="rounded-2xl bg-card p-5 ring-1 ring-border">
      <div className={color}>{icon}</div>
      <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <p className="text-lg font-extrabold">{v}</p>
    </div>
  );
}
