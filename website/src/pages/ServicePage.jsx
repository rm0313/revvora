import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getServiceBySlug } from '../data/services';
import Header from '../components/Header';
import Footer from '../components/Footer';

function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, background: 'var(--border)' }}>
      {items.map((item, i) => (
        <div key={i} style={{ background: 'var(--bg)', cursor: 'pointer' }} onClick={() => setOpen(open === i ? null : i)}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 28px', gap: 16 }}>
            <span style={{ fontSize: 15, fontWeight: 600, color: open === i ? '#fff' : 'var(--text-dim)' }}>{item.q}</span>
            <motion.div animate={{ rotate: open === i ? 45 : 0 }} style={{ flexShrink: 0, color: 'var(--text-muted)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
            </motion.div>
          </div>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: 'hidden' }}
              >
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75, padding: '0 28px 22px' }}>{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <p style={{ fontSize: 18, color: 'var(--text-muted)' }}>Service not found.</p>
        <Link to="/" style={{ color: 'var(--primary)', fontSize: 14 }}>← Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <Header />

      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 100, position: 'relative', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(234,67,53,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40 }}>
            <Link to="/" style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Home</Link>
            <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>›</span>
            <span style={{ fontSize: 12, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>Services</span>
            <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>›</span>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>{service.name}</span>
          </motion.div>

          <div style={{ maxWidth: 760 }}>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', fontWeight: 900, color: '#fff', lineHeight: 1.04, letterSpacing: '-0.04em', marginBottom: 24 }}>
              {service.hero.headline}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: 40, maxWidth: 560 }}>
              {service.hero.subheadline}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button className="btn-primary" style={{ fontSize: 14, padding: '14px 32px' }}>
                {service.hero.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <Link to="/#results" className="btn-outline" style={{ fontSize: 14, padding: '14px 28px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                See Client Results
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do — Pillars */}
      <section style={{ padding: '80px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, marginBottom: 12 }}>What We Do</p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>Four pillars. One goal.</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, background: 'var(--border)' }}>
            {service.pillars.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: 'var(--bg-2)', padding: '36px 32px', position: 'relative' }}>
                <div style={{ width: 28, height: 2, background: 'var(--primary)', borderRadius: 2, marginBottom: 20 }} />
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, marginBottom: 12 }}>Who It's For</p>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Right for your business?</h2>
            </motion.div>
            <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8 }}>
              {service.whoItsFor}
            </motion.p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, marginBottom: 12 }}>Process</p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>How it works.</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--border)' }}>
            {service.process.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: 'var(--bg-2)', padding: '40px 36px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: i === 0 ? 'linear-gradient(90deg, var(--primary), transparent)' : 'transparent' }} />
                <p style={{ fontFamily: 'Raleway', fontSize: 48, fontWeight: 900, color: 'rgba(255,255,255,0.04)', letterSpacing: '-0.05em', marginBottom: 20, lineHeight: 1 }}>{step.step}</p>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / Results */}
      {service.proof && (
        <section style={{ padding: '80px 0' }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
              <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, marginBottom: 12 }}>Real Results</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>Numbers. Unrounded.</h2>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, background: 'var(--border)' }}>
              {service.proof.clients.map((client, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ background: 'var(--bg)', padding: '36px 32px', position: 'relative', borderLeft: '2px solid var(--primary)' }}>
                  <h3 style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', marginBottom: 12 }}>{client.name}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75 }}>{client.stats}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section style={{ padding: '80px 0', background: service.proof ? 'var(--bg-2)' : 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, marginBottom: 12 }}>FAQ</p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>Common questions.</h2>
          </motion.div>
          <div style={{ maxWidth: 760 }}>
            <FAQ items={service.faq} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '100px 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(234,67,53,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 20 }}>
              {service.finalCta.headline}
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 40 }}>No commitment. No sales pressure. Just a clear picture of where you stand.</p>
            <button className="btn-primary" style={{ fontSize: 15, padding: '16px 40px' }}>
              {service.finalCta.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
