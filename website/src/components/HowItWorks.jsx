import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    n: '01',
    title: 'Free Revenue Audit',
    text: 'We dig into your traffic, rankings, competitors, and conversion data to find exactly where revenue is leaking — and how fast.',
    tag: 'No cost. No obligation.',
  },
  {
    n: '02',
    title: 'Custom Strategy Built for You',
    text: 'No copy-paste strategy. A 90-day roadmap built for your market, your competitors, and your exact revenue goal.',
    tag: 'Zero guesswork.',
  },
  {
    n: '03',
    title: 'We Execute. Numbers Move. You Pay the Bonus.',
    text: 'Rankings rise. Traffic converts. Revenue follows. And our performance fee? It only applies when we hit the targets we committed to. If we miss — we keep working.',
    tag: 'You pay for results.',
  },
];

export default function HowItWorks() {
  return (
    <section id="who-we-serve">
      <div className="container">

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 80, alignItems: 'flex-start' }}>
          {/* Left sticky heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ flex: '0 0 340px', position: 'sticky', top: 120 }}
          >
            <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, marginBottom: 16 }}>The Process</p>
            <h2 style={{ fontSize: 'clamp(36px,4.5vw,60px)', fontWeight: 900, lineHeight: 1.05, color: '#fff', marginBottom: 24 }}>
              Three steps. Zero guesswork.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 40 }}>
              No retainers paid into the void. Every decision we make traces back to one thing: your revenue.
            </p>
            <button className="btn-primary">
              Start With A Free Audit — No Commitment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </motion.div>

          {/* Right steps */}
          <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {STEPS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16,1,0.3,1] }}
                style={{
                  padding: '48px 0',
                  borderBottom: i < STEPS.length - 1 ? '1px solid var(--border)' : 'none',
                  display: 'flex',
                  gap: 24,
                  alignItems: 'flex-start',
                }}
              >
                <span style={{
                  fontFamily: 'Raleway', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)',
                  letterSpacing: '0.05em', minWidth: 32, paddingTop: 4
                }}>
                  {s.n}
                </span>
                <div>
                  <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase', border: '1px solid var(--border-active)', borderRadius: 100, padding: '3px 12px', marginBottom: 16 }}>
                    {s.tag}
                  </div>
                  <h3 style={{ fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7 }}>{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
