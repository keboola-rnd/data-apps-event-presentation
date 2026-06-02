import { motion } from "framer-motion";
import { ContentSlide } from "@/components/presentation/ContentSlide";

const BARS = [60, 75, 45, 90, 65, 80];

export default function Slide03() {
  return (
    <ContentSlide
      title="Why We Even Started"
      subtitle="Keboola was great at the data — but the dashboard always lived elsewhere"
      animationKey="slide-03"
    >
      <div className="grid grid-cols-2 gap-10">
        {/* Left: narrative */}
        <div className="flex flex-col gap-4 pt-1">
          <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="text-lg leading-relaxed text-foreground">
            Keboola has always been strong at <strong>data preparation</strong> — extract, transform, store, govern.
          </motion.p>
          <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.3 }} className="text-lg leading-relaxed text-foreground">
            But every <strong>visualization</strong> meant leaving the platform — Tableau, Power BI, Looker, or a Python notebook hosted somewhere <em>else</em>.
          </motion.p>
          <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.3 }} className="text-lg leading-relaxed text-foreground">
            Customers kept asking the same question: <em>can the dashboard live inside Keboola too?</em>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.35 }} className="mt-3 flex gap-3">
            <div className="rounded-xl border-2 border-primary/30 bg-primary/5 px-4 py-3">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">Sep 2023</div>
              <div className="mt-1 text-base font-bold text-foreground">Public beta</div>
            </div>
            <div className="rounded-xl border-2 border-emerald-500/40 bg-emerald-50 px-4 py-3">
              <div className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Feb 2024</div>
              <div className="mt-1 text-base font-bold text-foreground">Generally available</div>
            </div>
          </motion.div>

          <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.3 }} className="mt-3 text-lg leading-relaxed text-foreground">
            We started with <strong>Streamlit</strong> — the simplest Python library for instant dashboards. A few lines of code, a working app.
          </motion.p>
        </div>

        {/* Right: Streamlit-styled mockup */}
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, duration: 0.4 }} className="flex items-start">
          <div className="w-full overflow-hidden rounded-xl border border-stone-300 bg-white shadow-lg">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 border-b border-stone-200 bg-stone-100 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <div className="ml-3 flex-1 rounded bg-white px-2 py-0.5 text-[10px] font-mono text-stone-500">
                share.streamlit.io / sales-explorer
              </div>
            </div>
            {/* Streamlit layout: sidebar + main */}
            <div className="flex h-72 bg-white">
              {/* Sidebar */}
              <div className="w-32 border-r border-stone-200 bg-stone-50 p-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Filters</div>
                <div className="mt-3 space-y-3">
                  <div>
                    <div className="text-[9px] text-stone-600">Region</div>
                    <div className="mt-1 rounded border border-stone-300 bg-white px-2 py-1 text-[10px] text-stone-700">EMEA ▾</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-stone-600">Quarter</div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-stone-200">
                      <div className="h-full w-2/3 rounded-full" style={{ background: "#ff4b4b" }} />
                    </div>
                    <div className="mt-0.5 text-[9px] text-stone-500">Q1 — Q3</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-5 rounded-full" style={{ background: "#ff4b4b" }}>
                      <span className="block h-2.5 w-2.5 translate-x-2 translate-y-0.5 rounded-full bg-white shadow" />
                    </span>
                    <span className="text-[9px] text-stone-600">Show trend</span>
                  </div>
                </div>
              </div>
              {/* Main content */}
              <div className="flex-1 p-3">
                <div className="flex items-center gap-2">
                  <span className="text-base">🎈</span>
                  <h3 className="text-sm font-bold text-stone-900">Sales Explorer</h3>
                </div>
                <p className="mt-0.5 text-[10px] text-stone-500">Interactive sales pipeline by region and quarter.</p>
                {/* metric row */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[
                    { label: "Total revenue", value: "$4.8M", delta: "+12%" },
                    { label: "Deals closed", value: "186", delta: "+24" },
                    { label: "Win rate", value: "38%", delta: "+3pp" },
                  ].map((m) => (
                    <div key={m.label} className="rounded border border-stone-200 px-2 py-1">
                      <div className="text-[9px] text-stone-500">{m.label}</div>
                      <div className="text-sm font-bold text-stone-900">{m.value}</div>
                      <div className="text-[9px] text-emerald-600">{m.delta}</div>
                    </div>
                  ))}
                </div>
                {/* chart */}
                <div className="mt-2 rounded border border-stone-200 p-2">
                  <div className="text-[9px] font-semibold text-stone-700">Revenue by quarter</div>
                  <div className="mt-1.5 flex h-20 items-end gap-1.5">
                    {BARS.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.6 + i * 0.06, duration: 0.35 }}
                        className="flex-1 rounded-t"
                        style={{ background: "#ff4b4b" }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-1.5 text-right text-[9px] italic text-stone-400">Made with Streamlit</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </ContentSlide>
  );
}
