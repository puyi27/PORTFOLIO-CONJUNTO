'use client';

import { useEffect, useRef } from 'react';

export default function MonogramAvatar({ letter, color = '#6366f1', size = 120 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId, distort = 0, target = 0;

    const animate = () => {
      distort += (target - distort) * 0.07;
      const scale = 1 + distort * 0.03;
      const skew = distort * 2;
      el.style.transform = `scale(${scale}) skewX(${skew}deg)`;
      el.style.filter = distort > 0.1
        ? `drop-shadow(0 0 ${distort * 24}px ${color}55)`
        : 'none';
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => { target = 1; };
    const onLeave = () => { target = 0; };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [color]);

  return (
    <div
      ref={containerRef}
      data-cursor-hover
      style={{
        width: size, height: size,
        border: `1px solid ${color}33`,
        background: `${color}0d`,
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'none',
        willChange: 'transform, filter',
        transition: 'background 0.4s',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 30% 30%, ${color}18, transparent 70%)`,
      }} />

      {/* Dot grid micro */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(${color}20 1px, transparent 1px)`,
        backgroundSize: '12px 12px',
      }} />

      {/* Corner brackets */}
      {[['top','left'], ['top','right'], ['bottom','left'], ['bottom','right']].map(([v, h]) => (
        <span key={`${v}-${h}`} style={{
          position: 'absolute',
          [v]: 6, [h]: 6,
          width: 10, height: 10,
          borderTop: v === 'top' ? `1px solid ${color}88` : 'none',
          borderBottom: v === 'bottom' ? `1px solid ${color}88` : 'none',
          borderLeft: h === 'left' ? `1px solid ${color}88` : 'none',
          borderRight: h === 'right' ? `1px solid ${color}88` : 'none',
          borderRadius: h === 'left' && v === 'top' ? '2px 0 0 0' :
                        h === 'right' && v === 'top' ? '0 2px 0 0' :
                        h === 'left' && v === 'bottom' ? '0 0 0 2px' : '0 0 2px 0',
        }} />
      ))}

      {/* Letter */}
      <span style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: size * 0.5,
        color: color,
        lineHeight: 1,
        userSelect: 'none',
        position: 'relative',
        zIndex: 1,
        letterSpacing: '-0.04em',
      }}>
        {letter}
      </span>
    </div>
  );
}
