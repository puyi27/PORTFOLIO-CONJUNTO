'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="nosotros" style={{
      padding: 'var(--section-pad-y) 0',
      background: 'var(--bg-dark)',
      position: 'relative',
      borderBottom: 'var(--border-delicate)',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Minimalist Teaser */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
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
            Somos un binomio especializado. Construimos productos digitales B2B combinando arquitectura backend inquebrantable con interfaces visuales de calidad excepcional.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ marginTop: '3rem' }}
          >
            <Link href="/about">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-ghost"
                style={{ 
                  display: 'inline-flex', alignItems: 'center', gap: '0.75rem', 
                  padding: '1.25rem 2.5rem', fontSize: '1rem' 
                }}
              >
                Conoce a los Arquitectos
                <ArrowUpRight size={18} className="text-gold" />
              </motion.div>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
