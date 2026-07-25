import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Explainer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 360 frames total (12 seconds at 30 fps)
  // Scene 1: 0 - 120 (Funnel & Distill Visual)
  // Scene 2: 120 - 240 (Single Lens & Decision Solving)
  // Scene 3: 240 - 360 (Multi-Lens Contrast & Outro)

  const opacity1 = interpolate(frame, [0, 15, 105, 120], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity2 = interpolate(frame, [120, 135, 225, 240], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity3 = interpolate(frame, [240, 255, 345, 360], [0, 1, 1, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Names falling into funnel
  const names = [
    { name: 'Steve Jobs', color: '#38bdf8', delay: 0 },
    { name: 'Warren Buffett', color: '#4ade80', delay: 10 },
    { name: 'Charlie Munger', color: '#f59e0b', delay: 20 },
    { name: 'Sam Altman', color: '#a78bfa', delay: 30 },
    { name: 'Paul Graham', color: '#ec4899', delay: 40 },
  ];

  // Profile Card emergence spring
  const profileCardSpring = spring({ frame: frame - 55, fps, config: { damping: 10 } });

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#090d16',
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif',
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
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107, 79, 187, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* ================= SCENE 1: THE FUNNEL & DISTILL ENGINE ================= */}
      {frame >= 0 && frame < 120 && (
        <div style={{ opacity: opacity1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#a78bfa', letterSpacing: '2px', marginBottom: '20px', textTransform: 'uppercase' }}>
            1. Distill Engine — 漏斗蒸馏引擎
          </div>

          <div style={{ position: 'relative', width: '800px', height: '440px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            {/* Falling Name Pills */}
            <div style={{ position: 'absolute', top: '0px', width: '450px', height: '140px', overflow: 'hidden' }}>
              {names.map((item, idx) => {
                const dropY = interpolate(frame - item.delay, [0, 30], [-40, 110], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
                const pillOpacity = interpolate(frame - item.delay, [0, 5, 25, 32], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
                return (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      left: `${20 + idx * 75}px`,
                      top: `${dropY}px`,
                      opacity: pillOpacity,
                      backgroundColor: item.color,
                      color: '#0f172a',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontWeight: 800,
                      fontSize: '15px',
                      boxShadow: `0 0 15px ${item.color}88`,
                    }}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>

            {/* The Visual Funnel Graphic */}
            <svg width="400" height="180" viewBox="0 0 400 180" style={{ marginTop: '100px' }}>
              <defs>
                <linearGradient id="funnelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6b4fbb" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {/* Funnel Body */}
              <polygon points="20,10 380,10 240,150 160,150" fill="url(#funnelGrad)" stroke="#a78bfa" strokeWidth="3" />
              {/* Funnel Spout */}
              <rect x="170" y="150" width="60" height="25" fill="#3b82f6" rx="4" />
            </svg>

            {/* Outgoing Distilled Profile Card */}
            {frame >= 50 && (
              <div
                style={{
                  marginTop: '10px',
                  transform: `scale(${profileCardSpring})`,
                  backgroundColor: '#0f172a',
                  border: '2px solid #38bdf8',
                  borderRadius: '14px',
                  padding: '16px 28px',
                  boxShadow: '0 0 30px rgba(56, 189, 248, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div style={{ fontSize: '32px' }}>📄</div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 800, fontSize: '18px', color: '#ffffff' }}>charlie-munger.md</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>Principles · Failure Boundaries · Sources</div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ================= SCENE 2: THE DECISION LENS ================= */}
      {frame >= 120 && frame < 240 && (
        <div style={{ opacity: opacity2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#38bdf8', letterSpacing: '2px', marginBottom: '24px', textTransform: 'uppercase' }}>
            2. Decision Engine — 单视角透视决策
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            {/* User Decision Card */}
            <div
              style={{
                width: '320px',
                height: '240px',
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'left',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 700, marginBottom: '12px' }}>YOUR DECISION</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc', lineHeight: 1.4 }}>
                "Should we launch our MVP now with minor bugs or delay?"
              </div>
            </div>

            {/* Glowing Arrow + Lens */}
            <div style={{ fontSize: '36px', color: '#38bdf8' }}>➔</div>

            {/* Profile Lens Output Card */}
            <div
              style={{
                width: '380px',
                height: '240px',
                backgroundColor: '#0f172a',
                border: '2px solid #4ade80',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'left',
                boxShadow: '0 0 30px rgba(74, 222, 128, 0.25)',
              }}
            >
              <div style={{ fontSize: '14px', color: '#4ade80', fontWeight: 800, marginBottom: '8px' }}>🔍 STEVE JOBS LENS</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#f1f5f9', marginBottom: '12px' }}>
                Lean Toward Delay: "Is the core experience Apple-grade?"
              </div>
              <div style={{ fontSize: '13px', color: '#f87171', borderTop: '1px solid #334155', paddingTop: '10px' }}>
                ⚠️ <b>Blind Spot</b>: Jobs had captive press & pre-launch demand. Early SaaS MVPs need idea validation fast.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= SCENE 3: MULTI-LENS CONTRAST & OUTRO ================= */}
      {frame >= 240 && (
        <div style={{ opacity: opacity3, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{ fontSize: '22px', fontWeight: 800, color: '#f43f5e', letterSpacing: '2px', marginBottom: '20px', textTransform: 'uppercase' }}>
            3. Compare Mode — 碰撞不同大咖视角
          </div>

          <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
            {/* Lens A */}
            <div style={{ width: '280px', padding: '20px', backgroundColor: '#1e1b4b', border: '2px solid #818cf8', borderRadius: '14px', textAlign: 'left' }}>
              <div style={{ fontWeight: 800, color: '#818cf8', fontSize: '16px', marginBottom: '6px' }}>Steve Jobs</div>
              <div style={{ fontSize: '14px', color: '#e0e7ff' }}>Lean Toward Delay</div>
              <div style={{ fontSize: '12px', color: '#a5b4fc', marginTop: '6px' }}>Focus on perfection & control</div>
            </div>

            <div style={{ fontSize: '28px', fontWeight: 900, color: '#f43f5e', alignSelf: 'center' }}>VS</div>

            {/* Lens B */}
            <div style={{ width: '280px', padding: '20px', backgroundColor: '#1e293b', border: '2px solid #38bdf8', borderRadius: '14px', textAlign: 'left' }}>
              <div style={{ fontWeight: 800, color: '#38bdf8', fontSize: '16px', marginBottom: '6px' }}>Sam Altman</div>
              <div style={{ fontSize: '14px', color: '#e0f2fe' }}>Lean Toward Ship</div>
              <div style={{ fontSize: '12px', color: '#7dd3fc', marginTop: '6px' }}>Iterative deployment & speed</div>
            </div>
          </div>

          {/* Outro CTA */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Borrowed Brain Pro — 浓缩任何大脑 · 启发每个决策
          </div>
        </div>
      )}
    </div>
  );
};
