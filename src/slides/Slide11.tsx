import { UseCaseSlide, BrowserChrome } from "@/components/presentation/UseCaseSlide";

const BARS = [62, 75, 48, 88, 65, 95, 72, 84, 58, 72, 90, 84];

function Mockup() {
  return (
    <BrowserChrome url="sales-cockpit.acme.com">
      <div className="flex flex-1 flex-col bg-white overflow-hidden">
        {/* Toolbar with tabs */}
        <div className="flex items-center justify-between border-b border-stone-200 bg-stone-50 px-3 py-1.5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-stone-900">📈 Sales Cockpit · Region UK</span>
            <div className="flex gap-1">
              {["Overview", "Rep Detail", "Pipeline", "Top & Flops", "✻ Ask Kai"].map((t, i) => (
                <span key={t} className={`rounded px-2 py-0.5 text-[10px] ${i === 0 ? "bg-primary text-white" : i === 4 ? "bg-orange-100 text-orange-700" : "text-stone-500"}`}>{t}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-1 text-[10px]">
            <span className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[9px] text-stone-500">out.c-sales.fact_pl_monthly</span>
            <button className="rounded border border-stone-300 bg-white px-1.5 py-0.5 text-stone-600">⬇ CSV</button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar cascading filters */}
          <div className="w-36 border-r border-stone-200 bg-stone-50 p-2 text-[10px]">
            <div className="font-bold uppercase tracking-wider text-stone-500">Cascading filters</div>
            <div className="mt-1.5">
              <div className="text-[9px] font-medium text-stone-600">Country</div>
              <div className="mt-0.5 rounded border border-stone-300 bg-white px-1.5 py-0.5 text-[9px] text-stone-700">UK ▾</div>
            </div>
            <div className="mt-1.5">
              <div className="text-[9px] font-medium text-stone-600">Category</div>
              <div className="mt-0.5 rounded border border-stone-300 bg-white px-1.5 py-0.5 text-[9px] text-stone-700">Local · Tier 3 ▾</div>
            </div>
            <div className="mt-1.5">
              <div className="text-[9px] font-medium text-stone-600">Customer segment</div>
              <div className="mt-0.5 space-y-0.5">
                {["Segment A", "Segment B", "House accounts"].map((s, i) => (
                  <label key={s} className="flex items-center gap-1 text-[9px] text-stone-700">
                    <span className={`inline-block h-2 w-2 rounded-sm border ${i < 2 ? "border-primary bg-primary" : "border-stone-300"}`} /> {s}
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-1.5">
              <div className="text-[9px] font-medium text-stone-600">Period</div>
              <div className="mt-0.5 rounded border border-stone-300 bg-white px-1.5 py-0.5 font-mono text-[9px] text-stone-700">QTD · Q2'26</div>
            </div>
            <div className="mt-2 rounded border border-amber-200 bg-amber-50 p-1.5 text-[8px] text-amber-800">
              💡 Cascading: segment options change per category
            </div>
          </div>

          {/* Main */}
          <div className="flex-1 overflow-y-auto p-2.5">
            {/* KPIs - real Groupon metrics */}
            <div className="grid grid-cols-5 gap-1.5">
              {[
                { l: "Revenue", v: "£4.82M", d: "+12.4%", up: true, hint: "vs prev. qtr" },
                { l: "Bookings", v: "£8.1M", d: "+18%", up: true, hint: "qtr to date" },
                { l: "Margin", v: "31.4%", d: "+1.2pp", up: true, hint: "first-month" },
                { l: "Conversion", v: "3.84%", d: "+0.4pp", up: true, hint: "to target" },
                { l: "Target attainment", v: "84%", d: "on track", up: true, hint: "by Aug 31" },
              ].map((m) => (
                <div key={m.l} className="rounded-lg border border-stone-200 bg-white px-2 py-1.5">
                  <div className="text-[9px] uppercase tracking-wider text-stone-500">{m.l}</div>
                  <div className="text-sm font-bold tabular-nums text-stone-900">{m.v}</div>
                  <div className={`text-[8px] ${m.up ? "text-emerald-600" : "text-red-600"}`}>{m.d} <span className="text-stone-400">· {m.hint}</span></div>
                </div>
              ))}
            </div>

            {/* LLM daily commentary banner */}
            <div className="mt-2 rounded-lg border border-orange-200 bg-orange-50/60 p-1.5">
              <div className="flex items-start gap-1.5 text-[10px]">
                <span className="text-orange-600">✻</span>
                <div>
                  <span className="font-semibold text-orange-900">Daily LLM commentary</span>
                  <span className="text-stone-500"> · 06:14 UTC</span>
                  <p className="mt-0.5 text-stone-700">
                    Segment A overshooting target by 8% — Food &amp; Drink driving the lift (+18% month-over-month).
                    <strong className="text-stone-900"> 3 deals flagged HOLD</strong> by the margin guardrail (under 22%).
                  </p>
                </div>
              </div>
            </div>

            {/* Bars + scoreboard */}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-stone-200 p-1.5">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-semibold text-stone-700">Revenue by month · 12mo</div>
                  <span className="text-[8px] text-stone-400">GBP · M</span>
                </div>
                <div className="mt-1 flex h-12 items-end gap-0.5">
                  {BARS.map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-primary" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-stone-200 p-1.5">
                <div className="text-[10px] font-semibold text-stone-700">Deal scoreboard · today</div>
                <div className="mt-1 space-y-0.5 text-[9px]">
                  {[
                    { id: "DL-4821", name: "Acme · Beauty", verdict: "SHIP", color: "bg-emerald-100 text-emerald-700" },
                    { id: "DL-4822", name: "Globex · F&B", verdict: "HOLD", color: "bg-amber-100 text-amber-700" },
                    { id: "DL-4823", name: "Initech · Travel", verdict: "KILL", color: "bg-red-100 text-red-700" },
                    { id: "DL-4824", name: "Soylent · Wellness", verdict: "SHIP", color: "bg-emerald-100 text-emerald-700" },
                    { id: "DL-4825", name: "Hooli · Local", verdict: "FLAT", color: "bg-stone-100 text-stone-700" },
                  ].map((d) => (
                    <div key={d.id} className="flex items-center gap-1.5">
                      <span className="w-14 font-mono text-stone-500">{d.id}</span>
                      <span className="flex-1 truncate text-stone-700">{d.name}</span>
                      <span className={`rounded px-1.5 py-0.5 text-[8px] font-bold ${d.color}`}>{d.verdict}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Ask Kai chat panel */}
          <div className="w-40 border-l border-stone-200 bg-orange-50/30 p-2">
            <div className="flex items-center gap-1 text-[10px] font-bold text-orange-700">
              <span>✻</span><span>Ask Kai</span>
              <span className="ml-auto text-[8px] text-stone-400">claude</span>
            </div>
            <div className="mt-1.5 space-y-1 text-[9px]">
              <div className="rounded-lg bg-primary px-1.5 py-1 text-white">Why is segment B flat?</div>
              <div className="rounded-lg border border-stone-200 bg-white px-1.5 py-1 text-stone-700">
                <span className="text-stone-500 italic">Calling tool...</span>
                <div className="mt-0.5 font-mono text-[8px] text-emerald-700">⚙ query_pl_breakdown</div>
                <div className="mt-0.5 rounded bg-amber-50 border border-amber-200 px-1 py-0.5 text-[8px]">
                  ⚠ approve tool call?
                  <div className="mt-0.5 flex gap-0.5">
                    <span className="rounded bg-emerald-600 px-1 text-[7px] text-white">✓</span>
                    <span className="rounded border border-stone-300 bg-white px-1 text-[7px]">✗</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 text-[8px] text-stone-500 italic">streaming · tool approval gate</div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export default function Slide11() {
  return (
    <UseCaseSlide
      slideNumber="11"
      title="BI Dashboards & Self-Service Reporting"
      subtitle="Self-service dashboard. Business users tweak it via Kai — no waiting for the data analyst to ship a fix."
      apps={403}
      clients={54}
      growthHighlight=""
      scenarios={[
        'Business user asks Kai "add a column for last week vs. this week" — change is live in seconds, no ticket, no PR',
        "Sales cockpit with KPIs, filters, drill-downs — replaces emailed weekly reports",
        "Daily AI summary written above the table — what changed, why, what to act on",
        "A/B test scoreboard — treatment vs. control, side by side",
      ]}
      whenToStart=""
      mockup={<Mockup />}
      appsHistory={[17,17,18,19,24,25,30,43,50,67,90,104,114,129,146,212,315,403]}
      clientsHistory={[6,6,7,8,11,12,14,15,16,20,22,25,27,28,33,38,46,54]}
    />
  );
}
