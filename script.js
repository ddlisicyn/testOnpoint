const firstSlideButton = document.querySelector('.first-slide__button'),
      main = document.querySelector('.main'),
      header = document.querySelector('.main__header'),
      footer = document.querySelector('.main__footer'),
      sperms = document.querySelectorAll('.second-slide__sperms img'),
      scrollerButton = document.querySelector('.description-scroller__scroll'),
      secondSlideText = document.querySelector('.second-slide__description-information p'),
      modalButton = document.querySelector('.third-slide__button'),
      modal = document.querySelector('.third-slide__modal'),
      modalCloseButton = document.querySelector('.modal__close-button'),
      prevText = document.querySelector('.slider-nav__prev-slide'),
      nextText = document.querySelector('.slider-nav__next-slide'),
      circles = document.querySelectorAll('.slider-nav__circle'),
      sliderText = document.querySelectorAll('.slider-text__item'),
      modalTitle = document.querySelector('.third-slide__modal-title');

let touchStartX = 0,
    touchPositionX = 0,
    touchStartY = 0,
    touchPositionY = 0,
    sensitivity = 100,
    x = 0,
    y = 0,
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
    console.log(touchStartX);
}

function TouchMove(e) {
    touchPositionX = e.changedTouches[0].clientX;
}

function TouchEnd(e) {

    if (touchStartX === e.changedTouches[0].clientX) {
        return;
    }

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
            item.style = `animation-name: spermsRotation;`;
            let time = window.getComputedStyle(item).animationDuration;
            setTimeout(() => {
                item.style = `transform: translate3d(15px, 15px, 0);`;
            }, parseFloat(time) * 1000);
        });
    }
}

scrollerButton.addEventListener('touchmove', function(e) {
    TouchMove2(e);
});


function TouchMove2(e) {
    const offsetTop = document.getElementsByClassName('description-scroller__scroll-line')[0].offsetTop,
          offsetTopText = document.getElementsByClassName('second-slide__description-information')[0].getElementsByTagName('p')[0].offsetTop;     
    let diffScroller = e.changedTouches[0].clientY - offsetTop,
        diffText = (e.changedTouches[0].clientY - offsetTopText) / 1.5;

        if (diffScroller < 360 && diffScroller > 0) {
            scrollerButton.style = `transform: translateY(${diffScroller}px)`;
        }

        if (diffText < 250 && diffScroller > -25) {
            secondSlideText.style = `transform: translateY(${-diffText}px)`;
        }
}


modalButton.addEventListener('click', () => {
    closeAndShowModal()
})

modalCloseButton.addEventListener('click', () => {
    closeAndShowModal()
})

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeAndShowModal()
    }
});

function closeAndShowModal() {
    modal.classList.toggle('hide');
    modal.classList.toggle('show');
    modalTitle.style = `animation-name: fade;
                   animation-duration: .5s;`;
}

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
            item.classList.toggle('slider-nav__circle-active');
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
            item.classList.toggle('slider-nav__circle-active');
            item.classList.toggle('fade');
                setTimeout(() => {
                    item.classList.toggle('fade');
                }, 300);
        });
    }
})
