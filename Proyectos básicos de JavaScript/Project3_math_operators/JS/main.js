// FUNCIONES CON PASO DE PARAMETROS

//creando una funcion de multiplicacion
function miSegundaFuncion(p1, p2){  
return p1 * p2;
}

// creando funcion de resta
function restaFuncion(x1, x2){
    return x1 - x2;
    
}
function multFuncion(x1, x2){
    return x1 * x2;
    
}
function divFuncion(x1, x2){
    return x1 / x2;
    
}

// FUNCIONES CON EVENTOS
//ejemplo resta sin paso de parametros
function RestaFunc (){
    var restando = 5-2;
    document.getElementById("Mat").innerHTML = restando;
}

function multiplicacion(){
    var mul= 6*8;
    document.getElementById("Mat1").innerHTML = mul;
}

function divicion(){
    var div = 48/6;
    document.getElementById("Mat2").innerHTML = div;

}
function masMath(){
    var simpleMat = (1+2) * 10 /2-5;
    document.getElementById("Mat3").innerHTML = simpleMat;
}

function operadormodulo(){
    var op = 25 % 6;
    document.getElementById("Mat4").innerHTML = op;
}

function negacion(){
    var ex = 10;
    document.getElementById("Mat5").innerHTML = -ex;
}

/// iNCREMENTOS Y DECREMENTOS 
var x =5;
x++;
document.writeln("El incremento de cinco es: "+x);

var y = 4.5;
y--;
document.writeln("El decremento de cuatro punto cinco es : "+y);

// Funcion Random
window.alert(Math.random());
window.alert(Math.random() * 100); // muestra un num aleatorio entre 0 y 100

// Definiendo un Objeto
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  const Mathz = {
    suma: 10+5,
    resta : 10-5,
    mult : 10*5,
    div: 10/5,
    moudulo: 10%5,
    aleatorio: Math.random(),
    fullName : function() {
      return this.suma + " / " + this.resta +" / " + this.mult +" / " + this.div +" / " + this.moudulo+" / " + this.aleatorio;
    }
  };
