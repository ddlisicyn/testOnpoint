import spermsRotation from './modules/second-slide';
import './modules/modal';
import './modules/third-slide';

const header = document.querySelector('header'),
      main = document.querySelector('main'),
      width = document.querySelector('main').offsetWidth,
      firstSlideButton = document.querySelector('.first-slide__button');

let touchStartX = 0,
    touchPositionX = 0,
    sensitivity = width / 32,
    positionOfMain = 0;

header.addEventListener('click', () => {
  positionOfMain = 0;
  nextSlide(positionOfMain);
});

firstSlideButton.addEventListener('click', () => {
    positionOfMain = -width / 3;
    nextSlide(positionOfMain);
    spermsRotation();
});

main.addEventListener('touchstart', function(e) {
  touchStartSwipe(e);
});

main.addEventListener('touchmove', function(e) {
  touchMoveSwipe(e);
});

main.addEventListener('touchend', function(e) {
  touchEndSwipe(e);
});

function touchStartSwipe(e) {
  touchStartX = e.changedTouches[0].clientX;
}

function touchMoveSwipe(e) {
  touchPositionX = e.changedTouches[0].clientX;
}

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