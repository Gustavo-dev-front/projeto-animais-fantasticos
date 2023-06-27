export default class Modal {
  constructor(container, open, close) {
    this.container = document.querySelector(container);
    this.open = document.querySelector(open);
    this.close = document.querySelector(close);
    this.actionInModal = this.actionInModal.bind(this);
  }

  actionInModal(event) {
    event.preventDefault();
    const elementData = event.target.dataset.modalButton;
    if (elementData === "open") this.openModal();
    else if (elementData === "close") this.closeModal();
  }

  openModal() {
    this.container.dataset.display = "on";
  }

  closeModal() {
    this.container.dataset.display = "off";
  }

  init() {
    this.open.addEventListener("click", this.actionInModal);
    this.close.addEventListener("click", this.actionInModal);
    return this;
  }
  
}

