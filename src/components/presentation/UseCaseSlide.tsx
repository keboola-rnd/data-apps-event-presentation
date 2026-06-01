import { motion } from "framer-motion";
import { ContentSlide } from "./ContentSlide";
import { AdoptionChart } from "./AdoptionChart";

interface UseCaseSlideProps {
  slideNumber: string;
  title: string;
  subtitle: string;
  apps: number;
  clients: number;
  growthHighlight: string;
  scenarios: string[];
  whenToStart: string;
  mockup: React.ReactNode;
  appsHistory: number[];
  clientsHistory: number[];
}

export function UseCaseSlide({
  slideNumber,
  title,
  subtitle,
  apps,
  clients,
  scenarios,
  whenToStart,
  mockup,
  appsHistory,
  clientsHistory,
}: UseCaseSlideProps) {
  return (
    <ContentSlide title={title} subtitle={subtitle} animationKey={`slide-${slideNumber}`}>
      <div className="grid h-full grid-cols-5 gap-6">
        {/* Left: narrative + adoption panel */}
        <div className="col-span-2 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-xl border bg-card p-3"
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Typical scenarios
            </div>
            <ul className="mt-1.5 space-y-1 text-sm text-foreground/85">
              {scenarios.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm italic text-muted-foreground"
          >
            {whenToStart}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.35 }}
            className="mt-auto rounded-xl border bg-card p-3"
          >
            <div className="mb-2 flex items-center gap-3">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold tabular-nums text-primary">{apps.toLocaleString()}</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">apps</span>
              </div>
              <span className="text-muted-foreground/40">·</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold tabular-nums text-amber-700">{clients}</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">clients</span>
              </div>
            </div>
            <AdoptionChart apps={appsHistory} clients={clientsHistory} />
          </motion.div>
        </div>

        {/* Right: full-height mockup */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.35 }}
          className="col-span-3 flex h-full items-stretch"
        >
          <div className="flex h-full w-full">{mockup}</div>
        </motion.div>
      </div>
    </ContentSlide>
  );
}

/* Reusable browser-chrome wrapper for mockups */
export function BrowserChrome({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-stone-300 bg-white shadow-md">
      <div className="flex shrink-0 items-center gap-1.5 border-b border-stone-200 bg-stone-100 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="ml-2 font-mono text-[10px] text-stone-500">{url}</span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
    </div>
  );
}
