import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
      {/* ── FINAL CTA ── */}
      <section style={{ overflow: 'hidden', position: 'relative', padding: '140px 0' }}>
        {/* Moving gradient bg */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800, height: 800,
            background: 'conic-gradient(from 0deg, var(--primary) 0%, transparent 30%, var(--secondary) 50%, transparent 80%, var(--primary) 100%)',
            opacity: 0.06,
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, marginBottom: 24 }}
          >
            Your competitors aren't waiting.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(40px,7vw,90px)', fontWeight: 900, color: '#fff', lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: 28, textTransform: 'uppercase' }}
          >
            Stop Paying<br/>For Promises.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: 18, color: 'var(--text-muted)', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}
          >
            Join the SMBs and growth brands across North America that stopped paying for promises — and started seeing revenue move.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <button className="btn-primary" style={{ fontSize: 16, padding: '18px 40px' }}>
              Get Your Free Revenue Audit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid var(--border)', paddingTop: 64, paddingBottom: 40 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 64, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'Raleway', fontWeight: 900, fontSize: 28, letterSpacing: '-0.04em', color: '#fff', marginBottom: 20 }}>
                REV<span style={{ color: 'var(--primary)' }}>VORA</span>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 280, marginBottom: 24 }}>
                Performance-driven SEO and growth agency. Fixed retainer. Performance fee only when we hit your targets.
              </p>
              <a href="mailto:hello@revvora.com" style={{ fontSize: 14, color: 'var(--primary)', fontWeight: 600 }}>hello@revvora.com</a>
            </div>

            <div>
              <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Services</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['SEO', 'AI SEO', 'Link Building', 'PPC', 'Social Ads', 'CRM & Automations', 'Reporting', 'Virtual CMO'].map(l => (
                  <li key={l}><a href="#" style={{ fontSize: 14, color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='var(--text-muted)'}>{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Who We Serve</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['SMBs', 'Local Businesses', 'Growth-Stuck Businesses'].map(l => (
                  <li key={l}><a href="#" style={{ fontSize: 14, color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='var(--text-muted)'}>{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Company</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['About', 'Results', 'Pricing', 'Blog', 'Contact'].map(l => (
                  <li key={l}><a href="#" style={{ fontSize: 14, color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='var(--text-muted)'}>{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>© {new Date().getFullYear()} Revvora. All rights reserved.</p>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Privacy Policy', 'Terms of Service'].map(l => (
                <a key={l} href="#" style={{ fontSize: 12, color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='var(--text-muted)'}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
