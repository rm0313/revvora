import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Floating orb
function Orb({ style }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        ...style,
      }}
      animate={{
        y: [0, -30, 0],
        scale: [1, 1.08, 1],
        opacity: [style.opacity || 0.3, (style.opacity || 0.3) + 0.1, style.opacity || 0.3],
      }}
      transition={{ duration: style.dur || 8, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

// Animated word reveal
const HEADLINE_WORDS = ['Rank Higher.', 'Get Found.', 'Print Revenue.'];

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: 100 }}>

      {/* Animated Background Orbs */}
      <Orb style={{ width: 600, height: 600, background: 'var(--primary)', top: '-10%', left: '-15%', opacity: 0.12, dur: 10 }} />
      <Orb style={{ width: 500, height: 500, background: 'var(--secondary)', bottom: '-10%', right: '-15%', opacity: 0.10, dur: 12 }} />
      <Orb style={{ width: 300, height: 300, background: 'var(--primary)', top: '40%', right: '10%', opacity: 0.07, dur: 7 }} />

      {/* Animated grid lines */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid var(--border)', borderRadius: 100, padding: '6px 16px', marginBottom: 40, fontSize: 12, color: 'var(--text-dim)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', display: 'inline-block', animation: 'pulse-dot 2s infinite' }} />
          The Agency That Only Earns More When You Do
        </motion.div>

        {/* Headline — staggered word reveal */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0 16px', marginBottom: 32 }}>
          {HEADLINE_WORDS.map((word, i) => (
            <motion.h1
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.16,1,0.3,1] }}
              style={{
                fontSize: 'clamp(48px, 8vw, 96px)',
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: '-0.04em',
                color: i === 2 ? 'var(--primary)' : '#fff',
                textTransform: 'uppercase',
              }}
            >
              {word}
            </motion.h1>
          ))}
        </div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          style={{ maxWidth: 560, margin: '0 auto 48px', fontSize: 18, lineHeight: 1.65, color: 'var(--text-dim)', fontWeight: 400 }}
        >
          You set the revenue target. We hit it — or you don't pay the bonus. <em style={{ color: '#fff', fontStyle: 'normal', fontWeight: 600 }}>Fixed retainer, full skin in the game.</em>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button className="btn-primary" style={{ fontSize: 15, padding: '16px 36px' }}>
            Get My Free Revenue Audit — No Commitment
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button className="btn-outline" style={{ padding: '16px 32px' }}>
            See Real Client Results
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ marginTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--primary), transparent)' }}
          />
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
}
