import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlideContainer } from "@/components/presentation/SlideContainer";
import { KeyHint } from "@/components/presentation/KeyHint";

const TOTAL_STEPS = 3;

const THINK_LINES = [
  "Analyzing the request — full Windows 11 desktop environment with 60+ subsystems.",
  "Planning: window manager, file system, 24 built-in apps, drag/drop, IPC, theming.",
  "Aesthetic target: Mica/Acrylic blur, Segoe UI Variable, fluent motion, accent colors.",
  "Bootstrapping monorepo: pnpm workspaces, Vite, TypeScript strict, Vitest, Playwright.",
];

const TOOLS = [
  { kind: "Bash", name: "pnpm create vite win11 --template react-ts", delta: "✓", color: "text-cyan-400" },
  { kind: "Write", name: "src/lib/window-manager.ts", delta: "+612", color: "text-emerald-400" },
  { kind: "Write", name: "src/lib/file-system.ts", delta: "+489", color: "text-emerald-400" },
  { kind: "Write", name: "src/lib/process-table.ts", delta: "+214", color: "text-emerald-400" },
  { kind: "Write", name: "src/lib/ipc-bus.ts", delta: "+167", color: "text-emerald-400" },
  { kind: "Write", name: "src/components/desktop.tsx", delta: "+247", color: "text-emerald-400" },
  { kind: "Write", name: "src/components/taskbar/index.tsx", delta: "+312", color: "text-emerald-400" },
  { kind: "Write", name: "src/components/taskbar/start-button.tsx", delta: "+89", color: "text-emerald-400" },
  { kind: "Write", name: "src/components/taskbar/system-tray.tsx", delta: "+178", color: "text-emerald-400" },
  { kind: "Write", name: "src/components/start-menu/index.tsx", delta: "+421", color: "text-emerald-400" },
  { kind: "Write", name: "src/components/start-menu/pinned-grid.tsx", delta: "+156", color: "text-emerald-400" },
  { kind: "Write", name: "src/components/start-menu/recommended.tsx", delta: "+134", color: "text-emerald-400" },
  { kind: "Write", name: "src/components/window/chrome.tsx", delta: "+289", color: "text-emerald-400" },
  { kind: "Write", name: "src/components/window/title-bar.tsx", delta: "+118", color: "text-emerald-400" },
  { kind: "Write", name: "src/components/window/resize-handles.tsx", delta: "+203", color: "text-emerald-400" },
  { kind: "Write", name: "src/apps/file-explorer/index.tsx", delta: "+842", color: "text-emerald-400" },
  { kind: "Write", name: "src/apps/file-explorer/sidebar.tsx", delta: "+218", color: "text-emerald-400" },
  { kind: "Write", name: "src/apps/file-explorer/file-grid.tsx", delta: "+356", color: "text-emerald-400" },
  { kind: "Write", name: "src/apps/edge/browser.tsx", delta: "+1,247", color: "text-emerald-400" },
  { kind: "Write", name: "src/apps/notepad/editor.tsx", delta: "+489", color: "text-emerald-400" },
  { kind: "Write", name: "src/apps/calculator/index.tsx", delta: "+367", color: "text-emerald-400" },
  { kind: "Write", name: "src/apps/settings/panels/*.tsx", delta: "+2,134", color: "text-emerald-400" },
  { kind: "Write", name: "src/apps/photos/gallery.tsx", delta: "+512", color: "text-emerald-400" },
  { kind: "Write", name: "src/apps/terminal/pty.tsx", delta: "+678", color: "text-emerald-400" },
  { kind: "Write", name: "src/hooks/use-drag.ts", delta: "+92", color: "text-emerald-400" },
  { kind: "Write", name: "src/hooks/use-focus.ts", delta: "+74", color: "text-emerald-400" },
  { kind: "Write", name: "src/styles/mica.css", delta: "+118", color: "text-emerald-400" },
  { kind: "Write", name: "src/styles/segoe-variable.css", delta: "+47", color: "text-emerald-400" },
  { kind: "Write", name: "public/wallpapers/bloom.svg", delta: "+1", color: "text-emerald-400" },
  { kind: "Write", name: "public/icons/system/*.svg", delta: "+184", color: "text-emerald-400" },
  { kind: "Edit", name: "vite.config.ts", delta: "+34", color: "text-amber-400" },
  { kind: "Edit", name: "tsconfig.json", delta: "+12", color: "text-amber-400" },
  { kind: "Edit", name: "package.json", delta: "+47", color: "text-amber-400" },
  { kind: "Write", name: "tests/wm.test.ts", delta: "+248", color: "text-emerald-400" },
  { kind: "Write", name: "tests/file-system.test.ts", delta: "+312", color: "text-emerald-400" },
  { kind: "Write", name: "tests/integration/desktop.spec.ts", delta: "+421", color: "text-emerald-400" },
  { kind: "Bash", name: "pnpm install", delta: "✓ 1,247 pkgs", color: "text-cyan-400" },
  { kind: "Bash", name: "pnpm typecheck", delta: "✓ 0 errors", color: "text-cyan-400" },
  { kind: "Bash", name: "pnpm test", delta: "✓ 184 pass", color: "text-cyan-400" },
  { kind: "Bash", name: "pnpm build", delta: "✓ 2.4 MB", color: "text-cyan-400" },
];

export default function Slide08() {
  const [step, setStep] = useState(0);
  const stepRef = useRef(0);
  useEffect(() => { stepRef.current = step; }, [step]);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key !== "ArrowRight") return;
      const tag = (document.activeElement?.tagName ?? "").toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      if (stepRef.current >= TOTAL_STEPS) return;
      event.preventDefault();
      event.stopPropagation();
      setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    }
    window.addEventListener("keydown", handleKey, true);
    return () => window.removeEventListener("keydown", handleKey, true);
  }, []);

  return (
    <SlideContainer variant="light" animationKey="slide-08">
      {step < TOTAL_STEPS && <KeyHint keyLabel="→" />}

      <div className="shrink-0 mb-3">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          And Then People Started Asking Wild Things
        </h2>
        <p className="mt-1 text-base text-muted-foreground">One sentence. Watch what comes out.</p>
        <div className="mt-3 h-1 w-24 rounded-full bg-primary" />
      </div>

      <div className="relative flex min-h-0 flex-1 items-stretch">
        <AnimatePresence mode="wait">
          {step < 3 ? (
            <motion.div
              key="terminal-stage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex w-full items-start justify-center"
            >
              <ClaudeCodeTerminal step={step} />
            </motion.div>
          ) : (
            <motion.div
              key="windows-stage"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="flex w-full flex-col gap-3"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-muted-foreground">
                  ⏵ claude-code · done in 4m 38s · 412 files · 28,914 lines · 184 tests ✓
                </span>
                <span className="rounded-full border border-emerald-500/40 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                  ● running
                </span>
              </div>
              <Windows11Desktop />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-2 shrink-0 text-center text-xs text-muted-foreground/60">
        {step === 0 ? (
          <>
            Press <kbd className="rounded border border-foreground/20 px-1.5 py-0.5 font-mono">→</kbd> to send the prompt…
          </>
        ) : (
          <>({step}/{TOTAL_STEPS})</>
        )}
      </p>
    </SlideContainer>
  );
}

function ClaudeCodeTerminal({ step }: { step: number }) {
  const bodyRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom while tool calls stream in during step 2.
  useEffect(() => {
    if (step < 2) return;
    const el = bodyRef.current;
    if (!el) return;
    let cancelled = false;
    const start = Date.now();
    const tick = () => {
      if (cancelled) return;
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      if (Date.now() - start < 1800) {
        setTimeout(tick, 60);
      }
    };
    tick();
    return () => { cancelled = true; };
  }, [step]);

  return (
    <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-zinc-800 shadow-2xl" style={{ background: "#1a1a1a", fontFamily: "ui-monospace, 'SF Mono', Menlo, Monaco, monospace" }}>
      {/* Terminal chrome */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-2" style={{ background: "#0f0f0f" }}>
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="h-3 w-3 rounded-full" style={{ background: "#febc2e" }} />
          <span className="h-3 w-3 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <span className="text-[11px] text-zinc-500">vojta@mbp — claude-code — 96×30</span>
        <span className="w-12" />
      </div>

      {/* Claude Code header */}
      <div className="flex items-center justify-between border-b border-zinc-900 px-4 py-1.5" style={{ background: "#161616" }}>
        <div className="flex items-center gap-2 text-[11px] text-zinc-400">
          <span className="text-orange-400">✻</span>
          <span className="text-zinc-200">Claude Code</span>
          <span className="text-zinc-600">·</span>
          <span>opus-4.7</span>
          <span className="text-zinc-600">·</span>
          <span>~/projects/win11</span>
        </div>
        <div className="text-[10px] text-zinc-500">/help · / · @</div>
      </div>

      {/* Terminal body */}
      <div ref={bodyRef} className="max-h-[440px] overflow-y-auto px-4 py-3 text-[12px] leading-snug text-zinc-200">
        {/* User prompt */}
        <div className="flex items-start gap-2">
          <span className="text-cyan-400">❯</span>
          <span className="text-zinc-100">I want to build Windows 11. Make sure it works.</span>
        </div>

        {/* Step 1+: thinking */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3"
            >
              <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                <span className="text-orange-400">✻</span>
                <span className="italic">Thinking…</span>
                <span className="ml-2 text-zinc-600">(4.2s · 1,847 tokens)</span>
              </div>
              <div className="mt-1 border-l-2 border-zinc-800 pl-3 text-[12px] italic text-zinc-500">
                {THINK_LINES.slice(0, step >= 2 ? THINK_LINES.length : 2).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: tool calls */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 space-y-1"
            >
              {TOOLS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.02 + i * 0.025 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-emerald-400">●</span>
                  <span className="w-12 font-semibold text-zinc-300">{t.kind}</span>
                  <span className="flex-1 text-zinc-200">{t.name}</span>
                  <span className={`tabular-nums ${t.color}`}>{t.delta}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-2 flex items-center gap-2 text-zinc-400"
              >
                <span className="text-emerald-400">✓</span>
                <span>Build complete in <span className="text-zinc-200">4m 38s</span> · <span className="text-zinc-200">412 files</span> · <span className="text-zinc-200">28,914 lines</span> · 184 tests passing · <span className="text-zinc-200">app running on :5173</span></span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cursor */}
        {step < 2 && (
          <div className="mt-3 flex items-center gap-2 text-[11px] text-zinc-500">
            <span className="inline-block h-3 w-1.5 animate-pulse bg-zinc-400" />
          </div>
        )}
      </div>
    </div>
  );
}

/* Realistic Windows 11 desktop */
function Windows11Desktop() {
  return (
    <div
      className="relative h-full min-h-[340px] w-full overflow-hidden rounded-lg"
      style={{
        background:
          "radial-gradient(ellipse at 30% 30%, #4a9eff 0%, #1e5fc5 35%, #102a5b 70%, #061536 100%)",
        fontFamily:
          '"Segoe UI Variable Text", "Segoe UI", system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Bloom-style wallpaper accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[20%] h-64 w-64 rounded-full opacity-60 blur-3xl" style={{ background: "radial-gradient(circle, #76c0ff 0%, transparent 60%)" }} />
        <div className="absolute right-[10%] top-[10%] h-48 w-48 rounded-full opacity-40 blur-2xl" style={{ background: "radial-gradient(circle, #b794f4 0%, transparent 60%)" }} />
        <div className="absolute bottom-[20%] left-[40%] h-56 w-56 rounded-full opacity-50 blur-3xl" style={{ background: "radial-gradient(circle, #5eead4 0%, transparent 60%)" }} />
      </div>

      {/* Desktop shortcut */}
      <div className="absolute left-4 top-3 flex flex-col items-center gap-0.5 text-[10px] text-white">
        <div className="flex h-9 w-9 items-center justify-center rounded text-2xl drop-shadow">🗑️</div>
        <span className="drop-shadow">Recycle Bin</span>
      </div>

      {/* File Explorer window — authentic Win 11 chrome */}
      <div
        className="absolute left-1/2 top-[12%] w-[64%] -translate-x-1/2 overflow-hidden rounded-lg shadow-2xl"
        style={{
          background: "rgba(243, 243, 243, 0.96)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        {/* Title bar with tabs */}
        <div className="flex items-stretch" style={{ background: "rgba(238, 238, 238, 0.85)" }}>
          <div className="flex flex-1 items-end gap-1 px-2 pt-1.5">
            <div className="flex items-center gap-1.5 rounded-t-md bg-white/90 px-3 py-1 text-[10px] font-medium text-zinc-800 shadow-sm">
              <span className="text-yellow-500">📁</span>
              <span>Documents</span>
              <span className="ml-1 text-zinc-400">×</span>
            </div>
            <div className="flex h-5 w-5 items-center justify-center text-[12px] text-zinc-500">+</div>
          </div>
          <div className="flex items-stretch">
            <button className="flex w-10 items-center justify-center text-[11px] text-zinc-600 hover:bg-black/5">—</button>
            <button className="flex w-10 items-center justify-center text-[11px] text-zinc-600 hover:bg-black/5">▢</button>
            <button className="flex w-10 items-center justify-center text-[11px] text-white" style={{ background: "#e81123" }}>×</button>
          </div>
        </div>
        {/* Toolbar */}
        <div className="flex items-center gap-1.5 border-b border-zinc-200 px-2.5 py-1.5">
          {["←", "→", "↑"].map((b, i) => (
            <button key={i} className="flex h-6 w-6 items-center justify-center rounded text-[11px] text-zinc-700 hover:bg-black/5">{b}</button>
          ))}
          <div className="ml-2 flex-1 rounded border border-zinc-300 bg-white px-2 py-0.5 text-[10px] text-zinc-700">
            📁 &nbsp;This PC &nbsp;›&nbsp; Documents
          </div>
          <button className="flex h-6 items-center gap-1 rounded px-2 text-[10px] text-zinc-600 hover:bg-black/5">⊞ View</button>
        </div>
        {/* Body */}
        <div className="flex h-32">
          {/* Sidebar */}
          <div className="w-32 border-r border-zinc-200 px-2 py-2 text-[10px] text-zinc-700">
            {[
              { icon: "🏠", label: "Home" },
              { icon: "⭐", label: "Favorites" },
              { icon: "🖥️", label: "Desktop", active: true },
              { icon: "📄", label: "Documents" },
              { icon: "🖼️", label: "Pictures" },
              { icon: "⬇️", label: "Downloads" },
              { icon: "💻", label: "This PC" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-1.5 rounded px-1.5 py-1 ${item.active ? "bg-blue-100 font-medium text-blue-900" : ""}`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          {/* File grid */}
          <div className="flex-1 p-3">
            <div className="grid grid-cols-5 gap-3">
              {[
                { icon: "📄", name: "Q2-Report.docx" },
                { icon: "📊", name: "Sales.xlsx" },
                { icon: "📝", name: "notes.txt" },
                { icon: "🖼️", name: "team.png" },
                { icon: "📁", name: "Archive" },
                { icon: "📄", name: "Plan.pdf" },
                { icon: "🎵", name: "demo.mp3" },
              ].map((f) => (
                <div key={f.name} className="flex flex-col items-center gap-1 text-center">
                  <div className="text-2xl">{f.icon}</div>
                  <div className="line-clamp-2 text-[9px] leading-tight text-zinc-800">{f.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-200 px-3 py-1 text-[9px] text-zinc-500">7 items</div>
      </div>

      {/* Taskbar — Windows 11 style: centered, Mica blur */}
      <div
        className="absolute bottom-1.5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-md px-2 py-1"
        style={{
          background: "rgba(32, 32, 32, 0.72)",
          backdropFilter: "blur(20px) saturate(150%)",
          WebkitBackdropFilter: "blur(20px) saturate(150%)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Start button — 4-square Windows logo */}
        <button className="flex h-7 w-7 items-center justify-center rounded hover:bg-white/10">
          <svg viewBox="0 0 24 24" className="h-4 w-4">
            <rect x="2" y="2" width="9" height="9" fill="#0078d4" />
            <rect x="13" y="2" width="9" height="9" fill="#0078d4" />
            <rect x="2" y="13" width="9" height="9" fill="#0078d4" />
            <rect x="13" y="13" width="9" height="9" fill="#0078d4" />
          </svg>
        </button>
        {/* Search */}
        <button className="flex h-7 w-7 items-center justify-center rounded text-zinc-300 hover:bg-white/10">🔍</button>
        {/* Task view */}
        <button className="flex h-7 w-7 items-center justify-center rounded text-zinc-300 hover:bg-white/10">▢</button>
        <div className="mx-1 h-5 w-px bg-white/15" />
        {/* Pinned apps with active indicator on file explorer */}
        {[
          { icon: "📁", active: true },
          { icon: "🌐", active: false },
          { icon: "📧", active: false },
          { icon: "🎬", active: false },
          { icon: "🎵", active: false },
        ].map((app, i) => (
          <button key={i} className="relative flex h-7 w-7 items-center justify-center rounded text-base hover:bg-white/10">
            {app.icon}
            {app.active && (
              <span className="absolute bottom-0 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-blue-400" />
            )}
          </button>
        ))}
      </div>

      {/* System tray bottom right */}
      <div
        className="absolute bottom-1.5 right-2 flex items-center gap-2 rounded-md px-2 py-1 text-[10px] text-zinc-100"
        style={{
          background: "rgba(32, 32, 32, 0.72)",
          backdropFilter: "blur(20px) saturate(150%)",
          WebkitBackdropFilter: "blur(20px) saturate(150%)",
        }}
      >
        <span>📶</span>
        <span>🔊</span>
        <span>🔋</span>
        <div className="leading-tight text-right">
          <div className="tabular-nums">14:32</div>
          <div className="tabular-nums text-[8px] text-zinc-300">6/1/2026</div>
        </div>
      </div>
    </div>
  );
}
