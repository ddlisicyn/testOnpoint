const firstSlideButton = document.querySelector('.first-slide__button'),
      main = document.querySelector('.main'),
      header = document.querySelector('.main__header'),
      footer = document.querySelector('.main__footer');

let touchStart = 0,
    touchPosition = 0,
    sensitivity = 20,
    x = 0;

firstSlideButton.addEventListener('click', () => {
    x -= 1024;
    nextSlide(x, main);
    prevSlide(-x, header);
    prevSlide(-x, footer);
});

header.addEventListener('click', () => {
    x = 0;
    nextSlide(x, main);
    prevSlide(-x, header);
    prevSlide(-x, footer);
})

main.addEventListener('touchstart', function(e) {
    TouchStart(e);
});
main.addEventListener('touchmove', function(e) {
    TouchMove(e);
});
main.addEventListener('touchend', function(e) {
    TouchEnd(e);
});
main.addEventListener('touchcancel', function(e) {
    TouchCancel(e);
});

function TouchStart(e) {
    touchStart = e.changedTouches[0].clientX;
    touchPosition = touchStart.x;
}

function TouchMove(e) {
    touchPosition = e.changedTouches[0].clientX;
}

function TouchEnd(e) {
    let resultOfAction = CheckAction();

    if (resultOfAction == 'Swipe Left' && x > -2048) {
        x -= 1024;
        nextSlide(x, main);
        prevSlide(-x, header);
        prevSlide(-x, footer);
    } else if (resultOfAction == 'Swipe Right' && x != 0) {
        x += 1024;
        prevSlide(x, main);
        nextSlide(-x, header);
        nextSlide(-x, footer);
    }
}

function CheckAction() {
    let d = touchStart - touchPosition,
        msg = '';

   	if(Math.abs(d) > sensitivity) {
   		if (d > 0) {
            msg = "Swipe Left";
        } else {
   			msg = "Swipe Right";
   		}
   	}

    return msg;
}

function nextSlide(x, element) {
    element.style = `transform: translateX(${x}px);
                     transition: .5s;`;
}

function prevSlide(x, element) {
    element.style = `transform: translateX(${x}px);
                     transition: .5s;`;
}