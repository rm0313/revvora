import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES = [
  { name: 'SEO', desc: 'Organic rankings that keep bringing buyers to you — long after you stop running ads', detail: 'Technical SEO, on-page, local, and content strategy. We fix what stops Google from indexing you, then make every page work harder for rankings and conversions.' },
  { name: 'AI SEO', desc: 'Built for Google AI Overviews, Perplexity, and ChatGPT — where buyers are searching right now', detail: 'We optimize for Google AI Overviews, Perplexity, and ChatGPT citations. Schema, entity authority, answer engine optimization. Built for 2025 and beyond.' },
  { name: 'Link Building', desc: 'Quality backlinks that build authority and move rankings', detail: 'Editorial placements. Digital PR. Niche-relevant outreach. Zero PBNs, zero link farms. Only links that compound over time.' },
  { name: 'PPC', desc: 'Ad spend that returns more than it costs', detail: 'Google Search Ads, Performance Max, Remarketing. Built to convert, not just click. We managed $4,598 in ad spend and generated 337 conversions for Paalm.' },
  { name: 'Social Media Ads', desc: 'Paid social that generates leads, not just likes', detail: 'Meta, Snapchat, LinkedIn, TikTok. Full-funnel: awareness to conversion. Rigorous A/B testing. Wander Nana scaled 300% daily spend while maintaining 2.84 ROAS.' },
  { name: 'CRM & Automations', desc: 'The lead came in. Now what? We build the system that turns it into a customer.', detail: 'CRM setup, lead scoring, email/SMS automation, pipeline reporting. The gap between a lead and a customer is a system. We build it.' },
  { name: 'Reporting', desc: 'Clear numbers that connect to business outcomes', detail: 'No vanity metrics. No inflated impressions. Monthly dashboards, keyword rankings, revenue attribution. Written in language your leadership understands.' },
  { name: 'Virtual CMO', desc: 'CMO-level strategy at a fraction of the hire. 20+ hours/month, fully embedded in your business.', detail: 'Your CMO, embedded. 20+ hours/month. We attend meetings, own strategy, lead your team, and report results. Starting at $10,000/month vs $150,000+ full-time.' },
];

export default function CoreServices() {
  const [active, setActive] = useState(null);

  return (
    <section id="services" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}
        >
          <div>
            <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, marginBottom: 12 }}>What We Do</p>
            <h2 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 900, color: '#fff', lineHeight: 1.05 }}>Eight channels.<br/>One obsession: your revenue.</h2>
          </div>
          <button className="btn-outline">View All Services</button>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 1, background: 'var(--border)' }}>
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActive(active === i ? null : i)}
              style={{
                background: active === i ? 'rgba(234,67,53,0.06)' : 'var(--bg-2)',
                padding: '36px 32px',
                cursor: 'pointer',
                borderLeft: active === i ? '2px solid var(--primary)' : '2px solid transparent',
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: active === i ? 'var(--primary)' : '#fff', transition: 'color 0.2s' }}>{s.name}</h3>
                <motion.div animate={{ rotate: active === i ? 45 : 0 }} style={{ color: 'var(--text-muted)', marginTop: 2 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </motion.div>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.7, marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)' }}>{s.detail}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
