import { createFileRoute } from "@tanstack/react-router";
import { AuthCard } from "./login";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up · JeevanSetu AI" }] }),
  component: () => <AuthCard mode="signup" />,
});
