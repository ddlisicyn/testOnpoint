const firstSlideButton = document.querySelector('.first-slide__button'),
      main = document.querySelector('.main'),
      header = document.querySelector('.main__header'),
      footer = document.querySelector('.main__footer'),
      sperms = document.querySelectorAll('.second-slide__sperms img'),
      scrollerButton = document.querySelector('.description-scroller__scroll');

let touchStartX = 0,
    touchPositionX = 0,
    touchStartY = 0,
    touchPositionY = 0,
    sensitivity = 100,
    x = 0,
    currentPosition = 0,
    trigger = 1;

firstSlideButton.addEventListener('click', () => {
    x = -1024;
    nextSlide(x, main);
    prevSlide(-x, header);
    prevSlide(-x, footer);
    spermsRotation();
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
    touchStartX = e.changedTouches[0].clientX;
}

function TouchMove(e) {
    touchPositionX = e.changedTouches[0].clientX;
}

function TouchEnd(e) {
    let resultOfAction = CheckAction();

    if (resultOfAction == 'Swipe Left' && x > -2048) {
        x -= 1024;
        nextSlide(x, main);
        prevSlide(-x, header);
        prevSlide(-x, footer);
        spermsRotation();
    } else if (resultOfAction == 'Swipe Right' && x != 0) {
        x += 1024;
        prevSlide(x, main);
        nextSlide(-x, header);
        nextSlide(-x, footer);
    }
}

function CheckAction() {
    let d = touchStartX - touchPositionX,
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

function spermsRotation() {
    if (trigger == 1) {
        trigger--;
        sperms.forEach(item => {
            item.style = `animation-name: fade;`;
            let time = window.getComputedStyle(item).animationDuration;
            setTimeout(() => {
                item.style = `transform: translate3d(15px, 15px, 0);`;
            }, parseFloat(time) * 1000);
        });
    }
}

scrollerButton.addEventListener('touchstart', function(e) {
    TouchStart2(e);
});
scrollerButton.addEventListener('touchmove', function(e) {
    TouchMove2(e);
});

function TouchStart2(e) {
    touchStartY = e.changedTouches[0].clientY;
    console.log(`1nd: ${touchStartY}`);  
}

function TouchMove2(e) {
    touchPositionY = e.changedTouches[0].clientY;
    console.log(`2nd: ${touchPositionY}`);
    let d = touchPositionY - touchStartY;

    if (d < 360 && d > 0) {
        scrollerButton.style = `transform: translateY(${d}px)`;
        currentPosition = +scrollerButton.style.transform.match(/\d+/g).join('.');
    }
}

