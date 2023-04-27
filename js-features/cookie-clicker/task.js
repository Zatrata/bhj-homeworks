const coocieImg = document.getElementById ("cookie");
const clickerСounter = document.getElementById ("clicker__counter");
let trueWidth = true;
function timeKiller() {
    const counter = parseInt(clickerСounter.textContent);
    clickerСounter.textContent = counter + 1;
    if (trueWidth) {
        coocieImg.width = 250;
        trueWidth = false;
    } else {
        coocieImg.width = 200;
        trueWidth = true;
    }
}
coocieImg.onclick = timeKiller;

