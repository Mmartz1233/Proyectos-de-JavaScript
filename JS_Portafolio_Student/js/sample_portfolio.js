// These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Esta función muestra la primera imagen de la presentación de diapositivas cuando se carga la página.
var slideIndex = 1;
showSlides(slideIndex);

//Esta función cambia la diapositiva cuando se hace clic en las flechas izquierda o derecha
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Esta función cambia la diapositiva cuando se hace clic en los puntos
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // Esto toma todos los elementos con el nombre de clase "mySlides" y los almacena en la matriz de variables "slides".
    var dots = document.getElementsByClassName("dot"); // Esto toma todos los elementos con el nombre de clase "punto" y los almacena en la matriz de variables "puntos
    if (n > slides.length) {slideIndex = 1}; //Si n (el número pasado a la función) es mayor que la longitud de la matriz "slides", slideIndex se establece en 1
    if (n < 1) {slideIndex = slides.length}; // Si n (el número pasado a la función) es menor que 1, te slideIndex se establece en la longitud de la matriz "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //Este bucle for toma cada elemento de la matriz "diapositivas" y establece la visualización en ninguna
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Este bucle for toma cada elemento de la matriz "puntos" y elimina "activo", lo que elimina el estilo activo.
    }
    slides[slideIndex - 1].style.display = "block"; // Esto muestra la imagen en la presentación de diapositivas.
    dots[slideIndex - 1].className += " active"; // Esto agrega el estilo activo al punto asociado con la imagen.
}