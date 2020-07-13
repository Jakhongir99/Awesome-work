const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
	let day =new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;

	hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;
})


$(document).ready(function() {
	$(".turn-lamp").click(function() {
		$(this).toggleClass("changeColor");
		$(".lamp-into").toggleClass("switch");
		$(".lamp").toggleClass("SwitchBg");
	});
})

$(document).ready(function() {
	$(".turn-fan").click(function() {
		$(this).toggleClass("changeColor");
		$(".spin").toggleClass("spin-rotation");
	})
})