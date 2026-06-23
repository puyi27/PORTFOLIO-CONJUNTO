'use client';

import { useEffect, useRef } from 'react';

/**
 * LenisProvider — wraps Lenis smooth scroll globally.
 * Uses the new 'lenis' package (renamed from @studio-freight/lenis).
 * Integrates with GSAP ScrollTrigger via the scroll event.
 */
export default function LenisProvider({ children }) {
  useEffect(() => {
    let lenis;

    const init = async () => {
      const { default: Lenis } = await import('lenis');
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
      });

      // Sync Lenis with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    };

    init();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
