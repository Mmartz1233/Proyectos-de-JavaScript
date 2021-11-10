//Utilizando el atributo defer
//alert(document.getElementById("p2").innerHTML);


//Utilizando el ciclo  while
function contFunc(){
    var digit = "";
    var x = 1;
    while(x < 11){
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("cuentadiez").innerHTML = digit;
}

//Utilizando longitud de cadena
function longitudTextoFunc(){
    var text = "Cuenta palabras";
    document.getElementById("demos").innerHTML = text.length;
}

//Utilizando el ciclo for
var instrumens = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var contador = "";
var y;
function cicloforFunc() {
    for (y = 0; y <instrumens.length; y++) {
       
       contador += instrumens[y] + "<br>";
    }
    document.getElementById("listadeinstrumentos").innerHTML = contador;
   
}

// Creando matrices
function catimages(){
    var gatos = [];
    gatos[0]="Durmiendo";
    gatos[1]="Jugando";
    gatos[2]="Comiendo";
    gatos[3]="Ronroneando";
    document.getElementById("cat").innerHTML = "En esta imagen el gato esta "+ gatos[2];
}

//empleando constantes
function consFunc(){
    const Musical_Instrument = {type:"guitarra", brand:"Fender", color: "black"};
    Musical_Instrument.color = "Blue";//valor de propiedad modificado
    Musical_Instrument.price = "200"; //valor de propiedad agregado
    document.getElementById("cons").innerHTML="the cost of the  "+Musical_Instrument.type+ " was "+Musical_Instrument.price;
}

//Utlizando la palabra reservada let

var x=82;
document.write(x);
{
    let x=33;
    document.write("<br>" + x );
}
document.write("<br>" + x);

//Utilizando funciones de retorno
function retornFunc(name){
    return "Hello " + name;
}

//un objeto con propiedades y un método
let carro ={
    marca: "Dodge",
    modelo: "Viper",
    yaer: "2021",
    color: "red",
    descripcion: function(){
        return "El carro es del "+ this.yaer+ " de color "+this.color+ "y modelo "+this.modelo;
    }
};

//Utilizando break
let textobreak = "";
for (let i = 0; i < 10; i++){
    if (i === 7){ break; }
    textobreak += "El numero es "+ i + "<br>";
}

//Utilizando continue (se salta el numero especificado)
let textoconinue = "";
for(let a = 0; a < 10 ; a++){
    if(a == 5){continue;}
    textoconinue += "El numero es "+ a + "<br>";

}














