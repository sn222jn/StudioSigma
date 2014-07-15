$(document).ready(function () {

	$(".content ol ul").hide();

	$(".content ol li").click(function (e) {
		$(this).children("ul").toggle(
			{ left: 200 }, {
				duration: 'slow',
				easing: 'linear'
			})
		return false;
		e.stopPropagation();
	});



});

$('.accordion li').on('mouseenter', function () {
	$(this).find('.menuItem').show(
	{
		duration: 'normal',
		position: 'absolute',
		slide: 'down'
	});
}).on('mouseleave', function () {
	$(this).find('.menuItem').hide(
	{
		duration: 'normal'
	});
});
