let time = 0;
let timer;
let running = false;

function startTimer() {
  running = true;
  timer = setInterval(function () {
    time++;
    updateDisplay();
  }, 10); // update every 10 milliseconds
}

function stopTimer() {
  running = false;
  clearInterval(timer);
}

function resetTimer() {
  running = false;
  time = 0;
  updateDisplay();
}

function updateDisplay() {
  let milliseconds = time % 100;
  let seconds = Math.floor(time / 100) % 60;
  let minutes = Math.floor((time / (100 * 60)) % 60);
  let hours = Math.floor(time / (100 * 60 * 60));
  milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds < 10 ? "0" + milliseconds : milliseconds;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;
  const display = document.getElementById("display");
  display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
