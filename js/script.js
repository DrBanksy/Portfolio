$(document).ready(function(){
	$('#slides').superslides({
		animation: 'fade',
		play:  6000,
		pagination: false
	});

	var typed = new Typed(".typedAnim", {
		strings: ["Computer Science Student @ TUD.", "Web Developer.", "Data Analyst."],
		typeSpeed: 50,
		startDelay: 1000,
		loop: true,
		loopCount: Infinity,
		showCursor: false

	});

	$('.owl-carousel').owlCarousel({
	    loop:false,
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
	            items:4
	        }
	    }
	});


	//get position of skills container
    var skillsTopOffset = $(".skillSection").offset().top;

    $(window).scroll(function(){
    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
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

    		 $('.item1').easyPieChart({
	            easing: 'easeInOut',
	            barColor: 	'#e74c3c',
	            trackColor: false,
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from, to, percent) {
	            	$(this.el).find('.percent').text(Math.round(percent));
            	}
    		});

    		$('.item2').easyPieChart({
	            easing: 'easeInOut',
	            barColor: 	'#238636',
	            trackColor: false,
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from, to, percent) {
	            	$(this.el).find('.percent').text(Math.round(percent));
            	}
    		});

    		$('.item3').easyPieChart({
	            easing: 'easeInOut',
	            barColor: 	'#f2c811',
	            trackColor: false,
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from, to, percent) {
	            	$(this.el).find('.percent').text(Math.round(percent));
            	}
    		});

    		$('.item4').easyPieChart({
	            easing: 'easeInOut',
	            barColor: 	'#107c41',
	            trackColor: false,
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from, to, percent) {
	            	$(this.el).find('.percent').text(Math.round(percent));
            	}
    		});
    	}
    });


    // $("[data-fancybox]").fancybox();

    $(".items").isotope({
    	filter: "*",
    	animationOptions: {
    		duration: 1500,
    		easing: 'linear',
    		queue: false
    	}
    });

    $("#filters a").click(function() {
    	$("#filters .current").removeClass("current");
    	//this refers to the element that was clicked on
    	$(this).addClass("current");

    	//get value associated with the attribute 'data-filter'
    	var selector = $(this).attr("data-filter");
		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		})

		// returning essentially means dont do anything else aka break
		return false;

    });

    const nav = $("#navigation");
    const navTop = nav.offset().top; // calculated when page loads

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation(){
    	console.log("hello");
    	const body = $("body");

    	/*
	    	when page is scrolled past the top of the navbar apply
	    	fixed class
    	*/ 
    	if($(window).scrollTop() >= navTop) {
    		body.css("padding-top", nav.outerHeight() + "px");
    		body.addClass("fixedNavbar");
    	} else {
    		body.css("padding-top", 0);
    		body.removeClass("fixedNavbar");
    	}
    }

    // $("#navigation li a").click(function(e) {
    // 	e.preventDefault();

    // 	// get href attr of item we clicked on
    // 	var targetElement = $(this).attr("href");

    // 	var targetPosition = $(targetElement).offset().top;
    // 	$("html, body").animate({scrollTop: targetPosition - 50}, 500);
    // });

});

function decode(a) {
	return a.replace(/[a-zA-Z]/g, function(c){
		return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) 
				                               ? c : c - 26);
	})
}; 
				
function wordPlay(element) {
	var y = decode("znvygb:pbeznp.fzvgu23@tznvy.pbz");
	element.setAttribute("href", y);
	element.setAttribute("onclick", "");
	element.firstChild.nodeValue = "Message";
};
