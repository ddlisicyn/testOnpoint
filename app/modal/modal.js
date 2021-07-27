import closeAndShowModal from "../third-slide/third-slide";

const modal = document.querySelector('.modal'),
      modalCloseButton = document.querySelector('.modal__close-button'),
      prevText = document.querySelector('.modal__prev-slide'),
      nextText = document.querySelector('.modal__next-slide'),
      circles = document.querySelectorAll('.modal__circle'),
      sliderText = document.querySelectorAll('.modal__text-item');

    let y = 0;

modalCloseButton.addEventListener('click', () => {
closeAndShowModal()
})

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
      closeAndShowModal()
  }
});

nextText.addEventListener('click', () => {
  if (y == 0) {
      y -= 260;

      sliderText.forEach(item => {
          item.style = `transform: translateY(${y}px);`;
          item.classList.toggle('fade');
              setTimeout(() => {
                  item.classList.toggle('fade');
              }, 300);
      })
      circles.forEach(item => {
          item.classList.toggle('modal__circle-active');
          item.classList.toggle('fade');
              setTimeout(() => {
                  item.classList.toggle('fade');
              }, 300);
      });
  }
})

prevText.addEventListener('click', () => {
  if (y == -260) {
      y += 260;

      sliderText.forEach(item => {
          item.style = `transform: translateY(${y}px);`;
          item.classList.toggle('fade');
              setTimeout(() => {
                  item.classList.toggle('fade');
              }, 300);
      })
      circles.forEach(item => {
          item.classList.toggle('modal__circle-active');
          item.classList.toggle('fade');
              setTimeout(() => {
                  item.classList.toggle('fade');
              }, 300);
      });
  }
})

export default modal;

