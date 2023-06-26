export default class ScrollSuave {
  constructor(seletor, options) {
    this.seletor = document.querySelectorAll(seletor);
    this.options = options || { behavior: "smooth", block: "start" };
    this.scrollar = this.scrollar.bind(this);
  }

  scrollar(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const elemento = document.querySelector(href);
    elemento.scrollIntoView(this.options);
  }

  init() {
    this.seletor.forEach((elemento) => elemento.addEventListener("click", this.scrollar));
    return this;
  }
}
