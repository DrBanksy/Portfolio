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

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	})

});