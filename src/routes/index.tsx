import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  Bot,
  Calendar,
  Droplet,
  FolderHeart,
  Hospital,
  Pill,
  ScanLine,
  ShieldCheck,
  Siren,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JeevanSetu AI — One Platform. Every Health Service. Every Indian." },
      {
        name: "description",
        content:
          "An AI-powered healthcare super app combining doctors, hospitals, medicines, reports, blood banks, ambulance and Ayushman Bharat into one Indian-built interface.",
      },
      { property: "og:title", content: "JeevanSetu AI — Health Super App" },
      {
        property: "og:description",
        content:
          "Google Maps + Ayushman Bharat + Apollo + PharmEasy + AI Doctor + Emergency SOS — inside one app.",
      },
    ],
  }),
  component: Landing,
});

const modules = [
  { icon: Bot, name: "AI Health Assistant", desc: "Voice chat, symptom checker, multilingual." },
  { icon: Hospital, name: "Hospital Finder", desc: "Nearby gov & private, ICU bed status." },
  { icon: Calendar, name: "Doctor Appointment", desc: "Video or in-person, instant booking." },
  { icon: FolderHeart, name: "Digital Health Locker", desc: "Reports, prescriptions, vaccinations." },
  { icon: ScanLine, name: "Medicine Scanner", desc: "Scan prescription, order in one tap." },
  { icon: Siren, name: "Emergency SOS", desc: "Ambulance, family alert, live location." },
  { icon: Droplet, name: "Blood & Organ", desc: "Donors, blood banks, organ registry." },
  { icon: Activity, name: "Health Analytics", desc: "BP, sugar, BMI, heart rate trends." },
  { icon: Pill, name: "Medicine Reminders", desc: "Smart, voice & WhatsApp reminders." },
  { icon: Users, name: "Family Dashboard", desc: "Parents, kids, grandparents in one." },
  { icon: ShieldCheck, name: "Ayushman Bharat", desc: "Eligibility & PMJAY in plain language." },
  { icon: Bot, name: "AI Report Analysis", desc: "Upload report, get plain-language insight." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-brand shadow-lg shadow-brand/20">
              <div className="size-5 rounded-full border-2 border-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                JeevanSetu <span className="text-brand">AI</span>
              </h1>
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Health Super App
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-3">
            <Link to="/features" className="hidden sm:inline-flex rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link to="/about" className="hidden sm:inline-flex rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link to="/contact" className="hidden md:inline-flex rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link
              to="/login"
              className="hidden sm:inline-flex rounded-full px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Log in
            </Link>
            <Link
              to="/onboarding"
              className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Hero */}
        <section className="grid grid-cols-1 gap-10 py-12 md:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              <span className="size-1.5 rounded-full bg-brand animate-pulse" /> Trusted by 4.2M Indians
            </span>
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              One Platform. <br />
              Every Health Service. <br />
              <span className="bg-gradient-to-r from-brand to-brand-secondary bg-clip-text text-transparent">
                Every Indian.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              An AI-powered super app combining doctors, hospitals, medicines, labs, blood, reports
              and government schemes. Built for families, students, seniors, and rural India.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/dashboard"
                className="rounded-2xl bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground shadow-xl shadow-brand/30 hover:scale-[1.02] transition-transform"
              >
                Open your dashboard
              </Link>
              <Link
                to="/assistant"
                className="rounded-2xl bg-card px-6 py-3.5 text-sm font-bold ring-1 ring-border"
              >
                Try AI Assistant →
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span>ABDM Integrated</span>
              <span>•</span>
              <span>PMJAY Verified</span>
              <span>•</span>
              <span>ISO 27001</span>
              <span>•</span>
              <span>12 Languages</span>
            </div>
          </div>

          {/* Hero dashboard card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-secondary p-1 shadow-2xl shadow-brand/30">
              <div className="rounded-[22px] bg-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      Live vitals
                    </p>
                    <p className="text-lg font-bold">Anjali Sharma</p>
                  </div>
                  <div className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">
                    Healthy
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { label: "Heart", val: "72", unit: "BPM" },
                    { label: "Sugar", val: "112", unit: "mg/dL" },
                    { label: "BMI", val: "22.4", unit: "" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl bg-muted p-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        {m.label}
                      </p>
                      <p className="mt-1 text-xl font-bold">
                        {m.val}
                        <span className="ml-1 text-[10px] font-medium text-muted-foreground">
                          {m.unit}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-emergency/10 p-4 ring-1 ring-emergency/20">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emergency">
                    AI Insight
                  </p>
                  <p className="mt-1 text-sm text-foreground">
                    Your hemoglobin is slightly low. Try spinach, beetroot, dates this week.
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between rounded-2xl bg-foreground p-4 text-background">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
                      Next reminder
                    </p>
                    <p className="text-sm font-bold">Metformin 500mg · 8:00 PM</p>
                  </div>
                  <div className="size-2 rounded-full bg-brand-secondary animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-16">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h3 className="text-3xl font-bold tracking-tight">20 modules. One app.</h3>
              <p className="mt-2 text-muted-foreground">
                Stop juggling apps for every health service.
              </p>
            </div>
            <Link to="/dashboard" className="hidden sm:inline text-sm font-bold text-brand">
              Explore all →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {modules.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.name}
                  className="group rounded-2xl bg-card p-6 ring-1 ring-border transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </div>
                  <h4 className="font-bold">{m.name}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Govt scheme */}
        <section className="my-16 overflow-hidden rounded-3xl bg-slate-950 p-10 text-white md:p-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="rounded-full bg-brand-secondary/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-secondary">
                Government schemes
              </span>
              <h3 className="mt-5 text-3xl font-bold md:text-4xl">
                Ayushman Bharat made simple.
              </h3>
              <p className="mt-4 max-w-md text-white/70">
                Check your eligibility for ₹5 Lakh insurance cover under PMJAY. Find empanelled
                hospitals and use cashless care — explained in 12 Indian languages.
              </p>
              <Link
                to="/dashboard"
                className="mt-6 inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-950"
              >
                Check your status
              </Link>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              {[
                ["Coverage", "₹5,00,000 / family / year"],
                ["Empanelled hospitals", "25,000+"],
                ["Beneficiary families", "12 Crore+"],
                ["Languages supported", "12"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between border-b border-white/10 py-4 last:border-0"
                >
                  <span className="text-sm text-white/60">{k}</span>
                  <span className="font-bold">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
          © 2026 JeevanSetu AI · Made for Bharat · ABDM Integrated By <b><a href="https://github.com/partho-kumar-shaw">Partho Kumar Shaw</a></b>
        </footer>
      </main>
    </div>
  );
}
