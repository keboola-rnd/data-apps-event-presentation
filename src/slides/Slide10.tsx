import { motion } from "framer-motion";
import { ContentSlide } from "@/components/presentation/ContentSlide";

interface TreeLine {
  text: string;
  highlight?: boolean;
  comment?: string;
}

const TREE: TreeLine[] = [
  { text: "my-sales-app/", highlight: true },
  { text: "├── keboola-config/", highlight: true, comment: "runtime contract" },
  { text: "│   ├── nginx/" },
  { text: "│   │   └── sites/default.conf", comment: "reverse proxy → :8050" },
  { text: "│   ├── supervisord/" },
  { text: "│   │   └── services/app.conf", comment: "process manager" },
  { text: "│   └── setup.sh", comment: "uv sync, npm install, …" },
  { text: "├── app.py", comment: "the Streamlit app" },
  { text: "├── data/" },
  { text: "│   └── sales.csv" },
  { text: "├── pyproject.toml", comment: "Python deps" },
  { text: "└── README.md" },
];

export default function Slide10() {
  return (
    <ContentSlide
      title="What Kai Actually Builds"
      subtitle="Input: one sentence. Output: a complete production repo."
      animationKey="slide-10"
    >
      <div className="grid grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="col-span-3 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-xl"
        >
          <div className="flex items-center gap-1.5 border-b border-slate-800 bg-slate-900 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-3 font-mono text-xs text-slate-400">my-sales-app · git repo</span>
          </div>
          <div className="px-5 py-4 font-mono text-[13px] leading-relaxed">
            {TREE.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.04, duration: 0.25 }}
                className="flex items-center justify-between"
              >
                <span className={line.highlight ? "text-cyan-300 font-semibold" : "text-slate-200"}>
                  {line.text}
                </span>
                {line.comment && (
                  <span className="ml-3 whitespace-nowrap text-[11px] italic text-slate-500">
                    # {line.comment}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="col-span-2 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="rounded-xl border-2 border-cyan-300 bg-cyan-50 p-4"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              You wrote
            </div>
            <p className="mt-1 text-base font-semibold text-foreground">
              "Build me a sales dashboard with NPV* by region."
            </p>
            <p className="mt-2 text-[11px] italic text-foreground/60">
              * NPV = Net Pipeline Value — a custom business metric (SUM of deal amount × stage probability) defined in the company's semantic model.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.3 }}
            className="rounded-xl border bg-card p-4"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Kai wrote
            </div>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
              <li>• full git repository</li>
              <li>• nginx reverse proxy config</li>
              <li>• supervisord process manager</li>
              <li>• setup.sh with uv sync</li>
              <li>• pyproject.toml with deps</li>
              <li>• the app code itself</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.3 }}
            className="rounded-xl bg-primary px-4 py-3 text-sm text-primary-foreground"
          >
            <strong>Any HTTP backend works.</strong> Streamlit, Flask, FastAPI, Node, Go — Kai writes the whole repo. You ship the prompt, not the code.
          </motion.div>
        </div>
      </div>
    </ContentSlide>
  );
}
