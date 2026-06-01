import { UseCaseSlide, BrowserChrome } from "@/components/presentation/UseCaseSlide";

function Mockup() {
  return (
    <BrowserChrome url="pricing-calculator.acme.com">
      <div className="flex flex-1 flex-col bg-white overflow-hidden">
        <div className="flex items-center justify-between border-b border-stone-200 bg-stone-50 px-3 py-1.5">
          <span className="text-sm font-bold text-stone-900">💰 Pricing Rules Calculator · mirrors <code className="font-mono text-[10px] text-primary">Pricing.main_algo</code></span>
          <span className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[8px] text-stone-500">out.c-pricing.pricing_factors</span>
        </div>

        {/* Two-stage wizard nav */}
        <div className="flex items-center gap-2 border-b border-stone-200 bg-stone-50 px-3 py-1 text-[10px]">
          <span className="flex items-center gap-1">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[9px] font-bold text-white">✓</span>
            <span className="text-stone-600">1. Service & Facility Type</span>
          </span>
          <span className="text-stone-400">→</span>
          <span className="flex items-center gap-1">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white">2</span>
            <span className="font-semibold text-stone-800">Contextual inputs</span>
          </span>
          <span className="text-stone-400">→</span>
          <span className="text-stone-400">3. Quote &amp; export</span>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-3 overflow-hidden p-3">
          {/* Inputs — real form fields */}
          <div className="flex flex-col gap-2 overflow-y-auto">
            <div className="rounded border border-emerald-200 bg-emerald-50 p-1.5">
              <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-700">✓ Step 1 — selected</div>
              <div className="mt-0.5 grid grid-cols-2 gap-1.5 text-[10px]">
                <div>
                  <label className="text-[9px] text-stone-600">Service</label>
                  <div className="mt-0.5 flex items-center justify-between rounded border border-stone-300 bg-white px-1.5 py-0.5 text-stone-800">
                    <span className="font-semibold">PCA Debt</span><span className="text-stone-400">▾</span>
                  </div>
                </div>
                <div>
                  <label className="text-[9px] text-stone-600">Facility type</label>
                  <div className="mt-0.5 flex items-center justify-between rounded border border-stone-300 bg-white px-1.5 py-0.5 text-stone-800">
                    <span className="font-semibold">Term Loan</span><span className="text-stone-400">▾</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded border-2 border-primary/40 bg-primary/5 p-2">
              <div className="flex items-center justify-between">
                <div className="text-[9px] font-bold uppercase tracking-wider text-primary">Step 2 — inputs</div>
                <span className="text-[8px] italic text-amber-700">💡 fields adapt per facility</span>
              </div>

              <div className="mt-1.5 space-y-1.5">
                {/* Loan amount */}
                <div>
                  <label className="text-[9px] font-medium text-stone-700">Loan amount</label>
                  <div className="mt-0.5 flex gap-1">
                    <div className="flex flex-1 items-center rounded border border-stone-300 bg-white px-1.5 py-1">
                      <span className="mr-1 text-[10px] text-stone-400">$</span>
                      <input value="12,500,000" readOnly className="w-full bg-transparent text-[11px] font-semibold tabular-nums text-stone-800 outline-none" />
                    </div>
                    <div className="flex w-12 items-center justify-between rounded border border-stone-300 bg-white px-1.5 py-1 text-[10px] text-stone-700">USD<span className="text-stone-400">▾</span></div>
                  </div>
                </div>

                {/* Tenor + Counterparty */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div>
                    <label className="text-[9px] font-medium text-stone-700">Tenor</label>
                    <div className="mt-0.5 flex items-center rounded border border-stone-300 bg-white px-1.5 py-1">
                      <input value="60" readOnly className="w-8 bg-transparent text-[11px] font-semibold tabular-nums text-stone-800 outline-none" />
                      <span className="ml-auto text-[9px] text-stone-500">months</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-medium text-stone-700">Counterparty rating</label>
                    <div className="mt-0.5 flex items-center justify-between rounded border border-stone-300 bg-white px-1.5 py-1 text-[10px] text-stone-700">
                      <span className="font-semibold text-stone-800">BBB+</span><span className="text-stone-400">▾</span>
                    </div>
                  </div>
                </div>

                {/* Collateral coverage */}
                <div>
                  <label className="text-[9px] font-medium text-stone-700">Collateral coverage</label>
                  <div className="mt-0.5 flex items-center rounded border border-stone-300 bg-white px-1.5 py-1">
                    <input value="78" readOnly className="w-10 bg-transparent text-[11px] font-semibold tabular-nums text-stone-800 outline-none" />
                    <span className="text-[10px] text-stone-500">%</span>
                    <div className="ml-2 h-1.5 flex-1 rounded-full bg-stone-200">
                      <div className="h-full rounded-full bg-primary" style={{ width: "78%" }} />
                    </div>
                  </div>
                </div>

                {/* Payment schedule + Currency hedging */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div>
                    <label className="text-[9px] font-medium text-stone-700">Payment schedule</label>
                    <div className="mt-0.5 flex items-center justify-between rounded border border-stone-300 bg-white px-1.5 py-1 text-[10px] text-stone-700">
                      <span className="font-semibold text-stone-800">Quarterly</span><span className="text-stone-400">▾</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-medium text-stone-700">FX hedging</label>
                    <div className="mt-0.5 flex items-center justify-between rounded border border-stone-300 bg-white px-1.5 py-1 text-[10px]">
                      <label className="flex items-center gap-1 text-stone-700"><span className="inline-block h-3 w-3 rounded-sm border-2 border-primary bg-primary" /> required</label>
                    </div>
                  </div>
                </div>

                {/* Origination fee checkbox */}
                <label className="flex items-center gap-1.5 text-[10px] text-stone-700">
                  <span className="inline-block h-3 w-3 rounded-sm border-2 border-primary bg-primary" />
                  Include origination fee (amortized)
                </label>
              </div>

              <button className="mt-2 w-full rounded bg-primary py-1 text-[10px] font-bold uppercase tracking-wider text-white">▶ Recalculate</button>
            </div>
          </div>

          {/* Calculation breakdown */}
          <div className="flex flex-col gap-2 overflow-hidden">
            <div className="rounded-lg border-2 border-primary bg-primary/5 p-2">
              <div className="text-[9px] font-semibold uppercase tracking-wider text-primary">Final rate</div>
              <div className="mt-1 flex items-baseline gap-1">
                <div className="text-3xl font-bold tabular-nums text-foreground">SOFR + 287</div>
                <span className="text-sm text-stone-600">bps</span>
              </div>
              <div className="text-[10px] text-stone-600">all-in: <strong>7.94% pa</strong> · NPV @ 60mo: $2.84M</div>
            </div>

            <div className="flex-1 overflow-y-auto rounded border border-stone-200 p-2 text-[10px]">
              <div className="text-[9px] font-bold uppercase tracking-wider text-stone-500">Waterfall (mirror of Ruby algo)</div>
              <div className="mt-1 space-y-0.5 text-stone-700 font-mono text-[10px]">
                {[
                  { l: "Base curve (SOFR 5m)", v: "5.07%" },
                  { l: "Credit spread (BBB+)", v: "+145 bps" },
                  { l: "Notional band (B3)", v: "+80 bps" },
                  { l: "Tenor adjust (60m)", v: "+78 bps" },
                  { l: "LTV reduction (78%)", v: "−12 bps" },
                  { l: "Liquidity premium", v: "+10 bps" },
                  { l: "Origination fee (amortized)", v: "+25 bps" },
                ].map((r) => (
                  <div key={r.l} className="flex justify-between border-b border-stone-100 py-0.5">
                    <span>{r.l}</span>
                    <span className={`tabular-nums font-bold ${r.v.startsWith("−") ? "text-emerald-700" : r.v.startsWith("+") ? "text-stone-800" : "text-stone-900"}`}>{r.v}</span>
                  </div>
                ))}
                <div className="flex justify-between border-t-2 border-stone-300 pt-1 text-[11px] font-bold">
                  <span>= All-in rate</span>
                  <span className="tabular-nums text-primary">7.94%</span>
                </div>
              </div>
            </div>

            <div className="rounded border border-emerald-200 bg-emerald-50 p-1.5 text-[9px]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-emerald-900">✓ Matches Ruby <code className="font-mono">Pricing.main_algo</code></div>
                  <div className="text-emerald-700">3,847 test cases · 100% parity</div>
                </div>
                <span className="rounded-full bg-emerald-200 px-1.5 py-0.5 text-[9px] font-bold text-emerald-800">validated</span>
              </div>
            </div>
            <button className="rounded bg-primary py-1.5 text-[11px] font-semibold text-white">Export quote (PDF) · Save scenario</button>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export default function Slide16() {
  return (
    <UseCaseSlide
      slideNumber="16"
      title="Forecasting, Planning & Pricing Engines"
      subtitle="Apps that actually decide, not just report — pricing, risk, budget what-ifs."
      apps={144}
      clients={19}
      growthHighlight=""
      scenarios={[
        "Pricing calculator that mirrors the canonical rule from production code",
        "Budget what-if planner — sliders, live revenue projection, save the plan",
        "Risk scoring with peer comparison — who's drifting from the group?",
        "Capacity planning and bill-of-materials configurators for manufacturing",
      ]}
      whenToStart="When a critical decision depends on an Excel kept by ONE person — and if they leave, nobody can run it."
      mockup={<Mockup />}
      appsHistory={[10,10,11,12,12,13,14,18,20,22,37,43,44,46,51,56,74,144]}
      clientsHistory={[5,5,5,6,6,6,6,7,7,8,8,10,11,11,11,13,15,19]}
    />
  );
}
