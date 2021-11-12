// Esta variable mantiene la pista a seguir
let activePlayer = 'X';

//Esta matriz almacena una matriz de movimientos. Utilizamos esto para determinar las condiciones de victoria
let selectedSquares = [];

//Esta funcion es para colocar una x o o en el cuadro
function placeXOro(squareNumber){
    //esta condicion asegura qye el cuadro aun no este seleccionado 
    //el metodo some es usado para revisar cada elemento del cuandro seleccionado o si las condiciones del cuadro son clickeadas
    if(!selectedSquares.some(element => element.includes(squareNumber))){
        //esta variable recupera el elemento del html que fue clikeado
        let select = document.getElementById(squareNumber);
        //esta condicion revisa de quien es el turno
        if(activePlayer === 'X'){
            //esta x es igual a la x del png
            select.style.backgroundImage = 'url("images/x.png")';
            //activa la x o o , si no es x debe ser o
        }else{
            //esta x es igual a la o del png
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //se concatenan esta dos variables y se agrega un array
        selectedSquares.push(squareNumber+activePlayer);
        //se llama a la funcion para revisar el ganador segun las condiciones
        checkWinConditions();
        //esta condicion es para cambiar el jugador activo
        if(activePlayer === 'X'){
            //si el jugador activo es x, cambia a o
            activePlayer = 'O';
            //si el jugador activo es otro que no sea x
        }else{
            //cambia al jugador activo a x
            activePlayer = 'X';
        }
        //Esta condicion es del sonido
        audio('./media/place.mp3');
        //esta funcion revisa si es el turno de la compu
        if(activePlayer === 'O'){
            //esta condicion desabilita el click para la eleccion de la computadora
            disableClick();
            //esta funcion espera 1 seg despues de la imagen de la compu y habilita el click
            setTimeout(function(){computersTurn();},1000)
        }
        //retorna verdadro si es necesario trabajar con la funcion
        return true;
    }
    //esta funcion resulta en un cuadro aleatorio 
    function computersTurn(){
        //este boleano es necesrio para el loop
        let success = false;
        //esta funcion reserva un numero aleatorio de 0-8
        let pickASquare;
        //esta funcion permite a nuestro while seguir tratando si nuestro cuadro esta seleccionado
        while(!success){
            //un numero aleatorio en medio de 0 y 8 es seleccionado
            pickASquare - String(Math.floor(Math.random() * 9));
            //si el numero aleatorio evalua un return true, el cuadro ya no estara seleccionado
            if(placeXOro(pickASquare)){
                //esta linea llama la funcion
                placeXOro(pickASquare);
                //este cambia nuestro boleano y finaliza el loop
                success = true;
            };
        }

    }


}

//Esta funciona analiza el cuadro seleccionadod y escoge al ganadaro segun las condiciones
//la funcion de la linea ganadora es llamada dibujo linea si la condicon es conocida

function checkWinConditions(){
    //todas las combinaciones posibles
         if (arrayIncludes('0X','1X','2X')) {drawWinLine(50,100,558,100)}
    else if (arrayIncludes('3X','4X','5X')) {drawWinLine(50,304,558,304)}
    else if (arrayIncludes('6X','7X','8X')) {drawWinLine(50,508,558,508)}
    else if (arrayIncludes('0X','3X','6X')) {drawWinLine(100,50,100,558)}
    else if (arrayIncludes('1X','4X','7X')) {drawWinLine(304,50,304,558)}
    else if (arrayIncludes('2X','5X','8X')) {drawWinLine(508,50,508,558)}
    else if (arrayIncludes('6X','4X','2X')) {drawWinLine(100,508,510,90)}
    else if (arrayIncludes('0X','4X','8X')) {drawWinLine(100,100,520,520)}
    else if (arrayIncludes('0O','1O','2O')) {drawWinLine(50,100,558,100)}
    else if (arrayIncludes('3O','4O','5O')) {drawWinLine(50,304,558,304)}
    else if (arrayIncludes('6O','7O','8O')) {drawWinLine(50,508,558,508)}
    else if (arrayIncludes('0O','3O','6O')) {drawWinLine(100,50,100,558)}
    else if (arrayIncludes('1O','4O','7O')) {drawWinLine(304,50,304,558)}
    else if (arrayIncludes('2O','5O','8O')) {drawWinLine(508,50,508,558)}
    else if (arrayIncludes('6O','4O','2O')) {drawWinLine(100,508,510,90)}
    else if (arrayIncludes('0O','4O','8O')) {drawWinLine(100,100,520,520)}
    //EL cuadro es seleccionado para ejecutare el codigo
    else if (selectedSquares.length >= 9){
        //esta funcion da sonido
        audio('./media/tie.mp3');
        // esta funcion pone durante tres egundos despues de resetear el juego
        setTimeout(function() {resetGame();},1000);
    }

    function arrayIncludes(squareA, squareAB, squareC){
        //Estas 3 variables seran usadas para revisarlas
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareAB)
        const c = selectedSquares.includes(squareC)
        //si las 3 variables pasan todas son incluidas innuestro array verdadero
        //regresa y nuestra condiucion executa la funcion de linea ganadora 
        if(a === true && b === true && c === true){ return true} 
    }
}

function disableClick(){
    //esta hace nuestro body unclicleable
    body.style.pointerEvents = 'none';
    setTimeout(function(){body.style.pointerEvents = 'auto';},1000);
}

//esta funcion toma un parametro de string de el camino colocado mas temprano
//colocacion de sonido
function audio(audioURL){
    //creamos un nuevo objeto de audio y pasamos el camino como parametro
    let audio = new Audio(audioURL);
    //prueba el metodo con el audio
    audio.play();
}
//esta funcion utiliza el contenedor drawline
function drawWinLine(coordX1, coordY1, coordX2, coorY2){
//esta linea accede al contenedor de nuestroHTML y propiedades a usar
const canvas = document.getElementById('win-lines')
//esta liena da acceso a los metods y propiedades de canvas
const c = canvas.getContext('2d');
//esta liena indica donde empeza 
let xl = coordX1,
yl = coordY1,
x2 = coordX2,
y2 = coorY2,
x = xl,
y = yl;
//funcion que interactua con canvas
function animateLineDrawing(){
//esta variable crea un loop
const animationLoop = requestAnimationFrame(animateLineDrawing);
//este metodo limpia el contenido de la ultima interacion
c.clearRect(0,0,608,608)
//este metodo empieza una nueva path
c.beginPath();
//este metodo los mueve  a un puneto de la linea
c.moveTo(xl,yl)
//este metodo indica donde termona la linea
c.lineTo(x,y)
//este metodo coloca la liena al final
c.lineWidth = 10;
//este metodo le da color a la linea
c.strokeStyle = 'rgba (70, 255, 33, .8)';
//este metodo dibuja todo lo que puso encima
c.stroke();
//esta condicon revisa si fueron alcanzados por el punto final
if (xl <= x2 && yl <= y2){
    //esta condicion agrega 10 a la previo punto x
    if (x < x2){x +=10;}
    if (y < y2){y += 10;}
    //esta animacionn cancela la animacion loop
    if (x >= x2 && y >= y2){cancelAnimationFrame(animationLoop);}
}
//esta condicion es similar a el a poner uno encima
//esto es necesario para eh 642 condicion de ganar
if(xl <= x2 && y1 >= y2){
    if (x < x2){ x += 10;}
    if (y > y2){ y -= 10;}
    if (x >= x2 && y <= y2){cancelAnimationFrame(animationLoop);}
}

}

//esta funcion limpia el canvas despues de ganar

function clear(){
    //esta linea empieza la animaciond e loop
    const animationLoop = requestAnimationFrame (clear);
    //esta linea limpia el canvas
    c.clearRect (0,0,608,608);
    cancelAnimationFrame(animationLoop);
}

//esta liena desabilita el click mientra el sonido del ganador suena
disableClick();
//esta liena es el sonido ganador
audio('./media/WinGame.mp3');
//esta liena llama a la animacion main loop
animateLineDrawing();
//esta liena espera 1 seguno, luego limpia el cambas y reseta el juego y permite hacer click de nuevo
setTimeout(function(){clear(); resetGame ();},1000);



}
//esta funcion resetea el juego
function resetGame(){
//esta interacion itera hasta el html
for (let i = 0; i < 9; i++){
    let square = document.getElementById(String(i))
    //esta remueve los elementos del background
    square.style.backgroundImage = ''
}
//esta reseta nuesatro array solo si esta vaciono puede emepezar
selectedSquares = [];
}