export default function initScrollDisplay() {
    const sectionsToAnimate = document.querySelectorAll("[data-anime='scroll']");
  
    function animateSections() {
      sectionsToAnimate.forEach((section) => {
        const sectionDistanceToTop = section.getBoundingClientRect().top;
        const halfHeightWindow = window.innerHeight / 2;
        if (sectionDistanceToTop - halfHeightWindow <= 0) {
          section.classList.add("ativo");
        }
      });
    }
  
    window.addEventListener("scroll", animateSections);
  }
  