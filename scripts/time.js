var start = new Date(Date.UTC(2011,9,25)),
	end = new Date(Date.UTC(2015,3,13,23,0,0,0)),
	now = new Date();

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
	var now = new Date();
	var distance = end - now;
	if (distance < 0) {
		clearInterval(timer);
		document.getElementById('days').innerHTML = '00';
		document.getElementById('hrs').innerHTML = '00';
		document.getElementById('mins').innerHTML = '00';
		document.getElementById('secs').innerHTML = '00';
		return;
	}else{
		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);
		if(days < 10) days = '0' + days;
		if(hours < 10) hours = '0' + hours;
		if(minutes < 10) minutes = '0' + minutes;
		if(seconds < 10) seconds = '0' + seconds;
		document.getElementById('days').innerHTML = days;
		document.getElementById('hrs').innerHTML = hours;
		document.getElementById('mins').innerHTML = minutes;
		document.getElementById('secs').innerHTML = seconds;
		
	}
}

timer = setInterval(showRemaining, 1000);