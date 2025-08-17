interface Props {
  imageUrl: string;
  title: string;
  subtitle: string;
  id: string;
}

export const CarouselSlide: React.FC<Props> = ({
  imageUrl,
  title,
  subtitle,
  id,
}) => (
  <a href={`/${id}`} target="_blank" className="flex flex-col h-full transition-transform duration-300 hover:translate-y-[-5px] cursor-pointer">
    <div className="relative overflow-hidden mb-4 aspect-[3/4]">
      <img loading="lazy"
        src={imageUrl}
        alt={subtitle}
        className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
      />
    </div>
    <div className="text-center px-2">
      <h3 className="text-base uppercase tracking-wider text-stone-600 mb-1 font-medium font-playfair-display">
        {title}
      </h3>
      <p className="font-bold text-stone-800 text-base uppercase">{subtitle}</p>
    </div>
  </a>
);
