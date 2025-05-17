export interface Testimonial {
  id: number;
  quote: string;
  company: string;
  logo: string;
}

export interface CarouselProps {
  testimonials: Testimonial[];
}
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Gracias a Camino Valiente, descubrí paisajes impresionantes que nunca imaginé. Conocí la riqueza cultural del Perú de una forma auténtica y cercana, desde las alturas de los Andes hasta los misterios de la Amazonía. Cada recorrido fue una experiencia inolvidable, llena de aprendizaje y conexión con la naturaleza. Sin duda, transformaron mi forma de viajar y ver el mundo.",
    company: "Camino Valiente",
    logo: "https://sincerelyjules.com/wp-content/themes/sincerely/assets/img/testimonials/rewardstyle.png",
  },
  {
    id: 2,
    quote:
      "Nuestro viaje con Viajes Andinos comenzó hace casi 10 años, y desde entonces no hemos dejado de vivir aventuras juntos. Nos ayudaron a explorar los rincones más sorprendentes de Sudamérica con rutas únicas y bien organizadas. Su equipo siempre fue profesional, cercano y atento a cada detalle. Gracias a ellos, cada viaje se convirtió en una historia digna de contar.",
    company: "Viajes Andinos",
    logo: "https://sincerelyjules.com/wp-content/themes/sincerely/assets/img/testimonials/rewardstyle.png",
  },
  {
    id: 3,
    quote:
      "La pasión y el conocimiento de Explora Mundo sobre turismo es simplemente excepcional. Nos guiaron por destinos poco conocidos pero fascinantes, siempre cuidando que la experiencia fuera cómoda y enriquecedora. Su creatividad al planificar itinerarios nos permitió vivir viajes únicos, alejados de lo tradicional. Volveríamos a viajar con ellos una y mil veces.",
    company: "Explora Mundo",
    logo: "https://sincerelyjules.com/wp-content/themes/sincerely/assets/img/testimonials/rewardstyle.png",
  },
];
