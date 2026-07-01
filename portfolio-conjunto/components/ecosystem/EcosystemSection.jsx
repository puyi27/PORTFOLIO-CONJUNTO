'use client';

import { motion } from 'framer-motion';
import { Database, LayoutTemplate, Workflow, Cpu, Shield, Zap } from 'lucide-react';

const BENTO_ITEMS = [
  {
    id: 'frontend',
    colSpan: 2, rowSpan: 2,
    icon: <LayoutTemplate size={32} color="var(--gold)" />,
    title: 'Frontend Architecture',
    desc: 'Construimos interfaces ultrarrápidas con Next.js y React. Optimizamos el renderizado para un Time To Interactive (TTI) instantáneo.',
    tags: ['Next.js 14', 'Framer Motion', 'WebGL']
  },
  {
    id: 'backend',
    colSpan: 1, rowSpan: 2,
    icon: <Database size={32} color="var(--accent)" />,
    title: 'PostgreSQL & Supabase',
    desc: 'Arquitectura de datos relacional altamente estructurada y escalable. Cero pérdida de datos.',
    tags: ['RLS Auth', 'Edge Functions']
  },
  {
    id: 'workflow',
    colSpan: 1, rowSpan: 1,
    icon: <Workflow size={24} color="#27c93f" />,
    title: 'Automatización',
    desc: 'n8n & Webhooks para conectar todo tu ecosistema.',
    tags: ['n8n']
  },
  {
    id: 'performance',
    colSpan: 1, rowSpan: 1,
    icon: <Zap size={24} color="#ffbd2e" />,
    title: 'Rendimiento',
    desc: 'Auditorías de Lighthouse al 100%.',
    tags: ['Vercel']
  },
  {
    id: 'security',
    colSpan: 1, rowSpan: 1,
    icon: <Shield size={24} color="#ff5f56" />,
    title: 'Seguridad B2B',
    desc: 'Encriptación y control de acceso robusto.',
    tags: ['JWT']
  }
];

function BentoCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 0.98 }}
      className={`bento-span-c${item.colSpan} bento-span-r${item.rowSpan}`}
      style={{
        background: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(12px)',
        border: 'var(--border-delicate)',
        borderRadius: '24px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '16px', display: 'inline-flex' }}>
          {item.icon}
        </div>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 500 }}>
          {item.title}
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 300 }}>
          {item.desc}
        </p>
      </div>

      <div style={{ position: 'relative', zIndex: 10, marginTop: '2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {item.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gold)',
            background: 'var(--gold-dim)', padding: '0.25rem 0.75rem', borderRadius: '99px', letterSpacing: '0.1em'
          }}>
            {tag}
          </span>
        ))}
      </div>
      
      {/* Subtle Glow on hover via CSS pseudo-element is complex in inline styles, using standard CSS for hover glow is better. We will rely on Framer Motion scaling here. */}
    </motion.div>
  );
}

export default function EcosystemSection() {
  return (
    <section id="ecosistema" style={{
      padding: 'var(--section-pad-y) 0',
      background: 'var(--bg-surface)',
      borderBottom: 'var(--border-delicate)',
      position: 'relative'
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">El Ecosistema</div>
          <h2 style={{ color: 'var(--text-primary)', maxWidth: '40rem', margin: '0 auto' }}>
            Nuestra ventaja <span className="text-gold" style={{ fontStyle: 'italic' }}>técnica.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', color: 'var(--text-muted)',
            fontSize: '1rem', maxWidth: '35rem', margin: '1.5rem auto 0', lineHeight: 1.8, fontWeight: 300
          }}>
            No usamos plantillas ni constructores visuales lentos. Escribimos código moderno, 
            diseñamos bases de datos relacionales robustas y optimizamos cada milisegundo.
          </p>
        </div>

        <div className="bento-grid">
          {BENTO_ITEMS.map((item, i) => (
            <BentoCard key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(180px, auto);
          gap: 1.5rem;
        }
        .bento-span-c2 { grid-column: span 2; }
        .bento-span-c1 { grid-column: span 1; }
        .bento-span-r2 { grid-row: span 2; }
        .bento-span-r1 { grid-row: span 1; }

        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr); }
          .bento-span-c2 { grid-column: span 2; }
        }
        @media (max-width: 600px) {
          .bento-grid { display: flex; flex-direction: column; gap: 1rem; }
        }
      `}</style>
    </section>
  );
}
