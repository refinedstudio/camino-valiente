export const meta = {
  home: {
    title: "Inicio - Camino Valiente",
    description:
      "Descubre Perú con Camino Valiente. Explora la naturaleza, encuentra rutas desde Huancayo y vive experiencias espirituales. Tu guía para viajes conscientes y conexión con la energía andina.",
    keywords:
      "Camino Valiente, viajes Perú, naturaleza Perú, espiritualidad, turismo Perú, blog de viajes, rutas Huancayo, épocas para visitar Perú, tips de viaje, energía andina, aventura Perú, lugares sagrados Perú, bienestar, exploración, rutina espiritual, conexión con la naturaleza",
    canonical: "/",
    image: "/images/camino-valiente-portada-social.jpg",
    type: "website",
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://www.caminovaliente.com/#website",
          name: "Camino Valiente",
          url: "https://www.caminovaliente.com/",
          description:
            "Tu blog de viajes, naturaleza y espiritualidad en Perú. Guías de rutas desde Huancayo y conexión con la energía andina.",
          publisher: {
            "@id": "https://www.caminovaliente.com/#organization",
          },
          inLanguage: "es-PE",
        },
        {
          "@type": "Blog",
          "@id": "https://www.caminovaliente.com/#blog",
          name: "Blog Camino Valiente: Viajes y Espiritualidad",
          description:
            "Descubre guías de viaje, consejos espirituales y rutas por la naturaleza de Perú, enfocadas en Huancayo y la conexión con la energía de los Andes.",
          url: "https://www.caminovaliente.com/",
          about: {
            "@id": "https://www.caminovaliente.com/#website",
          },
          mainEntityOfPage: {
            "@id": "https://www.caminovaliente.com/",
          },
          blogPost: [],
        },
      ],
    },
  },
  about: {
    title: "Sobre mí - Camino Valiente",
    description:
      "Conoce la historia y misión de Camino Valiente: nuestro compromiso con los viajes conscientes, la exploración de la naturaleza y la espiritualidad en Perú.",
    keywords:
      "sobre Camino Valiente, quiénes somos, misión, visión, historia, autor blog de viajes, equipo, espiritualidad, naturaleza, Perú, viajes conscientes",
    canonical: "/acerca",
    image: "/images/camino-valiente-portada-social.jpg",
    type: "website",
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://www.caminovaliente.com/#website",
          name: "Camino Valiente",
          url: "https://www.caminovaliente.com/",
          description: "Información sobre el blog de viajes Camino Valiente.",
          inLanguage: "es-PE",
        },
        {
          "@type": "AboutPage",
          name: "Sobre Camino Valiente",
          url: "https://www.caminovaliente.com/sobre-mi",
          description:
            "Conoce al equipo detrás de Camino Valiente y su filosofía de viajes y espiritualidad.",
          about: { "@id": "https://www.caminovaliente.com/#website" },
        },
      ],
    },
  },
  policy: {
    title: "Política - Camino Valiente",
    description:
      "Lee la política de privacidad de Camino Valiente para entender cómo manejamos tus datos personales, cookies y protecciones en nuestro sitio web.",
    keywords:
      "política de privacidad Camino Valiente, privacidad de datos, protección de datos, uso de cookies, datos personales, términos de servicio",
    canonical: "/politica",
    image: "/images/camino-valiente-portada-social.jpg",
    type: "website",
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://www.caminovaliente.com/#website",
          name: "Camino Valiente",
          url: "https://www.caminovaliente.com/",
          description:
            "Política de privacidad del blog de viajes Camino Valiente.",
          inLanguage: "es-PE",
        },
      ],
    },
  },
  contact: {
    title: "Contacto - Camino Valiente",
    description:
      "Contáctanos en Camino Valiente para consultas, colaboraciones o soporte sobre viajes, naturaleza y espiritualidad en Perú.",
    keywords:
      "contacto Camino Valiente, contactar blog de viajes, ayuda viajes Perú, colaboración, soporte, email Camino Valiente",
    canonical: "/contacto",
    image: "/images/camino-valiente-portada-social.jpg",
    type: "website",
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://www.caminovaliente.com/#website",
          name: "Camino Valiente",
          url: "https://www.caminovaliente.com/",
          description: "Blog de viajes, naturaleza y espiritualidad en Perú.",
          inLanguage: "es-PE",
        },
        {
          "@type": "ContactPage",
          name: "Página de Contacto de Camino Valiente",
          url: "https://www.caminovaliente.com/contacto",
          description:
            "Formulario de contacto y detalles para comunicarse con Camino Valiente.",
          about: { "@id": "https://www.caminovaliente.com/#website" },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+51-987-654-321",
            contactType: "customer service",
            email: "contacto@caminovaliente.com",
          },
        },
      ],
    },
  },
};
