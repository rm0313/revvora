import React from 'react';
import { motion } from 'framer-motion';

const CASES = [
  {
    client: 'Paalm',
    category: 'Ecommerce · Cosmetics',
    challenge: 'Zero brand awareness on launch day. Target ROAS of 3 across Google, Meta, and Snapchat.',
    stats: [
      { label: 'Snapchat ROAS', value: '4.06×' },
      { label: 'Google ROAS', value: '3.56×' },
      { label: 'Total Purchases', value: '1,100+' },
    ],
    color: '#EA4335',
  },
  {
    client: 'Wander Nana',
    category: 'Health · Ecommerce · France',
    challenge: 'Underperforming Meta ads. Needed ROAS above 2.5 at scale and expansion to new ad channels.',
    stats: [
      { label: 'Top Campaign ROAS', value: '4.76×' },
      { label: 'Daily Budget Scaled', value: '300%' },
      { label: 'Meta Link Clicks', value: '127K' },
    ],
    color: '#1777AB',
  },
  {
    client: 'GCG Media',
    category: 'B2B · Digital Agency',
    challenge: 'Educational curve. Market didn\'t understand the offer. Conversion rate stuck at 1.55%.',
    stats: [
      { label: 'Conversion Rate', value: '8.33%' },
      { label: 'CPA Reduced', value: '56%' },
      { label: 'From → To CVR', value: '1.55→8.33' },
    ],
    color: '#EA4335',
  },
];

export default function ResultsPreview() {
  return (
    <section>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, marginBottom: 16 }}>Case Studies</p>
          <h2 style={{ fontSize: 'clamp(36px,5vw,68px)', fontWeight: 900, color: '#fff', lineHeight: 1.05, marginBottom: 20 }}>
            We only take on clients we're confident we can grow.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 480, margin: '0 auto' }}>These are the numbers. Unrounded.</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, background: 'var(--border)' }}>
          {CASES.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: 'var(--bg)',
                padding: '56px 48px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 48,
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
              whileHover={{ background: '#0f0f0f' }}
            >
              {/* Accent line */}
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: c.color }} />

              <div style={{ paddingLeft: 24 }}>
                <span style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>{c.category}</span>
                <h3 style={{ fontSize: 'clamp(28px,3vw,44px)', fontWeight: 900, color: '#fff', marginTop: 8, marginBottom: 16, letterSpacing: '-0.03em' }}>{c.client}</h3>
                <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 28 }}><strong style={{ color: 'var(--text-dim)' }}>Their Problem: </strong>{c.challenge}</p>
                <button className="btn-outline" style={{ fontSize: 13, padding: '10px 22px' }}>
                  View Case Study
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {c.stats.map((st, si) => (
                  <div key={si} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 24, borderBottom: si < c.stats.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>{st.label}</span>
                    <span style={{ fontFamily: 'Raleway', fontSize: 32, fontWeight: 900, color: c.color, letterSpacing: '-0.04em' }}>{st.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
