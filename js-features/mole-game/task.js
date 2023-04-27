let dead = document.getElementById ('dead');
let lost = document.getElementById ('lost');
let deadCounter = 0;
let lostCounter = 0;
const getHole = index => document.getElementById(`hole${index}`);

function checkWin(dead, lost) {
    if (dead === 9) {
        alert('выиграл');
        clearCounter()
    } else if (lost === 4) {
        alert('проиграл');
        clearCounter()
    };
};
function clearCounter() {
    dead.textContent = 0;
    lost.textContent = 0;
    deadCounter = dead.textContent;
    lostCounter = lost.textContent;
}
for (let i =1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if (this.className.includes('hole_has-mole')) {
            deadCounter = dead.textContent ++;
            const colorWin = this.style.backgroundColor;
            this.style.backgroundColor = 'green';
            setTimeout(() => {
                this.style.backgroundColor = colorWin;
            }, 100)
        }else {
            lostCounter = lost.textContent ++;
            const colorLose = this.style.backgroundColor;
            this.style.backgroundColor = 'red';
            setTimeout(() => {
                this.style.backgroundColor = colorLose;
            }, 100)
        };
        checkWin(deadCounter, lostCounter);
    };
};
