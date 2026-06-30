import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { FileText, Search, Upload } from "lucide-react";

export const Route = createFileRoute("/locker")({
  head: () => ({ meta: [{ title: "Health Locker · JeevanSetu AI" }] }),
  component: Locker,
});

const docs = [
  { t: "MRI Scan – Knee", d: "Max Hospital · 22 Aug 2025", tag: "Imaging", color: "bg-purple-100 text-purple-700" },
  { t: "CBC Blood Report", d: "Lal Path Labs · 10 Oct 2025", tag: "Lab", color: "bg-emerald-100 text-emerald-700" },
  { t: "Cardiology Prescription", d: "Dr. Kavita · 14 Sep 2025", tag: "Rx", color: "bg-blue-100 text-blue-700" },
  { t: "COVID Vaccine Cert.", d: "CoWIN · 14 Oct 2025", tag: "Vaccine", color: "bg-amber-100 text-amber-700" },
  { t: "Lipid Profile", d: "Dr. Lal · 02 Jul 2025", tag: "Lab", color: "bg-emerald-100 text-emerald-700" },
  { t: "Eye Test Report", d: "Lenskart Vision · 12 Mar 2025", tag: "Imaging", color: "bg-purple-100 text-purple-700" },
];

const summary = [
  { k: "Reports", v: 24 },
  { k: "Prescriptions", v: 18 },
  { k: "Vaccinations", v: 9 },
  { k: "Allergies", v: 2 },
];

function Locker() {
  return (
    <AppShell>
      <PageHeader
        title="Digital Health Locker"
        subtitle="Every report, prescription & vaccination — searchable & private"
        action={
          <button className="inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-2.5 text-sm font-bold text-white">
            <Upload className="size-4" /> Upload
          </button>
        }
      />

      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {summary.map((s) => (
          <div key={s.k} className="rounded-2xl bg-card p-5 ring-1 ring-border">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {s.k}
            </p>
            <p className="mt-2 text-3xl font-extrabold">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="mb-5 flex items-center gap-2 rounded-2xl bg-card p-2 ring-1 ring-border">
        <Search className="ml-2 size-4 text-muted-foreground" />
        <input
          placeholder="Search reports, doctors, dates…"
          className="flex-1 bg-transparent px-2 py-2 text-sm outline-none"
        />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {docs.map((d) => (
          <div
            key={d.t}
            className="flex items-center gap-4 rounded-2xl bg-card p-4 ring-1 ring-border hover:shadow-md"
          >
            <div className="grid size-12 place-items-center rounded-xl bg-muted">
              <FileText className="size-5 text-brand" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">{d.t}</h4>
              <p className="text-xs text-muted-foreground">{d.d}</p>
            </div>
            <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${d.color}`}>
              {d.tag}
            </span>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
