import { UseCaseSlide, BrowserChrome } from "@/components/presentation/UseCaseSlide";

function Mockup() {
  const decisions = [
    { id: "APP-18472", rc: "8501231234", name: "J. Novák", decision: "APPROVE", reason: "score 742 · DTI 28%", amount: "240,000 Kč", color: "bg-emerald-100 text-emerald-700" },
    { id: "APP-18471", rc: "9203185678", name: "M. Svoboda", decision: "REJECT", reason: "R-04: NPL90 in last 24m", amount: "180,000 Kč", color: "bg-red-100 text-red-700" },
    { id: "APP-18470", rc: "7506094321", name: "P. Dvořák", decision: "MANUAL", reason: "R-12: borderline DTI", amount: "420,000 Kč", color: "bg-amber-100 text-amber-700" },
    { id: "APP-18469", rc: "8809127890", name: "K. Černá", decision: "APPROVE", reason: "score 689 · clean history", amount: "150,000 Kč", color: "bg-emerald-100 text-emerald-700" },
    { id: "APP-18468", rc: "7404155432", name: "A. Procházka", decision: "REJECT", reason: "R-07: KYC incomplete", amount: "90,000 Kč", color: "bg-red-100 text-red-700" },
  ];
  return (
    <BrowserChrome url="risk-dashboard.bank.cz">
      <div className="flex flex-1 flex-col bg-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 bg-stone-50 px-3 py-1.5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-stone-900">⚖️ Risk Report · T_ORBP Decision Engine</span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold text-emerald-700">SOC 2 · ISO 27001 · GDPR</span>
          </div>
          <span className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[9px] text-stone-500">T_ORBP_REPORT · daily 06:00</span>
        </div>

        {/* Top KPIs */}
        <div className="grid grid-cols-5 gap-1.5 border-b border-stone-200 px-3 py-2">
          {[
            { l: "Approval rate", v: "62.4%", d: "+1.8pp WoW", c: "border-emerald-300 bg-emerald-50" },
            { l: "FPD30", v: "1.84%", d: "−0.12pp", c: "border-emerald-300 bg-emerald-50" },
            { l: "Manual review", v: "147", d: "+22 yesterday", c: "border-amber-300 bg-amber-50" },
            { l: "NPL signals", v: "8", d: "above threshold", c: "border-red-300 bg-red-50" },
            { l: "4-eye pending", v: "12", d: "&lt; 24h SLA", c: "border-amber-300 bg-amber-50" },
          ].map((s) => (
            <div key={s.l} className={`rounded-lg border ${s.c} p-1.5`}>
              <div className="text-[9px] uppercase tracking-wider text-stone-600">{s.l}</div>
              <div className="text-sm font-bold tabular-nums text-stone-900">{s.v}</div>
              <div className="text-[8px] text-stone-600" dangerouslySetInnerHTML={{__html: s.d}} />
            </div>
          ))}
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-2 border-b border-stone-200 bg-stone-50 px-3 py-1 text-[9px]">
          <span className="text-stone-500">Filters:</span>
          <span className="rounded border border-stone-300 bg-white px-1.5 py-0.5">Date: 2026-05-27 ▾</span>
          <span className="rounded border border-stone-300 bg-white px-1.5 py-0.5">Product: Consumer Loan ▾</span>
          <span className="rounded border border-primary bg-primary/10 px-1.5 py-0.5 text-primary">Decision: all</span>
          <span className="rounded border border-stone-300 bg-white px-1.5 py-0.5">Region: all ▾</span>
          <span className="ml-auto text-stone-500">Showing 412 of 8,247</span>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Decisions table */}
          <div className="flex-1 overflow-y-auto">
            <div className="sticky top-0 z-10 grid grid-cols-[80px_94px_1fr_84px_1.4fr_84px] border-b border-stone-300 bg-stone-100 px-1.5 py-1 text-[9px] font-bold uppercase text-stone-600">
              <span>App ID</span><span>RČ (masked)</span><span>Name</span><span>Decision</span><span>Reason · ORBP code</span><span className="text-right">Amount</span>
            </div>
            {decisions.map((d, i) => (
              <div key={d.id} className={`grid grid-cols-[80px_94px_1fr_84px_1.4fr_84px] border-b border-stone-100 px-1.5 py-0.5 text-[10px] text-stone-700 ${i % 2 ? "bg-stone-50/40" : "bg-white"}`}>
                <span className="font-mono text-stone-600">{d.id}</span>
                <span className="font-mono text-stone-500">{d.rc.slice(0, 6)}/****</span>
                <span className="font-medium">{d.name}</span>
                <span className={`rounded px-1 py-0.5 text-center text-[9px] font-bold ${d.color}`}>{d.decision}</span>
                <span className="truncate text-stone-600">{d.reason}</span>
                <span className="text-right tabular-nums">{d.amount}</span>
              </div>
            ))}
          </div>

          {/* Right: ORBP rejection reasons */}
          <div className="w-48 border-l border-stone-200 bg-stone-50 p-2">
            <div className="text-[9px] font-bold uppercase tracking-wider text-stone-600">Top rejection reasons · today</div>
            <div className="mt-1.5 space-y-0.5 text-[9px]">
              {[
                { code: "R-04", desc: "NPL90 in last 24m", count: 47, pct: 100 },
                { code: "R-07", desc: "KYC incomplete", count: 32, pct: 68 },
                { code: "R-12", desc: "Borderline DTI", count: 28, pct: 59 },
                { code: "R-21", desc: "AML signal", count: 12, pct: 26 },
                { code: "R-33", desc: "Income unverifiable", count: 8, pct: 17 },
              ].map((r) => (
                <div key={r.code}>
                  <div className="flex justify-between text-stone-700">
                    <span><code className="font-mono font-bold">{r.code}</code> · {r.desc}</span>
                    <span className="tabular-nums">{r.count}</span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-stone-200">
                    <div className="h-full rounded-full bg-red-400" style={{ width: `${r.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 text-[9px] font-bold uppercase tracking-wider text-stone-600">4-eye queue</div>
            <ul className="mt-1 space-y-1 text-[9px]">
              {[
                { item: "APP-18470 · 420K", req: "k.svoboda" },
                { item: "APP-18465 · 680K", req: "p.dvorak" },
              ].map((p) => (
                <li key={p.item} className="rounded border border-amber-200 bg-amber-50 px-1.5 py-1">
                  <div className="font-semibold text-stone-800">{p.item}</div>
                  <div className="text-stone-600">{p.req} requested</div>
                  <div className="mt-0.5 flex gap-0.5">
                    <button className="flex-1 rounded bg-emerald-600 px-1 py-0.5 text-[8px] font-semibold text-white">Approve</button>
                    <button className="flex-1 rounded border border-stone-300 bg-white px-1 py-0.5 text-[8px] text-stone-700">Reject</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 bg-stone-50 px-3 py-1 text-[9px] text-stone-500">
          Immutable audit log · retention 7 years · OIDC: kbc.bank.cz · SHA: a2f8…91d3
        </div>
      </div>
    </BrowserChrome>
  );
}

export default function Slide14() {
  return (
    <UseCaseSlide
      slideNumber="14"
      title="Compliance, Risk & Regulated Workflows"
      subtitle="Banking, insurance, telco — decisions with a full audit trail."
      apps={173}
      clients={35}
      growthHighlight=""
      scenarios={[
        "Loan approvals with reason codes and a full audit trail",
        "Chart of accounts edits — every change logged with who, what, and when",
        "Access management — two-person approval before anything changes",
        "Customer due-diligence alerts and daily drill-downs",
      ]}
      whenToStart="In a regulated sector (banking, insurance, healthcare, telco) when the audit is on the calendar in 3 months."
      mockup={<Mockup />}
      appsHistory={[32,33,35,36,40,46,55,69,77,88,94,105,109,118,126,140,149,173]}
      clientsHistory={[11,11,11,11,13,13,15,16,17,17,18,20,21,25,26,28,32,35]}
    />
  );
}
