# Image Carousel Component

## Descripción

Componente React para mostrar un carousel de imágenes usando Swiper.js con navegación, paginación y autoplay.

## Uso

### En componentes Astro

```astro
---
import ImageCarousel from '../path/to/image_carousel/index.tsx';

const carouselImages = [
  {
    url: "https://example.com/image1.jpg",
    alt: "Descripción de la imagen 1",
    caption: "Texto opcional para mostrar sobre la imagen"
  },
  {
    url: "https://example.com/image2.jpg",
    alt: "Descripción de la imagen 2",
    caption: "Otro texto opcional"
  }
];
---

<ImageCarousel
  images={carouselImages}
  className="h-64 w-full"
  showNavigation={true}
  showPagination={true}
  autoplay={true}
  autoplayDelay={3000}
  client:load
/>
```

### En el DestinationCard

Para activar el carousel en una tarjeta de destino, simplemente pasa `isCarousel={true}`:

```astro
<DestinationCard
  id="destino-1"
  location="Costa Rica"
  subtitle="Aventura"
  title="Pura Vida"
  description="Descripción del destino"
  imageUrl="/fallback-image.jpg"
  imageAlt="Costa Rica"
  isReversed={false}
  isCarousel={true}
  carouselImages={[
    {
      url: "https://example.com/costa-rica-1.jpg",
      alt: "Playa en Costa Rica",
      caption: "Playas paradisíacas"
    },
    {
      url: "https://example.com/costa-rica-2.jpg",
      alt: "Selva tropical",
      caption: "Biodiversidad única"
    }
  ]}
/>
```

## Props

### ImageCarousel

- `images`: Array de objetos CarouselImage (requerido)
- `className`: Clases CSS adicionales (opcional)
- `showNavigation`: Mostrar botones de navegación (default: true)
- `showPagination`: Mostrar indicadores de página (default: true)
- `autoplay`: Activar reproducción automática (default: true)
- `autoplayDelay`: Delay entre slides en milisegundos (default: 3000)

### CarouselImage Object

- `url`: URL de la imagen (requerido)
- `alt`: Texto alternativo (requerido)
- `caption`: Texto opcional para mostrar como overlay

## Características

- ✅ Responsive design
- ✅ Autoplay con pausa en hover
- ✅ Navegación con flechas
- ✅ Indicadores de página clickeables
- ✅ Loop infinito
- ✅ Lazy loading de imágenes
- ✅ Transiciones suaves
- ✅ Soporte para captions
- ✅ Estilos personalizados

## Dependencias

- swiper: Para la funcionalidad del carousel
- react: Framework base
