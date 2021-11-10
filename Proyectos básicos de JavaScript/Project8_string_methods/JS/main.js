//utilizando el metodo concatenar
function sentencia(){
    var part1 = "i have";
    var part2 = "made this";
    var part3 = "into a complete";
    var part4 = "sentence";
    var wholesencence = part1.concat(part2,part3,part4);
    document.getElementById("concatenando").innerHTML = wholesencence;
}
//utilizando el metodo slice
function sliceMet(){
    var sentencia = "All work and no play makes Johny a dull boy";
    var seccionaextraer = sentencia.slice(27,33);
    document.getElementById("slice").innerHTML = seccionaextraer;
}

// utilizando to uppercase
function uppercase(){
var text = "Convertir a mayusculas";
document.getElementById("demo").innerHTML = text.toUpperCase();
}

//utilizando search
function searchfun(){
var text = "My name is Mayra";
document.getElementById("demo1").innerHTML = text.search("Mayra");
}

//utilizando metodos toString
function stringFunc(){
    var x =182;
    document.getElementById("numstostring").innerHTML = x.toString();
}

//Utilizando metodo de presicion
function presicion(){
    var y = 12.2323232132113;
    document.getElementById("presicion").innerHTML = y.toPrecision(10);
}

//Utilizando metodo toFixed
function fixFunc(){
    var y = 12.2323232132113;
    document.getElementById("fix").innerHTML = y.toFixed(2);
}

//Utilizando metodo valueOf 
function valueofFunc(){
    var y = 12.2323232132113;
    document.getElementById("VO").innerHTML = y.valueOf();
}
