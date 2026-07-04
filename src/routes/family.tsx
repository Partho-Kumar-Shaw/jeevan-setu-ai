import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/family")({
  head: () => ({ meta: [{ title: "Family · JeevanSetu AI" }] }),
  component: Family,
});

type Member = { n: string; a: number; init: string; color: string; note: string; next: string };
const seed: Member[] = [
  { n: "Dad", a: 64, init: "DA", color: "bg-brand", note: "BP medication on track", next: "Annual checkup · Nov 5" },
  { n: "Mom", a: 60, init: "MA", color: "bg-success", note: "Diabetes well controlled", next: "Eye test · Nov 12" },
  { n: "Rohit (son)", a: 8, init: "RO", color: "bg-warning", note: "Up to date on vaccines", next: "MMR booster · Dec 1" },
  { n: "Kiara (daughter)", a: 4, init: "KI", color: "bg-emergency", note: "Mild seasonal allergy", next: "Pediatrician · Nov 18" },
];

const palette = ["bg-brand", "bg-success", "bg-warning", "bg-emergency", "bg-purple-500", "bg-sky-500"];

function Family() {
  const [members, setMembers] = useState<Member[]>(seed);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const add = () => {
    if (!name.trim() || !age) {
      toast.error("Please enter a name and age");
      return;
    }
    const init = name.trim().slice(0, 2).toUpperCase();
    setMembers((m) => [
      ...m,
      {
        n: name.trim(),
        a: Number(age),
        init,
        color: palette[m.length % palette.length],
        note: "Profile just added — start tracking",
        next: "Schedule first checkup",
      },
    ]);
    toast.success(`${name} added to family`);
    setName("");
    setAge("");
    setOpen(false);
  };

  return (
    <AppShell>
      <PageHeader
        title="Family Dashboard"
        subtitle="Manage parents, kids and grandparents in one account"
        action={
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-2.5 text-sm font-bold text-white"
          >
            <Plus className="size-4" /> Add member
          </button>
        }
      />

      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl bg-card p-6 ring-1 ring-border"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold">Add family member</h3>
            <div className="mt-4 space-y-3">
              <input
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full rounded-xl bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand/40"
              />
              <input
                value={age}
                onChange={(e) => setAge(e.target.value.replace(/\D/g, ""))}
                placeholder="Age"
                className="w-full rounded-xl bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="rounded-xl bg-muted px-4 py-2 text-xs font-bold"
              >
                Cancel
              </button>
              <button
                onClick={add}
                className="rounded-xl bg-brand px-4 py-2 text-xs font-bold text-white"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {members.map((m) => (
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
              <button
                onClick={() => toast(`Opening ${m.n}'s health profile`)}
                className="text-xs font-bold text-brand"
              >
                View →
              </button>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
