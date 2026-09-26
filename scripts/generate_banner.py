banner_svg = '''<svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Borrowed Brain Pro Banner">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080a0f"/>
      <stop offset="50%" stop-color="#0e121a"/>
      <stop offset="100%" stop-color="#080a0f"/>
    </linearGradient>

    <!-- Glow Orbs -->
    <radialGradient id="blue-glow" cx="20%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#58a6ff" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#58a6ff" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="purple-glow" cx="80%" cy="70%" r="50%">
      <stop offset="0%" stop-color="#a371f7" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#a371f7" stop-opacity="0"/>
    </radialGradient>

    <!-- Card Background Gradient -->
    <linearGradient id="card-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#161b22" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0d1117" stop-opacity="0.9"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="420" rx="16" fill="url(#bg-grad)"/>
  <rect width="1200" height="420" fill="url(#blue-glow)"/>
  <rect width="1200" height="420" fill="url(#purple-glow)"/>
  <rect width="1200" height="420" rx="16" fill="none" stroke="#30363d" stroke-width="1.5" opacity="0.6"/>

  <!-- Decorative Grid Lines -->
  <g stroke="#21262d" stroke-width="1" opacity="0.4">
    <line x1="0" y1="60" x2="1200" y2="60"/>
    <line x1="0" y1="360" x2="1200" y2="360"/>
    <line x1="640" y1="60" x2="640" y2="360"/>
  </g>

  <!-- LEFT COLUMN: Value Proposition & Branding -->
  <rect x="60" y="85" width="230" height="28" rx="14" fill="rgba(88, 166, 255, 0.1)" stroke="rgba(88, 166, 255, 0.3)" stroke-width="1"/>
  <text x="75" y="104" font-family="'Geist Mono', Consolas, monospace" font-size="11" font-weight="600" fill="#58a6ff" letter-spacing="1.5">DECISION INTELLIGENCE SYSTEM</text>

  <!-- Main Title -->
  <text x="60" y="158" font-family="'Geist', -apple-system, sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="-1.5">Borrowed Brain Pro</text>

  <!-- Subtitle / Core Stance -->
  <text x="60" y="198" font-family="'Geist', -apple-system, sans-serif" font-size="20" font-weight="600" fill="#58a6ff">Borrow the thinking, not the personality.</text>

  <!-- Feature Description -->
  <text x="60" y="232" font-family="'Geist', -apple-system, sans-serif" font-size="14" fill="#8b949e">Evidence-backed decision lenses, failure audits &amp; reviewable experiments.</text>
  <text x="60" y="254" font-family="'Geist', -apple-system, sans-serif" font-size="14" fill="#6e7681">Not celebrity roleplay — structured intelligence for high-stakes decisions.</text>

  <!-- Platform Badges -->
  <g transform="translate(60, 290)">
    <rect x="0" y="0" width="130" height="28" rx="6" fill="#161b22" stroke="#30363d" stroke-width="1"/>
    <text x="14" y="18" font-family="'Geist Mono', monospace" font-size="11" fill="#c9d1d9">Claude / Codex</text>

    <rect x="140" y="0" width="130" height="28" rx="6" fill="#161b22" stroke="#30363d" stroke-width="1"/>
    <text x="154" y="18" font-family="'Geist Mono', monospace" font-size="11" fill="#c9d1d9">Cursor / Windsurf</text>

    <rect x="280" y="0" width="95" height="28" rx="6" fill="#161b22" stroke="#30363d" stroke-width="1"/>
    <text x="294" y="18" font-family="'Geist Mono', monospace" font-size="11" fill="#c9d1d9">ChatGPT</text>

    <rect x="385" y="0" width="85" height="28" rx="6" fill="#161b22" stroke="#30363d" stroke-width="1"/>
    <text x="399" y="18" font-family="'Geist Mono', monospace" font-size="11" fill="#c9d1d9">Ollama</text>
  </g>

  <!-- RIGHT COLUMN: Decision Engine Flow -->
  <g transform="translate(660, 85)">
    <!-- Card Container -->
    <rect x="0" y="0" width="480" height="245" rx="12" fill="url(#card-bg)" stroke="#30363d" stroke-width="1.5"/>

    <!-- Header bar -->
    <rect x="0" y="0" width="480" height="36" rx="12" fill="#21262d" opacity="0.5"/>
    <circle cx="20" cy="18" r="5" fill="#f85149"/>
    <circle cx="36" cy="18" r="5" fill="#e3b341"/>
    <circle cx="52" cy="18" r="5" fill="#3fb950"/>
    <text x="72" y="22" font-family="'Geist Mono', monospace" font-size="11" fill="#8b949e">decision-pipeline.md</text>

    <!-- Step 1 -->
    <rect x="20" y="55" width="205" height="52" rx="8" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
    <text x="32" y="74" font-family="'Geist Mono', monospace" font-size="10" font-weight="600" fill="#58a6ff">[01] REAL DILEMMA</text>
    <text x="32" y="93" font-family="'Geist', sans-serif" font-size="11" fill="#8b949e">Extract Unstated Assumptions</text>

    <!-- Arrow 1 -->
    <path d="M 225 81 L 245 81" stroke="#58a6ff" stroke-width="1.5"/>
    <polygon points="245,78 252,81 245,84" fill="#58a6ff"/>

    <!-- Step 2 -->
    <rect x="252" y="55" width="208" height="52" rx="8" fill="#0d1117" stroke="rgba(88, 166, 255, 0.4)" stroke-width="1"/>
    <text x="264" y="74" font-family="'Geist Mono', monospace" font-size="10" font-weight="600" fill="#3fb950">[02] THINKING LENSES</text>
    <text x="264" y="93" font-family="'Geist', sans-serif" font-size="11" fill="#c9d1d9">Jobs · Munger · Graham · Musk</text>

    <!-- Arrow Down -->
    <path d="M 356 107 L 356 127" stroke="#a371f7" stroke-width="1.5"/>
    <polygon points="353,127 356,134 359,127" fill="#a371f7"/>

    <!-- Step 3: Failure Audits & SUT -->
    <rect x="20" y="134" width="440" height="92" rx="8" fill="#0d1117" stroke="rgba(163, 113, 247, 0.4)" stroke-width="1"/>
    <text x="32" y="156" font-family="'Geist Mono', monospace" font-size="11" font-weight="700" fill="#a371f7">[03] FAILURE BOUNDARY &amp; CASE MIRROR</text>
    
    <text x="32" y="178" font-family="'Geist', sans-serif" font-size="11" fill="#e6edf3">Audit Mirror: <tspan fill="#8b949e">Jobs @ NeXT / Munger @ Alibaba / Musk @ Model 3</tspan></text>
    <text x="32" y="196" font-family="'Geist', sans-serif" font-size="11" fill="#e6edf3">Outcome: <tspan fill="#3fb950">Decision Contract + Smallest Useful Test</tspan></text>

    <rect x="335" y="180" width="112" height="24" rx="12" fill="rgba(63, 185, 80, 0.15)" stroke="rgba(63, 185, 80, 0.3)" stroke-width="1"/>
    <text x="345" y="196" font-family="'Geist Mono', monospace" font-size="10" font-weight="600" fill="#3fb950">DECISION READY</text>
  </g>
</svg>
'''

with open('assets/banner.svg', 'w', encoding='utf-8') as f:
    f.write(banner_svg)

with open('.github/assets/banner.svg', 'w', encoding='utf-8') as f:
    f.write(banner_svg)

print("NEW COHESIVE BANNER CREATED!")
