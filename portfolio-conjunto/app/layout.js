import './globals.css';
import LenisProvider from '@/components/shared/LenisProvider';
import CustomCursor from '@/components/shared/CustomCursor';
import Navbar from '@/components/shared/Navbar';

export const metadata = {
  title: 'A&L | Ingeniería Digital B2B — Showroom',
  description:
    'Somos Ángel y Lucas. Hacemos desarrollo web para empresas que quieren algo hecho de verdad. Next.js, Node.js, Supabase, WebGL. Alcalá de Guadaíra, Sevilla.',
  keywords: [
    'Ingeniería Digital',
    'Desarrollo Web B2B',
    'WaaS Website as a Service',
    'Next.js',
    'Node.js',
    'Supabase',
    'Alcalá de Guadaíra',
    'Pymes Industriales',
    'WebGL',
    'GSAP',
  ],
  authors: [
    { name: 'Ángel Postigo Rodríguez' },
    { name: 'Lucas Olías' },
  ],
  openGraph: {
    title: 'A&L | Ingeniería Digital',
    description: 'Hacemos webs que funcionan de verdad. Para empresas que quieren resultados, no decoración.',
    type: 'website',
    locale: 'es_ES',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect for Google Fonts — loaded in globals.css */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <main style={{ cursor: 'none' }}>
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
