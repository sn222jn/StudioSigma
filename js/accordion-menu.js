//Right-side accordion text menu
$(document).ready(function () {
    $('.parent').click(function () {
        $('.subMenu').toggleClass('visible', 1500, 'linear');
    });


/**
 * Partner list
 */
    $('.partnerList').click(function () {
        $('.partnerSubList').toggleClass('visible', 1500, 'easeOutCirc');
    });
});
