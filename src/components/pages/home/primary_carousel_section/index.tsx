import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { CarouselSlide } from "./components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface Props {
  slides: {
    id: string;
    imageUrl: string;
    title: string;
    subtitle: string;
  }[];
}
const PrimaryCarouselSection: React.FC<Props> = ({ slides }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <section className="w-full relative bg-[#F1E5D7] py-8 sm:py-8 md:py-12 overflow-hidden px-4 sm:px-12 ">
      <div className="flex flex-col mx-auto px-4">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light italic text-[#2d2d2d] font-brittany-signature pr-4">
            Los más visitados
          </h2>
          <div className="flex-grow h-px bg-stone-500 max-w-md"></div>
        </div>

        <div className="relative z-0">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, EffectFade, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="relative"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <CarouselSlide
                  id={slide.id}
                  imageUrl={slide.imageUrl}
                  title={slide.title}
                  subtitle={slide.subtitle}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            className="absolute -left-4 top-1/2 cursor-pointer transform -translate-y-1/2 -translate-x-5 z-10 bg-transparent w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none"
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
            className="absolute -right-4 cursor-pointer top-1/2 transform -translate-y-1/2 translate-x-5 z-10 bg-transparent w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none"
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
      </div>
    </section>
  );
};

export default PrimaryCarouselSection;
