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
	});
});




