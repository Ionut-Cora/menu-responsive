
const menuToggle = document.querySelector('#menu-toggle');
const menuUl = document.querySelector('ul');
let isClicked = false;

menuToggle.addEventListener('click', () => {
    if (!isClicked) {
        menuUl.classList.add('seen');
        isClicked = true;
    } else {
        menuUl.classList.remove('seen');
        isClicked = false;
    }
}, false);
