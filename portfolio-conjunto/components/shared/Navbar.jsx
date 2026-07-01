'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'La Firma',    href: '#inicio' },
  { label: 'Nosotros',    href: '#nosotros' },
  { label: 'Portfolio',   href: '#proyectos' },
  { label: 'Membresías',  href: '#catalogo' },
  { label: 'Contacto',    href: '#contacto' },
];

function MagneticLink({ children, href, onClick }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={() => onClick(href)}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{
        background: 'transparent', border: 'none', cursor: 'pointer',
        fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500,
        color: 'var(--text-muted)', textTransform: 'uppercase',
        letterSpacing: '0.1em', padding: '0.75rem 1.25rem',
        borderRadius: '99px',
        transition: 'color 0.3s, background 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color = 'var(--text-primary)';
      }}
    >
      {children}
    </motion.button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pathname = usePathname();
  const router = useRouter();

  const handleLink = (href) => {
    setMenuOpen(false);
    
    // If not on the homepage, route to /#id instead of just scrolling
    if (pathname !== '/') {
      router.push(`/${href}`);
      return;
    }

    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: scrolled ? 10 : 20, x: '-50%', opacity: 1, scale: scrolled ? 0.95 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', 
          top: 0, 
          left: '50%',
          zIndex: 1000,
          padding: '0.5rem 0.5rem 0.5rem 1.5rem',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '2rem',
          background: 'rgba(10, 8, 32, 0.5)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(251, 251, 254, 0.08)',
          borderRadius: '9999px',
          boxShadow: scrolled ? '0 10px 40px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <button onClick={() => handleLink('#inicio')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0 0.5rem'
        }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: '1.25rem', color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>A&L</span>
        </button>

        {/* Desktop Links */}
        <ul className="nav-desktop" style={{ display: 'flex', listStyle: 'none', gap: '0.25rem', margin: 0, padding: 0 }}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <MagneticLink href={href} onClick={handleLink}>
                {label}
              </MagneticLink>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'var(--gold)', border: 'none', cursor: 'pointer',
          color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.75rem',
          textTransform: 'uppercase', display: 'none', letterSpacing: '0.1em',
          padding: '0.75rem 1.5rem', borderRadius: '99px'
        }}>
          {menuOpen ? 'Cerrar' : 'Menú'}
        </button>

      </motion.nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          style={{
            position: 'fixed', top: '5rem', left: '1rem', right: '1rem', zIndex: 999,
            background: 'var(--bg-panel)', border: 'var(--border-delicate)',
            borderRadius: '24px',
            padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6)'
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <button key={href} onClick={() => handleLink(href)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400,
              color: 'var(--text-primary)', textAlign: 'left', padding: '1rem 0',
              borderBottom: 'var(--border-delicate)'
            }}>
              {label}
            </button>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
