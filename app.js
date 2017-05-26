var container = document.querySelector(".container");
var video = document.querySelector("video");
var speed = document.querySelector(".speed");
var value = document.querySelector(".value");
var minRate = 0.4;
var maxRate = 4;
var height = container.offsetHeight;
var offtop = container.offsetTop;
var active = false;

value.style.height = height*(1-minRate)/(maxRate-minRate) + "px";

speed.addEventListener("mousedown", handleDown);
speed.addEventListener("mouseup", handleUp);
speed.addEventListener("mouseleave", handleUp);
speed.addEventListener("mousemove", handleMove);

function handleDown(event) {
	active = true;
}

function handleUp() {
	active = false;
}

function handleMove(event) {
	var currY, part, rate;
	if (active) {
		event.preventDefault();
		currY = event.pageY - offtop;
		part = currY / height;
		value.style.height = currY + "px";
		rate = minRate + (maxRate - minRate) * part;
		video.playbackRate = rate;
	} 
}



