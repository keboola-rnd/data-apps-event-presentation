import { motion } from "framer-motion";
import { ContentSlide } from "@/components/presentation/ContentSlide";

const CODE_LINES: { content: React.ReactNode }[] = [
  { content: <><span className="text-pink-400">import</span> <span className="text-cyan-300">streamlit</span> <span className="text-pink-400">as</span> <span className="text-cyan-300">st</span></> },
  { content: <><span className="text-pink-400">import</span> <span className="text-cyan-300">pandas</span> <span className="text-pink-400">as</span> <span className="text-cyan-300">pd</span></> },
  { content: <>&nbsp;</> },
  { content: <><span className="text-cyan-300">st</span>.<span className="text-amber-300">title</span>(<span className="text-emerald-300">"🎈 Sales Explorer"</span>)</> },
  { content: <>&nbsp;</> },
  { content: <><span className="text-slate-500"># sidebar filters</span></> },
  { content: <>region <span className="text-pink-400">=</span> <span className="text-cyan-300">st</span>.sidebar.<span className="text-amber-300">selectbox</span>(<span className="text-emerald-300">"Region"</span>, [<span className="text-emerald-300">"EMEA"</span>, <span className="text-emerald-300">"NA"</span>, <span className="text-emerald-300">"APAC"</span>])</> },
  { content: <>qmin, qmax <span className="text-pink-400">=</span> <span className="text-cyan-300">st</span>.sidebar.<span className="text-amber-300">slider</span>(<span className="text-emerald-300">"Quarter"</span>, <span className="text-yellow-300">1</span>, <span className="text-yellow-300">4</span>, (<span className="text-yellow-300">1</span>, <span className="text-yellow-300">3</span>))</> },
  { content: <>trend <span className="text-pink-400">=</span> <span className="text-cyan-300">st</span>.sidebar.<span className="text-amber-300">toggle</span>(<span className="text-emerald-300">"Show trend"</span>, <span className="text-pink-400">True</span>)</> },
  { content: <>&nbsp;</> },
  { content: <><span className="text-slate-500"># load and filter data</span></> },
  { content: <>df <span className="text-pink-400">=</span> <span className="text-cyan-300">pd</span>.<span className="text-amber-300">read_csv</span>(<span className="text-emerald-300">"data/sales.csv"</span>)</> },
  { content: <>df <span className="text-pink-400">=</span> df[df[<span className="text-emerald-300">"region"</span>] <span className="text-pink-400">==</span> region]</> },
  { content: <>&nbsp;</> },
  { content: <><span className="text-slate-500"># KPIs computed from data</span></> },
  { content: <>c1, c2, c3 <span className="text-pink-400">=</span> <span className="text-cyan-300">st</span>.<span className="text-amber-300">columns</span>(<span className="text-yellow-300">3</span>)</> },
  { content: <>c1.<span className="text-amber-300">metric</span>(<span className="text-emerald-300">"Total revenue"</span>, <span className="text-pink-400">f</span><span className="text-emerald-300">"${"{"}</span>df[<span className="text-emerald-300">"revenue"</span>].<span className="text-amber-300">sum</span>()<span className="text-pink-400">/</span><span className="text-yellow-300">1e6</span><span className="text-emerald-300">:.1f{"}"}M"</span>)</> },
  { content: <>c2.<span className="text-amber-300">metric</span>(<span className="text-emerald-300">"Deals closed"</span>, <span className="text-amber-300">len</span>(df))</> },
  { content: <>c3.<span className="text-amber-300">metric</span>(<span className="text-emerald-300">"Win rate"</span>, <span className="text-pink-400">f</span><span className="text-emerald-300">"{"{"}</span>df[<span className="text-emerald-300">"won"</span>].<span className="text-amber-300">mean</span>()<span className="text-emerald-300">:.0%{"}"}"</span>)</> },
  { content: <>&nbsp;</> },
  { content: <><span className="text-slate-500"># chart</span></> },
  { content: <><span className="text-cyan-300">st</span>.<span className="text-amber-300">bar_chart</span>(df, <span className="text-amber-200">x</span><span className="text-pink-400">=</span><span className="text-emerald-300">"quarter"</span>, <span className="text-amber-200">y</span><span className="text-pink-400">=</span><span className="text-emerald-300">"revenue"</span>)</> },
];

export default function Slide04() {
  return (
    <ContentSlide
      title="It Really Is That Simple"
      subtitle="A working dashboard in ~15 lines of Python"
      animationKey="slide-04"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-xl"
        >
          {/* editor chrome */}
          <div className="flex items-center gap-1.5 border-b border-slate-800 bg-slate-900 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <div className="ml-3 font-mono text-xs text-slate-400">app.py</div>
          </div>
          <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-relaxed text-slate-200">
            {CODE_LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.025, duration: 0.2 }}
                className="flex"
              >
                <span className="mr-4 w-6 select-none text-right text-slate-600">{i + 1}</span>
                <span className="flex-1">{line.content}</span>
              </motion.div>
            ))}
          </pre>
        </motion.div>

      </div>
    </ContentSlide>
  );
}
