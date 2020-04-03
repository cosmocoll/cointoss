const button = document.getElementsByTagName('input')[2];

const userSelect = document.querySelector('input:checked');

let flipValue = 0;

button.addEventListener('click', ()=> {
    flip();
    check();
}
)

function flip () {
    flipValue = Math.round(Math.random());
 };

 function check() {
    if (flipValue == 1) {
        flipValue = 'heads'
    }
    else {
        flipValue = 'tails;'
    };
    if (flipValue == userSelect.value) {
        console.log('win')
    }
    else {
        console.log('lose')
    }
}