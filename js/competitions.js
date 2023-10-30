var CompetitionSlider = new Swiper('.competition-slider', {
    effect:'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: false,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4.5,
        slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.competition-slider-next',
        prevEl: '.competition-slider-prev',
        clickable: true,
    },
});