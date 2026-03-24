# THREAD — Tienda de Ropa Online

> Actividad de maquetación web — Módulo: **Diseño de Interfaces Web** | Ciclo DAW

---

## Descripción

Página principal de una tienda de ropa online maquetada con HTML5 semántico y CSS3 puro.
El proyecto demuestra el uso combinado de las principales técnicas de layout y posicionamiento CSS:
rejilla de 12 columnas, Flexbox, Box Model, posicionamiento fijo/absoluto/sticky, floats, z-index y clear.

---

## Estructura de archivos

```
tienda_ropa_online/
├── index.html   → Estructura semántica HTML5
├── styles.css   → Todos los estilos CSS (variables, layout, responsivo)
├── main.js      → Interactividad: carrito, modal, filtros, slider
└── README.md    → Este archivo
```

---

## Técnicas CSS implementadas

### 1. Rejilla de 12 columnas

Implementada con `CSS Grid` en `.page-wrapper`.  
El sidebar ocupa 3 columnas (`260px` fijo) y el contenido principal las 9 restantes (`1fr`).

```css
.page-wrapper {
  display: grid;
  grid-template-columns: var(--sidebar-w) 1fr;
}
```

### 2. Flexbox

Usado en la galería de productos (`.gallery-grid`) para distribución responsiva automática.  
Cada tarjeta ocupa un tercio del ancho con `flex: 1 1 calc(33.333% - gap)`.  
También aplicado en header, footer, carrito lateral y formulario de newsletter.

```css
.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-6);
}
```

### 3. Box Model

Ajuste explícito de `padding`, `border` y `margin` en todas las secciones.  
`box-sizing: border-box` aplicado globalmente para un modelo predecible.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

### 4. Posicionamiento

| Elemento           | Tipo       | Por qué                              |
| ------------------ | ---------- | ------------------------------------ |
| `.site-header`     | `fixed`    | Siempre visible en la parte superior |
| `.cart-sidebar`    | `fixed`    | Panel lateral siempre accesible      |
| `.hero-badge`      | `absolute` | Anclado al hero banner               |
| `.product-overlay` | `absolute` | Capa sobre la imagen del producto    |
| `.cart-badge`      | `absolute` | Contador sobre el icono del carrito  |
| `.modal-close`     | `absolute` | Botón de cierre dentro del modal     |

### 5. Floats

Usados en la sección `.featured-section` para crear dos columnas de productos destacados.

```css
.float-left {
  float: left;
  margin-right: var(--sp-4);
}
.float-right {
  float: right;
  margin-left: var(--sp-4);
}
```

### 6. Clear

Aplicado con la técnica **clearfix** mediante pseudo-elemento `::after` para limpiar el flujo
tras los elementos flotantes y evitar el colapso del contenedor.

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

### 7. Z-Index — Jerarquía de capas

| Capa            | Elemento         | z-index |
| --------------- | ---------------- | ------- |
| Contenido base  | Página general   | auto    |
| Filtro sticky   | `.filter-bar`    | 800     |
| Cabecera fija   | `.site-header`   | 900     |
| Overlay carrito | `.cart-overlay`  | 1000    |
| Carrito lateral | `.cart-sidebar`  | 1100    |
| Modal           | `.modal-overlay` | 1200    |

### 8. Sticky

Aplicado en la barra de filtros y en el sidebar izquierdo.  
La barra de filtros se pega justo bajo el header fijo al hacer scroll.

```css
.filter-bar {
  position: sticky;
  top: var(--header-h); /* 68px */
  z-index: 800;
}
```

---

## Accesibilidad (a11y)

- Atributos `aria-label` en todos los botones sin texto visible
- `aria-hidden="true"` en elementos decorativos
- `role` semánticos: `banner`, `main`, `complementary`, `contentinfo`, `dialog`
- Clase `.sr-only` para texto exclusivo de lectores de pantalla
- `aria-pressed` en chips de filtro
- `aria-modal="true"` y `aria-labelledby` en el modal

---

## Diseño responsivo

| Breakpoint | Comportamiento                                                |
| ---------- | ------------------------------------------------------------- |
| `≤ 1200px` | Sidebar se estrecha, galería pasa a 2 columnas                |
| `≤ 900px`  | Layout de una columna, floats desactivados                    |
| `≤ 600px`  | Galería de 1 columna, modal apilado, carrito a ancho completo |

---

## SEO

- `<meta name="description">` y `<meta name="keywords">` en el `<head>`
- Un único `<h1>` por página
- HTML semántico: `<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`, `<article>`, `<footer>`
- Atributo `lang="es"` en `<html>`

---

## Interactividad (main.js)

| Función            | Descripción                                          |
| ------------------ | ---------------------------------------------------- |
| Carrito lateral    | Abre/cierra con animación `translateX` + overlay     |
| Modal vista rápida | Se activa al pasar el ratón sobre cualquier producto |
| Chips de filtro    | Toggle del chip activo con `aria-pressed`            |
| Slider de precio   | Actualiza el valor mostrado en tiempo real           |
| Tallas del sidebar | Toggle de la talla seleccionada                      |
| Tecla Escape       | Cierra modal y carrito (accesibilidad de teclado)    |

---

## Variables CSS (Custom Properties)

Todas las variables están definidas en `:root` al inicio de `styles.css`:
colores, tipografía, espaciado, tamaños de layout, sombras, transiciones y radios de borde.  
Esto permite modificar el diseño completo cambiando un único valor.

---

## Cómo visualizar el proyecto

1. Abre VS Code y selecciona **File → Open Folder** apuntando a esta carpeta
2. Clic derecho en `index.html` → **"Open with Live Server"**
3. El proyecto se abrirá en `http://127.0.0.1:5500/index.html`

> **Nota:** Si Live Server muestra un proyecto anterior, borra la caché del navegador  
> con `Ctrl + Shift + Delete` o cambia el puerto en la configuración de VS Code:  
> `"liveServer.settings.port": 5501`

---

## Autor

**Esteban Ospina Orozco** — DAW · Diseño de Interfaces Web
