console.log('background go!');

let min = 0, sec = 30;
let time = min + ":" + sec;
export {time as timeTxt};
startTimer();

function startTimer() {
	sec = sec - 1;
	if(sec < 0) {
		min = min-1;
		sec = 59;
	}
	if(min < 0) {
		min = 0;
		sec = 0;
		alert("time's up!");
		return;
	}
	let minTxt = min + "";
	let secTxt = sec + "";
	if(min < 10) minTxt = "0" + min;
	if(sec < 10) secTxt = "0" + sec;

	time = minTxt + ":" + secTxt;

	setTimeout(startTimer, 1000);
}