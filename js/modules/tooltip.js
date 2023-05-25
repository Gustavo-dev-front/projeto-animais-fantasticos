export default function initTooltip() {
    const map = document.querySelector('[data-tooltip]');
    map.addEventListener('mouseenter', onMouseOver);

    function onMouseOver(event) {
        const tooltip = createTooltip(this);
        document.body.appendChild(tooltip);
        tooltip.style.top = `${event.pageY + 20}px`;
        tooltip.style.left = `${event.pageX + 20}px`;

        this.addEventListener('mouseleave', onMouseLeave);
        onMouseLeave.tooltip = tooltip;
        onMouseLeave.map = this;

        onMouseMove.tooltip = tooltip;
        this.addEventListener('mousemove', onMouseMove);
    }

    function createTooltip(element) {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerText = element.dataset.tooltip;
        return tooltip;
    }

    const onMouseLeave = {
        handleEvent() {
            deleteTooltip(this.tooltip);
            this.map.removeEventListener('mousemove', onMouseMove);
            this.map.removeEventListener('mouseleave', onMouseLeave);
        }
    }

    const onMouseMove = {
        handleEvent(event) {
            this.tooltip.style.top = `${event.pageY + 20}px`;
            this.tooltip.style.left = `${event.pageX + 20}px`;
        }
    }

    function deleteTooltip(element) {
        element.remove();
    }
}

