//Diccionario de datos de Java script
var dog = {name: "Dax", breed: "Great Pyrenees", color: "White"};
//convertimos el objeto java aun formato string
var JSONstring = JSON.stringify(dog);


//convertimos el json scritp a js objeto
var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');

//metodo de almacenamiento local
localStorage.setItem("Name","Dax");

//esta funcion obtiene la tarea del input
function get_todos(){
    //esto crea un array de las tareas que fueron inpuestas
    var todos = new Array;
    //esta empuja la tarea que fue guardada in la menoria del buscador
    var todos_str = localStorage.getItem('todo');
    //si lo que tiene el input es nulo, entonces se comunicara con el buscador web para hacer
    //la tarea del objeto de java
    if(todos_str !== null){
        todos = JSON.parse(todos_str);
    } return todos;
}

//esta funcion agreag una tarea input al array gettodos
function add(){
    //esto toma lo que fue ingresado y crea una variable de ella
    var task = document.getElementById('task').value;
    var todos = get_todos();
    //estp agrega una nueva tarea y el final del array
    todos.push(task);
    //esto convierte la tarea input a un JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();
    return false;
}
//esta funcion mantiene las tareas permanetes en la pantalla
function show(){
    //esto coloca las tareas que fueron recuperados como una variable
    var todos = get_todos();
    //esto se coloca en cada tarea como una lista desordenada
    var html = '<ul>';
    //esto muestra una tarea a la lista in el orden que fue ingresada
    for(var i = 0; i<todos.length; i++){
        //esto muestra la tarea como una lista y crea el boton con la x
        html += '<li>'+todos[i]+'<button class ="remove" id = "' +i+'">x</button></li>'
    };
    html+='</ul>';
    //estro muestra la tarea como una lista
    document.getElementById('todos').innerHTML = html;
    //esto le dice al buscador que muestre todo el array de los que gueron borrados
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i<buttons.length; i++){
        buttons[i].addEventListener('click', remove);
    }
}

//esto muestra la tarea  que fue ingresada cuando se agrego item al dar click
document.getElementById('add').addEventListener('click',add);
//esto mantendra las entradas mostradas permanentemente sobre la pantalla
show(); 

function remove(){
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    //esto se muestra como la pantalla quita cada elmemnto de la pantalla
    show();
    return false;

}

