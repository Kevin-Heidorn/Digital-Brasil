// projetos.js

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carouselImg = document.getElementById('carousel-img');
    const images = [
      'https://via.placeholder.com/1000x600?text=Projeto+1',
      'https://via.placeholder.com/1000x600?text=Projeto+2',
      'https://via.placeholder.com/1000x600?text=Projeto+3'
    ];
    
    let currentIndex = 0;
  
    function updateCarousel() {
      carouselImg.src = images[currentIndex];
    }
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
      resetInterval(); // Resetar o intervalo ao clicar nos botões
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
      resetInterval(); // Resetar o intervalo ao clicar nos botões
    });
  
    // Inicializa com a primeira imagem
    updateCarousel();
  
    // Troca automática das imagens a cada 15 segundos
    let intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    }, 5000); // 15000 milissegundos = 15 segundos
  
    function resetInterval() {
      clearInterval(intervalId); // Limpar o intervalo existente
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
      }, 15000); // 15000 milissegundos = 15 segundos
    }
  });

  // grupo-atakarejo.js

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.grupo-atakarejo .carousel-button.prev');
    const nextButton = document.querySelector('.grupo-atakarejo .carousel-button.next');
    const carouselImg = document.querySelector('.grupo-atakarejo #carousel-img');
    const images = [
      'https://via.placeholder.com/1000x600?text=Grupo+Atakarejo+1',
      'https://via.placeholder.com/1000x600?text=Grupo+Atakarejo+2',
      'https://via.placeholder.com/1000x600?text=Grupo+Atakarejo+3'
    ];
    
    let currentIndex = 0;

    function updateCarousel() {
      carouselImg.src = images[currentIndex];
    }

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });

    updateCarousel();

    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    }, 5000);
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
    });
  
    // Para fechar o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
      if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('nav-active');
      }
    });
  });
  

