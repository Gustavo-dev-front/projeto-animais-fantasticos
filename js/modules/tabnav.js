export default class TabNav {
  constructor(seletor, container) {
    this.seletor = document.querySelectorAll(seletor);
    this.container = document.querySelector(container);
    this.ativarTexto = this.ativarTexto.bind(this);
  }

  ativarTexto(event) {
    const element = event.target;
    const hidde = this.container.querySelector('[data-display= "on"]');
    const show = this.container.querySelector(`[data-animal='${element.getAttribute("data-animal")}']`);
    hidde.dataset.display = "off";
    show.dataset.display = "on";
  }

  init() {
    this.seletor.forEach((elemento) => elemento.addEventListener("click", this.ativarTexto));
  }
}
