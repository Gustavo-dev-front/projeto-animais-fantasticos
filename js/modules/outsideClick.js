export default function outsideClick(element, events) {
    const html = document.documentElement;
    events.forEach((event) => {
        html.addEventListener(event, handleOutsideClick);
    });

    function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
            element.classList.remove('ativo');
            events.forEach((event) => {
                html.removeEventListener(event, handleOutsideClick);
            });
        }
    }
}