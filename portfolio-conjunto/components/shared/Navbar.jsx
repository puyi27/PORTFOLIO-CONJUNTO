'use client';

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'La Firma',    href: '#inicio' },
  { label: 'Nosotros',    href: '#nosotros' },
  { label: 'Portfolio',   href: '#proyectos' },
  { label: 'Membresías',  href: '#catalogo' },
  { label: 'Contacto',    href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: '5rem', padding: '0 var(--section-pad-x)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? 'var(--border-delicate)' : '1px solid transparent',
      transition: 'background 0.5s, border-color 0.5s, backdrop-filter 0.5s',
    }}>
      <button onClick={() => handleLink('#inicio')} data-cursor-hover style={{
        background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: '1rem',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 400,
          fontSize: '1.25rem', color: 'var(--text-primary)',
        }}>A&L</span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
          color: 'var(--text-muted)', textTransform: 'uppercase',
          paddingLeft: '1rem', borderLeft: 'var(--border-delicate)',
          textAlign: 'left', lineHeight: 1.4, letterSpacing: '0.15em',
        }}>
          Ingeniería<br />Digital
        </span>
      </button>

      {/* Desktop Links */}
      <ul className="nav-desktop" style={{ display: 'flex', listStyle: 'none', gap: '3rem' }}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <button onClick={() => handleLink(href)} data-cursor-hover style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 300,
              color: 'var(--text-muted)', textTransform: 'uppercase',
              letterSpacing: '0.15em', transition: 'color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
        textTransform: 'uppercase', display: 'none', letterSpacing: '0.1em'
      }}>
        {menuOpen ? 'Cerrar' : 'Menú'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '5rem', left: 0, right: 0,
          background: 'var(--bg-surface)', borderBottom: 'var(--border-delicate)',
          padding: '2rem var(--section-pad-x)', display: 'flex', flexDirection: 'column', gap: '1.5rem',
        }}>
          {NAV_LINKS.map(({ label, href }) => (
            <button key={href} onClick={() => handleLink(href)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 300,
              color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.15em',
              textAlign: 'left', padding: '0.5rem 0', borderBottom: 'var(--border-delicate)'
            }}>
              {label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
