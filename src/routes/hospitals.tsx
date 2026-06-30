import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { Hospital, MapPin, Star } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/hospitals")({
  head: () => ({ meta: [{ title: "Hospitals · JeevanSetu AI" }] }),
  component: Hospitals,
});

const data = [
  { name: "AIIMS Delhi", type: "Government", dist: "2.1 km", icu: 8, rating: 4.8, tags: ["ICU", "Emergency", "Cardiology"] },
  { name: "Apollo Multispeciality", type: "Private", dist: "3.4 km", icu: 12, rating: 4.7, tags: ["ICU", "Pediatric", "Maternity"] },
  { name: "Fortis Escorts", type: "Private", dist: "4.0 km", icu: 4, rating: 4.6, tags: ["Cardiology", "Emergency"] },
  { name: "Safdarjung Hospital", type: "Government", dist: "5.2 km", icu: 20, rating: 4.3, tags: ["ICU", "Emergency", "Pediatric"] },
  { name: "Max Saket", type: "Private", dist: "6.1 km", icu: 6, rating: 4.7, tags: ["ICU", "Oncology"] },
  { name: "RML Hospital", type: "Government", dist: "7.4 km", icu: 10, rating: 4.2, tags: ["Emergency", "Pediatric"] },
];

const filters = ["All", "Government", "Private", "Emergency", "ICU", "Pediatric", "Cardiology"];

function Hospitals() {
  const [active, setActive] = useState("All");
  const list = data.filter((d) =>
    active === "All" ? true : d.type === active || d.tags.includes(active),
  );

  return (
    <AppShell>
      <PageHeader
        title="Hospital Finder"
        subtitle="Live bed & ICU availability near you"
      />
      <div className="mb-5 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={
              "rounded-full px-4 py-1.5 text-xs font-bold " +
              (active === f
                ? "bg-brand text-white"
                : "bg-card text-muted-foreground ring-1 ring-border hover:bg-muted")
            }
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative h-[70vh] overflow-hidden rounded-3xl bg-gradient-to-br from-brand/15 to-brand-secondary/15 ring-1 ring-border">
            <div className="absolute inset-0 opacity-40 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:40px_40px]" />
            {[
              { t: "30%", l: "40%" },
              { t: "55%", l: "60%" },
              { t: "20%", l: "70%" },
              { t: "70%", l: "25%" },
              { t: "45%", l: "30%" },
            ].map((p, i) => (
              <div
                key={i}
                className="absolute"
                style={{ top: p.t, left: p.l }}
              >
                <div className="relative">
                  <div className="absolute -inset-3 animate-ping rounded-full bg-emergency/30" />
                  <div className="relative grid size-8 place-items-center rounded-full bg-emergency text-white">
                    <Hospital className="size-4" />
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-card/95 p-4 backdrop-blur ring-1 ring-border">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                You are here
              </p>
              <p className="text-sm font-bold">Connaught Place, New Delhi</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 lg:col-span-7">
          {list.map((h) => (
            <div
              key={h.name}
              className="rounded-2xl bg-card p-5 ring-1 ring-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">{h.name}</h3>
                    <span
                      className={
                        "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase " +
                        (h.type === "Government"
                          ? "bg-success/10 text-success"
                          : "bg-brand/10 text-brand")
                      }
                    >
                      {h.type}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3" /> {h.dist}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Star className="size-3 fill-warning text-warning" /> {h.rating}
                    </span>
                    <span>· {h.icu} ICU beds free</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {h.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="shrink-0 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-white">
                  Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
