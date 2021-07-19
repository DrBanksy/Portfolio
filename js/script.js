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
	    items: 4,
	    responsive:{
	    	// 0 to 480 pixels use 1 item
	        0:{
	            items:1
	        },
	        480:{
	            items:3
	        },
	        768:{
	            items:5
	        },
	        938:{
	            items:4
	        }
	    }
	});

	$('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: 	'#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent) {
            	$(this.el).find('.percent').text(Math.round(percent));
            }

    });

});