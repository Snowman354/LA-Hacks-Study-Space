console.log('background go!');

let min = 0, sec = 0;
let time = "00:00";
export {time as timeTxt, stopTimer, setTimer};

function startTimer() {
	sec = sec - 1;
	if(sec < 0) {
		min = min-1;
		sec = 59;
	}
	if(min == -1) {
		min = 0;
		sec = 0;
		time = "00:00";
		alert("time's up!");
		return;
	}
	if(min < -1) {
		min = 0;
		sec = 0;
		time = "00:00";
		return;
	}
	let minTxt = min + "";
	let secTxt = sec + "";
	if(min < 10) minTxt = "0" + min;
	if(sec < 10) secTxt = "0" + sec;

	time = minTxt + ":" + secTxt;

	setTimeout(startTimer, 1000);
}
function stopTimer() {
	min = -2;
	sec = 0;
	time = "00:00";
}
function setTimer(mins) {
	min = +mins;
	sec = 0;
	time = "00:00";
	startTimer();
}
