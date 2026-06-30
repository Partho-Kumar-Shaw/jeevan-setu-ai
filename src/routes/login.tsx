import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Log in · JeevanSetu AI" }] }),
  component: Login,
});

function Login() {
  return <AuthCard mode="login" />;
}

export function AuthCard({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-brand to-brand-secondary p-12 text-white">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/30">
            <div className="size-5 rounded-full border-2 border-white" />
          </div>
          <span className="text-lg font-bold">JeevanSetu AI</span>
        </Link>
        <div>
          <h2 className="text-4xl font-extrabold leading-tight">
            One platform. Every health service. Every Indian.
          </h2>
          <p className="mt-4 max-w-md text-white/80">
            Your AI-powered bridge to doctors, hospitals, medicines, reports and government health
            schemes.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-white/60">
          <span>ABDM</span>·<span>PMJAY</span>·<span>ISO 27001</span>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold tracking-tight">
            {isLogin ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {isLogin
              ? "Sign in to access your health locker."
              : "Free for families. No credit card needed."}
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/dashboard";
            }}
          >
            {!isLogin && (
              <Field label="Full name" type="text" placeholder="Anjali Sharma" />
            )}
            <Field label="Mobile or email" type="text" placeholder="+91 98xxxxxxxx" />
            <Field label="Password" type="password" placeholder="••••••••" />
            <button className="w-full rounded-2xl bg-brand py-3 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/20">
              {isLogin ? "Log in" : "Create account"}
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" />
            OR
            <div className="h-px flex-1 bg-border" />
          </div>
          <button className="w-full rounded-2xl bg-card py-3 text-sm font-semibold ring-1 ring-border">
            Continue with Aadhaar (ABHA)
          </button>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            {isLogin ? "New to JeevanSetu? " : "Already have an account? "}
            <Link
              to={isLogin ? "/signup" : "/login"}
              className="font-bold text-brand"
            >
              {isLogin ? "Create account" : "Log in"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        {...rest}
        className="mt-1.5 w-full rounded-2xl bg-card px-4 py-3 text-sm ring-1 ring-border outline-none focus:ring-2 focus:ring-brand/40"
      />
    </label>
  );
}
