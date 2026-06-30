import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { MapPin, PhoneCall, Siren, Users } from "lucide-react";

export const Route = createFileRoute("/sos")({
  head: () => ({ meta: [{ title: "Emergency SOS · JeevanSetu AI" }] }),
  component: SOS,
});

function SOS() {
  return (
    <AppShell>
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-gradient-to-br from-emergency to-red-700 p-10 text-center text-white shadow-2xl shadow-emergency/30">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
            One tap. Help arrives.
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            Emergency SOS
          </h1>
          <div className="my-10 flex justify-center">
            <button className="relative grid size-48 place-items-center rounded-full bg-white text-emergency shadow-2xl ring-8 ring-white/20 transition-transform active:scale-95">
              <div className="absolute inset-0 animate-ping rounded-full bg-white/40" />
              <div className="relative grid place-items-center">
                <Siren className="size-14" />
                <span className="mt-1 text-sm font-extrabold tracking-widest">PRESS</span>
              </div>
            </button>
          </div>
          <p className="text-white/80">
            Calls ambulance · shares live location · alerts your family · routes to nearest hospital
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card icon={<PhoneCall className="size-5" />} title="Ambulance" desc="102 / 108 dispatched in 12s" />
          <Card icon={<MapPin className="size-5" />} title="Live location" desc="Shared with 3 contacts" />
          <Card icon={<Users className="size-5" />} title="Family alert" desc="WhatsApp + voice call" />
        </div>

        <div className="mt-6 rounded-3xl bg-card p-7 ring-1 ring-border">
          <h3 className="font-bold">Emergency contacts</h3>
          <div className="mt-4 space-y-3 text-sm">
            {[
              ["Dad", "+91 98xxxxxxxx", "Primary"],
              ["Mom", "+91 98xxxxxxxx", "Primary"],
              ["Family Doctor", "Dr. Kavita Rao", "Cardio"],
              ["Ambulance Service", "102 / 108", "24×7"],
            ].map(([n, no, tag]) => (
              <div
                key={n}
                className="flex items-center justify-between rounded-2xl bg-muted p-3.5"
              >
                <div>
                  <p className="font-semibold">{n}</p>
                  <p className="text-xs text-muted-foreground">{no}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-card px-2.5 py-1 text-[10px] font-bold text-muted-foreground ring-1 ring-border">
                    {tag}
                  </span>
                  <button className="grid size-9 place-items-center rounded-full bg-emergency text-white">
                    <PhoneCall className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/dashboard"
            className="mt-5 inline-block text-sm font-bold text-brand"
          >
            ← Back to dashboard
          </Link>
        </div>
      </div>
    </AppShell>
  );
}

function Card({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl bg-card p-5 ring-1 ring-border">
      <div className="grid size-10 place-items-center rounded-xl bg-emergency/10 text-emergency">
        {icon}
      </div>
      <h4 className="mt-3 font-bold">{title}</h4>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </div>
  );
}
