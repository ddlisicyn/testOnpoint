import closeAndShowModal from "./third-slide";

const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close-button');
const prevText = document.querySelector('.modal__prev-slide');
const nextText = document.querySelector('.modal__next-slide');
const circles = document.querySelectorAll('.modal__circle');
const sliderText = document.querySelectorAll('.modal__text-item');

let positionOfText = 0;

modalCloseButton.addEventListener('click', () => closeAndShowModal());

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeAndShowModal();
    }
});

nextText.addEventListener('click', () => {
    if (positionOfText == 0) {
        positionOfText -= 260;
        textChanging();
    }
});

prevText.addEventListener('click', () => {
    if (positionOfText == -260) {
        positionOfText += 260;
        textChanging();
    }
});

function textChanging() {
    sliderText.forEach(item => {
        item.style = `transform: translateY(${positionOfText}px);`;
        item.classList.toggle('fade');
            setTimeout(() => {
                item.classList.toggle('fade');
            }, 300);
    });

    circles.forEach(item => {
        item.classList.toggle('modal__circle-active');
        item.classList.toggle('fade');
            setTimeout(() => {
                item.classList.toggle('fade');
            }, 300);
    });
}

export default modal;