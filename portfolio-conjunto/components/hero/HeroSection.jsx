'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';

const TopoMesh = dynamic(() => import('./TopoMesh'), { ssr: false });

// Helper para Split Text animado (inspiración ReactBits)
function SplitText({ text, delay = 0 }) {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotate: 5,
    },
  };

  return (
    <motion.span
      style={{ display: "inline-block", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ display: "inline-block", marginRight: "0.25em" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function HeroSection() {
  const containerRef = useRef(null);
  
  // Parallax Scroll (inspiración ScrollX UI)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yText = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" ref={containerRef} style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      borderBottom: 'var(--border-delicate)',
      background: 'var(--bg-dark)'
    }}>
      {/* Malla 3D Topográfica */}
      <div style={{ opacity: 0.6 }}>
        <TopoMesh />
      </div>

      {/* Viñeta para centrar la atención en el texto */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'radial-gradient(circle at center, transparent 0%, var(--bg-dark) 80%)'
      }} />

      <motion.div 
        className="container" 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          y: yText,
          opacity: opacityText
        }}
      >
        
        {/* Badge (Glassmorphism) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ marginBottom: '3rem' }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
            border: 'var(--border-delicate)',
            padding: '0.6rem 1.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(47, 39, 206, 0.1)',
            backdropFilter: 'blur(12px)',
            borderRadius: '100px',
            boxShadow: '0 0 30px rgba(47, 39, 206, 0.15)'
          }}>
            <span style={{
              width: 6, height: 6,
              background: 'var(--gold)',
              borderRadius: '50%',
              boxShadow: '0 0 12px var(--gold)'
            }} />
            Ingeniería Digital B2B
          </span>
        </motion.div>

        {/* Título Principal */}
        <h1 style={{
          display: 'flex', flexDirection: 'column', gap: '0.2rem',
          marginBottom: '3rem',
          color: 'var(--text-primary)'
        }}>
          <SplitText text="Hacemos desarrollo web" delay={0.4} />
          <motion.span
             initial={{ opacity: 0, filter: 'blur(20px)' }}
             animate={{ opacity: 1, filter: 'blur(0px)' }}
             transition={{ duration: 1.5, delay: 1 }}
             className="text-gold" 
             style={{ fontStyle: 'italic', display: 'block' }}
          >
            de alto rendimiento.
          </motion.span>
        </h1>

        {/* Descripción */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
            color: 'var(--text-muted)',
            maxWidth: '42rem',
            lineHeight: 1.8,
            marginBottom: '4rem',
            fontWeight: 300
          }}
        >
          Somos Ángel y Lucas. Construimos infraestructura web escalable 
          y sistemas a medida para empresas que exigen excelencia técnica.
          <br /><br />
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.8rem', 
            letterSpacing: '0.15em',
            color: 'var(--text-primary)',
            padding: '0.75rem 1.5rem',
            background: 'rgba(255,255,255,0.02)',
            border: 'var(--border-delicate)',
            borderRadius: '12px',
            display: 'inline-block'
          }}>
            NEXT.JS // NODE.JS // SUPABASE // WEBGL
          </span>
        </motion.p>

        {/* Botones */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('proyectos')} 
            className="btn-primary" 
          >
            Ver Proyectos
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('contacto')} 
            className="btn-ghost"
          >
            Contactar
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
}
