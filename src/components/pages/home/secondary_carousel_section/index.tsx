import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import { OutfitSlide } from "./components";
import { outfits } from "./data";

import "swiper/css";
import "swiper/css/navigation";

const SecondaryCarouselSection: React.FC = () => {
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

  useEffect(() => {
    const handleSlideChange = () => {
      if (swiperRef.current) {
        setActiveIndex(swiperRef.current.realIndex);
      }
    };

    const swiperInstance = swiperRef.current;
    if (swiperInstance) {
      swiperInstance.on("slideChange", handleSlideChange);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", handleSlideChange);
      }
    };
  }, []);

  return (
    <section className="overflow-x-hidden w-full relative bg-[#F1E5D7] py-8 sm:py-8 md:py-12 overflow-hidden px-4 sm:px-12 ">
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
          mousewheel={true}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          rewind={true}
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
              <OutfitSlide
                outfit={outfit}
                isFirstVisible={index % outfits.length === activeIndex}
              />
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
          className="absolute -right-1 cursor-pointer top-1/2 transform -translate-y-1/2 translate-x-5 z-10 bg-transparent w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none"
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
    </section>
  );
};

export default SecondaryCarouselSection;
