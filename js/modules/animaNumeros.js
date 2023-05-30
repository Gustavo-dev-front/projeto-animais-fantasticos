export default function animaNumeros() {
    const numbersToAnimate = Array.from(document.querySelectorAll('.container-numeros span'));
    const observer = new MutationObserver(handleObserver);
    const elementToObserve = document.querySelector('#numeros');
    observer.observe(elementToObserve, { attributes: true });

    function animar() {
        numbersToAnimate.forEach((n) => {
            const total = +n.innerText;
            let acumulator = 0;

            const timer = setInterval(() => {
                n.innerText = Math.floor(acumulator += (total * 0.01));
                if (acumulator >= total) {
                    n.innerText = total;
                    clearInterval(timer);
                }
            }, 20 * Math.random());
        });
    }

    function handleObserver() {
        observer.disconnect();
        animar();
    }

}



