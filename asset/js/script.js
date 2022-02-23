$(document).on('ready', function () {
    $(".center").slick({
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1, /* set centerMode to false to show complete slide instead of 3 */
                        slidesToScroll: 1
                    }
                }
            ]
        }

    );
    $(".center2").slick({
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        }

    );
      $(".center3").slick({
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ]
        }

    );
     $(window).scroll(function(){
        $('.scrolled').toggleClass('fixed-top scrolled-colors',$(this).scrollTop() > 1 , 1000);
    });


});
