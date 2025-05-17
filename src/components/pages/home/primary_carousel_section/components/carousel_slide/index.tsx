interface Props {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export const CarouselSlide: React.FC<Props> = ({
  imageUrl,
  title,
  subtitle,
}) => (
  <div className="flex flex-col h-full transition-transform duration-300 hover:translate-y-[-5px] cursor-pointer">
    <div className="relative overflow-hidden shadow-md mb-4 aspect-[3/4]">
      <img
        src={imageUrl}
        alt={subtitle}
        className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="text-center px-2">
      <h3 className="text-base uppercase tracking-wider text-stone-600 mb-1 font-medium font-playfair-display">
        {title}
      </h3>
      <p className="font-bold text-stone-800 text-base">{subtitle}</p>
    </div>
  </div>
);
