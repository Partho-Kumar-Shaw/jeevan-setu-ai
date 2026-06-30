import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MessageSquare, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact · JeevanSetu AI" }] }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-9 rounded-xl bg-brand grid place-items-center">
            <div className="size-4 rounded-full border-2 border-white" />
          </div>
          <span className="font-bold">JeevanSetu AI</span>
        </Link>
        <Link to="/about" className="text-sm font-bold text-muted-foreground hover:text-foreground">
          About
        </Link>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold">Talk to us.</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          For families, hospitals, partners, press or feedback — we'd love to hear from you.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            { i: <Mail />, t: "Email", v: "hello@jeevansetu.ai" },
            { i: <Phone />, t: "Helpline", v: "+91 1800-123-4567" },
            { i: <MessageSquare />, t: "WhatsApp", v: "+91 98xxxxxxxx · 24×7" },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl bg-card p-6 ring-1 ring-border">
              <div className="grid size-10 place-items-center rounded-xl bg-brand/10 text-brand">
                {c.i}
              </div>
              <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {c.t}
              </p>
              <p className="mt-1 font-bold">{c.v}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 rounded-3xl bg-card p-8 ring-1 ring-border space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" />
            <Field label="Email or phone" />
          </div>
          <Field label="Subject" />
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Message
            </span>
            <textarea
              rows={5}
              className="mt-1.5 w-full rounded-2xl bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand/40"
            />
          </label>
          <button className="rounded-2xl bg-brand px-6 py-3 text-sm font-bold text-brand-foreground">
            Send message
          </button>
        </form>
      </main>
    </div>
  );
}

function Field({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input className="mt-1.5 w-full rounded-2xl bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand/40" />
    </label>
  );
}
