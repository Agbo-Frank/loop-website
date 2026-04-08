// ─── SVG Product Illustrations ────────────────────────────────────────────────
// Three hand-crafted illustrations aligned to each Solution section benefit.

// ── 1. Workflow Builder — "Automate every recurring workflow" ─────────────────
export function WorkflowBuilderIllustration() {
  return (
    <svg viewBox="0 0 560 350" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <pattern id="wf-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1.3" fill="#0D2B45" fillOpacity="0.07" />
        </pattern>
        {/* Drop shadow filter */}
        <filter id="wf-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#0D2B45" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Card */}
      <rect width="560" height="350" rx="14" fill="white" />

      {/* Title bar */}
      <rect width="560" height="46" rx="14" fill="#0D2B45" />
      <rect y="34" width="560" height="12" fill="#0D2B45" />
      <circle cx="22" cy="23" r="5.5" fill="white" fillOpacity="0.18" />
      <circle cx="40" cy="23" r="5.5" fill="white" fillOpacity="0.18" />
      <circle cx="58" cy="23" r="5.5" fill="white" fillOpacity="0.18" />
      <text x="280" y="29" fill="white" fontSize="12" fontFamily="Inter, sans-serif"
        fontWeight="600" textAnchor="middle" fillOpacity="0.65">Workflow Builder — Customer Onboarding</text>

      {/* Toolbar */}
      <rect x="0" y="46" width="560" height="36" fill="white" />
      <line x1="0" y1="82" x2="560" y2="82" stroke="#0D2B45" strokeOpacity="0.08" strokeWidth="1" />
      {/* Toolbar buttons */}
      {[['Edit', 20], ['Test Run', 60], ['Publish', 112]] .map(([label, x]) => (
        <g key={label as string}>
          <rect x={x as number} y="54" width={label === 'Test Run' ? 48 : label === 'Publish' ? 52 : 34} height="20"
            rx="5" fill={label === 'Publish' ? '#0D2B45' : '#F4F6F9'} />
          <text x={(x as number) + (label === 'Test Run' ? 24 : label === 'Publish' ? 26 : 17)} y="68"
            fill={label === 'Publish' ? 'white' : '#0D2B45'} fontSize="10" fontFamily="Inter, sans-serif"
            fontWeight="600" textAnchor="middle" fillOpacity={label === 'Publish' ? 1 : 0.6}>{label}</text>
        </g>
      ))}
      {/* Active indicator */}
      <circle cx="396" cy="64" r="4" fill="#16A34A" />
      <text x="406" y="68" fill="#0D2B45" fontSize="10" fontFamily="Inter, sans-serif"
        fontWeight="500" fillOpacity="0.5">Live · 1,247 runs</text>

      {/* Canvas */}
      <rect x="0" y="82" width="560" height="232" fill="#F4F6F9" />
      <rect x="0" y="82" width="560" height="232" fill="url(#wf-grid)" />

      {/* ── Node 1: Trigger ── x=20 y=110 w=122 h=54 */}
      <rect x="20" y="110" width="122" height="54" rx="9" fill="#0D2B45" filter="url(#wf-shadow)" />
      <rect x="20" y="110" width="5" height="54" rx="9" fill="#F9F9F7" fillOpacity="0.2" />
      <text x="88" y="130" fill="white" fontSize="8.5" fontFamily="Inter, sans-serif"
        fontWeight="700" textAnchor="middle" fillOpacity="0.5" letterSpacing="0.6">TRIGGER</text>
      <text x="88" y="149" fill="white" fontSize="11.5" fontFamily="Inter, sans-serif"
        fontWeight="600" textAnchor="middle">Customer Signs Up</text>

      {/* Arrow 1→2 */}
      <line x1="142" y1="137" x2="196" y2="137" stroke="#0D2B45" strokeWidth="1.5"
        strokeOpacity="0.25" strokeDasharray="4 3" />
      <polygon points="192,132 200,137 192,142" fill="#0D2B45" fillOpacity="0.25" />

      {/* ── Node 2: Send Email ── x=200 y=110 w=140 h=54 */}
      <rect x="200" y="110" width="140" height="54" rx="9" fill="white"
        stroke="#0D2B45" strokeWidth="1.5" strokeOpacity="0.18" filter="url(#wf-shadow)" />
      <text x="270" y="130" fill="#0D2B45" fontSize="8.5" fontFamily="Inter, sans-serif"
        fontWeight="700" textAnchor="middle" fillOpacity="0.4" letterSpacing="0.6">ACTION</text>
      <text x="270" y="149" fill="#0D2B45" fontSize="11.5" fontFamily="Inter, sans-serif"
        fontWeight="600" textAnchor="middle">Send Welcome Email</text>

      {/* Arrow 2→3 */}
      <line x1="340" y1="137" x2="394" y2="137" stroke="#0D2B45" strokeWidth="1.5"
        strokeOpacity="0.25" strokeDasharray="4 3" />
      <polygon points="390,132 398,137 390,142" fill="#0D2B45" fillOpacity="0.25" />

      {/* ── Node 3: Delay ── x=398 y=110 w=140 h=54 */}
      <rect x="398" y="110" width="140" height="54" rx="9" fill="white"
        stroke="#D97706" strokeWidth="1.5" filter="url(#wf-shadow)" />
      <text x="468" y="130" fill="#D97706" fontSize="8.5" fontFamily="Inter, sans-serif"
        fontWeight="700" textAnchor="middle" letterSpacing="0.6">DELAY</text>
      <text x="468" y="149" fill="#0D2B45" fontSize="11.5" fontFamily="Inter, sans-serif"
        fontWeight="600" textAnchor="middle">Wait 2 Days</text>

      {/* Arrow 3↓4 */}
      <line x1="468" y1="164" x2="468" y2="208" stroke="#0D2B45" strokeWidth="1.5"
        strokeOpacity="0.25" strokeDasharray="4 3" />
      <polygon points="463,204 468,212 473,204" fill="#0D2B45" fillOpacity="0.25" />

      {/* ── Node 4: Activate ── x=398 y=212 w=140 h=54 */}
      <rect x="398" y="212" width="140" height="54" rx="9" fill="white"
        stroke="#0D2B45" strokeWidth="1.5" strokeOpacity="0.18" filter="url(#wf-shadow)" />
      <text x="468" y="232" fill="#0D2B45" fontSize="8.5" fontFamily="Inter, sans-serif"
        fontWeight="700" textAnchor="middle" fillOpacity="0.4" letterSpacing="0.6">ACTION</text>
      <text x="468" y="251" fill="#0D2B45" fontSize="11.5" fontFamily="Inter, sans-serif"
        fontWeight="600" textAnchor="middle">Activate Account</text>

      {/* Arrow 4←5 (pointing left) */}
      <line x1="398" y1="239" x2="344" y2="239" stroke="#0D2B45" strokeWidth="1.5"
        strokeOpacity="0.25" strokeDasharray="4 3" />
      <polygon points="348,234 340,239 348,244" fill="#0D2B45" fillOpacity="0.25" />

      {/* ── Node 5: Notify (Complete) ── x=200 y=212 w=140 h=54 */}
      <rect x="200" y="212" width="140" height="54" rx="9" fill="#F0FDF4"
        stroke="#16A34A" strokeWidth="1.5" filter="url(#wf-shadow)" />
      <text x="270" y="232" fill="#16A34A" fontSize="8.5" fontFamily="Inter, sans-serif"
        fontWeight="700" textAnchor="middle" letterSpacing="0.6">COMPLETE</text>
      <text x="270" y="251" fill="#0D2B45" fontSize="11.5" fontFamily="Inter, sans-serif"
        fontWeight="600" textAnchor="middle">Notify Team ✓</text>

      {/* Stats bar */}
      <rect x="0" y="314" width="560" height="36" fill="white" />
      <line x1="0" y1="314" x2="560" y2="314" stroke="#0D2B45" strokeOpacity="0.07" strokeWidth="1" />
      <circle cx="24" cy="332" r="4" fill="#16A34A" />
      <text x="36" y="336.5" fill="#0D2B45" fontSize="11" fontFamily="Inter, sans-serif"
        fontWeight="600" fillOpacity="0.55">1,247 successful runs</text>
      <text x="244" y="336.5" fill="#0D2B45" fontSize="11" fontFamily="Inter, sans-serif"
        fillOpacity="0.35">·  Last run: 2 min ago  ·  99.8% success rate</text>
    </svg>
  )
}

// ── 2. Consistency Dashboard — "Standardize operations at scale" ──────────────
export function ConsistencyDashboardIllustration() {
  // Columns: Name | Status | Runs | Success bar + %
  // No "Last Run" column — avoids right-edge overflow; recency is shown in footer.
  const rows = [
    { name: 'Customer Onboarding',  runs: '1,247', pct: 99.8 },
    { name: 'Subscription Renewal', runs: '893',   pct: 100  },
    { name: 'Payment Failed Alert', runs: '341',   pct: 99.5 },
    { name: 'Team Notifications',   runs: '612',   pct: 100  },
  ]

  // Column x anchors
  const COL = { name: 20, status: 228, runs: 312, bar: 368 }
  const BAR_W = 120  // bar track width; pct label at bar+BAR_W+8 = 496 (fits in 560)

  return (
    <svg viewBox="0 0 560 350" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}>

      {/* Card */}
      <rect width="560" height="350" rx="14" fill="white" />

      {/* Title bar */}
      <rect width="560" height="46" rx="14" fill="#0D2B45" />
      <rect y="34" width="560" height="12" fill="#0D2B45" />
      <circle cx="22" cy="23" r="5.5" fill="white" fillOpacity="0.18" />
      <circle cx="40" cy="23" r="5.5" fill="white" fillOpacity="0.18" />
      <circle cx="58" cy="23" r="5.5" fill="white" fillOpacity="0.18" />
      <text x="280" y="29" fill="white" fontSize="12" fontFamily="Inter, sans-serif"
        fontWeight="600" textAnchor="middle" fillOpacity="0.65">Loop — Workflow Dashboard</text>

      {/* Summary stat row */}
      <rect x="0" y="46" width="560" height="52" fill="#F4F6F9" />
      <line x1="0" y1="98" x2="560" y2="98" stroke="#0D2B45" strokeOpacity="0.08" strokeWidth="1" />

      {/* Stat tiles — evenly spaced across 560 */}
      {[
        { label: 'Total Workflows',  value: '4',     x: 28  },
        { label: 'Total Runs',       value: '3,093', x: 168 },
        { label: 'Avg Success Rate', value: '99.8%', x: 330 },
        { label: 'Uptime SLA',       value: '99.9%', x: 460 },
      ].map(s => (
        <g key={s.label}>
          <text x={s.x} y="68" fill="#0D2B45" fontSize="18" fontFamily="Inter, sans-serif"
            fontWeight="800" fillOpacity="0.9">{s.value}</text>
          <text x={s.x} y="84" fill="#0D2B45" fontSize="9.5" fontFamily="Inter, sans-serif"
            fontWeight="500" fillOpacity="0.4">{s.label}</text>
        </g>
      ))}
      {[150, 314, 444].map(x => (
        <line key={x} x1={x} y1="56" x2={x} y2="90" stroke="#0D2B45" strokeOpacity="0.08" strokeWidth="1" />
      ))}

      {/* Table header */}
      <rect x="0" y="98" width="560" height="32" fill="#F4F6F9" />
      <line x1="0" y1="130" x2="560" y2="130" stroke="#0D2B45" strokeOpacity="0.08" strokeWidth="1" />
      {([
        ['Workflow',      COL.name],
        ['Status',        COL.status],
        ['Runs',          COL.runs],
        ['Success Rate',  COL.bar],
      ] as [string, number][]).map(([label, x]) => (
        <text key={label} x={x} y="118" fill="#0D2B45" fontSize="10"
          fontFamily="Inter, sans-serif" fontWeight="700" fillOpacity="0.35">{label}</text>
      ))}

      {/* Table rows */}
      {rows.map((row, i) => {
        const rowY = 130 + i * 48
        const barFill = (row.pct / 100) * BAR_W

        return (
          <g key={row.name}>
            <rect x="0" y={rowY} width="560" height="48" fill={i % 2 === 0 ? 'white' : '#FAFAFA'} />
            <line x1="0" y1={rowY + 48} x2="560" y2={rowY + 48}
              stroke="#0D2B45" strokeOpacity="0.05" strokeWidth="1" />

            {/* Name */}
            <text x={COL.name} y={rowY + 28} fill="#0D2B45" fontSize="12"
              fontFamily="Inter, sans-serif" fontWeight="600" fillOpacity="0.85">{row.name}</text>

            {/* Status badge */}
            <rect x={COL.status} y={rowY + 14} width="56" height="20" rx="10" fill="#F0FDF4" />
            <circle cx={COL.status + 12} cy={rowY + 24} r="3.5" fill="#16A34A" />
            <text x={COL.status + 20} y={rowY + 28} fill="#16A34A" fontSize="10"
              fontFamily="Inter, sans-serif" fontWeight="600">Active</text>

            {/* Runs */}
            <text x={COL.runs} y={rowY + 28} fill="#0D2B45" fontSize="12"
              fontFamily="Inter, sans-serif" fontWeight="500" fillOpacity="0.6">{row.runs}</text>

            {/* Bar track */}
            <rect x={COL.bar} y={rowY + 18} width={BAR_W} height="8" rx="4"
              fill="#0D2B45" fillOpacity="0.08" />
            {/* Bar fill */}
            <rect x={COL.bar} y={rowY + 18} width={barFill} height="8" rx="4"
              fill="#16A34A" fillOpacity="0.85" />
            {/* Pct label — x = bar_start + bar_width + 8, stays ≤ 556 */}
            <text x={COL.bar + BAR_W + 8} y={rowY + 27} fill="#0D2B45" fontSize="10.5"
              fontFamily="Inter, sans-serif" fontWeight="600" fillOpacity="0.65">{row.pct}%</text>
          </g>
        )
      })}

      {/* Bottom bar */}
      <rect x="0" y="322" width="560" height="28" fill="#F4F6F9" />
      <line x1="0" y1="322" x2="560" y2="322" stroke="#0D2B45" strokeOpacity="0.07" strokeWidth="1" />
      {/* Left: summary */}
      <text x="20" y="340" fill="#0D2B45" fontSize="10.5" fontFamily="Inter, sans-serif"
        fillOpacity="0.4">4 workflows  ·  3,093 total runs</text>
      {/* Right: status — right-aligned to x=540 */}
      <circle cx="392" cy="336" r="3.5" fill="#16A34A" />
      <text x="402" y="340" fill="#16A34A" fontSize="10.5" fontFamily="Inter, sans-serif"
        fontWeight="600">All systems operational</text>
    </svg>
  )
}

// ── 3. Integrations Hub — "Connect your entire stack" ────────────────────────
export function IntegrationsHubIllustration() {
  // Integration chips: [name, category, color, x, y]
  const integrations: [string, string, string, number, number][] = [
    ['Stripe',      'Payments',   '#635BFF', 30,  52],
    ['Salesforce',  'CRM',        '#00A1E0', 30, 130],
    ['HubSpot',     'Marketing',  '#FF7A59', 30, 208],
    ['Zendesk',     'Support',    '#03363D', 390, 52],
    ['Slack',       'Comms',      '#4A154B', 390, 130],
    ['Gmail',       'Email',      '#EA4335', 390, 208],
  ]

  // Hub center (card center = 280, 175); each card w=140 h=56
  const hubCx = 280
  const hubCy = 175

  return (
    <svg viewBox="0 0 560 350" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <pattern id="int-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.2" fill="#0D2B45" fillOpacity="0.06" />
        </pattern>
        <filter id="int-shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#0D2B45" floodOpacity="0.1" />
        </filter>
        <filter id="hub-glow">
          <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#0D2B45" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Card bg */}
      <rect width="560" height="350" rx="14" fill="white" />

      {/* Title bar */}
      <rect width="560" height="46" rx="14" fill="#0D2B45" />
      <rect y="34" width="560" height="12" fill="#0D2B45" />
      <circle cx="22" cy="23" r="5.5" fill="white" fillOpacity="0.18" />
      <circle cx="40" cy="23" r="5.5" fill="white" fillOpacity="0.18" />
      <circle cx="58" cy="23" r="5.5" fill="white" fillOpacity="0.18" />
      <text x="280" y="29" fill="white" fontSize="12" fontFamily="Inter, sans-serif"
        fontWeight="600" textAnchor="middle" fillOpacity="0.65">Loop — Integration Hub</text>

      {/* Canvas */}
      <rect x="0" y="46" width="560" height="304" fill="#F4F6F9" />
      <rect x="0" y="46" width="560" height="304" fill="url(#int-grid)" />

      {/* Connection lines (drawn first, below cards) */}
      {integrations.map(([name, , , cx, cy]) => {
        // Card center x, y
        const cardCx = cx + 70  // card w=140, center at cx+70
        const cardCy = cy + 28  // card h=56, center at cy+28
        return (
          <line key={`line-${name}`}
            x1={cardCx} y1={cardCy}
            x2={hubCx} y2={hubCy}
            stroke="#0D2B45" strokeWidth="1.5"
            strokeOpacity="0.12" strokeDasharray="5 4"
          />
        )
      })}

      {/* Concentric circles around hub */}
      <circle cx={hubCx} cy={hubCy} r="72" stroke="#0D2B45" strokeOpacity="0.05" strokeWidth="1" />
      <circle cx={hubCx} cy={hubCy} r="52" stroke="#0D2B45" strokeOpacity="0.07" strokeWidth="1" />

      {/* Hub: Loop center badge */}
      <circle cx={hubCx} cy={hubCy} r="46" fill="#0D2B45" filter="url(#hub-glow)" />
      <circle cx={hubCx} cy={hubCy} r="46" fill="#0D2B45" />
      {/* Loop logo mark (L shape) */}
      <path d={`M${hubCx - 16} ${hubCy - 18} v36 h20`} stroke="#F9F9F7" strokeWidth="3"
        strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
      {/* "LOOP" text below logo */}
      <text x={hubCx} y={hubCy + 28} fill="white" fontSize="9" fontFamily="Inter, sans-serif"
        fontWeight="800" textAnchor="middle" fillOpacity="0.55" letterSpacing="2">LOOP</text>

      {/* Integration cards */}
      {integrations.map(([name, category, color, x, y]) => (
        <g key={name}>
          <rect x={x} y={y} width="140" height="56" rx="10" fill="white"
            stroke="#0D2B45" strokeWidth="1" strokeOpacity="0.1" filter="url(#int-shadow)" />
          {/* Left color accent */}
          <rect x={x} y={y} width="4" height="56" rx="10" fill={color} fillOpacity="0.75" />
          <rect x={x} y={y + 4} width="4" height="48" fill={color} fillOpacity="0.75" />
          {/* Name */}
          <text x={x + 20} y={y + 24} fill="#0D2B45" fontSize="13" fontFamily="Inter, sans-serif"
            fontWeight="700" fillOpacity="0.9">{name}</text>
          {/* Category */}
          <text x={x + 20} y={y + 40} fill="#0D2B45" fontSize="10" fontFamily="Inter, sans-serif"
            fontWeight="500" fillOpacity="0.4">{category}</text>
          {/* Connected badge */}
          <circle cx={x + 122} cy={y + 12} r="5" fill="#F0FDF4" stroke="#16A34A"
            strokeWidth="1.5" />
          <circle cx={x + 122} cy={y + 12} r="2.5" fill="#16A34A" />
        </g>
      ))}

      {/* Footer badge — pill centered at x=280, wide enough for text */}
      {/* text ~228px + dot+gap ~16px = ~244px total; pill=270px → x=280-135=145 */}
      <rect x="145" y="296" width="270" height="30" rx="15" fill="#0D2B45" fillOpacity="0.05"
        stroke="#0D2B45" strokeOpacity="0.1" strokeWidth="1" />
      <circle cx="163" cy="311" r="3.5" fill="#16A34A" />
      <text x="175" y="315" fill="#0D2B45" fontSize="11" fontFamily="Inter, sans-serif"
        fontWeight="600" fillOpacity="0.5">6 integrations connected · All syncing</text>
    </svg>
  )
}
