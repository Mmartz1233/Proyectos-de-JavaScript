
//Empleando el operador tipo de
document.writeln(typeof "palabra");
document.write(typeof 3);
//Empleando coercion
document.write("10"+5);

//empleando NAN
function miFuncion(){
    document.getElementById("Test").innerHTML=0/0;   
}

function miFuncion1(){
    document.getElementById("Test1").innerHTML=isNaN('Esto es una cadena');
}

function miFuncion2(){
    document.getElementById("Test2").innerHTML=isNaN('007');
}
//empleando la funcion Not
function NotFunction(){
    document.getElementById("Not").innerHTML=!(20>10);
}

//Empleando numeros infinitos
document.writeln("   Numero: "+2E310);

//Empleando numeros infinitos negativos
document.writeln("   Numero: "+ -2E310+" Negativo/");

//Obteniedo valores boleanos
document.writeln( 10>2);
document.write(10<2);

//empleando console.log
console.log(2+2); // resultado en consola de navegador 4
console.log(10<2); // resultado en consola de navegador falso

//empleando el signo igual igual
document.writeln( 10==2);

//Emplenado el signo igual igual
x=10;
y=10;
document.writeln(x===y);

w=10;
s="10";
document.writeln(w===s);

//empleando operadores logicos booleanos
document.write(5>2 && 10>4);
document.write(5>10 || 10<4);