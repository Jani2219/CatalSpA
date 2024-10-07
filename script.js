let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let texts = document.getElementsByClassName("text");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        texts[i].style.opacity = "0";
        texts[i].style.transform = "translate(-50%, 60%) scale(0)";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    texts[slideIndex-1].style.opacity = "1";
    texts[slideIndex-1].style.transform = "translate(-50%, 50%) scale(1)";
    setTimeout(showSlides, 5000); 
}

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); 

            const targetId = this.getAttribute("href").substring(1); 
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector("header").offsetHeight, // Ajusta la posición superior
                    behavior: "smooth" 
                });
            }
        });
    });

    // Agregar funcionalidad al menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('nav ul').classList.toggle('active');
    });
});

