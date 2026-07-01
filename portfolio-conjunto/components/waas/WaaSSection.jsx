'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const TIERS = [
  {
    id: 'presencia',
    name: 'Presencia',
    price: '79',
    desc: 'La fundación digital inquebrantable de tu empresa.',
    features: ['Infraestructura WaaS', 'Certificado SSL & Hosting', 'Mantenimiento integral'],
  },
  {
    id: 'corporativo',
    name: 'Corporativo',
    price: '149',
    desc: 'Operativa B2B avanzada con infraestructura Edge.',
    features: ['Plataforma completa', 'Base de datos dedicada', 'Panel de gestión avanzado'],
    highlight: true,
  },
  {
    id: 'transaccional',
    name: 'Transaccional',
    price: '250',
    desc: 'Ecosistema de ventas y procesos automatizados.',
    features: ['Portal E-commerce', 'Integraciones ERP', 'Automatización de flujos con n8n'],
  }
];

function PricingCard({ tier, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      whileHover={{ y: -10, scale: 1.02 }}
      style={{
        border: tier.highlight ? '1px solid rgba(47, 39, 206, 0.4)' : 'var(--border-delicate)',
        background: tier.highlight ? 'linear-gradient(180deg, rgba(47, 39, 206, 0.05) 0%, rgba(255,255,255,0.01) 100%)' : 'rgba(255,255,255,0.01)',
        backdropFilter: 'blur(24px)',
        borderRadius: '24px',
        padding: '3.5rem',
        display: 'flex', flexDirection: 'column',
        position: 'relative',
        boxShadow: tier.highlight ? '0 30px 60px rgba(47, 39, 206, 0.1)' : '0 10px 30px rgba(0,0,0,0.2)',
      }}
    >
      {tier.highlight && (
        <div style={{
          position: 'absolute', top: -1, left: '10%', right: '10%', height: 2,
          background: 'linear-gradient(90deg, transparent, var(--gold), transparent)'
        }} />
      )}

      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: tier.highlight ? 'var(--gold)' : 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
        Tier 0{TIERS.indexOf(tier) + 1}
      </div>

      <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 500, letterSpacing: '-0.02em' }}>
        {tier.name}
      </h3>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '3rem', fontWeight: 300, minHeight: '3rem', lineHeight: 1.6 }}>
        {tier.desc}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem', marginBottom: '3rem' }}>
        <span style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontFamily: 'var(--font-display)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1, letterSpacing: '-0.04em' }}>{tier.price}</span>
        <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', fontWeight: 300 }}>€</span>
        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.75rem', marginLeft: '0.5rem', letterSpacing: '0.05em' }}>/mes</span>
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '4rem', padding: 0 }}>
        {tier.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 300 }}>
            <CheckCircle2 size={16} color={tier.highlight ? 'var(--gold)' : 'var(--text-muted)'} style={{ flexShrink: 0 }} /> 
            {f}
          </li>
        ))}
      </ul>

      <motion.button 
        whileTap={{ scale: 0.95 }}
        className={tier.highlight ? "btn-primary" : "btn-ghost"} 
        style={{ marginTop: 'auto', width: '100%' }}
      >
        Solicitar Acceso
      </motion.button>
    </motion.div>
  );
}

export default function WaaSSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="catalogo" style={{
      padding: 'var(--section-pad-y) 0',
      background: 'var(--bg-dark)',
      position: 'relative',
      borderBottom: 'var(--border-delicate)',
      overflow: 'hidden'
    }}>
      {/* Background SVG abstract blob (fffuel.co style) */}
      <div style={{
        position: 'absolute', top: '20%', left: '-10%', width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(47,39,206,0.03) 0%, rgba(5,3,21,0) 70%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '8rem' }}
        >
          <div className="section-label">Membresías</div>
          <h2 style={{ color: 'var(--text-primary)', fontSize: 'clamp(3rem, 6vw, 4.5rem)', maxWidth: '50rem', margin: '0 auto' }}>
            Website as a Service.<br />
            <span className="text-gold" style={{ fontStyle: 'italic' }}>Excelencia predecible.</span>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginTop: '4rem' }}>
            {['Sin coste de setup', 'Sin permanencia', 'Tecnología privativa'].map(p => (
              <span key={p} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                color: 'var(--text-primary)', background: 'rgba(255,255,255,0.02)',
                padding: '0.75rem 1.5rem', borderRadius: '100px',
                border: 'var(--border-delicate)',
                textTransform: 'uppercase', letterSpacing: '0.15em'
              }}>
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {TIERS.map((t, i) => <PricingCard key={t.id} tier={t} index={i} />)}
        </div>

      </div>
    </section>
  );
}
