# LUNAKIDS: Agent Guidelines & Architecture Harness

## 1. Identidad y Misión de la Marca
- **Estética:** Minimalismo cálido, moda infantil andaluza artesanal (Boutique del sur).
- **Cero clínica:** Prohibido el uso de blancos puros (`#FFFFFF`) y negros puros (`#000000`).
- **Paleta de Marca Obligatoria (Configurada en Tailwind):**
  - `base`: Lino cálido (`#FAF8F5`)
  - `ink`: Marengo/Ónix suave (`#2C2A29`)
  - `accent`: Verde Cerceta (Madroños) (`#1A5E5C`)
  - `burgundy`: Granate/Terciopelo (`#7A1C29`)
  - `terracotta`: Terracota cálido (Vichy) (`#C86B5E`)
  - `paper`: Fondo de tarjetas (`#ECE9E1`)
- **Texturas:** Usar utilidades `.bg-vichy`, `.bg-plumeti` y `.border-stitch` para dar riqueza a los componentes en lugar de fondos lisos.
- **Tipografías:** `font-sans` (Montserrat), `font-serif` (Cormorant), `font-script` (Dancing Script, para notas caligráficas).

## 2. Arquitectura de Software
- **Framework:** Next.js (App Router).
- **Estilos:** EXCLUSIVAMENTE Tailwind CSS. Prohibido CSS puro o módulos salvo casos extremadamente necesarios (como los patrones en `globals.css`).
- **Datos (Supabase):** 
  - La conexión está configurada en `lib/supabase.js`.
  - **REGLA CRÍTICA:** Mantener SIEMPRE el mock de Supabase activo si las variables de entorno `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` no existen. NUNCA lanzar excepciones no capturadas que rompan los Server Components.

## 3. Protocolos de Verificación (Verification Harness)
- Antes de dar por finalizada cualquier tarea de desarrollo, DEBES ejecutar `npm run verify`.
- Este script ejecuta `npm run lint` y `npm run build`.
- Si el build falla (ej: problemas de importaciones, variables no definidas, errores de compilación de Next.js que causarán un 404 en Vercel), la tarea NO está terminada. Debes analizar los logs, corregir el error y volver a ejecutar `verify` hasta que sea exitoso.

## 4. Definición de Hecho (Definition of Done)
1. El código cumple el estilo estético de la marca LUNAKIDS (no hay componentes genéricos sin alma).
2. Se mantiene la simetría y el grid coherente (sin diseños asimétricos rotos salvo petición expresa).
3. `npm run verify` pasa con éxito 0.
4. El registro `.agents/progress.md` ha sido actualizado con los cambios realizados.
