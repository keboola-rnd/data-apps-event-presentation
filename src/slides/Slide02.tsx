import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlideContainer } from "@/components/presentation/SlideContainer";
import { KeyHint } from "@/components/presentation/KeyHint";

type ChatStep =
  | { id: string; type: "user"; content: string; reveal: number }
  | { id: string; type: "assistant"; content: string; reveal: number }
  | {
      id: string;
      type: "tool";
      toolName: string;
      icon: string;
      request: string;
      response: string;
      reveal: number;
    };

const CHAT_STEPS: ChatStep[] = [
  { id: "user-prompt", type: "user", content: "Build me a dashboard showing **Net Pipeline Value** by region. Use our semantic model.", reveal: 0 },
  { id: "search-metric", type: "tool", toolName: "search", icon: "📐", request: '{ "patterns": [\n   "Net Pipeline\n    Value"\n  ],\n  "item_types":\n   ["table"],\n  "search_type":\n   "textual" }', response: '{ "matches": [{\n   "id": "out.c-\n    semantic_model\n    .metrics",\n   "type": "table",\n   "owner": "FP&A",\n   "definition":\n   "SELECT region,\n    SUM(amount *\n     stage_prob)\n     AS npv\n    FROM\n     opportunities\n    GROUP BY region"\n  }] }', reveal: 0 },
  { id: "exec-metric", type: "tool", toolName: "query_data", icon: "🗄️", request: "SELECT region,\n  SUM(amount *\n    stage_prob)\n    AS npv\nFROM opportunities\nGROUP BY region", response: '{ "rows": 1842,\n  "npv": "$3.2M",\n  "regions": [\n   "EMEA","NA","APAC"\n  ] }', reveal: 1 },
  { id: "ai-found", type: "assistant", content: "Used your **Net Pipeline Value** definition. Found **$3.2M NPV** across 3 regions. Generating dashboard…", reveal: 2 },
  { id: "create-app", type: "tool", toolName: "modify_streamlit_data_app", icon: "⚙️", request: '{ "name":\n   "Acme Sales",\n  "description":\n   "NPV by region",\n  "authentication\n   _type":\n   "basic-auth",\n  "packages":\n   ["pandas",\n    "altair"] }', response: '{ "configuration\n   _id": "4f2a8",\n  "version": 1 }', reveal: 3 },
  { id: "deploy-app", type: "tool", toolName: "deploy_data_app", icon: "🚀", request: '{ "action":\n   "deploy",\n  "configuration\n   _id":\n   "4f2a8" }', response: '{ "status":\n   "running",\n  "url": "https://\n   apps.keboola.com\n   /4f2a8" }', reveal: 4 },
  { id: "ai-done", type: "assistant", content: "Done. **One prompt**, your **metric**, a **real app**.", reveal: 5 },
];

const BRAND_COUNT = 5; // Acme, Northwind, Helix, Lumen, Bulánek
const BAR_HEIGHTS = [60, 88, 45, 72, 95, 55, 80];

const MAX_ANIM_STEPS = CHAT_STEPS.length + BRAND_COUNT - 1;

export default function Slide02() {
  const [chatStep, setChatStep] = useState(0);
  const [brandIndex, setBrandIndex] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const visibleSteps = CHAT_STEPS.slice(0, chatStep);
  const reveal = visibleSteps.reduce((max, s) => Math.max(max, s.reveal), 0);
  const chatDone = chatStep >= CHAT_STEPS.length;
  const animStep = chatStep + brandIndex;
  const animStepRef = useRef(animStep);
  useEffect(() => { animStepRef.current = animStep; }, [animStep]);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key !== "ArrowRight") return;
      const tag = (document.activeElement?.tagName ?? "").toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      if (animStepRef.current >= MAX_ANIM_STEPS) return;
      event.preventDefault();
      event.stopPropagation();
      setChatStep((cs) => {
        if (cs < CHAT_STEPS.length) return cs + 1;
        setBrandIndex((bi) => Math.min(bi + 1, BRAND_COUNT - 1));
        return cs;
      });
    }
    window.addEventListener("keydown", handleKey, true);
    return () => window.removeEventListener("keydown", handleKey, true);
  }, []);

  useEffect(() => {
    if (chatStep > 0) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 120);
    }
  }, [chatStep]);

  return (
    <SlideContainer variant="blue" animationKey="slide-02">
      {animStep < MAX_ANIM_STEPS && <KeyHint keyLabel="→" variant="blue" />}

      <div className="shrink-0 mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Spoiler</p>
        <h2 className="mt-2 text-3xl font-bold leading-tight text-white md:text-4xl">
          One prompt → your dashboard, in your brand
        </h2>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-2 gap-6">
        {/* LEFT: Chat */}
        <div className="flex min-h-0 flex-col">
          <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Kai chat · Cloud Desktop
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto rounded-2xl border border-white/15 bg-white/[0.04] p-3 backdrop-blur">
            <div className="space-y-2.5">
              <AnimatePresence>
                {visibleSteps.map((s) => (
                  <motion.div key={s.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    {s.type === "user" && (
                      <div className="flex justify-end">
                        <div className="max-w-[85%] rounded-2xl rounded-br-md bg-white px-3 py-2 text-sm text-foreground shadow">{s.content}</div>
                      </div>
                    )}
                    {s.type === "tool" && (
                      <div className="flex justify-start">
                        <div className="w-full rounded-xl border border-gray-700 bg-gray-900 p-2.5">
                          <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                            <span className="rounded bg-green-900/60 px-1.5 py-0.5 font-mono font-bold text-green-400">MCP</span>
                            <span className="font-mono font-semibold text-green-300">{s.toolName}</span>
                            <span>{s.icon}</span>
                          </div>
                          <div className="mt-1.5 grid grid-cols-2 gap-1.5">
                            <div>
                              <p className="mb-0.5 text-[8px] font-semibold uppercase tracking-wider text-gray-500">Request</p>
                              <pre className="rounded bg-gray-950 px-1.5 py-1 font-mono text-[9px] leading-snug text-blue-300 overflow-x-auto whitespace-pre-wrap">{s.request}</pre>
                            </div>
                            <div>
                              <p className="mb-0.5 text-[8px] font-semibold uppercase tracking-wider text-gray-500">Response</p>
                              <pre className="rounded bg-gray-950 px-1.5 py-1 font-mono text-[9px] leading-snug text-emerald-300 overflow-x-auto whitespace-pre-wrap">{s.response}</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {s.type === "assistant" && (
                      <div className="flex justify-start">
                        <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur">
                          <span dangerouslySetInnerHTML={{ __html: s.content.replace(/\*\*(.+?)\*\*/g, '<strong class="text-cyan-200 font-bold">$1</strong>') }} />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              {chatStep === 0 && <p className="py-6 text-center text-xs text-white/40">Press → to start…</p>}
              <div ref={bottomRef} />
            </div>
          </div>
          <p className="mt-2 text-center text-[11px] text-white/40">
            {chatDone ? (
              <>
                Press <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5 font-mono">→</kbd> to reskin the app · brand {brandIndex + 1}/{BRAND_COUNT}
              </>
            ) : (
              <>
                Press <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5 font-mono">→</kbd> to continue ({chatStep}/{CHAT_STEPS.length})
              </>
            )}
          </p>
        </div>

        {/* RIGHT: Dashboard — completely re-skinned per brand */}
        <div className="flex min-h-0 flex-col">
          <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Generated Data App
          </div>
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              {brandIndex === 0 && (
                <motion.div key="acme" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="absolute inset-0">
                  <AcmeDashboard reveal={reveal} />
                </motion.div>
              )}
              {brandIndex === 1 && (
                <motion.div key="northwind" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0">
                  <NorthwindDashboard />
                </motion.div>
              )}
              {brandIndex === 2 && (
                <motion.div key="helix" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0">
                  <HelixDashboard />
                </motion.div>
              )}
              {brandIndex === 3 && (
                <motion.div key="lumen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0">
                  <LumenDashboard />
                </motion.div>
              )}
              {brandIndex === 4 && (
                <motion.div key="bulanek" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0">
                  <BulanekDashboard />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}

/* ─── Brand 1: Acme Sales — sleek SaaS, cyan/blue, progressive reveal ─────── */
function AcmeDashboard({ reveal }: { reveal: number }) {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-4 font-sans backdrop-blur">
      {reveal === 0 && (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="text-white/40">
            <div className="mb-3 text-5xl">▢</div>
            <p className="text-sm">Waiting for the prompt…</p>
          </div>
        </div>
      )}
      <AnimatePresence>
        {reveal >= 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-300 to-blue-500" />
              <div>
                <div className="text-sm font-semibold text-white">Acme Sales</div>
                <div className="text-[10px] text-white/50">Q2 2026 · live</div>
              </div>
            </div>
            <div className="flex gap-1.5">
              {["Overview", "Pipeline", "Forecast"].map((tab, i) => (
                <span key={tab} className={`rounded-md px-2 py-0.5 text-[10px] ${i === 0 ? "bg-white/20 text-white" : "text-white/40"}`}>{tab}</span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {reveal >= 2 && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "Net Pipeline Value", value: "$3.2M", delta: "+12%", highlight: true },
                { label: "New deals", value: "186", delta: "+24", highlight: false },
                { label: "Win rate", value: "38%", delta: "+3pp", highlight: false },
                { label: "Avg. cycle", value: "21d", delta: "−2d", highlight: false },
              ].map((kpi, i) => (
                <motion.div key={kpi.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08 }} className={`rounded-lg border p-2 ${kpi.highlight ? "border-cyan-300/40 bg-cyan-300/10" : "border-white/10 bg-white/[0.04]"}`}>
                  <div className={`text-[9px] uppercase tracking-wider ${kpi.highlight ? "text-cyan-200" : "text-white/50"}`}>{kpi.label}</div>
                  <div className="mt-0.5 text-xl font-bold text-white">{kpi.value}</div>
                  <div className="text-[10px] text-emerald-300">{kpi.delta}</div>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-1.5 flex items-center gap-1.5 text-[9px] text-white/45">
              <span className="rounded bg-cyan-300/20 px-1.5 py-0.5 font-mono text-[9px] text-cyan-100">semantic_model</span>
              <span className="font-mono italic">Net Pipeline Value = SUM(amount × stage_probability)</span>
              <span className="text-white/30">· owner: FP&amp;A</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <AnimatePresence>
          {reveal >= 3 && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="col-span-2 rounded-lg border border-white/10 bg-white/[0.04] p-3">
              <div className="text-[10px] uppercase tracking-wider text-white/50">Net Pipeline Value · weekly</div>
              <div className="mt-2 flex h-24 items-end gap-1.5">
                {BAR_HEIGHTS.map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }} className="flex-1 rounded-t bg-gradient-to-t from-cyan-400/80 to-cyan-300" />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {reveal >= 4 && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
              <div className="text-[10px] uppercase tracking-wider text-white/50">Top regions</div>
              <ul className="mt-2 space-y-1.5">
                {[{ name: "EMEA", pct: 45 }, { name: "NA", pct: 32 }, { name: "APAC", pct: 18 }].map((r, i) => (
                  <li key={r.name} className="flex items-center justify-between text-[11px] text-white/80">
                    <span>{r.name}</span>
                    <div className="flex items-center gap-1.5">
                      <div className="h-1 w-14 overflow-hidden rounded-full bg-white/10">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${r.pct}%` }} transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }} className="h-full bg-cyan-300" />
                      </div>
                      <span className="w-7 text-right text-[10px] text-white/60">{r.pct}%</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {reveal >= 5 && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-center text-xs text-emerald-100">
            ✓ Deployed to Keboola · Acme Sales live
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Brand 2: Northwind Co. — wholesale, light theme, serif, donut ──────── */
function NorthwindDashboard() {
  const donut = [
    { label: "Beverages", pct: 38, color: "#10b981" },
    { label: "Condiments", pct: 24, color: "#34d399" },
    { label: "Dairy", pct: 19, color: "#6ee7b7" },
    { label: "Grains", pct: 11, color: "#a7f3d0" },
    { label: "Produce", pct: 8, color: "#d1fae5" },
  ];
  let offset = 0;
  const segments = donut.map((d) => {
    const seg = { ...d, dashOffset: offset };
    offset += d.pct;
    return seg;
  });
  return (
    <div className="h-full overflow-hidden rounded-2xl bg-stone-50 p-4 text-stone-900" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
      <div className="flex items-center justify-between border-b border-stone-300 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-emerald-700 text-base font-bold text-white">N</div>
          <div>
            <div className="text-base font-bold tracking-wide text-stone-900">Northwind Co.</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-stone-500">Wholesale · Est. 1995</div>
          </div>
        </div>
        <div className="text-right text-[10px] text-stone-500">
          <div>Period</div>
          <div className="font-semibold text-stone-700">FY 2026</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3 border-b border-stone-200 pb-3">
        {[
          { label: "Orders", value: "12,408" },
          { label: "Shipments", value: "9,830" },
          { label: "SKUs", value: "486" },
          { label: "Returns", value: "1.2%" },
        ].map((kpi) => (
          <div key={kpi.label}>
            <div className="text-[9px] uppercase tracking-wider text-stone-500">{kpi.label}</div>
            <div className="mt-0.5 text-2xl font-bold tabular-nums text-emerald-800">{kpi.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-5 gap-3">
        <div className="col-span-2 flex flex-col items-center justify-center">
          <div className="relative h-32 w-32">
            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e7e5e4" strokeWidth="3" />
              {segments.map((s) => (
                <circle key={s.label} cx="18" cy="18" r="15.915" fill="none" stroke={s.color} strokeWidth="3" strokeDasharray={`${s.pct} ${100 - s.pct}`} strokeDashoffset={-s.dashOffset} />
              ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-[9px] uppercase tracking-wider text-stone-500">Mix</div>
              <div className="text-base font-bold text-stone-800">5 cat.</div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="text-[10px] uppercase tracking-wider text-stone-500">Sales by category</div>
          <ul className="mt-2 space-y-1.5">
            {donut.map((d) => (
              <li key={d.label} className="flex items-center justify-between text-[11px] text-stone-700">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
                  {d.label}
                </span>
                <span className="tabular-nums text-stone-600">{d.pct}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-3 rounded-sm border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-center text-[11px] text-emerald-900">
        ✓ Northwind data app deployed · catalog.northwind.co
      </div>
    </div>
  );
}

/* ─── Brand 3: HELIX — industrial dark brutalist, mono, line chart ────────── */
function HelixDashboard() {
  const points = [
    { x: 0, y: 28 }, { x: 30, y: 22 }, { x: 60, y: 30 }, { x: 90, y: 14 },
    { x: 120, y: 18 }, { x: 150, y: 8 }, { x: 180, y: 12 }, { x: 200, y: 6 },
  ];
  const lineD = points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ");
  return (
    <div className="h-full overflow-hidden border-2 border-amber-400/50 bg-zinc-950 p-4 font-mono text-amber-100" style={{ backgroundImage: "linear-gradient(rgba(251,191,36,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.06) 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
      <div className="flex items-center justify-end border-b border-amber-400/30 pb-3">
        <div className="text-right">
          <div className="flex items-center justify-end gap-2 text-[10px] uppercase tracking-[0.3em] text-amber-300">
            <span>SYS · OK</span>
            <span className="h-2 w-2 animate-pulse bg-amber-400" />
          </div>
          <div className="mt-1 text-2xl font-bold uppercase tracking-widest text-amber-200">HELIX</div>
          <div className="text-[9px] uppercase tracking-[0.4em] text-amber-400/70">INDUSTRIES · MFG · 2026</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 divide-x divide-amber-400/20 border-y border-amber-400/30 py-2 text-center">
        {[
          { label: "THROUGHPUT", value: "8.4K", unit: "u/hr" },
          { label: "UPTIME", value: "99.2", unit: "%" },
          { label: "DEFECT", value: "0.8", unit: "%" },
          { label: "CYCLE", value: "127", unit: "ms" },
        ].map((kpi) => (
          <div key={kpi.label} className="px-2">
            <div className="text-[8px] tracking-[0.25em] text-amber-400/60">{kpi.label}</div>
            <div className="mt-0.5 flex items-baseline justify-center gap-1">
              <span className="text-xl font-bold tabular-nums text-amber-100">{kpi.value}</span>
              <span className="text-[9px] text-amber-400/70">{kpi.unit}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 border border-amber-400/30 bg-black/40 p-3">
        <div className="flex items-center justify-between">
          <div className="text-[9px] uppercase tracking-[0.3em] text-amber-300">THROUGHPUT · 24H</div>
          <div className="text-[9px] tabular-nums text-amber-400/70">▲ +4.2%</div>
        </div>
        <svg viewBox="0 0 200 40" className="mt-2 h-20 w-full">
          <defs>
            <linearGradient id="helixGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(251,191,36,0.3)" />
              <stop offset="100%" stopColor="rgba(251,191,36,0)" />
            </linearGradient>
          </defs>
          <path d={`${lineD} L 200 40 L 0 40 Z`} fill="url(#helixGrad)" />
          <path d={lineD} fill="none" stroke="#fbbf24" strokeWidth="1.5" />
          {points.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="2" fill="#fbbf24" stroke="#000" strokeWidth="0.5" />
          ))}
        </svg>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 text-[9px] uppercase tracking-widest text-amber-200">
        {[
          { line: "LINE A", status: "OK" },
          { line: "LINE B", status: "OK" },
          { line: "LINE C", status: "WARN" },
        ].map((l) => (
          <div key={l.line} className="border border-amber-400/30 bg-black/30 px-2 py-1">
            <div className="flex items-center justify-between">
              <span>{l.line}</span>
              <span className={l.status === "OK" ? "text-emerald-400" : "text-amber-400"}>● {l.status}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 border border-amber-400/40 bg-amber-400/10 px-3 py-1.5 text-center text-[10px] uppercase tracking-[0.3em] text-amber-200">
        [ HELIX OPS · DEPLOYED · /factory/main ]
      </div>
    </div>
  );
}

/* ─── Brand 4: Lumen Group — energy, dark gradient, neon, area chart ──────── */
function LumenDashboard() {
  const wavePts = [50, 58, 52, 65, 70, 62, 78, 82, 75, 88, 92, 85, 95];
  const w = 200;
  const h = 60;
  const stepX = w / (wavePts.length - 1);
  const max = 100;
  const path = wavePts.map((v, i) => {
    const x = i * stepX;
    const y = h - (v / max) * h;
    return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  }).join(" ");
  const filled = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <div className="relative h-full overflow-hidden rounded-3xl p-4 text-fuchsia-50" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 40%, #831843 100%)", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-violet-500/30 blur-3xl" />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 rotate-45 rounded-md bg-gradient-to-br from-fuchsia-300 to-violet-500 shadow-[0_0_20px_rgba(217,70,239,0.6)]">
            <div className="absolute inset-1 -rotate-45 rounded-sm bg-fuchsia-100/20 backdrop-blur" />
          </div>
          <div>
            <div className="text-base font-light tracking-[0.3em] text-fuchsia-100">L U M E N</div>
            <div className="text-[10px] tracking-[0.4em] text-fuchsia-300/70">GROUP · ENERGY</div>
          </div>
        </div>
        <div className="rounded-full border border-fuchsia-300/40 bg-fuchsia-300/10 px-2.5 py-1 text-[9px] uppercase tracking-widest text-fuchsia-100">
          ● LIVE
        </div>
      </div>
      <div className="relative mt-4 grid grid-cols-3 gap-2">
        {[
          { label: "MWh generated", value: "248.6", unit: "today", glow: "shadow-[0_0_18px_rgba(217,70,239,0.4)]" },
          { label: "CO₂ offset", value: "112t", unit: "this week", glow: "shadow-[0_0_18px_rgba(139,92,246,0.4)]" },
          { label: "Grid load", value: "71%", unit: "of capacity", glow: "shadow-[0_0_18px_rgba(217,70,239,0.4)]" },
        ].map((kpi) => (
          <div key={kpi.label} className={`rounded-2xl border border-fuchsia-300/20 bg-white/[0.03] p-3 backdrop-blur ${kpi.glow}`}>
            <div className="text-[9px] uppercase tracking-[0.2em] text-fuchsia-200/70">{kpi.label}</div>
            <div className="mt-1 text-2xl font-light tabular-nums text-fuchsia-50">{kpi.value}</div>
            <div className="text-[10px] text-fuchsia-300/60">{kpi.unit}</div>
          </div>
        ))}
      </div>
      <div className="relative mt-3 rounded-2xl border border-fuchsia-300/20 bg-white/[0.03] p-3 backdrop-blur">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-fuchsia-200/70">
          <span>Grid output · 12h</span>
          <span className="text-fuchsia-300">▲ +6.4%</span>
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 h-20 w-full">
          <defs>
            <linearGradient id="lumenWave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(232,121,249,0.7)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0.05)" />
            </linearGradient>
            <linearGradient id="lumenLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f0abfc" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <filter id="lumenGlow"><feGaussianBlur stdDeviation="1.2" /></filter>
          </defs>
          <path d={filled} fill="url(#lumenWave)" />
          <path d={path} fill="none" stroke="url(#lumenLine)" strokeWidth="2" filter="url(#lumenGlow)" />
          <path d={path} fill="none" stroke="url(#lumenLine)" strokeWidth="1.2" />
        </svg>
      </div>
      <div className="relative mt-3 rounded-full border border-fuchsia-300/40 bg-fuchsia-300/10 px-4 py-2 text-center text-[11px] tracking-[0.3em] text-fuchsia-100 shadow-[0_0_24px_rgba(217,70,239,0.3)]">
        LUMEN · STREAMING · grid.lumengroup.io
      </div>
    </div>
  );
}

/* ─── Brand 5: Bulánek Corporation — Bulánci.cz game style ────────────────── */
/* Bulánci = "Extrémně Agresivní Polštáře" (E.A.P.) — pillow fighters with guns,
   classic 2001 Czech top-down 2D shooter, retro freeware aesthetic. */
function BulanekDashboard() {
  const bars = [3, 6, 4, 8, 5, 9, 7];
  const barColors = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#a855f7", "#ec4899", "#eab308"];
  return (
    <div className="relative h-full overflow-hidden rounded-2xl" style={{ background: "linear-gradient(to bottom, #4a7c4e 0%, #3d6b41 55%, #5a8c5e 100%)", fontFamily: '"Press Start 2P", "Comic Sans MS", "Chalkboard SE", monospace', imageRendering: "pixelated" as const }}>
      {/* Pixel-grid texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />

      {/* Header */}
      <div className="relative px-3 pt-3">
        <div className="flex items-center gap-3 border-[3px] border-black bg-yellow-300 px-3 py-2 shadow-[0_4px_0_rgba(0,0,0,1)]">
          {/* Bulánek mascot — a pillow with a gun */}
          <svg viewBox="0 0 48 40" className="h-10 w-12 shrink-0 drop-shadow">
            {/* Pillow body — rounded square with seams */}
            <rect x="6" y="8" width="28" height="26" rx="6" fill="#dc2626" stroke="#000" strokeWidth="2" />
            {/* Pillow seam highlights */}
            <line x1="6" y1="13" x2="34" y2="13" stroke="#7f1d1d" strokeWidth="0.8" strokeDasharray="2 2" />
            <line x1="6" y1="29" x2="34" y2="29" stroke="#7f1d1d" strokeWidth="0.8" strokeDasharray="2 2" />
            {/* Pillow corner tassels */}
            <circle cx="6" cy="8" r="1.5" fill="#fbbf24" stroke="#000" strokeWidth="0.8" />
            <circle cx="34" cy="8" r="1.5" fill="#fbbf24" stroke="#000" strokeWidth="0.8" />
            <circle cx="6" cy="34" r="1.5" fill="#fbbf24" stroke="#000" strokeWidth="0.8" />
            <circle cx="34" cy="34" r="1.5" fill="#fbbf24" stroke="#000" strokeWidth="0.8" />
            {/* Angry eyes */}
            <path d="M 12 19 L 17 18 L 17 22 Z" fill="#000" />
            <path d="M 28 18 L 23 19 L 23 22 Z" fill="#000" />
            {/* Angry mouth */}
            <path d="M 16 27 L 20 25 L 24 27" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
            {/* Pistol */}
            <rect x="33" y="19" width="11" height="4" fill="#374151" stroke="#000" strokeWidth="1" />
            <rect x="36" y="23" width="3" height="3" fill="#374151" stroke="#000" strokeWidth="1" />
            {/* Muzzle flash */}
            <path d="M 44 21 L 47 19 L 46 21 L 47 23 Z" fill="#fbbf24" stroke="#000" strokeWidth="0.8" />
          </svg>
          <div className="flex-1">
            <div className="text-base font-black leading-tight text-red-700" style={{ textShadow: "1.5px 1.5px 0 #fff, 2.5px 2.5px 0 #000", letterSpacing: "1px" }}>
              BULÁNEK CORP.
            </div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-blue-900">E.A.P. · Multiplayer · Server CZ</div>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <div className="border-2 border-black bg-red-600 px-1.5 py-0.5 text-[10px] font-black text-yellow-200 shadow-[0_2px_0_rgba(0,0,0,1)]">LV. 42</div>
            <div className="border border-black bg-black px-1.5 py-0.5 text-[8px] font-bold text-green-400" style={{ fontFamily: "monospace" }}>HP ████░ 80</div>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="relative mt-3 grid grid-cols-4 gap-2 px-3">
        {[
          { label: "Polštáře", value: "1,842", color: "bg-red-500" },
          { label: "Frags", value: "3,420", color: "bg-yellow-400" },
          { label: "Výstřely", value: "48K", color: "bg-blue-500" },
          { label: "K / D", value: "3.4", color: "bg-green-500" },
        ].map((kpi) => (
          <div key={kpi.label} className={`border-[3px] border-black ${kpi.color} px-1.5 py-1 text-center shadow-[0_3px_0_rgba(0,0,0,1)]`}>
            <div className="text-[8px] font-black uppercase tracking-wide text-black">{kpi.label}</div>
            <div className="text-base font-black leading-tight text-white" style={{ textShadow: "1.5px 1.5px 0 #000" }}>{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Chart panel */}
      <div className="relative mt-3 mx-3 border-[3px] border-black bg-stone-200 p-2.5 shadow-[0_3px_0_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-black uppercase tracking-wide text-stone-900">FRAGY ZA TÝDEN</div>
          <div className="border-2 border-black bg-yellow-300 px-1.5 py-0.5 text-[9px] font-black text-black">+ NEW HIGH</div>
        </div>
        <div className="mt-2 flex h-20 items-end gap-1.5">
          {bars.map((v, i) => (
            <div key={i} className="flex-1 border-[2.5px] border-b-0 border-black" style={{ height: `${v * 10}%`, background: barColors[i] }} />
          ))}
        </div>
        <div className="mt-1 flex justify-between text-[8px] font-bold text-stone-800">
          <span>PO</span><span>ÚT</span><span>ST</span><span>ČT</span><span>PÁ</span><span>SO</span><span>NE</span>
        </div>
      </div>

      {/* Weapon stats + Leaderboard side by side */}
      <div className="relative mt-2 mx-3 grid grid-cols-2 gap-2">
        <div className="border-[3px] border-black bg-stone-200 px-2 py-1.5 shadow-[0_3px_0_rgba(0,0,0,1)]">
          <div className="text-[10px] font-black uppercase tracking-wide text-stone-900">ARZENÁL</div>
          <ul className="mt-1 space-y-0.5 text-[9px] font-bold text-stone-800">
            <li className="flex justify-between"><span>★ Brokovnice</span><span className="tabular-nums">42%</span></li>
            <li className="flex justify-between"><span>★ Pistole</span><span className="tabular-nums">31%</span></li>
            <li className="flex justify-between"><span>★ Bazooka</span><span className="tabular-nums">27%</span></li>
          </ul>
        </div>
        <div className="border-[3px] border-black bg-stone-200 px-2 py-1.5 shadow-[0_3px_0_rgba(0,0,0,1)]">
          <div className="text-[10px] font-black uppercase tracking-wide text-stone-900">TOP POLŠTÁŘE</div>
          <ul className="mt-1 space-y-0.5 text-[9px] font-bold text-stone-800">
            <li className="flex justify-between"><span className="text-red-700">1. Pepík</span><span className="tabular-nums">9.4K</span></li>
            <li className="flex justify-between"><span className="text-blue-700">2. Bobík</span><span className="tabular-nums">8.1K</span></li>
            <li className="flex justify-between"><span className="text-green-700">3. Adámek</span><span className="tabular-nums">7.6K</span></li>
          </ul>
        </div>
      </div>

      {/* Status bar at bottom */}
      <div className="absolute bottom-2 left-3 right-3 border-[3px] border-black bg-red-600 px-3 py-1 text-center text-[10px] font-black uppercase tracking-[0.15em] text-yellow-200 shadow-[0_3px_0_rgba(0,0,0,1)]" style={{ textShadow: "1px 1px 0 #000" }}>
        ▶ GAME RUNNING · bulanci.bulanekcorp.cz ◀
      </div>
    </div>
  );
}
