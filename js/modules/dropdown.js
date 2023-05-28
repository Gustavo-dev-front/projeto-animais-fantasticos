import outsideClick from './outsideClick.js';

export default function initDropdown() {
    const triggerDropdown = document.querySelector('[data-dropdown-menu]');
    const events = ['click', 'touchstart'];
    events.forEach((event) => {
        triggerDropdown.addEventListener(event, handleClick);
    });

    function handleClick(event) {
        event.preventDefault();
        const display = this.classList.contains('ativo');
        if (!display)
            this.classList.add('ativo');

        outsideClick(this, events);
    }
}

