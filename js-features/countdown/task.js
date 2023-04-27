const time = document.getElementById("timer");
let newTime = getCurrentTime();
function countdownTimer() {
    if (newTime <= 0){
    alert ("Сейчас будет котик!");
    window.location.assign('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2PhmnwxukBBYk5gqspTDFJvEtjUctI51DWehZU1V&s');
    return;
    }

    const newTimer = formatTime(newTime);
    time.textContent = newTimer;
    newTime--;

}
function getCurrentTime() {
    const currentTime = new Date().getTime();
    const currentTimeNumber = +currentTime;
    return currentTimeNumber;
}
function formatTime(time) {
    const date = new Date(time * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
setInterval (countdownTimer, 1000);