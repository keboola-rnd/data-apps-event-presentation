import { UseCaseSlide, BrowserChrome } from "@/components/presentation/UseCaseSlide";

function Mockup() {
  const days = [
    { date: "May 27", ga4: 128402, internal: 132847, delta: 3.46, status: "warn" },
    { date: "May 26", ga4: 142150, internal: 144020, delta: 1.32, status: "ok" },
    { date: "May 25", ga4: 89240, internal: 91890, delta: 2.97, status: "warn" },
    { date: "May 24", ga4: 76502, internal: 76812, delta: 0.41, status: "ok" },
    { date: "May 23", ga4: 138920, internal: 142640, delta: 2.68, status: "warn" },
    { date: "May 22", ga4: 145720, internal: 146120, delta: 0.27, status: "ok" },
    { date: "May 21", ga4: 132180, internal: 132450, delta: 0.20, status: "ok" },
  ];
  return (
    <BrowserChrome url="ga4-vs-internal.acme.com">
      <div className="flex flex-1 flex-col bg-white overflow-hidden">
        <div className="flex items-center justify-between border-b border-stone-200 bg-stone-50 px-3 py-1.5">
          <span className="text-sm font-bold text-stone-900">🔍 Two-Source Truth Monitor · GA4 ↔ Internal</span>
          <span className="rounded bg-amber-100 px-2 py-0.5 text-[9px] font-semibold text-amber-700">3 days &gt; 2% threshold</span>
        </div>

        {/* Big number cards */}
        <div className="grid grid-cols-3 gap-2 border-b border-stone-200 px-3 py-2">
          <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-1.5">
            <div className="text-[9px] font-semibold uppercase tracking-wider text-emerald-700">GA4 · sessions (yesterday)</div>
            <div className="mt-0.5 text-base font-bold tabular-nums text-stone-800">128,402</div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-stone-500">fresh · 14m ago</span>
              <code className="rounded bg-emerald-100 px-1 font-mono text-[8px] text-emerald-700">in.c-ga4.sessions_daily</code>
            </div>
          </div>
          <div className="rounded-lg border border-amber-300 bg-amber-50 p-1.5">
            <div className="text-[9px] font-semibold uppercase tracking-wider text-amber-700">Internal tracker · same day</div>
            <div className="mt-0.5 text-base font-bold tabular-nums text-stone-800">132,847 <span className="text-[10px] text-amber-700">Δ +3.46%</span></div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-stone-500">fresh · 8m ago</span>
              <code className="rounded bg-amber-100 px-1 font-mono text-[8px] text-amber-700">in.c-tracking.events_daily</code>
            </div>
          </div>
          <div className="rounded-lg border border-stone-300 bg-stone-50 p-1.5">
            <div className="text-[9px] font-semibold uppercase tracking-wider text-stone-600">7-day mean drift</div>
            <div className="mt-0.5 text-base font-bold tabular-nums text-stone-800">1.62% <span className="text-[10px] text-stone-500">σ 1.41</span></div>
            <div className="text-[9px] text-stone-500">"validated 100% vs manual sheet"</div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Daily compare table */}
          <div className="flex-1 overflow-y-auto">
            <div className="sticky top-0 z-10 grid grid-cols-[76px_1fr_1fr_76px_56px] border-b border-stone-300 bg-stone-100 px-1.5 py-1 text-[9px] font-bold uppercase text-stone-600">
              <span>Date</span><span className="text-right">GA4</span><span className="text-right">Internal</span><span className="text-right">Δ %</span><span className="text-center">Status</span>
            </div>
            {days.map((d) => (
              <div key={d.date} className={`grid grid-cols-[76px_1fr_1fr_76px_56px] border-b border-stone-100 px-1.5 py-0.5 text-[10px] text-stone-700 ${d.status === "warn" ? "bg-amber-50/30" : ""}`}>
                <span className="font-medium">{d.date}</span>
                <span className="text-right tabular-nums">{d.ga4.toLocaleString()}</span>
                <span className="text-right tabular-nums">{d.internal.toLocaleString()}</span>
                <span className={`text-right tabular-nums font-semibold ${d.status === "warn" ? "text-amber-700" : "text-emerald-700"}`}>
                  {d.delta > 0 ? "+" : ""}{d.delta.toFixed(2)}%
                </span>
                <span className="text-center">
                  {d.status === "warn" ? <span className="text-amber-600">⚠</span> : <span className="text-emerald-600">✓</span>}
                </span>
              </div>
            ))}
            <div className="grid grid-cols-[76px_1fr_1fr_76px_56px] border-t-2 border-stone-300 bg-stone-100 px-1.5 py-1 text-[10px] font-bold text-stone-800">
              <span>Σ 7d</span>
              <span className="text-right tabular-nums">853,114</span>
              <span className="text-right tabular-nums">866,779</span>
              <span className="text-right text-amber-700 tabular-nums">+1.60%</span>
              <span></span>
            </div>
          </div>

          {/* Right: issue inspector + heatmap */}
          <div className="w-48 border-l border-stone-200 bg-stone-50 p-2">
            <div className="text-[9px] font-bold uppercase tracking-wider text-stone-600">Drift heatmap · 7d</div>
            <div className="mt-1.5 grid grid-cols-7 gap-0.5">
              {[2,1,3,1,1,2,3, 1,1,2,1,1,1,2, 2,1,1,2,3,1,1, 1,3,2,1,1,2,3, 2,2,1,3,2,1,1].map((v, i) => (
                <div key={i} className={`aspect-square rounded ${v === 3 ? "bg-red-400" : v === 2 ? "bg-amber-300" : "bg-emerald-200"}`} />
              ))}
            </div>
            <div className="mt-1 flex justify-between text-[8px] text-stone-500"><span>Mon</span><span>Sun</span></div>

            <div className="mt-2 text-[9px] font-bold uppercase tracking-wider text-stone-600">⚠ Issue inspector</div>
            <div className="mt-1 rounded border border-amber-200 bg-amber-50 p-1.5 text-[9px]">
              <div className="font-semibold text-amber-900">May 27 · +3.46% drift</div>
              <div className="mt-0.5 text-stone-700">Drill-down: where do rows diverge?</div>
              <ul className="mt-1 space-y-0.5 text-[8px] text-stone-600">
                <li>• Mobile Safari: <span className="text-amber-700">+8.2%</span> on internal</li>
                <li>• AdBlock users: <span className="text-amber-700">+12%</span> miss in GA4</li>
                <li>• Bot traffic: <span className="text-stone-500">filter delta</span></li>
              </ul>
              <button className="mt-1 w-full rounded border border-stone-300 bg-white px-1 py-0.5 text-[9px] text-stone-700">Open row-level diff →</button>
            </div>

            <div className="mt-2 rounded border border-stone-200 bg-white p-1.5 text-[9px] text-stone-600">
              <span className="font-semibold text-stone-800">📌 This pattern</span> caught 30 days of order-loading failures last quarter.
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export default function Slide15() {
  return (
    <UseCaseSlide
      slideNumber="15"
      title="Data Quality & Validation"
      subtitle="Same metric from two systems, side by side — where they drift, and why."
      apps={159}
      clients={23}
      growthHighlight=""
      scenarios={[
        "Two-source comparison — same metric in two systems, show the gap each day",
        "Migration stability — is the new pipeline ready to replace the old one yet?",
        "Anomaly breakdown — when revenue moved, was it price, volume, or mix?",
        "Weekly project health — costs, failures, freshness, on one page",
      ]}
      whenToStart='When the business keeps questioning "that weird number" and the data team loses hours each week checking freshness by hand.'
      mockup={<Mockup />}
      appsHistory={[10,10,10,10,11,13,16,19,24,33,37,45,46,47,56,65,79,159]}
      clientsHistory={[4,4,4,4,5,6,6,7,7,8,8,12,13,13,18,21,22,23]}
    />
  );
}
