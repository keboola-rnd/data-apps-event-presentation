import { motion } from "framer-motion";
import { ContentSlide } from "@/components/presentation/ContentSlide";

interface AuthMethod {
  id: string;
  badge: string;
  title: string;
  description: string;
  example: string;
  accent: string;
}

const METHODS: AuthMethod[] = [
  {
    id: "none",
    badge: "no-auth",
    title: "Public",
    description:
      "Shareable link, no login. Anyone with the URL can open the app.",
    example:
      "Marketing landing page, public benchmark dashboards, conference demos.",
    accent: "border-stone-300 bg-stone-50",
  },
  {
    id: "basic",
    badge: "basic-auth",
    title: "HTTP Basic Auth",
    description:
      "Single username + password set in the app config. Default for new apps.",
    example:
      "Internal pilots, partner previews behind a shared password, quick PoCs.",
    accent: "border-blue-300 bg-blue-50",
  },
  {
    id: "oidc",
    badge: "OIDC / SSO",
    title: "Your Identity Provider",
    description:
      "Google Workspace, Microsoft Entra, Okta, Auth0. User identity propagates into the app as a request header (X-Kbc-User-Email + groups).",
    example:
      "Customer-facing apps with row-level security, multi-tenant data products, anything with audit requirements.",
    accent: "border-emerald-300 bg-emerald-50",
  },
  {
    id: "token",
    badge: "Storage Token",
    title: "Storage API Token",
    description:
      "Programmatic access using a Keboola Storage token. The app authenticates the caller, not a human user.",
    example:
      "Embedded API endpoints, headless integrations, app-to-app calls from your own backend.",
    accent: "border-amber-300 bg-amber-50",
  },
];

export default function Slide10() {
  return (
    <ContentSlide
      title="Authorization for Data Apps"
      subtitle="Four ways to control who can see what"
      animationKey="slide-10"
    >
      <div className="grid grid-cols-2 gap-4">
        {METHODS.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.35 }}
            className={`rounded-2xl border-2 p-5 shadow-sm ${m.accent}`}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-foreground">{m.title}</h4>
              <code className="rounded-full border bg-white px-2.5 py-0.5 font-mono text-xs text-foreground/70">
                {m.badge}
              </code>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              {m.description}
            </p>
            <div className="mt-3 border-t border-foreground/10 pt-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground/50">
                Example
              </span>
              <p className="mt-0.5 text-sm text-foreground/70">{m.example}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="mt-4 text-sm italic text-muted-foreground"
      >
        OIDC is the unlock for row-level security: the user's email arrives in the app, the app filters data per identity, every read is auditable.
      </motion.p>
    </ContentSlide>
  );
}
