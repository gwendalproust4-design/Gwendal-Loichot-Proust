document.addEventListener('DOMContentLoaded', () => {

    // Configuration de l'observer pour l'animation au scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Déclenche l'animation quand 10% de l'élément est visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optionnel : arrêter d'observer une fois animé pour la perf
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Sélectionner tous les éléments à animer
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
});