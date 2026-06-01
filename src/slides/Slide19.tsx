import { UseCaseSlide, BrowserChrome } from "@/components/presentation/UseCaseSlide";

function Mockup() {
  const builders = [
    { name: "anna.novakova", apps: 8, credits: 1840, pct: 100, color: "bg-primary" },
    { name: "petr.svoboda", apps: 5, credits: 1240, pct: 67, color: "bg-primary" },
    { name: "m.zajacova", apps: 6, credits: 920, pct: 50, color: "bg-primary" },
    { name: "kai-agent", apps: 12, credits: 685, pct: 37, color: "bg-orange-400" },
    { name: "j.dvorak", apps: 3, credits: 412, pct: 22, color: "bg-primary" },
  ];
  return (
    <BrowserChrome url="platform-cost-cockpit.keboola.acme.com">
      <div className="flex flex-1 flex-col bg-white overflow-hidden">
        <div className="flex items-center justify-between border-b border-stone-200 bg-stone-50 px-3 py-1.5">
          <span className="text-sm font-bold text-stone-900">📦 Platform Cost Cockpit · "kdo a co spálí kolik a kde se chystá výbuch"</span>
          <span className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[9px] text-stone-500">in.c-kbc_combined_telemetry.kbc_usage_metrics_values</span>
        </div>

        {/* Top summary */}
        <div className="grid grid-cols-5 gap-1.5 border-b border-stone-200 px-3 py-2">
          {[
            { l: "Used (May)", v: "6,035 cr", d: "of 10,800", c: "border-amber-300 bg-amber-50" },
            { l: "USD equiv", v: "$3,217", d: "+ $1,840 CZK", c: "border-stone-200 bg-white" },
            { l: "Forecast EOM", v: "10,420", d: "97% contract", c: "border-amber-300 bg-amber-50" },
            { l: "Active data apps", v: "38", d: "+6 MoM", c: "border-emerald-300 bg-emerald-50" },
            { l: "AI/Kai/MCP %", v: "31%", d: "+9pp WoW", c: "border-orange-300 bg-orange-50" },
          ].map((s) => (
            <div key={s.l} className={`rounded-lg border ${s.c} p-1.5`}>
              <div className="text-[9px] uppercase tracking-wider text-stone-500">{s.l}</div>
              <div className="text-sm font-bold tabular-nums text-stone-800">{s.v}</div>
              <div className="text-[8px] text-stone-600">{s.d}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Per-builder attribution */}
          <div className="flex-1 overflow-y-auto p-2">
            <div className="text-[9px] font-bold uppercase tracking-wider text-stone-600">By builder · last-editor attribution</div>
            <div className="mt-1.5 space-y-1">
              {builders.map((b) => (
                <div key={b.name} className="rounded border border-stone-200 p-1.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="flex items-center gap-1.5">
                      {b.name === "kai-agent" && <span className="rounded bg-orange-100 px-1 py-0.5 text-[8px] font-bold text-orange-700">✻ AI</span>}
                      <span className="font-mono font-medium text-stone-700">{b.name}</span>
                      <span className="text-[8px] text-stone-500">{b.apps} apps</span>
                    </span>
                    <span className="text-stone-600 tabular-nums">{b.credits.toLocaleString()} cr · ${(b.credits * 0.53).toFixed(0)}</span>
                  </div>
                  <div className="mt-0.5 h-2 w-full overflow-hidden rounded-full bg-stone-100">
                    <div className={`h-full rounded-full ${b.color}`} style={{ width: `${b.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 text-[9px] font-bold uppercase tracking-wider text-stone-600">By component (split)</div>
            <div className="mt-1 grid grid-cols-2 gap-2">
              <div className="text-[9px]">
                {[
                  { l: "Transformations", v: "2,840", pct: 47 },
                  { l: "Data apps", v: "1,620", pct: 27 },
                  { l: "Extractors", v: "920", pct: 15 },
                ].map((c) => (
                  <div key={c.l}>
                    <div className="flex justify-between text-stone-700">
                      <span>{c.l}</span>
                      <span className="tabular-nums">{c.v}</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-stone-200">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${c.pct * 2}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded border border-orange-200 bg-orange-50/60 p-1.5 text-[9px]">
                <div className="font-bold text-orange-800">SQL Sandbox vs AI/MCP</div>
                <div className="mt-0.5 text-stone-700">SQL: 69% · <span className="font-semibold text-orange-700">AI/Kai/MCP: 31%</span></div>
                <div className="mt-0.5 text-[8px] text-stone-500">AI/MCP usage +9pp WoW — adoption tracker</div>
              </div>
            </div>
          </div>

          {/* Right: anomaly + traffic inspector */}
          <div className="w-48 border-l border-stone-200 bg-stone-50 p-2">
            <div className="text-[9px] font-bold uppercase tracking-wider text-stone-600">Contract gauge</div>
            <div className="mt-1.5 rounded border border-stone-200 bg-white p-1.5">
              <div className="h-2 w-full overflow-hidden rounded-full bg-stone-100">
                <div className="h-full rounded-full bg-amber-400" style={{ width: "56%" }} />
                <div className="absolute h-2 w-px bg-red-500" style={{ left: "92%" }} />
              </div>
              <div className="mt-0.5 flex justify-between text-[8px] text-stone-500">
                <span>0</span><span>6,035 / 10,800</span><span>limit</span>
              </div>
            </div>

            <div className="mt-2 text-[9px] font-bold uppercase tracking-wider text-stone-600">⚠ Anomaly badges</div>
            <ul className="mt-1 space-y-0.5 text-[9px]">
              <li className="rounded bg-red-50 px-1.5 py-1 text-red-700">marketing-eu spike +28%</li>
              <li className="rounded bg-amber-50 px-1.5 py-1 text-amber-700">kai-agent +47% WoW</li>
              <li className="rounded bg-stone-100 px-1.5 py-1 text-stone-700">4 unused configs flagged</li>
            </ul>

            <div className="mt-2 text-[9px] font-bold uppercase tracking-wider text-stone-600">🔍 Traffic Inspector</div>
            <div className="mt-1 rounded border border-stone-200 bg-white p-1.5 text-[8px] font-mono text-stone-700">
              <div className="text-stone-500">User-Agent (top 3):</div>
              <div>● Chrome/126 · 88%</div>
              <div>● Safari/18 · 9%</div>
              <div className="text-red-700">● python-requests · 3% ⚠ bot</div>
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export default function Slide19() {
  return (
    <UseCaseSlide
      slideNumber="19"
      title="Platform Management Meta-Apps"
      subtitle="Cost, usage, lineage — apps that watch the platform itself."
      apps={75}
      clients={26}
      growthHighlight=""
      scenarios={[
        "Cost dashboard — what was spent, by whom, where, in dollars and koruna",
        "Traffic inspector — see who's hitting your apps, spot bots automatically",
        "Adoption tracker — who uses SQL vs. the AI assistant vs. the API?",
        "Lineage explorer — what feeds what, what breaks if you change it",
      ]}
      whenToStart='When you burn hundreds of credits a month with no visibility into where — or when the CFO asks "what is this Keboola line item?"'
      mockup={<Mockup />}
      appsHistory={[8,8,8,8,10,12,13,15,18,23,23,28,32,34,39,50,66,75]}
      clientsHistory={[3,3,3,3,5,6,6,7,7,7,7,11,12,14,18,22,24,26]}
    />
  );
}
