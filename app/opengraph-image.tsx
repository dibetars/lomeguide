import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Lomé Guide — Live the Lomé you've only heard about'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          background: '#1A1508',
          padding: '64px',
          position: 'relative',
        }}
      >
        {/* Green glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at 15% 50%, rgba(0,106,78,0.35) 0%, transparent 55%)',
          }}
        />
        {/* Red glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at 85% 80%, rgba(212,72,60,0.18) 0%, transparent 50%)',
          }}
        />

        {/* Flag stripe top */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '5px', display: 'flex' }}>
          <div style={{ flex: 1, background: '#006A4E' }} />
          <div style={{ flex: 1, background: '#FFCB00' }} />
          <div style={{ flex: 1, background: '#D4483C' }} />
        </div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '2px', background: '#006A4E' }} />
            <span style={{ fontFamily: 'sans-serif', fontSize: '14px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#006A4E', fontWeight: 600 }}>
              Lome · Togo
            </span>
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.88 }}>
            <span style={{ fontFamily: 'serif', fontSize: '108px', fontWeight: 900, fontStyle: 'italic', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Live the Lomé
            </span>
            <span style={{ fontFamily: 'serif', fontSize: '108px', fontWeight: 900, fontStyle: 'italic', color: '#FFCB00', letterSpacing: '-0.02em' }}>
              you've only heard about.
            </span>
          </div>

          {/* Subtext */}
          <span style={{ fontFamily: 'sans-serif', fontSize: '22px', color: 'rgba(255,255,255,0.5)', maxWidth: '600px', lineHeight: 1.5 }}>
            Your complete guide to Lomé — visas, border, stays, food, nightlife, Kpalimé.
          </span>
        </div>

        {/* URL badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '64px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '100px',
            padding: '10px 24px',
            fontFamily: 'sans-serif',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.05em',
          }}
        >
          lome.stay
        </div>
      </div>
    ),
    { ...size },
  )
}
