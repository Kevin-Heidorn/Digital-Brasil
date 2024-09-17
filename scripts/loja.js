document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide .product-card');
    const slideWidth = slides[0].offsetWidth;
    let index = 0;

    function updateCarousel() {
        track.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : slides.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        index = (index < slides.length - 1) ? index + 1 : 0;
        updateCarousel();
    });

    // Opcional: Ajustar o tamanho do slide quando a janela for redimensionada
    window.addEventListener('resize', () => {
        slideWidth = slides[0].offsetWidth;
        updateCarousel();
    });
});
