// CREANDO UN TEMPORIZADOR
function countdown(){
    var segundos = document.getElementById("Seconds").value;
    function tick(){
        segundos = segundos -1;
        timer.innerHTML = segundos;
        var tiempo = setTimeout(tick,1000);
        if (segundos == -1){
            alert("el tiempo se acabo");
            clearTimeout(tiempo);
            timer.innerHTML = "";
            
        }
    }
    tick();
}

//CREANDO PRESENTACION
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }