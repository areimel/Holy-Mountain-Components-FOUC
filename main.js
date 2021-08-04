/********************************************

HOLY MOUNTAIN COMPONENT - FOUC [Flash Of Unstyled Content]

	NOTES
	- 

********************************************/
$(window).on("load", function() {
	$('body').css('transition', '0.15s ease-in-out');
 	$('body').css('opacity', '1');
});
