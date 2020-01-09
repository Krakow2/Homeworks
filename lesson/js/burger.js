$('.burger-menu').on('click', function (e) {
  e.preventDefault;
  $(this).toggleClass('burger-menu_active');
});
const MenuB = document.querySelector('.burger-menu')
modalB = document.querySelector('.container-bg'),
closeB = document.querySelector('.burger-menu_active')

MenuB.addEventListener('click', () => {
  $('div.container-bg').toggleClass('container-bg_active')
});