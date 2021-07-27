import '../css/main.css';
import './first-slide/first-slide.css';
import './second-slide/second-slide.css';
import './third-slide/third-slide.css';
import './modal/modal.css';

import spermsRotation from './second-slide/second-slide';
import './modal/modal';
import './third-slide/third-slide';

const header = document.querySelector('header'),
        main = document.querySelector('main'),
        width = document.querySelector('main').offsetWidth,
        firstSlideButton = document.querySelector('.first-slide__button');

let touchStartX = 0,
    touchPositionX = 0,
    sensitivity = 60,
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
    let resultOfAction = CheckAction();

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

function CheckAction() {
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