import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Explainer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene 1: 0 - 90 (Title & Intro)
  // Scene 2: 90 - 180 (Engine 1: Distill)
  // Scene 3: 180 - 270 (Engine 2: Decision / Contrast)
  // Scene 4: 270 - 360 (Outro / Ready Profiles)

  const opacity1 = interpolate(frame, [0, 20, 70, 90], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity2 = interpolate(frame, [90, 110, 160, 180], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity3 = interpolate(frame, [180, 200, 250, 270], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity4 = interpolate(frame, [270, 290, 340, 360], [0, 1, 1, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const scale1 = spring({ frame: frame, fps, config: { damping: 12 } });
  const scale2 = spring({ frame: frame - 90, fps, config: { damping: 12 } });
  const scale3 = spring({ frame: frame - 180, fps, config: { damping: 12 } });
  const scale4 = spring({ frame: frame - 270, fps, config: { damping: 12 } });

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#0a0e17',
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
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107, 79, 187, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Scene 1: Title */}
      {frame >= 0 && frame < 90 && (
        <div
          style={{
            opacity: opacity1,
            transform: `scale(${scale1})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#a78bfa',
              marginBottom: '16px',
              fontWeight: 700,
            }}
          >
            Borrowed Brain Pro
          </div>
          <div
            style={{
              fontSize: '52px',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.2,
              marginBottom: '24px',
            }}
          >
            Distill Any Mind.
            <br />
            Apply to Any Decision.
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#94a3b8',
              maxWidth: '700px',
            }}
          >
            Stop generic "think like X" prompts. Build sourced, structured thinking profiles with explicit failure boundaries.
          </div>
        </div>
      )}

      {/* Scene 2: Distill Engine */}
      {frame >= 90 && frame < 180 && (
        <div
          style={{
            opacity: opacity2,
            transform: `scale(${scale2})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: '18px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#38bdf8',
              marginBottom: '16px',
              fontWeight: 700,
            }}
          >
            Engine 1: Distill Engine
          </div>
          <div
            style={{
              fontSize: '44px',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '32px',
            }}
          >
            Researches Public Record in 4 Layers
          </div>
          <div
            style={{
              display: 'flex',
              gap: '20px',
            }}
          >
            {['① Primary Voice', '② Documented Cases', '③ Third-Party Reads', '④ Failures & Pushback'].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '12px',
                  padding: '20px 24px',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#e2e8f0',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scene 3: Decision Engine */}
      {frame >= 180 && frame < 270 && (
        <div
          style={{
            opacity: opacity3,
            transform: `scale(${scale3})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: '18px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#4ade80',
              marginBottom: '16px',
              fontWeight: 700,
            }}
          >
            Engine 2: Decision & Compare Engine
          </div>
          <div
            style={{
              fontSize: '44px',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '32px',
            }}
          >
            Single Lens & Multi-Lens Contrast
          </div>
          <div
            style={{
              display: 'flex',
              gap: '30px',
            }}
          >
            <div
              style={{
                backgroundColor: '#111827',
                border: '1px solid #1f2937',
                borderRadius: '16px',
                padding: '28px',
                width: '320px',
                textAlign: 'left',
              }}
            >
              <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '20px', marginBottom: '8px' }}>Apply Mode</div>
              <div style={{ color: '#9ca3af', fontSize: '16px' }}>Apply 1 Profile to surface non-obvious blind spots in your situation.</div>
            </div>

            <div
              style={{
                backgroundColor: '#111827',
                border: '1px solid #1f2937',
                borderRadius: '16px',
                padding: '28px',
                width: '320px',
                textAlign: 'left',
              }}
            >
              <div style={{ color: '#a78bfa', fontWeight: 700, fontSize: '20px', marginBottom: '8px' }}>Compare Mode</div>
              <div style={{ color: '#9ca3af', fontSize: '16px' }}>Compare 2+ Profiles (e.g. Jobs vs Altman) to map friction & shared gaps.</div>
            </div>
          </div>
        </div>
      )}

      {/* Scene 4: Outro */}
      {frame >= 270 && (
        <div
          style={{
            opacity: opacity4,
            transform: `scale(${scale4})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: '52px',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '16px',
            }}
          >
            11 Ready Profiles Included
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#cbd5e1',
              marginBottom: '32px',
            }}
          >
            Buffett · Munger · Jobs · Voss · Feynman · Altman · Graham & More
          </div>
          <div
            style={{
              backgroundColor: '#6b4fbb',
              color: '#ffffff',
              padding: '14px 32px',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '20px',
              boxShadow: '0 10px 25px rgba(107, 79, 187, 0.4)',
            }}
          >
            github.com/DOTfei/borrowed-brain-pro
          </div>
        </div>
      )}
    </div>
  );
};
