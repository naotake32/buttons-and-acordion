document.querySelector('.menu-toggle').addEventListener('click', function() {
  const submenu = document.querySelector('.submenu');
  const button = document.querySelector('.toggle-button');
  if (submenu.classList.contains('open')) {
      submenu.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
  } else {
      submenu.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
  }
});