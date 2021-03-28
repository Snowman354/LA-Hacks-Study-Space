console.log('background go!');

let min = 0;
let sec = 0;
let time = '00:00';
let isPaused = true;
export { time as timeTxt, stopAndResetTimer, setTimer, pauseTimer, isPaused };

function startTimer() {
  sec = sec - 1;
  if (sec < 0) {
    min = min - 1;
    sec = 59;
  }
  if (min == -1) {
    min = 0;
    sec = 0;
    time = '00:00';
    alert("time's up!");
    return;
  }
  if (min < -1) {
    min = 0;
    sec = 0;
    time = '00:00';
    return;
  }
  let minTxt = min + '';
  let secTxt = sec + '';
  if (min < 10) minTxt = '0' + min;
  if (sec < 10) secTxt = '0' + sec;

  time = `${minTxt}:${secTxt}`;
  if(isPaused) return;
  setTimeout(startTimer, 1000);
}
function stopAndResetTimer() {
  time = '00:00';
  min = -2;
  sec = 0;

  isPaused = true;
}
function setTimer(mins) {
  min = +mins;
  sec = 0;
  time = '00:00';
  let minTxt = min + '';
  let secTxt = sec + '';
  if (min < 10) minTxt = '0' + min;
  if (sec < 10) secTxt = '0' + sec;

  time = `${minTxt}:${secTxt}`;
}
function pauseTimer(pause) {
  isPaused = pause;
  if(!isPaused) startTimer();
}

