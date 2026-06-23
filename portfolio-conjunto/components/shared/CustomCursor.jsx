'use client';

import { useEffect, useRef } from 'react';

/**
 * CustomCursor — Elegant delicate ring.
 * Champagne Bronze (#C5A059)
 */
export default function CustomCursor() {
  const outerRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (outerRef.current) {
        // Very fast follow, minimal lag for precision feel
        outerRef.current.style.transform = `translate3d(${pos.current.x - 16}px, ${pos.current.y - 16}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = (e) => {
      const el = e.target.closest('a, button, input, textarea, select, [data-cursor-hover]');
      if (el && outerRef.current) {
        outerRef.current.classList.add('cursor-hover-active');
      }
    };

    const onLeave = () => {
      if (outerRef.current) {
        outerRef.current.classList.remove('cursor-hover-active');
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onEnter, { passive: true });
    document.addEventListener('mouseout', onLeave, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={outerRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 32, height: 32,
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          transition: 'width 0.4s ease, height 0.4s ease, background 0.4s ease, border-color 0.4s ease, transform 0.1s',
        }}
        className="cursor-outer-el"
      />
      <style>{`
        .cursor-outer-el.cursor-hover-active {
          width: 48px !important;
          height: 48px !important;
          background: rgba(197, 160, 89, 0.05); /* Very faint gold tint */
          border-color: var(--gold) !important;
          transform: translate3d(calc(var(--x) - 24px), calc(var(--y) - 24px), 0) !important;
        }
        @media (pointer: coarse) {
          .cursor-outer-el { display: none; }
        }
      `}</style>
    </>
  );
}
