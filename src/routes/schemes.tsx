import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/schemes")({
  head: () => ({ meta: [{ title: "Government Schemes · JeevanSetu AI" }] }),
  component: Schemes,
});

const schemes = [
  {
    n: "Ayushman Bharat – PM-JAY",
    cover: "₹5,00,000 / family / year",
    desc: "World's largest health assurance scheme covering 12+ crore families.",
    you: "Eligible",
    color: "from-emerald-500 to-teal-500",
  },
  {
    n: "ABHA – Health ID",
    cover: "Digital health ID",
    desc: "Your unified health identity linked across hospitals, labs and pharmacies.",
    you: "Active",
    color: "from-brand to-brand-secondary",
  },
  {
    n: "PMSBY – Accident Insurance",
    cover: "₹2,00,000",
    desc: "₹20/year accidental death & disability cover for bank account holders.",
    you: "Apply",
    color: "from-amber-500 to-orange-500",
  },
  {
    n: "Janani Suraksha Yojana",
    cover: "Cash benefit for mothers",
    desc: "Promotes institutional delivery for pregnant women below poverty line.",
    you: "N/A",
    color: "from-pink-500 to-rose-500",
  },
];

function Schemes() {
  return (
    <AppShell>
      <PageHeader
        title="Government Health Schemes"
        subtitle="Eligibility, benefits & step-by-step apply guides — in plain language"
      />

      <div className="mb-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600 p-7 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <ShieldCheck className="size-8" />
            <h3 className="mt-3 text-2xl font-bold">You're eligible for ₹5 Lakh / year</h3>
            <p className="mt-1 text-sm text-white/80">
              Under PM-JAY · 25,000+ empanelled hospitals · cashless treatment.
            </p>
          </div>
          <button className="rounded-2xl bg-white px-6 py-3 text-sm font-bold text-emerald-700">
            View Ayushman Card
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {schemes.map((s) => (
          <div key={s.n} className="overflow-hidden rounded-3xl bg-card ring-1 ring-border">
            <div className={`h-2 bg-gradient-to-r ${s.color}`} />
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold">{s.n}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-brand">
                    {s.cover}
                  </p>
                </div>
                <span
                  className={
                    "rounded-full px-2.5 py-1 text-[10px] font-bold " +
                    (s.you === "Eligible" || s.you === "Active"
                      ? "bg-success/10 text-success"
                      : s.you === "N/A"
                        ? "bg-muted text-muted-foreground"
                        : "bg-brand/10 text-brand")
                  }
                >
                  {s.you}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="rounded-xl bg-foreground px-4 py-2 text-xs font-bold text-background">
                  How to apply
                </button>
                <button className="rounded-xl bg-muted px-4 py-2 text-xs font-bold">
                  Check eligibility
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-3xl bg-card p-7 ring-1 ring-border">
        <h3 className="font-bold">Application checklist for PM-JAY</h3>
        <ol className="mt-4 space-y-3 text-sm">
          {[
            "Verify your SECC 2011 family data",
            "Carry Aadhaar / Ration card to nearest CSC or empanelled hospital",
            "Biometric verification (~5 minutes)",
            "Receive your e-card instantly",
            "Use at any of 25,000+ hospitals — completely cashless",
          ].map((s, i) => (
            <li key={s} className="flex items-start gap-3">
              <div className="grid size-6 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-white">
                {i + 1}
              </div>
              <span className="flex-1">{s}</span>
              <CheckCircle2 className="size-4 text-success" />
            </li>
          ))}
        </ol>
      </div>
    </AppShell>
  );
}
