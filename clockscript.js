function displayTime() {
	var h =new Date().getHours();
	var m =new Date().getMinutes();
	var s =new Date().getSeconds();
	var hAngle = h * 30 + (m * .5);
	var mAngle = m * 6;
	var sAngle = s * 6;
	document.getElementById("second").style.transform = 'translate(150px, 50px) rotate('+ sAngle +'deg)';
	document.getElementById("hour").style.transform = 'translate(150px, 75px) rotate('+ hAngle +'deg)';
	document.getElementById("minute").style.transform = 'translate(150px) rotate('+ mAngle +'deg)';
}

function start() {
	displayTime();
	setInterval("displayTime()", 1000);
}