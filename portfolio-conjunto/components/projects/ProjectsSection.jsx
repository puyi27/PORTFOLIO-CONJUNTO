'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PROJECTS = [
  { 
    id: 'waas-ind', 
    title: 'WaaS Industrial', 
    tag: 'Infraestructura', 
    desc: 'Plataforma B2B para manufactura de precisión. Sistema de catálogos paramétricos en tiempo real.',
    stack: ['Next.js', 'PostgreSQL', 'WebGL']
  },
  { 
    id: 'legal-portal', 
    title: 'Portal Legal', 
    tag: 'Extranet', 
    desc: 'Entorno cifrado para el intercambio de documentación legal y firmas electrónicas B2B.',
    stack: ['React', 'Node.js', 'Redis']
  },
  { 
    id: 'dental-crm', 
    title: 'Dental CRM', 
    tag: 'SaaS Médico', 
    desc: 'Gestión integral clínica. Procesamiento de historiales a 60fps con arquitectura Edge.',
    stack: ['Supabase', 'Tailwind', 'Edge']
  },
  { 
    id: 'logistics-hub', 
    title: 'Logistics Hub', 
    tag: 'Dashboard', 
    desc: 'Control de flotas intercontinentales en tiempo real y predicción de rutas.',
    stack: ['WebSockets', 'Go', 'React']
  }
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 0.98, y: -10 }}
      whileTap={{ scale: 0.95 }}
      style={{
        padding: '3.5rem',
        background: 'rgba(255,255,255,0.015)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(251, 251, 254, 0.05)',
        borderRadius: '24px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
      }}
      className="project-card"
    >
      {/* Background Hover Glow */}
      <div className="hover-glow" style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: 'radial-gradient(circle at top right, rgba(47, 39, 206, 0.15), transparent 60%)',
        opacity: 0, transition: 'opacity 0.5s ease', pointerEvents: 'none'
      }} />

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span style={{ 
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.15em',
            color: 'var(--gold)', textTransform: 'uppercase'
          }}>
            {project.tag}
          </span>
          <div className="arrow-icon" style={{ 
            width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--gold-dim)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-muted)', transition: 'all 0.4s ease'
          }}>
            ↗
          </div>
        </div>

        <h3 style={{ 
          color: 'var(--text-primary)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', 
          fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2
        }}>
          {project.title}
        </h3>
      </div>

      <div style={{ marginTop: 'auto' }}>
        <p style={{ 
          fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)', 
          lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem'
        }}>
          {project.desc}
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {project.stack.map(tech => (
            <span key={tech} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.05em',
              color: 'var(--text-primary)', padding: '0.5rem 1rem',
              border: '1px solid rgba(255,255,255,0.05)', borderRadius: '100px',
              background: 'rgba(255,255,255,0.01)'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .project-card:hover .hover-glow { opacity: 1 !important; }
        .project-card:hover .arrow-icon { 
          background: var(--gold); 
          color: white !important; 
          border-color: var(--gold) !important;
          transform: rotate(45deg);
        }
      `}</style>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="proyectos" style={{
      padding: 'var(--section-pad-y) 0',
      background: 'var(--bg-dark)',
      borderBottom: 'var(--border-delicate)',
    }}>
      <div className="container">
        
        {/* Massive Typography Headers */}
        <div style={{ marginBottom: '8rem' }}>
          <div className="section-label">Casos de Estudio</div>
          <h2 style={{ color: 'var(--text-primary)', fontSize: 'clamp(3rem, 6vw, 4.5rem)', maxWidth: '50rem' }}>
            Infraestructura web<br />
            <span className="text-gold" style={{ fontStyle: 'italic' }}>en producción real.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--text-muted)',
            maxWidth: '35rem', marginTop: '2.5rem', lineHeight: 1.8, fontWeight: 300
          }}>
            Desarrollos B2B que actualmente procesan operaciones críticas, ventas B2B y logística sin interrupciones.
          </p>
        </div>

        {/* Dynamic Asymmetric Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem'
        }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Explore More Button */}
        <div style={{ marginTop: '6rem', textAlign: 'center' }}>
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-ghost"
            style={{ display: 'inline-flex', padding: '1.5rem 3rem' }}
          >
            Explorar Repositorio Completo
          </motion.a>
        </div>

      </div>
    </section>
  );
}
