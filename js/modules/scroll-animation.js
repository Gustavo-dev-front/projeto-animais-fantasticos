import debounce from "./debounce.js";

export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
    this.halfHeightWindow = window.innerHeight / 2;
    this.distances;
  }

  getDistance() {
    this.distances = [...this.sections].map((section) => {
      return { element: section, offset: section.offsetTop - this.halfHeightWindow };
    });
  }

  checkDistance() {
    this.distances.forEach((item) => {
      if (item.offset <= window.scrollY) item.element.classList.add("ativo");
    });
  }

  init() {
    this.getDistance();
    window.addEventListener("scroll", this.checkDistance);
    return this;
  }
}
