import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

export function initScrollAnimations() {
  // Reactivar ScrollSmoother
  const smoother = ScrollSmoother.create({
    smooth: 1.2,
    effects: true,
    smoothTouch: 0.1,
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
  });
  console.log("GSAP y ScrollSmoother inicializados");

  // Animaciones para DestinationCard
  const destinationCards = gsap.utils.toArray(
    ".animated-card"
  ) as HTMLElement[];
  destinationCards.forEach((card) => {
    const image = card.querySelector(".card-image");
    const textContentContainer = card.querySelector(".card-text-content");

    if (image && textContentContainer) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none none",
        },
      });
      tl.fromTo(
        image,
        { scale: 1.15, opacity: 0, transformOrigin: "center center" },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
      );
      const textElements = gsap.utils.toArray(textContentContainer.children);
      tl.fromTo(
        textElements,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", stagger: 0.1 },
        "-=0.7"
      );
    }
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.03, duration: 0.3, ease: "power1.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
  });

  // Animaciones para FashionCards
  const fashionCards = gsap.utils.toArray(
    ".fashion-card-item"
  ) as HTMLElement[];
  if (fashionCards.length > 0) {
    gsap.fromTo(
      fashionCards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: fashionCards[0].closest(".px-4.py-24"),
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    fashionCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.04, duration: 0.3, ease: "power1.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" });
      });
    });
  }
}
