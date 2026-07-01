'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Grid3x3, LayoutList } from 'lucide-react';
import { useState } from 'react';

// Demos Categories
const CATEGORIES = ['All', 'SaaS', 'Creative', 'E-Commerce', 'Real Estate'];

const ALL_DEMOS = [
  { id: 'saas', title: 'SaaS Platform', category: 'SaaS', img: '/images/demo/saas/hero.jpg' },
  { id: 'creativo', title: 'K. Nakamura', category: 'Creative', img: '/images/demo/creativo/1.jpg' },
  { id: 'premium', title: 'Maison Noir', category: 'E-Commerce', img: '/images/demo/premium/hero.jpg' },
  { id: 'tech', title: 'CyberOS', category: 'SaaS', img: '/images/demo/tech/hero.jpg' },
  { id: 'gaming', title: 'Vanguard', category: 'Creative', img: '/images/demo/gaming/hero.jpg' },
  { id: 'inmobiliaria', title: 'Aura Estates', category: 'Real Estate', img: '/images/demo/inmobiliaria/hero.jpg' },
];

export default function DemosCatalog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // grid | list

  const filteredDemos = activeCategory === 'All' 
    ? ALL_DEMOS 
    : ALL_DEMOS.filter(d => d.category === activeCategory);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-primary)', paddingBottom: 'var(--section-pad-y)' }}>
      


      <main className="container" style={{ paddingTop: 'calc(var(--section-pad-y) * 1.2)' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            style={{ fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1.5rem' }}
          >
            Directorio de <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Demos.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', lineHeight: 1.8 }}
          >
            6 experiencias interactivas optimizadas para rendimiento y diseñadas para convertir. Filtra por industria y explora la que más se adapte a tu visión.
          </motion.p>
        </div>

        {/* Toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.3s', border: '1px solid rgba(255,255,255,0.05)',
                  background: activeCategory === cat ? 'var(--gold)' : 'rgba(255,255,255,0.05)',
                  color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '0.25rem', background: 'rgba(0,0,0,0.2)' }}>
            <button 
              onClick={() => setViewMode('grid')}
              style={{ padding: '0.5rem', borderRadius: '50%', cursor: 'pointer', border: 'none', background: viewMode === 'grid' ? 'rgba(255,255,255,0.1)' : 'transparent', color: viewMode === 'grid' ? '#fff' : 'var(--text-muted)' }}
            >
              <Grid3x3 size={18} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              style={{ padding: '0.5rem', borderRadius: '50%', cursor: 'pointer', border: 'none', background: viewMode === 'list' ? 'rgba(255,255,255,0.1)' : 'transparent', color: viewMode === 'list' ? '#fff' : 'var(--text-muted)' }}
            >
              <LayoutList size={18} />
            </button>
          </div>
        </div>

        {/* Demos Grid / List */}
        <motion.div 
          layout
          style={{
            display: viewMode === 'grid' ? 'grid' : 'flex',
            gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(320px, 1fr))' : 'none',
            flexDirection: viewMode === 'list' ? 'column' : 'row',
            gap: '2rem'
          }}
        >
          {filteredDemos.map((demo, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={demo.id}
            >
              <Link href={`/demo/${demo.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                {viewMode === 'grid' ? (
                  <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
                    <div 
                      style={{ 
                        position: 'absolute', inset: 0, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.7s, filter 0.7s', filter: 'grayscale(50%)',
                        backgroundImage: `url(${demo.img || ''}), linear-gradient(135deg, rgba(47,39,206,0.2) 0%, rgba(5,3,21,1) 100%)` 
                      }}
                      onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.filter = 'grayscale(0%)'; }}
                      onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.filter = 'grayscale(50%)'; }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)', pointerEvents: 'none' }} />
                    
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', pointerEvents: 'none' }}>
                      <div>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent)', marginBottom: '0.5rem', display: 'block' }}>{demo.category}</span>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em' }}>{demo.title}</h3>
                      </div>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                      <div style={{ width: 96, height: 64, borderRadius: '8px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${demo.img || ''}), linear-gradient(135deg, rgba(47,39,206,0.2) 0%, rgba(5,3,21,1) 100%)` }} />
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>{demo.title}</h3>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)' }}>{demo.category}</span>
                      </div>
                    </div>
                    <div style={{ color: 'var(--text-muted)' }}>
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredDemos.length === 0 && (
          <div style={{ padding: '8rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
            No se encontraron demos en esta categoría.
          </div>
        )}
      </main>
    </div>
  );
}
