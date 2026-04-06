import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { label: 'ROAS on Snapchat', value: '4.06×', sub: 'Paalm eCommerce' },
  { label: 'Conversion Rate', value: '8.33%', sub: 'GCG Media B2B' },
  { label: 'Ad Spend Scaled', value: '300%', sub: 'ROAS maintained' },
  { label: 'CPA Reduction', value: '56%', sub: 'GCG Media' },
  { label: 'Google ROAS', value: '3.56×', sub: 'Paalm Google Ads' },
  { label: 'Meta ROAS', value: '4.76×', sub: 'Wander Nana top campaign' },
];

const MARQUEE_CLIENTS = ['Paalm', '✦', 'Wander Nana', '✦', 'GCG Media', '✦', 'Paalm', '✦', 'Wander Nana', '✦', 'GCG Media', '✦'];

function AnimatedNumber({ value }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {value}
    </motion.span>
  );
}

export default function TrustBar() {
  return (
    <section style={{ padding: '80px 0 0', overflow: 'hidden' }}>
      {/* Stats Grid */}
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 48 }}
        >
          Real Numbers. Real Clients. No Rounding Up.
        </motion.p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 1, background: 'var(--border)' }}>
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              style={{ background: 'var(--bg)', padding: '40px 32px', textAlign: 'center' }}
            >
              <div style={{ fontFamily: 'Raleway', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--primary)', lineHeight: 1 }}>
                <AnimatedNumber value={s.value} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginTop: 8 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee strip */}
      <div style={{ marginTop: 64, borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '18px 0', overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, var(--bg), transparent)', zIndex: 2 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, var(--bg), transparent)', zIndex: 2 }} />
        <motion.div
          animate={{ x: [0, '-50%'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: 48, alignItems: 'center', width: 'max-content' }}
        >
          {[...MARQUEE_CLIENTS, ...MARQUEE_CLIENTS].map((c, i) => (
            <span key={i} style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: c === '✦' ? 'var(--primary)' : 'var(--text-muted)', whiteSpace: 'nowrap', fontFamily: 'Raleway' }}>
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
