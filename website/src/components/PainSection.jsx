import React from 'react';
import { motion } from 'framer-motion';

const PAINS = [
  {
    n: '01',
    title: 'You paid an agency. Nothing changed.',
    text: 'They sent reports full of metrics that meant nothing. No rankings climbed. No leads came in. No revenue moved. Just invoices, month after month.',
  },
  {
    n: '02',
    title: 'Your competitors are ranking. You are not.',
    text: 'Every day that gap stays open, you lose customers who should be finding you first. That is real money, leaving.',
  },
  {
    n: '03',
    title: "You're still carrying the whole risk.",
    text: "Your agency gets paid whether results happen or not. You absorb the loss. That's not a partnership — that's a service subscription with no accountability.",
  },
];

export default function PainSection() {
  return (
    <section style={{ background: 'var(--bg-2)', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 640, marginBottom: 72 }}
        >
          <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, marginBottom: 16 }}>Still happening to you?</p>
          <h2 style={{ fontSize: 'clamp(36px,5vw,68px)', fontWeight: 900, lineHeight: 1.05, color: '#fff' }}>
            What bad marketing is actually costing you
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {PAINS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: 32,
                alignItems: 'start',
                padding: '40px 0',
                borderBottom: i < PAINS.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span style={{ fontFamily: 'Raleway', fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.04em', paddingTop: 4 }}>{p.n}</span>
              <div>
                <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 600 }}>{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
