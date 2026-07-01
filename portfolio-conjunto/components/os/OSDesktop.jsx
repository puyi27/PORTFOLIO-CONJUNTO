'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, LayoutGrid, Folders, User, Mail, X } from 'lucide-react';
import dynamic from 'next/dynamic';

const TopoMesh = dynamic(() => import('@/components/hero/TopoMesh'), { ssr: false });
import EcosystemSection from '@/components/ecosystem/EcosystemSection';
import AboutSection from '@/components/about/AboutSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import ContactSection from '@/components/contact/ContactSection';

// Helper para crear ventanas dinámicas
function DraggableWindow({ id, title, children, onClose }) {
  return (
    <motion.div
      key={`window-${id}`}
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      style={{
        position: 'absolute',
        top: '10%', left: '5%', right: '5%', bottom: '15%',
        zIndex: 50,
        background: 'rgba(10, 8, 32, 0.85)',
        backdropFilter: 'blur(32px)',
        border: 'var(--border-delicate)',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Window Header */}
      <div className="window-header" style={{
        padding: '1rem 1.5rem', background: 'rgba(10, 8, 32, 0.9)',
        borderBottom: 'var(--border-delicate)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        cursor: 'grab'
      }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <div onClick={onClose} style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={8} color="#990000" style={{ opacity: 0 }} className="hover-show" />
          </div>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {title}.jsx
        </div>
        <div style={{ width: 44 }}></div>
      </div>
      
      {/* Window Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0', position: 'relative' }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function OSDesktop() {
  const [activeWindows, setActiveWindows] = useState([]);
  const [query, setQuery] = useState('');

  const toggleWindow = (id) => {
    setActiveWindows(prev => {
      // Si ya está abierta, la cerramos
      if (prev.includes(id)) return prev.filter(w => w !== id);
      // Si no está abierta, la añadimos al final (para que quede por encima)
      return [...prev.filter(w => w !== id), id];
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.toLowerCase();
    if (q.includes('proyecto')) toggleWindow('projects');
    if (q.includes('ecosistema') || q.includes('stack')) toggleWindow('ecosystem');
    if (q.includes('contacto')) toggleWindow('contact');
    if (q.includes('sobre') || q.includes('nosotros') || q.includes('firma')) toggleWindow('about');
    setQuery('');
  };

  const DOCK_ITEMS = [
    { id: 'about', icon: <User size={20} />, label: 'La Firma' },
    { id: 'projects', icon: <Folders size={20} />, label: 'Proyectos' },
    { id: 'ecosystem', icon: <LayoutGrid size={20} />, label: 'Ecosistema' },
    { id: 'contact', icon: <Mail size={20} />, label: 'Contacto' },
  ];

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      background: 'var(--bg-dark)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <style>{`
        .hover-show { opacity: 0; transition: opacity 0.2s; }
        .window-header:hover .hover-show { opacity: 1; }
      `}</style>

      {/* 3D Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <TopoMesh />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at center, transparent 0%, var(--bg-dark) 85%)'
        }} />
      </div>

      {/* Central AI Input */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '600px', padding: '0 2rem' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            A&L Sistema Operativo
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
            [ TERMINAL DE INTELIGENCIA B2B ]
          </p>
        </div>

        <form onSubmit={handleSearch} style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--gold)' }}>
            <Sparkles size={20} />
          </div>
          <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="¿Qué estás buscando? (ej. muéstrame proyectos)"
            style={{
              width: '100%',
              padding: '1.25rem 1.25rem 1.25rem 3.5rem',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(5, 3, 21, 0.6)',
              backdropFilter: 'blur(20px)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              outline: 'none',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              transition: 'border-color 0.3s, box-shadow 0.3s'
            }}
            onFocus={e => e.currentTarget.style.borderColor = 'var(--gold)'}
            onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
          <button type="submit" style={{
            position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)',
            background: 'var(--gold)', border: 'none', borderRadius: '50%',
            width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff'
          }}>
            <Search size={18} />
          </button>
        </form>
      </motion.div>

      {/* Floating Windows Stack */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 50 }}>
        <AnimatePresence>
          {activeWindows.map(id => {
            if (id === 'about') return (
              <div key="win-about" style={{ pointerEvents: 'auto' }}>
                <DraggableWindow id="about" title="About" onClose={() => toggleWindow('about')}>
                  <AboutSection isWindow={true} />
                </DraggableWindow>
              </div>
            );
            if (id === 'projects') return (
              <div key="win-projects" style={{ pointerEvents: 'auto' }}>
                <DraggableWindow id="projects" title="Projects" onClose={() => toggleWindow('projects')}>
                  <ProjectsSection isWindow={true} />
                </DraggableWindow>
              </div>
            );
            if (id === 'ecosystem') return (
              <div key="win-ecosystem" style={{ pointerEvents: 'auto' }}>
                <DraggableWindow id="ecosystem" title="Ecosystem" onClose={() => toggleWindow('ecosystem')}>
                  <EcosystemSection isWindow={true} />
                </DraggableWindow>
              </div>
            );
            if (id === 'contact') return (
              <div key="win-contact" style={{ pointerEvents: 'auto' }}>
                <DraggableWindow id="contact" title="Contact" onClose={() => toggleWindow('contact')}>
                  <ContactSection isWindow={true} />
                </DraggableWindow>
              </div>
            );
            return null;
          })}
        </AnimatePresence>
      </div>

      {/* Mac-style Dock */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          zIndex: 100,
          display: 'flex',
          gap: '1rem',
          padding: '0.75rem 1.5rem',
          background: 'rgba(5, 3, 21, 0.6)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}
      >
        {DOCK_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            style={{ position: 'relative' }}
          >
            <motion.button
              onClick={() => toggleWindow(item.id)}
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'relative',
                background: activeWindows.includes(item.id) ? 'rgba(47, 39, 206, 0.2)' : 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '16px',
                width: '50px', height: '50px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: activeWindows.includes(item.id) ? 'var(--gold)' : 'var(--text-primary)',
                cursor: 'pointer'
              }}
            >
              {item.icon}
            </motion.button>
            {activeWindows.includes(item.id) && (
              <div style={{ position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: 'var(--gold)' }} />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
