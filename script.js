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

  nextBtn.addEventListener('click', () => showSlide(index + 1));
  prevBtn.addEventListener('click', () => showSlide(index - 1));

  // Auto-slide
  setInterval(() => {
    showSlide(index + 1);
  }, 5000);
});
