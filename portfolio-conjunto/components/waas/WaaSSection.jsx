'use client';

import { useEffect, useRef } from 'react';

const TIERS = [
  {
    id: 'presencia',
    name: 'Presencia',
    price: '79',
    desc: 'La fundación digital de tu empresa.',
    features: ['Infraestructura WaaS', 'Certificado SSL & Hosting', 'Mantenimiento integral'],
  },
  {
    id: 'corporativo',
    name: 'Corporativo',
    price: '149',
    desc: 'Operativa B2B avanzada.',
    features: ['Plataforma completa', 'Base de datos dedicada', 'Panel de gestión'],
    highlight: true,
  },
  {
    id: 'transaccional',
    name: 'Transaccional',
    price: '250',
    desc: 'Ecosistema de ventas y procesos.',
    features: ['Portal E-commerce', 'Integraciones ERP', 'Automatización de flujos'],
  }
];

function PricingCard({ tier }) {
  return (
    <div style={{
      border: 'var(--border-delicate)',
      padding: '3rem',
      display: 'flex', flexDirection: 'column',
      position: 'relative',
      background: tier.highlight ? 'rgba(197, 160, 89, 0.03)' : 'transparent',
    }}>
      {tier.highlight && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'var(--gold)'
        }} />
      )}

      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: tier.highlight ? 'var(--gold)' : 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
        Tier 0{TIERS.indexOf(tier) + 1}
      </div>

      <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 400 }}>
        {tier.name}
      </h3>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '3rem', fontWeight: 300, minHeight: '2.7rem' }}>
        {tier.desc}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem', marginBottom: '3rem' }}>
        <span style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1 }}>{tier.price}</span>
        <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', fontWeight: 300 }}>€</span>
        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.75rem', marginLeft: '0.25rem' }}>/mes</span>
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '4rem' }}>
        {tier.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 300 }}>
            <span style={{ color: tier.highlight ? 'var(--gold)' : 'var(--text-muted)', fontSize: '0.65rem' }}>◆</span> {f}
          </li>
        ))}
      </ul>

      <button className={tier.highlight ? "btn-primary" : "btn-ghost"} style={{ marginTop: 'auto', width: '100%' }}>
        Solicitar
      </button>
    </div>
  );
}

export default function WaaSSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo('.waas-reveal',
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.15,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
          }
        );
      });
    };
    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section id="catalogo" ref={sectionRef} style={{
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      background: 'var(--bg-dark)',
      position: 'relative',
      borderBottom: 'var(--border-delicate)',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div className="waas-reveal" style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div className="section-label">Membresías</div>
          <h2 style={{ color: 'var(--text-primary)' }}>
            Website as a Service.<br />
            <span className="text-gold" style={{ fontStyle: 'italic' }}>Excelencia predecible.</span>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '3rem' }}>
            {['Sin alta de servicio', 'Sin permanencia', 'Tecnología privativa'].map(p => (
              <span key={p} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em'
              }}>
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="waas-reveal" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {TIERS.map(t => <PricingCard key={t.id} tier={t} />)}
        </div>

      </div>
    </section>
  );
}
