# Constitución de Diseño (SpecKit) — Portfolio Conjunto

Esta es la memoria central ("Constitution") para cualquier Agente de IA que trabaje en este repositorio. Queda terminantemente prohibido desviarse de estas directrices de diseño y arquitectura.

## 1. Reglas Generales de UI/UX (El Santo Grial)
Todas las páginas, componentes y layouts deben basarse en las siguientes librerías de referencia:
- **Layouts y Grids:** Obligatorio seguir el estilo de [BentoGrids.com](https://bentogrids.com). Rejillas asimétricas, tarjetas con padding generoso (`p-6` o `p-8`), bordes ultrafinos (`border-white/5` o `border-white/10`) y fondos sólidos o semi-translúcidos (`bg-black/40 backdrop-blur-xl`).
- **Navegación:** Estilo [Navbar.gallery](https://www.navbar.gallery). Las barras de navegación deben ser píldoras flotantes magnéticas, elegantes, y con `backdrop-blur`.
- **Micro-Interacciones:** Basadas en [Design Spells](https://designspells.com) y [Animista](https://animista.net). Cualquier hover debe tener una transición suave (ej. `transition-all duration-500 ease-out`).
- **Scroll y Físicas:** El movimiento de la página debe sentirse caro. Los elementos deben revelarse al hacer scroll usando los principios de [ScrollX UI](https://scrollxui.dev) y las animaciones avanzadas de texto/físicas de [React Bits](https://reactbits.dev). Usaremos `framer-motion`.

## 2. Paleta de Colores (Estricta)
Basada en [Realtime Colors](https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff&fonts=Inter-Inter):
- **Fondo Principal (Space Blue):** `#050315`
- **Texto Principal (Ice White):** `#fbfbfe`
- **Color Primario (Indigo):** `#2f27ce`
- **Acento (Light Purple):** `#dedcff`
- **Secundario (Vibrant Blue):** `#433bff`

## 3. Tipografía e Iconografía
- **Fuentes:** Primaria `Inter`. Secundaria `Outfit` o `JetBrains Mono` para detalles técnicos.
- **Iconos:** Exclusivamente desde [Iconify](https://icon-sets.iconify.design) o `lucide-react`. Nada de FontAwesome o PNGs pesados.
- **Assets Gráficos:** Para blobs, olas de SVG o mallas de gradiente, usar generadores de [fffuel.co](https://www.fffuel.co).

## 4. Componentes y Arquitectura
- Si se requiere un componente avanzado, revisar si la estructura puede emularse a la filosofía de [Watermelon Registry](https://github.com/WatermelonCorp/watermellon-registry) o librerías UI como [Skiper UI](https://skiper-ui.com).
- Mantener los componentes en `components/ui/` cuando sean reutilizables y atómicos.
