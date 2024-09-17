document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
  
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('nav-active');
    });
  });
  
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function() {
    // Alterna a classe 'nav-active' para mostrar ou esconder o menu lateral
    navLinks.classList.toggle('nav-active');
  });
});
