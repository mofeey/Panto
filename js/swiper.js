const swiper = new Swiper('.swiper', {

    spaceBetween: 42,
  breakpoints: {
          480: {
              slidesPerView: 1,
          },
          575.99: {
              slidesPerView: 2,
          },
          767.99: {
              slidesPerView: 2,
          },
          991.99: {
              slidesPerView: 3,
          },
          1199.9: {
              slidesPerView: 4,
          },
          1440: {
              slidesPerView: 4,
          },
      },
  // Navigation arrows
    navigation: {
        nextEl: '.products-slider__btn_next',
        prevEl: '.products-slider__btn_prev',
  },
});

