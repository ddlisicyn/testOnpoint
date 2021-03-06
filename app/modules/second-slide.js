const sperms = document.querySelectorAll('.second-slide__sperms img');
const scrollerButton = document.querySelector('.second-slide__scroll');
const secondSlideText = document.querySelector('.second-slide__description-information p');

let trigger = 1;

function spermsRotation() {
    if (trigger === 1) {
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

scrollerButton.addEventListener('touchmove', (e) => touchMoveScroller(e));
scrollerButton.addEventListener('touchend', (e) => e.stopPropagation()); 

function touchMoveScroller(e) {
    const offsetTop = document.getElementsByClassName('second-slide__scroll-line')[0].offsetTop;
    const offsetTopText = document.getElementsByClassName('second-slide__description-information')[0].getElementsByTagName('p')[0].offsetTop;
    const height = document.getElementsByClassName('second-slide__scroll-line')[0].clientHeight;

    let diffScroller = e.changedTouches[0].clientY - offsetTop;
    let diffText = (e.changedTouches[0].clientY - offsetTopText) / 1.5;

        if (diffScroller < height && diffScroller > 0) {
            scrollerButton.style = `transform: translateY(${diffScroller}px)`;
        }

        if (diffText < 250 && diffScroller > -25) {
            secondSlideText.style = `transform: translateY(${-diffText}px)`;
        }
}

export default spermsRotation;