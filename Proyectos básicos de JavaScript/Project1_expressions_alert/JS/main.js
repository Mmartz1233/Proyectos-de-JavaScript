alert("Hola soy main JS")
//metodo alert
window.alert("Hola mundo, soy window")
document.write('Hola mundo, soy document')
var y = "Esto es una cadena"
var y = y.fontcolor("yellow");
document.write(y);
var x = "soy alert en una variable"
alert(x);
document.write("lisa told Bart, \"Knock it Off, Bart! or i'll tell dad!\"<br> \"Eat my shorts!\"Bart responded");
document.write("\"Sé quien eres y di lo que sientes"
+ "porque a  los que les importa no importan y a los que importan no les importa \""
+"Seuss");
//concatenando variables
var b = "concatenar"+"String"
var b = b.fontcolor("pink");
document.write(b)

var family = "Martz", Dad = "Daniel", Mom ="Casilda", Brother = "Alexis";
var family = family.fontcolor("red");

document.write(family);

var azul = "soy de color azul";
var azul = azul.fontcolor("blue");
document.write(azul);
//expresion
var suma = 3 + 4;
var num1 = 3;
var num2 = 6;
var mult = num1 *num2;
//concatenando variables
document.write(mult,suma);
//creando una funcion, para poner el resultado de la variable dentro del elemento HTML con texto verde en el ID
function miPrimeraFuncion(){
    var str="Este es un texto verde";
    var result = str.fontcolor("green");
    document.getElementById("Texto_verde").innerHTML = result;
}

//creando un evento de fecha
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }