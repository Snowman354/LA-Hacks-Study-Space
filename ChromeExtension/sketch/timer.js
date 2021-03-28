
import {timeTxt, stopTimer, setTimer} from '../background.js';
let resetBtn = document.getElementById('resetBtn');
let setBtn = document.getElementById('setBtn');
let sTime = document.getElementById('startTime');
resetBtn.onclick = function() {stopTimer()};
setBtn.onclick = function() {setTimer(sTime.value)};
updateTimer();
function updateTimer() {
	
	console.log(timeTxt);
	if(document.getElementById('timer'))
		document.getElementById('timer').innerHTML = timeTxt;
	setTimeout(updateTimer, 1000);
}
