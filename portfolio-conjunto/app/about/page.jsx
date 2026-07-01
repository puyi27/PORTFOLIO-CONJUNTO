'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, LayoutTemplate, Database } from 'lucide-react';

const ANGEL_SKILLS = ['React / Next.js', 'WebGL / Three.js', 'Framer Motion', 'UI/UX Architecture', 'TailwindCSS', 'GSAP'];
const LUCAS_SKILLS = ['Node.js', 'Supabase', 'PostgreSQL', 'n8n Automation', 'Docker', 'AWS / Vercel'];

const STATS = [
  { value: '03+', label: 'Años Operando' },
  { value: '25+', label: 'Sistemas Desplegados' },
  { value: '0',   label: 'Downtime B2B' },
  { value: '100%', label: 'Precisión Técnica' },
];

function StatItem({ value, label, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        padding: '2rem', background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px'
      }}
    >
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(2.5rem,4vw,3.5rem)', color: 'var(--text-primary)', lineHeight: 1, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
        {value}
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold)' }}>
        {label}
      </span>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-primary)', paddingTop: 'calc(var(--section-pad-y) * 1.5)', paddingBottom: 'var(--section-pad-y)' }}>
      
      <main className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '5rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto 5rem auto' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="section-label"
          >
            Nuestra Esencia
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1.5rem' }}
          >
            No usamos plantillas. <br />
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Escribimos código nativo.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto' }}
          >
            Combinamos una obsesión enfermiza por la estética frontend con arquitecturas backend sólidas como rocas. El resultado son productos digitales B2B inquebrantables.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '6rem' }}>
          {STATS.map((s, i) => <StatItem key={i} index={i} {...s} />)}
        </div>

        {/* The Architects - Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          
          {/* Angel Postigo - Frontend Architect */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ padding: '3rem', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Ángel Postigo</h3>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase' }}>Frontend Architect</div>
                </div>
                <div style={{ width: 48, height: 48, borderRadius: '16px', background: 'var(--gold-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--gold)', color: 'var(--accent)' }}>
                  <LayoutTemplate size={24} />
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Responsable de la capa visual y la interacción. Traduzco la complejidad técnica del negocio en interfaces hiper-fluidas, minimalistas y con un nivel de pulido técnico reservado para el ecosistema venture-backed.
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Tech Stack Principal</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {ANGEL_SKILLS.map(skill => (
                    <span key={skill} style={{ padding: '0.4rem 0.8rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem', color: 'var(--accent)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Iframe Preview */}
            <div style={{ position: 'relative', aspectRatio: '16/10', background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}>
                <a 
                  href="https://porfolio-apr.vercel.app/#inicio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', borderRadius: '100px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', textDecoration: 'none' }}
                >
                  Visitar Portfolio <ArrowUpRight size={14} style={{ marginLeft: '0.5rem' }} />
                </a>
              </div>
              <iframe 
                src="https://porfolio-apr.vercel.app/#inicio" 
                style={{ width: '100%', height: '100%', border: 'none', opacity: 0.8, transition: 'opacity 0.5s' }}
                title="Portfolio de Ángel"
                loading="lazy"
                onMouseEnter={(e) => e.target.style.opacity = 1}
                onMouseLeave={(e) => e.target.style.opacity = 0.8}
              />
            </div>
          </motion.div>

          {/* Lucas Olias - Backend Architect */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ padding: '3rem', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Lucas Olías</h3>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase' }}>Backend & Cloud Architect</div>
                </div>
                <div style={{ width: 48, height: 48, borderRadius: '16px', background: 'var(--gold-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--gold)', color: 'var(--accent)' }}>
                  <Database size={24} />
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Responsable de la infraestructura y los datos. Diseño arquitecturas relacionales robustas, APIs hiper-rápidas y flujos de automatización que garantizan que el negocio opere de forma inquebrantable 24/7.
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Tech Stack Principal</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {LUCAS_SKILLS.map(skill => (
                    <span key={skill} style={{ padding: '0.4rem 0.8rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem', color: 'var(--accent)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Iframe Preview */}
            <div style={{ position: 'relative', aspectRatio: '16/10', background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}>
                <a 
                  href="https://portfolio-six-pink-86.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', borderRadius: '100px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', textDecoration: 'none' }}
                >
                  Visitar Portfolio <ArrowUpRight size={14} style={{ marginLeft: '0.5rem' }} />
                </a>
              </div>
              <iframe 
                src="https://portfolio-six-pink-86.vercel.app/" 
                style={{ width: '100%', height: '100%', border: 'none', opacity: 0.8, transition: 'opacity 0.5s' }}
                title="Portfolio de Lucas"
                loading="lazy"
                onMouseEnter={(e) => e.target.style.opacity = 1}
                onMouseLeave={(e) => e.target.style.opacity = 0.8}
              />
            </div>
          </motion.div>

        </div>

      </main>
    </div>
  );
}
