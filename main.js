/********************************************

HOLY MOUNTAIN COMPONENT - FOUC [Flash Of Unstyled Content]

	NOTES
	- 

********************************************/
$(window).on("load", function() {
	$('body').css('transition', '1.0s ease-in-out');
 	$('body').css('opacity', '1');
});
