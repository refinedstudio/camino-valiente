interface NavHeaderProps {
  onMenuClick: () => void;
  isSearchOpen: boolean;
  onSearchClick: () => void;
  isMobile: boolean;
  hasScrolled: boolean;
}

export const NavHeader = ({
  onMenuClick,
  isSearchOpen,
  onSearchClick,
  isMobile,
  hasScrolled,
}: NavHeaderProps) => {
  return (
    <nav className="flex items-center justify-between px-6 py-6">
      <div className="flex-1">
        <button
          className={`cursor-pointer hover:bg-white/10 transition-colors p-2 ${
            hasScrolled ? "text-neutral-900" : "text-white"
          }`}
          onClick={onMenuClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1
          className={`text-sm sm:text-xl md:text-2xl font-light tracking-[0.25em] text-center ${
            hasScrolled ? "text-neutral-900" : "text-white"
          }`}
        >
          CAMINO VALIENTE
        </h1>
      </div>
      <div className="flex-1 flex items-center justify-end gap-4">
        {!isMobile && !isSearchOpen && (
          <a
            href="#"
            className={`text-xs font-semibold tracking-wider cursor-pointer hover:opacity-80 transition-colors ${
              hasScrolled ? "text-neutral-900" : "text-white"
            }`}
          >
            RECIENTE
          </a>
        )}
        <div className="flex items-center">
          {!isMobile && (
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                width: isSearchOpen ? "300px" : "0px",
                opacity: isSearchOpen ? 1 : 0,
              }}
            >
              <input
                type="text"
                placeholder="Buscar..."
                className={`w-full px-4 py-2 text-sm shadow-md focus:outline-none flex items-center text-neutral-800 ${
                  hasScrolled ? "bg-neutral-100" : "bg-white"
                }`}
                autoFocus={isSearchOpen}
              />
            </div>
          )}
          <button
            className={`z-10 duration-300 ease-in-out cursor-pointer hover:bg-black/10 transition-colors p-2 ${
              hasScrolled ? "text-neutral-900" : "text-white"
            }`}
            onClick={onSearchClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
