'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Code2, Database, LayoutTemplate, Server, Cpu, Workflow } from 'lucide-react';

const ANGEL_SKILLS = ['React / Next.js', 'WebGL / Three.js', 'Framer Motion', 'UI/UX Architecture', 'TailwindCSS', 'GSAP'];
const LUCAS_SKILLS = ['Node.js', 'Supabase', 'PostgreSQL', 'n8n Automation', 'Docker', 'AWS / Vercel'];

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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="flex flex-col items-center text-center p-8 bg-white/5 border border-white/10 rounded-3xl"
    >
      <span className="font-display font-medium text-[clamp(2.5rem,4vw,3.5rem)] text-white leading-none mb-2 tracking-tight">
        {value}
      </span>
      <span className="font-mono text-xs uppercase tracking-widest text-[#2f27ce]">
        {label}
      </span>
    </motion.div>
  );
}

export default function AboutPage() {
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
            Los Arquitectos
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 rounded-full border border-[#2f27ce]/30 bg-[#2f27ce]/10 text-[#2f27ce] font-mono text-xs tracking-widest uppercase mb-6"
          >
            Nuestra Esencia
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter leading-tight mb-6"
          >
            No usamos plantillas. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2f27ce] to-[#dedcff]">Escribimos código nativo.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto"
          >
            Combinamos una obsesión enfermiza por la estética frontend con arquitecturas backend sólidas como rocas. El resultado son productos digitales B2B inquebrantables.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {STATS.map((s, i) => <StatItem key={i} index={i} {...s} />)}
        </div>

        {/* The Architects - Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Angel Postigo - Frontend Architect */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col group"
          >
            <div className="p-8 md:p-12 flex-1">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2">Ángel Postigo</h3>
                  <div className="font-mono text-sm tracking-widest text-[#2f27ce] uppercase">Frontend Architect</div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#2f27ce]/20 flex items-center justify-center border border-[#2f27ce]/30 text-[#dedcff]">
                  <LayoutTemplate size={24} />
                </div>
              </div>
              <p className="text-neutral-400 leading-relaxed mb-8">
                Responsable de la capa visual y la interacción. Traduzco la complejidad técnica del negocio en interfaces hiper-fluidas, minimalistas y con un nivel de pulido técnico reservado para el ecosistema venture-backed.
              </p>
              
              <div className="mb-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">Tech Stack Principal</h4>
                <div className="flex flex-wrap gap-2">
                  {ANGEL_SKILLS.map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-sm text-neutral-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Iframe Preview */}
            <div className="relative aspect-[16/10] bg-black border-t border-white/10 overflow-hidden">
              <div className="absolute top-4 right-4 z-10">
                <a 
                  href="https://porfolio-apr.vercel.app/#inicio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Visitar Portfolio <ArrowUpRight size={14} />
                </a>
              </div>
              <iframe 
                src="https://porfolio-apr.vercel.app/#inicio" 
                className="w-full h-full border-none opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none md:pointer-events-auto"
                title="Portfolio de Ángel"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Lucas Olias - Backend Architect */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col group"
          >
            <div className="p-8 md:p-12 flex-1">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2">Lucas Olías</h3>
                  <div className="font-mono text-sm tracking-widest text-[#433bff] uppercase">Backend & Cloud Architect</div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#433bff]/20 flex items-center justify-center border border-[#433bff]/30 text-[#dedcff]">
                  <Database size={24} />
                </div>
              </div>
              <p className="text-neutral-400 leading-relaxed mb-8">
                Responsable de la infraestructura y los datos. Diseño arquitecturas relacionales robustas, APIs hiper-rápidas y flujos de automatización que garantizan que el negocio opere de forma inquebrantable 24/7.
              </p>
              
              <div className="mb-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">Tech Stack Principal</h4>
                <div className="flex flex-wrap gap-2">
                  {LUCAS_SKILLS.map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-sm text-neutral-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Iframe Preview */}
            <div className="relative aspect-[16/10] bg-black border-t border-white/10 overflow-hidden">
              <div className="absolute top-4 right-4 z-10">
                <a 
                  href="https://portfolio-six-pink-86.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Visitar Portfolio <ArrowUpRight size={14} />
                </a>
              </div>
              <iframe 
                src="https://portfolio-six-pink-86.vercel.app/" 
                className="w-full h-full border-none opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none md:pointer-events-auto"
                title="Portfolio de Lucas"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>

      </main>
    </div>
  );
}
