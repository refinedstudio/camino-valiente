import { useState, useEffect } from "react";

interface SearchBarProps {
  isMobile: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export const SearchBar = ({ isMobile, isOpen, onClose }: SearchBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isOpen) {
      setIsVisible(true);
    } else {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  if (!isMobile) return null;

  return (
    <>
      {isVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden",
            transition:
              "opacity 300ms ease-in-out, visibility 300ms ease-in-out",
          }}
        >
          <div
            className="fixed inset-0 bg-black/50"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: "opacity 300ms ease-in-out",
            }}
            onClick={onClose}
          />
          <div
            className="bg-white w-[90%] max-w-sm p-4 shadow-xl relative"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-20px)",
              transition:
                "opacity 300ms ease-in-out, transform 300ms ease-in-out",
            }}
          >
            <div className="flex items-center justify-between gap-2 mb-4">
              <h2 className="text-neutral-800 text-base font-black">
                Buscar articulos
              </h2>
              <button
                onClick={onClose}
                className="text-neutral-600 hover:text-neutral-800"
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="flex items-center flex-col">
              <input
                type="text"
                placeholder="Ej. Huancas"
                className="flex-1 px-4 py-2 text-sm bg-neutral-100 focus:outline-none focus:border-neutral-400 w-full"
                autoFocus
              />
              <button className="bg-neutral-900 hover:bg-neutral-800 text-sm w-full py-2 text-white px-4 mt-2">
                Buscar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
