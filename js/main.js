const mySwiper = new Swiper('.news-tabs__swiper-container', {
  direction: 'vertical',
  loop: true,
  speed: 400,

  //Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 5000,
  },
})