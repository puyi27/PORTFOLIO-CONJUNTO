'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const validate = () => {
    const e = {};
    if (!formData.name.trim())  e.name = 'Requerido';
    if (!formData.email.trim()) e.email = 'Requerido';
    if (!formData.message.trim()) e.message = 'Requerido';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setErrors({}); setStatus('sending');

    try {
      const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (SUPABASE_URL && SUPABASE_ANON_KEY) {
        await fetch(`${SUPABASE_URL}/rest/v1/leads_showroom`, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal',
          },
          body: JSON.stringify({ ...formData, source: 'showroom', created_at: new Date().toISOString() }),
        });
      }
      await new Promise(r => setTimeout(r, 1000));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const fieldStyle = (field) => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${errors[field] ? '#ef4444' : 'rgba(251,251,254,0.1)'}`,
    padding: '1.5rem 0 1rem 0',
    fontFamily: 'var(--font-body)',
    fontWeight: 300,
    fontSize: '1.1rem',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.4s',
    caretColor: 'var(--gold)',
    borderRadius: 0,
  });

  return (
    <section id="contacto" style={{
      padding: 'var(--section-pad-y) 0 4rem 0',
      background: 'var(--bg-dark)',
      position: 'relative',
    }}>
      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8rem', justifyContent: 'space-between' }}>
          
          {/* Left Side: Massive Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ flex: '1 1 400px' }}
          >
            <div className="section-label">Contacto</div>
            <h2 style={{ color: 'var(--text-primary)', marginBottom: '2rem', fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', lineHeight: 1.1 }}>
              Iniciemos una<br />
              <span className="text-gold" style={{ fontStyle: 'italic' }}>conversación.</span>
            </h2>
            <p style={{ 
              fontFamily: 'var(--font-body)', color: 'var(--text-muted)', 
              fontSize: '1.2rem', fontWeight: 300, lineHeight: 1.8, maxWidth: '28rem',
              marginBottom: '4rem'
            }}>
              Buscamos proyectos desafiantes y clientes que valoren el rigor técnico absoluto. Si buscas excelencia, estamos a tu disposición.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                <Mail size={18} color="var(--gold)" />
                <a href="mailto:contacto@aylingenieria.com" style={{ color: 'inherit', textDecoration: 'none' }}>contacto@aylingenieria.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                <MapPin size={18} color="var(--gold)" />
                <span>Alcalá de Guadaíra, Sevilla.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form (Skiper UI style) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            style={{ flex: '1 1 500px', maxWidth: '40rem', alignSelf: 'center' }}
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                style={{ 
                  padding: '5rem 4rem', border: 'var(--border-gold)', borderRadius: '24px', 
                  textAlign: 'center', background: 'rgba(47, 39, 206, 0.05)',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                  <ArrowRight color="white" size={32} />
                </div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 400, fontSize: '2rem' }}>Mensaje recibido.</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Apreciamos tu interés. Uno de nuestros arquitectos revisará tu solicitud y te contactará a la brevedad posible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <div style={{ position: 'relative' }}>
                  <input type="text" value={formData.name} placeholder="Nombre completo corporativo"
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = errors.name ? '#ef4444' : 'rgba(251,251,254,0.1)'}
                    style={fieldStyle('name')} />
                </div>
                <div style={{ position: 'relative' }}>
                  <input type="email" value={formData.email} placeholder="Correo electrónico oficial"
                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(251,251,254,0.1)'}
                    style={fieldStyle('email')} />
                </div>
                <div style={{ position: 'relative' }}>
                  <textarea value={formData.message} placeholder="Contexto técnico de tu solicitud..."
                    rows={4}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = errors.message ? '#ef4444' : 'rgba(251,251,254,0.1)'}
                    style={{...fieldStyle('message'), resize: 'vertical', paddingTop: '1.5rem'}} />
                </div>
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    type="submit" className="btn-primary" disabled={status === 'sending'}
                    style={{ padding: '1.5rem 3rem', borderRadius: '100px' }}
                  >
                    {status === 'sending' ? 'Cifrando...' : 'Enviar Solicitud Segura'}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>

        </div>

        {/* Footer */}
        <footer style={{
          marginTop: '12rem', paddingTop: '4rem', borderTop: 'var(--border-delicate)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem',
          alignItems: 'flex-end'
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '2rem', color: 'var(--text-primary)', letterSpacing: '-0.04em' }}>A&L</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '0.5rem' }}>Ingeniería Digital B2B</div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'right', letterSpacing: '0.1em', lineHeight: 1.6 }}>
            © {new Date().getFullYear()} A&L.<br/>Todos los derechos reservados.
          </div>
        </footer>
      </div>
    </section>
  );
}
