document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const carouselItems = document.querySelector('.carousel-items');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    let index = 0;
  
    function showSlide(slideIndex) {
      if (slideIndex >= totalSlides) index = 0;
      else if (slideIndex < 0) index = totalSlides - 1;
      else index = slideIndex;
      carouselItems.style.transform = `translateX(-${index * 100}%)`;
    }
  
    nextBtn.addEventListener('click', () => {
      showSlide(index + 1);
    });
  
    prevBtn.addEventListener('click', () => {
      showSlide(index - 1);
    });
  
    // Automatic slide change every 5 seconds
    setInterval(() => {
      showSlide(index + 1);
    }, 5000);
  
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  });
  
