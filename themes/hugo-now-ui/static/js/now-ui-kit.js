$(document).ready(function() {
    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip()

    $(window).scroll(function() {
        var nav = $('nav.navbar');
        var top = 400;
        if ($(window).scrollTop() >= top) {

            nav.removeClass('navbar-transparent');

        } else {
            nav.addClass('navbar-transparent');
        }
    });

});

