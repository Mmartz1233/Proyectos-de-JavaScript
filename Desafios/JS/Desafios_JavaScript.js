// agregar la fade-outclase al cuerpo tan pronto como se cargue la página.
document.body.classList.add('fade-out');

window.addEventListener('DOMContentLoaded', () => {
document.body.classList.remove('fade-out');
document.write("entras t?")
});


//formulario
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }else{
        document.write("Registrado");
    }
  }

  //DESAFÍO DEL FORMULARIO DE CONTACTO POP
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  //Desafio SLIDESHOW
  $("#slideshow > div:gt(0)").hide();

    setInterval(function() { 
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
    }, 3000);