//creamos una nueva liena que mantenga  la evaluacion de cinta
const Calculator = {
    //este muestra cero en la pantalla
    Display_Value:'0',
    //este sostendra la primera operacion para ninguna expresion, se colocara null para un nuevo
    First_Operand: null,
    //este revisara lo que se ingrese
    Wait_Second_Operand:false,
    //este sostendra al operador
    operator: null,
};
//Esta modifica el valor en cada tiempo de un boton al hacer click
function Input_Digit(digit){
    const {Display_Value, Wait_Second_Operand} = Calculator;
    //se revisa si el operador de espara unsegundo es vervadero y 
    //mostrara el valor que fue clikeado
    if (Wait_Second_Operand === true){
        Calculator.Display_Value =digit;
        Calculator.Wait_Second_Operand = false;
    }else{
        //esto se sobre escribe en e;l valor de la pantalla  en el valor de cero
        Calculator.Display_Value = Display_Value === '0' ? digit: Display_Value + digit;
    }
}

//esta seccion de menos puntos decimales
function Input_Decimal(dot){
    //esta asegura un click accidental de el punto decimal
    //no causa errores en tu operacion
    if(Calculator.Wait_Second_Operand=== true)return;
    if(!Calculator.Display_Value.includes(dot)){
        //se espera aa agregar un punto decimal
        Calculator.Display_Value += dot;
    }
    
}

//seccion de operadores
function Handle_Operator(Netx_Operator){
    const{First_Operand, Display_Value, operator} = Calculator
    //cuando el operador es presionado se converite en el numero actual
    //se muestra en la pnatalla y luego el resultado in la funcion calculadora
    const Value_of_Input = parseFloat(Display_Value);
    //revisa si el operador existe y si el operador de segundos es true
    //se actualiza el operador y existe desde la funcion
    if (operator && Calculator.Wait_Second_Operand){
        Calculator.operator = Netx_Operator;
        return;
    }
    if (First_Operand == null){
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { // revisa si el operador existe
        const Value_Now = First_Operand || 0;
        //si el operador existe la propiedad busca si esta realizado por el operador
        //el operador perfor_cal y la funcion coinciden el operador se ejecuta
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //AHI SON sumador y cambiados por un monto de numero decimales
        result = Number(result).toFixed(9)
        //esto removera cualquier rastro 0 
        result = (result *1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);

    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator =Netx_Operator;
}


const Perform_Calculation = {
    '/':(First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*':(First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+':(First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-':(First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=':(First_Operand, Second_Operand) => Second_Operand

};

function Calculator_Reset(){
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//esta funcion actualiza el contenido de las pantallas

function Update_Display(){
    const display = document.querySelector('.calculator-screen');
    display.value =Calculator.Display_Value;
}
Update_Display();

// esta seccion del click en ,os monitors
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //el objetivo es un objeto que representa un elemento al hacerle click
    const{ target} = event;
    //si el objetivo es cliekeado existe una funcion
    if(!target.matches('button')){
        return;
    }

    if(target.classList.contains('operator')){
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')){
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //Asegura que AC limpia los munero de la calculadora
    if(target.classList.contains('all-clear')){
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();

})