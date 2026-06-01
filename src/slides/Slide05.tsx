import { motion } from "framer-motion";
import { ContentSlide } from "@/components/presentation/ContentSlide";

const BARS = [55, 78, 42, 88, 64, 95];

export default function Slide05() {
  return (
    <ContentSlide
      title="What People Started Building"
      subtitle="Two flavours covered ~80% of what got shipped back then."
      animationKey="slide-05"
    >
      <div className="grid grid-cols-2 gap-6">
        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col"
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-md bg-foreground/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-foreground">
              Dashboards
            </span>
            <span className="text-sm text-muted-foreground">Read-only views over your data</span>
          </div>
          <div className="overflow-hidden rounded-xl border border-stone-300 bg-white shadow-md">
            <div className="flex items-center gap-1.5 border-b border-stone-200 bg-stone-100 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-[10px] text-stone-500">sales-dashboard.app</span>
            </div>
            <div className="flex h-56 bg-white">
              <div className="w-24 border-r border-stone-200 bg-stone-50 p-2 text-[10px]">
                <div className="font-bold uppercase tracking-wider text-stone-500">Filters</div>
                <div className="mt-2">
                  <div className="text-[9px] text-stone-600">Region</div>
                  <div className="mt-0.5 rounded border border-stone-300 bg-white px-1.5 py-0.5 text-[9px] text-stone-700">EMEA ▾</div>
                </div>
                <div className="mt-2">
                  <div className="text-[9px] text-stone-600">Quarter</div>
                  <div className="mt-0.5 h-1 w-full rounded-full bg-stone-200">
                    <div className="h-full w-3/4 rounded-full" style={{ background: "#ff4b4b" }} />
                  </div>
                </div>
              </div>
              <div className="flex-1 p-2.5">
                <div className="flex items-center gap-1.5">
                  <span>📊</span>
                  <span className="text-xs font-bold text-stone-900">Sales Overview</span>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  {[
                    { l: "Revenue", v: "$4.8M", d: "+12%" },
                    { l: "Deals", v: "186", d: "+24" },
                    { l: "Win rate", v: "38%", d: "+3pp" },
                  ].map((m) => (
                    <div key={m.l} className="rounded border border-stone-200 px-1.5 py-1">
                      <div className="text-[8px] text-stone-500">{m.l}</div>
                      <div className="text-xs font-bold text-stone-900">{m.v}</div>
                      <div className="text-[8px] text-emerald-600">{m.d}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 rounded border border-stone-200 p-1.5">
                  <div className="text-[9px] font-semibold text-stone-700">Revenue by quarter</div>
                  <div className="mt-1 flex h-14 items-end gap-1">
                    {BARS.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                        className="flex-1 rounded-t"
                        style={{ background: "#ff4b4b" }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-1.5 text-right text-[8px] italic text-stone-400">Made with Streamlit</div>
              </div>
            </div>
          </div>
          <ul className="mt-3 space-y-1 text-sm text-foreground/80">
            <li>→ KPI overviews · executive snapshots</li>
            <li>→ Drilldowns by region, time, customer</li>
            <li>→ Ad-hoc analytics replacing Tableau views</li>
          </ul>
        </motion.div>

        {/* Data entry mockup */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.35 }}
          className="flex flex-col"
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-md bg-foreground/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-foreground">
              Data entry
            </span>
            <span className="text-sm text-muted-foreground">The end of shared Excel files</span>
          </div>
          <div className="overflow-hidden rounded-xl border border-stone-300 bg-white shadow-md">
            <div className="flex items-center gap-1.5 border-b border-stone-200 bg-stone-100 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-[10px] text-stone-500">sales-pipeline-editor.app</span>
            </div>
            <div className="h-56 bg-white p-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span>📊</span>
                  <span className="text-xs font-bold text-stone-900">Sales Pipeline · Editor</span>
                </div>
                <span className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[8px] text-stone-500 line-through">
                  sales_v17_FINAL_v2.xlsx
                </span>
              </div>

              {/* Excel-style grid */}
              <div className="mt-2 overflow-hidden rounded border border-stone-300">
                {/* Header row */}
                <div className="grid grid-cols-[36px_1fr_70px_90px_24px] border-b border-stone-300 bg-stone-100 text-[9px] font-bold uppercase tracking-wider text-stone-600">
                  <div className="border-r border-stone-300 px-1.5 py-1 text-center">#</div>
                  <div className="border-r border-stone-300 px-1.5 py-1">Customer</div>
                  <div className="border-r border-stone-300 px-1.5 py-1 text-right">Amount</div>
                  <div className="border-r border-stone-300 px-1.5 py-1">Stage</div>
                  <div className="px-1 py-1 text-center">✓</div>
                </div>
                {/* Data rows */}
                {[
                  { id: "4821", customer: "Acme Corp.", amount: "$480,000", stage: "Negotiation", checked: true, edited: true },
                  { id: "4822", customer: "Globex", amount: "$220,000", stage: "Closing", checked: true, edited: false },
                  { id: "4823", customer: "Initech", amount: "$95,000", stage: "Discovery", checked: false, edited: false },
                  { id: "4824", customer: "Soylent", amount: "$340,000", stage: "Proposal", checked: false, edited: true },
                  { id: "4825", customer: "Hooli", amount: "$612,000", stage: "Negotiation", checked: true, edited: false },
                ].map((row, i) => (
                  <div
                    key={row.id}
                    className={`grid grid-cols-[36px_1fr_70px_90px_24px] text-[10px] text-stone-700 ${i % 2 === 0 ? "bg-white" : "bg-stone-50/50"} ${row.edited ? "ring-1 ring-inset ring-amber-300" : ""}`}
                  >
                    <div className="border-r border-stone-200 px-1.5 py-0.5 text-center text-stone-400">{row.id}</div>
                    <div className="border-r border-stone-200 px-1.5 py-0.5">{row.customer}</div>
                    <div className="border-r border-stone-200 px-1.5 py-0.5 text-right tabular-nums">{row.amount}</div>
                    <div className="border-r border-stone-200 px-1.5 py-0.5 text-stone-600">{row.stage} ▾</div>
                    <div className="px-1 py-0.5 text-center">
                      {row.checked ? <span className="text-emerald-600">☑</span> : <span className="text-stone-300">☐</span>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[9px] italic text-amber-700">2 edits · anna@acme.com</span>
                <div className="flex items-center gap-1.5">
                  <button className="rounded border border-stone-300 px-2 py-0.5 text-[10px] text-stone-700">
                    Cancel
                  </button>
                  <button className="rounded px-2 py-0.5 text-[10px] font-semibold text-white" style={{ background: "#ff4b4b" }}>
                    💾 Save to Storage
                  </button>
                </div>
              </div>
              <div className="mt-1 text-right text-[8px] italic text-stone-400">Made with Streamlit</div>
            </div>
          </div>
          <ul className="mt-3 space-y-1 text-sm text-foreground/80">
            <li>→ Replace <code className="rounded bg-stone-100 px-1 font-mono text-xs">sales_v17_FINAL.xlsx</code> shared spreadsheets</li>
            <li>→ Multi-user edits with audit trail — no more "who broke the formulas?"</li>
            <li>→ Validation, dropdowns, references — without VBA macros</li>
          </ul>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="mt-4 text-center text-sm italic text-muted-foreground"
      >
        Same Streamlit, two different reasons to ship.
      </motion.p>
    </ContentSlide>
  );
}
