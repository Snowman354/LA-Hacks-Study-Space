import { timeTxt, stopAndResetTimer, setTimer } from '../../background.js';
let stopAndResetBtn = document.getElementById('stopAndResetBtn');
let setBtn = document.getElementById('setBtn');
let sTime = document.getElementById('startTime');
stopAndResetBtn.onclick = function () {
  stopAndResetTimer();
  document.getElementById('startTime').value = '';
};
setBtn.onclick = function () {
  setTimer(sTime.value);
};
updateTimer();
function updateTimer() {
  if (document.getElementById('timer'))
    document.getElementById('timer').innerHTML = timeTxt;
  setTimeout(updateTimer, 1000);
}
