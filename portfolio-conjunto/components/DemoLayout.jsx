'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DemoLayout({ title, children }) {
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('preview') === 'true') {
        setIsPreview(true);
        // Prevent scroll when in iframe preview
        document.body.style.overflow = 'hidden';
      }
    }
  }, []);

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: 'var(--bg-dark)', position: 'relative' }}>
      
      {/* Floating Back Button for Demos (Hide in Preview Mode) */}
      {!isPreview && (
        <div style={{ position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 9999 }}>
          <Link 
            href="/demos"
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '0.75rem 1.5rem', 
            background: 'rgba(5, 3, 21, 0.8)', 
            backdropFilter: 'blur(12px)', 
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            borderRadius: '100px', 
            color: 'var(--text-primary)', 
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 500,
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gold)';
            e.currentTarget.style.borderColor = 'var(--gold)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(5, 3, 21, 0.8)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <ArrowLeft size={16} /> 
          Volver a Demos
        </Link>
      </div>
      )}

      {/* Demo Content */}
      <div style={{ width: '100%' }}>
        {children}
      </div>
    </div>
  );
}
