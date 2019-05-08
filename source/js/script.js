  var navMain = document.querySelector('.navigation__list');
  var navToggle = document.querySelector('.navigation__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('navigation__list--close')) {
      navMain.classList.remove('navigation__list--close');
      navMain.classList.add('navigation__list--open');
    } else {
      navMain.classList.add('navigation__list--close');
      navMain.classList.remove('navigation__list--open');
    }
  });

  var link = document.querySelector(".catalog__item-buy");
  var popup = document.querySelector(".popup");
  var close = popup.querySelector(".popup__add-cart");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
  });
