import type React from "react";
import { useEffect, useRef, useState } from "react";
// Importamos Swiper y sus módulos
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules"; // Eliminado Pagination
import type { NavigationOptions } from "swiper/types";
// Importamos los estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
// Eliminado import "swiper/css/pagination"

// Definimos la interfaz para los datos de cada outfit
interface OutfitData {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
}

// Componente para cada slide de outfit
const OutfitSlide: React.FC<{
  outfit: OutfitData;
  isFirstVisible: boolean;
}> = ({ outfit, isFirstVisible }) => {
  const { imageUrl, title, subtitle, description } = outfit;

  return (
    <div className="flex flex-col items-center h-screen px-4 justify-center">
      <div
        className={`flex flex-col items-center transition-all duration-300 w-full ${
          isFirstVisible ? "h-[100%]" : "h-[90%]"
        }`}
      >
        <div
          className={`w-full overflow-hidden transition-all duration-300 h-full`}
        >
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={`${title} ${subtitle}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center mt-8 px-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-stone-800 font-playfair-display">
            {title}
          </h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            {subtitle}
          </h3>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Componente principal del carrusel
const ArticleCarouselTwo: React.FC = () => {
  // Datos de ejemplo para los outfits
  const outfits: OutfitData[] = [
    {
      id: 1,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/63/Paracas_Candelabra_-_Ica%2C_Peru.jpg",
      title: "DESIERTO DE",
      subtitle: "PARACAS",
      description:
        "Ubicado en la costa sur del Perú, el desierto de Paracas es una reserva natural que combina playas, dunas y fauna marina. Es hogar del famoso Candelabro de Paracas, un geoglifo enigmático tallado en la arena.",
    },
    {
      id: 2,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/03/Desierto-Sechura.jpg",
      title: "DESIERTO DE",
      subtitle: "SECHURA",
      description:
        "El desierto más grande del Perú, ubicado en Piura. Con paisajes áridos y místicos, Sechura alberga lagunas escondidas, dunas extensas y una riqueza natural e histórica que sorprende.",
    },
    {
      id: 3,
      imageUrl:
        "https://www.playarojatours.com/wp-content/uploads/2022/07/1200px-Canon_de_los_Perdidos.jpg",
      title: "CAÑÓN DE",
      subtitle: "LOS PERDIDOS",
      description:
        "Un imponente cañón natural en Ica, formado por millones de años de erosión. Este laberinto geológico te invita a explorar sus misteriosas formaciones y paisajes casi lunares.",
    },
    {
      id: 4,
      imageUrl:
        "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/7DDP3PWOZFERJFNABKA3VF5Q7Y.png",
      title: "PLAYA",
      subtitle: "MENDIETA",
      description:
        "Una joya escondida en la Reserva de Paracas. Playa Mendieta destaca por su arena dorada, acantilados dramáticos y aguas tranquilas ideales para relajarse y desconectarse del mundo.",
    },
    {
      id: 5,
      imageUrl:
        "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,dpr=1/tour_img/b16dd0fa388433fd60fc89b8cb41c704f378a9610d15be62e4ed9c3dd17607ad.jpg",
      title: "CANTERAS DE",
      subtitle: "SILLAR",
      description:
        "Ubicadas en Arequipa, estas canteras son la cuna del sillar, la piedra blanca volcánica que da identidad a la arquitectura de la ciudad. Un recorrido por sus túneles y tallados es como viajar en el tiempo.",
    },
    {
      id: 6,
      imageUrl:
        "https://www.peru.travel/Contenido/General/Imagen/es/302/1.1/Vinicunca.jpg",
      title: "CERRO DE",
      subtitle: "SIETE COLORES",
      description:
        "También llamado Vinicunca, esta maravilla natural se encuentra en Cusco a más de 5,000 msnm. Sus franjas multicolores, resultado de minerales milenarios, lo convierten en un destino surrealista.",
    },
  ];

  // Referencias para los botones de navegación
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params.navigation) {
      const navigationOptions = swiperRef.current.params
        .navigation as NavigationOptions;
      navigationOptions.prevEl = prevRef.current;
      navigationOptions.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  // Función para determinar si un slide es el primero visible
  const isFirstVisible = (index: number) => {
    // En vista móvil (un slide a la vez)
    if (window.innerWidth < 768) {
      return index === activeIndex;
    }
    // En vista desktop (dos slides a la vez)
    return index === activeIndex;
  };

  useEffect(() => {
    // Actualizar el índice activo cuando cambia el slide
    const handleSlideChange = () => {
      if (swiperRef.current) {
        setActiveIndex(swiperRef.current.realIndex);
      }
    };

    // Inicializar el evento después de que el componente se monte
    const swiperInstance = swiperRef.current;
    if (swiperInstance) {
      swiperInstance.on("slideChange", handleSlideChange);
    }

    return () => {
      // Limpiar el evento cuando el componente se desmonte
      if (swiperInstance) {
        swiperInstance.off("slideChange", handleSlideChange);
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden w-full relative bg-[#F1E5D7] py-8 sm:py-8 md:py-12 overflow-hidden px-4 sm:px-12 ">
      <div className="flex items-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-light italic text-[#2d2d2d] font-brittany-signature pr-4">
          Desiertos increibles
        </h2>
        <div className="flex-grow h-px bg-stone-500 max-w-md"></div>
      </div>
      <div className="mx-auto relative">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={true}
          className="fashion-swiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            1000: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
          }}
          initialSlide={0}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {outfits.map((outfit, index) => (
            <SwiperSlide key={outfit.id}>
              {({ isActive, isVisible }) => (
                <OutfitSlide
                  outfit={outfit}
                  isFirstVisible={index % outfits.length === activeIndex}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={prevRef}
          className="absolute -left-1 top-1/2 cursor-pointer transform -translate-y-1/2 -translate-x-5 z-10 bg-transparent w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 text-[#2d2d2d]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          ref={nextRef}
          className="absolute -right-1   cursor-pointer top-1/2 transform -translate-y-1/2 translate-x-5 z-10 bg-transparent w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 text-[#2d2d2d]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <style>{`
        .fashion-swiper {
          width: 100%;
          padding-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default ArticleCarouselTwo;
