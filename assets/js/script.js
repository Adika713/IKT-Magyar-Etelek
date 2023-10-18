document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector('.hamburger');

    hamburgerIcon.addEventListener('click', function () {
      const isMenuOpen = document.body.classList.toggle('menu-open');

      if (isMenuOpen) {
        // Nyitott állapotban vagyunk, átirányítjuk az oldalt
        setTimeout(() => {
          window.location.href = "../dropdown-menu/ipad-menu-dropdown.html";
        }, 300); // Az időpontot az átmenet időzítőjéhez kell igazítani
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const xIcon = document.querySelector('.hamburger-bezaras');

    xIcon.addEventListener('click', function () {
      const isMenuOpen = document.body.classList.toggle('menu-open');

      if (isMenuOpen) {
        // Nyitott állapotban vagyunk, átirányítjuk az oldalt
        setTimeout(() => {
          window.location.href = "../index.html";
        }, 300); // Az időpontot az átmenet időzítőjéhez kell igazítani
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector('.hetfo-hamburger');

    hamburgerIcon.addEventListener('click', function () {
      const isMenuOpen = document.body.classList.toggle('menu-open');

      if (isMenuOpen) {
        // Nyitott állapotban vagyunk, átirányítjuk az oldalt
        setTimeout(() => {
          window.location.href = "../dropdown-menu/ipad-menu-dropdown.html";
        }, 300); // Az időpontot az átmenet időzítőjéhez kell igazítani
      }
    });
  });



  document.getElementById('playButton').addEventListener('click', function() {
    var audio = new Audio('audio/himnusz.mp3');
    audio.play();
  });