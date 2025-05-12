// Importación condicional de GSAP y ScrollSmoother
let gsapLoaded = false;

export const initScrollAnimations = async () => {
  try {
    // Intentar importar GSAP
    const gsapModule = await import('gsap');
    const scrollTriggerModule = await import('gsap/ScrollTrigger');
    let scrollSmootherModule;
    
    try {
      scrollSmootherModule = await import('gsap/ScrollSmoother');
    } catch (error) {
      console.warn('ScrollSmoother no se pudo cargar. Usando ScrollTrigger básico.');
    }
    
    const { gsap } = gsapModule;
    const { ScrollTrigger } = scrollTriggerModule;
    gsap.registerPlugin(ScrollTrigger);
    
    if (scrollSmootherModule) {
      const { ScrollSmoother } = scrollSmootherModule;
      gsap.registerPlugin(ScrollSmoother);
      
      // Inicializar ScrollSmoother
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true
      });
    }
    
    gsapLoaded = true;
    console.log('GSAP y ScrollTrigger inicializados correctamente');
    
    // Animar elementos específicos de la página about
    if (window.location.pathname.includes('/about')) {
      console.log('Animaciones específicas para la página About activadas');
      // Aquí puedes añadir las animaciones específicas para about.astro
    }
    
  } catch (error) {
    console.error('Error al inicializar las animaciones de scroll:', error);
  }
}; 