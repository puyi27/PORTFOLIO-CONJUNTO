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
    <div className="min-h-screen bg-[#050315] text-[#fbfbfe] selection:bg-[#2f27ce]/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050315]/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5">
              <ArrowLeft size={16} />
            </div>
            <span className="font-medium tracking-wide">Volver al Home</span>
          </Link>
          <div className="font-mono text-sm tracking-widest uppercase text-neutral-500">
            Catálogo Completo
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-[clamp(3rem,6vw,5rem)] font-bold tracking-tighter leading-tight mb-6"
          >
            Directorio de <span className="text-[#2f27ce] italic">Demos.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 max-w-2xl leading-relaxed"
          >
            22 experiencias interactivas optimizadas para rendimiento y diseñadas para convertir. Filtra por industria y explora la que más se adapte a tu visión.
          </motion.p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-white/10 pb-6">
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#2f27ce] text-white shadow-[0_0_20px_rgba(47,39,206,0.4)]' 
                    : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 border border-white/10 rounded-full p-1 bg-black/20 hidden md:flex">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-white'}`}
            >
              <Grid3x3 size={18} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-full transition-colors ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-white'}`}
            >
              <LayoutList size={18} />
            </button>
          </div>
        </div>

        {/* Demos Grid / List */}
        <motion.div 
          layout
          className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "flex flex-col gap-4"
          }
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
              <Link href={`/demo/${demo.id}`} className="group block">
                {viewMode === 'grid' ? (
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter grayscale-[50%] group-hover:grayscale-0"
                      style={{ backgroundImage: `url(${demo.img || ''})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#dedcff] mb-2 block">{demo.category}</span>
                        <h3 className="text-2xl font-semibold text-white tracking-tight">{demo.title}</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#2f27ce] transition-colors">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-8">
                      <div className="w-24 h-16 rounded-lg bg-white/10 bg-cover bg-center" style={{ backgroundImage: `url(${demo.img || ''})` }} />
                      <div>
                        <h3 className="text-xl font-semibold text-white tracking-tight mb-1">{demo.title}</h3>
                        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">{demo.category}</span>
                      </div>
                    </div>
                    <div className="text-neutral-500 group-hover:text-[#2f27ce] transition-colors">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredDemos.length === 0 && (
          <div className="py-32 text-center text-neutral-500">
            No se encontraron demos en esta categoría.
          </div>
        )}
      </main>
    </div>
  );
}
