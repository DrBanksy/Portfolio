$(document).ready(function(){
	$('#slides').superslides({
		animation: 'fade',
		play:  6000,
		pagination: false
	});

	var typed = new Typed(".typedAnim", {
		strings: ["Computer Science Student @ TUD.", "Web Developer."],
		typeSpeed: 50,
		startDelay: 1000,
		loop: true,
		loopCount: Infinity,
		showCursor: false

	});

});