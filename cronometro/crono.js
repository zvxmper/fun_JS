let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let timeDisplay = document.getElementById("time");

let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
let h = hours < 10 ? "0" + hours : hours;
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds;
timeDisplay.textContent = `${h}:${m}:${s}`;
}

function startTimer() {
if (timer !== null) return;
timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
    seconds = 0;
    minutes++;
    }
    if (minutes === 60) {
    minutes = 0;
    hours++;
    }
    updateDisplay();
}, 1000);
}

function resetTimer() {
clearInterval(timer);
timer = null;
[hours, minutes, seconds] = [0, 0, 0];
updateDisplay();
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
