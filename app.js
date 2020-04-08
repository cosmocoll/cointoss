const button = document.getElementsByTagName('input')[2];
const userSelect = document.querySelector('coin:checked');
const prompt = document.getElementsByTagName('p')[0];
const currentPrompt = document.getElementsByTagName('p')[1];
const highPrompt = document.getElementsByTagName('p')[2];

let flipValue = 0;
let currentStreak = 0;
let highStreak = 0;


button.addEventListener('click', ()=> {
    flip();
    check();
}
)

function flip() {
    flipValue = Math.round(Math.random());
 };

 function check() {
    if (flipValue == 1) {
        flipValue = 'heads'
    }
    else {
        flipValue = 'tails'
    };
    if (flipValue == userSelect.value) {
        prompt.textContent = `It was ${userSelect.value}, you win! `
        currentStreak++;
        currentPrompt.textContent = `Current streak: ${currentStreak}`;
            if (currentStreak > highStreak) {
                highStreak++;
                highPrompt.textContent = `High streak: ${highStreak}`;
            }
            else {

            }
    }
    else {
        prompt.textContent = `Sorry, it wasn't ${userSelect.value}, you lose.`
        currentStreak = 0;
        currentPrompt.textContent = 'Current streak: ' + 0;
    }
}