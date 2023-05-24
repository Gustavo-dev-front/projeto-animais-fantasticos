export default function initModal() {

    const btOpenModal = document.querySelector('[data-modal-button="open"]');
    btOpenModal.addEventListener('click', actionInModal);

    const btCloseModal = document.querySelector('[data-modal-button="close"]')
    btCloseModal.addEventListener('click', actionInModal);

    const modal = document.querySelector('[data-component="modal-container"]');
    modal.addEventListener('click', actionInModal);

    function actionInModal(event) {
        event.preventDefault();
        if (event.target.dataset.modalButton === 'open')
            openModal();
        /* modal.dataset.display = "on"; */
        else if (event.target.dataset.modalButton === 'close')
            closeModal();
        /* modal.dataset.display = "off"; */
    }

    function openModal() {
        modal.dataset.display = "on";
    }

    function closeModal() {
        modal.dataset.display = "off";
    }

}

