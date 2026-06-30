import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · JeevanSetu AI" },
      {
        name: "description",
        content:
          "JeevanSetu AI is India's intelligent healthcare operating system — unifying every health service for every Indian.",
      },
    ],
  }),
  component: About,
});

function About() {
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

      <main className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-brand">Our mission</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          Healthcare should never depend on which app you remembered to install.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          JeevanSetu AI is building India's intelligent healthcare operating system. One AI, one
          health identity, one platform — for every Indian, in every language, on every device.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            ["4.2M", "Indians using JeevanSetu"],
            ["25,000+", "Empanelled hospitals"],
            ["12", "Indian languages supported"],
          ].map(([n, l]) => (
            <div key={n as string} className="rounded-3xl bg-card p-7 ring-1 ring-border">
              <p className="text-4xl font-extrabold text-brand">{n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold">Why we exist</h3>
            <p className="mt-3 text-muted-foreground">
              An Indian family today juggles 6+ apps for healthcare. Different platforms for
              hospitals, doctors, medicines, labs, ambulance, blood and government schemes. Records
              are scattered. Emergencies are chaotic. The elderly are excluded.
            </p>
            <p className="mt-3 text-muted-foreground">
              We're fixing that — with one AI-powered app built on ABDM, voice-first for accessibility,
              and free for every Indian household.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">What we believe</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>• Healthcare access is a right, not a privilege.</li>
              <li>• Every Indian deserves a doctor in their pocket.</li>
              <li>• Government schemes should be one-tap, not 40 forms.</li>
              <li>• AI should explain your report, not gatekeep it.</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-slate-950 p-10 text-white text-center">
          <h3 className="text-3xl font-extrabold">Try JeevanSetu AI today</h3>
          <p className="mt-2 text-white/70">Free forever for personal use.</p>
          <Link
            to="/onboarding"
            className="mt-6 inline-block rounded-2xl bg-white px-8 py-3.5 text-sm font-bold text-slate-950"
          >
            Get started →
          </Link>
        </div>
      </main>
    </div>
  );
}
