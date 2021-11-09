//Emplenado operadores ternarios
document.write(Bigger = (5>1) ? "El de la hizquierda es mas grande":"El de la deraha es mas grande");

//Empleando operadores ternarios coN funciones
function RideFuncion(){
    var Altura, Can_ride;
    Altura = document.getElementById("Altura").value;
    Can_ride = (Altura < 52) ? "Eres mas chaparro":"Eres mas alto";
    document.getElementById("Ride").innerHTML = Can_ride + " de la carrera";
}

function votar(){
    var voto, puede_votar;
    voto = document.getElementById("voto").value;
    puede_votar = (voto > 18) ? "Puede votar ":"No puede votar";
    document.getElementById("votomex").innerHTML = puede_votar;
}
//Empleando constructores y palabras reservadas
function vehiculo(Make, Model, Year, Color){
    this.vehiculo_make = Make;
    this.vehiculo_model = Model;
    this.vehiculo_year =Year;
    this.vehiculo_color = Color;
}
var may = new vehiculo("Dodge", "Viper", 2020, "Red");
var Alexis = new vehiculo("Jeep", "Trail", 2019, "White");
var Casi = new vehiculo("Ford", "Pinto", 1971, "Mustard");

function miFuncion(){
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "May maneja un "+ may.vehiculo_color + "color"+ may.vehiculo_model + 
    "fabricado en "+ may.vehiculo_year;
}
// Creando otro constructor
function person(nombre, edad, nacionalidad){
    this.nombre_persona= nombre;
    this.edad_persona = edad;
    this.nacionalidad_persona = nacionalidad;
}
// creo dos nuevos objetos
var madre = new person("Casi",53, "Mexicana");
var padre = new person("Dan",63, "Mexicano");
//muestro la edad

function mostrar(){
document.getElementById("Demo").innerHTML = "Mi madre tiene " + madre.edad_persona +"años, y mi padre" + padre.nombre_persona +" tiene "
+padre.edad_persona;
}

//cREANDO FUNCIONES ANIDADAS
function contarFunc(){
    document.getElementById("Funcion_anidada").innerHTML = CountFunc();
    function CountFunc(){
        var empezar = 9;
        function MasUno(){
            empezar +=1;
        } MasUno();
        return empezar;
    }
}