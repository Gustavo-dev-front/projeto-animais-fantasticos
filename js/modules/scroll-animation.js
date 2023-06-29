export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.animateSections = this.animateSections.bind(this);
  }

  animateSections() {
    this.sections.forEach((section) => {
      const sectionDistanceToTop = section.getBoundingClientRect().top;
      const halfHeightWindow = window.innerHeight / 2;
      if (sectionDistanceToTop - halfHeightWindow <= 0) section.classList.add("ativo");
    });
  }

  init() {
    window.addEventListener("scroll", this.animateSections);
    return this;
  }
}
