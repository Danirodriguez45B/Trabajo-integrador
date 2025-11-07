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

document.addEventListener('DOMContentLoaded', () => {

    const principalPage = document.getElementById('page-principal');
    const principalLink = document.getElementById('nav-principal');
    if (principalPage) principalPage.classList.add('active');
    if (principalLink) principalLink.classList.add('active');
});

const contactForm = document.getElementById('contact-form');
const errorContainer = document.getElementById('form-validation-errors');
const successContainer = document.getElementById('form-success-data');
const errorMessages = document.querySelectorAll('.error-message');

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const phoneRegex = /^\+?(\d[\d\s-]*){8,}$/; 

function displayFieldError(fieldId, message) {
    const errorElement = document.getElementById(`error-${fieldId}`);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearErrors() {
    errorMessages.forEach(el => el.textContent = '');
    errorContainer.innerHTML = '';
    errorContainer.style.display = 'none';
}

function validateForm(data) {
    const errors = [];
    clearErrors();
    
    const nombre = data.get('nombre').trim();
    const email = data.get('email').trim();
    const telefono = data.get('telefono').trim();
    const mensaje = data.get('mensaje').trim();


    if (nombre === '') {
        errors.push('El campo Nombre es obligatorio.');
        displayFieldError('nombre', 'Este campo es obligatorio.');
    }
    if (email === '') {
        errors.push('El campo Email es obligatorio.');
        displayFieldError('email', 'Este campo es obligatorio.');
    }
    if (telefono === '') {
        errors.push('El campo Teléfono es obligatorio.');
        displayFieldError('telefono', 'Este campo es obligatorio.');
    }
    if (mensaje === '') {
        errors.push('El campo Mensaje es obligatorio.');
        displayFieldError('mensaje', 'Este campo es obligatorio.');
    }


    if (nombre.length > 50) {
        errors.push('El Nombre no puede exceder los 50 caracteres.');
        displayFieldError('nombre', 'Máximo 50 caracteres.');
    }
    

    if (email !== '' && !emailRegex.test(email)) {
        errors.push('El formato del Correo Electronico no es valido.');
        displayFieldError('email', 'Formato de email incorrecto (ej: usuario@dominio.com).');
    }
    
    if (telefono !== '' && !phoneRegex.test(telefono)) {
        errors.push('El formato del Teléfono no es válido (mínimo 8 dígitos).');
        displayFieldError('telefono', 'Formato de teléfono incorrecto (ej: +54 9 11 1234-5678).');
    }
    
    return errors;
}

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        successContainer.style.display = 'none';
        
        const formData = new FormData(contactForm);
        const validationErrors = validateForm(formData);

        if (validationErrors.length > 0) {
            errorContainer.style.display = 'block';
            errorContainer.innerHTML = '<strong>Alerta de S.H.I.E.L.D.:</strong> Necesitas corregir estos errores:<ul>' + 
            validationErrors.map(err => `<li>${err}</li>`).join('') + 
            '</ul>';
        } else {
            clearErrors();
            
            successContainer.style.display = 'block';
            successContainer.innerHTML = ''; 

            const successTitle = document.createElement('h3');
            successTitle.textContent = '¡Reporte Enviado al Cuartel General!';
            successContainer.appendChild(successTitle);

            const confirmationText = document.createElement('p');
            confirmationText.textContent = 'Tu mensaje fue recibido. Un Agente se comunicara contigo pronto para el seguimiento de la mision.';
            successContainer.appendChild(confirmationText);
            
            const dataList = document.createElement('ul');
            
            for (const [key, value] of formData.entries()) {
                const listItem = document.createElement('li');
                const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace('-', ' ');
                listItem.innerHTML = `<strong>${formattedKey}:</strong> ${value}`;
                dataList.appendChild(listItem);
            }
            
            successContainer.appendChild(dataList);
            
            contactForm.reset();
        }
    });
}