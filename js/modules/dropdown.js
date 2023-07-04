import outsideClick from "./outsideClick.js";

export default class Dropdown {
  constructor(triggerDropdown, events) {
    this.triggerDropdown = document.querySelector(triggerDropdown);
    this.events = events;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const display = this.triggerDropdown.classList.contains("ativo");
    if (!display) this.triggerDropdown.classList.add("ativo");

    outsideClick(this.triggerDropdown, this.events);
  }

  init() {
    this.events.forEach((event) => {
      this.triggerDropdown.addEventListener(event, this.handleClick);
    });
  }
}
