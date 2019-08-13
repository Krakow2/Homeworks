
// чехбох

const checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach(function(elem) {
  elem.addEventListener('change', function () {
    if (this.checked === true) {
      this.nextElementSibling.classList.add('checked');
    } else {
      this.nextElementSibling.classList.remove('checked');
    }
  });
});
// конец чехбох

// корзина
const btnCart = document.getElementById('cart');
 modalCart = document.querySelector('.cart'),
 closeBtb = document.querySelector('.cart-close'),
 countGoods = document.querySelector('.counter');

btnCart.addEventListener('click', () => {
  // modalCart.style.display = 'flex';
  modalCart.style.cssText = 'display: flex'
  document.body.style.overflow = 'hidden'
});

closeBtb.addEventListener('click', () => {
  modalCart.style.cssText = 'display: none'
  document.body.style.overflow = ''
});
// корзина конэц

// работа с ТаВаРаМ

const cards = document.querySelectorAll('.goods .card'),
  cartWrapper = document.querySelector('.cart-wrapper'),
  cartEmpty = document.getElementById('cart-empty');

cards.forEach((card) => {
  const btn = card.querySelector('button');

  btn.addEventListener('click', () => {
    const cardClone = card.cloneNode(true);
    cartWrapper.appendChild(cardClone);
    cartEmpty.remove();
    showData();
  });

});

function showData() {
  const cardsCart = cartWrapper.querySelectorAll('.card');
  countGoods.textContent = cardsCart.length;
}

// НЕ работа (((