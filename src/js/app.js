function debounce(func, timeout = 300) {
  var timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, timeout, event);
  };
}

const headerContainer = document.querySelector('.header__container');
const headerMenuButton = document.querySelector('.header__menu');
const headerNavigation = document.querySelector('.header__nav');
const headerContactButton = document.querySelector('.header__btn');

headerMenuButton.addEventListener('click', () => {
  if (headerMenuButton.classList.contains('header__menu_active')) {
    headerMenuButton.classList.remove('header__menu_active');
    headerNavigation.classList.remove('active');
  } else {
    headerMenuButton.classList.add('header__menu_active');
    headerNavigation.classList.add('active');
  }
});

window.addEventListener('load', responsive);

window.addEventListener(
  'resize',
  debounce(() => responsive(), 100)
);

function responsive() {
  if (window.innerWidth <= 425) {
    headerNavigation.appendChild(headerContactButton);
  } else {
    headerContainer.removeChild(headerMenuButton);
    headerContainer.appendChild(headerContactButton);
    headerContainer.appendChild(headerMenuButton);
  }
}
