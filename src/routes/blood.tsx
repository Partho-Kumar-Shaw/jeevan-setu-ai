import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { Droplet, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/blood")({
  head: () => ({ meta: [{ title: "Blood Bank · JeevanSetu AI" }] }),
  component: Blood,
});

const groups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const banks = [
  { n: "Rotary Blood Bank", d: "1.8 km", units: { "O+": 24, "A+": 12, "B+": 18 } },
  { n: "Red Cross Society", d: "3.2 km", units: { "O+": 30, "A+": 8, "AB+": 5 } },
  { n: "AIIMS Blood Centre", d: "4.5 km", units: { "O+": 14, "B-": 4, "AB-": 2 } },
];

function Blood() {
  const [group, setGroup] = useState("O+");

  return (
    <AppShell>
      <PageHeader
        title="Blood Availability"
        subtitle="Real-time stock across banks & verified donors"
        action={
          <button
            onClick={() =>
              toast.success("Thank you for pledging!", {
                description: "You're now on the verified donor registry.",
              })
            }
            className="rounded-2xl bg-emergency px-5 py-2.5 text-sm font-bold text-white"
          >
            Become a donor
          </button>
        }
      />
      <div className="mb-6 grid grid-cols-4 gap-2 sm:grid-cols-8">
        {groups.map((g) => (
          <button
            key={g}
            onClick={() => setGroup(g)}
            className={
              "aspect-square rounded-2xl text-lg font-extrabold transition-transform hover:scale-105 " +
              (group === g
                ? "bg-emergency text-white shadow-lg shadow-emergency/30"
                : "bg-card ring-1 ring-border")
            }
          >
            {g}
          </button>
        ))}
      </div>

      <p className="mb-4 text-sm text-muted-foreground">
        Showing availability for <span className="font-bold text-foreground">{group}</span>
      </p>

      <div className="grid gap-6 lg:grid-cols-3">
        {banks.map((b) => (
          <div key={b.n} className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-xl bg-emergency/10 text-emergency">
                <Droplet className="size-5" />
              </div>
              <div>
                <h3 className="font-bold">{b.n}</h3>
                <p className="text-xs text-muted-foreground">{b.d} away</p>
              </div>
            </div>
            <div className="mt-5 space-y-2">
              {Object.entries(b.units).map(([g, u]) => (
                <div
                  key={g}
                  className={
                    "flex items-center justify-between rounded-xl p-2.5 " +
                    (g === group ? "bg-emergency/10 ring-1 ring-emergency/30" : "bg-muted")
                  }
                >
                  <span className="text-sm font-bold">{g}</span>
                  <span className="text-xs font-semibold text-success">
                    {u} units available
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() =>
                toast.success(`Request sent to ${b.n}`, {
                  description: `${group} · You'll receive a confirmation call shortly.`,
                })
              }
              className="mt-4 w-full rounded-xl bg-brand py-2.5 text-sm font-bold text-white"
            >
              Request {group}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-gradient-to-br from-emergency to-red-700 p-8 text-white">
        <Heart className="size-7" />
        <h3 className="mt-3 text-2xl font-bold">Organ Donation Registry</h3>
        <p className="mt-2 max-w-lg text-white/80">
          Register as an organ donor in 60 seconds. Your pledge is added to the national NOTTO
          registry.
        </p>
        <button
          onClick={() =>
            toast.success("Pledge recorded", {
              description: "Your organ donor certificate is in your Locker.",
            })
          }
          className="mt-5 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-emergency"
        >
          Pledge now
        </button>
      </div>
    </AppShell>
  );
}
