let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let closer = document.querySelector('.header__nav--burger');
let tabsHref = document.querySelectorAll('.howwework__href');
let tabItem = document.querySelectorAll('.tabs-item');
let btnPlus = document.querySelector('.item__top');
let spanPlus = document.querySelector('.item__top__btn');
let searchOpen = document.querySelector('.search-open');
let searchBtn = document.querySelector('.header__search');
let searchClose = document.querySelector('.search');
let closeBtn = document.querySelector('.search--close-btn')

burger.addEventListener('click',
function() {

menu.classList.toggle('header__nav--active');

document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el){
el.addEventListener('click', function(){

menu.classList.remove('header__nav--active');

document.body.classList.remove('stop-scroll');
})
})

closer.addEventListener('click', function() {
    menu. classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
})



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


tabsHref.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsHref.forEach(function(href){href.classList.remove('howwework__href--active')});
    e.currentTarget.classList.add('howwework__href--active');

    tabItem.forEach(function(element){element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


//new Accordion('.accordion');


btnPlus.addEventListener('click',
function() {
spanPlus.classList.add('item__top--active');
});


searchBtn.addEventListener('click',
function() {
  searchClose.classList.remove('dissapear');
  searchOpen.classList.add('dissapear');
});

closeBtn.addEventListener('click',
function() {
  searchOpen.classList.remove('dissapear');
  searchClose.classList.add('dissapear');
});
