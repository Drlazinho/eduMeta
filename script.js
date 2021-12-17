const menuBtn = document.querySelector('#menu-btn');
const menuList = document.querySelector('.header .menu')

menuBtn.onclick = () => {
  menuList.classList.toggle('active')
  menuBtn.classList.toggle('fa-times')
}

window.onscroll = () => {
  menuBtn.classList.remove('fa-times')
  menuList.classList.remove('active')
}

var swiper = new Swiper('.home-slider', {
  speed: 800,  //Velocidade de transição de slide
  effect: 'fade',
  grabCursor: true,
  loop:true,
  centeredSlides: true,
  autoplay: { //
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

var swiper = new Swiper(".mySwiper", {
  speed: 3000,
  loop: true,
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.74,
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});