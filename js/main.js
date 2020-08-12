const mySwiper = new Swiper('.news-tabs__swiper-container', {
  direction: 'vertical',
  loop: true,

  //Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})