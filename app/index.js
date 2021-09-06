import spermsRotation from './modules/second-slide';
import './modules/modal';
import './modules/third-slide';

const header = document.querySelector('header');
const main = document.querySelector('main');
const width = document.querySelector('main').offsetWidth;
const firstSlideButton = document.querySelector('.first-slide__button');

let touchStartX = 0;
let touchPositionX = 0;
let sensitivity = width / 32;
let positionOfMain = 0;

header.addEventListener('click', () => {
  positionOfMain = 0;
  nextSlide(positionOfMain);
});

firstSlideButton.addEventListener('click', () => {
    positionOfMain = -width / 3;
    nextSlide(positionOfMain);
    spermsRotation();
});

main.addEventListener('touchstart', (e) => touchStartSwipe(e));
main.addEventListener('touchmove', (e) => touchMoveSwipe(e));
main.addEventListener('touchend', (e) => touchEndSwipe(e));

const touchStartSwipe = (e) => touchStartX = e.changedTouches[0].clientX;
const touchMoveSwipe = (e) => touchPositionX = e.changedTouches[0].clientX;

function touchEndSwipe(e) {
    let resultOfAction = checkAction();

    if (touchStartX === e.changedTouches[0].clientX) {
      return;
    } else if (resultOfAction == 'Swipe Left' && positionOfMain > -width * 2/3) {
      positionOfMain -= width / 3;
      nextSlide();
      spermsRotation();
    } else if (resultOfAction == 'Swipe Right' && positionOfMain != 0) {
      positionOfMain += width / 3;
      nextSlide();
    }
}

function nextSlide() {
    main.style = `transform: translateX(${positionOfMain}px);
                  transition: .5s;`;
}

function checkAction() {
    let diff = touchStartX - touchPositionX,
        msg = '';

    if(Math.abs(diff) > sensitivity) {
      if (diff > 0) {
      msg = "Swipe Left";
    } else {
      msg = "Swipe Right";
    }
    }

    return msg;
}