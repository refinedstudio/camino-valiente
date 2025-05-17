interface DrawerMenuProps {
  showDrawer: boolean;
  onClose: () => void;
}

export const DrawerMenu = ({ showDrawer, onClose }: DrawerMenuProps) => {
  return (
    <div
      className="fixed inset-0 z-50 transition-opacity duration-300 ease-in-out"
      style={{
        visibility: showDrawer ? "visible" : "hidden",
        opacity: showDrawer ? 1 : 0,
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-300 ease-in-out"
        style={{ opacity: showDrawer ? 0.5 : 0 }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="absolute top-0 left-0 w-64 max-w-xs h-full bg-white shadow-xl transform transition-all duration-300 ease-in-out"
        style={{
          transform: showDrawer ? "translateX(0)" : "translateX(-100%)",
          opacity: showDrawer ? 1 : 0,
        }}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center justify-between border-b border-neutral-200">
            <button
              className="text-neutral-700 hover:text-neutral-600 transition-colors my-4 cursor-pointer hover:bg-neutral-100 p-2"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="flex-1 py-4 overflow-y-auto">
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="block text-xs font-bold tracking-wider font-lato hover:text-neutral-900 transition-colors text-neutral-800"
                >
                  INICIO
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block text-xs font-bold tracking-wider hover:text-neutral-500 transition-colors"
                >
                  SOBRE NOSOTROS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-xs font-bold tracking-wider hover:text-neutral-500 transition-colors"
                >
                  LOOKBOOK
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-xs font-bold tracking-wider hover:text-neutral-500 transition-colors"
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-xs font-bold tracking-wider hover:text-neutral-500 transition-colors"
                >
                  CONTACTO
                </a>
              </li>
              <li>
                <a
                  href="policies"
                  className="block text-xs font-bold tracking-wider hover:text-neutral-500 transition-colors"
                >
                  POLÍTICA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
