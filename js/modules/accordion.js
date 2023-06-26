export default class Accordion {
  constructor(seletor) {
    this.seletor = document.querySelectorAll(seletor);
  }

  abrirResposta(event) {
    const textToShow = event.target.nextElementSibling;
    if (textToShow.dataset.display !== "on") textToShow.dataset.display = "on";
    else textToShow.dataset.display = "off";
  }

  init() {
    this.seletor[0].nextElementSibling.dataset.display = "on";
    this.seletor.forEach((elemento) => elemento.addEventListener("click", this.abrirResposta));
  }
}
