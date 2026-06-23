'use client';

import { useState, useRef, useEffect } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo('.contact-reveal',
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.15,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
          }
        );
      });
    };
    init();
    return () => ctx?.revert();
  }, []);

  const validate = () => {
    const e = {};
    if (!formData.name.trim())  e.name = 'Obligatorio';
    if (!formData.email.trim()) e.email = 'Obligatorio';
    if (!formData.message.trim()) e.message = 'Obligatorio';
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
    borderBottom: `1px solid ${errors[field] ? '#ef4444' : 'rgba(255,255,255,0.1)'}`,
    padding: '1rem 0',
    fontFamily: 'var(--font-body)',
    fontWeight: 300,
    fontSize: '1rem',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.4s',
    caretColor: 'var(--gold)',
    borderRadius: 0,
  });

  return (
    <section id="contacto" ref={sectionRef} style={{
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      background: 'var(--bg-dark)',
      position: 'relative',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6rem', justifyContent: 'space-between' }}>
          
          <div className="contact-reveal" style={{ flex: '1 1 400px' }}>
            <div className="section-label">Contacto</div>
            <h2 style={{ color: 'var(--text-primary)', marginBottom: '2rem' }}>
              Iniciemos una<br /><span className="text-gold" style={{ fontStyle: 'italic' }}>conversación.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, maxWidth: '24rem' }}>
              Buscamos proyectos desafiantes y clientes que valoren el rigor técnico. Si buscas excelencia, estamos a tu disposición.
            </p>
          </div>

          <div className="contact-reveal" style={{ flex: '1 1 500px', maxWidth: '40rem' }}>
            {status === 'success' ? (
              <div style={{ padding: '4rem 3rem', border: 'var(--border-delicate)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 400 }}>Mensaje recibido.</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.8 }}>
                  Apreciamos tu interés. Uno de nuestros arquitectos revisará tu solicitud y te contactará en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <div style={{ position: 'relative' }}>
                  <input type="text" value={formData.name} placeholder="Nombre completo"
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = errors.name ? '#ef4444' : 'rgba(255,255,255,0.1)'}
                    style={fieldStyle('name')} />
                </div>
                <div style={{ position: 'relative' }}>
                  <input type="email" value={formData.email} placeholder="Correo corporativo"
                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(255,255,255,0.1)'}
                    style={fieldStyle('email')} />
                </div>
                <div style={{ position: 'relative' }}>
                  <textarea value={formData.message} placeholder="Detalles de la solicitud..."
                    rows={4}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = errors.message ? '#ef4444' : 'rgba(255,255,255,0.1)'}
                    style={{...fieldStyle('message'), resize: 'vertical'}} />
                </div>
                <div style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>
                  <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Enviando...' : 'Enviar Solicitud'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Footer */}
        <footer style={{
          marginTop: '10rem', paddingTop: '3rem', borderTop: 'var(--border-delicate)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--text-primary)' }}>A&L</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '0.5rem' }}>Ingeniería Digital B2B</div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', textAlign: 'right', letterSpacing: '0.1em' }}>
            © {new Date().getFullYear()} A&L.<br/>Alcalá de Guadaíra, Sevilla.
          </div>
        </footer>
      </div>
    </section>
  );
}
