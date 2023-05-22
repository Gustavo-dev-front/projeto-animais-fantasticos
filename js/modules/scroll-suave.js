export default function initScrollSmooth() {
    const links = document.querySelectorAll('header nav a[href^="#"]');
  
    function sectionScroll(event) {
      event.preventDefault();
      const sectionToShow = document.querySelector(
        event.target.getAttribute("href")
      );
      sectionToShow.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  
    links.forEach((link) => {
      link.addEventListener("click", sectionScroll);
    });
  }