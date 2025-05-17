import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

export function initScrollAnimations() {
  const smoother = ScrollSmoother.create({
    smooth: 1.2,
    effects: true,
    smoothTouch: 0.1,
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
  });
  console.log("GSAP y ScrollSmoother inicializados");

  const destinationCards = gsap.utils.toArray(
    ".animated-card"
  ) as HTMLElement[];
  destinationCards.forEach((card) => {
    const image = card.querySelector(".card-image");
    const imageContainer = image?.closest("[data-reversed]") as HTMLElement;

    if (image && imageContainer) {
      const isReversed =
        imageContainer.getAttribute("data-reversed") === "true";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 60%",
          end: "bottom 50%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        image,
        {
          x: isReversed ? 100 : -100,
          opacity: 0,
          transformOrigin: "center center",
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );
    }

    card.addEventListener("mouseenter", () => {
      gsap.to(card, { duration: 0.3, ease: "power1.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { duration: 0.3, ease: "power1.out" });
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
