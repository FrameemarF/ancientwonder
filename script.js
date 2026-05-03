document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;

        header.style.transform = `translateY(${scrolled * 0.3}px)`;
        
        let newOpacity = 1 - (scrolled / 500);
        if (newOpacity < 0) newOpacity = 0;
        header.style.opacity = newOpacity;
    });
    
});