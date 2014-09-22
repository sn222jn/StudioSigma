$(document).ready(function () {
    /*
     * Function that hides project list items
     */
	$(".content ol ul").hide();

	$(".content ol li").click(function (e) {
		$(this).children("ul").toggle(
			{ left: 200 }, {
				duration: 'slow',
				easing: 'linear'
			})
		//e.stopPropagation();
	});

    /*
     * Project image slider
     */
	$(function () {

	    $("#slider").responsiveSlides({
	        manualControls: '#slider-thumbs',
	        maxwidth: 540
	    });
	});

});



 //Right-side accordion text menu
$('.accordion li').on('mouseenter', function () {
	$(this).find('.menuItem').show(
	{
		duration: 'fast',
		position: 'absolute',
		slide: 'down'
	});
}).on('mouseleave', function () {
	$(this).find('.menuItem').hide(
	{
		duration: 'fast'
	});
});
