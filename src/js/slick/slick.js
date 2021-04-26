// $('.sale-product__container').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots: true,
// });
//
// $('.fashion-product__show__container').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots: true,
// });


$('.sale-product__container').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                autoplay: true,
                autoplayspeed: 1000,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                autoplay: true,
                autoplayspeed: 1000,
            }
        },
        {
            breakpoint: 415,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplay: true,
                autoplayspeed: 1000,
            }
        },




    ]
});

$('.fashion-product__show__container').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                autoplay: false,
                autoplayspeed: 1000,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                autoplay: false,
                autoplayspeed: 1000,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplay: false,
                autoplayspeed: 1000,
            }
        },




    ]
});
