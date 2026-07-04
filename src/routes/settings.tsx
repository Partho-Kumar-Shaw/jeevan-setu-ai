import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings · JeevanSetu AI" }] }),
  component: Settings,
});

const languages = ["English", "हिन्दी", "தமிழ்", "తెలుగు", "বাংলা", "मराठी", "ગુજરાતી", "ಕನ್ನಡ"];

function Settings() {
  const [lang, setLang] = useState("English");
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    "Voice navigation": true,
    "Large text": true,
    "High contrast": false,
    "Screen reader support": true,
    "Medicine reminders": true,
    "Appointment alerts": true,
    "Lab report ready": true,
    "Family health alerts": true,
    "Vaccination due": true,
    "Insurance renewal": false,
    "Share anonymous data for research": false,
    "Allow family caregivers": true,
  });

  const flip = (label: string) => {
    setToggles((t) => {
      const next = { ...t, [label]: !t[label] };
      toast(`${label} ${next[label] ? "enabled" : "disabled"}`);
      return next;
    });
  };

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
            <button
              onClick={() => toast("Profile editor coming soon")}
              className="mt-4 rounded-xl bg-muted px-4 py-2 text-xs font-bold"
            >
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
            {["Voice navigation", "Large text", "High contrast", "Screen reader support"].map(
              (l) => (
                <Toggle key={l} label={l} on={toggles[l]} onToggle={() => flip(l)} />
              ),
            )}
          </Card>
          <Card title="Language">
            <div className="flex flex-wrap gap-2">
              {languages.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l);
                    toast.success(`Language set to ${l}`);
                  }}
                  className={
                    "rounded-full px-4 py-1.5 text-xs font-bold " +
                    (lang === l ? "bg-brand text-white" : "bg-muted text-muted-foreground")
                  }
                >
                  {l}
                </button>
              ))}
            </div>
          </Card>
          <Card title="Notifications">
            {[
              "Medicine reminders",
              "Appointment alerts",
              "Lab report ready",
              "Family health alerts",
              "Vaccination due",
              "Insurance renewal",
            ].map((l) => (
              <Toggle key={l} label={l} on={toggles[l]} onToggle={() => flip(l)} />
            ))}
          </Card>
          <Card title="Privacy & data">
            {["Share anonymous data for research", "Allow family caregivers"].map((l) => (
              <Toggle key={l} label={l} on={toggles[l]} onToggle={() => flip(l)} />
            ))}
            <button
              onClick={() =>
                toast.success("Data export requested", {
                  description: "You'll receive a download link via email within 24h.",
                })
              }
              className="mt-2 text-xs font-bold text-emergency"
            >
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

function Toggle({
  label,
  on,
  onToggle,
}: {
  label: string;
  on: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm">{label}</span>
      <button
        onClick={onToggle}
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
      </button>
    </div>
  );
}
