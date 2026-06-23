'use client';

import { useEffect, useRef, useState } from 'react';

const LOG_MESSAGES = [
  '[200] GET /api/v1/auth/session - 12ms',
  '[201] POST /rest/v1/leads_showroom - 45ms',
  '[SUPABASE] Realtime connection established.',
  '[N8N] Webhook triggered: handle_new_lead',
  '[OPENAI] Streaming chat completion...',
  '[EDGE] Cache HIT: /catalogo/industrial',
  '[STRIPE] Event checkout.session.completed',
  '[DB] Query: SELECT * FROM users WHERE active = true - 8ms',
];

function CodeLogger() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => {
        const newLogs = [...prev, LOG_MESSAGES[i % LOG_MESSAGES.length]];
        if (newLogs.length > 6) newLogs.shift();
        return newLogs;
      });
      i++;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
      color: 'var(--text-muted)', lineHeight: 1.8,
      background: 'rgba(5, 5, 5, 0.5)', padding: '1.5rem',
      borderRadius: 0, height: '100%', display: 'flex', flexDirection: 'column',
      justifyContent: 'flex-end', overflow: 'hidden', border: 'var(--border-delicate)',
      position: 'relative'
    }}>
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--gold)' }}>● Live</div>
      {logs.map((log, i) => (
        <div key={i} className="fade-in-log" style={{ animation: 'fadeLog 0.3s ease forwards' }}>
          {log.includes('[200]') || log.includes('[201]') || log.includes('HIT') 
            ? <span style={{ color: '#4ade80' }}>{log}</span>
            : log.includes('STRIPE') || log.includes('OPENAI') || log.includes('N8N') 
            ? <span style={{ color: 'var(--gold)' }}>{log}</span>
            : log}
        </div>
      ))}
      <style>{`
        @keyframes fadeLog {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function JsonDisplay() {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
      color: 'var(--text-muted)', lineHeight: 1.6,
      background: 'rgba(5, 5, 5, 0.5)', padding: '1.5rem',
      border: 'var(--border-delicate)', height: '100%'
    }}>
<pre style={{ margin: 0 }}>
{`{
  "stack": {
    "framework": "Next.js 14",
    "rendering": "RSC + SSR",
    "styling": "TailwindCSS",
    "animation": "GSAP / Lenis"
  },
  "performance": {
    "lighthouse": 100,
    "cls": 0,
    "lcp": "< 0.8s"
  }
}`}
</pre>
    </div>
  );
}

export default function EcosystemSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo('.eco-reveal',
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: 'power2.out', stagger: 0.15,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
          }
        );
      });
    };
    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section id="ecosistema" ref={sectionRef} style={{
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      background: 'var(--bg-surface)',
      position: 'relative',
      borderBottom: 'var(--border-delicate)',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Header */}
        <div className="eco-reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '6rem' }}>
          <div className="section-label">Infraestructura</div>
          <h2 style={{ color: 'var(--text-primary)', maxWidth: '50rem' }}>
            El motor bajo el capó.<br />
            <span className="text-gold" style={{ fontStyle: 'italic' }}>Stack de nueva generación.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem',
            color: 'var(--text-muted)', maxWidth: '42rem', marginTop: '2rem', lineHeight: 1.8, fontWeight: 300
          }}>
            No dependemos de plugins pesados ni CMS anticuados. Construimos sobre
            arquitecturas serverless, bases de datos en tiempo real y APIs de 
            inteligencia artificial para escalar sin límites.
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1.5rem',
          gridAutoRows: 'minmax(280px, auto)'
        }}>
          
          {/* Card 1: Backend / BaaS (Large) */}
          <div className="eco-reveal" style={{
            gridColumn: 'span 8',
            border: 'var(--border-delicate)',
            padding: '3rem',
            display: 'flex', gap: '3rem',
            background: 'rgba(255,255,255,0.02)',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Data & Auth</div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem' }}>BaaS en Tiempo Real</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
                PostgreSQL hiperescalable. Suscripciones a la base de datos en milisegundos y Edge Functions para lógica distribuida.
              </p>
              <div style={{ display: 'flex', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-primary)' }}>
                <span>[ SUPABASE ]</span>
                <span>[ NODE.JS ]</span>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 250 }}>
              <CodeLogger />
            </div>
          </div>

          {/* Card 2: Frontend (Small) */}
          <div className="eco-reveal" style={{
            gridColumn: 'span 4',
            border: 'var(--border-delicate)',
            padding: '3rem',
            background: 'rgba(255,255,255,0.02)',
            display: 'flex', flexDirection: 'column'
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Frontend</div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 400, marginBottom: '1rem' }}>Rendimiento Extremo</h3>
            <div style={{ flex: 1, marginTop: '1rem' }}>
              <JsonDisplay />
            </div>
          </div>

          {/* Card 3: Automation & AI (Large) */}
          <div className="eco-reveal" style={{
            gridColumn: 'span 7',
            border: 'var(--border-delicate)',
            padding: '3rem',
            background: 'rgba(255,255,255,0.02)',
            position: 'relative'
          }}>
            <div style={{ position: 'absolute', top: '3rem', right: '3rem', opacity: 0.1 }}>
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/><path d="M8 12h.01"/><path d="M16 12h.01"/>
              </svg>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>AI & Ops</div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem' }}>Autómatas y LLMs</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300, maxWidth: '28rem' }}>
              Sustituimos el trabajo manual con flujos n8n y modelos fundacionales (OpenAI / Anthropic). Desde clasificación de leads hasta análisis predictivo integrado en el CRM.
            </p>
            <div style={{ display: 'flex', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-primary)', marginTop: '2.5rem' }}>
              <span>[ n8n ]</span>
              <span>[ OPENAI ]</span>
              <span>[ STRIPE ]</span>
            </div>
          </div>

          {/* Card 4: WebGL (Small) */}
          <div className="eco-reveal" style={{
            gridColumn: 'span 5',
            border: 'var(--border-delicate)',
            padding: '3rem',
            background: 'rgba(255,255,255,0.02)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Motion & 3D</div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 400, marginBottom: '1rem' }}>Física y Shaders</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300 }}>
              Cálculos matemáticos en la GPU mediante WebGL y react-three-fiber para crear experiencias inmersivas imposibles con CSS tradicional.
            </p>
          </div>

        </div>

      </div>
      
      <style>{`
        @media (max-width: 1024px) {
          div[style*="gridColumn: 'span 8'"] { grid-column: span 12 !important; }
          div[style*="gridColumn: 'span 4'"] { grid-column: span 12 !important; }
          div[style*="gridColumn: 'span 7'"] { grid-column: span 12 !important; }
          div[style*="gridColumn: 'span 5'"] { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}
