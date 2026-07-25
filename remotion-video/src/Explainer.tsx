import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Explainer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Total 360 frames (12 seconds)
  // Scene 1: 0 - 120 (Big Funnel & Falling Pills)
  // Scene 2: 120 - 240 (Laser Scanning Decision Lens)
  // Scene 3: 240 - 360 (Shockwave Clash & Big Outro)

  const opacity1 = interpolate(frame, [0, 15, 105, 120], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity2 = interpolate(frame, [120, 135, 225, 240], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity3 = interpolate(frame, [240, 255, 345, 360], [0, 1, 1, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Big Falling Pills (No Emojis, Massive Fonts)
  const names = [
    { name: 'STEVE JOBS', color: '#38bdf8', delay: 0, x: -160 },
    { name: 'WARREN BUFFETT', color: '#4ade80', delay: 8, x: -50 },
    { name: 'CHARLIE MUNGER', color: '#f59e0b', delay: 16, x: 60 },
    { name: 'SAM ALTMAN', color: '#a78bfa', delay: 24, x: 170 },
  ];

  // Snappy Spring Physics
  const cardSpring = spring({ frame: frame - 45, fps, config: { damping: 8, mass: 0.6 } });
  const vsSpring = spring({ frame: frame - 250, fps, config: { damping: 9, mass: 0.5 } });

  // Laser scanner animation Y position
  const laserY = interpolate(frame % 90, [0, 90], [0, 240]);

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#05070d',
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
      {/* Dynamic Ambient Glow Pulse */}
      <div
        style={{
          position: 'absolute',
          width: '900px',
          height: '900px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* ================= SCENE 1: MASSIVE FUNNEL & DISTILL ENGINE ================= */}
      {frame >= 0 && frame < 120 && (
        <div style={{ opacity: opacity1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', transform: 'scale(1.15)' }}>
          <div style={{ fontSize: '32px', fontWeight: 900, color: '#a78bfa', letterSpacing: '4px', marginBottom: '20px', textTransform: 'uppercase', textShadow: '0 0 20px rgba(167, 139, 250, 0.6)' }}>
            1. DISTILL ENGINE
          </div>

          <div style={{ position: 'relative', width: '900px', height: '440px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            {/* Huge Falling Name Pills */}
            <div style={{ position: 'absolute', top: '0px', width: '650px', height: '160px', overflow: 'hidden' }}>
              {names.map((item, idx) => {
                const dropY = interpolate(frame - item.delay, [0, 25], [-60, 110], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
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
                      padding: '12px 28px',
                      borderRadius: '30px',
                      fontWeight: 900,
                      fontSize: '20px',
                      boxShadow: `0 0 30px ${item.color}bb`,
                      letterSpacing: '1px',
                    }}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>

            {/* Giant SVG Funnel Graphic */}
            <svg width="600" height="220" viewBox="0 0 600 220" style={{ marginTop: '100px' }}>
              <defs>
                <linearGradient id="funnelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Glowing Outer Rim */}
              <polygon points="30,10 570,10 350,180 250,180" fill="url(#funnelGrad)" stroke="#a78bfa" strokeWidth="4" filter="url(#glow)" />
              {/* Funnel Spout */}
              <rect x="255" y="180" width="90" height="35" fill="#0ea5e9" rx="6" />
            </svg>

            {/* Big Pop-out Profile Card */}
            {frame >= 45 && (
              <div
                style={{
                  marginTop: '12px',
                  transform: `scale(${cardSpring})`,
                  backgroundColor: '#0f172a',
                  border: '3px solid #38bdf8',
                  borderRadius: '16px',
                  padding: '18px 36px',
                  boxShadow: '0 0 45px rgba(56, 189, 248, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div style={{ fontWeight: 900, fontSize: '24px', color: '#ffffff', letterSpacing: '1px' }}>
                  charlie-munger.md
                </div>
                <div style={{ fontSize: '14px', color: '#090d16', backgroundColor: '#38bdf8', padding: '6px 14px', borderRadius: '6px', fontWeight: 900 }}>
                  STRUCTURED PROFILE
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ================= SCENE 2: LASER SCANNING DECISION LENS ================= */}
      {frame >= 120 && frame < 240 && (
        <div style={{ opacity: opacity2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', transform: 'scale(1.1)' }}>
          <div style={{ fontSize: '32px', fontWeight: 900, color: '#38bdf8', letterSpacing: '4px', marginBottom: '28px', textTransform: 'uppercase', textShadow: '0 0 20px rgba(56, 189, 248, 0.6)' }}>
            2. DECISION ENGINE
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            {/* Massive Decision Card */}
            <div
              style={{
                width: '420px',
                height: '260px',
                backgroundColor: '#1e293b',
                border: '2px solid #334155',
                borderRadius: '20px',
                padding: '32px',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
              }}
            >
              {/* Laser Scanning Beam */}
              <div
                style={{
                  position: 'absolute',
                  top: `${laserY}px`,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  backgroundColor: '#38bdf8',
                  boxShadow: '0 0 20px 4px #38bdf8',
                }}
              />

              <div style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 900, letterSpacing: '2px', marginBottom: '16px' }}>YOUR DECISION</div>
              <div style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', lineHeight: 1.3 }}>
                "Ship MVP today or delay for polishing?"
              </div>
            </div>

            <div style={{ fontSize: '48px', color: '#38bdf8', fontWeight: 900 }}>➔</div>

            {/* Massive Lens Result Card */}
            <div
              style={{
                width: '460px',
                height: '260px',
                backgroundColor: '#0f172a',
                border: '3px solid #4ade80',
                borderRadius: '20px',
                padding: '32px',
                textAlign: 'left',
                boxShadow: '0 0 45px rgba(74, 222, 128, 0.3)',
              }}
            >
              <div style={{ fontSize: '15px', color: '#4ade80', fontWeight: 900, letterSpacing: '2px', marginBottom: '12px' }}>STEVE JOBS LENS</div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
                Lean Toward Delay (Uncompromising Quality)
              </div>
              <div style={{ fontSize: '15px', color: '#f87171', borderTop: '2px solid #334155', paddingTop: '14px', fontWeight: 700 }}>
                BLIND SPOT FLAGGED: Requires brand leverage. Early SaaS needs rapid validation.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= SCENE 3: HIGH IMPACT CLASH & OUTRO ================= */}
      {frame >= 240 && (
        <div style={{ opacity: opacity3, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', transform: 'scale(1.1)' }}>
          <div style={{ fontSize: '32px', fontWeight: 900, color: '#f43f5e', letterSpacing: '4px', marginBottom: '28px', textTransform: 'uppercase', textShadow: '0 0 20px rgba(244, 63, 94, 0.6)' }}>
            3. COMPARE ENGINE
          </div>

          <div style={{ display: 'flex', gap: '30px', marginBottom: '40px', alignItems: 'center' }}>
            {/* Big Card A */}
            <div style={{ width: '360px', padding: '28px', backgroundColor: '#1e1b4b', border: '3px solid #818cf8', borderRadius: '18px', textAlign: 'left', boxShadow: '0 0 35px rgba(129, 140, 248, 0.3)' }}>
              <div style={{ fontWeight: 900, color: '#818cf8', fontSize: '24px', marginBottom: '8px' }}>STEVE JOBS</div>
              <div style={{ fontSize: '18px', color: '#ffffff', fontWeight: 700 }}>Lean Toward Delay</div>
            </div>

            <div style={{ fontSize: '36px', fontWeight: 900, color: '#f43f5e', transform: `scale(${vsSpring})`, textShadow: '0 0 30px #f43f5e' }}>
              VS
            </div>

            {/* Big Card B */}
            <div style={{ width: '360px', padding: '28px', backgroundColor: '#0c4a6e', border: '3px solid #38bdf8', borderRadius: '18px', textAlign: 'left', boxShadow: '0 0 35px rgba(56, 189, 248, 0.3)' }}>
              <div style={{ fontWeight: 900, color: '#38bdf8', fontSize: '24px', marginBottom: '8px' }}>SAM ALTMAN</div>
              <div style={{ fontSize: '18px', color: '#ffffff', fontWeight: 700 }}>Lean Toward Ship</div>
            </div>
          </div>

          <div
            style={{
              fontSize: '44px',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #c084fc 0%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '2px',
            }}
          >
            BORROWED BRAIN PRO
          </div>
          <div style={{ fontSize: '20px', color: '#cbd5e1', marginTop: '10px', fontWeight: 700 }}>
            Distill Any Mind. Decide With Conviction.
          </div>
        </div>
      )}
    </div>
  );
};
