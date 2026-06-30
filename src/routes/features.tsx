import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  Baby,
  Bot,
  Brain,
  Calendar,
  Droplet,
  FileSearch,
  FolderHeart,
  Heart,
  Hospital,
  Leaf,
  Pill,
  ScanLine,
  ShieldCheck,
  Siren,
  Stethoscope,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({ meta: [{ title: "Features · JeevanSetu AI" }] }),
  component: Features,
});

const features = [
  { i: Bot, t: "AI Healthcare Copilot", d: "Voice & multilingual chat, symptom check, daily summary." },
  { i: Activity, t: "Smart Health Dashboard", d: "BP, sugar, SpO₂, BMI, sleep, steps — animated widgets." },
  { i: FolderHeart, t: "Digital Health Locker", d: "Reports, scans, vaccinations, insurance — searchable." },
  { i: FileSearch, t: "AI Report Analyzer", d: "Upload PDF/image, get plain-language analysis." },
  { i: ScanLine, t: "Medicine Intelligence", d: "Scan, identify, set reminders, find pharmacies." },
  { i: Calendar, t: "Smart Appointments", d: "Hospital, clinic, video & home visits." },
  { i: Siren, t: "Emergency Center", d: "One-tap SOS, live location, family + ambulance." },
  { i: Users, t: "Family Health Hub", d: "Parents, kids, grandparents in one dashboard." },
  { i: Heart, t: "Women's Healthcare", d: "Cycle, fertility, pregnancy, baby growth." },
  { i: Baby, t: "Child Healthcare", d: "Growth, vaccines, milestones, school records." },
  { i: Brain, t: "Mental Wellness", d: "Mood, meditation, AI therapist, helpline." },
  { i: Droplet, t: "Blood & Organ", d: "Donors, blood banks, organ donation registry." },
  { i: ShieldCheck, t: "Government Schemes", d: "Ayushman Bharat, PMJAY eligibility & apply." },
  { i: Hospital, t: "Hospital Explorer", d: "Nearby ICU/bed counts, ratings, waiting time." },
  { i: Stethoscope, t: "Disease Explorer", d: "AI-explained symptoms, treatment, prevention." },
  { i: Leaf, t: "Lifestyle", d: "Diet, yoga, workout, hydration, sleep tracking." },
  { i: Pill, t: "Medicine Reminders", d: "WhatsApp, voice, family caregiver alerts." },
  { i: Activity, t: "Health Analytics", d: "Weekly/monthly/yearly trends + AI predictions." },
];

function Features() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-9 rounded-xl bg-brand grid place-items-center">
            <div className="size-4 rounded-full border-2 border-white" />
          </div>
          <span className="font-bold">JeevanSetu AI</span>
        </Link>
        <Link
          to="/dashboard"
          className="rounded-full bg-foreground px-4 py-2 text-xs font-bold text-background"
        >
          Open app
        </Link>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-brand">Features</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">
          20 modules. One healthcare OS.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Built for families, students, seniors and rural India — with AI, ABHA and government
          schemes deeply integrated.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const I = f.i;
            return (
              <div
                key={f.t}
                className="rounded-3xl bg-card p-6 ring-1 ring-border hover:shadow-md transition-shadow"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <I className="size-5" />
                </div>
                <h3 className="mt-4 font-bold">{f.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
