function initAnimaisTexts() {
  const listaImagens = document.querySelectorAll(".js-animais-lista img");

  function ativarTexto(event) {
    const textToHidde = document.querySelector(
      ".js-animais-descricao .js-display-on"
    );
    const textToShow = document.querySelector(
      `.js-animais-descricao [data-animal='${event.target.getAttribute(
        "data-animal"
      )}']`
    );
    textToHidde.classList.remove("js-display-on");
    textToShow.classList.add("js-display-on");
  }

  listaImagens.forEach((img) => {
    img.addEventListener("click", ativarTexto);
  });
}
initAnimaisTexts();

function initFaq() {
  const listaFaq = document.querySelectorAll("#faq dl dt");
  listaFaq[0].nextElementSibling.classList.add("js-display-on");

  function abrirResposta(event) {
    const textToShow = event.target.nextElementSibling;
    textToShow.classList.toggle("js-display-on");
    event.target.classList.toggle("js-display-on");
  }

  listaFaq.forEach((item) => {
    item.addEventListener("click", abrirResposta);
  });
}
initFaq();

function initScrollSmooth() {
  const links = document.querySelectorAll('header nav a[href^="#"]');
  console.log(links);

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
initScrollSmooth();

function initAnimationScroll() {
  const sectionsToAnimate = document.querySelectorAll(".js-scroll");

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

initAnimationScroll();
