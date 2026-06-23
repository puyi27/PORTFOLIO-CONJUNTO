'use client';

import { useEffect, useRef } from 'react';

const PROJECTS = [
  { id: 1, title: 'WaaS Industrial', tag: 'Catálogo', desc: 'Plataforma B2B para manufactura.' },
  { id: 2, title: 'Portal Legal', tag: 'A Medida', desc: 'Extranet corporativa cifrada.' },
  { id: 3, title: 'Dental CRM', tag: 'A Medida', desc: 'Gestión clínica de alto nivel.' },
  { id: 4, title: 'Logistics Hub', tag: 'A Medida', desc: 'Control de flotas en tiempo real.' },
  { id: 5, title: 'WaaS Agro', tag: 'Catálogo', desc: 'E-commerce técnico B2B.' },
  { id: 6, title: 'WaaS Construct', tag: 'Catálogo', desc: 'Gestión de obras y licitaciones.' },
];

function ProjectCard({ project }) {
  return (
    <div style={{
      flex: '0 0 clamp(300px, 25vw, 400px)',
      padding: '0 2rem 2rem 0',
      display: 'flex', flexDirection: 'column',
      cursor: 'pointer',
      position: 'relative',
    }}
    className="proj-card"
    >
      {/* Dynamic Tech Overlay */}
      <div className="proj-json-overlay" style={{
        position: 'absolute', inset: 0, padding: '2rem',
        background: 'var(--bg-panel)', zIndex: 5,
        opacity: 0, transition: 'opacity 0.4s ease',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)',
        pointerEvents: 'none',
      }}>
        <div style={{ color: 'var(--gold)', marginBottom: '1rem' }}>POST /api/v1/projects/{project.id}</div>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
{JSON.stringify({
  status: 200,
  latency: "14ms",
  payload: {
    stack: ["Next.js", "Supabase", "Tailwind"],
    deployed: true,
    scale: "auto"
  }
}, null, 2)}
        </pre>
      </div>

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          color: 'var(--gold)', textTransform: 'uppercase',
          letterSpacing: '0.15em', marginBottom: '1rem',
        }}>
          {project.tag}
        </div>

        <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 400 }}>
          {project.title}
        </h3>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.9rem',
          color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 300,
          marginBottom: '2rem'
        }}>
          {project.desc}
        </p>

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.1em'
          }}>Ver Estudio</span>
          <div className="proj-line" style={{ width: 40, height: 1, background: 'var(--border-delicate)', transition: 'background 0.4s, width 0.4s' }} />
        </div>
      </div>

      <style>{`
        .proj-card:hover .proj-line {
          background: var(--gold) !important;
          width: 80px !important;
        }
        .proj-card:hover .proj-json-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.to('.proj-head', {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        });

        const w = trackRef.current.scrollWidth / 2;
        gsap.to(trackRef.current, {
          x: -w,
          duration: 40,
          ease: 'none',
          repeat: -1,
        });
      }, sectionRef);
    };
    init();
    return () => ctx?.revert();
  }, []);

  const doubled = [...PROJECTS, ...PROJECTS];

  return (
    <section id="proyectos" ref={sectionRef} style={{
      padding: 'var(--section-pad-y) 0',
      background: 'var(--bg-surface)', // Slightly different bg for contrast
      position: 'relative',
      borderBottom: 'var(--border-delicate)',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div className="container" style={{ position: 'relative', zIndex: 10, marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <div className="proj-head section-label" style={{ opacity: 0, transform: 'translateY(20px)' }}>El Portfolio</div>
          <h2 className="proj-head" style={{ color: 'var(--text-primary)', opacity: 0, transform: 'translateY(20px)' }}>
            Infraestructura<br />
            <span className="text-gold" style={{ fontStyle: 'italic' }}>en producción.</span>
          </h2>
        </div>
        <p className="proj-head" style={{
          fontFamily: 'var(--font-body)', color: 'var(--text-muted)',
          fontSize: '1rem', maxWidth: '28rem', lineHeight: 1.8, fontWeight: 300,
          opacity: 0, transform: 'translateY(20px)',
        }}>
          Una selección de productos WaaS y desarrollos a medida que actualmente procesan operaciones reales para nuestros clientes B2B.
        </p>
      </div>

      {/* Carousel */}
      <div style={{ position: 'relative', zIndex: 10, borderTop: 'var(--border-delicate)', borderBottom: 'var(--border-delicate)', padding: '4rem 0' }}>
        <div ref={trackRef} style={{
          display: 'flex', gap: '4rem', padding: '0 var(--section-pad-x)',
          width: 'max-content',
        }}>
          {doubled.map((p, i) => (
            <div key={i} style={{ borderRight: 'var(--border-delicate)' }}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Action */}
      <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '5rem', textAlign: 'center' }}>
        <a href="https://catalogo-alcala-web.vercel.app" target="_blank" rel="noreferrer"
          className="btn-ghost" data-cursor-hover>
          Explorar Catálogo WaaS Complet0
        </a>
      </div>
    </section>
  );
}
