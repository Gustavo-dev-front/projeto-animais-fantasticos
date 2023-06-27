export default class Tooltip {
  constructor(element) {
    this.element = document.querySelector(element);
    this.tooltip;
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseOver(event) {
    const element = event.target;
    this.createTooltip();
    document.body.appendChild(this.tooltip);
    this.tooltip.style.top = `${event.pageY + 20}px`;
    this.tooltip.style.left = `${event.pageX + 20}px`;

    element.addEventListener("mouseleave", this.onMouseLeave);
    element.addEventListener("mousemove", this.onMouseMove);
  }

  createTooltip() {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerText = this.element.dataset.tooltip;
    this.tooltip = tooltip;
  }

  onMouseMove(event) {
    if (event.pageX + this.tooltip.offsetWidth + 40 > window.innerWidth) {
      this.tooltip.style.left = `${event.pageX - 160}px`;
    } else this.tooltip.style.left = `${event.pageX + 20}px`;

    this.tooltip.style.top = `${event.pageY + 20}px`;
  }

  onMouseLeave() {
    this.deleteTooltip(this.tooltip);
    this.element.removeEventListener("mousemove", this.onMouseMove);
    this.element.removeEventListener("mouseleave", this.onMouseLeave);
  }

  deleteTooltip(element) {
    element.remove();
  }

  init() {
    this.element.addEventListener("mouseenter", this.onMouseOver);
    return this;
  }
}
