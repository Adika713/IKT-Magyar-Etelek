document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector('.hamburger');

    hamburgerIcon.addEventListener('click', function () {
      const isMenuOpen = document.body.classList.toggle('menu-open');

      if (isMenuOpen) {
        setTimeout(() => {
          window.location.href = "../dropdown-menu/ipad-menu-dropdown.html";
        }, 300);
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const xIcon = document.querySelector('.hamburger-bezaras');

    xIcon.addEventListener('click', function () {
      const isMenuOpen = document.body.classList.toggle('menu-open');

      if (isMenuOpen) {
        setTimeout(() => {
          window.location.href = "../index.html";
        }, 300);
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector('.hetfo-hamburger');

    hamburgerIcon.addEventListener('click', function () {
      const isMenuOpen = document.body.classList.toggle('menu-open');

      if (isMenuOpen) {
        setTimeout(() => {
          window.location.href = "../dropdown-menu/ipad-menu-dropdown.html";
        }, 300);
      }
    });
  });