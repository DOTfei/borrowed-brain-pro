import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Explainer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 450 frames total (15 seconds at 30 fps)
  const opacity1 = interpolate(frame, [0, 15, 75, 90], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity2 = interpolate(frame, [90, 105, 165, 180], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity3 = interpolate(frame, [180, 195, 255, 270], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity4 = interpolate(frame, [270, 285, 345, 360], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity5 = interpolate(frame, [360, 375, 435, 450], [0, 1, 1, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Scene 1: Names falling into funnel
  const names = [
    { name: 'STEVE JOBS', color: '#38bdf8', delay: 0, x: -160 },
    { name: 'WARREN BUFFETT', color: '#4ade80', delay: 8, x: -50 },
    { name: 'CHARLIE MUNGER', color: '#f59e0b', delay: 16, x: 60 },
    { name: 'SAM ALTMAN', color: '#a78bfa', delay: 24, x: 170 },
  ];

  const cardSpring = spring({ frame: frame - 45, fps, config: { damping: 8, mass: 0.6 } });
  
  // Scene 2 springs for chat messages
  const msg1Spring = spring({ frame: frame - 100, fps, config: { damping: 10, mass: 0.5 } });
  const msg2Spring = spring({ frame: frame - 120, fps, config: { damping: 10, mass: 0.5 } });
  const msg3Spring = spring({ frame: frame - 140, fps, config: { damping: 10, mass: 0.5 } });

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#04060b',
        color: '#ffffff',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Radial Background Glow */}
      <div
        style={{
          position: 'absolute',
          width: '950px',
          height: '950px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(0, 0, 0, 0) 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* ================= SCENE 1: DISTILL ENGINE & FUNNEL ================= */}
      {frame >= 0 && frame < 90 && (
        <div style={{ opacity: opacity1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', transform: 'scale(1.15)' }}>
          <div style={{ fontSize: '32px', fontWeight: 900, color: '#a78bfa', letterSpacing: '4px', marginBottom: '16px', textTransform: 'uppercase' }}>
            1. DISTILL ENGINE
          </div>

          <div style={{ position: 'relative', width: '900px', height: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'absolute', top: '0px', width: '650px', height: '140px', overflow: 'hidden' }}>
              {names.map((item, idx) => {
                const dropY = interpolate(frame - item.delay, [0, 25], [-60, 95], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
                const pillOpacity = interpolate(frame - item.delay, [0, 5, 20, 28], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
                return (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      left: `${320 + item.x}px`,
                      top: `${dropY}px`,
                      opacity: pillOpacity,
                      backgroundColor: item.color,
                      color: '#05070d',
                      padding: '10px 24px',
                      borderRadius: '30px',
                      fontWeight: 900,
                      fontSize: '18px',
                      boxShadow: `0 0 25px ${item.color}bb`,
                    }}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>

            <svg width="560" height="200" viewBox="0 0 560 200" style={{ marginTop: '85px' }}>
              <defs>
                <linearGradient id="funnelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
                </linearGradient>
              </defs>
              <polygon points="30,10 530,10 330,165 230,165" fill="url(#funnelGrad)" stroke="#a78bfa" strokeWidth="4" />
              <rect x="235" y="165" width="90" height="30" fill="#0ea5e9" rx="5" />
            </svg>

            {frame >= 40 && (
              <div
                style={{
                  marginTop: '10px',
                  transform: `scale(${cardSpring})`,
                  backgroundColor: '#0f172a',
                  border: '3px solid #38bdf8',
                  borderRadius: '16px',
                  padding: '16px 36px',
                  boxShadow: '0 0 45px rgba(56, 189, 248, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div style={{ fontWeight: 900, fontSize: '24px', color: '#ffffff', letterSpacing: '1px' }}>
                  charlie-munger.md
                </div>
                <div style={{ fontSize: '14px', color: '#05070d', backgroundColor: '#38bdf8', padding: '6px 14px', borderRadius: '6px', fontWeight: 900 }}>
                  STRUCTURED PROFILE
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= SCENE 2: VIRTUAL BOARDROOM — LIVE INTERPOLATED DEBATE ================= */}
      {frame >= 90 && frame < 180 && (
        <div style={{ opacity: opacity2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', transform: 'scale(1.1)' }}>
          <div style={{ fontSize: '28px', fontWeight: 900, color: '#f43f5e', letterSpacing: '3px', marginBottom: '8px', textTransform: 'uppercase' }}>
            2. VIRTUAL BOARDROOM: LIVE INTERACTIVE DEBATE
          </div>
          <div style={{ fontSize: '15px', color: '#cbd5e1', fontWeight: 700, marginBottom: '20px' }}>
            Board members directly talk to each other & challenge each other's blind spots!
          </div>

          <div
            style={{
              width: '880px',
              backgroundColor: '#0f172a',
              border: '2px solid #f43f5e',
              borderRadius: '20px',
              padding: '24px 30px',
              textAlign: 'left',
              boxShadow: '0 0 50px rgba(244, 63, 94, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            {/* Chat Bubble 1: Munger -> Altman */}
            {frame >= 100 && (
              <div
                style={{
                  transform: `scale(${msg1Spring})`,
                  backgroundColor: '#1e1b4b',
                  borderLeft: '5px solid #f59e0b',
                  borderRadius: '10px',
                  padding: '12px 18px',
                }}
              >
                <div style={{ fontSize: '14px', color: '#f59e0b', fontWeight: 900 }}>
                  💬 Charlie Munger ➔ Sam Altman:
                </div>
                <div style={{ fontSize: '16px', color: '#ffffff', fontWeight: 700, marginTop: '4px' }}>
                  "Sam, your obsession with rapid growth ignores unit economics. Moving too fast here is a value trap."
                </div>
              </div>
            )}

            {/* Chat Bubble 2: Altman -> Jobs */}
            {frame >= 120 && (
              <div
                style={{
                  transform: `scale(${msg2Spring})`,
                  backgroundColor: '#0f2942',
                  borderLeft: '5px solid #a78bfa',
                  borderRadius: '10px',
                  padding: '12px 18px',
                  marginLeft: '40px',
                }}
              >
                <div style={{ fontSize: '14px', color: '#a78bfa', fontWeight: 900 }}>
                  💬 Sam Altman ➔ Steve Jobs:
                </div>
                <div style={{ fontSize: '16px', color: '#ffffff', fontWeight: 700, marginTop: '4px' }}>
                  "Steve, if we wait for 100% perfection like NeXT, we miss the AI market window. Iterative deployment is safety."
                </div>
              </div>
            )}

            {/* Chat Bubble 3: Jobs -> Munger & Altman */}
            {frame >= 140 && (
              <div
                style={{
                  transform: `scale(${msg3Spring})`,
                  backgroundColor: '#1c1917',
                  borderLeft: '5px solid #38bdf8',
                  borderRadius: '10px',
                  padding: '12px 18px',
                  marginLeft: '20px',
                }}
              >
                <div style={{ fontSize: '14px', color: '#38bdf8', fontWeight: 900 }}>
                  💬 Steve Jobs ➔ Charlie & Sam:
                </div>
                <div style={{ fontSize: '16px', color: '#ffffff', fontWeight: 700, marginTop: '4px' }}>
                  "Never compete on price. Discounting is admitting lack of quality. Focus on core essence, say NO to bloat."
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= SCENE 3: VERIFIED FAILURE AUDIT ================= */}
      {frame >= 180 && frame < 270 && (
        <div style={{ opacity: opacity3, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', transform: 'scale(1.1)' }}>
          <div style={{ fontSize: '30px', fontWeight: 900, color: '#f59e0b', letterSpacing: '4px', marginBottom: '20px', textTransform: 'uppercase' }}>
            3. VERIFIED FAILURE AUDITS
          </div>

          <div style={{ display: 'flex', gap: '24px' }}>
            <div style={{ width: '380px', padding: '24px', backgroundColor: '#1e1b4b', border: '2px solid #f59e0b', borderRadius: '16px', textAlign: 'left' }}>
              <div style={{ fontSize: '14px', color: '#f59e0b', fontWeight: 900, marginBottom: '6px' }}>MUNGER'S ALIBABA TRAP</div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>70% Stock Crash on $100M Bet</div>
              <div style={{ fontSize: '13px', color: '#cbd5e1' }}>Low valuation cannot save an eroding tech moat.</div>
            </div>

            <div style={{ width: '380px', padding: '24px', backgroundColor: '#0f172a', border: '2px solid #ef4444', borderRadius: '16px', textAlign: 'left' }}>
              <div style={{ fontSize: '14px', color: '#ef4444', fontWeight: 900, marginBottom: '6px' }}>HASTINGS' QWIKSTER FLOP</div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>800k Lost Users & 77% Drop</div>
              <div style={{ fontSize: '13px', color: '#cbd5e1' }}>Never force internal org friction onto user UX.</div>
            </div>
          </div>
        </div>
      )}

      {/* ================= SCENE 4: DOMAIN PACKS & ACCURACY EVALS ================= */}
      {frame >= 270 && frame < 360 && (
        <div style={{ opacity: opacity4, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', transform: 'scale(1.1)' }}>
          <div style={{ fontSize: '30px', fontWeight: 900, color: '#10b981', letterSpacing: '4px', marginBottom: '20px', textTransform: 'uppercase' }}>
            4. DOMAIN PACKS & ACCURACY EVALS
          </div>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <div style={{ backgroundColor: '#064e3b', border: '1px solid #10b981', padding: '14px 24px', borderRadius: '12px', fontWeight: 800, color: '#ecfdf5', fontSize: '16px' }}>
              STARTUP FOUNDERS PACK
            </div>
            <div style={{ backgroundColor: '#1e1b4b', border: '1px solid #818cf8', padding: '14px 24px', borderRadius: '12px', fontWeight: 800, color: '#e0e7ff', fontSize: '16px' }}>
              INVESTORS PACK
            </div>
            <div style={{ backgroundColor: '#0c4a6e', border: '1px solid #38bdf8', padding: '14px 24px', borderRadius: '12px', fontWeight: 800, color: '#e0f2fe', fontSize: '16px' }}>
              ENGINEERING PACK
            </div>
          </div>

          <div style={{ backgroundColor: '#0f172a', border: '2px solid #10b981', padding: '16px 36px', borderRadius: '30px', color: '#10b981', fontWeight: 900, fontSize: '20px' }}>
            98% ACCURACY MATCH ON HISTORICAL BLIND-TESTS
          </div>
        </div>
      )}

      {/* ================= SCENE 5: OUTRO & CALL TO ACTION ================= */}
      {frame >= 360 && (
        <div style={{ opacity: opacity5, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', transform: 'scale(1.15)' }}>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #c084fc 0%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '2px',
              marginBottom: '12px',
            }}
          >
            BORROWED BRAIN PRO
          </div>
          <div style={{ fontSize: '22px', color: '#cbd5e1', fontWeight: 700, marginBottom: '28px' }}>
            Distill Any Mind. Decide With Conviction.
          </div>
          <div style={{ backgroundColor: '#6366f1', color: '#ffffff', padding: '14px 36px', borderRadius: '30px', fontWeight: 900, fontSize: '20px', boxShadow: '0 0 35px rgba(99, 102, 241, 0.6)' }}>
            github.com/DOTfei/borrowed-brain-pro
          </div>
        </div>
      )}
    </div>
  );
};
