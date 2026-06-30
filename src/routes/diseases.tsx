import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { Search, AlertCircle, Heart, Pill, Salad } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/diseases")({
  head: () => ({ meta: [{ title: "Disease Explorer · JeevanSetu AI" }] }),
  component: Diseases,
});

const diseases = [
  { n: "Diabetes Type 2", cat: "Metabolic", risk: "High in India", color: "bg-amber-50 text-amber-700" },
  { n: "Hypertension", cat: "Cardiac", risk: "Very common", color: "bg-rose-50 text-rose-700" },
  { n: "Asthma", cat: "Respiratory", risk: "Common", color: "bg-sky-50 text-sky-700" },
  { n: "Coronary Heart Disease", cat: "Cardiac", risk: "Leading cause", color: "bg-rose-50 text-rose-700" },
  { n: "Tuberculosis", cat: "Infectious", risk: "Endemic", color: "bg-emerald-50 text-emerald-700" },
  { n: "Anaemia", cat: "Nutritional", risk: "Very common in women", color: "bg-violet-50 text-violet-700" },
  { n: "Dengue Fever", cat: "Vector-borne", risk: "Seasonal", color: "bg-orange-50 text-orange-700" },
  { n: "Thyroid Disorder", cat: "Endocrine", risk: "1 in 10 Indians", color: "bg-teal-50 text-teal-700" },
];

function Diseases() {
  const [selected, setSelected] = useState(diseases[0]);
  const [query, setQuery] = useState("");

  const filtered = diseases.filter((d) =>
    d.n.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <AppShell>
      <PageHeader
        title="Disease Explorer"
        subtitle="Plain-language AI explanations · symptoms, treatment, prevention"
      />
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 rounded-2xl bg-card p-2 ring-1 ring-border">
            <Search className="ml-2 size-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search any disease…"
              className="flex-1 bg-transparent px-2 py-2 text-sm outline-none"
            />
          </div>
          <div className="mt-3 max-h-[60vh] space-y-2 overflow-y-auto pr-1">
            {filtered.map((d) => (
              <motion.button
                key={d.n}
                whileHover={{ x: 4 }}
                onClick={() => setSelected(d)}
                className={
                  "flex w-full items-center justify-between rounded-2xl p-4 text-left ring-1 transition-colors " +
                  (selected.n === d.n
                    ? "bg-brand text-brand-foreground ring-brand"
                    : "bg-card ring-border")
                }
              >
                <div>
                  <p className="font-bold">{d.n}</p>
                  <p
                    className={
                      "text-xs " +
                      (selected.n === d.n ? "text-white/80" : "text-muted-foreground")
                    }
                  >
                    {d.cat} · {d.risk}
                  </p>
                </div>
                <span
                  className={
                    "rounded-full px-2 py-0.5 text-[10px] font-bold " +
                    (selected.n === d.n ? "bg-white/20 text-white" : d.color)
                  }
                >
                  {d.cat}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <motion.div
            key={selected.n}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-gradient-to-br from-brand to-brand-secondary p-7 text-white"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-white/70">
              {selected.cat}
            </p>
            <h2 className="mt-2 text-3xl font-bold">{selected.n}</h2>
            <p className="mt-3 max-w-xl text-white/85">
              {selected.n} affects millions of Indians. With early detection and the right lifestyle
              changes, most cases can be managed effectively without serious complications.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Section icon={<AlertCircle />} title="Common symptoms" items={[
              "Fatigue & low energy",
              "Frequent urination / thirst",
              "Blurred vision",
              "Slow wound healing",
            ]} />
            <Section icon={<Pill />} title="Treatment" items={[
              "Lifestyle modification",
              "Oral medications (metformin)",
              "Regular blood sugar monitoring",
              "Annual eye & kidney screening",
            ]} />
            <Section icon={<Salad />} title="Diet & prevention" items={[
              "High-fibre vegetables, whole grains",
              "Limit refined sugar & maida",
              "30 min brisk walk daily",
              "Maintain BMI under 25",
            ]} />
            <Section icon={<Heart />} title="When to see a doctor" items={[
              "Fasting sugar > 126 mg/dL",
              "Family history of diabetes",
              "Unexplained weight loss",
              "Numbness in feet or hands",
            ]} />
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Section({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl bg-card p-5 ring-1 ring-border">
      <div className="flex items-center gap-2">
        <div className="grid size-9 place-items-center rounded-xl bg-brand/10 text-brand">
          {icon}
        </div>
        <h3 className="font-bold">{title}</h3>
      </div>
      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="text-brand">•</span> {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
