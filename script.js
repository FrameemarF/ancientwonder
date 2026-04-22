document.addEventListener('DOMContentLoaded', function() {

    const cards = document.querySelectorAll('.wonder-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Добавляем класс для анимации
                entry.target.classList.add('visible');
                // Перестаем наблюдать после появления
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        observer.observe(card);
    });
    
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.3}px)`;
            header.style.opacity = 1 - (scrolled / 500);
        }
    });
    
});