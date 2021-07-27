import closeAndShowModal from "../third-slide/third-slide";

const modal = document.querySelector('.modal'),
      modalCloseButton = document.querySelector('.modal__close-button'),
      prevText = document.querySelector('.modal__prev-slide'),
      nextText = document.querySelector('.modal__next-slide'),
      circles = document.querySelectorAll('.modal__circle'),
      sliderText = document.querySelectorAll('.modal__text-item');

let positionOfText = 0;

modalCloseButton.addEventListener('click', () => {
closeAndShowModal();
});

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

