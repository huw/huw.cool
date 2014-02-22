/******************************* SMOOTH SCROLLING ******/
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});
});

/******************************* TIMER ******/

var end = new Date('04/28/2014 4:00 AM');
var timer;

function countdown() {
    var now = new Date();
    var distance = Math.floor((end - now) / 1000)

    $(".replace").text(distance);
}

timer = setInterval(countdown, 1000); // Start timer

/******************************* JQUERY ******/
$("#me .leftcol img").attr("src", "http://www.gravatar.com/avatar/9531a7acf89bad418f44ab0f695f6c9c?s=" + $(window).innerWidth()*0.27) // Only gets the image size which we initially need


var headerHeight;

var windowUpdate = function() {
	if ($(window).innerWidth() > $(window).innerHeight()) {
		headerHeight = $(window).innerHeight();

		$("img.gear").css("height", $(window).innerHeight()*0.8);
		$("img.gear").css("width", "auto");
	} else {
		headerHeight = $(window).innerWidth() + 40;

		$("img.gear").css("width", $(window).innerWidth()*0.8);
		$("img.gear").css("height", "auto");
	}
	$(".header").css("height", headerHeight);

	if ($(window).width() > 1020) {
		$("#chat > #map").css("height", $(".findme").innerHeight() + 100);
	} else {
		$("#chat > #map").css("height", $(window).innerHeight() * 0.6);
	}
}

$(document).ready(function(){
	windowUpdate();
	
	if ($(window).innerHeight()*0.8 < 240) { // Resize the image based on initial screen width
		$("img.gear").attr("src", "/images/gear.png");
	} else if ($(window).innerHeight()*0.8 < 384) {
		$("img.gear").attr("src", "/images/gear@768.png");
	} else if ($(window).innerHeight()*0.8 < 516) {
		$("img.gear").attr("src", "/images/gear@1030.png");
	} else if ($(window).innerHeight()*0.8 < 828) {
		$("img.gear").attr("src", "/images/gear@1240.png");
	} else if ($(window).innerHeight()*0.8 < 1366) {
		$("img.gear").attr("src", "/images/gear@2048.png");
	} else {
		$("img.gear").attr("src", "/images/gear@full.png");
	}

	/* Resize elements when window is resized */
	$(window).resize(function() {
		windowUpdate();
	});

	/******************************* GOOGLE MAPS ******/
	if ($(window).innerWidth() > 1030) {
		var mapOptions = {
			center           : new google.maps.LatLng(-33.865, 151.278),
			zoom             : 13,
			panControl       : false,
			mapTypeControl   : false,
			streetViewControl: false,
			scrollwheel      : false,

			styles: [{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"off"}]},{"featureType":"administrative", "elementType":"labels.text.fill","stylers":[{"color":"#D9723C"}]}]
		};
		map = new google.maps.Map(document.getElementById("map"), mapOptions);
	}
});