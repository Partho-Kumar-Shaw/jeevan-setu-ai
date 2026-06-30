import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { FileUp, Sparkles, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/reports")({
  head: () => ({ meta: [{ title: "AI Report Analyzer · JeevanSetu AI" }] }),
  component: Reports,
});

const findings = [
  { name: "Hemoglobin", value: "11.2", unit: "g/dL", range: "12 – 16", status: "low" },
  { name: "Blood Sugar (Fasting)", value: "118", unit: "mg/dL", range: "70 – 100", status: "high" },
  { name: "HbA1c", value: "6.0", unit: "%", range: "< 5.7", status: "high" },
  { name: "Total Cholesterol", value: "186", unit: "mg/dL", range: "< 200", status: "ok" },
  { name: "Vitamin D", value: "22", unit: "ng/mL", range: "30 – 50", status: "low" },
  { name: "TSH", value: "2.4", unit: "mIU/L", range: "0.4 – 4.0", status: "ok" },
];

function Reports() {
  return (
    <AppShell>
      <PageHeader
        title="AI Report Analyzer"
        subtitle="Upload any lab report — get a plain-language explanation in seconds"
      />
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-4">
          <motion.div
            whileHover={{ y: -2 }}
            className="relative overflow-hidden rounded-3xl border-2 border-dashed border-brand/30 bg-gradient-to-br from-brand/5 to-brand-secondary/5 p-10 text-center"
          >
            <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30">
              <FileUp className="size-7" />
            </div>
            <h3 className="mt-4 text-lg font-bold">Drop your report here</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              PDF, JPG, PNG · max 10 MB · 100% private
            </p>
            <button className="mt-5 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white">
              Browse files
            </button>
          </motion.div>

          <div className="rounded-3xl bg-card p-5 ring-1 ring-border">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Recently analyzed
            </p>
            <div className="mt-3 space-y-2 text-sm">
              {["CBC + Lipid · 10 Oct", "Thyroid Profile · 22 Aug", "Liver Function · 14 Jul"].map(
                (r) => (
                  <button
                    key={r}
                    className="w-full rounded-xl bg-muted px-3 py-2.5 text-left hover:bg-accent"
                  >
                    {r}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-secondary p-6 text-white">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  AI Summary · CBC + Lipid Panel
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  Mostly healthy. Two values need attention.
                </h3>
              </div>
              <Sparkles className="size-5" />
            </div>
            <p className="mt-3 text-sm text-white/85">
              Your hemoglobin and Vitamin D are below normal — both are very common deficiencies in
              India and easily corrected with diet + supplements. Fasting sugar is in the
              pre-diabetic zone; consider lifestyle changes.
            </p>
          </div>

          <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <h3 className="font-bold">Detailed findings</h3>
            <div className="mt-4 space-y-2">
              {findings.map((f) => (
                <div
                  key={f.name}
                  className="grid grid-cols-12 items-center gap-3 rounded-2xl bg-muted p-3.5"
                >
                  <div className="col-span-5">
                    <p className="font-semibold">{f.name}</p>
                    <p className="text-xs text-muted-foreground">Normal: {f.range}</p>
                  </div>
                  <div className="col-span-3">
                    <p className="text-lg font-bold">
                      {f.value}
                      <span className="ml-1 text-[10px] font-medium text-muted-foreground">
                        {f.unit}
                      </span>
                    </p>
                  </div>
                  <div className="col-span-4 text-right">
                    <span
                      className={
                        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold " +
                        (f.status === "ok"
                          ? "bg-success/10 text-success"
                          : f.status === "low"
                            ? "bg-warning/10 text-warning"
                            : "bg-emergency/10 text-emergency")
                      }
                    >
                      {f.status === "ok" ? (
                        <CheckCircle2 className="size-3" />
                      ) : (
                        <AlertTriangle className="size-3" />
                      )}
                      {f.status === "ok" ? "Normal" : f.status === "low" ? "Low" : "High"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-100">
              <h4 className="font-bold text-emerald-900">Recommended foods</h4>
              <p className="mt-2 text-sm text-emerald-900/80">
                Spinach, beetroot, dates, ragi, lentils, dairy & 15 min sunlight daily.
              </p>
            </div>
            <div className="rounded-2xl bg-rose-50 p-5 ring-1 ring-rose-100">
              <h4 className="font-bold text-rose-900">Avoid / reduce</h4>
              <p className="mt-2 text-sm text-rose-900/80">
                Refined sugar, sweetened drinks, white maida, fried snacks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
