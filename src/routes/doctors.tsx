import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { Calendar, Video } from "lucide-react";

export const Route = createFileRoute("/doctors")({
  head: () => ({ meta: [{ title: "Doctors · JeevanSetu AI" }] }),
  component: Doctors,
});

const doctors = [
  { n: "Dr. Kavita Rao", s: "Cardiologist", exp: "18 yrs", fee: 800, rating: 4.9, slot: "Today 6:30 PM" },
  { n: "Dr. Arjun Mehta", s: "Pediatrician", exp: "12 yrs", fee: 600, rating: 4.8, slot: "Today 7:00 PM" },
  { n: "Dr. Neha Verma", s: "Dermatologist", exp: "9 yrs", fee: 500, rating: 4.7, slot: "Tomorrow 10:00 AM" },
  { n: "Dr. Rajesh Kumar", s: "Orthopedic", exp: "22 yrs", fee: 900, rating: 4.9, slot: "Today 8:30 PM" },
  { n: "Dr. Ananya Sharma", s: "Gynecologist", exp: "14 yrs", fee: 750, rating: 4.8, slot: "Tomorrow 11:00 AM" },
  { n: "Dr. Vikram Singh", s: "General Physician", exp: "16 yrs", fee: 400, rating: 4.7, slot: "Today 5:00 PM" },
];

const specialties = ["General", "Cardio", "Pediatric", "Gynae", "Dermatology", "Ortho", "ENT", "Mental Health"];

function Doctors() {
  return (
    <AppShell>
      <PageHeader title="Book a doctor" subtitle="Video consult or in-person, instant slots" />
      <div className="mb-6 flex flex-wrap gap-2">
        {specialties.map((s, i) => (
          <button
            key={s}
            className={
              "rounded-full px-4 py-1.5 text-xs font-bold " +
              (i === 0
                ? "bg-brand text-white"
                : "bg-card ring-1 ring-border text-muted-foreground hover:bg-muted")
            }
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {doctors.map((d) => (
          <div key={d.n} className="rounded-2xl bg-card p-5 ring-1 ring-border">
            <div className="flex gap-4">
              <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-secondary text-lg font-bold text-white">
                {d.n.split(" ")[1][0]}
                {d.n.split(" ")[2]?.[0] ?? ""}
              </div>
              <div className="flex-1">
                <h3 className="font-bold">{d.n}</h3>
                <p className="text-sm text-muted-foreground">{d.s} · {d.exp}</p>
                <div className="mt-2 flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-warning/10 px-2 py-0.5 font-bold text-warning">
                    ★ {d.rating}
                  </span>
                  <span className="font-semibold">₹{d.fee} consult</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-muted p-3">
              <div className="flex items-center gap-2 text-xs">
                <Calendar className="size-3.5 text-brand" />
                <span className="font-semibold">{d.slot}</span>
              </div>
              <div className="flex gap-2">
                <button className="grid size-9 place-items-center rounded-lg bg-card ring-1 ring-border text-brand">
                  <Video className="size-4" />
                </button>
                <button className="rounded-lg bg-brand px-4 text-xs font-bold text-white">
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
