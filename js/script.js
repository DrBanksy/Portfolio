$(document).ready(function(){
	$(window).resize(checkScreenRes)

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
	        968: {
	        	items:4
	        }
	    }
	});

	//get position of skills container
    var skillsTopOffset = $(".skillSection").offset().top;

    $(window).scroll(function(){
    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
    		$('#chart').easyPieChart({
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
	            trackColor: true,
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
	            trackColor: true,
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
	            trackColor: true,
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
	            trackColor: true,
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from, to, percent) {
	            	$(this.el).find('.percent').text(Math.round(percent));
            	}
    		});

    		$('.item5').easyPieChart({
	            easing: 'easeInOut',
	            barColor: 	'#0556f3',
	            trackColor: true,
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from, to, percent) {
	            	$(this.el).find('.percent').text(Math.round(percent));
            	}
    		});

    		$('.item6').easyPieChart({
	            easing: 'easeInOut',
	            barColor: 	'#7f52ff',
	            trackColor: true,
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from, to, percent) {
	            	$(this.el).find('.percent').text(Math.round(percent));
            	}
    		});

    		$('.item7').easyPieChart({
	            easing: 'easeInOut',
	            barColor: 	'#ff9900',
	            trackColor: true,
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from, to, percent) {
	            	$(this.el).find('.percent').text(Math.round(percent));
            	}
    		});

    		$('.item8').easyPieChart({
	            easing: 'easeInOut',
	            barColor: 	'#e95b46',
	            trackColor: true,
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from, to, percent) {
	            	$(this.el).find('.percent').text(Math.round(percent));
            	}
    		});
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

    
    
});


function checkScreenRes() {
	   	const nav = $(".navbar-brand");
    	const img = $(".aboutImage");
    	const navArrows = $(".slides-navigation");
    	const githubBox = $(".gp-profile");
    	const githubBoxFollow = $(".gp-follow");

    	

    	if($(window).width() < 992) {
    		nav.text("Menu");
    	} else {
    		nav.text("Cormac Smith");
    	}

    	if($(window).width() < 768) {

    		img.css({
    			'width' : '15em',
    			'border-radius':'50%'
    		})

    		navArrows.css({
    			'visibility' : 'hidden'
    		});
    	} else {
    		img.css({
    			'width' : '100%',
    			'border-radius':'5%'
    		});

    		navArrows.css({
    			'visibility' : 'visible'
    		});
    	}

    	// changing size of github box on smaller res devices
    	if($(window).width() < 390) {
    		githubBoxFollow.css({
    			'visibility' : 'hidden'    		
    		})
    		githubBox.css({
    			'width': '16em'
    		})
    	} else {
    		githubBoxFollow.css({
    			'visibility' : 'visibile'    		
    		})
    		githubBox.css({
    			'width': '23em'
    		})
    	}
}


$(window).on('load', function(){
		const loader = $(".loader");
   		const loaderIcon = $(".spinner-border");

   		loaderIcon.delay(500).fadeOut(300);
   		loader.delay(600).fadeOut(500);

   		$(".items").isotope({
	    	filter: "*",
	    	animationOptions: {
	    		duration: 1500,
	    		easing: 'linear',
	    		queue: false
	    	}
	    });
});

$(window).on('load', checkScreenRes);

function decode(a) {
	return a.replace(/[a-zA-Z]/g, function(c){
		return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) 
				                               ? c : c - 26);
	})
}; 
				
function hide(element) {
	var y = decode("znvygb:pbeznp.fzvgu23@tznvy.pbz");
	element.setAttribute("href", y);
	element.setAttribute("onclick", "");
	element.firstChild.nodeValue = "Message";
};







