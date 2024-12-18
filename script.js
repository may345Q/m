let index = 0;  
const slides = document.querySelectorAll('.carrusel__contenido img');  
const totalSlides = slides.length;  

function showSlide(n) {  
    if (n >= totalSlides) index = 0;  
    if (n < 0) index = totalSlides - 1;  
    
    slides.forEach((slide, i) => {  
        slide.style.display = i === index ? 'block' : 'none';  
    });  
}  

function nextSlide() {  
    index++;  
    showSlide(index);  
}  

function prevSlide() {  
    index--;  
    showSlide(index);  
}  

document.getElementById('nextBtn').addEventListener('click', nextSlide);  
document.getElementById('prevBtn').addEventListener('click', prevSlide);  

// Inicializar el carrusel mostrando el primer slide  
showSlide(index);