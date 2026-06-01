import { UseCaseSlide, BrowserChrome } from "@/components/presentation/UseCaseSlide";

function Mockup() {
  return (
    <BrowserChrome url="ask-kai.sales-tracker.app">
      <div className="flex flex-1 flex-col bg-gradient-to-b from-stone-50 to-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 bg-white px-3 py-1.5">
          <div className="flex items-center gap-1.5">
            <span>✻</span>
            <span className="text-sm font-bold text-stone-900">Sales Tracker · Ask Kai</span>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-700">● claude-opus-4.7</span>
            <span className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[9px] text-stone-500">streaming + tool approval</span>
          </div>
        </div>

        {/* Conversation */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
          <div className="flex justify-end">
            <div className="max-w-[75%] rounded-2xl rounded-br-md bg-primary px-3 py-1.5 text-[11px] text-white">
              Why is margin dropping in our UK region this week?
            </div>
          </div>

          {/* Tool call with approval gate */}
          <div className="flex justify-start">
            <div className="w-full max-w-[90%] rounded-xl border border-stone-700 bg-stone-900 p-1.5">
              <div className="flex items-center gap-1.5 text-[9px] text-stone-400">
                <span className="rounded bg-emerald-900/60 px-1.5 py-0.5 font-mono font-bold text-emerald-400">MCP</span>
                <span className="font-mono font-semibold text-emerald-300">query_data</span>
                <span className="ml-auto text-stone-500">0.7s</span>
              </div>
              <pre className="mt-1 rounded bg-stone-950 px-1.5 py-1 font-mono text-[9px] leading-snug text-blue-300 whitespace-pre-wrap">SELECT week, margin_pct, deal_count
FROM out.c-sales.fact_pl_weekly
WHERE country = 'UK'
ORDER BY week DESC LIMIT 8</pre>
            </div>
          </div>

          {/* Approval gate */}
          <div className="flex justify-start">
            <div className="w-full max-w-[90%] rounded-xl border-2 border-amber-300 bg-amber-50 p-2 text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-700">⚠</span>
                <span className="font-bold text-amber-900">Approve next action?</span>
              </div>
              <p className="mt-0.5 text-amber-900">
                Kai wants to call <code className="rounded bg-white px-1 font-mono text-[9px]">orbit.create_deal_review</code> for 3 flagged deals (DL-4821, DL-4822, DL-4825).
              </p>
              <div className="mt-1 flex gap-1">
                <button className="rounded bg-emerald-600 px-2 py-0.5 text-[10px] font-semibold text-white">✓ Approve</button>
                <button className="rounded border border-stone-300 bg-white px-2 py-0.5 text-[10px] text-stone-700">✗ Reject</button>
                <button className="rounded border border-stone-300 bg-white px-2 py-0.5 text-[10px] text-stone-700">Always for this tool</button>
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-stone-200 bg-white px-3 py-1.5 text-[11px] text-stone-800 shadow-sm">
              UK margin dropped from <strong>32.8% → 28.4%</strong> over 4 weeks. Three culprits:
              <div className="mt-1 space-y-0.5">
                {[
                  { name: "Food & Drink", delta: "−3.1pp", reason: "discount overshoot · 47 deals under 22%", action: "review pricing rules" },
                  { name: "Wellness & Beauty", delta: "−2.4pp", reason: "voucher redemption up 18%", action: "tighten the credit cap" },
                  { name: "Travel", delta: "−1.8pp", reason: "FX hit · GBP/EUR rate", action: "FYI only" },
                ].map((c) => (
                  <div key={c.name} className="rounded border border-stone-200 bg-stone-50/50 p-1 text-[10px]">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{c.name}</span>
                      <span className="font-bold text-red-700">{c.delta}</span>
                    </div>
                    <div className="text-[9px] text-stone-600" dangerouslySetInnerHTML={{__html: c.reason}} />
                    <div className="mt-0.5 text-[9px] italic text-emerald-700">→ {c.action}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* next_actions chips */}
          <div className="flex justify-start">
            <div className="max-w-[90%] rounded-xl border border-orange-200 bg-orange-50 p-1.5 text-[10px]">
              <div className="font-semibold text-orange-700">✻ Suggested next actions</div>
              <div className="mt-0.5 flex flex-wrap gap-1">
                {[
                  "Export findings → Asana ticket",
                  "Pull deal-level for Food & Drink",
                  "Compare to last quarter's recovery",
                  "Email weekly digest",
                ].map((a) => (
                  <button key={a} className="rounded-full border border-orange-300 bg-white px-1.5 py-0.5 text-[9px] text-orange-700">→ {a}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="border-t border-stone-200 bg-white p-2">
          <div className="flex items-center gap-2 rounded-lg border border-stone-300 bg-stone-50 px-2 py-1.5">
            <span className="text-stone-400">›</span>
            <span className="flex-1 text-[10px] text-stone-400 italic">Ask anything about deals, pipelines, or margin…</span>
            <span className="text-[9px] text-stone-400">3 tools loaded · @ for tables</span>
            <button className="rounded bg-primary px-2 py-0.5 text-[10px] font-semibold text-white">Send</button>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export default function Slide13() {
  return (
    <UseCaseSlide
      slideNumber="13"
      title="AI / GenAI Applications"
      subtitle="Chat next to a dashboard — streaming answers, every tool call asks for approval, suggested next steps."
      apps={181}
      clients={22}
      growthHighlight=""
      scenarios={[
        "Chat panel sitting next to a dashboard — by far the most common shape",
        "Plain-language questions turn into SQL, then into a chart and a table",
        "Upload a PDF, spreadsheet, or contract — ask it questions",
        "One model writes, another classifies — best tool for the job",
      ]}
      whenToStart='When you have a SQL warehouse but only 10% of staff can write SQL. Start with one narrow use case, not a universal chatbot.'
      mockup={<Mockup />}
      appsHistory={[20,22,24,27,28,31,38,45,48,54,126,130,131,133,138,148,163,181]}
      clientsHistory={[11,12,13,13,14,14,14,14,14,14,15,15,15,15,16,17,20,22]}
    />
  );
}
