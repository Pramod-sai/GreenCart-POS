/**
 * Lightweight SVG charts — no external chart library
 */

export function TrendBadge({ current, previous }) {
  const diff = current - previous;
  const pct = previous ? ((diff / previous) * 100).toFixed(1) : "0";
  const up = diff >= 0;
  return (
    <span className={`trend-badge ${up ? "up" : "down"}`}>
      {up ? "▲" : "▼"} {Math.abs(Number(pct))}% vs prior
    </span>
  );
}

export function LineSalesChart({ data, title }) {
  const values = data.map((d) => d.value);
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  const range = max - min || 1;
  const w = 100;
  const h = 40;
  const pad = 3;
  const coords = values.map((v, i) => {
    const x = pad + (i / Math.max(values.length - 1, 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return `${x},${y}`;
  });
  const linePoints = coords.join(" ");
  const areaPoints = `${linePoints} ${w - pad},${h - pad} ${pad},${h - pad}`;

  return (
    <div className="chart-card">
      <div className="chart-card-head">
        <strong>{title}</strong>
        <span className="muted small">Last {data.length} periods — up/down vs prior day</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="line-chart-svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#118847" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#118847" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <polygon fill="url(#areaFill)" points={areaPoints} />
        <polyline fill="none" stroke="#0d6835" strokeWidth="1.5" points={linePoints} />
      </svg>
      <ul className="trend-list">
        {data.slice(-5).map((d, i) => (
          <li key={i}>
            <span>{d.label}</span>
            <span className="trend-line-right">
              ${d.value}
              {d.prev != null && <TrendBadge current={d.value} previous={d.prev} />}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BarHourlyChart({ data, title }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className="chart-card">
      <div className="chart-card-head">
        <strong>{title}</strong>
        <span className="muted small">Hourly volume (c-store rush pattern)</span>
      </div>
      <div className="bar-chart-wrap">
        {data.map((d) => (
          <div key={d.hour} className="bar-col" title={`${d.hour}:00 — $${d.value}`}>
            <div
              className="bar-fill"
              style={{ height: `${(d.value / max) * 100}%` }}
            />
            <span className="bar-label">{d.hour % 6 === 0 ? `${d.hour}h` : ""}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CategoryBarChart({ items, title }) {
  const max = Math.max(...items.map((i) => i.value), 1);
  return (
    <div className="chart-card">
      <div className="chart-card-head">
        <strong>{title}</strong>
        <span className="muted small">Category mix</span>
      </div>
      <ul className="category-bars">
        {items.map((row) => (
          <li key={row.name}>
            <span>{row.name}</span>
            <div className="cat-bar-track">
              <div
                className="cat-bar-fill"
                style={{ width: `${(row.value / max) * 100}%` }}
              />
            </div>
            <strong>${row.value}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
