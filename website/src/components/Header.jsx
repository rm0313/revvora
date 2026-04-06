import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Who We Serve', href: '#who-we-serve' },
    { label: 'Results', href: '#results' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '14px 40px' : '24px 40px',
        background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <div style={{ fontFamily: 'Raleway,sans-serif', fontWeight: 900, fontSize: 22, letterSpacing: '-0.04em', color: '#fff' }}>
        REV<span style={{ color: 'var(--primary)' }}>VORA</span>
      </div>

      {/* Desktop Nav */}
      <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
        {links.map(l => (
          <a key={l.label} href={l.href} style={{
            fontSize: 13, fontWeight: 600, color: 'var(--text-muted)',
            letterSpacing: '0.04em', textTransform: 'uppercase',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >{l.label}</a>
        ))}
      </nav>

      {/* CTA */}
      <button className="btn-primary" style={{ padding: '10px 22px', fontSize: 13 }}>
        Get Free Audit
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </motion.header>
  );
}
