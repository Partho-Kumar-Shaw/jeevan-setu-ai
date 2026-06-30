import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader, GradientCard } from "@/components/AppShell";
import { Award, QrCode } from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile · JeevanSetu AI" }] }),
  component: Profile,
});

function Profile() {
  return (
    <AppShell>
      <PageHeader title="Profile" subtitle="Your unified ABHA-linked health identity" />
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-4">
          <GradientCard>
            <div className="flex items-center gap-4">
              <div className="grid size-20 place-items-center rounded-2xl bg-white/20 text-2xl font-extrabold backdrop-blur">
                AS
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  ABHA ID
                </p>
                <h2 className="text-2xl font-bold">Anjali Sharma</h2>
                <p className="text-sm text-white/80">14-3344-5566-7788</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                ["Age", "32"],
                ["Blood", "O+"],
                ["BMI", "22.4"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-white/15 p-3 backdrop-blur">
                  <p className="text-lg font-bold">{v}</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/70">{k}</p>
                </div>
              ))}
            </div>
          </GradientCard>

          <div className="rounded-3xl bg-card p-6 ring-1 ring-border text-center">
            <QrCode className="mx-auto size-32 text-foreground" />
            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Emergency QR
            </p>
            <p className="mt-1 text-sm">
              First responders can scan to see blood group, allergies & contacts.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <Card title="Personal info">
            <Row k="Date of birth" v="14 Mar 1993" />
            <Row k="Gender" v="Female" />
            <Row k="Aadhaar" v="••••-••••-7892" />
            <Row k="Email" v="anjali.sharma@gmail.com" />
            <Row k="Mobile" v="+91 98xxxxxxxx" />
          </Card>
          <Card title="Medical">
            <Row k="Blood group" v="O+" />
            <Row k="Allergies" v="Penicillin · Peanuts (mild)" />
            <Row k="Chronic conditions" v="None" />
            <Row k="Surgeries" v="Appendectomy (2018)" />
            <Row k="Insurance" v="PMJAY · ₹5L · Active" />
          </Card>
          <Card title="Achievements">
            <div className="flex flex-wrap gap-2">
              {[
                ["14-day streak", "bg-emerald-100 text-emerald-700"],
                ["10k steps × 5", "bg-amber-100 text-amber-700"],
                ["Medicine ★★★", "bg-violet-100 text-violet-700"],
                ["Health score 82", "bg-blue-100 text-blue-700"],
                ["Blood donor", "bg-rose-100 text-rose-700"],
              ].map(([t, c]) => (
                <span
                  key={t}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${c}`}
                >
                  <Award className="size-3" /> {t}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
      <h3 className="font-bold">{title}</h3>
      <div className="mt-4 space-y-2.5 text-sm">{children}</div>
    </div>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-semibold">{v}</span>
    </div>
  );
}
