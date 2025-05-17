import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export interface Testimonial {
  id: number;
  quote: string;
  company: string;
  logo: string;
}

export interface CarouselProps {
  testimonials: Testimonial[];
}

export const Carousel: React.FC<CarouselProps> = ({ testimonials }) => {
  const swiperRef = useRef<any>(null);
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);

  const goToPrevious = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="w-full border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-[clamp(1rem,4vw,2rem)] relative">
        <div className="flex items-center justify-between min-h-[clamp(350px,50vh,500px)]">
          {/* Botón Anterior */}
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setIsPrevHovered(true)}
            onMouseLeave={() => setIsPrevHovered(false)}
            className="py-2 px-4 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none z-10
                       md:p-[clamp(0.5rem,1vw,1rem)]"
            aria-label="Anterior"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[clamp(1.25rem,3vw,1.5rem)] h-[clamp(1.25rem,3vw,1.5rem)]"
            >
              {isPrevHovered ? (
                <>
                  <path
                    d="M10 19L3 12L10 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 12H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              ) : (
                <path
                  d="M15 19L8 12L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>

          {/* Swiper Carousel */}
          <Swiper
            ref={swiperRef}
            modules={[A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="flex-1"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col items-center justify-center min-h-[clamp(350px,50vh,500px)] text-center px-[clamp(1.5rem,5vw,4rem)]">
                  <p className="text-[clamp(1.125rem,2.5vw,1.5rem)]text-neutral-700 leading-relaxed  text-sm sm:text-base mb-[clamp(1.5rem,6vw,3rem)]">
                    "{testimonial.quote}"
                  </p>

                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.company} logo`}
                    className="h-[clamp(2.5rem,8vh,4rem)] w-auto object-contain mx-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botón Siguiente */}
          <button
            onClick={goToNext}
            onMouseEnter={() => setIsNextHovered(true)}
            onMouseLeave={() => setIsNextHovered(false)}
            className="py-2 px-4 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none z-10
                       md:p-[clamp(0.5rem,1vw,1rem)]"
            aria-label="Siguiente"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[clamp(1.25rem,3vw,1.5rem)] h-[clamp(1.25rem,3vw,1.5rem)]"
            >
              {isNextHovered ? (
                <>
                  <path
                    d="M14 5L21 12L14 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12H3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              ) : (
                <path
                  d="M9 5L16 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
