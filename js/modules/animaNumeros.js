export default class AnimaNumeros {
  constructor(elementsToAnimate, containerToObserve) {
    this.elementsToAnimate = document.querySelectorAll(elementsToAnimate);
    this.containerToObserve = document.querySelector(containerToObserve);
  }

  animar() {
    this.elementsToAnimate.forEach((n) => {
      const total = +n.innerText;
      let accumulator = 0;

      const timer = setInterval(() => {
        n.innerText = Math.floor((accumulator += total * 0.01));
        if (accumulator >= total) {
          n.innerText = total;
          clearInterval(timer);
        }
      }, 20 * Math.random());
    });
  }

  handleObserver() {
    this.observer.disconnect();
    this.animar();
  }

  addObserver() {
    this.handleObserver = this.handleObserver.bind(this);
    this.observer = new MutationObserver(this.handleObserver);
    this.observer.observe(this.containerToObserve, { attributes: true });
  }

  init() {
    this.addObserver();
  }
}
