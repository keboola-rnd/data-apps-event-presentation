import { UseCaseSlide, BrowserChrome } from "@/components/presentation/UseCaseSlide";

function Mockup() {
  const rules = [
    { prio: 1, pattern: "utm_source=google&utm_medium=cpc", channel: "Paid Search · Google", edited: false, by: "" },
    { prio: 2, pattern: "utm_source=meta_ads*", channel: "Paid Social · Meta", edited: true, by: "anna" },
    { prio: 3, pattern: "referrer LIKE '%seznam.cz%'", channel: "Organic Search · Seznam", edited: false, by: "" },
    { prio: 4, pattern: "utm_medium=email AND utm_campaign=newsletter*", channel: "Email · Newsletter", edited: true, by: "petr" },
    { prio: 5, pattern: "utm_source=affilbox", channel: "Affiliate", edited: false, by: "" },
    { prio: 6, pattern: "(default — no match)", channel: "Direct / Unknown", edited: false, by: "" },
  ];
  return (
    <BrowserChrome url="channel-rules.acme.com">
      <div className="flex flex-1 flex-col bg-white overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-stone-200 bg-stone-50 px-3 py-1.5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-stone-900">🎯 Channel Attribution Rules</span>
            <span className="rounded bg-stone-200 px-1.5 py-0.5 font-mono text-[8px] text-stone-500">out.c-MKT_channel_rules.mkt_channel_lookup</span>
          </div>
          <div className="flex gap-1 text-[10px]">
            <button className="rounded border border-stone-300 bg-white px-1.5 py-0.5 text-stone-600">↶ Undo</button>
            <button className="rounded border border-stone-300 bg-white px-1.5 py-0.5 text-stone-600">＋ Rule</button>
            <button className="rounded bg-primary px-1.5 py-0.5 font-semibold text-white">▶ Save & re-run attribution</button>
          </div>
        </div>

        {/* Aha banner */}
        <div className="border-b border-amber-200 bg-amber-50 px-3 py-1 text-[10px] text-amber-800">
          💡 <strong>Replaces hardcoded CASE WHEN in transformation</strong> · 90+ rules now editable by marketing without PR
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Rules table */}
          <div className="flex-1 overflow-y-auto">
            <div className="sticky top-0 z-10 grid grid-cols-[44px_24px_2fr_1.4fr_44px] border-b border-stone-300 bg-stone-100 text-[9px] font-bold uppercase text-stone-600">
              <div className="border-r border-stone-300 px-1.5 py-1 text-center">⋮⋮</div>
              <div className="border-r border-stone-300 px-1.5 py-1 text-center">Prio</div>
              <div className="border-r border-stone-300 px-1.5 py-1">Match pattern (SQL-like)</div>
              <div className="border-r border-stone-300 px-1.5 py-1">→ Channel name</div>
              <div className="px-1.5 py-1 text-center">⋯</div>
            </div>
            {rules.map((r, i) => (
              <div key={r.prio} className={`grid grid-cols-[44px_24px_2fr_1.4fr_44px] text-[10px] text-stone-700 ${i % 2 === 0 ? "bg-white" : "bg-stone-50/40"} ${r.edited ? "ring-1 ring-inset ring-amber-300" : ""}`}>
                <div className="border-r border-stone-200 px-1.5 py-1 text-center text-stone-300">⋮⋮</div>
                <div className="border-r border-stone-200 px-1.5 py-1 text-center font-bold text-primary">{r.prio}</div>
                <div className="border-r border-stone-200 px-1.5 py-1 flex items-center gap-1">
                  <code className="rounded bg-stone-100 px-1 font-mono text-[9px] text-stone-700">{r.pattern}</code>
                  {r.edited && <span className="text-[8px] text-amber-600">●</span>}
                </div>
                <div className="border-r border-stone-200 px-1.5 py-1 font-medium">{r.channel}</div>
                <div className="px-1.5 py-1 text-center text-stone-400">⋯</div>
              </div>
            ))}
          </div>

          {/* Side panel: live preview */}
          <div className="w-52 border-l border-stone-200 bg-stone-50 p-2">
            <div className="text-[9px] font-bold uppercase tracking-wider text-stone-600">▶ Preview matcher</div>
            <p className="mt-1 text-[9px] text-stone-500">Paste a URL — see which rule fires.</p>
            <div className="mt-1.5 rounded border border-stone-300 bg-white p-1 font-mono text-[8px] text-stone-700 break-all">
              /lp?utm_source=meta_ads&utm_campaign=summer_sale
            </div>
            <div className="mt-1.5 rounded border border-emerald-300 bg-emerald-50 p-1.5">
              <div className="text-[8px] font-bold uppercase tracking-wider text-emerald-700">Matches rule #2</div>
              <div className="mt-0.5 text-[10px] font-semibold text-emerald-900">→ Paid Social · Meta</div>
            </div>

            <div className="mt-2 text-[9px] font-bold uppercase tracking-wider text-stone-600">Recent changes</div>
            <ul className="mt-1 space-y-0.5 text-[9px]">
              <li className="rounded bg-amber-100/50 px-1 py-0.5">
                <span className="font-semibold">anna · 4m</span>
                <div className="text-stone-600">#2 added meta_ads* glob</div>
              </li>
              <li className="rounded bg-amber-100/50 px-1 py-0.5">
                <span className="font-semibold">petr · 1h</span>
                <div className="text-stone-600">#4 added newsletter campaigns</div>
              </li>
            </ul>

            <div className="mt-2 rounded border border-stone-300 bg-white p-1.5">
              <div className="text-[8px] font-bold uppercase tracking-wider text-stone-600">Impact</div>
              <div className="mt-0.5 text-[9px] text-stone-700">
                Save → triggers <code className="rounded bg-stone-100 px-1 font-mono text-[8px]">attribution_flow</code>
                <div className="text-stone-500">~3.2M rows re-classified · 1m 47s</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-stone-200 bg-stone-50 px-3 py-1 text-[9px]">
          <span className="italic text-amber-700">2 unsaved · concurrency lock by anna@acme</span>
          <span className="text-stone-500">Schema-driven · token: marketing-attribution-rw</span>
        </div>
      </div>
    </BrowserChrome>
  );
}

export default function Slide12() {
  return (
    <UseCaseSlide
      slideNumber="12"
      title="Data Entry, Forms & CRUD"
      subtitle="Business rules, comments, master data — edited by humans, written straight to Storage."
      apps={194}
      clients={31}
      growthHighlight=""
      scenarios={[
        "Business rules a marketing or finance person edits — no engineering ticket",
        "Comments attached to each row of a report (replaces the monthly XLS email thread)",
        "Master data editors — code lists, mappings, segments — without Excel",
        "Save the change → the pipeline reruns automatically",
      ]}
      whenToStart='When master data lives in a shared Excel ("who has the latest version?") or when business sends XLS files to the data team to import.'
      mockup={<Mockup />}
      appsHistory={[25,28,32,32,36,39,48,58,64,71,79,83,86,93,102,112,123,194]}
      clientsHistory={[9,10,12,12,12,14,16,18,18,18,18,19,20,22,26,28,29,31]}
    />
  );
}
