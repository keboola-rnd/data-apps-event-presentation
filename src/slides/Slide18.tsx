import { UseCaseSlide, BrowserChrome } from "@/components/presentation/UseCaseSlide";

function Mockup() {
  return (
    <BrowserChrome url="vendors.partner-portal.app">
      <div className="flex flex-1 flex-col" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e293b 100%)" }}>
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500" />
            <div>
              <div className="text-sm font-bold text-white">Vendor Portal</div>
              <div className="text-[9px] text-white/60">Powered by Acme Data Apps</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded bg-white/10 px-2 py-0.5 text-[9px] text-white/80">May 2026 ▾</span>
            <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-[9px] font-semibold text-amber-200">🔑 password-gated · vendor: north_logistics</span>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-28 border-r border-white/10 p-2 text-[10px]">
            {[
              { ico: "📊", l: "Overview", active: true },
              { ico: "📦", l: "Shipments" },
              { ico: "⚠", l: "Anomalies" },
              { ico: "💰", l: "Invoices" },
              { ico: "💬", l: "Support" },
            ].map((n) => (
              <div key={n.l} className={`mb-0.5 flex items-center gap-1 rounded px-1.5 py-1 ${n.active ? "bg-white/15 text-white" : "text-white/60"}`}>
                <span>{n.ico}</span><span>{n.l}</span>
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="flex-1 overflow-y-auto p-3">
            {/* Top KPIs - filtered to this vendor only */}
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { l: "Your shipments (May)", v: "1,247", d: "+8%" },
                { l: "On-time delivery", v: "94.2%", d: "−1.1pp", down: true },
                { l: "Missing shipments", v: "12", d: "8 unresolved", warn: true },
                { l: "Service level", v: "98.4%", d: "+0.6pp" },
              ].map((m) => (
                <div key={m.l} className="rounded-lg border border-white/15 bg-white/5 p-1.5 backdrop-blur">
                  <div className="text-[9px] uppercase text-white/60">{m.l}</div>
                  <div className="text-sm font-bold text-white">{m.v}</div>
                  <div className={`text-[9px] ${m.warn ? "text-amber-300" : m.down ? "text-red-300" : "text-emerald-300"}`}>{m.d}</div>
                </div>
              ))}
            </div>

            {/* Row-level filter banner */}
            <div className="mt-2 rounded border border-cyan-300/30 bg-cyan-300/10 p-1.5 text-[9px] text-cyan-100 backdrop-blur">
              🔒 <strong>Row-level filter active:</strong> <code className="rounded bg-cyan-300/20 px-1 font-mono">vendor_id = 'north_logistics'</code> · password → vendor map applied · 14 of 47 vendors hidden from your view
            </div>

            {/* Charts */}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-white/15 bg-white/5 p-2 backdrop-blur">
                <div className="text-[9px] text-white/70">Daily shipments (your routes)</div>
                <div className="mt-1 flex h-12 items-end gap-0.5">
                  {[40, 55, 70, 50, 75, 88, 95, 82, 90, 105, 92, 78].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-cyan-300" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/5 p-2 backdrop-blur">
                <div className="text-[9px] text-white/70">Anomalies caught (last 7d)</div>
                <div className="mt-1 space-y-0.5 text-[9px] text-white/80">
                  {[
                    { day: "Mon", count: 0 },
                    { day: "Tue", count: 2, alert: true },
                    { day: "Wed", count: 1 },
                    { day: "Thu", count: 0 },
                    { day: "Fri", count: 5, alert: true },
                    { day: "Sat", count: 1 },
                    { day: "Sun", count: 3, alert: true },
                  ].map((d) => (
                    <div key={d.day} className="flex items-center gap-1.5">
                      <span className="w-8 text-white/60">{d.day}</span>
                      <div className="flex-1">
                        {Array.from({ length: d.count }).map((_, i) => (
                          <span key={i} className={`mr-0.5 inline-block h-2 w-2 rounded-sm ${d.alert ? "bg-amber-400" : "bg-cyan-300"}`} />
                        ))}
                      </div>
                      <span className="w-6 text-right tabular-nums">{d.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent activity */}
            <div className="mt-2 rounded-lg border border-white/15 bg-white/5 p-2 backdrop-blur">
              <div className="text-[9px] text-white/70">Missing shipments · your routes (drill-down)</div>
              <div className="mt-1 space-y-0.5 text-[9px] text-white/85">
                {[
                  { id: "SHP-92847", route: "Prague → Bratislava", days: 3, sla: "SLA breach", color: "text-red-300" },
                  { id: "SHP-92812", route: "Brno → Vienna", days: 2, sla: "within SLA", color: "text-white/60" },
                  { id: "SHP-92798", route: "Ostrava → Krakow", days: 4, sla: "SLA breach", color: "text-red-300" },
                ].map((s) => (
                  <div key={s.id} className="grid grid-cols-[80px_1fr_60px_72px] gap-2 border-b border-white/5 py-0.5">
                    <span className="font-mono text-white/60">{s.id}</span>
                    <span>{s.route}</span>
                    <span className="text-right text-white/60">{s.days}d ago</span>
                    <span className={`text-right text-[8px] ${s.color}`}>{s.sla}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export default function Slide18() {
  return (
    <UseCaseSlide
      slideNumber="18"
      title="External Portals & Partner-Facing Apps"
      subtitle="One app, many partners — each one sees only their rows."
      apps={127}
      clients={24}
      growthHighlight=""
      scenarios={[
        "Vendor portal — one app for many partners, each sees only their own rows",
        "White-label dashboard — one instance per customer, branded as theirs",
        "Field operations portal — part-time staff log shifts, update info",
        "Self-service onboarding — open form, no login needed",
      ]}
      whenToStart="When partners keep asking for their data and you keep emailing them an XLS file every week."
      mockup={<Mockup />}
      appsHistory={[17,18,21,21,23,24,26,31,33,35,38,40,40,46,50,57,66,127]}
      clientsHistory={[9,10,11,11,12,13,14,14,14,14,14,15,15,18,20,20,23,24]}
    />
  );
}
