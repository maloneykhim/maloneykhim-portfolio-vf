import './style.css'



// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

//Swiper Cirque Céleste
const swiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  effect: "coverflow",
  loop: true,
  zoom: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//Swiper Illustrations
const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  zoom: true,
  effect: "coverflow",
  centeredSlides: true,


  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});











