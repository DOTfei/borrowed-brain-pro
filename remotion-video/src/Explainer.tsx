import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Explainer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 360 frames (12 seconds)
  const opacity1 = interpolate(frame, [0, 15, 105, 120], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity2 = interpolate(frame, [120, 135, 225, 240], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity3 = interpolate(frame, [240, 255, 345, 360], [0, 1, 1, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Falling pills (Clean typography, no emojis)
  const names = [
    { name: 'Steve Jobs', color: '#38bdf8', delay: 0 },
    { name: 'Warren Buffett', color: '#4ade80', delay: 10 },
    { name: 'Charlie Munger', color: '#f59e0b', delay: 20 },
    { name: 'Sam Altman', color: '#a78bfa', delay: 30 },
    { name: 'Paul Graham', color: '#ec4899', delay: 40 },
  ];

  const profileCardSpring = spring({ frame: frame - 55, fps, config: { damping: 10 } });

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#070a11',
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
      {/* Subtle Background Glow */}
      <div
        style={{
          position: 'absolute',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(0, 0, 0, 0) 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* ================= SCENE 1: THE DISTILL FUNNEL ================= */}
      {frame >= 0 && frame < 120 && (
        <div style={{ opacity: opacity1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#818cf8', letterSpacing: '3px', marginBottom: '16px', textTransform: 'uppercase' }}>
            DISTILL ENGINE
          </div>

          <div style={{ position: 'relative', width: '800px', height: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            {/* Falling Name Pills */}
            <div style={{ position: 'absolute', top: '0px', width: '450px', height: '130px', overflow: 'hidden' }}>
              {names.map((item, idx) => {
                const dropY = interpolate(frame - item.delay, [0, 30], [-40, 100], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
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
                      color: '#090d16',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontWeight: 800,
                      fontSize: '14px',
                      boxShadow: `0 0 20px ${item.color}66`,
                    }}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>

            {/* Sleek SVG Funnel Graphic */}
            <svg width="380" height="160" viewBox="0 0 380 160" style={{ marginTop: '90px' }}>
              <defs>
                <linearGradient id="funnelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <polygon points="20,10 360,10 220,130 160,130" fill="url(#funnelGrad)" stroke="#818cf8" strokeWidth="2" />
              <rect x="165" y="130" width="50" height="20" fill="#0284c7" rx="3" />
            </svg>

            {/* Outgoing Distilled Profile Card (No Emojis) */}
            {frame >= 50 && (
              <div
                style={{
                  marginTop: '10px',
                  transform: `scale(${profileCardSpring})`,
                  backgroundColor: '#0f172a',
                  border: '1px solid #38bdf8',
                  borderRadius: '10px',
                  padding: '14px 24px',
                  boxShadow: '0 0 25px rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '16px', color: '#f8fafc', letterSpacing: '1px' }}>
                  charlie-munger.md
                </div>
                <div style={{ fontSize: '12px', color: '#38bdf8', backgroundColor: '#0284c733', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>
                  STRUCTURED PROFILE
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ================= SCENE 2: SINGLE LENS DECISION ================= */}
      {frame >= 120 && frame < 240 && (
        <div style={{ opacity: opacity2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#38bdf8', letterSpacing: '3px', marginBottom: '24px', textTransform: 'uppercase' }}>
            APPLY ENGINE
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {/* User Decision Card */}
            <div
              style={{
                width: '300px',
                height: '200px',
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'left',
              }}
            >
              <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 700, letterSpacing: '1px', marginBottom: '12px' }}>YOUR DECISION</div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', lineHeight: 1.4 }}>
                "Should we launch MVP today or delay for polishing?"
              </div>
            </div>

            <div style={{ fontSize: '28px', color: '#38bdf8', fontWeight: 900 }}>→</div>

            {/* Profile Lens Output Card (No Emojis) */}
            <div
              style={{
                width: '360px',
                height: '200px',
                backgroundColor: '#0f172a',
                border: '1px solid #4ade80',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'left',
                boxShadow: '0 0 25px rgba(74, 222, 128, 0.2)',
              }}
            >
              <div style={{ fontSize: '12px', color: '#4ade80', fontWeight: 800, letterSpacing: '1px', marginBottom: '8px' }}>STEVE JOBS LENS</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#f1f5f9', marginBottom: '14px' }}>
                Lean Toward Delay (Uncompromising Quality)
              </div>
              <div style={{ fontSize: '12px', color: '#f87171', borderTop: '1px solid #334155', paddingTop: '10px' }}>
                <b>BLIND SPOT FLAGGED:</b> Requires existing brand leverage. Early SaaS needs rapid validation.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= SCENE 3: MULTI-LENS CONTRAST & OUTRO ================= */}
      {frame >= 240 && (
        <div style={{ opacity: opacity3, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#f43f5e', letterSpacing: '3px', marginBottom: '20px', textTransform: 'uppercase' }}>
            COMPARE ENGINE
          </div>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '32px' }}>
            <div style={{ width: '260px', padding: '18px', backgroundColor: '#1e1b4b', border: '1px solid #818cf8', borderRadius: '12px', textAlign: 'left' }}>
              <div style={{ fontWeight: 800, color: '#818cf8', fontSize: '15px', marginBottom: '4px' }}>Steve Jobs</div>
              <div style={{ fontSize: '13px', color: '#e0e7ff' }}>Lean Toward Delay</div>
            </div>

            <div style={{ fontSize: '20px', fontWeight: 900, color: '#f43f5e', alignSelf: 'center' }}>VS</div>

            <div style={{ width: '260px', padding: '18px', backgroundColor: '#0c4a6e', border: '1px solid #38bdf8', borderRadius: '12px', textAlign: 'left' }}>
              <div style={{ fontWeight: 800, color: '#38bdf8', fontSize: '15px', marginBottom: '4px' }}>Sam Altman</div>
              <div style={{ fontSize: '13px', color: '#e0f2fe' }}>Lean Toward Ship</div>
            </div>
          </div>

          <div
            style={{
              fontSize: '30px',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #c084fc 0%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '1px',
            }}
          >
            BORROWED BRAIN PRO
          </div>
          <div style={{ fontSize: '15px', color: '#94a3b8', marginTop: '6px' }}>
            Distill Any Mind. Apply to Any Decision.
          </div>
        </div>
      )}
    </div>
  );
};
