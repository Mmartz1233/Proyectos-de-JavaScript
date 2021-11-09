// declarando variables globales
var x = 10;
function sumandoNumeros(){
    document.write(20 + x+ "<br> " );
}
function sumandoNumeros2(){
    document.write(x + 100+ "<br> ");
}
 // el resultado de los numeros son mostrados en pantalla
sumandoNumeros();
sumandoNumeros2();

//declarando variables locales
function sumandoNumeros3(){
    var e = 14;
    document.write(20 + e +" <br>");
    console.log(15 + e)

}
function sumandoNumeros4(){
    document.write(e+100);
    console.log(100 + e)
}
 sumandoNumeros3();
 sumandoNumeros4();

 //Usando condicionales
 function EdadFunc(){
     if(new Date().getHours() <18){
         document.getElementById("calculando").innerHTML = "la hora es menor ";
     }
 }

 //Haciendo uso de condiciones else
 function edadFuncion(){
    //var edad;
    edad = document.getElementById("edad").value;
     if(edad >= 18){
         vote = "ya puedes votar";
     }else{
         vote ="no puedes votar";
     }document.getElementById("Cuantos_años_tienes?").innerHTML = vote;
 }
 // Haciendo uso de "else if"
 function tiempoFun(){
     var time = new Date().getHours();
     var reply;
     if(time < 12 == time > 0){
         reply = "es de mañana";
     }else if (time>= 12 == time <18){
         reply="ya es tarde";
     }else{
         reply="ya es noche";
     }
     document.getElementById("tiempo_dia").innerHTML= reply;
 }