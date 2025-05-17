import React from "react";
import type { OutfitData } from "../../data";

interface Props {
  outfit: OutfitData;
  isFirstVisible: boolean;
}

export const OutfitSlide: React.FC<Props> = ({ outfit, isFirstVisible }) => {
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
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
