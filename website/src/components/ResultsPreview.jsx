import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CASES = [
  {
    client: 'Nemo Cloud',
    category: 'B2B · SaaS · Cloud Infrastructure',
    tag: 'Web Design + Paid Ads',
    headline: '3.2× more demo requests. In 90 days.',
    before: 'No paid acquisition engine. Zero brand presence online. Sales team relying entirely on referrals.',
    after: 'Full-funnel system built from scratch — new site, ad creative, and targeting strategy targeting enterprise buyers.',
    stats: [
      { label: 'Demo Request Growth', value: '3.2×', note: 'vs. baseline' },
      { label: 'Cost Per Lead Reduced', value: '44%', note: 'within 60 days' },
      { label: 'MQL → SQL Rate', value: '38%', note: 'above industry avg' },
    ],
    image: null,
    color: '#EA4335',
  },
  {
    client: 'One Vision',
    category: 'B2B · Consulting · Growth',
    tag: 'Brand + Web + Ads',
    headline: '$480K pipeline. From a standing start.',
    before: 'Commoditized positioning. No website that converted. Cold traffic bounced immediately.',
    after: 'Rebuilt brand identity, rewrote positioning, launched outbound and paid campaigns targeting decision-makers.',
    stats: [
      { label: 'Pipeline Generated', value: '$480K', note: 'in first quarter' },
      { label: 'Conversion Rate', value: '6.1%', note: 'cold traffic' },
      { label: 'CAC Improvement', value: '61%', note: 'vs. prior period' },
    ],
    image: null,
    color: '#1777AB',
  },
  {
    client: 'Paalm',
    category: 'Ecommerce · Cosmetics',
    tag: 'Paid Ads',
    headline: '1,100+ purchases. Day one launch.',
    before: 'Zero brand awareness. No customer data. Target ROAS of 3× across Google, Meta, and Snapchat simultaneously.',
    after: 'Built multi-channel paid strategy from day one — creative testing, audience building, and ROAS-focused bidding.',
    stats: [
      { label: 'Snapchat ROAS', value: '4.06×', note: 'target was 3×' },
      { label: 'Google ROAS', value: '3.56×', note: 'first 30 days' },
      { label: 'Total Purchases', value: '1,100+', note: 'launch period' },
    ],
    image: null,
    color: '#EA4335',
  },
  {
    client: 'Wander Nana',
    category: 'Health · Ecommerce · France',
    tag: 'Paid Social',
    headline: 'ROAS of 4.76×. Budget scaled 3×.',
    before: 'Meta ads underperforming. ROAS stuck below 2×. No expansion beyond one channel.',
    after: 'Rebuilt creative strategy, expanded to new placements, and scaled daily budget 300% while maintaining ROAS.',
    stats: [
      { label: 'Peak Campaign ROAS', value: '4.76×', note: 'Meta' },
      { label: 'Daily Budget Scaled', value: '300%', note: 'without ROAS drop' },
      { label: 'Meta Link Clicks', value: '127K', note: 'campaign total' },
    ],
    image: null,
    color: '#1777AB',
  },
  {
    client: 'GCG Media',
    category: 'B2B · Digital Agency',
    tag: 'Paid Ads + CRO',
    headline: 'CVR from 1.55% to 8.33%. CPA halved.',
    before: 'Market didn\'t understand the offer. Educational curve killing ad performance. CVR stuck at 1.55% for months.',
    after: 'Rebuilt ad angle and landing page to lead with outcomes not features. Eliminated the education gap.',
    stats: [
      { label: 'Conversion Rate', value: '8.33%', note: 'was 1.55%' },
      { label: 'CPA Reduced', value: '56%', note: 'same ad spend' },
      { label: 'CVR Improvement', value: '5.4×', note: '1.55 → 8.33%' },
    ],
    image: null,
    color: '#EA4335',
  },
  {
    client: 'Undisclosed',
    category: 'B2B · SaaS · HR Tech',
    tag: 'SEO + Content',
    headline: '340% more organic traffic. CAC dropped 48%.',
    before: '100% reliant on paid acquisition. No organic presence. Every lead cost money. Scaling felt like a trap.',
    after: 'Built full content and SEO system — keyword strategy, pillar pages, and programmatic content targeting buyers in-market.',
    stats: [
      { label: 'Organic Traffic Growth', value: '340%', note: 'in 6 months' },
      { label: 'Keywords Ranking #1–3', value: '47', note: 'high-intent terms' },
      { label: 'CAC from Organic', value: '–48%', note: 'vs. paid baseline' },
    ],
    image: null,
    color: '#1777AB',
  },
];

export default function ResultsPreview() {
  const [active, setActive] = useState(0);
  const c = CASES[active];

  return (
    <section style={{ padding: '120px 0', overflow: 'hidden' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 72 }}
        >
          <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, marginBottom: 20 }}>
            Case Studies
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: 'clamp(32px,4.5vw,60px)', fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.04em', maxWidth: 560 }}>
              We only take clients<br />we're confident we can grow.
            </h2>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', maxWidth: 280, lineHeight: 1.8, paddingBottom: 4 }}>
              Six clients. Six different problems. Every number below is exact — not rounded, not estimated.
            </p>
          </div>
        </motion.div>

        {/* Main panel */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 2, background: 'rgba(255,255,255,0.04)', borderRadius: 16, overflow: 'hidden' }}>

          {/* Sidebar selector */}
          <div style={{ background: '#080808', display: 'flex', flexDirection: 'column' }}>
            {CASES.map((cs, i) => (
              <button
                key={cs.client}
                onClick={() => setActive(i)}
                style={{
                  background: active === i ? '#0f0f0f' : 'transparent',
                  border: 'none',
                  borderLeft: active === i ? `3px solid ${cs.color}` : '3px solid transparent',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  padding: '22px 24px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  position: 'relative',
                }}
              >
                <p style={{ fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: active === i ? cs.color : 'var(--text-muted)', fontWeight: 700, marginBottom: 5, transition: 'color 0.2s' }}>
                  {cs.tag}
                </p>
                <p style={{ fontSize: 15, fontWeight: 800, color: active === i ? '#fff' : '#555', fontFamily: 'Raleway', letterSpacing: '-0.02em', marginBottom: 6, transition: 'color 0.2s' }}>
                  {cs.client}
                </p>
                <p style={{ fontSize: 11, color: active === i ? cs.color : '#333', fontWeight: 700, fontFamily: 'Raleway', letterSpacing: '-0.01em', transition: 'color 0.2s' }}>
                  {cs.stats[0].value}
                  <span style={{ fontSize: 9, fontWeight: 500, color: 'var(--text-muted)', marginLeft: 4 }}>{cs.stats[0].label}</span>
                </p>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{ background: '#0a0a0a', display: 'flex', flexDirection: 'column' }}
            >
              {/* Top section: headline + image */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: c.image ? '1fr 1fr' : '1fr',
                gap: 0,
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                minHeight: 280,
              }}>
                {/* Headline + meta */}
                <div style={{ padding: '44px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                    <div style={{ width: 24, height: 2, background: c.color, borderRadius: 2 }} />
                    <span style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {c.category}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(22px, 2.5vw, 36px)',
                    fontWeight: 900,
                    color: '#fff',
                    letterSpacing: '-0.035em',
                    lineHeight: 1.1,
                    marginBottom: 28,
                  }}>
                    {c.headline}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#555', marginTop: 2, flexShrink: 0 }}>Before</span>
                      <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>{c.before}</p>
                    </div>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: c.color, marginTop: 2, flexShrink: 0 }}>After</span>
                      <p style={{ fontSize: 13, color: '#888', lineHeight: 1.7 }}>{c.after}</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                {c.image && (
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={c.image}
                      alt={c.client}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0a0a0a 0%, transparent 30%, transparent 70%, #0a0a0a 100%)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a0a0a 0%, transparent 40%)' }} />
                  </div>
                )}
              </div>

              {/* Stats row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}>
                {c.stats.map((st, si) => (
                  <div
                    key={si}
                    style={{
                      padding: '36px 40px',
                      borderRight: si < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      position: 'relative',
                    }}
                  >
                    {si === 0 && (
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${c.color}, transparent)` }} />
                    )}
                    <p style={{ fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 10 }}>
                      {st.label}
                    </p>
                    <p style={{ fontFamily: 'Raleway', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 900, color: si === 0 ? c.color : '#fff', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 8 }}>
                      {st.value}
                    </p>
                    <p style={{ fontSize: 11, color: '#444', fontWeight: 500 }}>{st.note}</p>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div style={{ padding: '24px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
                <p style={{ fontSize: 13, color: '#444', lineHeight: 1.6, maxWidth: 420 }}>
                  We only work with clients we can grow. If you're a fit, you'll know within the first conversation.
                </p>
                <button className="btn-outline" style={{ fontSize: 12, padding: '10px 22px', flexShrink: 0 }}>
                  Get a Free Audit
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: 40 }}
        >
          <p style={{ fontSize: 12, color: '#333', letterSpacing: '0.04em' }}>
            Every result above is from a real engagement. No projections, no averages, no composites.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
