'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const BEST_DEMOS = [
  { 
    id: 'saas', 
    title: 'SaaS Platform', 
    tag: 'B2B Infrastructure', 
    desc: 'Panel de control ultra-rápido, telemetría en tiempo real y arquitectura orientada a eventos.',
    stack: ['Next.js', 'PostgreSQL', 'Framer'],
    colSpan: 2, rowSpan: 2,
    image: '/images/demo/saas/hero.jpg',
    href: '/demo/saas'
  },
  { 
    id: 'creativo', 
    title: 'K. Nakamura', 
    tag: 'Art Direction', 
    desc: 'Portfolio interactivo inmersivo, WebGL y animaciones hiper-fluidas con GSAP/Framer Motion.',
    stack: ['WebGL', 'GSAP', 'React'],
    colSpan: 1, rowSpan: 2,
    image: '/images/demo/creativo/1.jpg',
    href: '/demo/creativo'
  },
  { 
    id: 'premium', 
    title: 'Maison Noir', 
    tag: 'Luxury', 
    desc: 'Minimalismo escandinavo, tipografía serif refinada y micro-interacciones sutiles para marcas de alto nivel.',
    stack: ['Tailwind', 'Motion', 'Next.js'],
    colSpan: 1, rowSpan: 2,
    image: '/images/demo/premium/hero.jpg',
    href: '/demo/premium'
  },
  { 
    id: 'tech', 
    title: 'CyberOS', 
    tag: 'Cyberphysical', 
    desc: 'Interfaces oscuras, componentes Sci-Fi y renderizados de datos en 3D.',
    stack: ['Three.js', 'React', 'Zustand'],
    colSpan: 1, rowSpan: 1,
    image: '/images/demo/tech/hero.jpg',
    href: '/demo/tech'
  },
  { 
    id: 'gaming', 
    title: 'Vanguard', 
    tag: 'E-Sports', 
    desc: 'Dinámicas de alta energía, neon glow y animaciones reactivas para la generación Z.',
    stack: ['Framer', 'Tailwind', 'Supabase'],
    colSpan: 1, rowSpan: 1,
    image: '/images/demo/gaming/hero.jpg',
    href: '/demo/gaming'
  },
  { 
    id: 'inmobiliaria', 
    title: 'Aura Estates', 
    tag: 'Architecture', 
    desc: 'Visualización de espacios expansivos, galerías interactivas y scroll hiper-suave.',
    stack: ['Lenis', 'GSAP', 'Next.js'],
    colSpan: 2, rowSpan: 1,
    image: '/images/demo/inmobiliaria/hero.jpg',
    href: '/demo/inmobiliaria'
  }
];

function DemoBentoCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Link href={project.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 0.98, y: -5 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'rgba(5, 3, 21, 0.4)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          height: '100%'
        }}
        className={`bento-card bento-span-c${project.colSpan} bento-span-r${project.rowSpan} group`}
      >
        {/* Background Image Preview */}
        <div 
          className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${project.image || ''}), linear-gradient(135deg, rgba(47,39,206,0.2) 0%, rgba(5,3,21,1) 100%)`, 
            filter: 'grayscale(60%)',
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 
          }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(5,3,21,1) 0%, rgba(5,3,21,0.8) 50%, transparent 100%)', zIndex: 0 }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <span style={{ 
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.15em',
              color: 'var(--accent)', textTransform: 'uppercase',
              background: 'rgba(222, 220, 255, 0.1)', padding: '0.4rem 0.8rem', borderRadius: '100px',
              border: '1px solid rgba(222, 220, 255, 0.2)'
            }}>
              {project.tag}
            </span>
            <div className="arrow-icon" style={{ 
              width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-primary)', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
              ↗
            </div>
          </div>

          <div style={{ marginTop: 'auto' }}>
            <h3 style={{ 
              color: 'var(--text-primary)', fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', 
              fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1rem'
            }}>
              {project.title}
            </h3>
            
            <p style={{ 
              fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', 
              lineHeight: 1.7, fontWeight: 300, marginBottom: '2rem',
              maxWidth: project.colSpan > 1 ? '80%' : '100%'
            }}>
              {project.desc}
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.stack.map(tech => (
                <span key={tech} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.05em',
                  color: 'var(--text-primary)', padding: '0.4rem 0.8rem',
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px',
                  background: 'rgba(255,255,255,0.02)'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function ProjectsSection() {
  return (
    <section id="demos" style={{
      padding: 'var(--section-pad-y) 0',
      background: 'var(--bg-dark)',
      borderBottom: 'var(--border-delicate)',
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '6rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="section-label">Showcase</div>
          <h2 style={{ color: 'var(--text-primary)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', maxWidth: '55rem', lineHeight: 1.1 }}>
            Nuestra carta de <span className="text-primary" style={{ fontStyle: 'italic', color: 'var(--primary)' }}>presentación.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--text-muted)',
            maxWidth: '40rem', marginTop: '2rem', lineHeight: 1.8, fontWeight: 300
          }}>
            Explora una selección de nuestras mejores demostraciones técnicas. Interfaces ultra-pulidas, animaciones a 60fps y estéticas vanguardistas.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="portfolio-bento">
          {BEST_DEMOS.map((p, i) => (
            <DemoBentoCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div style={{ marginTop: '6rem', textAlign: 'center' }}>
          <Link href="/demos">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              style={{ display: 'inline-flex', padding: '1.25rem 3rem', background: 'var(--primary)', color: '#fff', borderRadius: '100px', fontWeight: 500, textDecoration: 'none' }}
            >
              Explorar Catálogo Completo (6 Demos)
            </motion.div>
          </Link>
        </div>

      </div>

      <style>{`
        .portfolio-bento {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(320px, auto);
          gap: 1.5rem;
        }
        .bento-span-c2 { grid-column: span 2; }
        .bento-span-c1 { grid-column: span 1; }
        .bento-span-r2 { grid-row: span 2; }
        .bento-span-r1 { grid-row: span 1; }

        .bento-card:hover .arrow-icon { 
          background: var(--primary) !important; 
          color: white !important; 
          border-color: var(--primary) !important;
          transform: rotate(45deg);
        }

        @media (max-width: 1024px) {
          .portfolio-bento { grid-template-columns: repeat(2, 1fr); }
          .bento-span-c1 { grid-column: span 1; }
          .bento-span-c2 { grid-column: span 2; }
          .bento-span-r2 { grid-row: span 1; } /* Flatten height on medium */
        }
        @media (max-width: 640px) {
          .portfolio-bento { display: flex; flex-direction: column; gap: 1rem; }
        }
      `}</style>
    </section>
  );
}
