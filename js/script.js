(function($) {
    var $window = $(window),
        $html = $('html');

    function resize() {
        if ($window.width() < 800) {
            return $html.addClass('mobile');
        }

        $html.removeClass('mobile');
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);








$(document).ready(function() { 
$(".menu-bar").click(function(){
    $(".nav .navigation-menu, .overlay").toggle(500);
	$('body').css('overflow', 'hidden');
});

$(".navigation-menu .fa-times, .mobile .navigation-menu ul li a").click(function(){
    $(".nav div.navigation-menu, .overlay").toggle(500);
	$('body').css('overflow-y', 'visible');
});
})

