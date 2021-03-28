updateTimer();
import {timeTxt} from '../background.js';
function updateTimer() {
	
	console.log(timeTxt);
	if(document.getElementById('timer'))
		document.getElementById('timer').innerHTML = timeTxt;
	setTimeout(updateTimer, 1000);
}