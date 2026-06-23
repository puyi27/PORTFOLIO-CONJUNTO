'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const TopoMesh = dynamic(() => import('./TopoMesh'), { ssr: false });

export default function HeroSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const gsap = (await import('gsap')).default;
      ctx = gsap.context(() => {
        // Slow, elegant reveal
        gsap.to([line1Ref.current, line2Ref.current], {
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.2,
        });

        gsap.fromTo('.hero-fade',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 1.2, delay: 0.6, ease: 'power2.out', stagger: 0.15 }
        );
      }, containerRef);
    };
    init();
    return () => ctx?.revert();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" ref={containerRef} style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // Centered for elegance
      textAlign: 'center',
      overflow: 'hidden',
      borderBottom: 'var(--border-delicate)',
    }}>
      <TopoMesh />

      {/* Subtle vignette over the 3D canvas */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'radial-gradient(circle at center, transparent 0%, var(--bg-dark) 80%)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Badge */}
        <div className="hero-fade" style={{ marginBottom: '2.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            border: 'var(--border-delicate)',
            padding: '0.5rem 1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(10,10,10,0.4)',
            backdropFilter: 'blur(8px)',
            borderRadius: '100px', // Elegant pill shape
          }}>
            <span style={{
              width: 4, height: 4,
              background: 'var(--gold)',
              borderRadius: '50%',
            }} />
            Firma de Ingeniería Digital · B2B
          </span>
        </div>

        {/* Title */}
        <h1 ref={titleRef} style={{
          display: 'flex', flexDirection: 'column', gap: '0.2rem',
          marginBottom: '2.5rem',
        }}>
          <span
            ref={line1Ref}
            style={{
              display: 'block',
              clipPath: 'polygon(0 110%, 100% 110%, 100% 110%, 0 110%)',
              willChange: 'clip-path',
            }}
          >
            Hacemos desarrollo web
          </span>
          <span
            ref={line2Ref}
            style={{
              display: 'block',
              clipPath: 'polygon(0 110%, 100% 110%, 100% 110%, 0 110%)',
              willChange: 'clip-path',
            }}
          >
            <span className="text-gold" style={{ fontStyle: 'italic' }}>de alto rendimiento.</span>
          </span>
        </h1>

        {/* Desc */}
        <p className="hero-fade" style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
          color: 'var(--text-muted)',
          maxWidth: '38rem',
          lineHeight: 1.8,
          marginBottom: '3.5rem',
        }}>
          Somos Ángel y Lucas. Especialistas en forjar infraestructura digital 
          escalable y exquisita para empresas que exigen excelencia.
          <br /><br />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
            Next.js / Node.js / Supabase / WebGL
          </span>
        </p>

        {/* Buttons */}
        <div className="hero-fade" style={{
          display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center'
        }}>
          <button onClick={() => scrollTo('proyectos')} className="btn-primary" data-cursor-hover>
            Ver Proyectos
          </button>
          <button onClick={() => scrollTo('contacto')} className="btn-ghost" data-cursor-hover>
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
}
