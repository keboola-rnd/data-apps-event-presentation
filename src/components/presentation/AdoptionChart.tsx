import { motion } from "framer-motion";

interface AdoptionChartProps {
  apps: number[];
  clients: number[];
  months?: string[];
  primaryColor?: string;
  secondaryColor?: string;
  height?: number;
}

const DEFAULT_MONTHS = [
  "Dec '24", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
  "Dec '25", "Jan", "Feb", "Mar", "Apr", "May '26",
];

function niceCeiling(v: number): number {
  if (v <= 0) return 1;
  const exp = Math.floor(Math.log10(v));
  const mag = Math.pow(10, exp);
  const norm = v / mag;
  const nice = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10;
  return nice * mag;
}

export function AdoptionChart({
  apps,
  clients,
  months = DEFAULT_MONTHS,
  primaryColor = "#097CF7",
  secondaryColor = "#FFBB0A",
  height = 130,
}: AdoptionChartProps) {
  const w = 380;
  const h = height;
  const padTop = 10;
  const padBottom = 22;
  const padLeft = 32;
  const padRight = 32;
  const innerH = h - padTop - padBottom;
  const innerW = w - padLeft - padRight;

  const maxApps = niceCeiling(Math.max(...apps));
  const maxClients = niceCeiling(Math.max(...clients));
  const ticks = [0, maxApps / 4, maxApps / 2, (3 * maxApps) / 4, maxApps];

  const appsPts = apps.map((v, i) => ({
    x: padLeft + (i / (apps.length - 1)) * innerW,
    y: padTop + innerH - (v / maxApps) * innerH,
  }));
  const clientsPts = clients.map((v, i) => ({
    x: padLeft + (i / (clients.length - 1)) * innerW,
    y: padTop + innerH - (v / maxClients) * innerH,
  }));

  const appsLine = appsPts.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ");
  const appsArea = `${appsLine} L ${padLeft + innerW} ${padTop + innerH} L ${padLeft} ${padTop + innerH} Z`;
  const clientsLine = clientsPts.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ");

  const lastApps = appsPts[appsPts.length - 1];
  const lastClients = clientsPts[clientsPts.length - 1];

  // X-axis labels at quarterly cadence: 0, 6, 12, 17 (Dec24, Jun25, Dec25, May26)
  const xLabelIndices = [0, 6, 12, months.length - 1];

  return (
    <div className="relative">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
        <span>Adoption · last 18 months</span>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: primaryColor }} />
            apps
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-1 rounded-sm" style={{ background: secondaryColor }} />
            <span className="inline-block h-2 w-1 rounded-sm" style={{ background: secondaryColor }} />
            <span className="ml-0.5">clients</span>
          </span>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-1 h-28 w-full">
        {/* Horizontal gridlines + Y tick labels */}
        {ticks.map((t, i) => {
          const y = padTop + innerH - (t / maxApps) * innerH;
          return (
            <g key={i}>
              <line
                x1={padLeft}
                y1={y}
                x2={padLeft + innerW}
                y2={y}
                stroke="#e5e7eb"
                strokeWidth="0.5"
                strokeDasharray={i === 0 ? "" : "2 3"}
              />
              <text
                x={padLeft - 5}
                y={y + 3}
                fontSize="8"
                fill="#94a3b8"
                textAnchor="end"
              >
                {t >= 1000 ? `${(t / 1000).toFixed(t % 1000 === 0 ? 0 : 1)}k` : t.toString()}
              </text>
            </g>
          );
        })}

        {/* Y axis line */}
        <line x1={padLeft} y1={padTop} x2={padLeft} y2={padTop + innerH} stroke="#94a3b8" strokeWidth="0.6" />
        {/* X axis line */}
        <line x1={padLeft} y1={padTop + innerH} x2={padLeft + innerW} y2={padTop + innerH} stroke="#94a3b8" strokeWidth="0.6" />

        {/* Apps area & line */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          d={appsArea}
          fill={primaryColor}
          fillOpacity={0.12}
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          d={appsLine}
          fill="none"
          stroke={primaryColor}
          strokeWidth="2"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          d={clientsLine}
          fill="none"
          stroke={secondaryColor}
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />

        {/* End-point markers + value labels */}
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          cx={lastApps.x}
          cy={lastApps.y}
          r="3.5"
          fill={primaryColor}
        />
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05 }}
          cx={lastClients.x}
          cy={lastClients.y}
          r="2.5"
          fill={secondaryColor}
        />
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          x={lastApps.x + 5}
          y={lastApps.y + 3}
          fontSize="10"
          fontWeight="700"
          fill={primaryColor}
        >
          {apps[apps.length - 1].toLocaleString()}
        </motion.text>
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
          x={lastClients.x + 5}
          y={lastClients.y - 3}
          fontSize="9"
          fontWeight="600"
          fill={secondaryColor}
        >
          {clients[clients.length - 1]}
        </motion.text>

        {/* X-axis labels & tick marks */}
        {xLabelIndices.map((idx) => {
          const x = padLeft + (idx / (months.length - 1)) * innerW;
          return (
            <g key={idx}>
              <line x1={x} y1={padTop + innerH} x2={x} y2={padTop + innerH + 3} stroke="#94a3b8" strokeWidth="0.6" />
              <text
                x={x}
                y={padTop + innerH + 12}
                fontSize="8.5"
                fill="#64748b"
                textAnchor={idx === 0 ? "start" : idx === months.length - 1 ? "end" : "middle"}
              >
                {months[idx]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
