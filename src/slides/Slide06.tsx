import { motion } from "framer-motion";
import { ContentSlide } from "@/components/presentation/ContentSlide";

export default function Slide06() {
  return (
    <ContentSlide
      title="But You Still Had to Write the Code"
      subtitle="Streamlit was simple — but the code was still YOU."
      animationKey="slide-06"
    >
      <div className="grid grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 shadow-sm"
        >
          <div className="flex items-center justify-between border-b border-emerald-200 bg-emerald-100/60 px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
              what humans wrote
            </span>
            <span className="font-mono text-xs text-emerald-700">~15 lines, clean</span>
          </div>
          <pre className="px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-800">
{`import streamlit as st
import pandas as pd

st.title("🎈 Sales Explorer")
region = st.sidebar.selectbox(
  "Region", ["EMEA","NA","APAC"])

df = pd.read_csv("data/sales.csv")
df = df[df["region"] == region]

st.bar_chart(df, x="quarter",
             y="revenue")`}
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.35 }}
          className="overflow-hidden rounded-2xl border-2 border-red-200 bg-red-50/40 shadow-sm"
        >
          <div className="flex items-center justify-between border-b border-red-200 bg-red-100/60 px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-800">
              what 2024–early 2025 AI gave you
            </span>
            <span className="font-mono text-xs text-red-700">10 iterations later…</span>
          </div>
          <pre className="px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-800">
{`# TODO: replace with your data
data = {"x": [1,2,3], "y": [1,2,3]}

# I'm assuming pandas DataFrame:
df = pd.DataFrame(data)

st.write("Dashboard")  # placeholder
st.line_chart(df)
# Note: you may need to adjust
# the columns to match your
# actual schema. Let me know
# if you need help.`}
          </pre>
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="mt-5 text-center text-base italic text-muted-foreground"
      >
        You'd prompt, paste, fix, prompt again. The code was still <strong className="not-italic text-foreground">your</strong> work.
      </motion.p>
    </ContentSlide>
  );
}
