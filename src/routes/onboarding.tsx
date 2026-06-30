import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Welcome · JeevanSetu AI" }] }),
  component: Onboarding,
});

const steps = [
  {
    t: "Your health, unified.",
    d: "Every report, prescription and appointment in one private locker. Linked to your ABHA ID.",
    color: "from-brand to-brand-secondary",
  },
  {
    t: "AI Copilot in 12 languages.",
    d: "Symptom checks, diet advice and report explanations in Hindi, Tamil, Bengali and more.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    t: "Emergency in one tap.",
    d: "Ambulance, family alert, hospital routing & medical history — all from a single button.",
    color: "from-emergency to-orange-500",
  },
];

function Onboarding() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <header className="flex items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-9 rounded-xl bg-brand grid place-items-center">
            <div className="size-4 rounded-full border-2 border-white" />
          </div>
          <span className="font-bold">JeevanSetu AI</span>
        </Link>
        <Link to="/dashboard" className="text-xs font-bold text-muted-foreground">
          Skip →
        </Link>
      </header>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 pb-10">
        {steps.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${s.color} p-8 text-white shadow-2xl flex flex-col justify-between min-h-[60vh]`}
          >
            <div className="absolute -top-10 -right-10 size-40 rounded-full bg-white/15 blur-3xl" />
            <div className="text-xs font-bold uppercase tracking-widest text-white/70">
              Step {i + 1} of 3
            </div>
            <div>
              <h2 className="text-3xl font-extrabold leading-tight">{s.t}</h2>
              <p className="mt-3 text-white/85">{s.d}</p>
            </div>
          </motion.div>
        ))}
      </main>

      <footer className="flex items-center justify-between px-6 py-6 border-t border-border">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={
                "h-1.5 rounded-full transition-all " +
                (i === 2 ? "w-8 bg-brand" : "w-4 bg-muted")
              }
            />
          ))}
        </div>
        <Link
          to="/signup"
          className="rounded-2xl bg-brand px-6 py-3 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/30"
        >
          Get started →
        </Link>
      </footer>
    </div>
  );
}
