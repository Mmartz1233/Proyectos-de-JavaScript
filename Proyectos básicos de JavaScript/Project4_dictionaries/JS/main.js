//Using dictionaries
function miDiccionario(){// se crea una funcion
    var Animal ={
        Especie:"Dog",
        Especie: "Cat",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sonido:"Bark"
    };// creamos un diccionario con algunas caracteristicas de un animal
    document.getElementById("Diccionario").innerHTML=Animal.Especie;//observamos el comportamiento del diccionario al llamas a la especie  del animal
}
//Emplenado operadores como palabras (delete), en los diccionarios

function miDiccionario2(){ // se crea una funcion
    var Animal2={
        Especi: "Vaca",
        Color: "blanca",
        Raza: "Unica",
        Edad: 4,
        Sonido: "Muuu"
    };// creamos un diccionario con algunas caracteristicas de una vaca
    delete Animal2.Sonido;//empleamos el operador como palabras (delete)
    document.getElementById("miDiccionario2").innerHTML=Animal2.Sonido;//observamos el comportamiento del diccionario al llamas al sonido del animal
}
//Empleando el operador tipo de
document.write(typeof "palabra");
document.write(typeof 3);

//Empleando coercion
document.write("10"+5);
