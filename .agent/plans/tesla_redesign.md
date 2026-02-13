# Plan de Implementación: Estilo Tesla para Atoyac PKG

Este plan detalla los pasos para transformar la landing page de Atoyac PKG siguiendo la referencia de diseño de Tesla.com, enfocándose en un diseño minimalista, secciones de pantalla completa y scroll progresivo (snap scroll).

## Objetivos
1.  **Layout de Impacto**: Implementar secciones de `100vh` con scroll snapping.
2.  **Minimalismo Tesla**: Jerarquía visual limpia con encabezados centrados y CTAs en la parte inferior.
3.  **Navegación Fluida**: Navbar transparente que se vuelve sólido/desenfocado al hacer scroll.
4.  **Tipografía y Botones**: Usar pesos de fuente modernos y botones rectangulares con esquinas suavizadas.

## Fases de Trabajo

### Fase 1: Base y Navegación (Completada)
- [x] Configurar tokens de diseño en `index.css` (`.tesla-section`, `.tesla-snap-container`).
- [x] Implementar scroll snapping en `App.jsx`.
- [x] Actualizar `Navbar.jsx` para comportamiento dinámico (transparente a sólido).
- [x] Rediseñar `Hero.jsx` con el nuevo layout.
- [x] Rediseñar `About.jsx` con el nuevo layout.

### Fase 2: Conversión de Secciones Secundarias
- [ ] **Products**: Transformar a `tesla-section`. Usar un carrusel o grid minimalista en el centro.
- [ ] **Industries**: Transformar a `tesla-section`. Mostrar sectores con iconografía limpia en un grid central.
- [ ] **Process**: Transformar a `tesla-section`. Simplificar el timeline para que sea visualmente ligero.

### Fase 3: Secciones de Cierre y Contacto
- [ ] **Commitment**: Transformar a `tesla-section` con fondo oscuro sutil y frases de gran impacto.
- [ ] **QuoteForm**: Transformar a `tesla-section`. El formulario debe estar contenido y centrado, manteniendo la estética limpia.
- [ ] **Footer**: Ajustar para que sea el punto final del scroll, manteniendo la simplicidad de Tesla.

### Fase 4: Pulido y Verificación
- [ ] Revisar transiciones de revelado (Reveal Animations) para que sean suaves.
- [ ] Verificar responsividad en móviles (Tesla apila botones verticalmente en pantallas pequeñas).
- [ ] Pruebas visuales con subagente de navegación.

## Consideraciones Técnicas
- El error `@theme` en `index.css` es una advertencia de linting por Tailwind v4, pero no afecta la funcionalidad del sitio.
- Se mantendrá el fondo de "prismas" sutil para dar la profundidad que el usuario solicitó anteriormente, integrándolo con el estilo minimalista.
