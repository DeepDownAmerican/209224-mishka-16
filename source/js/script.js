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
