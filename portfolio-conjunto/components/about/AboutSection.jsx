'use client';

import { motion } from 'framer-motion';

const ANGEL_SKILLS = ['React / Next.js', 'WebGL / Three.js', 'Framer Motion', 'UI/UX Architecture'];
const LUCAS_SKILLS = ['Node.js', 'Supabase', 'PostgreSQL', 'n8n Automation'];

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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center',
        padding: '2rem'
      }}
    >
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 400,
        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
        color: 'var(--text-primary)', lineHeight: 1,
        marginBottom: '0.5rem', letterSpacing: '-0.04em'
      }}>{value}</span>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
        textTransform: 'uppercase', letterSpacing: '0.2em',
        color: 'var(--text-muted)',
      }}>{label}</span>
    </motion.div>
  );
}

function ArchitectCard({ name, role, skills, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -8, scale: 0.98, borderColor: 'var(--gold)', boxShadow: '0 20px 40px rgba(47, 39, 206, 0.15)' }}
      style={{
        padding: '3rem',
        background: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(12px)',
        border: 'var(--border-delicate)',
        borderRadius: '24px',
        display: 'flex', flexDirection: 'column', gap: '2rem',
        transition: 'border-color 0.4s, box-shadow 0.4s',
        cursor: 'default'
      }}
    >
      <div>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 500, letterSpacing: '-0.02em' }}>{name}</h3>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
          color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.15em',
        }}>{role}</div>
      </div>

      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '1rem',
        color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300
      }}>
        {description}
      </p>

      <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: 'var(--border-delicate)' }}>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0, margin: 0 }}>
          {skills.map(skill => (
            <li key={skill} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.05em',
              color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.75rem'
            }}>
              <span style={{ color: 'var(--gold)', width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} /> 
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="nosotros" style={{
      padding: 'var(--section-pad-y) 0',
      background: 'var(--bg-dark)',
      position: 'relative',
      borderBottom: 'var(--border-delicate)',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Massive Typography & Negative Space (Manus.im style) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '8rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            La Firma
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: 'var(--text-primary)', maxWidth: '50rem', margin: '0 auto', fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.1 }}
          >
            Ingeniería precisa.<br />
            <span className="text-gold" style={{ fontStyle: 'italic' }}>Diseño sin compromisos.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              maxWidth: '40rem', marginTop: '2.5rem', lineHeight: 1.8,
            }}
          >
            Actuamos como un binomio especializado. Construimos productos digitales
            B2B que no solo funcionan con precisión matemática, sino que transmiten 
            autoridad y elegancia en cada interacción.
          </motion.p>
        </div>

        {/* Architect Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '8rem',
        }}>
          <ArchitectCard
            index={0}
            name="Ángel Postigo" role="Frontend Architect"
            skills={ANGEL_SKILLS}
            description="Responsable de la capa visual y la interacción. Mi objetivo es traducir la complejidad del negocio en interfaces limpias, intuitivas y con un nivel de pulido técnico reservado para el ecosistema venture-backed."
          />
          <ArchitectCard
            index={1}
            name="Lucas Olías" role="Backend & Cloud Architect"
            skills={LUCAS_SKILLS}
            description="Responsable de la infraestructura y los datos. Arquitecto bases de datos relacionales robustas y flujos de automatización que garantizan que el negocio del cliente opere de forma inquebrantable."
          />
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          padding: '4rem 0',
          borderTop: 'var(--border-delicate)',
        }}>
          {STATS.map((s, i) => <StatItem key={i} index={i} {...s} />)}
        </div>

      </div>
    </section>
  );
}
