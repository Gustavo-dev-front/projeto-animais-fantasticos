export default class MenuMobile {
  constructor(buttonTrigger, events) {
    this.buttonTrigger = document.querySelector(buttonTrigger);
    this.events = events;
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(event) {
    event.preventDefault();
    this.buttonTrigger.classList.toggle("ativo");
  }

  init() {
    this.events.forEach((event) => this.buttonTrigger.addEventListener(event, this.handleButton));
  }
}
