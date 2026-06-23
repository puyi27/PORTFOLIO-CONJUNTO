'use client';

import { useEffect, useRef } from 'react';

const ANGEL_SKILLS = ['React / Next.js', 'WebGL / Three.js', 'GSAP', 'Arquitectura UI/UX'];
const LUCAS_SKILLS = ['Node.js', 'Supabase', 'PostgreSQL', 'Automatización n8n'];

const STATS = [
  { value: '03+', label: 'Años operando' },
  { value: '25+', label: 'Despliegues' },
  { value: '0',   label: 'Caídas de red' },
  { value: '∞',   label: 'Dedicación' },
];

function StatItem({ value, label }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', textAlign: 'center'
    }}>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 300,
        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
        color: 'var(--text-primary)', lineHeight: 1,
        marginBottom: '0.5rem'
      }}>{value}</span>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
        textTransform: 'uppercase', letterSpacing: '0.15em',
        color: 'var(--text-muted)',
      }}>{label}</span>
    </div>
  );
}

function ArchitectCard({ name, role, skills, description }) {
  return (
    <div
      className="about-reveal"
      style={{
        padding: '3rem',
        background: 'var(--bg-surface)',
        border: 'var(--border-delicate)',
        display: 'flex', flexDirection: 'column', gap: '2rem',
        position: 'relative',
        transition: 'border-color 0.4s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
    >
      <div>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.2rem', fontWeight: 400 }}>{name}</h3>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.15em',
        }}>{role}</div>
      </div>

      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '0.9rem',
        color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300
      }}>
        {description}
      </p>

      <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: 'var(--border-delicate)' }}>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {skills.map(skill => (
            <li key={skill} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
              color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}>
              <span style={{ color: 'var(--gold)' }}>—</span> {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo('.about-reveal',
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
    <section id="nosotros" ref={sectionRef} style={{
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      background: 'var(--bg-dark)',
      position: 'relative',
      borderBottom: 'var(--border-delicate)',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '6rem' }}>
          <div className="about-reveal section-label">La Firma</div>
          <h2 className="about-reveal" style={{ color: 'var(--text-primary)', maxWidth: '45rem', margin: '0 auto' }}>
            Ingeniería precisa.<br />
            <span className="text-gold" style={{ fontStyle: 'italic' }}>Diseño sin compromisos.</span>
          </h2>
          <p className="about-reveal" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-muted)',
            maxWidth: '38rem', marginTop: '2rem', lineHeight: 1.8,
          }}>
            Actuamos como un binomio especializado. Construimos productos digitales
            B2B que no solo funcionan con precisión matemática, sino que transmiten 
            autoridad y elegancia en cada interacción.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '6rem',
        }}>
          <ArchitectCard
            name="Ángel Postigo" role="Frontend Architect"
            skills={ANGEL_SKILLS}
            description="Responsable de la capa visual y la interacción. Mi objetivo es traducir la complejidad del negocio en interfaces limpias, intuitivas y con un nivel de pulido técnico reservado para las mejores agencias del mundo."
          />
          <ArchitectCard
            name="Lucas Olías" role="Backend & Cloud Architect"
            skills={LUCAS_SKILLS}
            description="Responsable de la infraestructura y los datos. Arquitecto bases de datos robustas y flujos de automatización que garantizan que el negocio del cliente opere de forma segura y eficiente 24/7."
          />
        </div>

        <div className="about-reveal" style={{
          display: 'flex', justifyContent: 'space-around', gap: '2rem',
          flexWrap: 'wrap',
          padding: '4rem 2rem', borderTop: 'var(--border-delicate)', borderBottom: 'var(--border-delicate)',
        }}>
          {STATS.map((s, i) => <StatItem key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
}
