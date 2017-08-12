        $(window).scroll(function () {
            if ($(document).scrollTop() > 80) {
                $('nav').addClass('shrink');
            } else {
                $('nav').removeClass('shrink');
            }
        });