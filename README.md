## Linktree personal de @cristiansan

Construí una app tipo Linktree para centralizar mis proyectos y redes con una estética minimalista estilo terminal (verde sobre fondo oscuro). Está hecha con HTML y React 18 (UMD) usando Babel en el navegador, por lo que no requiere build ni dependencias adicionales.

### Qué incluye
- **Proyectos**: tarjetas con accesos a mis trabajos (Linktree, Freebike, Cocrearte, Carrito y Golf).
- **Redes**: enlaces rápidos a LinkedIn, Instagram y GitHub.
- **Estadísticas**: imagen con mi calendario de contribuciones de GitHub.
- **Estilos**: base en `styles.css` y un sistema de diseño en `design.js` para colores, tipografía y espaciados.

### Estructura del proyecto
- `index.html`: punto de entrada; carga React/ReactDOM/Babel y `app.js`.
- `app.js`: componente principal de React y definición de la lista de links.
- `styles.css`: estilos globales y de componentes (cards, tipografía, layout).
- `design.js`: design system reutilizable (colores, tipografías, utilidades CSS).

### Cómo ejecutarlo
1. Abrí `index.html` directamente en el navegador. Listo.  
   Opcionalmente podés servirlo con cualquier servidor estático.

### Cómo editar mis links
Para agregar o cambiar proyectos, edito el arreglo `links` en `app.js`:

```js
const links = [
  { name: 'Linktree', url: 'https://cristiansan.github.io/linktree/' },
  { name: 'Freebike', url: 'https://cristiansan.github.io/freebike/' },
  { name: 'Cocrearte', url: 'https://cristiansan.github.io/cocrearte/' },
  { name: 'Carrito', url: 'https://cristiansan.github.io/Carrito/' },
  { name: 'Golf', url: 'https://cristiansan.github.io/golf/' },
];
```

### Nota reciente
Agregué el sitio Golf a la lista de proyectos: `https://cristiansan.github.io/golf/`.


