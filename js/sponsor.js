$('.sponsors-logo-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: false,
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});