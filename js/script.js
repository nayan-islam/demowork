$('.topLeftSlider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
});
$('.topRightSlider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 1000,
});

// ====================================================================================
$('.childSlider1').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    fade: true
});
$('.childSlider2').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    fade: true
});
$('.childSlider3').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    fade: true
});
$('.videoSlider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
});
// ====================================================================================
const swiper1 = new Swiper('.swiper1', {
    direction: 'vertical',
    loop: true,
    autoplay: true,
    speed: 2000,
  });

// const swiper2 = new Swiper('.swiper2', {
//     direction: 'horizontal',
//     loop: true,
//     autoplay: true,
//     speed: 2000,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     // navigation: {
//     //   nextEl: '.swiper-button-next',
//     //   prevEl: '.swiper-button-prev',
//     // },
  
//     // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
//   });

