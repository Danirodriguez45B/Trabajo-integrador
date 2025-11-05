function showPage(pageId, clickedElement) {
    
    document.querySelectorAll('.page-content').forEach(section => {
        section.classList.remove('active');
    });
    

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    if (clickedElement) {
        clickedElement.classList.add('active');
    }
    
    const errorContainer = document.getElementById('form-validation-errors');
    const successContainer = document.getElementById('form-success-data');
    if (errorContainer) errorContainer.style.display = 'none';
    if (successContainer) successContainer.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {

    const principalPage = document.getElementById('page-principal');
    const principalLink = document.getElementById('nav-principal');
    if (principalPage) principalPage.classList.add('active');
    if (principalLink) principalLink.classList.add('active');
});
const marvelImages = [
    'https://www.showmetech.com.br/wp-content/uploads//2025/03/avengers-doomsday.png', 
    'https://sm.ign.com/t/ign_es/video/s/spider-man/spider-man-brand-new-day-official-day-one-on-set-featurette_721q.1200.jpg', 
    'https://i0.wp.com/punchdrunkcritics.com/wp-content/uploads/2024/07/avengers-doomsday-avengers-secret-wars-scaled.jpg?fit=2560%2C1440&ssl=1', 
    'https://media.vandal.net/m/11-2021/2021112511502752_1.jpg' 
];

let currentIndex = 0;
const carouselImage = document.getElementById('carousel-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateCarousel() {
    if (carouselImage) {
        carouselImage.src = marvelImages[currentIndex];
    }
}

function nextSlide() {
    currentIndex = (currentIndex === marvelImages.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? marvelImages.length - 1 : currentIndex - 1;
    updateCarousel();
}


document.addEventListener('DOMContentLoaded', () => {
    
    if (carouselImage && marvelImages.length > 0) {
        updateCarousel();
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    if (marvelImages.length > 1) {
        setInterval(nextSlide, 5000); 
    }
});