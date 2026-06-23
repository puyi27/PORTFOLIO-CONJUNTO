import HeroSection      from '@/components/hero/HeroSection';
import AboutSection     from '@/components/about/AboutSection';
import EcosystemSection from '@/components/ecosystem/EcosystemSection';
import ProjectsSection  from '@/components/projects/ProjectsSection';
import WaaSSection      from '@/components/waas/WaaSSection';
import ContactSection   from '@/components/contact/ContactSection';

/**
 * A&L | Ingeniería Digital B2B — Showroom
 *
 * One-pager inmersivo estructurado en 5 secciones narrativas:
 *   1. HeroSection      — WebGL Topo Mesh + GSAP clip-path reveal (LCP protegido)
 *   2. AboutSection     — Monogramas + glassmorphism + GSAP stagger
 *   3. ProjectsSection  — Carrusel GSAP infinito + hover transform3d
 *   4. WaaSSection      — 3 pricing tiers + ScrollTrigger reveals
 *   5. ContactSection   — Terminal de contacto + Supabase insert
 */
export default function ShowroomPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EcosystemSection />
      <ProjectsSection />
      <WaaSSection />
      <ContactSection />
    </>
  );
}
