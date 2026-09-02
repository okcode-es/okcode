# Implementación: Sistema de Captación y Conversión de Clientes para OKCODE

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar el sitio web de OKCODE en un motor de captación y conversión de clientes B2B (Startups y Pymes) incorporando un estimador interactivo de proyectos, canales de contacto directo (WhatsApp, Telegram, email profesional) y propuesta de valor trilingüe de alto impacto.

**Architecture:** Actualización del modelo de datos tipado en `src/content/site-content.ts` (ES/EN/ZH), creación de componentes interactivos de cliente (`ProjectEstimator.tsx`, `FloatingQuickContact.tsx`), modernización de `ContactPanel.tsx` con feedback sin fricción, e integración en `HomePage.tsx` con soporte accesible (WCAG 2.1) y exportación 100% estática en Next.js.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, CSS Tokens & Modern Styling (`globals.css`).

**Spec:** [docs/superpowers/specs/2026-09-01-lead-conversion-and-redesign.md](file:///C:/Users/Admin/Desktop/workspace/okcode/docs/superpowers/specs/2026-09-01-lead-conversion-and-redesign.md)

## Global Constraints

- Static Export Only: `output: 'export'` sin dependencias de servidor ni APIs dinámicas en runtime.
- Email corporativo: `info@okcode.es` (recibe en `wenhlin7@gmail.com` vía Cloudflare).
- WhatsApp y Telegram: `+34 684 25 21 30` (`https://wa.me/34684252130`).
- Soporte trilingüe estricto: ES (`/es/`), EN (`/`), ZH (`/zh-cn/`) sin mezclas de idiomas ni cadenas en inglés residuales.
- Accesibilidad WCAG 2.1 AA: Contraste de color, focus visible, navegación por teclado y `prefers-reduced-motion`.

---

### Task 1: Actualizar Modelo de Datos y Contenido Trilingüe de Captación

**Files:**
- Modify: `src/content/site-content.ts`

**Interfaces:**
- Produces: `EstimatorData` interface, updated `SiteContent` interface, and complete data objects for `es`, `en`, `zhCN` containing `info@okcode.es`, `+34 684 25 21 30`, WhatsApp/Telegram links, 4 risk-reversal guarantees, productized service packages, project estimator data, and anti-objection FAQs.

- [ ] **Step 1: Expandir las interfaces de TypeScript en `src/content/site-content.ts`**
  Definir `EstimatorCategory`, `EstimatorFeature`, `EstimatorTimeline`, `EstimatorData` y añadir `estimator` al tipo `SiteContent`. Añadir `telegram` a `ContactInfo`.

- [ ] **Step 2: Actualizar `sampleContact` con los datos reales de OKCODE**
  ```ts
  const sampleContact: ContactInfo = {
    email: "info@okcode.es",
    phone: "+34 684 25 21 30",
    whatsapp: "34684252130",
    telegram: "https://t.me/+34684252130",
    address: "Madrid, Spain",
    socials: [
      { label: "GitHub", href: "https://github.com/okcode-es" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/okcode-es" },
    ],
  };
  ```

- [ ] **Step 3: Redactar los contenidos trilingües optimizados para captación (ES, EN, ZH)**
  - Hero con promesa de valor clara (De idea a producto en 3-4 semanas, 100% código propio).
  - 4 Badges de garantía: `100% Código Tuyo`, `Presupuesto Cerrado`, `30 Días Garantía`, `NDA Previo`.
  - 4 Paquetes paquetizados: `MVP Launchpad`, `Web & Plataforma a Medida`, `E-Commerce Headless`, `App Móvil Multiplataforma`.
  - Datos completos de `estimator` con categorías, opciones de funcionalidades y tiempos.
  - FAQs resolviendo objeciones reales de contratación.

- [ ] **Step 4: Verificar tipos con TypeScript**
  Run: `npm run typecheck`
  Expected: PASS

---

### Task 2: Implementar el Estimador Interactivo de Proyectos (`ProjectEstimator.tsx`)

**Files:**
- Create: `src/components/ProjectEstimator.tsx`

**Interfaces:**
- Consumes: `EstimatorData` de `src/content/site-content.ts`
- Produces: `<ProjectEstimator estimator={content.estimator} contactInfo={content.contact.info} />`

- [ ] **Step 1: Crear el componente interactivo accesible `ProjectEstimator.tsx`**
  - Manejo de estado de categoría seleccionada, funcionalidades marcadas (checkboxes/chips) y plazo de entrega.
  - Cálculo en tiempo real del resumen de alcance, tecnologías sugeridas y tiempo orientativo.
  - Generación de mensaje codificado para WhatsApp:
    `https://wa.me/34684252130?text=Hola%20OKCODE,%20quiero%20cotizar:%20...`
  - Generación de enlace de correo asistido y botón de copia al portapapeles.
  - Atributos ARIA (`role="radiogroup"`, `role="checkbox"`, `aria-checked`) y soporte de teclado.

- [ ] **Step 2: Verificar tipos de `ProjectEstimator.tsx`**
  Run: `npm run typecheck`
  Expected: PASS

---

### Task 3: Implementar Contacto Rápido Flotante y Modernizar el Panel de Contacto

**Files:**
- Create: `src/components/FloatingQuickContact.tsx`
- Modify: `src/components/ContactPanel.tsx`

**Interfaces:**
- Consumes: `ContactInfo` y `UiCopy` de `src/content/site-content.ts`
- Produces: `<FloatingQuickContact />` y `<ContactPanel />` mejorado con copiado a portapapeles, toast y acceso directo a WhatsApp y Telegram.

- [ ] **Step 1: Crear `src/components/FloatingQuickContact.tsx`**
  - Botón flotante accesible en la esquina inferior con icono de WhatsApp/Mensaje.
  - Tooltip sutil: *"¿Hablamos de tu proyecto? WhatsApp directo"*.
  - Enlace directo a `https://wa.me/34684252130`.

- [ ] **Step 2: Mejorar `src/components/ContactPanel.tsx`**
  - Añadir accesos directos visibles a WhatsApp (`+34 684 25 21 30`) y Telegram.
  - Añadir botón de 1 clic para copiar `info@okcode.es` con feedback visual (Toast de éxito: *"¡Email copiado al portapapeles!"*).
  - Al enviar el formulario, además de invocar el cliente de correo, mostrar mensaje de confirmación y opción de copiar el resumen del mensaje si el cliente de correo no se abrió automáticamente.

- [ ] **Step 3: Verificar tipos con TypeScript**
  Run: `npm run typecheck`
  Expected: PASS

---

### Task 4: Integración en la Página Principal y Actualización de Estilos

**Files:**
- Modify: `src/components/HomePage.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `ProjectEstimator`, `FloatingQuickContact`, `ContactPanel`
- Produces: Página de inicio completa con flujo de conversión optimizado.

- [ ] **Step 1: Integrar `ProjectEstimator` y `FloatingQuickContact` en `src/components/HomePage.tsx`**
  - Colocar la sección del Estimador después del Hero para captura inmediata de interés.
  - Incluir el `FloatingQuickContact` al final del documento.

- [ ] **Step 2: Añadir estilos visuales en `src/app/globals.css`**
  - Estilos para `.estimator`, `.estimator__grid`, `.estimator__chip`, `.estimator__summary`, `.estimator__cta`.
  - Estilos para `.floating-contact` (fijo, z-index alto, animación suave al hover).
  - Estilos para badges de garantías, canales de contacto y toasts de confirmación.
  - Soporte responsive estricto para pantallas móviles (320px - 768px).

- [ ] **Step 3: Ejecutar build estático**
  Run: `npm run build`
  Expected: PASS (Generación correcta de `/`, `/es/`, `/zh-cn/` en `./out`).

---

### Task 5: Auditoría de Calidad y Revisión Senior (QA & Reviewer)

**Files:**
- Test & Audit: Todos los archivos modificados.

- [ ] **Step 1: Ejecutar comprobaciones estáticas de TypeScript y build**
  - `npm run typecheck`
  - `npm run build`

- [ ] **Step 2: Verificar enlaces y flujos de conversión**
  - Comprobar que los enlaces a WhatsApp (`wa.me/34684252130`), Telegram y email (`info@okcode.es`) están bien formados en los 3 idiomas.
  - Comprobar que en `/es/` todo el estimador y UI está en Español, en `/` en Inglés y en `/zh-cn/` en Chino.
  - Comprobar navegación por teclado (Tab, Enter, Espacio) en el Estimador.

- [ ] **Step 3: Informe final de revisión**
  - Resumen detallado de las mejoras implementadas y verificación de buenas prácticas y patrones modernos.
