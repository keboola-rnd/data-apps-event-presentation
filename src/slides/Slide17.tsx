import { UseCaseSlide, BrowserChrome } from "@/components/presentation/UseCaseSlide";

function Mockup() {
  return (
    <BrowserChrome url="pipeline-runner.acme.com">
      <div className="flex flex-1 flex-col bg-white overflow-hidden">
        <div className="flex items-center justify-between border-b border-stone-200 bg-stone-50 px-3 py-1.5">
          <span className="text-sm font-bold text-stone-900">🎛 Data Pipeline Runner · 3-tab control panel</span>
          <span className="text-[10px] text-stone-500">Jobs API · retry on 429/502/503/504 · max 6 attempts</span>
        </div>

        {/* 3-tab Extraktory/Flows/Writery */}
        <div className="flex items-center gap-1 border-b border-stone-200 bg-stone-50 px-3 py-1">
          {[
            { l: "📥 Extractors", n: 12, active: false },
            { l: "🔀 Flows", n: 8, active: true },
            { l: "📤 Writers", n: 5, active: false },
          ].map((t) => (
            <span key={t.l} className={`rounded px-2 py-0.5 text-[10px] ${t.active ? "bg-primary text-white" : "border border-stone-300 bg-white text-stone-600"}`}>
              {t.l} <span className={`ml-1 ${t.active ? "text-white/70" : "text-stone-400"}`}>({t.n})</span>
            </span>
          ))}
          <span className="ml-auto text-[9px] text-stone-500">Auto-refresh: 30s · last fetched 14:32:08</span>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Flow list */}
          <div className="flex-1 overflow-y-auto p-2">
            <div className="text-[9px] font-bold uppercase tracking-wider text-stone-600">Active flows · selected: Flows tab</div>
            <div className="mt-1.5 space-y-1">
              {[
                { name: "daily_sales_attribution", status: "running", pct: 64, color: "bg-emerald-500", time: "2m 14s / ~3m", jobId: "1284-9201", stage: "stage 3/5 · transformation" },
                { name: "marketing_attribution_v2", status: "running", pct: 12, color: "bg-emerald-500", time: "0m 28s / ~4m", jobId: "1284-9202", stage: "stage 1/4 · extract" },
                { name: "customer_segments_v3", status: "queued", pct: 0, color: "bg-amber-400", time: "queued · pos 1", jobId: "—", stage: "" },
                { name: "stock_revaluation", status: "queued", pct: 0, color: "bg-amber-400", time: "queued · pos 2", jobId: "—", stage: "" },
                { name: "warehouse_etl_nightly", status: "done", pct: 100, color: "bg-stone-300", time: "✓ 1m 02s ago", jobId: "1284-9180", stage: "5 stages · 12.4M rows" },
                { name: "campaign_sync_meta", status: "failed", pct: 0, color: "bg-red-500", time: "✗ rate-limit · retry 2/6", jobId: "1284-9175", stage: "extract failed at API" },
              ].map((j) => (
                <div key={j.name} className="rounded border border-stone-200 bg-white p-1.5">
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${j.color} ${j.status === "running" ? "animate-pulse" : ""}`} />
                    <span className="flex-1 font-mono text-stone-700">{j.name}</span>
                    <span className="rounded bg-stone-100 px-1 py-0.5 font-mono text-[8px] text-stone-500">job: {j.jobId}</span>
                    <span className="text-[9px] text-stone-500">{j.time}</span>
                  </div>
                  {j.status === "running" && (
                    <>
                      <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-stone-100">
                        <div className="h-full rounded-full bg-emerald-500" style={{ width: `${j.pct}%` }} />
                      </div>
                      <div className="mt-0.5 text-[8px] text-stone-500">{j.stage}</div>
                    </>
                  )}
                  {j.status === "failed" && (
                    <div className="mt-0.5 flex items-center gap-1 text-[8px] text-red-700">
                      <span>{j.stage}</span>
                      <button className="ml-auto rounded border border-stone-300 bg-white px-1 py-0.5 text-stone-700">Retry</button>
                      <button className="rounded bg-primary px-1 py-0.5 font-semibold text-white">View logs</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: triggers + alerts */}
          <div className="w-48 border-l border-stone-200 bg-stone-50 p-2">
            <div className="text-[9px] font-bold uppercase tracking-wider text-stone-600">Quick triggers</div>
            <div className="mt-1.5 space-y-1">
              {[
                { name: "Refresh Customer 360", params: "all segments · Q2" },
                { name: "Run weekly attribution", params: "auto-detect window" },
                { name: "Clean DTB · campaign 4821", params: "10 contacts upload" },
              ].map((q, i) => (
                <div key={q.name} className={`rounded-lg border-2 p-1.5 ${i === 0 ? "border-primary bg-primary/5" : "border-stone-200 bg-white"}`}>
                  <div className="text-[10px] font-semibold text-stone-800">{q.name}</div>
                  <div className="text-[8px] text-stone-500">{q.params}</div>
                  <button className={`mt-1 w-full rounded py-0.5 text-[9px] font-semibold ${i === 0 ? "bg-primary text-white" : "border border-stone-300 bg-white text-stone-700"}`}>▶ Run</button>
                </div>
              ))}
            </div>

            <div className="mt-2 text-[9px] font-bold uppercase tracking-wider text-stone-600">Alerts · live</div>
            <ul className="mt-1 space-y-0.5 text-[9px]">
              <li className="rounded bg-red-50 px-1.5 py-1 text-red-700">⚠ campaign_sync_meta retry 2/6</li>
              <li className="rounded bg-amber-50 px-1.5 py-1 text-amber-700">⚠ daily_sales 2× slower MoM</li>
              <li className="rounded bg-stone-100 px-1.5 py-1 text-stone-700">📤 Slack notif sent · #data-ops</li>
            </ul>

            <div className="mt-2 rounded border border-stone-200 bg-white p-1.5 text-[9px] text-stone-600">
              <span className="font-semibold text-stone-800">SLA today:</span> 98.4% on time · <span className="text-red-700">2 failures</span>
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export default function Slide17() {
  return (
    <UseCaseSlide
      slideNumber="17"
      title="Self-Service Operations & Pipeline Runners"
      subtitle="Three-tab control panel — extractors, flows, writers — click to run, watch it finish."
      apps={136}
      clients={19}
      growthHighlight=""
      scenarios={[
        "Three-tab control panel — extractors, flows, writers — click to run",
        "Forms that change data — clean a list, remove contacts, no engineering ticket",
        "Deploy progress — staging, deploy, refresh, ticket update, Slack notice",
        "Built-in retry on transient failures so the user doesn't have to babysit",
      ]}
      whenToStart='When the data team Slack is full of "please run that flow" and "refresh this dataset".'
      mockup={<Mockup />}
      appsHistory={[9,9,9,9,10,11,11,13,17,26,27,29,29,31,34,50,65,136]}
      clientsHistory={[6,6,6,6,7,7,7,8,9,9,10,11,11,12,13,15,18,19]}
    />
  );
}
