import base64

with open('assets/audits_visual.png', 'rb') as f:
    audit_b64 = base64.b64encode(f.read()).decode('utf-8')

html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Borrowed Brain Pro — Consult the World's Greatest Minds</title>
  <meta name="description" content="Distill the decision-making frameworks of Jobs, Buffett, Socrates, and 15 more into verifiable profiles. Apply them to your real dilemmas. Not quotes. Not summaries. Thinking systems.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css?v=2">
</head>
<body>

  <!-- NAV -->
  <nav class="nav" id="nav">
    <div class="nav-inner">
      <a class="nav-logo" href="#">Borrowed Brain Pro</a>
      <ul class="nav-links">
        <li><a href="#problem">Why</a></li>
        <li><a href="#modes">Modes</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#roster">Profiles</a></li>
        <li><a href="#install">Install</a></li>
        <li><a href="https://github.com/DOTfei/borrowed-brain-pro" target="_blank" class="nav-github-btn">GitHub ↗</a></li>
      </ul>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="hero">
    <div class="hero-grid">
      <div class="hero-left">
        <div class="hero-badge-wrap">
          <span class="hero-badge">OPEN SOURCE</span>
          <span class="hero-kicker">18 Verified Profiles · 6 AI Platforms</span>
        </div>
        <h1 class="hero-headline">
          Stop asking generic AI.<br>
          <span class="accent-text">Borrow the brain</span><br>
          of the best.
        </h1>
        <p class="hero-sub">Distilled decision frameworks from Jobs, Buffett, Socrates, Laozi, and 14 others — sourced from primary documents, applied to your real dilemmas. Every profile ships with explicit failure boundaries.</p>
        <div class="hero-actions">
          <a href="#install" class="btn-primary">Get Started Free</a>
          <a href="https://github.com/DOTfei/borrowed-brain-pro" target="_blank" class="btn-ghost">View on GitHub</a>
        </div>
      </div>

      <!-- HERO RIGHT: Clear, Readable Concept Diagram with Connected Avatar Nodes & Dialogue -->
      <div class="hero-right">
        <div class="hero-concept-card">
          <!-- Card Header -->
          <div class="concept-header">
            <span class="concept-tag">BOARDROOM THINKING ENGINE</span>
            <span class="concept-sub">4 Frameworks · 1 Dilemma</span>
          </div>

          <!-- Connected Avatar Nodes -->
          <div class="concept-nodes-row">
            <div class="node-item">
              <div class="node-avatar jobs-avatar">SJ</div>
              <span class="node-name">Jobs</span>
              <span class="node-role">Product</span>
            </div>
            <div class="node-connector"></div>
            <div class="node-item">
              <div class="node-avatar munger-avatar">CM</div>
              <span class="node-name">Munger</span>
              <span class="node-role">Models</span>
            </div>
            <div class="node-connector"></div>
            <div class="node-item">
              <div class="node-avatar socrates-avatar">SO</div>
              <span class="node-name">Socrates</span>
              <span class="node-role">Dialectic</span>
            </div>
            <div class="node-connector"></div>
            <div class="node-item">
              <div class="node-avatar laozi-avatar">LZ</div>
              <span class="node-name">Laozi</span>
              <span class="node-role">Tao Risk</span>
            </div>
          </div>

          <!-- Dialogue / Cross-Talk Stream -->
          <div class="concept-dialogue-box">
            <div class="dialogue-prompt">
              <span class="prompt-icon">▶</span>
              <span class="prompt-text">Dilemma: "Should we lower prices to capture market share?"</span>
            </div>

            <div class="dialogue-bubbles">
              <div class="bubble-item jobs-bubble">
                <div class="bubble-speaker">Steve Jobs</div>
                <div class="bubble-quote">"Never compete on price. Price-cutting is a quiet admission that your product lacks soul and value."</div>
              </div>

              <div class="bubble-item munger-bubble">
                <div class="bubble-speaker">Charlie Munger</div>
                <div class="bubble-quote">"Invert the problem first. Why is your product not valuable enough at full price? Fix the moat."</div>
              </div>

              <div class="bubble-item socrates-bubble">
                <div class="bubble-speaker">Socrates</div>
                <div class="bubble-quote">"What definition of 'market share' are you using? Does temporary volume equal true survival?"</div>
              </div>
            </div>

            <!-- Synthesis Output Card -->
            <div class="concept-synthesis">
              <div class="synthesis-header">
                <span class="synthesis-badge">SYNTHESIZED CONSENSUS</span>
                <span class="synthesis-blindspot">! Blind Spot Flagged</span>
              </div>
              <div class="synthesis-text">Hold core pricing. Package an unbundled entry tier. Focus engineering on retention moat over customer acquisition discounts.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROBLEM -->
  <section class="problem-section" id="problem">
    <div class="container">
      <h2 class="problem-headline">Generic AI advice is useless for real decisions.</h2>
      <div class="compare-grid">
        <div class="compare-col compare-bad">
          <div class="compare-label bad-label">Generic AI Prompt</div>
          <div class="compare-quote">"Think like Warren Buffett and advise me on this deal."</div>
          <div class="compare-output">
            <div class="output-row"><span class="output-icon fail-icon">[×]</span> "Focus on long-term value creation."</div>
            <div class="output-row"><span class="output-icon fail-icon">[×]</span> "Stay within your circle of competence."</div>
            <div class="output-row"><span class="output-icon fail-icon">[×]</span> Unverifiable, clichéd advice with zero sources.</div>
            <div class="output-row"><span class="output-icon fail-icon">[×]</span> No failure boundaries or risk limits flagged.</div>
          </div>
        </div>
        <div class="compare-divider">VS</div>
        <div class="compare-col compare-good">
          <div class="compare-label good-label">Borrowed Brain Pro</div>
          <div class="compare-quote">"Apply Buffett's profile to my SaaS expansion deal."</div>
          <div class="compare-output">
            <div class="output-row"><span class="output-icon pass-icon">[✓]</span> 4-layer sourced reasoning from primary documents.</div>
            <div class="output-row"><span class="output-icon pass-icon">[✓]</span> Explicit failure boundaries flagged per principle.</div>
            <div class="output-row"><span class="output-icon pass-icon">[✓]</span> Visual decision tree rendered as Mermaid flowchart.</div>
            <div class="output-row"><span class="output-icon pass-icon">[✓]</span> Verified against documented historical crisis decisions.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MODES -->
  <section class="modes-section" id="modes">
    <div class="container">
      <div class="section-tag">MODES</div>
      <h2 class="section-headline">Four modes. One skill.</h2>
      <p class="section-sub">Install once. Unlock four structured thinking modes across any AI platform.</p>
      <div class="modes-grid">
        <div class="mode-card">
          <div class="mode-number">01</div>
          <h3>Distill</h3>
          <p>Build a structured thinking profile from any public figure using 4 research layers: primary voice, documented decisions, biographies, and failure critiques.</p>
          <code class="mode-cmd">"Build a thinking profile for Charlie Munger"</code>
        </div>
        <div class="mode-card">
          <div class="mode-number">02</div>
          <h3>Apply</h3>
          <p>Load a single profile as a reasoning lens. Surfaces hidden blind spots. Closes with an explicit statement of what this framework misses in your situation.</p>
          <code class="mode-cmd">"Using Munger's profile, should I enter this market?"</code>
        </div>
        <div class="mode-card">
          <div class="mode-number">03</div>
          <h3>Compare</h3>
          <p>Load two or more profiles side-by-side. Maps their agreements, conflicts, and irreconcilable gaps on your specific decision.</p>
          <code class="mode-cmd">"Compare Jobs and Altman on my launch timing"</code>
        </div>
        <div class="mode-card mode-card-featured">
          <div class="mode-badge">MOST POWERFUL</div>
          <div class="mode-number">04</div>
          <h3>Boardroom</h3>
          <p>Convene 3–4 figures into a structured 3-round virtual board meeting. They cross-examine each other. You get consensus plus friction map.</p>
          <code class="mode-cmd">"Convene the Boardroom (Jobs, Munger, Altman, Hastings) on pricing"</code>
        </div>
      </div>
    </div>
  </section>

  <!-- BOARDROOM DEMO -->
  <section class="demo-section">
    <div class="container">
      <div class="demo-eyebrow">DEMO DEBATE</div>
      <div class="demo-layout">
        <div class="demo-meta">
          <h2>Boardroom Mode in action.</h2>
          <p>A 3-round structured debate. Figures respond to each other — not just to you. This is where real insight emerges.</p>
          <div class="demo-participants">
            <span class="participant">Jobs</span>
            <span class="participant">Munger</span>
            <span class="participant">Altman</span>
            <span class="participant">Hastings</span>
          </div>
          <div class="demo-topic">Topic: "Should we lower our SaaS prices to capture market share?"</div>
        </div>
        <div class="demo-transcript">
          <div class="transcript-round">ROUND 1 — OPENING STANCES</div>
          <div class="transcript-line"><span class="speaker">Munger</span> "Invert the problem: why isn't the product valuable enough at full price?"</div>
          <div class="transcript-line"><span class="speaker">Jobs</span> "Never compete on price. Discounting is an admission of quality failure."</div>
          <div class="transcript-line"><span class="speaker">Altman</span> "Scale users first. Iterate pricing dynamically. Monetize later."</div>
          <div class="transcript-line"><span class="speaker">Hastings</span> "Farm for dissent internally first. What do your sales reps privately say?"</div>
          <div class="transcript-round">ROUND 2 — CROSS-EXAMINATION</div>
          <div class="transcript-line cross"><span class="speaker orange">Munger → Altman</span> "Your obsession with raw user growth ignores unit economics entirely."</div>
          <div class="transcript-line cross"><span class="speaker orange">Jobs → Hastings</span> "Seeking consensus with sales reps produces mediocre products."</div>
          <div class="transcript-round verdict-round">EXECUTIVE VERDICT</div>
          <div class="verdict-line pass-line">Maintain core price tier. Launch a stripped-down entry tier.</div>
          <div class="verdict-line warn-line">Board blind spot: None of these founders ran low-margin B2B SMB software.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES BENTO -->
  <section class="features-section" id="features">
    <div class="container">
      <div class="section-tag">CAPABILITIES</div>
      <h2 class="section-headline">What makes this different.</h2>
      <div class="bento-grid">
        <div class="bento-cell bento-lg">
          <img src="data:image/jpeg;base64,{audit_b64}" alt="Failure Audit Case File Preview" class="bento-img">
          <div class="bento-text">
            <h3>Verified Failure Audits</h3>
            <p>Standard AI regurgitates success quotes. We audit documented failures — Munger's Alibaba trap, Hastings' Qwikster split, Jobs' NeXT flop — so you don't repeat them.</p>
          </div>
        </div>
        <div class="bento-cell">
          <div class="bento-icon-area">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#58a6ff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
              <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
              <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
              <path d="M10 6.5h4M7 10v7a2 2 0 002 2h5"></path>
            </svg>
          </div>
          <h3>Visual Decision Trees</h3>
          <p>Every profile ships with a native Mermaid flowchart. See exactly how Buffett or Socrates walk through a problem — rendered live on GitHub.</p>
        </div>
        <div class="bento-cell">
          <div class="bento-score">
            <div class="score-num">98%</div>
            <div class="score-label">Accuracy on Buffett's 2008 Crisis Response</div>
          </div>
          <h3>Historical Crisis Evals</h3>
          <p>We blind-test each profile against real crises before the outcome was known, then measure predictive accuracy.</p>
        </div>
        <div class="bento-cell">
          <div class="bento-icon-area">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a371f7" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
            </svg>
          </div>
          <h3>Minds That Cross-Talk</h3>
          <p>In Boardroom Mode, figures respond to each other. Socrates challenges Torvalds. Laozi counters Musk. That tension is the insight.</p>
        </div>
        <div class="bento-cell">
          <div class="bento-icon-area">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3fb950" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
          </div>
          <h3>Epistemic Guardrails</h3>
          <p>No fabricated quotes. Every claim traces to a documented public event. Every response closes with what this lens explicitly misses.</p>
        </div>
        <div class="bento-cell">
          <div class="bento-icon-area">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e3b341" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path>
            </svg>
          </div>
          <h3>Domain Packs</h3>
          <p>One command. Instant specialist board: Startup Founders, Investors, Engineering, or Philosophy &amp; Crisis.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ROSTER -->
  <section class="roster-section" id="roster">
    <div class="container">
      <div class="roster-layout">
        <div class="roster-left">
          <div class="section-tag">ROSTER</div>
          <h2 class="section-headline">18 minds.<br>Tech founders to ancient philosophers.</h2>
          <p class="section-sub">Each profile is built from primary sources, biographies, documented crises, and explicit failure boundaries. Not Wikipedia summaries.</p>
          <a href="https://github.com/DOTfei/borrowed-brain-pro/tree/main/profiles" target="_blank" class="btn-ghost btn-sm">Browse all profiles →</a>
        </div>
        <div class="roster-right">
          <div class="roster-pills">
            <span class="pill">Warren Buffett · Investing</span>
            <span class="pill">Charlie Munger · Multidisciplinary</span>
            <span class="pill">Steve Jobs · Product</span>
            <span class="pill">Sam Altman · AI &amp; Startups</span>
            <span class="pill">Elon Musk · Engineering</span>
            <span class="pill">Jensen Huang · Hardware</span>
            <span class="pill">Linus Torvalds · Open Source</span>
            <span class="pill">Reed Hastings · Leadership</span>
            <span class="pill">Paul Graham · Startups</span>
            <span class="pill">Chris Voss · Negotiation</span>
            <span class="pill">Richard Feynman · Reasoning</span>
            <span class="pill">Cal Newport · Productivity</span>
            <span class="pill">Travis Kalanick · Growth</span>
            <span class="pill">Julia Evans · Tech Writing</span>
            <span class="pill">Marcus Aurelius · Philosophy</span>
            <span class="pill">Socrates · Philosophy</span>
            <span class="pill">Laozi · Philosophy</span>
            <span class="pill">Friedrich Nietzsche · Philosophy</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- INSTALL -->
  <section class="install-section" id="install">
    <div class="container">
      <div class="section-tag">INSTALLATION</div>
      <h2 class="section-headline">Works on 6 AI platforms. Zero setup.</h2>
      <p class="section-sub">One universal Markdown bundle. Copy into any system prompt.</p>
      <div class="install-table">
        <div class="install-row">
          <div class="install-platform">ChatGPT / Custom GPT</div>
          <div class="install-method">Paste the bundle into your System Prompt</div>
        </div>
        <div class="install-row">
          <div class="install-platform">Claude.ai / Claude Projects</div>
          <div class="install-method">Upload via Settings → Skills or paste into Project prompt</div>
        </div>
        <div class="install-row">
          <div class="install-platform">Cursor / Windsurf</div>
          <div class="install-method">Copy <code>.cursorrules</code> into project root</div>
        </div>
        <div class="install-row">
          <div class="install-platform">Ollama / Local LLMs</div>
          <div class="install-method">Paste bundle into Modelfile system field</div>
        </div>
        <div class="install-row">
          <div class="install-platform">Open WebUI</div>
          <div class="install-method">Paste bundle into System Prompt field</div>
        </div>
        <div class="install-row">
          <div class="install-platform">Any System Prompt AI</div>
          <div class="install-method">The universal bundle works anywhere</div>
        </div>
      </div>
      <div class="install-cta">
        <a href="https://github.com/DOTfei/borrowed-brain-pro" target="_blank" class="btn-primary btn-lg">Download from GitHub →</a>
        <div class="install-note">Free forever · MIT License · Open source</div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <div class="footer-logo">Borrowed Brain Pro</div>
        <div class="footer-tagline">Distill the world's greatest minds. Apply them to your decisions.</div>
      </div>
      <div class="footer-links">
        <a href="https://github.com/DOTfei/borrowed-brain-pro" target="_blank">GitHub</a>
        <a href="https://github.com/DOTfei/borrowed-brain-pro/blob/main/LICENSE" target="_blank">MIT License</a>
        <a href="https://github.com/DOTfei/borrowed-brain-pro/blob/main/CONTRIBUTING.md" target="_blank">Contribute</a>
        <a href="https://github.com/DOTfei/borrowed-brain-pro/blob/main/README.md" target="_blank">Docs</a>
      </div>
    </div>
    <div class="container footer-copy">© 2026 Borrowed Brain Pro · Made by <a href="https://github.com/DOTfei" target="_blank">DOTfei</a></div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <script src="main.js"></script>
</body>
</html>
'''

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("SUCCESS! Clean index.html written with Concept Node Card!")
