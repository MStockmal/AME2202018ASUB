var allImages = [
	'http://www.blackriverbullmastiffs.com/cmsAdmin/uploads/thumb/13_001.jpg',
	'http://cdn.akc.org/Marketplace/Breeds/Bullmastiff_SERP.jpg',
	'https://www.europuppy.com/wp-content/uploads/2018/01/GYEN03bul171112_F3_5.jpg',
	'http://petlandlewiscenter.com/wp-content/uploads/2017/07/928347_800.jpg'
	
];

var currentSlide = 1;


var start = function () {
	var markup = "";
	for (var i=0; i < allImages.length; i++) {
		var imgURL = allImages[i];
		markup = markup + "<div class='slide' style='background-image:url(" + imgURL + ")'></div>";
	}
	console.log(markup)
	$("#slideshowContainer").html(markup);
	
	var markup1 =""
	for (var i = 0; i <allImages.length; i++) {
		markup1 = markup1 + '<button onclick="goToSlide(' + (i+1) + ',1000)">' + (i+1) + '</button>';
	}
	
	$("#numberContainer").html(markup1);
	
	goToSlide(1);
}

var goToSlide = function(n, d) {
	//$("#slideshowContainer .slide").animate({"margin-left": "-100%"});
	if (n < currentSlide) {
		$("#slideshowContainer .slide").stop().animate({"margin-left": "-100%"}, 1000);
		$("#slideshowContainer .slide:nth-of-type(" + currentSlide + ")").stop().animate({"margin-left":"-100%"},1000);
		$("#slideshowContainer .slide:nth-of-type(" + n + ")").stop().css({"margin-left":"100%"}).animate({"margin-left":"0%"},1000);
		
	}
	currentSlide = n;
	
	
	
	console.log(currentSlide);
}
var goNext= function() {
	var n = currentSlide +1;
	if (n> allImages.length) {
		n =1;
	}
	goToSlide(n, 1000);
}
var goPrev= function() {
	var n = currentSlide -1;
	if (n < 1) {
		n = allImages.length;
	}
	goToSlide(n, 1000);
}
