const buttonRight = window.document.querySelector('.button-arrow.-right');
const buttonLeft = window.document.querySelector('.button-arrow.-left');
const itensEsconderFinal = window.document.querySelector('.itensEsconderFinal');
let pixels = 0;

buttonRight.addEventListener('click', function() {
    pixels = pixels + 100;
    itensEsconderFinal.style = `transform: translateX(${pixels}px)`;
});

buttonLeft.addEventListener('click', function() {
    pixels = pixels - 100;
    itensEsconderFinal.style = `transform: translateX(${pixels}px)`;
});