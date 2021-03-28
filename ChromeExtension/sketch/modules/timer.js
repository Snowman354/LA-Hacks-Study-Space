import { timeTxt, stopAndResetTimer, setTimer, pauseTimer, isPaused } from '../../background.js';
let stopAndResetBtn = document.getElementById('stopAndResetBtn');
let setBtn = document.getElementById('setBtn');
let sTime = document.getElementById('startTime');
stopAndResetBtn.onclick = function () {
  //stopAndResetTimer();
  document.getElementById('startTime').value = '';
  if(isPaused) {
  	stopAndResetBtn.innerHTML = "Pause";
  	pauseTimer(false);
  }
  else {
  	stopAndResetBtn.innerHTML = "Play";
  	pauseTimer(true);
  }
};
setBtn.onclick = function () {
  setTimer(sTime.value);
};
updateTimer();
function updateTimer() {
  if (document.getElementById('timer'))
    document.getElementById('timer').innerHTML = timeTxt;
  
  setTimeout(updateTimer, 100);
}
