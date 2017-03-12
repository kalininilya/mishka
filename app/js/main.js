var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('slider-container');
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
}

function toggleMenu(elem) {
  elem.addEventListener('click', function(e) {
    var mobile_menu = document.querySelector('.mobile-menu__container');
    if (mobile_menu.classList.contains('active') === true) {
      mobile_menu.classList.remove('active');
    } else {
      mobile_menu.classList.add('active');
    }
    e.preventDefault();
  });
}

toggleMenu(document.querySelector('.mobile-menu__icon-close'));
toggleMenu(document.querySelector('.top-menu-mobile__icon-hamburger'));