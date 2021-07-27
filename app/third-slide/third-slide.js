import modal from "../modal/modal";

const modalButton = document.querySelector('.third-slide__button'),
      modalTitle = document.querySelector('.modal__title');

modalButton.addEventListener('click', () => {
  closeAndShowModal();
});

function closeAndShowModal() {
    modal.classList.toggle('modal-hide');
    modal.classList.toggle('modal-show');
    modalTitle.style = `animation-name: fade;
                        animation-duration: .5s;`;
}

export default closeAndShowModal;