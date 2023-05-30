export default function menuMobileShow() {

}

const buttonTrigger = document.querySelector('[data-mobile-menu]');
['click', 'touchstart'].forEach((event) => {
    buttonTrigger.addEventListener(event, handleButton);
});

function handleButton() {
    this.classList.toggle('ativo');
}