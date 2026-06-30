import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings · JeevanSetu AI" }] }),
  component: Settings,
});

function Settings() {
  return (
    <AppShell>
      <PageHeader title="Settings" subtitle="Profile, language, accessibility & privacy" />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1 rounded-3xl bg-card p-6 ring-1 ring-border">
          <div className="flex flex-col items-center text-center">
            <div className="grid size-20 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-secondary text-2xl font-extrabold text-white">
              AS
            </div>
            <h3 className="mt-3 text-lg font-bold">Anjali Sharma</h3>
            <p className="text-xs text-muted-foreground">ABHA · 14-3344-5566-7788</p>
            <button className="mt-4 rounded-xl bg-muted px-4 py-2 text-xs font-bold">
              Edit profile
            </button>
          </div>
          <hr className="my-6 border-border" />
          <div className="space-y-3 text-sm">
            <Row label="Blood group" v="O+" />
            <Row label="Allergies" v="Penicillin" />
            <Row label="Insurance" v="PMJAY · ₹5L" />
            <Row label="Emergency contact" v="Dad · +91 98xx" />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <Card title="Accessibility">
            <Toggle label="Voice navigation" on />
            <Toggle label="Large text" on />
            <Toggle label="High contrast" />
            <Toggle label="Screen reader support" on />
          </Card>
          <Card title="Language">
            <div className="flex flex-wrap gap-2">
              {["English", "हिन्दी", "தமிழ்", "తెలుగు", "বাংলা", "मराठी", "ગુજરાતી", "ಕನ್ನಡ"].map(
                (l, i) => (
                  <button
                    key={l}
                    className={
                      "rounded-full px-4 py-1.5 text-xs font-bold " +
                      (i === 0
                        ? "bg-brand text-white"
                        : "bg-muted text-muted-foreground")
                    }
                  >
                    {l}
                  </button>
                ),
              )}
            </div>
          </Card>
          <Card title="Notifications">
            <Toggle label="Medicine reminders" on />
            <Toggle label="Appointment alerts" on />
            <Toggle label="Lab report ready" on />
            <Toggle label="Family health alerts" on />
            <Toggle label="Vaccination due" on />
            <Toggle label="Insurance renewal" />
          </Card>
          <Card title="Privacy & data">
            <Toggle label="Share anonymous data for research" />
            <Toggle label="Allow family caregivers" on />
            <button className="mt-2 text-xs font-bold text-emergency">
              Download all my data
            </button>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function Row({ label, v }: { label: string; v: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold">{v}</span>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
      <h3 className="font-bold">{title}</h3>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}

function Toggle({ label, on }: { label: string; on?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm">{label}</span>
      <div
        className={
          "h-6 w-11 rounded-full p-0.5 transition-colors " +
          (on ? "bg-brand" : "bg-muted")
        }
      >
        <div
          className={
            "size-5 rounded-full bg-white shadow transition-transform " +
            (on ? "translate-x-5" : "")
          }
        />
      </div>
    </div>
  );
}
