import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader, GradientCard } from "@/components/AppShell";
import { Brain, Headphones, MessageCircleHeart, Wind } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/mental")({
  head: () => ({ meta: [{ title: "Mental Wellness · JeevanSetu AI" }] }),
  component: Mental,
});

const moods = ["😊", "😌", "😐", "😟", "😢", "😡"];

function Mental() {
  return (
    <AppShell>
      <PageHeader
        title="Mental Wellness"
        subtitle="Mood, meditation, breathing & anonymous therapy"
      />
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-6">
          <GradientCard className="bg-gradient-to-br from-violet-500 to-fuchsia-500">
            <p className="text-xs font-bold uppercase tracking-widest text-white/70">
              How are you feeling today?
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {moods.map((m, i) => (
                <motion.button
                  key={m}
                  whileHover={{ scale: 1.15, rotate: i % 2 ? 6 : -6 }}
                  whileTap={{ scale: 0.9 }}
                  className="grid size-14 place-items-center rounded-2xl bg-white/15 text-3xl backdrop-blur"
                >
                  {m}
                </motion.button>
              ))}
            </div>
            <p className="mt-5 text-sm text-white/80">
              Your stress score this week: <span className="font-bold">Low (28 / 100)</span>
            </p>
          </GradientCard>

          <div className="rounded-3xl bg-card p-7 ring-1 ring-border">
            <h3 className="font-bold">4-7-8 Breathing</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Inhale 4s · Hold 7s · Exhale 8s. Repeat 4 times.
            </p>
            <div className="mt-8 grid place-items-center">
              <motion.div
                animate={{ scale: [1, 1.35, 1.35, 1] }}
                transition={{ duration: 19, repeat: Infinity, times: [0, 0.21, 0.58, 1] }}
                className="grid size-48 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-secondary text-white shadow-2xl shadow-brand/30"
              >
                <Wind className="size-12" />
              </motion.div>
              <p className="mt-6 text-sm font-bold text-brand">Breathe in slowly…</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { i: <Headphones />, t: "Sleep stories", d: "12 calm tracks" },
              { i: <Brain />, t: "Focus session", d: "25-min Pomodoro" },
              { i: <MessageCircleHeart />, t: "Anonymous chat", d: "Talk with peers" },
            ].map((c) => (
              <motion.div
                key={c.t}
                whileHover={{ y: -3 }}
                className="rounded-2xl bg-card p-5 ring-1 ring-border"
              >
                <div className="grid size-10 place-items-center rounded-xl bg-violet-50 text-violet-600">
                  {c.i}
                </div>
                <p className="mt-3 font-bold">{c.t}</p>
                <p className="text-xs text-muted-foreground">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <h3 className="font-bold">AI Therapist</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              A safe, confidential space. Not a replacement for clinical care.
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-2xl bg-muted p-3">
                "I notice you've been feeling overwhelmed at work. Would you like a quick grounding
                exercise?"
              </div>
              <button className="w-full rounded-2xl bg-foreground py-2.5 text-sm font-bold text-background">
                Start session
              </button>
            </div>
          </div>
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <h4 className="font-bold">Book a counsellor</h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Verified psychiatrists & clinical therapists.
            </p>
            <div className="mt-3 space-y-2 text-sm">
              {["Dr. Priya Nair · Mon 5 PM", "Dr. Imran Khan · Wed 6 PM", "Dr. Rita Bose · Sat 11 AM"].map(
                (s) => (
                  <div
                    key={s}
                    className="flex items-center justify-between rounded-xl bg-muted p-3"
                  >
                    <span>{s}</span>
                    <button className="rounded-lg bg-brand px-3 py-1 text-xs font-bold text-white">
                      Book
                    </button>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="rounded-3xl bg-emergency/10 p-6 ring-1 ring-emergency/30">
            <p className="text-xs font-bold uppercase tracking-widest text-emergency">
              In crisis?
            </p>
            <p className="mt-1 font-bold">iCall / Vandrevala Foundation</p>
            <p className="mt-1 text-xs text-muted-foreground">
              24×7 free, confidential helpline.
            </p>
            <button className="mt-3 w-full rounded-xl bg-emergency py-2 text-xs font-bold text-white">
              Call now · 1860-2662-345
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
