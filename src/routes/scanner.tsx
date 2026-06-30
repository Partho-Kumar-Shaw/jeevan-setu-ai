import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { Camera, CheckCircle2, ScanLine } from "lucide-react";

export const Route = createFileRoute("/scanner")({
  head: () => ({ meta: [{ title: "Medicine Scanner · JeevanSetu AI" }] }),
  component: Scanner,
});

const meds = [
  { n: "Metformin 500mg", dose: "1 tablet · twice daily", days: 30, stock: true },
  { n: "Amlodipine 5mg", dose: "1 tablet · morning", days: 30, stock: true },
  { n: "Vitamin D3 60K", dose: "1 sachet · weekly", days: 8, stock: false },
];

function Scanner() {
  return (
    <AppShell>
      <PageHeader
        title="Medicine Scanner"
        subtitle="Scan your prescription — AI extracts every medicine"
      />
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-foreground to-slate-800 p-8 ring-1 ring-border">
            <div className="absolute inset-8 rounded-2xl border-2 border-dashed border-white/30" />
            <div className="absolute inset-x-12 top-1/2 h-0.5 bg-brand-secondary animate-pulse" />
            <div className="relative flex h-full flex-col justify-end text-white">
              <ScanLine className="size-10" />
              <h3 className="mt-3 text-2xl font-bold">Position prescription</h3>
              <p className="mt-1 text-sm text-white/70">
                We'll detect medicines, dosage and duration automatically.
              </p>
              <button className="mt-5 inline-flex items-center gap-2 self-start rounded-2xl bg-brand-secondary px-5 py-3 text-sm font-bold text-slate-950">
                <Camera className="size-4" /> Open camera
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-7">
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-success">
                  ✓ Extracted from prescription
                </p>
                <h3 className="mt-1 text-lg font-bold">Dr. Kavita Rao · 14 Oct 2025</h3>
              </div>
              <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">
                98% confidence
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {meds.map((m) => (
                <div
                  key={m.n}
                  className="flex items-center justify-between rounded-2xl bg-muted p-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-4 text-success" />
                    <div>
                      <p className="font-semibold">{m.n}</p>
                      <p className="text-xs text-muted-foreground">
                        {m.dose} · {m.days} days
                      </p>
                    </div>
                  </div>
                  <span
                    className={
                      "rounded-full px-2.5 py-1 text-[10px] font-bold " +
                      (m.stock
                        ? "bg-success/10 text-success"
                        : "bg-warning/10 text-warning")
                    }
                  >
                    {m.stock ? "In stock" : "Low stock"}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button className="flex-1 rounded-2xl bg-brand py-3 text-sm font-bold text-white">
                Order all medicines — ₹486
              </button>
              <button className="rounded-2xl bg-card px-5 py-3 text-sm font-bold ring-1 ring-border">
                Save to Locker
              </button>
            </div>
          </div>
          <div className="rounded-3xl bg-brand/5 p-5 text-sm ring-1 ring-brand/20">
            <p className="font-bold text-brand">AI safety check</p>
            <p className="mt-1 text-muted-foreground">
              No conflicts detected with your existing medication list. Vitamin D3 should be taken
              with a meal containing fat for best absorption.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
