import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader, GradientCard } from "@/components/AppShell";
import { Calendar, Droplet, Flower2, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/women")({
  head: () => ({ meta: [{ title: "Women's Health · JeevanSetu AI" }] }),
  component: Women,
});

const cycleDays = Array.from({ length: 28 }).map((_, i) => i + 1);

function Women() {
  return (
    <AppShell>
      <PageHeader
        title="Women's Healthcare"
        subtitle="Cycle, fertility, pregnancy and wellness — privately"
      />
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-6">
          <GradientCard className="bg-gradient-to-br from-pink-500 to-rose-400">
            <p className="text-xs font-bold uppercase tracking-widest text-white/70">
              Day 14 · Ovulation
            </p>
            <h2 className="mt-2 text-3xl font-bold">Peak fertility today</h2>
            <p className="mt-2 max-w-md text-white/80">
              Your next period is expected in 14 days. Track symptoms below.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-5 py-2 text-sm font-bold text-rose-600">
                Log symptoms
              </button>
              <button className="rounded-full bg-white/20 px-5 py-2 text-sm font-bold backdrop-blur">
                View predictions
              </button>
            </div>
          </GradientCard>

          <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <h3 className="mb-4 font-bold">Cycle calendar</h3>
            <div className="grid grid-cols-7 gap-2">
              {cycleDays.map((d) => {
                const period = d <= 5;
                const ovulation = d >= 13 && d <= 15;
                return (
                  <motion.div
                    key={d}
                    whileHover={{ scale: 1.05 }}
                    className={
                      "grid aspect-square place-items-center rounded-xl text-xs font-bold " +
                      (period
                        ? "bg-rose-500 text-white"
                        : ovulation
                          ? "bg-emerald-400 text-white"
                          : d === 14
                            ? "bg-emerald-600 text-white ring-2 ring-emerald-300"
                            : "bg-muted text-muted-foreground")
                    }
                  >
                    {d}
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-4 flex gap-4 text-xs">
              <Legend color="bg-rose-500" label="Period" />
              <Legend color="bg-emerald-400" label="Fertile window" />
              <Legend color="bg-emerald-600" label="Ovulation" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <Card icon={<Heart />} title="Pregnancy tracker" subtitle="Not active · tap to start" />
          <Card icon={<Calendar />} title="Next appointment" subtitle="Dr. Ananya Sharma · Nov 12" />
          <Card icon={<Droplet />} title="Vaccination" subtitle="HPV booster due · Dec 2025" />
          <Card icon={<Flower2 />} title="Wellness today" subtitle="20 min yoga · 2L water" />
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <Sparkles className="size-5 text-pink-500" />
            <h4 className="mt-2 font-bold">AI insight</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Your cycle is 4 days shorter than last month. Consider tracking stress &amp; sleep —
              both impact cycle regularity.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <div className={`size-2.5 rounded-full ${color}`} />
      {label}
    </div>
  );
}

function Card({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="flex items-center gap-4 rounded-2xl bg-card p-5 ring-1 ring-border"
    >
      <div className="grid size-11 place-items-center rounded-xl bg-pink-50 text-pink-600">
        {icon}
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </motion.div>
  );
}
