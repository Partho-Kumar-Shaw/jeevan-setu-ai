import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { FileText, Search, Upload } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/locker")({
  head: () => ({ meta: [{ title: "Health Locker · JeevanSetu AI" }] }),
  component: Locker,
});

type Doc = { t: string; d: string; tag: string; color: string };
const seed: Doc[] = [
  { t: "MRI Scan – Knee", d: "Max Hospital · 22 Aug 2025", tag: "Imaging", color: "bg-purple-100 text-purple-700" },
  { t: "CBC Blood Report", d: "Lal Path Labs · 10 Oct 2025", tag: "Lab", color: "bg-emerald-100 text-emerald-700" },
  { t: "Cardiology Prescription", d: "Dr. Kavita · 14 Sep 2025", tag: "Rx", color: "bg-blue-100 text-blue-700" },
  { t: "COVID Vaccine Cert.", d: "CoWIN · 14 Oct 2025", tag: "Vaccine", color: "bg-amber-100 text-amber-700" },
  { t: "Lipid Profile", d: "Dr. Lal · 02 Jul 2025", tag: "Lab", color: "bg-emerald-100 text-emerald-700" },
  { t: "Eye Test Report", d: "Lenskart Vision · 12 Mar 2025", tag: "Imaging", color: "bg-purple-100 text-purple-700" },
];

function Locker() {
  const [docs, setDocs] = useState<Doc[]>(seed);
  const [query, setQuery] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(
    () =>
      docs.filter(
        (d) =>
          d.t.toLowerCase().includes(query.toLowerCase()) ||
          d.d.toLowerCase().includes(query.toLowerCase()) ||
          d.tag.toLowerCase().includes(query.toLowerCase()),
      ),
    [docs, query],
  );

  const summary = [
    { k: "Reports", v: docs.filter((d) => d.tag === "Lab").length + 22 },
    { k: "Prescriptions", v: docs.filter((d) => d.tag === "Rx").length + 17 },
    { k: "Vaccinations", v: docs.filter((d) => d.tag === "Vaccine").length + 8 },
    { k: "Allergies", v: 2 },
  ];

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setDocs((d) => [
      { t: f.name, d: `Uploaded · ${new Date().toLocaleDateString()}`, tag: "Rx", color: "bg-blue-100 text-blue-700" },
      ...d,
    ]);
    toast.success("Document added to your locker");
    e.target.value = "";
  };

  return (
    <AppShell>
      <PageHeader
        title="Digital Health Locker"
        subtitle="Every report, prescription & vaccination — searchable & private"
        action={
          <button
            onClick={() => fileRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-2.5 text-sm font-bold text-white"
          >
            <Upload className="size-4" /> Upload
          </button>
        }
      />
      <input ref={fileRef} type="file" className="hidden" onChange={onFile} />

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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search reports, doctors, dates…"
          className="flex-1 bg-transparent px-2 py-2 text-sm outline-none"
        />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-sm text-muted-foreground py-8">
            No documents match "{query}".
          </p>
        )}
        {filtered.map((d) => (
          <button
            key={d.t + d.d}
            onClick={() => toast(d.t, { description: d.d })}
            className="flex items-center gap-4 rounded-2xl bg-card p-4 ring-1 ring-border hover:shadow-md text-left"
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
          </button>
        ))}
      </div>
    </AppShell>
  );
}
