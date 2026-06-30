import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/AppShell";
import { Bot, Mic, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/assistant")({
  head: () => ({ meta: [{ title: "AI Assistant · JeevanSetu AI" }] }),
  component: Assistant,
});

type Msg = { role: "user" | "ai"; text: string };

const initial: Msg[] = [
  {
    role: "ai",
    text: "Namaste 🙏 I'm your JeevanSetu AI Assistant. I can help with symptoms, medicines, diet, or finding a doctor. What's going on today?",
  },
];

const suggestions = [
  "I have a sore throat & mild fever",
  "Explain my latest blood report",
  "Diet for low hemoglobin",
  "Book a cardiologist near me",
];

function Assistant() {
  const [messages, setMessages] = useState<Msg[]>(initial);
  const [input, setInput] = useState("");

  function send(text?: string) {
    const t = (text ?? input).trim();
    if (!t) return;
    setMessages((m) => [...m, { role: "user", text: t }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text:
            "Based on what you shared, it sounds like a viral throat infection. Rest, drink warm fluids, and take paracetamol if fever crosses 100°F. If symptoms last more than 3 days, please consult a physician — I can book Dr. Kavita Rao (ENT) for you.",
        },
      ]);
    }, 700);
  }

  return (
    <AppShell>
      <PageHeader
        title="AI Health Assistant"
        subtitle="Voice & multilingual · symptom checker · diet & medicine guidance"
      />
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="flex h-[70vh] flex-col rounded-3xl bg-card ring-1 ring-border">
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="flex items-center gap-3">
                <div className="grid size-9 place-items-center rounded-full bg-brand text-white">
                  <Bot className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-bold">JeevanSetu AI</p>
                  <p className="text-[10px] text-muted-foreground">
                    Online · 12 languages
                  </p>
                </div>
              </div>
              <select className="rounded-full bg-muted px-3 py-1 text-xs font-bold outline-none">
                <option>English</option>
                <option>हिन्दी</option>
                <option>தமிழ்</option>
                <option>తెలుగు</option>
                <option>বাংলা</option>
              </select>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={
                      "max-w-[78%] rounded-2xl px-4 py-2.5 text-sm " +
                      (m.role === "user"
                        ? "bg-brand text-brand-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm")
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-3">
              <div className="mb-2 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground hover:bg-brand/10 hover:text-brand"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
                className="flex items-center gap-2 rounded-2xl bg-muted px-3 py-2"
              >
                <button
                  type="button"
                  className="grid size-9 place-items-center rounded-full bg-card text-brand"
                >
                  <Mic className="size-4" />
                </button>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your symptom, question or just speak…"
                  className="flex-1 bg-transparent text-sm outline-none"
                />
                <button
                  type="submit"
                  className="grid size-9 place-items-center rounded-full bg-brand text-white"
                >
                  <Send className="size-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-4">
          <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-secondary p-6 text-white">
            <Sparkles className="size-6" />
            <h3 className="mt-3 text-lg font-bold">Personalised insights</h3>
            <p className="mt-1 text-sm text-white/80">
              Hemoglobin trending low. Add iron-rich foods this week.
            </p>
          </div>
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <h4 className="text-sm font-bold">Today's recommendation</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>🥬 Add spinach to lunch</li>
              <li>🍇 Snack on dates & raisins</li>
              <li>💧 Drink 2.5L water</li>
              <li>🚶 20 min walk after dinner</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
            <h4 className="text-sm font-bold">Health risk score</h4>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-4xl font-extrabold text-success">82</span>
              <span className="mb-1 text-xs font-bold text-success">Good</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[82%] bg-gradient-to-r from-success to-brand" />
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
