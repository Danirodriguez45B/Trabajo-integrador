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