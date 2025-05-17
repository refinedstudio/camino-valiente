import { useState, useEffect } from "react";
import { useScroll } from "../../../hooks";
import { SearchBar, NavHeader, DrawerMenu, ScrollToTop } from "./components";

export default function Navigation() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [previousScrollY, setPreviousScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isAboutPage, setIsAboutPage] = useState(false);
  const {
    position: { y: currentScrollY },
  } = useScroll();

  useEffect(() => {
    const hasScrolledDown = currentScrollY > previousScrollY;
    const isAboveThreshold = currentScrollY < 400;

    if (hasScrolledDown && isAboveThreshold) {
      setIsHeaderVisible(false);
    } else if (hasScrolledDown) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }

    setPreviousScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const isAboutOrPolicies =
      window.location.pathname.includes("/acerca") ||
      window.location.pathname.includes("/politicas") ||
      window.location.pathname.includes("/contacto");
    setIsAboutPage(isAboutOrPolicies);
  }, []);

  return (
    <>
      <div
        className={`fixed w-full z-50 transition-all ease-linear duration-300 ${
          isHeaderVisible ? "-top-[500px]" : "top-0"
        } ${
          currentScrollY > 0 || isAboutPage
            ? "bg-white border-b border-neutral-200"
            : "bg-transparent border-0 border-transparent"
        }`}
      >
        <NavHeader
          onMenuClick={() => setShowDrawer(true)}
          isSearchOpen={isSearchOpen}
          onSearchClick={() => setIsSearchOpen(!isSearchOpen)}
          isMobile={isMobile}
          hasScrolled={currentScrollY > 0 || isAboutPage}
        />
      </div>
      <div className="fixed top-2 right-6 z-50">
        <SearchBar
          isMobile={isMobile}
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>
      <ScrollToTop show={showScrollTop} />
      <DrawerMenu
        showDrawer={showDrawer}
        onClose={() => setShowDrawer(false)}
      />
    </>
  );
}
