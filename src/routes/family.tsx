import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/family")({
  head: () => ({ meta: [{ title: "Family · JeevanSetu AI" }] }),
  component: Family,
});

const fam = [
  { n: "Dad", a: 64, init: "DA", color: "bg-brand", note: "BP medication on track", next: "Annual checkup · Nov 5" },
  { n: "Mom", a: 60, init: "MA", color: "bg-success", note: "Diabetes well controlled", next: "Eye test · Nov 12" },
  { n: "Rohit (son)", a: 8, init: "RO", color: "bg-warning", note: "Up to date on vaccines", next: "MMR booster · Dec 1" },
  { n: "Kiara (daughter)", a: 4, init: "KI", color: "bg-emergency", note: "Mild seasonal allergy", next: "Pediatrician · Nov 18" },
];

function Family() {
  return (
    <AppShell>
      <PageHeader
        title="Family Dashboard"
        subtitle="Manage parents, kids and grandparents in one account"
        action={
          <button className="inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-2.5 text-sm font-bold text-white">
            <Plus className="size-4" /> Add member
          </button>
        }
      />
      <div className="grid gap-4 md:grid-cols-2">
        {fam.map((m) => (
          <div key={m.n} className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <div className="flex items-center gap-4">
              <div
                className={`grid size-16 place-items-center rounded-2xl text-lg font-extrabold text-white ${m.color}`}
              >
                {m.init}
              </div>
              <div>
                <h3 className="font-bold">{m.n}</h3>
                <p className="text-xs text-muted-foreground">{m.a} years</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-success">
                  Healthy
                </p>
              </div>
            </div>
            <p className="mt-4 rounded-xl bg-muted p-3 text-sm text-muted-foreground">
              {m.note}
            </p>
            <div className="mt-3 flex items-center justify-between rounded-xl bg-brand/5 p-3 ring-1 ring-brand/20">
              <span className="text-xs font-semibold text-brand">{m.next}</span>
              <button className="text-xs font-bold text-brand">View →</button>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
