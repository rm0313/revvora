import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICE_LINKS = [
  { label: 'SEO', slug: 'seo', desc: 'Organic rankings that compound' },
  { label: 'AI SEO', slug: 'ai-seo', desc: 'Optimized for AI-powered search' },
  { label: 'Link Building', slug: 'link-building', desc: 'Authority backlinks, no shortcuts' },
  { label: 'PPC', slug: 'ppc', desc: 'Ad spend that returns more than it costs' },
  { label: 'Social Media Ads', slug: 'social-media-ads', desc: 'Leads, not just likes' },
  { label: 'CRM & Automations', slug: 'crm-automations', desc: 'Stop losing leads after capture' },
  { label: 'CRO', slug: 'cro', desc: 'Fix what kills the sale' },
  { label: 'Programmatic Ads', slug: 'programmatic-ads', desc: 'Reach buyers at scale' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'Who We Serve', href: '#who-we-serve' },
    { label: 'Results', href: '#results' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '14px 40px' : '24px 40px',
        background: scrolled ? 'rgba(8,8,8,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 900, fontSize: 22, letterSpacing: '-0.04em', color: '#fff', textDecoration: 'none' }}>
        REV<span style={{ color: 'var(--primary)' }}>VORA</span>
      </Link>

      {/* Desktop Nav */}
      <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">

        {/* Services dropdown */}
        <div ref={dropdownRef} style={{ position: 'relative' }}>
          <button
            onClick={() => setServicesOpen(o => !o)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: 600,
              color: servicesOpen ? '#fff' : 'var(--text-muted)',
              letterSpacing: '0.04em', textTransform: 'uppercase',
              transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 6, padding: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => { if (!servicesOpen) e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            Services
            <motion.svg
              animate={{ rotate: servicesOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            >
              <path d="M6 9l6 6 6-6" />
            </motion.svg>
          </button>

          <AnimatePresence>
            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                style={{
                  position: 'absolute', top: 'calc(100% + 16px)', left: '50%', transform: 'translateX(-50%)',
                  background: '#0d0d0d',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 12,
                  padding: 8,
                  width: 480,
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  gap: 2,
                  boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
                }}
              >
                {/* Top accent */}
                <div style={{ gridColumn: '1 / -1', height: 2, background: 'linear-gradient(90deg, var(--primary), transparent)', borderRadius: '4px 4px 0 0', marginBottom: 4 }} />

                {SERVICE_LINKS.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    onClick={() => setServicesOpen(false)}
                    style={{
                      display: 'flex', flexDirection: 'column', gap: 3,
                      padding: '12px 14px', borderRadius: 8,
                      textDecoration: 'none', transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>{s.label}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.4 }}>{s.desc}</span>
                  </Link>
                ))}

                {/* Bottom CTA row */}
                <div style={{ gridColumn: '1 / -1', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 4, paddingTop: 8, paddingBottom: 4, paddingLeft: 6 }}>
                  <Link
                    to="/#services"
                    onClick={() => setServicesOpen(false)}
                    style={{ fontSize: 11, fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}
                  >
                    View All Services
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Other nav links */}
        {navLinks.map(l => (
          <a key={l.label} href={l.href} style={{
            fontSize: 13, fontWeight: 600, color: 'var(--text-muted)',
            letterSpacing: '0.04em', textTransform: 'uppercase',
            transition: 'color 0.2s', textDecoration: 'none',
          }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >{l.label}</a>
        ))}
      </nav>

      {/* CTA */}
      <button className="btn-primary" style={{ padding: '10px 22px', fontSize: 13 }}>
        Get Free Audit
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </button>
    </motion.header>
  );
}
