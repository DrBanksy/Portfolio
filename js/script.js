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
	element.firstChild.nodeValue = "Open email software";
};
