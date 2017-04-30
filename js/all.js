jQuery(document).ready(function($) {
    /*-------------------------------------*/

    // nav scrollTop
    $('.header_nav a').click(function(e) {
        var btnId = $(this).attr('href');

        $('html , body').animate({
            scrollTop: $(btnId).offset().top
        }, 800)
    });

    $('#showmenu').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });

});
