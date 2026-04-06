import { motion } from 'framer-motion';
import nemoCloud from '../assets/nemo-cloud.webp';
import oneVision from '../assets/one-vision.webp';

const CASES = [
  {
    client: 'Nemo Cloud',
    category: 'B2B · SaaS · Cloud Infrastructure',
    challenge: 'No paid acquisition engine. Needed a full-funnel build from scratch — landing pages, ads, and lead gen — targeting enterprise buyers.',
    stats: [
      { label: 'Demo Requests', value: '3.2×' },
      { label: 'CPL Reduced', value: '44%' },
      { label: 'MQL → SQL Rate', value: '38%' },
    ],
    color: '#EA4335',
    image: nemoCloud,
    tag: 'Web Design + Paid Ads',
  },
  {
    client: 'One Vision',
    category: 'B2B · Consulting · Growth',
    challenge: 'Commoditized market with no clear positioning. Needed brand clarity, a new site, and an outbound system that converted cold traffic.',
    stats: [
      { label: 'Conversion Rate', value: '6.1%' },
      { label: 'Pipeline Generated', value: '$480K' },
      { label: 'CAC Improvement', value: '61%' },
    ],
    color: '#1777AB',
    image: oneVision,
    tag: 'Brand + Web + Ads',
  },
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
    image: null,
    tag: 'Paid Ads',
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
    image: null,
    tag: 'Paid Social',
  },
  {
    client: 'GCG Media',
    category: 'B2B · Digital Agency',
    challenge: "Educational curve. Market didn't understand the offer. Conversion rate stuck at 1.55%.",
    stats: [
      { label: 'Conversion Rate', value: '8.33%' },
      { label: 'CPA Reduced', value: '56%' },
      { label: 'From → To CVR', value: '1.55→8.33' },
    ],
    color: '#EA4335',
    image: null,
    tag: 'Paid Ads + CRO',
  },
];

function ImageCard({ c, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      style={{
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)',
        background: '#0a0a0a',
        display: 'grid',
        gridTemplateColumns: i % 2 === 0 ? '1.4fr 1fr' : '1fr 1.4fr',
        minHeight: 480,
      }}
    >
      {/* Image side */}
      <div
        style={{
          order: i % 2 === 0 ? 0 : 1,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src={c.image}
          alt={c.client}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            display: 'block',
            transition: 'transform 0.6s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: i % 2 === 0
            ? 'linear-gradient(to right, transparent 60%, #0a0a0a)'
            : 'linear-gradient(to left, transparent 60%, #0a0a0a)',
        }} />
        {/* Tag badge */}
        <div style={{
          position: 'absolute',
          top: 20,
          left: 20,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(12px)',
          border: `1px solid ${c.color}44`,
          borderRadius: 100,
          padding: '6px 14px',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: c.color,
        }}>
          {c.tag}
        </div>
      </div>

      {/* Content side */}
      <div style={{
        order: i % 2 === 0 ? 1 : 0,
        padding: '52px 48px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 0,
      }}>
        {/* Accent line */}
        <div style={{ width: 32, height: 3, background: c.color, borderRadius: 2, marginBottom: 24 }} />

        <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 10 }}>
          {c.category}
        </p>
        <h3 style={{ fontSize: 'clamp(30px,3vw,48px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', marginBottom: 20, lineHeight: 1.05 }}>
          {c.client}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 40, maxWidth: 340 }}>
          <strong style={{ color: 'var(--text-dim)' }}>The challenge: </strong>{c.challenge}
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--border)' }}>
          {c.stats.map((st, si) => (
            <div key={si} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '18px 0',
              borderBottom: '1px solid var(--border)',
            }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.02em' }}>{st.label}</span>
              <span style={{ fontFamily: 'Raleway', fontSize: 28, fontWeight: 900, color: c.color, letterSpacing: '-0.04em' }}>{st.value}</span>
            </div>
          ))}
        </div>

        <button className="btn-outline" style={{ fontSize: 12, padding: '10px 20px', marginTop: 32, alignSelf: 'flex-start' }}>
          Full Case Study
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </motion.div>
  );
}

function MetricCard({ c, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      style={{
        background: '#0a0a0a',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 12,
        padding: '36px 36px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${c.color}, transparent)` }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
        <div>
          <p style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 6 }}>
            {c.category}
          </p>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>{c.client}</h3>
        </div>
        <span style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: c.color,
          background: `${c.color}14`,
          border: `1px solid ${c.color}33`,
          borderRadius: 100,
          padding: '5px 12px',
          whiteSpace: 'nowrap',
        }}>
          {c.tag}
        </span>
      </div>

      <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 28 }}>
        <strong style={{ color: 'var(--text-dim)' }}>Challenge: </strong>{c.challenge}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
        {c.stats.map((st, si) => (
          <div key={si} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 0',
            borderBottom: si < c.stats.length - 1 ? '1px solid var(--border)' : 'none',
          }}>
            <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>{st.label}</span>
            <span style={{ fontFamily: 'Raleway', fontSize: 24, fontWeight: 900, color: c.color, letterSpacing: '-0.04em' }}>{st.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ResultsPreview() {
  const imageCases = CASES.filter(c => c.image);
  const metricCases = CASES.filter(c => !c.image);

  return (
    <section style={{ padding: '120px 0' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 80 }}
        >
          <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, marginBottom: 16 }}>
            Case Studies
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.04em', maxWidth: 640 }}>
              We only take on clients<br />we're confident we can grow.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', maxWidth: 300, lineHeight: 1.7, paddingBottom: 8 }}>
              These are the numbers. Unrounded. Every result below came from a client who trusted us with their growth.
            </p>
          </div>
        </motion.div>

        {/* Featured image case studies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 16 }}>
          {imageCases.map((c, i) => (
            <ImageCard key={c.client} c={c} i={i} />
          ))}
        </div>

        {/* Metrics-only case studies */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {metricCases.map((c, i) => (
            <MetricCard key={c.client} c={c} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
