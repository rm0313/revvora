import React from 'react';
import { motion } from 'framer-motion';

const PLANS = [
  {
    name: 'Core Growth',
    price: '$2,000',
    period: '/month',
    tag: 'Most Popular',
    desc: 'For growing businesses ready to turn search into a consistent lead machine.',
    features: ['SEO & AI SEO Execution', 'Link Building', 'Monthly Reporting & Dashboard', 'Full Strategy Roadmap', 'On-Page Optimization', '+ 10% performance fee on target hit'],
    cta: 'Start With A Free Audit',
    highlight: false,
  },
  {
    name: 'Virtual CMO',
    price: '$10,000',
    period: '/month',
    tag: 'Full Ownership',
    desc: 'Your marketing lead, embedded. Strategy, execution, team oversight — and full accountability for the numbers that matter.',
    features: ['Everything in Core Growth', '20+ Embedded CMO Hours/Month', 'Revenue-Focused Strategy', 'Team Leadership & Oversight', 'Board-Ready Monthly Reporting', 'Full Funnel Oversight (SEO, PPC, CRM)', 'Quarterly Planning Sessions'],
    cta: 'Book a Discovery Call',
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section style={{ background: 'var(--bg-2)', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, marginBottom: 16 }}>Pricing</p>
          <h2 style={{ fontSize: 'clamp(36px,5vw,68px)', fontWeight: 900, color: '#fff', lineHeight: 1.05, marginBottom: 20 }}>
            You only pay more when we deliver more.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto' }}>
            We don't win unless you win. That's not a slogan — it's how the contract works.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24, maxWidth: 900, margin: '0 auto' }}>
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              style={{
                background: plan.highlight ? 'rgba(234,67,53,0.06)' : 'var(--surface)',
                border: plan.highlight ? '1px solid var(--border-active)' : '1px solid var(--border)',
                borderRadius: 20,
                padding: '48px 40px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {plan.highlight && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }} />
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 6 }}>{plan.name}</h3>
                  <span style={{ fontSize: 11, fontWeight: 700, color: plan.highlight ? 'var(--primary)' : 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{plan.tag}</span>
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <span style={{ fontFamily: 'Raleway', fontSize: 52, fontWeight: 900, color: '#fff', letterSpacing: '-0.04em' }}>{plan.price}</span>
                <span style={{ fontSize: 16, color: 'var(--text-muted)' }}>{plan.period}</span>
              </div>

              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 32 }}>{plan.desc}</p>

              <ul style={{ listStyle: 'none', marginBottom: 36, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {plan.features.map((f, fi) => (
                  <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, color: fi === plan.features.length - 1 ? 'var(--primary)' : '#ccc', fontWeight: fi === plan.features.length - 1 ? 600 : 400 }}>
                    <svg style={{ width: 16, height: 16, marginTop: 2, flexShrink: 0, color: 'var(--primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={plan.highlight ? 'btn-primary' : 'btn-outline'} style={{ width: '100%', justifyContent: 'center' }}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Guarantee strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: 56, padding: '32px 40px', border: '1px solid var(--border)', borderRadius: 12, maxWidth: 700, margin: '56px auto 0' }}
        >
          <p style={{ fontSize: 15, color: 'var(--text-dim)', lineHeight: 1.7 }}>
            <strong style={{ color: '#fff' }}>Our guarantee:</strong> We agree on targets before we start. If we miss them, the performance fee doesn't apply — full stop. You keep the retainer. We keep working until we get there.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
